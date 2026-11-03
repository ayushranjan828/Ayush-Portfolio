# Ayush Ranjan — Portfolio

Personal portfolio of **Ayush Ranjan, AI / ML Engineer**: RAG pipelines, AI agents, deep learning and the FastAPI backends that ship them.

A single-page site built with Next.js 16 and Tailwind CSS v4. It supports light and dark themes, works on any screen size, and keeps all its text in one data file.

## Highlights

- **Light and dark themes**: follows the OS setting by default. A header toggle remembers the visitor's choice, and the theme is applied before first paint, so there is no flash.
- **Hero**: name, headline, a `Data_Science` code card with a spinning gradient border, and a blood-red ECG heartbeat line.
- **Police-siren ambience**: soft red and blue light double-flashes in from the screen edges across the whole page.
- **Project carousel**: swipe with a finger or drag with the mouse; keyboard ← / → also works when focused. Two cards per view on desktop, one on phones. Each card has a code-drawn cover illustration.
- **Sections**: About, Skills (bento grid), Experience (timeline), Projects, Education, Contact (mailto + one-click copy email).
- **Responsive header**: sticky and blurred on scroll, active-section highlighting, a scroll progress bar, and a hamburger menu on phones. On phones the `AR` logo becomes a `</>` developer mark.
- **Accessible motion**: every animation turns off under `prefers-reduced-motion`.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 with CSS-variable design tokens |
| Animation | Motion (`motion/react`) + CSS keyframes |
| Icons | lucide-react (GitHub / LinkedIn are inline SVGs) |
| Fonts | Bricolage Grotesque (display), Geist (body), Geist Mono (code) via `next/font` |

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build (the page is statically prerendered) |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
public/
  resume.pdf              Served by the hero's "Download résumé" button
src/
  app/
    layout.tsx            Fonts, metadata, theme-before-paint script
    page.tsx              All page sections, composed in order
    globals.css           Theme tokens and effects (siren, ECG, glow cards, marquee)
  components/
    Header.tsx            Nav, theme toggle, mobile menu, scroll progress
    ProjectCarousel.tsx   Swipeable project cards
    ProjectArt.tsx        SVG cover illustrations for the projects
    Reveal.tsx            Shared fade-and-rise-on-scroll wrapper
    CopyEmail.tsx         Copy-to-clipboard button
  data/
    profile.ts            All content: profile, skills, experience, projects, education
```

## Editing content

Almost everything you can read on the page lives in [`src/data/profile.ts`](src/data/profile.ts):

- `profile`: name, role, location, contact links, headline, intro, About text
- `focus`, `skills`, `experience`, `education`, `navLinks`
- `projects`: each entry has an icon, title, tag, summary, highlights, metric badge, stack chips, pipeline `flow` and an `art` cover

A few things live in [`src/app/page.tsx`](src/app/page.tsx) instead:
- the hero code card's text
- the scrolling tech list (`stack`)
- the section titles

**Adding a project:** append an entry to `projects` and pick an `art` value: `agents`, `rag`, `vision` or `text`. For a new kind of cover, add a drawing to [`ProjectArt.tsx`](src/components/ProjectArt.tsx) and add its name to the `Art` type. TypeScript flags any missing field.

**Résumé:** replace `public/resume.pdf` and keep the filename.

## Theming

Colours are CSS variables in [`src/app/globals.css`](src/app/globals.css):

- `:root` holds the light palette, and `[data-theme="dark"]` overrides it for dark.
- `@theme inline` exposes them as Tailwind utilities: `bg-bg`, `bg-surface`, `text-ink-2`, `border-rule`, `text-primary`, and so on.
- To change the brand colours, edit `--primary` and `--secondary`. They drive the gradient text, buttons and card borders.
- `--pulse` sets the ECG colour.
- `--siren-red`, `--siren-blue` and `--siren-max` set the siren colours and peak brightness, per theme.

## Deploy

The site is fully static, so it deploys to any Node host. The easiest option is [Vercel](https://vercel.com/new):

1. Push to GitHub.
2. Import the repository on Vercel and accept the defaults.
3. Optionally add a custom domain.

## Contact

- Email: [ayushranjan94300@gmail.com](mailto:ayushranjan94300@gmail.com)
- GitHub: [ayushranjan828](https://github.com/ayushranjan828)
- LinkedIn: [ayush-ranjan](https://www.linkedin.com/in/ayush-ranjan)
