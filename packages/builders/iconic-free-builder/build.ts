import { createLibIcons } from '@steeze-ui/icons'

const themesDir = './themes'
const outputIcons = 'icons'

createLibIcons(themesDir, outputIcons, { excludeSvgAttributes: ['width', 'height'] })
