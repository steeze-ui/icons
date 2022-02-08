import {
	createWriteStream,
	existsSync,
	lstatSync,
	mkdirSync,
	readdirSync,
	readFileSync,
	rmSync,
	writeFileSync
} from 'fs'
import { parse } from 'html-parse-stringify'
import { EOL } from 'os'
import { extname, join } from 'path'
import { kebabcase } from './utils/kebabcase'
import { pascalcase } from './utils/pascalcase'

type SuffixToThemeMap = { [key: string]: string }
type DirToThemeMap = { [key: string]: string }

interface ThemeBuilderProperties {
	sources: (
		| {
				collectFromSuffix: SuffixToThemeMap
				collectFromDir?: never
				fallbackTheme?: string
		  }
		| {
				collectFromDir: DirToThemeMap
				collectFromSuffix?: never
				fallbackTheme?: never
		  }
		| {
				[K in any]: never
		  }
	) & {
		inputRaw?: string
		outputThemes?: string
	}
	lib: {
		output?: string
		exportsFileName?: string
		typesInputFile?: string
		extendSvgAttributes?: { [attribute: string]: string }
		excludeSvgAttributes?: string[]
	}
}

interface ASTNode {
	name: string
	type: string
	attrs: { [key: string]: string }
	children: ASTNode[]
}

interface SourceDict {
	[iconName: string]: {
		[theme: string]: any
	}
}

interface ElementTagDict {
	[elementTag: string]: ASTNode['attrs'][]
}

const defaultProps: {
	sources: Partial<ThemeBuilderProperties['sources']>
	lib: Partial<ThemeBuilderProperties['lib']>
} = {
	sources: {
		inputRaw: '',
		outputThemes: './themes'
	},
	lib: {
		output: './src/lib',
		exportsFileName: 'index.ts',
		typesInputFile: './node_modules/@steeze-ui/icons/shared/types/types.d.ts'
	}
}

export class ThemeBuilder {
	private props: ThemeBuilderProperties
	private exportsFilePath: string
	private unrecognizedSuffixes: string[] = []
	private sourceDict: SourceDict = {}
	private typesOutputFile = 'types.d.ts'

	constructor(props: ThemeBuilderProperties) {
		props.lib = Object.assign(defaultProps.lib, props.lib)
		props.sources = Object.assign(defaultProps.sources, props.sources)

		this.props = props

		this.exportsFilePath = join(props.lib.output!, props.lib.exportsFileName!)
	}

	build() {
		const { outputThemes, collectFromDir, collectFromSuffix } = this.props.sources

		//collect themes
		if (collectFromDir) {
			console.log('Collecting Sources from directory')
			this.collectFromDir()
		}
		if (collectFromSuffix) {
			console.log('Collecting Sources from suffix')
			this.collectFromSuffix()
		}

		// check if input dir exists
		if (!existsSync(outputThemes!)) {
			console.log('No themes directory found')
			return
		}
		// check if default theme dir exists
		if (!existsSync(join(outputThemes!, 'default'))) {
			console.log('No default theme found')
			return
		}

		// // clear output dir if exists
		if (!existsSync(this.props.lib.output!)) {
			mkdirSync(this.props.lib.output!, { recursive: true })
		}
		// clear output exports file (index.js) if exists
		if (existsSync(this.exportsFilePath)) {
			rmSync(this.exportsFilePath, { recursive: true })
		}

		//collect svg in dict
		readdirSync(outputThemes!).forEach((theme) => {
			this.getIconsFromTheme(theme)
		})

		// write module exports
		this.writeExportsFile()

		this.copyTypesFile()
	}

	private copyTypesFile() {
		const typesOutputPath = join(this.props.lib.output!, this.typesOutputFile!)

		if (!existsSync(join(this.props.lib.typesInputFile!))) {
			console.log('No types file found')
			return
		}

		if (existsSync(typesOutputPath)) {
			rmSync(typesOutputPath, { recursive: true })
		}

		const data = readFileSync(join(this.props.lib.typesInputFile!)).toString()
		const logger = createWriteStream(typesOutputPath, {
			flags: 'a'
		})
		logger.write(data)
		logger.write(EOL)
		logger.end()
	}

