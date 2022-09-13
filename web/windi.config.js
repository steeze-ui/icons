import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
	darkMode: 'class', // or 'media'
	preflight: 'true',
	extract: {
		include: ['src/**/*.{html,svx,svelte}']
	},
	plugins: [typography()],
	theme: {
		extend: {
			colors: {
				primary: colors.indigo,
				dark: {
					50: 'var(--st-colors-dark1)',
					100: 'var(--st-colors-dark2)',
					200: 'var(--st-colors-dark3)',
					300: 'var(--st-colors-dark4)',
					400: 'var(--st-colors-dark5)',
					500: 'var(--st-colors-dark6)',
					600: 'var(--st-colors-dark7)',
					700: 'var(--st-colors-dark8)',
					800: 'var(--st-colors-dark9)',
					900: 'var(--st-colors-dark10)'
				},
				gray: {
					50: 'var(--st-colors-gray1)',
					100: 'var(--st-colors-gray2)',
					200: 'var(--st-colors-gray3)',
					300: 'var(--st-colors-gray4)',
					400: 'var(--st-colors-gray5)',
					500: 'var(--st-colors-gray6)',
					600: 'var(--st-colors-gray7)',
					700: 'var(--st-colors-gray8)',
					800: 'var(--st-colors-gray9)',
					900: 'var(--st-colors-gray10)'
				}
			},
			typography: {
				DEFAULT: {
					css: {
						color: colors.light[700]
					}
				}
			}
		}
	}
})
