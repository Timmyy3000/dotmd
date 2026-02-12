import type { APIRoute, GetStaticPaths } from 'astro';
import { markdownToLlmText } from '../lib/llm';
import { formatDate, getPublishedPosts, type PostEntry } from '../lib/posts';

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getPublishedPosts();
	return posts.map((post) => ({
		params: { slug: post.slug },
		props: { post },
	}));
};

export const GET: APIRoute = async ({ props, site }) => {
	const { post } = props as { post: PostEntry };
	const canonical = site ? new URL(`/${post.slug}`, site).toString() : `/${post.slug}`;
	const updated = post.data.updated ? `Updated: ${formatDate(post.data.updated)}\n` : '';
	const tags = post.data.tags.length > 0 ? post.data.tags.join(', ') : 'none';
	const content = markdownToLlmText(post.body);

	const text = [
		`Title: ${post.data.title}`,
		`Description: ${post.data.description}`,
		`Published: ${formatDate(post.data.date)}`,
		updated.trimEnd(),
		`Tags: ${tags}`,
		`Canonical URL: ${canonical}`,
		'',
		'Content:',
		content,
	]
		.filter(Boolean)
		.join('\n');

	return new Response(text, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=0, must-revalidate',
		},
	});
};
