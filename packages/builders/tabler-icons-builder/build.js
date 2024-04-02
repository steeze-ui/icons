import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './node_modules/@tabler/icons/icons',
		collectFromDir: {
			filled: 'filled',
			outline: 'default'
		},
		fallbackTheme: 'default'
	},
	lib: {
		excludeSvgAttributes: ['xmlns']
	}
})

builder.build()
