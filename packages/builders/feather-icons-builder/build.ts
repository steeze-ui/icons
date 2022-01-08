import { createLibIcons, createThemesFromDir } from '@steeze-ui/icons'

const rawIconsDir = './node_modules/feather-icons/dist'
const themesDir = './themes'
const libIconsDir = 'icons'

createThemesFromDir(rawIconsDir, themesDir, { icons: 'default' })

createLibIcons(themesDir, libIconsDir, {
	excludeSvgAttributes: ['xmlns', 'width', 'height', 'class']
})
