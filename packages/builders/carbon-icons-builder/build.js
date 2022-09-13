import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './node_modules/@carbon/icons/svg', //* use this if your sources come from a npm package
		collectFromDir: { 16: '16', 20: '20', 24: '24', 32: 'default', various: 'various' } //* use this if icon themes are bound to the overlying derectory (e.g. outline/cake.svg, fill/cake.svg).
		// collectFromSuffix: { '-line': 'default', fill: 'solid' }, //* use this if icon themes are bound to a suffix (e.g. cake-line.svg, cake-fill.svg).
		// fallbackTheme: 'default', //* where to collect, when icons cannot be identified by their suffix (default is dont collect)
	},
	lib: {
		excludeSvgAttributes: ['xmlns', 'width', 'height', 'class'], //* exclude certain attributes from the svg's, which might be controlled by the used Icon component
		extendSvgAttributes: { fill: 'currentColor' } //* extend the svg's attributes
	}
})

builder.build() //* if neither collectFromDir or collectFromSuffix are defined, a already populated themes directory with at least a default theme is necessary (see example in this themplate)
