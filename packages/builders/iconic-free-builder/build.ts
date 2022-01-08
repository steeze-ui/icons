import { createLibIcons } from '@steeze-ui/icons'

const themesDir = './themes'
const libIconsDir = 'icons'

createLibIcons(themesDir, libIconsDir, { excludeSvgAttributes: ['width', 'height'] })
