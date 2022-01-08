import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	build: {
		target: 'esnext',
		polyfillDynamicImport: false,
		lib: {
			entry: 'src/react-icon.tsx',
			formats: ['es']
		},
		rollupOptions: {
			external: /^solid-js/
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
