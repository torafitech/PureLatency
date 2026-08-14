# context.md — Pure Latency (business/product context)

## Company
Pure Latency (purelatency.com) — AI + IT services company, Hyderabad, India.
Positioning: next-gen enterprise technology platform. Pillars: AI · Infrastructure · Products.
Targets: enterprises, telcos, government, space-tech.

## Homepage structure (`src/app/page.tsx`)
Order: `Navbar` → `Hero` → `Stats` (rendered as "What We Offer" grid) → `ContactBanner` → `Footer`.
`Accreditations` is imported but commented out — not currently live.

### Hero
Split layout, white background, dark navy (`#06091a`) headline text, cyan (`#00d4ff`) accent.
Right column (`.hero-scene`) holds a hand-rolled Three.js globe (`GlobeScene`) + animated
sine-wave canvas (`WaveCanvas`), both defined inline in `Hero.tsx`. Stats row (200+ projects /
50+ clients / 99.9% uptime) exists in code but is commented out — not rendered.

### "What We Offer" (component name `Stats`, misleading — it's the service grid, not stats)
8 service cards, alternating image/text layout, styled via `src/app/services/Services.module.css`:
1. Applications
2. Web Development
3. Data and AI
4. Cloud and DevOps
5. Infrastructure
6. Fiber Optics
7. Quantum Compute
8. AI Services

**Positioning risk (flag, do not silently fix):** *Fiber Optics* and *Quantum Compute* are
listed as core service lines alongside validated ones (Applications, Web Dev, Data/AI,
Cloud/DevOps). These two are aspirational — no evidence in the codebase (case studies, dedicated
depth, or client references) that they're operating businesses yet, unlike the others. Keep them
in the UI (not asked to remove), but:
- Don't treat them as equally mature when writing new copy/case-studies/proof-points.
- Don't extend other pages (About, Industries) to imply established quantum/fiber track record
  without checking with the user first.
- If asked to "add more detail" to service pages, ask whether Fiber Optics / Quantum Compute
  should stay high-level/aspirational in tone vs the others.

### Contact CTA
`ContactBanner` — dark gradient card on white background, links to `/contact`.
Contact form itself: Firebase (Firestore) + Resend + EmailJS, route at `src/api/contact/route.ts`.

## Products
- **Starling Post** — proprietary product, route `/products/starling-post`.

## Service lines (site-wide, `/services/*`)
Applications, Web Development, Data & AI, Cloud & DevOps, Infrastructure, Fiber Optics,
Quantum Compute (7 named in nav; homepage grid adds an 8th, "AI Services", not in the original
nav list documented pre-inspection — confirm with user if that's intentional drift or should be
folded into "Data and AI").

## Other site sections
- `/about` — Overview, Purpose & Beliefs (per nav)
- `/industries` — Enterprise, Telco & Space, Government (an industries subpage exists for
  Government too — not mentioned in nav docs, confirm if it should be linked)
- `/partners`
- `/contact`

## Socials
Instagram, Facebook, Twitter: @purelatency

## Recent changes
- **2026-08-04** — Hero globe rebuilt on `react-globe.gl` (new dep, +three peer). Replaced
  hand-rolled raw-Three.js `GlobeScene`/`WaveCanvas` (previously inline in `Hero.tsx`) with
  `src/components/layout/sections/HeroGlobe.tsx` — client component, dynamically imported
  (`ssr: false`) from `Hero.tsx`. Flat dark globe (`#06091a`, real site hex), white low-opacity
  atmosphere, 10 hardcoded arcs between global hub cities (Hyderabad-centric), slow auto-rotate,
  zoom/pan disabled, camera POV set to `{lat:20, lng:60}` so arcs stay visible against default
  rotation. Sizes responsively via `ResizeObserver` to fill `.hero-scene`'s existing footprint —
  scope stayed strictly inside that div, `.hero-text` untouched. Country border outlines added
  (`polygonsData`, thin white stroke, near-transparent fill) so the sphere reads as a world map
  instead of a blank ball — data is Natural Earth 110m admin-0 countries, copied from
  `node_modules/globe.gl/example/datasets/` into `public/data/world-countries-110m.geojson`
  (public domain, fetched client-side, no external network call at runtime).
- **2026-08-04** — Repo cleanup: removed dead files found during inspection — empty stray
  `Staxt`, 8 unused canvas/globe experiment components (`GlobalArcCanvas`, `NetworkCanvasBack`,
  `NetworkCanvasFront`, `HorizontalNetworkCanvas`, `AdvancedNetworkWave`, `NetworkMotionCanvas`,
  `UniverseCanvas`, `EarthWithNetwork3D`, `GeometricBackground`), unused `public/models/earth.glb`,
  and duplicate/dead config files (`src/next.config.js`, `src/tsconfig.json`,
  `src/tailwind.config.js` — root-level configs are the real ones in use).
- Known issue, not fixed (flagged, left as-is): `src/api/contact/route.ts` is unreachable —
  App Router route handlers must live under `src/app/api/`, which doesn't exist. Contact form
  backend wiring may be broken.
- Design decision: considered full-bleed globe-as-hero-background with text overlaid on top;
  rejected in favor of keeping the split two-column layout (text left, globe right) for
  contrast/accessibility, responsive simplicity, and fit with the apple.com-minimalism design
  principles already documented for this project.
