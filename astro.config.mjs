// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://md.timi.click';

export default defineConfig({
	site,
});
