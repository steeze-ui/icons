import {
	writeFile,
	createWriteStream,
	readdirSync,
	readFileSync,
	existsSync,
	rmSync,
	mkdirSync,
	writeFileSync
} from 'fs'
import { join } from 'path'
import { EOL } from 'os'
import pascalcase from 'pascalcase'
import { parse } from 'html-parse-stringify'

let svgDict: {
	[iconName: string]: {
		[theme: string]: any
	}
} = {}
const libDir = './src/lib'
const exportsFile = 'index.js'

interface Options {
	extendSvgAttributes?: { [key: string]: string }
	excludeSvgAttributes?: string[]
}

export function createLibIcons(inputThemesDir: string, outputLibDir: string, options: Options) {
	// check if input dir exists
	if (!existsSync(inputThemesDir)) {
		console.log('No themes directory found')
		return
	}
	// check if default theme dir exists
	if (!existsSync(join(inputThemesDir, 'default'))) {
		console.log('No default theme found')
		return
	}

	// clear output dir if exists
	if (existsSync(join(libDir, outputLibDir))) {
		rmSync(join(libDir, outputLibDir), { recursive: true })
	}
	if (existsSync(join(libDir, exportsFile))) {
		rmSync(join(libDir, exportsFile), { recursive: true })
	}

	// create output dir
	mkdirSync(join(libDir, outputLibDir))

	//collect svg in dict
	readdirSync(inputThemesDir).forEach((theme) => {
		getIconsFromTheme(inputThemesDir, theme, options)
	})

	//write svg dict to files
	writeSvgDict(outputLibDir)

	// write module exports
	writeExportsModule(outputLibDir)
}

function getIconsFromTheme(outputExports: string, theme: string, options: Options) {
	let usedAttrsDict: { [key: string]: string[] } = {}
	readdirSync(join(outputExports, theme)).forEach((fileName) => {
		const key = pascalcase(fileName.replace('.svg', ''))
		const data = readFileSync(join(outputExports, theme, fileName)).toString()
		const svgAst: any = parse(data)[0] as any

		if (!svgDict[key]) {
			svgDict[key] = {}
		}

		svgDict[key][theme] = { a: svgAst.attrs }

		if (options.excludeSvgAttributes) {
			options.excludeSvgAttributes.forEach((attr) => {
				delete svgDict[key][theme]['a'][attr]
			})
		}
		if (options.extendSvgAttributes) {
			svgDict[key][theme]['a'] = Object.assign(
				svgDict[key][theme]['a'],
				options.extendSvgAttributes
			)
		}

		const childTags = svgAst.children.filter((e: any) => {
			return e.type != 'text'
		})

		let tagsDict: { [key: string]: { [key: string]: string }[] } = {}

		childTags.forEach(
			({
				name,
				attrs,
				children
			}: {
				name: string
				attrs: { [key: string]: string }
				children: { name: string; attrs: { [key: string]: string } }[]
			}) => {
				if (name === 'g') {
					if (children) {
						children.forEach((child) => {
							child.attrs = Object.assign(attrs, child.attrs)

							if (!tagsDict[child.name]) {
								tagsDict[child.name] = []
							}
							tagsDict[child.name].push(child.attrs)
						})
					}
				} else {
					if (!tagsDict[name]) {
						tagsDict[name] = []
					}
					tagsDict[name].push(attrs)
				}
			}
		)

		svgDict[key][theme] = Object.assign(svgDict[key][theme], tagsDict)

		Object.keys(tagsDict).forEach((tagName) => {
			if (!usedAttrsDict[tagName]) {
				usedAttrsDict[tagName] = []
			}
			tagsDict[tagName].forEach((attrs) => {
				Object.keys(attrs).forEach((attr) => {
					if (!usedAttrsDict[tagName].includes(attr)) {
						usedAttrsDict[tagName].push(attr)
					}
				})
			})
		})
	})

	Object.keys(usedAttrsDict).forEach((tagName) => {
		console.log('theme:', theme)

		console.log(`   <${tagName}>`, usedAttrsDict[tagName])
	})
	console.log('')
}

async function writeSvgDict(outputIcons: string) {
	Object.keys(svgDict).forEach((name) => {
		writeFile(
			join(join(libDir, outputIcons), `${name}.js`),
			'export default ' + JSON.stringify(svgDict[name]),
			(_err: any) => {}
		)
	})
}

function writeExportsModule(outputIcons: string) {
	const logger = createWriteStream(join(libDir, exportsFile), {
		flags: 'a'
	})
	let exports = Object.keys(svgDict)
		.map((name) => {
			return `export {default as ${name}} from "./${join(outputIcons, name + '.js')}"`
		})
		.join('\n')
	logger.write(exports)
	logger.write(EOL)
	logger.end()
}

export function createThemesFromSuffix(
	inputDir: string,
	outputDir: string,
	themesMap: { [key: string]: string }
) {
	if (!existsSync(join(inputDir))) {
		console.log('No input directory found')
		return
	}
	if (existsSync(join(outputDir))) {
		rmSync(join(outputDir), { recursive: true })
	}
	mkdirSync(join(outputDir))

	const unrecognizedFiles: string[] = []
	readdirSync(join(inputDir)).forEach((fileName) => {
		const detectedTheme = Object.keys(themesMap).find((key) => fileName.includes(key))
		if (detectedTheme) {
			const data = readFileSync(join(inputDir, fileName)).toString()
			if (!existsSync(join(outputDir, themesMap[detectedTheme]))) {
				mkdirSync(join(outputDir, themesMap[detectedTheme]))
			}
			writeFileSync(
				join(outputDir, themesMap[detectedTheme], fileName.replace(detectedTheme, '')),
				data
			)
		} else {
			unrecognizedFiles.push(fileName)
		}
	})
	if (unrecognizedFiles.length > 0) {
		console.log('Unrecognized files:', unrecognizedFiles.join(', '))
	}
}

export function createThemesFromDir(
	inputDir: string,
	outputDir: string,
	dirToThemesMap: { [key: string]: string }
) {
	if (!existsSync(join(inputDir))) {
		console.log('No input directory found')
		return
	}
	if (existsSync(join(outputDir))) {
		rmSync(join(outputDir), { recursive: true })
	}
	mkdirSync(join(outputDir))

	Object.keys(dirToThemesMap).forEach((themeDir) => {
		if (!existsSync(join(inputDir, themeDir))) {
			console.log(`No input directory for theme ${themeDir} found`)
			return
		}
		const outputThemeDir = dirToThemesMap[themeDir]

		readdirSync(join(inputDir, themeDir)).forEach((fileName) => {
			const data = readFileSync(join(inputDir, themeDir, fileName)).toString()
			if (!existsSync(join(outputDir, outputThemeDir))) {
				mkdirSync(join(outputDir, outputThemeDir))
			}
			writeFileSync(join(outputDir, outputThemeDir, fileName), data)
		})
	})
}
