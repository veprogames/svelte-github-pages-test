import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: "index.html",
		}),
		paths: {
			assets: "svelte-github-pages-test",
			base: "svelte-github-pages-test"
		}
	}
};

export default config;
