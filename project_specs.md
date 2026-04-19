# project_specs.md — ary-x86.github.io

Living spec for the redesign. Update as decisions evolve.

## Identity & framing

- **Owner**: Aryan Swami-Persaud
- **Pro angle**: Data Science & AI student + Contact/CV gateway (not Leafshift-founder-forward; Leafshift surfaces as work shown)
- **Creative angle**: polymath exploration — math/CS visualizers, essays, research, art

## Routes

| Path | Purpose |
|---|---|
| `/` | Pro landing — hero, about, selected work, contact |
| `/fun` | Student-side landing — category-filtered 3D carousel (assignments / explainers / visualizations / essays / hobby research / fun). Wave-spline hero + robot accent + first-of-session boot screen |
| `/archive` | TFA+U Explain, ITP Mock. Subtle footer link from `/fun` |
| `/legacy/` | Preserved original flat index (`public/legacy/index.html`) |
| Vault (overlay) | Easter egg reveal — not a URL. Triggered by typing `sisi` / `meow` |

## Content buckets

**Pro (`/`):**
- Leafshift / AgriAI
- DROS system
- DROS research paper
- Application Security A2
- Contact / CV / LinkedIn / GitHub

**Creative — University Goodies:**
- Calc2 2nd-deriv visualizer
- Min-Span-Tree visualizer
- Least-Squares visualizer (`visual 1/`)
- Application Security A2
- DROS paper

**Creative — Essay Goodies:**
- DST-AOW-Leeftijd (systems thinking × Dutch pension politics)

**Creative — Fun Research:**
- AgriAI-DROS + research paper

**Archive:**
- TFA U Explain
- ITP-Test

**Vault:**
- electrolight_sport, stopspongeclock, sisi_incident, insane_sisi2, sisi_update_v3, best_edits
- Link to `/legacy/`

## Design system

- **Fonts**: Space Grotesk 700 / tracking -0.04em (headings); Inter 300–400 / line-height 1.8 (body)
- **Pro palette**: charcoal `#0b0b0f`, off-white text, single accent (TBD: cyan `#00d4ff` or muted amber)
- **Creative palette**: lighter, colorful, Spline 3D hero
- **Effects**: radial gradient glows, noise overlay, `backdrop-blur` cards
- **Mode toggle**: cube in top-right, morphs fullscreen on click, URL updates, cube shrinks into new layout

## Phases

| # | Goal | Status |
|---|---|---|
| 1 | Foundation — scaffold, relocate legacy, Actions workflow | **in progress** |
| 2 | Pro page — hero, about, work grid, contact | pending |
| 3 | Creative page — Spline hero, sections, archive | pending |
| 4 | Mode transition — cube toggle + AnimatePresence morph | pending |
| 5 | Vault easter egg — keypress listener + boot overlay | pending |
| 6 | Polish — typography, mobile, Lighthouse, external video host | pending |

## Decisions deferred

- Exact Pro hero copy / tagline
- Photo vs no-photo
- Contact: public email vs form vs LinkedIn-only
- Accent color (cyan vs amber — mock both)
- Additional easter-egg triggers beyond `sisi`/`meow`
- Custom domain vs `ary-x86.github.io`

## External references

- Plan file: `/home/aryan/.claude/plans/okay-to-give-you-cached-treehouse.md`
- Design reference videos: see memory `reference_design_tutorials.md`
- Design ref PDFs/transcripts: `3-vids-how-to-make-good-site/` (gitignored)
- Spline scene: `public/scene.splinecode` (not yet placed — user will supply)

## Preserved-URL contract

All legacy folder names under `public/` stay exactly as-is. 11 absolute `https://ary-x86.github.io/...` URLs inside Application Security + Calc2 subfolders must keep resolving. Relative `../` cross-links between sibling legacy dirs (e.g. Calc2 → MST) also preserved.
