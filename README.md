# hello-agent-doc

English | [简体中文](./README.zh-CN.md)

A growing, practical AI agent tutorial for beginners, built with VitePress. Available in English (default) and Simplified Chinese, with local full-text search, light and dark themes, chapter navigation, and Markdown authoring.

The learning path uses Python, LangChain, LangGraph, and LangSmith to build, orchestrate, and evaluate AI applications. Start with model calls and document Q&A, then introduce tools and agents. Basic model calls and fixed retrieval workflows are foundations, not automatically agents. The first milestone is a document assistant with source citations, one tool-calling scenario, basic evaluation, and an online demo; advanced workflows follow later.

`hello-agent-doc` contains the tutorial articles. Practice code is planned for a separate sibling project, `hello-agent`.

## Getting started

Use Node.js 22 or later and npm:

```bash
npm install
npm run docs:dev
```

Open the local URL printed in your terminal. English is served at `/`; Simplified Chinese is served at `/zh/`. The default entry stays in English without browser-language redirection.

## Build and preview

```bash
npm run docs:build
npm run docs:preview
```

Deploy the static output in `docs/.vitepress/dist` to a static hosting service. For a subpath deployment, such as GitHub Pages at `/hello-agent-doc/`, set the matching `base` in the VitePress configuration.

## Project structure

```text
docs/
├── index.md                 # English homepage (default)
├── introduction/index.md    # Audience and approach
├── catalogue/index.md       # Reading order and planned topics
├── getting-started/index.md # Preparation before the first example
├── zh/                      # Matching Chinese pages
└── .vitepress/              # Shared config, localized navigation, theme
```

Add `fundamentals/` when foundational articles are ready, and `practice/<project>/` for complete project walkthroughs. Shared images can go in `docs/public/images/`. These directories do not need to exist before content is ready.

## Writing and publishing chapters

The site is one connected tutorial. Each article explains a clear topic and can also be published independently on a blogging platform. There is no separate blog feed or duplicate copy of each chapter.

1. Choose a short, descriptive English filename without dates or chapter numbers, such as `getting-started/first-call.md`. Use `index.md` for a section's landing page.
2. Write matching English and Chinese pages, for example `docs/getting-started/first-call.md` and `docs/zh/getting-started/first-call.md`. Draft in your preferred language, then prepare both versions before adding them to navigation.
3. Add published chapters to the contents pages and the manually ordered sidebars in `docs/.vitepress/en.mts` and `zh.mts`. Keep future topics in the contents as plain text, without links to empty chapters.
4. Prefer relative article links. Chinese homepage and navigation links must start with `/zh/`. Reference shared public images as `/images/example.png`.
5. Run `npm run docs:build`, then check language switching, links, and search in the preview.

Use a structure that fits the topic: explain the problem, walk through the example, and show how to verify the result. Include runtime and dependency versions where code is involved. Put complete runnable examples in `hello-agent`, and link to a specific commit or version when reproducibility matters. Example-code navigation can be added once that repository is available.

Language switching preserves the current page path. Translations are maintained manually, and search indexes are scoped to the current language. English remains the default. Last-updated dates come from Git history.

The current content consists of the introduction, contents, and preparation page. Model calls, knowledge base Q&A, and tools and agents remain planned topics. LangChain runtime dependencies are not installed, and no runnable LangChain examples are published yet. Never put real credentials in documentation code blocks.

## Dependency audit record

This project uses VitePress 1.6.4. At initialization, `npm audit` reported three development dependency findings (two moderate and one high) in the Vite / esbuild dependency chain, with no automatic fix offered. The stable version was retained. Keep the development server local and review the audit when upgrading.
