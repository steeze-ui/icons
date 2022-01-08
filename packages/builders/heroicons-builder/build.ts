import { createLibIcons, createThemesFromDir } from '@steeze-ui/icons'

const rawIconsDir = './node_modules/heroicons'
const themesDir = './themes'
const libIconsDir = 'icons'

createThemesFromDir(rawIconsDir, themesDir, { outline: 'default', solid: 'solid' })

createLibIcons(themesDir, libIconsDir, { excludeSvgAttributes: ['xmlns'] })
