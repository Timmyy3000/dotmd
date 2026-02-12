import rss from '@astrojs/rss';
import { getPublishedPosts } from '../lib/posts';

export async function GET(context: { site: URL | undefined }) {
	const posts = await getPublishedPosts();

	return rss({
		title: 'dotmd',
		description: 'New writing from dotmd.',
		site: context.site ?? new URL('https://example.com'),
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: `/${post.slug}`,
			categories: post.data.tags,
			content: post.body,
		})),
		customData: '<language>en-us</language>',
	});
}
