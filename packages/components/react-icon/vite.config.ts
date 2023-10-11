import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true
		})
	],
	build: {
		target: 'esnext',
		polyfillDynamicImport: false,
		lib: {
			entry: 'src/index.tsx',
			// name: 'Icon',
			formats: ['es'],
			fileName: (format) => `Icon.js`
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM'
				}
			}
		}
	},
	optimizeDeps: {
		include: [
			'@steeze-ui/heroicons',
			'@steeze-ui/radix-icons',
			'@steeze-ui/iconic-free',
			'@steeze-ui/octicons',
			'@steeze-ui/feather-icons'
		]
	}
})
