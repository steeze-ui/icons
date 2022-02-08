import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './node_modules/@primer/octicons/build/svg',
		suffixMap: {
			'-16': 'default',
			'-24': '24',
			'-12': '12'
		},
		fallbackTheme: 'default' // files without suffix will be added to this theme
	},
	lib: {
		extendSvgAttributes: { fill: 'currentColor' },
		excludeSvgAttributes: ['width', 'height', 'xmlns']
	}
})

builder.collectFromSuffix().build()
