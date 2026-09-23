# Ayush Ranjan — Portfolio

Animated single-page portfolio positioned for three tracks — **AI/ML Engineer**, **Data
Scientist** and **Software Engineer**. Dark by default with a light theme, motion
throughout, and all content driven from one data file.

## The track switcher

The hero carries a three-way switcher. Picking a track re-frames the page rather than
filtering it — the same work, read through the lens the visitor is hiring for:

| What changes | How |
| --- | --- |
| Hero title + headline + strengths | Per-track copy, animated on swap |
| Code chips beside the portrait | `agent.run()` → `df.describe()` → `@app.post()` |
| Skills | Groups reorder; the top three get a **Core** badge |
| Projects | Each card gains a "Why it matters here" line for that track |
| Focus section | Swaps entirely: Focus / Method / Practice |

State lives in a module store read via `useSyncExternalStore`
([TrackContext.tsx](src/components/TrackContext.tsx)), so the choice persists in
`localStorage` and survives reload without a hydration mismatch.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-variable design tokens) |
| Animation | Motion (`motion/react`) + CSS keyframes |
| Icons | lucide-react (+ local SVGs for GitHub / LinkedIn) |
| Fonts | Sora (display), Inter (body), JetBrains Mono (code) via `next/font` |
| Deploy | Vercel (zero-config) |

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Before you publish — one thing left to do

**Set your real domain.** `SITE` in [src/app/layout.tsx](src/app/layout.tsx) is a
placeholder (`https://ayushranjan.dev`). It drives canonical URLs and Open Graph image
resolution.

The résumé is already in place at `public/resume.pdf` (served by the hero's *Résumé*
button). Replace that file whenever you update the document — keep the filename.

## Editing content

Everything readable lives in [src/data/profile.ts](src/data/profile.ts) — name, contact
details, skills, experience, projects, focus areas, education and the marquee. Change
that file and every section updates; no component edits needed.

Track-specific content sits in two exports there:

- `tracks` — per-track headline, strengths, typed titles, chips and skill ordering
- `focusByTrack` — the six Focus cards shown for each track

Each project also carries a `lens` object with one line per track. To add a fourth track,
append to `tracks`, add a `focusByTrack` entry and a `lens` key on every project;
TypeScript will flag anything you miss.

Section order is composed in [src/app/page.tsx](src/app/page.tsx).

## Theming

Colours are CSS variables in [src/app/globals.css](src/app/globals.css):

- `:root` holds the dark palette
- `:root[data-theme="light"]` overrides it for light
- `@theme inline` maps them to Tailwind utilities (`bg-bg`, `text-muted`, `border-line`, `text-accent`, …)

Change `--accent`, `--accent-2` and `--accent-3` to re-brand the whole page, including
the gradient text, the animated card ring and the ambient background orbs.

The theme choice persists in `localStorage` and is applied by an inline script in
`<head>` before first paint, so there is no flash of the wrong theme.

## Animation notes

- `Reveal` ([src/components/Reveal.tsx](src/components/Reveal.tsx)) is the shared
  scroll-in wrapper (fade + rise + blur).
- The experience rail fills as you scroll via `useScroll` + `useSpring`.
- The hero portrait tilts toward the pointer and carries a light sheen.
- Project and skill cards use a pointer-tracked spotlight.
- Every animation is disabled under `prefers-reduced-motion: reduce`.

## Images

`public/` holds the processed portrait assets:

- `ayush-portrait.jpg` — hero portrait (background removed, re-lit on a brand gradient)
- `ayush-avatar.jpg` — square crop
- `ayush-cutout.png` — transparent cutout, if you want the subject floating
- `og.jpg` — 1200×630 social preview card

To swap the photo, replace these and keep the same filenames and aspect ratios.

## Deploy

Push to GitHub, import the repo at [vercel.com/new](https://vercel.com/new), and accept
the defaults — Vercel detects Next.js automatically. Add your custom domain, then update
`SITE` in `layout.tsx` to match.
