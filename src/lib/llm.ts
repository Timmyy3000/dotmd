// Code must reach the reader byte-for-byte: stash fenced blocks and inline
// code before any prose cleanup, then restore them untouched.
const STASH = (i: number) => `\u0000${i}\u0000`;

export function markdownToLlmText(markdown: string): string {
	const stash: string[] = [];
	const keep = (s: string) => STASH(stash.push(s) - 1);

	// MDX: drop import lines; component tags are stripped below.
	let text = markdown.replace(/^import .*$/gm, '');
	text = text.replace(/^```[^\n]*\n[\s\S]*?^```/gm, keep);
	text = text.replace(/`[^`\n]+`/g, keep);

	text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt: string, src: string) =>
		alt ? `Image: ${alt} (${src})` : `Image: ${src}`
	);
	text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)');
	text = text.replace(/^>\s?/gm, '');
	text = text.replace(/^#{1,6}\s*(.+)$/gm, '\n$1\n');
	text = text.replace(/^\s*\d+\.\s+/gm, '- ');
	text = text.replace(/^\s*[-*+]\s+/gm, '- ');
	text = text.replace(/<\/?[A-Za-z][^>]*>/g, '');
	// Emphasis markers only when paired around text, so snake_case survives.
	text = text.replace(/(\*\*|__)(\S[\s\S]*?\S|\S)\1/g, '$2');
	text = text.replace(/(^|[\s(])[*_](\S[^*_\n]*?)[*_](?=[\s).,;:!?]|$)/gm, '$1$2');
	text = text.replace(/\n{3,}/g, '\n\n');

	text = text.replace(/\u0000(\d+)\u0000/g, (_, i: string) => stash[Number(i)]);
	return text.trim();
}
