import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './node_modules/@tabler/icons/icons',
		collectFromSuffix: {
			'-filled': 'filled'
		},
		fallbackTheme: 'default'
	},
	lib: {
		excludeSvgAttributes: ['xmlns']
	}
})

builder.build()
