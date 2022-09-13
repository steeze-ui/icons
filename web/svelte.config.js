import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.svelte.md', '.md', '.svx'],

			smartypants: {
				dashes: 'oldschool'
			},

			remarkPlugins: [],
			rehypePlugins: []
		})
	],

	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*']
		},
		csp: {
			mode: 'auto',
			directives: {
				'script-src': ['self', 'unsafe-inline'],
				'object-src': ['none'],
				'base-uri': ['self']
			}
		}
	}
};

export default config;
