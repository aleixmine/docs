// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://aleixmine.github.io',
    base: 'docs',
    integrations: [starlight({
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
                        slug: 'glass-api/getting-started',
                    },
                    {
                        label: 'GlassAPI Editor',
                        translations: { es: 'GlassAPI Editor' },
                        slug: 'glass-api/editor',
                    },
                    {
                        label: 'Tutorial',
                        translations: { es: 'Tutorial' },
                        autogenerate: { directory: 'glass-api/tutorial' },
                    },
                    {
                        label: 'Reference',
                        translations: { es: 'Referencias' },
                        autogenerate: { directory: 'glass-api/reference' },
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
		}), react()],
});