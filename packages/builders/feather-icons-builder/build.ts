import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './node_modules/feather-icons/dist',
		themesMap: { icons: 'default' }
	},
	lib: {
		excludeSvgAttributes: ['xmlns', 'width', 'height', 'class']
	}
})

builder.collectFromDir().build()
