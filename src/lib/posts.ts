import { getCollection, type CollectionEntry } from 'astro:content';

export type PostEntry = CollectionEntry<'posts'>;

const byDateDescending = (a: PostEntry, b: PostEntry) =>
	b.data.date.getTime() - a.data.date.getTime();

export async function getPublishedPosts(): Promise<PostEntry[]> {
	const posts = await getCollection('posts');
	return posts.filter((post) => !post.data.draft).sort(byDateDescending);
}

export function formatDate(date: Date): string {
	return new Intl.DateTimeFormat('en-US', {
		dateStyle: 'medium',
	}).format(date);
}
