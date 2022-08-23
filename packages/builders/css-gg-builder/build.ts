import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './node_modules/css.gg/icons',
		collectFromDir: { svg: 'default' }
	},
	lib: {
		excludeSvgAttributes: ['xmlns', 'width', 'height']
	}
})

builder.build()
