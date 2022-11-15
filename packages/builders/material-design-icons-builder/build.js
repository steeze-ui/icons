import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './node_modules/@material-design-icons/svg',
		collectFromDir: {
			filled: 'default',
			outlined: 'outlined',
			round: 'round',
			sharp: 'sharp',
			'two-tone': 'twotone'
		}
	},
	lib: {
		excludeSvgAttributes: ['xmlns', 'width', 'height']
	}
})

builder.build()
