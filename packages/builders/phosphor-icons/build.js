import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './node_modules/@phosphor-icons/core/assets/',
		collectFromDir: {
			regular: 'default',
			bold: 'bold',
			duotone: 'duotone',
			fill: 'fill',
			light: 'light',
			thin: 'thin'
		},
		endsWithThemeName: true

		// collectFromSuffix: { '-line': 'default', fill: 'solid' }, //* use this if icon themes are bound to a suffix (e.g. cake-line.svg, cake-fill.svg).
		// fallbackTheme: 'default', //* where to collect, when icons cannot be identified by their suffix (default is dont collect)
	},
	lib: {
		excludeSvgAttributes: ['xmlns', 'width', 'height', 'class'], //* exclude certain attributes from the svg's, which might be controlled by the used Icon component
		extendSvgAttributes: {} //* extend the svg's attributes
	}
})

builder.build() //* if neither collectFromDir or collectFromSuffix are defined, a already populated themes directory with at least a default theme is necessary (see example in this themplate)
