import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: 'src/my-element.ts',
			formats: ['es']
		},
		rollupOptions: {
			external: /^lit/
		}
	},
	optimizeDeps: {
		include: ['@steeze-ui/heroicons', '@steeze-ui/radix-icons', '@steeze-ui/iconic-free']
	}
})
