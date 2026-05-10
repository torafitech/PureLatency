# PureLatency — Project Context

## Company
**Pure Latency** is a next-generation technology company based in Hyderabad, India.
It provides AI, IT, and infrastructure services, and also ships its own proprietary products.

### Positioning
- Next-gen enterprise technology platform
- Core pillars: **AI · Infrastructure · Products**
- Target: enterprises, telcos, government, and space-tech

### Products
- **Starling Post** — own product (route: `/products/starling-post`)

### Service Lines
- Applications, Web Development, Data & AI, Cloud & DevOps, Infrastructure, Fiber Optics, Quantum Compute

---

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion v12
- **3D**: Three.js + @react-three/fiber + @react-three/drei
- **Backend/DB**: Firebase (Firestore + Auth)
- **Email**: Resend + EmailJS
- **Icons**: Lucide React, Font Awesome
- **Package manager**: Yarn

---

## Design System

### Hero Design (Dark Theme)
- **Background**: `#06091a` (deep dark blue-black)
- **Accent**: `#00d4ff` (electric cyan)
- **Headline font**: `Syne` (variable: `--font-syne`), weight 800
- **Body font**: `DM Sans` (variable: `--font-dm-sans`)
- **Body font (legacy)**: `Inter` (variable: `--font-inter`) — used site-wide outside hero

### Design Principles
- Minimalistic, premium, enterprise feel
- Dark hero → white body sections (gradient transition at bottom of hero)
- Globe with animated signal/EM waves as the visual centrepiece of the hero
- No purple-gradient-on-white clichés
- Avoid Inter, Roboto, Arial for display text

### Color Palette (Hero)
| Token | Value | Use |
|-------|-------|-----|
| BG | `#06091a` | Hero background |
| Accent | `#00d4ff` | Badge, glow, orbit rings |
| Text primary | `#ffffff` | Headlines |
| Text secondary | `#7a90b8` | Subheadlines |
| Text muted | `#4a5878` | Captions |

---

## File Structure (key paths)
```
src/
  app/
    layout.tsx            — Root layout, font loading (Inter, Syne, DM Sans)
    page.tsx              — Home page (Navbar → Hero → Stats → ContactBanner → Footer)
    globals.css           — Global styles, Tailwind import
    contact/page.tsx
    products/page.tsx
    services/page.tsx
    about/page.tsx
    industries/page.tsx
  components/
    layout/
      Navbar.tsx          — Top navigation with dropdowns (CSS Modules)
      Footer.tsx
      sections/
        Hero.tsx          — Dark hero: Three.js globe + canvas wave animation
        Stats.tsx         — "What We Offer" services grid (white bg)
        ContactBanner.tsx — CTA banner (dark gradient card on white bg)
      ui/
        Button.tsx
        Badge.tsx
        Container.tsx
        SectionTitle.tsx
  firebase.ts             — Firebase config
  api/contact/route.ts    — Contact form API route
```

---

## Globe Implementation (Hero)
Three.js renders into a full-viewport container (`inset-0`).
- Camera: `position (0, 0, 4.5)`, `lookAt(0, 0.5, 0)` → globe center appears at ~65% viewport height
- Globe radius: 1 world unit, SphereGeometry 96×96
- Textures: threejs.org CDN (earth_atmos, earth_normal)
- Orbit rings: 3 `THREE.Line` cyan rings at 1.38, 1.62, 1.88 radii
- Atmosphere: BackSide sphere at 1.09 radius, `#0033cc`, opacity 0.07
- Lighting: AmbientLight + 3 DirectionalLights (key=blue, rim=cyan, top=light-blue)

## Wave Animation (Hero)
Canvas2D overlay (`position: absolute, inset: 0, z-index: 15`).
- 9 sine waves, centered at `cy = h * 0.655` (globe equator estimate)
- Waves spaced ±28px apart, amplitudes 7–20px, frequencies 0.007–0.015
- 3-pass render: (1) full waves, (2) radial gradient overlay dims globe interior, (3) clipped dim waves inside globe for refraction effect
- Globe radius estimate: `Math.min(w,h) * 0.245`

---

## Navigation Structure
```
Home / Products (Starling Post) / Services (7 items) / Industries (Enterprise, Telco & Space) / About Us (Overview, Purpose & Beliefs) / Contact Us
```

---

## Contacts / Social
- Instagram, Facebook, Twitter: @purelatency
- Contact form: Firebase + Resend + EmailJS
