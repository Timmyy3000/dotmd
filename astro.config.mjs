// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const site = process.env.SITE_URL ?? 'https://timi.click';

export default defineConfig({
	site,
	integrations: [mdx()],
});
