import {
	writeFile,
	createWriteStream,
	readdirSync,
	readFileSync,
	existsSync,
	rmSync,
	mkdirSync
} from 'fs'
import { join } from 'path'
import { EOL } from 'os'
import pascalcase from 'pascalcase'
import { parse } from 'html-parse-stringify'

let svgDict = {}
const libDir = './src/lib'
const exportsFile = 'index.js'

export function createIcons(inputIconThemes, outputIcons) {
	// check if input dir exists
	if (!existsSync(inputIconThemes)) {
		console.log('No themes directory found')
		return
	}
	// check if default theme dir exists
	if (!existsSync(join(inputIconThemes, 'default'))) {
		console.log('No default theme found')
		return
	}

	// clear output dir if exists
	if (existsSync(join(libDir, outputIcons))) {
		rmSync(join(libDir, outputIcons), { recursive: true })
	}
	if (existsSync(join(libDir, exportsFile))) {
		rmSync(join(libDir, exportsFile), { recursive: true })
	}

	// create output dir
	mkdirSync(join(libDir, outputIcons))

	//collect svg in dict
	readdirSync(inputIconThemes).forEach((theme) => {
		getIconsFromTheme(inputIconThemes, theme)
	})

	//write svg dict to files
	writeSvgDict(outputIcons)

	// write module exports
	writeExportsModule(outputIcons)
}

export function getIconsFromTheme(outputExports: string, theme: string) {
	let allChildTags = 0
	let usedChildTags = 0
	readdirSync(join(outputExports, theme)).forEach((fileName) => {
		const key = pascalcase(fileName.replace('.svg', ''))
		const data = readFileSync(join(outputExports, theme, fileName)).toString()
		const svgAst: any = parse(data)[0] as any

		if (!svgDict[key]) {
			svgDict[key] = {}
		}

		svgDict[key][theme] = { a: svgAst.attrs }

		const childTags = svgAst.children.filter((e) => {
			return e.type != 'text'
		})
		allChildTags += childTags.length

		const pathAttrs = childTags.filter((e) => e.name === 'path').map((e) => e.attrs)
		usedChildTags += pathAttrs.length
		const rectAttrs = childTags.filter((e) => e.name === 'rect').map((e) => e.attrs)
		usedChildTags += rectAttrs.length
		const circleAttrs = childTags.filter((e) => e.name === 'circle').map((e) => e.attrs)
		usedChildTags += circleAttrs.length

		svgDict[key][theme].path = pathAttrs
		svgDict[key][theme].rect = rectAttrs
		svgDict[key][theme].circle = circleAttrs
	})
	console.log(`${theme}: ${usedChildTags}/${allChildTags} child tags collected`)
}

export async function writeSvgDict(outputIcons: string) {
	Object.keys(svgDict).forEach((name) => {
		writeFile(
			join(join(libDir, outputIcons), `${name}.js`),
			'export default ' + JSON.stringify(svgDict[name]),
			(err: any) => {}
		)
	})
}

export function writeExportsModule(outputIcons: string) {
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
