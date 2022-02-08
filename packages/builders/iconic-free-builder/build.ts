import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		// inputRaw: './node_modules/',
		// themesMap: { icons: 'default'}
	},
	lib: {
		excludeSvgAttributes: ['width', 'height']
	}
})

builder.build()
