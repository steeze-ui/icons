import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './node_modules/remixicon/icons',
		suffixMap: {
			'-line': 'default',
			'-fill': 'solid'
		},
		fallbackTheme: 'default' // files without suffix will be added to this theme
	},
	lib: {
		extendSvgAttributes: { fill: 'currentColor' },
		excludeSvgAttributes: ['width', 'height', 'xmlns']
	}
})

builder.collectFromSuffix().build()
