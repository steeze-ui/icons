import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './node_modules/font-awesome/svgs',
		collectFromDir: { regular: 'default', solid: 'solid', brands: 'default' },
		fallbackTheme: 'default'
	},
	lib: {
		excludeSvgAttributes: ['xmlns', 'width', 'height', 'class'],
		extendSvgAttributes: {}
	}
})

builder.build()
