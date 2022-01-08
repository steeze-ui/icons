import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
	plugins: [solidPlugin()],
	build: {
		target: 'esnext',
		polyfillDynamicImport: false,
		lib: {
			entry: 'src/solid-icon.tsx',
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
