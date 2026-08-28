# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Astro 5 static site for [curiouscoders.co.uk](https://curiouscoders.co.uk) — a blog/resource site about coding and tech for kids. No client framework integrations; output is plain static HTML with a couple of inline `<script>` blocks.

## Commands

```bash
npm run dev        # dev server on localhost:4321
npm run build      # static build into dist/
npm run preview    # serve dist/ on localhost:4321
npm test           # Playwright tests (auto-runs `npm run preview` first)

npx playwright test tests/basic-rendering.spec.js -g "about page renders"   # single test
npx playwright test --headed                                               # watch it run
```

Playwright's `webServer` runs `npm run preview`, so **tests run against `dist/`, not the dev server** — run `npm run build` after changing anything you want the tests to see. CI (`.github/workflows/playwright.yml`) builds then tests on push/PR to `main`.

There is no linter or type-check script; `tsconfig.json` extends `astro/tsconfigs/strict` if you want `npx astro check`.

## Content architecture

Content lives in `src/content/` as two collections defined in `src/content/config.ts`:

- **`articles`** — requires `title`, `pubDate` (a date, parsed by the schema), `description`, `author`; optional `image` and `tags`.
- **`activities`** — requires `title`, `pubDate`, `description`; optional `image` and `draft`. The activities page sorts by `pubDate` descending, so the newest activity is the one at the top of the page. Read activities through `getPublishedActivities()` in `src/utils/activities.ts` rather than `getCollection` directly — it drops `draft: true` entries from the build (listing *and* their own page) while still rendering them under `npm run dev` so drafts can be previewed.

Each entry is a **directory** containing `index.md` plus its images, e.g. `src/content/articles/coding-with-python/{index.md,cover.jpeg,...}`. The directory name becomes the slug and the URL (`/articles/coding-with-python`). Frontmatter `image.url` is a **relative path** (`'./cover.jpeg'`) resolved through Astro's `image()` helper, so it must point at a real file in that directory; images referenced from the markdown body use bare filenames (`![alt](cover.jpeg)`).

Rendering path: `src/pages/articles/[...slug].astro` (and the activities equivalent) call `getStaticPaths` over the collection and hand the entry to `MarkdownPostLayout` / `MarkdownActivityLayout`, which wrap `BaseLayout`. Article body styling comes entirely from `@tailwindcss/typography` classes on the wrapper div in the layout — markdown files should not carry their own styling.

`MarkdownPostLayout` reads `frontmatter.image.url.src` unconditionally for Open Graph, so an article without an `image` will fail the build even though the schema marks it optional.

## Layout and styling

- `BaseLayout.astro` is the single page shell: head tags, canonical URL, optional `description`/`openGraph` props, Header, `<slot />`, Footer. The umami analytics script only renders when `import.meta.env.PROD`.
- Tailwind v4 via `@tailwindcss/vite`, configured in `src/styles/global.css` with `@import "tailwindcss"` / `@plugin` / `@theme` — **not** through `tailwind.config.js`, which is a leftover v3 file that Tailwind no longer reads. Theme tokens go in the `@theme` block in `global.css`. (Note: `text-primary`, used in a few components, is not defined anywhere and currently does nothing.)
- Fonts (Jost) and Font Awesome icons load from CDNs in `BaseLayout`; icon classes like `fa-brands fa-youtube` depend on that.
- Dark palette is set on `html` in `global.css` (`bg-[#0c0b1e] text-white`); there is no light mode.

## Printable handouts

`src/layouts/PrintableLayout.astro` backs pages meant to be printed and handed out (`src/pages/activities/makecode-arcade-code-a-maze/worksheet.md` is the one in use). It's a markdown-page layout, chosen via `layout:` frontmatter, and two frontmatter flags drive its print CSS:

- `sectionsPerPage: true` — every `##` starts a fresh sheet, so one section is one handout. Sub-headings must therefore be `###` or lower, or they take a sheet each.
- `leaderIntro: true` — everything above the first `##` is guidance for whoever runs the session, and is dropped from the print out (along with the print-only page title, which sits up there too).

The print block also inverts the site's dark theme to black-on-white, drops the site chrome, spells out external URLs after link text, and prints at 11pt — the on-screen size overflows a sheet. `tests/worksheet-printing.spec.js` covers all of this via `page.emulateMedia({ media: 'print' })`; it's the cheapest way to check print behaviour without rendering a PDF.

## Known dead code

`src/pages/tags/[tag].astro` and `src/pages/tags/index.astro` still glob `../posts/*.md`, a directory that no longer exists — they predate the content collections and produce no pages. Tag links are commented out in `MarkdownPostLayout`. Migrate them to `getCollection('articles')` if tags are wanted.

Home page sections (`Hero`, `LatestVideo`) are hardcoded markup — the "latest video" title, description and YouTube embed ID live in `src/components/LatestVideo.astro` and are edited by hand.
