// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://aleixmine.github.io',
  	base: 'docs',
	integrations: [
		starlight({
			social: {
				github: 'https://github.com/aleixmine/docs',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				
			],
			title: {
				en: 'Documentation',
				es: 'Documentación',
			},
			defaultLocale: 'en',
			locales: {
				'en': {
					label: 'English',
					lang: 'en-US'
				},
				'es': {
					label: 'Español',
					lang: 'es-ES'
				}
			}
		}),
	],
});
