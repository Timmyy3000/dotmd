function normalizeCodeBlocks(markdown: string): string {
	return markdown.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang: string, code: string) => {
		const label = lang ? `Code (${lang}):` : 'Code:';
		return `\n${label}\n${code.trim()}\n`;
	});
}

export function markdownToLlmText(markdown: string): string {
	let text = normalizeCodeBlocks(markdown);

	text = text.replace(/`([^`]+)`/g, '$1');
	text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt: string, src: string) =>
		alt ? `Image: ${alt} (${src})` : `Image: ${src}`
	);
	text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)');
	text = text.replace(/^>\s?/gm, '');
	text = text.replace(/^#{1,6}\s*(.+)$/gm, '\n$1\n');
	text = text.replace(/^\s*\d+\.\s+/gm, '- ');
	text = text.replace(/^\s*[-*+]\s+/gm, '- ');
	text = text.replace(/<[^>]+>/g, '');
	text = text.replace(/[*_~]/g, '');
	text = text.replace(/\n{3,}/g, '\n\n');

	return text.trim();
}
