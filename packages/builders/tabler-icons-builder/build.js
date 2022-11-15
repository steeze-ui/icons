import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './node_modules/@tabler/icons/',
		collectFromDir: { icons: 'default' }
	},
	lib: {
		excludeSvgAttributes: ['xmlns']
	}
})

builder.build()
