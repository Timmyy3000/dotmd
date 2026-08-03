// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://timi.click';

export default defineConfig({
	site,
});
