# CLAUDE.md — ary-x86.github.io

Project rules for Claude when working in this repo.

## Project summary

Personal portfolio for Aryan Swami-Persaud (Data Science & AI student, Leafshift founder).
Dual-mode "mullet" architecture:

- `/` — **Pro**: calm, animation-forward landing. Student + contact/CV framing.
- `/fun` — **Fun/student side**: Spline wave bg + robot accent + 3D perspective carousel w/ category filter. University coursework, essays, hobby research, experiments. First-of-session boot-screen entrance (FunBootScreen).
- `/archive` — semi-hidden older coursework (TFA+U, ITP Mock).
- **Vault** — typed-phrase easter egg (`"sisi"` / `"meow"`) reveals boot-screen overlay with meme sites + old flat index.
- `/legacy/` — preserved original flat `index.html` at `public/legacy/index.html`.

## Stack

- Next.js 15 App Router + TypeScript + Tailwind v4
- shadcn/ui (to be initialized), Framer Motion, GSAP + ScrollTrigger
- @splinetool/react-spline, three + @react-three/fiber + @react-three/drei
- Static export via `output: 'export'` → GitHub Pages via Actions (`gh-pages` artifact)

## Rules

1. **Never edit files inside `public/<legacy-project>/`** — those are frozen legacy assets. Move-only, never mutate. Preserving URL structure is a hard requirement: 11 hardcoded `https://ary-x86.github.io/...` absolute URLs must keep resolving.
2. **`lib/projects.ts` is the single source of truth** for project metadata. Add/move projects there, not in page components.
3. **Static export constraints** — no dynamic routes, `images.unoptimized: true`, no server actions, no route handlers. `trailingSlash: true` for GH Pages friendliness.
4. **Mode transition** — route-level AnimatePresence morph between `/` and `/fun`. Cube toggle in top-right of both.
5. **Easter egg state is never persisted** — local keypress buffer only, no localStorage, no cookies.
6. **Large binaries** (`best_edits/` 46MB video) are deferred to Phase 6 for external hosting. In-repo for now.
7. **Typography** — Space Grotesk (headings, `-0.04em`, 700) + Inter (body, 300–400, `line-height: 1.8`).
8. **Phases** — see `project_specs.md`. Each phase leaves a shippable site. Don't skip ahead.

## Commands

- `npm run dev` — local dev at `http://localhost:3000`
- `npm run build` — static export to `out/`
- `npm run lint` — ESLint

## Deploy

Push to `main` → `.github/workflows/deploy.yml` builds + uploads `out/` to Pages.
Repo Settings → Pages must be set to **Source: GitHub Actions** (one-time).

## Plan file

Approved plan lives at `/home/aryan/.claude/plans/okay-to-give-you-cached-treehouse.md` (outside repo). `project_specs.md` tracks ongoing spec.
