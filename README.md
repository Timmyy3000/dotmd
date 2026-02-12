# dotmd

Markdown-first Astro blog with:

- feed homepage (`/`)
- blog index (`/blog`)
- slug route for articles (`/{slug}`)
- RSS (`/rss.xml`)
- per-post LLM text view (`/{slug}.llm.txt`)

## Stack

- Astro
- Bun package manager/runtime
- Astro content collections for typed Markdown frontmatter

## Commands

Run from project root:

- `bun install`
- `bun run dev`
- `bun run build`
- `bun run preview`
- `bun run astro check`

## Content Authoring

Create posts in `src/content/posts/*.md`.

Required frontmatter:

```md
---
title: "Post title"
description: "Short summary"
date: 2026-02-12
slug: "post-title"
---
```

Optional fields include `updated`, `tags`, `draft`, `coverImage`, and `canonicalUrl`.

## Site URL

`astro.config.mjs` reads `SITE_URL` from env and falls back to `https://example.com`.
Set `SITE_URL` in your deploy pipeline so RSS and canonical URLs are correct.
