import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().min(1),
		description: z.string().min(1),
		date: z.coerce.date(),
		updated: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		coverImage: z.string().optional(),
		coverAlt: z.string().optional(),
		draft: z.boolean().default(false),
		series: z.string().optional(),
		canonicalUrl: z.string().url().optional(),
	}),
});

export const collections = { posts };
