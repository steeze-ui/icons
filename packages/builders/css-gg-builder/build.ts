import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './node_modules/css.gg/icons',
		collectFromDir: { icons: 'default' }
	},
	lib: {
		excludeSvgAttributes: ['xmlns', 'width', 'height', 'class']
	}
})

builder.build()
