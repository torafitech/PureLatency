# instructions.md — coding conventions observed in this repo

## Language
TypeScript throughout (`.tsx`/`.ts`). `strict: true` in `tsconfig.json`. No plain `.jsx`/`.js`
components (one duplicate legacy `tsconfig.json`/`next.config.js`/`tailwind.config.js` set under
`src/` was removed as dead weight — root-level configs are the real ones Next.js reads).

## Component naming
- PascalCase filenames matching the default export: `Hero.tsx` → `export default function Hero()`.
- Section components live in `src/components/layout/sections/`, one file per homepage/page section.
- Shared primitives (`Button`, `Badge`, `Container`, `SectionTitle`) live in
  `src/components/layout/ui/`.
- `'use client'` directive is used liberally — most interactive/animated components
  (Hero, Navbar, Stats) are client components even where server rendering would work; this repo
  does not lean on Server Components for content sections.
- **Caveat:** component names don't always match content. `Stats.tsx` renders the "What We Offer"
  service grid, not stats — check the JSX, not the filename, before assuming behavior.

## Styling — mixed, no single convention
Three approaches coexist; pick based on what the file you're editing already uses, don't convert:
1. **CSS Modules** (`*.module.css`) — most common. One module per page/section
   (`Navbar.module.css`, `services/Services.module.css`, `about/About.module.css`, etc).
   Classnames are camelCase, imported as `styles` and referenced `styles.foo`.
2. **Inline `<style>` tag with plain BEM-ish classes** — used in `Hero.tsx` only, as of this
   inspection. Classes like `.hero`, `.hero-text`, `.hero-scene`, `.hero-btn-primary` are
   hyphenated, hand-written, and scoped by convention only (not CSS Modules, no hashing) — inline
   directly in the component's JSX via a `<style>{\`...\`}</style>` block. Fragile: no
   auto-scoping, relies on className uniqueness across the whole app.
3. **Tailwind v4** (`@tailwindcss/postcss` via `postcss.config.mjs`, imported in `globals.css`
   with `@import 'tailwindcss'`) — used for small utility touches (e.g. `font-sans` on `<body>`
   in `layout.tsx`). No `tailwind.config.js` is active (v4 is CSS-first / config-file-less here;
   the old `src/tailwind.config.js` was Tailwind v3-syntax, unreferenced by any `@config`
   directive, and has been removed as dead).

When adding new sections, prefer CSS Modules (approach 1) — it's the dominant, safest pattern.
Only use the inline-`<style>` approach if extending Hero.tsx itself for consistency with its
existing block.

## Animation
Framer Motion (`framer-motion` v12) for entrance/scroll animations — see `fadeUp()` helper
pattern in `Hero.tsx` (returns `{ initial, animate, transition }` spread onto `motion.*`
components). Raw `<canvas>` + `requestAnimationFrame` and raw Three.js (`useRef` + manual
scene/renderer setup in `useEffect`, no `@react-three/fiber` JSX) are both used directly for
custom visual effects (see `GlobeScene`/`WaveCanvas` in Hero.tsx) even though
`@react-three/fiber` + `@react-three/drei` are installed dependencies — new 3D work should
prefer the R3F/drei declarative approach over raw Three.js `useEffect` scenes for
maintainability, since that's what the installed deps suggest is intended.

## Linting / formatting
- ESLint flat config (`eslint.config.mjs`), extends `eslint-config-next` (`core-web-vitals` +
  `typescript`). Run: `yarn lint` (or `npm run lint` — script is `eslint`, no args).
- No Prettier config found. No pre-commit hook config (`.husky`, `lint-staged`) found.
- `next.config.ts` enables `reactCompiler: true` (React Compiler / babel-plugin-react-compiler
  is a devDependency) — avoid patterns that defeat auto-memoization (e.g. unnecessary manual
  `useMemo`/`useCallback` micromanagement); trust the compiler.

## Known repo cruft (found during inspection, left in place — not asked to remove)
- `src/components/pages/*` — old Pages-Router-style files (`index.tsx`, `document.tsx`,
  `app.tsx`, `insights.tsx`, `process.tsx`, `services.tsx`, `work.tsx`, and one with a space in
  the filename: `why us.tsx`). App uses App Router exclusively (`src/app/`) — these appear to be
  unused leftovers from an earlier scaffold. Not imported anywhere found during this inspection.
- `src/components/types/` — `navigation.ts` and a file literally named `TS index.ts` (space in
  filename). Unclear if used; not verified.
- If asked to do a broader cleanup pass, flag these to the user before deleting — same as was
  done for the Staxt/dead-canvas-component/duplicate-config cleanup earlier.

## Git / credentials
`.git/config` remote URL was found to contain a plaintext GitHub PAT. Flagged to user directly;
not a coding convention, but relevant if scripting anything that touches git remotes — do not
echo `git remote -v` output to logs/PRs/docs without redacting.
