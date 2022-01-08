import { createLibIcons, createThemesFromSuffix } from '@steeze-ui/icons'

const rawIconsDir = './node_modules/@primer/octicons/build/svg'
const themesDir = './themes'
const libIconsOutput = 'icons'

createThemesFromSuffix(rawIconsDir, themesDir, {
	'-16': 'default',
	'-24': '24',
	'-12': '12'
})

createLibIcons(themesDir, libIconsOutput, {
	extendSvgAttributes: { fill: 'currentColor' },
	excludeSvgAttributes: ['width', 'height', 'xmlns']
})
