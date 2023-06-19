import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		// inputRaw: ''
		// themesMap: { icons: 'default',  }
	},
	lib: {
		excludeSvgAttributes: ['xmlns', 'width', 'height']
	}
})

builder.build()
