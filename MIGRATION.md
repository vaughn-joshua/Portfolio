# Portfolio Redesign — Migration Plan

Migrating the portfolio from the old React multi-page app to the new
single-page scroll layout based on `frontend/reference/index.html`.

**Branch:** `post-graduation`
**Old version preserved as:** tag `v1` + branch `before-internship` (both on the
pre-redesign commit, backed up on `origin`).

## Decisions made

- **Approach:** Port the reference into React components; keep Vite + Tailwind;
  reuse the reference's raw CSS (not a Tailwind rewrite).
- **Cleanup:** Delete the old pages/components outright (v1 is safely tagged).
- **Pacing:** Phase by phase, with a check-in after each.

## Target structure

| Reference piece                       | React target                                        |
| ------------------------------------- | --------------------------------------------------- |
| `PROJECTS` + `INTERNSHIP` arrays      | `src/data/projects.js`                              |
| `<style>` block                       | `src/index.css` (appended below the Tailwind import) |
| Google Fonts `<link>`s                | `frontend/index.html` `<head>`                      |
| `#hero`                               | `components/Hero.jsx`                                |
| `aside.left`                          | `components/Sidebar.jsx`                             |
| right-column sections                 | `About`, `Experience`, `Projects`, `Education`, `Contact` |
| 3 overlays + JS behavior              | `DetailOverlay.jsx`, `AboutOverlay.jsx`, `BeyondOverlay.jsx` + hooks in `App.jsx` |

---

## Phase 0 — Safety ✅ DONE

- [x] `post-graduation` branch is the redesign sandbox; working tree clean.
- [x] Tag `v1` created on `master` and pushed to `origin`.
- [x] `before-internship` branch preserves the same pre-redesign snapshot.
- [x] README documents the versions (tag + branches).

## Phase 1 — Clear out the old multi-page app ✅ DONE

- [x] Delete `src/pages/*` (Home, Project, Experience, About).
- [x] Delete `src/components/Menu.jsx`, `NavBar.jsx`.
- [x] Delete `src/App.css`.
- [x] Strip router from `main.jsx` (renders `<App />` directly).
- [x] Replace `App.jsx` with a minimal placeholder.
- [x] Verify: no dangling references, `npm run build` passes.
- [ ] Commit Phase 1 as a clean checkpoint. _(pending)_

## Phase 2 — Lay the new foundation ⬜ NEXT

- [ ] Add Google Fonts `<link>`s to `frontend/index.html` `<head>`.
- [ ] Append the reference's `<style>` block to `src/index.css`.
- [ ] Render a single-page `App.jsx` shell (hero + sticky-left + right column
      scaffolding) so the layout boots in the browser.
- [ ] Verify in the browser that the base layout matches the reference.

## Phase 3 — Build the components ⬜

- [ ] Move `PROJECTS` + `INTERNSHIP` into `src/data/projects.js`.
- [ ] `Hero.jsx`
- [ ] `Sidebar.jsx` (name, actions, sidenav, socials).
- [ ] Right column: `About.jsx`, `Experience.jsx`, `Projects.jsx`
      (+ `ProjectCard.jsx`), `Education.jsx`, `Contact.jsx`.
- [ ] Overlays: `DetailOverlay.jsx`, `AboutOverlay.jsx`, `BeyondOverlay.jsx`.
- [ ] Convert reference JS to React:
  - [ ] Overlay open/close → `useState` (shared detail builder for projects +
        internship, with prev/next nav).
  - [ ] Escape-to-close handler.
  - [ ] Sidenav scroll-spy → `IntersectionObserver` in `useEffect`.
  - [ ] `scrollToWork` / resume-open helpers.

## Phase 4 — Wire data + polish ⬜

- [ ] Replace all `Lorem ipsum` project copy (overview, whatIDid, whatILearned,
      challenges) with real content.
- [ ] Set the real `RESUME_URL`.
- [ ] Fix GitHub Pages deploy: set `base` in `vite.config.js` (router-based
      `basename` was removed) and confirm asset paths.
- [ ] Uninstall `react-router-dom`; remove unused `src/assets/react.svg`.
- [ ] Final build + browser check; deploy.

---

## Deferred housekeeping (tracked so it isn't forgotten)

- `react-router-dom` still in `package.json` — uninstall in Phase 4.
- `src/assets/react.svg` now unused — remove in Phase 4.

## Suggested commit sequence

1. Phase 1 — delete old pages/components + router removal.
2. Phase 2 — foundation (CSS, fonts, shell).
3. Phase 3 — components + data + overlay behavior.
4. Phase 4 — real content + deploy config.
