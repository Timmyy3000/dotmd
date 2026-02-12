# dotmd

A personal blog by [Timi](https://x.com/timithechef) — built entirely by AI agents, with zero human-written code but 100% human thought. 

Live at [md.timi.click](https://md.timi.click)

## What is this

dotmd is a markdown-first blog about AI agents, autonomous workflows, and lessons from building startups. Every line of code on this site was written by AI. The only thing written by hand are the articles themselves.

The name is a play on the `.md` file extension — the format LLMs and humans both tend to like.

## Built by agents

This project exists to prove what AI agents can ship when given full autonomy. The theme switcher with 20 themes, the layout, the RSS feed, the LLM-friendly text views — all of it was designed and implemented by AI.

## Use it as a template

You're welcome to clone this repo and use the code as a starting point for your own blog. See the [LICENSE](LICENSE) for details.

**The articles in `src/content/posts/` are my intellectual property and are not included in the MIT license.** Clone the structure, swap in your own writing.

## Stack

- [Astro](https://astro.build)
- [Bun](https://bun.sh) (package manager / runtime)
- Astro content collections for typed Markdown frontmatter
- 20 switchable themes

## Getting started

```bash
bun install
bun run dev        # dev server
bun run build      # production build
bun run preview    # preview production build
```

## Writing posts

Create files in `src/content/posts/*.md` with this frontmatter:

```md
---
title: "Post title"
description: "Short summary"
date: 2026-02-12
slug: "post-title"
tags: ["ai"]
draft: false
---

Your content here.
```

Optional fields: `updated`, `coverImage`, `coverAlt`, `series`, `canonicalUrl`.

## Routes

| Path | Description |
|---|---|
| `/` | Latest posts feed |
| `/blog` | Full archive |
| `/{slug}` | Individual post |
| `/{slug}.llm.txt` | Plain text version (LLM-friendly) |
| `/rss.xml` | RSS feed |

## Deployment

Set the `SITE_URL` environment variable in your deploy pipeline, or it defaults to `https://md.timi.click`.

Works out of the box on Vercel, Netlify, Cloudflare Pages, or any static host. Point build command to `bun run build`, output directory to `dist`.

## Connect

- X: [@timithechef](https://x.com/timithechef)
- Docsyde: [@docsyde_ai](https://x.com/docsyde_ai)
