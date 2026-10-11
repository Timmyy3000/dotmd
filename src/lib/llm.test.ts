import { expect, test } from 'bun:test';
import { markdownToLlmText } from './llm';

test('code survives prose cleanup untouched', () => {
	const md = 'Set `IS_SANDBOX=1` and **bold** _em_ snake_case.\n\n```yaml\n# comment\n- "<vps-ip>:8317"\n```\n<Callout type="tip">Hi</Callout>';
	const out = markdownToLlmText(md);
	expect(out).toContain('`IS_SANDBOX=1`');
	expect(out).toContain('```yaml\n# comment\n- "<vps-ip>:8317"\n```');
	expect(out).toContain('bold em snake_case');
	expect(out).not.toContain('<Callout');
});
