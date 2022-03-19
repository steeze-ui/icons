import { ThemeBuilder } from '@steeze-ui/icons'
import fs from 'fs/promises'
import path from 'path'

async function prepare(inputDir: string, outputDir: string) {
	const files = await fs.readdir(inputDir)

	await fs.rmdir(outputDir, { recursive: true })
	await fs.mkdir(outputDir, { recursive: true })

	return Promise.all(
		files.map(async (file) => {
			if (path.extname(file) !== '.svg') {
				return
			}

			await fs.copyFile(path.join(inputDir, file), path.join(outputDir, file))

			console.log(`Copied ${file}`)
		})
	)
}

prepare('./node_modules/simple-icons/icons', './themes/default').then(() => {
	const builder = new ThemeBuilder({
		sources: {},
		lib: {
			excludeSvgAttributes: ['xmlns']
		}
	})

	builder.build()
})
