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
- **Apple.com-style minimalism**: generous whitespace, restrained decoration, content-first. No heavy geometric motifs, gradient orbs, or decorative triangles.
- Dark hero → white body sections (gradient transition at bottom of hero)
- Logo (`/images/logo.png`) must appear in the hero section, centered, above the headline
- One very subtle ambient glow maximum — no stacked orbs, no grid overlays, no triangle motifs
- Solid white headlines on dark bg; accent (`#00d4ff`) only for badge dot and inline highlights
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
        Hero.tsx          — Dark hero: logo + centered minimal layout, apple.com style
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

---

## Navigation Structure
```
Home / Products (Starling Post) / Services (7 items) / Industries (Enterprise, Telco & Space) / About Us (Overview, Purpose & Beliefs) / Contact Us
```

---

## Contacts / Social
- Instagram, Facebook, Twitter: @purelatency
- Contact form: Firebase + Resend + EmailJS
