# Vaughn Joshua — Portfolio

My personal portfolio: a single-page site showcasing my projects, professional
experience, skills, and the work I do beyond writing code. Built with React,
TypeScript, Vite, and Tailwind CSS, and deployed to GitHub Pages.

🔗 **Live:** https://vaughn-joshua.github.io/Portfolio

## Highlights

- **Single-page scroll layout** — a full-viewport hero, a sticky identity
  sidebar, and stacked sections (About, Experience, Projects, Education).
- **Scroll-spy navigation** — the side nav highlights whichever section is in
  view, powered by `IntersectionObserver`.
- **Overlay detail pages** — projects, the internship, the full About, and
  "Beyond the Code" open as full-screen takeovers with fade/slide transitions
  and Escape-to-close.
- **"Beyond the Code"** — a dedicated view for non-technical strengths
  (communication, service mindset, freelance and community experience).
- **Fully typed** — every component, hook, and the project data is written in
  TypeScript with `strict` mode on.

## Tech stack

| Area       | Choice                                  |
| ---------- | --------------------------------------- |
| Framework  | React 19                                |
| Language   | TypeScript (strict)                     |
| Build tool | Vite 7                                  |
| Routing    | React Router 7                          |
| Styling    | Tailwind CSS 4 + hand-written CSS       |
| Linting    | ESLint 9 (flat config) + typescript-eslint |
| Hosting    | GitHub Pages (`gh-pages`)               |

## Getting started

The app lives in [`frontend/`](frontend/). All commands run from there:

```bash
cd frontend
npm install      # install dependencies
npm run dev      # start the Vite dev server (http://localhost:5173)
```

### Available scripts

| Script              | What it does                                          |
| ------------------- | ----------------------------------------------------- |
| `npm run dev`       | Start the dev server with hot module replacement.     |
| `npm run build`     | Type-check (`tsc -b`) then produce a production build. |
| `npm run typecheck` | Run the TypeScript compiler without emitting output.  |
| `npm run lint`      | Lint the project with ESLint.                         |
| `npm run preview`   | Serve the production build locally.                   |
| `npm run deploy`    | Build and publish `dist/` to GitHub Pages.            |

> From the repo root, `npm run dev` is a shortcut that runs the frontend dev
> server.

## Project structure

```
frontend/
├── index.html              # App entry; loads /src/main.tsx
├── vite.config.ts          # Vite config (React, Tailwind, GitHub Pages base)
├── tsconfig*.json          # TypeScript project references (app + node)
└── src/
    ├── main.tsx            # Router + app bootstrap
    ├── App.tsx             # Layout shell: Hero + Sidebar + <Outlet/>
    ├── types.ts            # Shared types (e.g. the Project shape)
    ├── index.css           # Tailwind import + the site's styles
    ├── assets/             # Resume PDF and images
    ├── components/
    │   ├── Sidebar.tsx     # Sticky identity / actions / nav / socials
    │   ├── SideNav.tsx     # In-page section links
    │   ├── Socials.tsx     # Social icons + copy-email-to-clipboard
    │   ├── sections/       # About, Experience, Projects, Education cards
    │   └── ui/             # Tag, SectionLabel, BackButton, Overlay
    ├── data/
    │   └── projects.tsx    # Project & internship content
    ├── hooks/
    │   └── useScrollSpy.ts # IntersectionObserver-based active-section hook
    └── routes/
        ├── Home.tsx        # Landing page (stacked sections)
        ├── HeroPage.tsx    # Full-viewport intro
        ├── AboutPage.tsx   # Full About overlay
        ├── DetailPage.tsx  # /projects/:slug + the internship detail
        └── BeyondPage.tsx  # "Beyond the Code" takeover
```

## Deployment

The site is served from the `/Portfolio` subpath on GitHub Pages, which is wired
up in two places:

- `base: "/Portfolio/"` in [`frontend/vite.config.ts`](frontend/vite.config.ts)
- `basename="/Portfolio"` on the router in
  [`frontend/src/main.tsx`](frontend/src/main.tsx)

To publish the latest build:

```bash
cd frontend
npm run deploy
```

## Notes

- Project case-study copy lives in
  [`frontend/src/data/projects.tsx`](frontend/src/data/projects.tsx); some of the
  longer write-ups are still being finalized.
- See [`MIGRATION.md`](MIGRATION.md) for the history of the redesign from the
  previous multi-page version.
