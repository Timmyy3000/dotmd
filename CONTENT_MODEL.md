# Content Model

## Post File Location
- Store posts under `src/content/posts/` (planned path once project is scaffolded).
- One Markdown file per post.

## Frontmatter Schema
Required:
- `title`: string
- `description`: string
- `date`: ISO date (`YYYY-MM-DD`)
- `slug`: string (URL-safe, unique)

Optional:
- `updated`: ISO date
- `tags`: string array
- `coverImage`: string (path or URL)
- `coverAlt`: string
- `draft`: boolean (default `false`)
- `series`: string
- `canonicalUrl`: string

## Rendering Targets
- Human-readable page: `/{slug}`
- LLM-friendly plain text page: `/{slug}.llm.txt`
- RSS item source: same canonical post content

## Markdown Authoring Rules (Extensible)
- Use `#` for title in frontmatter-driven templates; content body should start at `##`.
- Use semantic headings in order (`##`, `###`, `####`).
- Prefer standard Markdown blocks first:
  - paragraphs
  - bullet/numbered lists
  - blockquotes
  - code fences with language labels
- Keep callouts/advanced blocks behind a consistent extension strategy:
  - reserve directive-style syntax (for later) rather than ad hoc HTML
  - avoid inline style HTML in Markdown

## Suggested Metadata Defaults
- `draft: false`
- `tags: []`

## Example Frontmatter
```md
---
title: "Designing a Markdown-First Blog"
description: "How this blog is structured for humans, feeds, and LLM readers."
date: 2026-02-12
slug: "designing-a-markdown-first-blog"
tags: ["meta", "astro", "markdown"]
draft: false
---
```
