import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './node_modules/@tabler/icons/icons',
		collectFromDir: {
			filled: 'filled',
			outline: 'outline'
		},
		fallbackTheme: 'outline'
	},
	lib: {
		excludeSvgAttributes: ['xmlns']
	}
})

builder.build()