	private getIconsFromTheme(theme: string) {
		let usedAttrsDict: { [key: string]: string[] } = {}
		readdirSync(join(this.props.sources.outputThemes!, theme)).forEach((fileName) => {
			const key = fileName.replace('.svg', '')
			const data = readFileSync(join(this.props.sources.outputThemes!, theme, fileName)).toString()
			const svgAst: any = parse(data)[0] as any

			if (!this.sourceDict[key]) {
				this.sourceDict[key] = {}
			}

			this.sourceDict[key][theme] = { a: svgAst.attrs }

			if (this.props.lib.excludeSvgAttributes) {
				this.props.lib.excludeSvgAttributes.forEach((attr) => {
					delete this.sourceDict[key][theme]['a'][attr]
				})
			}
			if (this.props.lib.extendSvgAttributes) {
				this.sourceDict[key][theme]['a'] = Object.assign(
					this.sourceDict[key][theme]['a'],
					this.props.lib.extendSvgAttributes
				)
			}

			const childTags = svgAst.children.filter((e: any) => {
				return e.type != 'text'
			})

			let tagsDict: ElementTagDict = {}

			childTags.forEach((node: ASTNode) => {
				if (node.name === 'g') {
					const hasAttributes = Object.keys(node.attrs).length > 0
					node.children
						.filter((e) => e.type != 'text')
						.forEach((child) => {
							if (hasAttributes) {
								Object.assign(child.attrs, node.attrs)
							}

							if (!tagsDict[child.name]) {
								tagsDict[child.name] = []
							}
							tagsDict[child.name].push(child.attrs)
						})
				} else {
					if (!tagsDict[node.name]) {
						tagsDict[node.name] = []
					}
					tagsDict[node.name].push(node.attrs)
				}
			})

			this.sourceDict[key][theme] = Object.assign(this.sourceDict[key][theme], tagsDict)

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

	private writeExportsFile() {
		const logger = createWriteStream(this.exportsFilePath, {
			flags: 'a'
		})
		// write types
		logger.write('import type {IconSource} from "./types" \n')

		// write exports
		let exports = Object.keys(this.sourceDict)
			.map((key) => {
				return `export const ${this.normalizeLibName(key)}=${JSON.stringify(
					this.sourceDict[key],
					null,
					0
				)} as IconSource`
			})
			.join('\n')
		logger.write(exports)
		logger.write(EOL)
		logger.end()
	}

	private collectFromDir() {
		const outputPath = join(this.props.sources.outputThemes!)
		const { inputRaw } = this.props.sources
		let { collectFromDir } = this.props.sources
		if (!collectFromDir) {
			console.log("No Themes Map found! Please add 'collectFromDir' to your config.")
			return
		}

		if (!existsSync(join(this.props.sources.inputRaw!))) {
			console.log('No input directory found')
			return
		}
		if (existsSync(outputPath)) {
			rmSync(outputPath, { recursive: true })
		}
		mkdirSync(outputPath)

		Object.keys(collectFromDir).forEach((themeDir) => {
			if (!existsSync(join(inputRaw!, themeDir))) {
				console.log(`No input directory for theme ${themeDir} found`)
				return
			}
			const outputThemeDir = collectFromDir?.[themeDir]

			if (outputThemeDir) {
				readdirSync(join(inputRaw!, themeDir)).forEach((fileName) => {
					const data = readFileSync(join(inputRaw!, themeDir, fileName)).toString()
					if (!existsSync(join(outputPath, outputThemeDir))) {
						mkdirSync(join(outputPath, outputThemeDir))
					}
					writeFileSync(join(outputPath, outputThemeDir, this.normalizeSourceName(fileName)), data)
				})
			}
		})
	}

	private collectFromSuffix() {
		const { inputRaw, outputThemes, collectFromSuffix } = this.props.sources

		if (!collectFromSuffix) {
			console.log("No Suffix Map found! Please add 'collectFromSuffix' to your config.")
			return
		}

		if (!existsSync(join(inputRaw!))) {
			console.log('No input directory found')
			return
		}
		if (existsSync(join(outputThemes!))) {
			rmSync(join(outputThemes!), { recursive: true })
		}
		mkdirSync(join(outputThemes!))

		this.unrecognizedSuffixes = []
		this.traverse(inputRaw!)
		if (this.unrecognizedSuffixes.length > 0) {
			console.log('Unrecognized files:', this.unrecognizedSuffixes.join(', '))
		}
	}

	private traverse(path: string) {
		readdirSync(join(path)).forEach((fileName) => {
			const traversedPath = join(path, fileName)
			const isDirectory = lstatSync(traversedPath).isDirectory()

			if (isDirectory) {
				this.traverse(traversedPath)
			} else {
				if (extname(traversedPath) != '.svg') {
					console.log('Unrecognized file:', traversedPath)
					this.unrecognizedSuffixes.push(traversedPath)
				} else {
					const { collectFromSuffix, outputThemes, fallbackTheme } = this.props.sources

					if (!collectFromSuffix) {
						console.log("No Suffix Map found! Please add 'collectFromSuffix' to your config.")
						return
					}

					const detectedSuffix =
						Object.keys(collectFromSuffix).find((key) => fileName.includes(key)) || ''
					if (detectedSuffix || fallbackTheme) {
						const theme = collectFromSuffix?.[detectedSuffix] || fallbackTheme
						if (theme) {
							const data = readFileSync(join(traversedPath)).toString()
							if (!existsSync(join(outputThemes!, theme))) {
								mkdirSync(join(outputThemes!, theme))
							}

							if (detectedSuffix) {
								fileName = fileName.replace(detectedSuffix, '')
							}
							writeFileSync(join(outputThemes!, theme, this.normalizeSourceName(fileName)), data)
						} else {
							console.log(path, traversedPath)
						}
					} else {
						this.unrecognizedSuffixes.push(fileName)
					}
				}
			}
		})
	}

	private normalizeSourceName(fileName: string) {
		return kebabcase(fileName)
	}

	private normalizeLibName(fileName: string) {
		fileName = pascalcase(fileName)
		const startsWithNumber = /^\d/.test(fileName)

		if (startsWithNumber) {
			fileName = '_' + fileName
		}
		return fileName
	}
}
