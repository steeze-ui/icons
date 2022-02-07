import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		package: {
			exports: (file) => file === 'index.js'
			// files: (file) => !file.startsWith("internal"), //exclude internal Components
		}
		// hydrate the <div id="svelte"> element in src/app.html
	}
}

export default config
