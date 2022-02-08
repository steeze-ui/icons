import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './node_modules/heroicons',
		collectFromDir: { outline: 'default', solid: 'solid' }
	},
	lib: {
		excludeSvgAttributes: ['xmlns']
	}
})

builder.build()
