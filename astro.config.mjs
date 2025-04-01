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
					label: 'Glass API',
					items: [
						{
							label: 'Getting started',
							translations: { es: 'Empezando' },
							autogenerate: { directory: 'guides' },
						},
						{
							label: 'Reference',
							translations: { es: 'Referencias' },
							autogenerate: { directory: 'reference' },
						},
					],
				},
			],
			title: {
				en: 'Documentation',
				es: 'Documentación',
			},
			locales: {
				root: { label: 'English', lang: 'en' },
				es: { label: 'Español', lang: 'es' },
			}
		}),
	],
});
