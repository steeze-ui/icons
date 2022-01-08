import { createLibIcons, createThemesFromDir } from '@steeze-ui/icons'

const rawIconsDir = './node_modules/heroicons'
const themesDir = './themes'
const libIconsOutput = 'icons'

createThemesFromDir(rawIconsDir, themesDir, { outline: 'default', solid: 'solid' })

createLibIcons(themesDir, libIconsOutput, { excludeSvgAttributes: ['xmlns'] })
