import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './node_modules/simple-icons',
		collectFromDir: { icons: 'default' }
	},
	lib: {
		excludeSvgAttributes: ['xmlns'],
		extendSvgAttributes: { fill: 'currentColor' }
	}
})

builder.build()
