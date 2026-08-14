# skills.md — relevant skill areas for this codebase

Reference doc listing what kinds of expertise apply to this repo as it stands. Not Anthropic's
skill system — just a map of "what to know" for anyone (human or AI) working here.

## Framework / rendering
- **Next.js 16, App Router** — all routing lives in `src/app/`, no `pages/` router in use
  (a few stray Pages-Router-shaped files exist under `src/components/pages/` but are not wired
  into routing — see `instructions.md` known-cruft section).
- **React 19** + **React Compiler** (`reactCompiler: true` in `next.config.ts`) — auto-memoization
  is on; write plain components, don't hand-roll `useMemo`/`useCallback` defensively.
- Client/server component boundaries — most content sections are `'use client'`; know when
  that's actually required (animation, browser APIs, event handlers) vs habit.

## Styling
- **CSS Modules** — primary approach, one `.module.css` per page/section.
- **Tailwind CSS v4**, CSS-first config (`@import 'tailwindcss'` in `globals.css`, no
  `tailwind.config.js`) — used sparingly for utility classes, not the dominant styling method.
- Reading/writing scoped-by-convention inline `<style>` blocks (Hero.tsx's pattern) — legacy,
  don't propagate to new files.

## Animation / 3D
- **Framer Motion v12** — entrance and scroll-linked animation.
- **Three.js** (raw, via `useEffect` + manual scene/camera/renderer) — currently how Hero's globe
  is built.
- **@react-three/fiber + @react-three/drei** — installed but not currently used anywhere found;
  the intended/preferred way to do new 3D work in this stack (declarative R3F over raw Three.js).
- Canvas 2D (`getContext('2d')` + `requestAnimationFrame`) for lightweight custom effects
  (Hero's wave background).

## Backend / data
- **Firebase** — Firestore (rules in `firestore.rules`, indexes in `firestore.indexes.json`) +
  Auth. `src/firebase.ts` holds config/init.
- **Next.js Route Handlers** — `src/api/contact/route.ts` exists but is **not reachable**: App
  Router route handlers must live under `src/app/api/`, and there is no `src/app/api/` directory
  in this repo. This file is dead code as currently placed — flag to user before assuming the
  contact form's backend call path works, and before deleting it (may be a known WIP, not
  necessarily cruft).
- **Resend** + **EmailJS** — dual email delivery paths for the contact form; know which one is
  actually wired live before assuming either is authoritative.

## Deployment
- **Vercel** — inferred from `.gitignore`'s `.vercel` entry (no committed `vercel.json` or
  `.vercel/` project folder found locally, so exact project link/env config isn't visible in
  the repo; check with the user or run `vercel link` to confirm the linked project before
  assuming settings).
- Package manager: **Yarn** (`yarn.lock` present, no `package-lock.json`/`pnpm-lock.yaml`).
- Local dev: `yarn dev` → `http://localhost:3000`. Build: `yarn build`. Start: `yarn start`.
  Lint: `yarn lint`.

## Icons / assets
- **Lucide React** + **Font Awesome** (loaded via CDN `<link>` in `layout.tsx`, not the npm
  package's CSS import — worth knowing if optimizing font/icon loading later).
- Images under `public/images/` — several service icons; note `qunatum-computing.png` has a
  typo in the filename (matches "Quantum Compute" service) — don't silently rename without
  checking all references first, since routes/img tags depend on the exact filename.

## Forms
- **react-phone-number-input** — used somewhere in the contact flow (dependency present).
- **SWR** — listed as a dependency but has **zero usages** found anywhere in `src/`. Either dead
  weight in `package.json` or reserved for unbuilt work — don't assume a fetching pattern exists.
