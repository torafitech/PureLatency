'use client'

import { motion, type Transition } from 'framer-motion'
import Link from 'next/link'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } as Transition,
})

const STATS = [
  { value: '200+',  label: 'Projects Delivered' },
  { value: '50+',   label: 'Enterprise Clients' },
  { value: '99.9%', label: 'Platform Uptime' },
]

export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          background: #000000;
          color: #ffffff;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 1.5rem 6rem;
          isolation: isolate;
        }

        /* Grid */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 75% 65% at 50% 45%, #000 25%, transparent 85%);
          -webkit-mask-image: radial-gradient(ellipse 75% 65% at 50% 45%, #000 25%, transparent 85%);
          pointer-events: none;
          z-index: 1;
        }

        /* Gradient orbs */
        .hero-orb-center {
          position: absolute;
          width: 900px; height: 900px;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(56,128,255,0.22) 0%, transparent 60%);
          filter: blur(40px);
          pointer-events: none;
          z-index: 2;
        }
        .hero-orb-left {
          position: absolute;
          width: 520px; height: 520px;
          left: 12%; top: 28%;
          background: radial-gradient(circle, rgba(168,85,247,0.16) 0%, transparent 60%);
          filter: blur(60px);
          pointer-events: none;
          z-index: 2;
        }
        .hero-orb-right {
          position: absolute;
          width: 520px; height: 520px;
          right: 10%; bottom: 18%;
          background: radial-gradient(circle, rgba(6,182,212,0.16) 0%, transparent 60%);
          filter: blur(60px);
          pointer-events: none;
          z-index: 2;
        }

        /* Triangle motif */
        .hero-triangle {
          position: absolute;
          left: 50%; top: 38%;
          transform: translate(-50%, -50%);
          width: 720px; max-width: 95vw;
          opacity: 0.18;
          pointer-events: none;
          z-index: 3;
        }
        .hero-triangle-2 {
          position: absolute;
          left: 50%; top: 38%;
          transform: translate(-50%, -50%) scale(0.55);
          width: 720px; max-width: 95vw;
          opacity: 0.10;
          pointer-events: none;
          z-index: 3;
        }

        /* Bottom fade to white */
        .hero-fade {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 180px;
          background: linear-gradient(to bottom, transparent, #ffffff);
          pointer-events: none;
          z-index: 4;
        }

        /* Content */
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 920px;
          width: 100%;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.45rem 1.1rem;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #d4d4d8;
          margin-bottom: 2rem;
        }
        .hero-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #06b6d4;
          box-shadow: 0 0 10px rgba(6,182,212,0.8);
        }

        .hero-h1 {
          font-family: var(--font-syne), Syne, sans-serif;
          font-size: clamp(3rem, 9.5vw, 7.2rem);
          font-weight: 800;
          letter-spacing: -0.045em;
          line-height: 0.95;
          margin: 0 0 1.4rem;
          background: linear-gradient(180deg, #ffffff 0%, #9ca3af 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-h1 .accent {
          background: linear-gradient(135deg, #60a5fa 0%, #06b6d4 45%, #a78bfa 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-pillars {
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          color: #71717a;
          font-size: clamp(0.78rem, 1vw, 0.9rem);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .hero-desc {
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          color: #a1a1aa;
          font-size: clamp(1rem, 1.45vw, 1.18rem);
          line-height: 1.65;
          max-width: 620px;
          margin: 0 auto 2.5rem;
        }

        .hero-ctas {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }
        .hero-btn-primary {
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          font-weight: 600;
          font-size: 0.92rem;
          padding: 0.85rem 1.75rem;
          border-radius: 9999px;
          background: #ffffff;
          color: #000000;
          text-decoration: none;
          transition: transform 0.18s, box-shadow 0.18s;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
        }
        .hero-btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 32px rgba(255,255,255,0.2);
        }
        .hero-btn-secondary {
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          font-weight: 500;
          font-size: 0.92rem;
          padding: 0.85rem 1.75rem;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.02);
          color: #ffffff;
          text-decoration: none;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          transition: background 0.18s, border-color 0.18s;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        .hero-btn-secondary:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.32);
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
          justify-content: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.08);
          max-width: 640px;
          margin: 0 auto;
        }
        .hero-stat-value {
          font-family: var(--font-syne), Syne, sans-serif;
          font-size: clamp(1.4rem, 2.2vw, 1.95rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 0.4rem;
        }
        .hero-stat-label {
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          font-size: 0.68rem;
          color: #71717a;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* TABLET ≤ 900 */
        @media (max-width: 900px) {
          .hero-orb-left, .hero-orb-right { width: 360px; height: 360px; }
          .hero-triangle { width: 540px; }
        }

        /* MOBILE ≤ 768 */
        @media (max-width: 768px) {
          .hero { padding: 6.5rem 1.25rem 4rem; min-height: 100svh; }
          .hero-grid { background-size: 36px 36px; }
          .hero-orb-center { width: 600px; height: 600px; }
          .hero-orb-left { width: 280px; height: 280px; left: 5%; top: 22%; }
          .hero-orb-right { width: 280px; height: 280px; right: 5%; bottom: 22%; }
          .hero-triangle { width: 380px; opacity: 0.14; }
          .hero-triangle-2 { width: 380px; }
          .hero-ctas {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            margin: 0 auto 3rem;
          }
          .hero-btn-primary, .hero-btn-secondary {
            justify-content: center;
            padding: 0.9rem 1.5rem;
            width: 100%;
          }
          .hero-stats {
            gap: 1.5rem;
            flex-wrap: wrap;
            padding-top: 1.5rem;
          }
          .hero-stats > div { flex: 1 1 30%; min-width: 90px; }
          .hero-fade { height: 120px; }
        }

        /* SMALL MOBILE ≤ 480 */
        @media (max-width: 480px) {
          .hero { padding: 6rem 1rem 3rem; }
          .hero-badge {
            font-size: 0.6rem;
            padding: 0.32rem 0.8rem;
            margin-bottom: 1.5rem;
            letter-spacing: 0.1em;
          }
          .hero-h1 {
            font-size: clamp(2.4rem, 13vw, 4rem);
            margin-bottom: 1rem;
          }
          .hero-pillars {
            font-size: 0.65rem;
            letter-spacing: 0.18em;
            margin-bottom: 1.2rem;
          }
          .hero-desc {
            font-size: 0.95rem;
            margin-bottom: 2rem;
          }
          .hero-stats { gap: 1rem; }
          .hero-stat-value { font-size: 1.4rem; }
          .hero-stat-label { font-size: 0.58rem; }
        }
      `}</style>

      <section className="hero">
        {/* Backdrop layers */}
        <div className="hero-grid" />
        <div className="hero-orb-center" />
        <div className="hero-orb-left" />
        <div className="hero-orb-right" />

        {/* Vercel-style triangle motif */}
        <svg className="hero-triangle" viewBox="0 0 600 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="triGrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#60a5fa" />
              <stop offset="0.5" stopColor="#06b6d4" />
              <stop offset="1" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <path d="M300 20 L580 500 L20 500 Z" stroke="url(#triGrad)" strokeWidth="1.2" fill="none" />
        </svg>
        <svg className="hero-triangle-2" viewBox="0 0 600 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M300 20 L580 500 L20 500 Z" stroke="url(#triGrad)" strokeWidth="1.5" fill="none" />
        </svg>

        {/* Content */}
        <div className="hero-content">
          <motion.div {...fadeUp(0.05)} className="hero-badge">
            <span className="hero-badge-dot" />
            Next-Gen Technology Platform
          </motion.div>

          <motion.h1 {...fadeUp(0.15)} className="hero-h1">
            Pure <span className="accent">Latency</span>
          </motion.h1>

          <motion.p {...fadeUp(0.28)} className="hero-pillars">
            AI &nbsp;·&nbsp; Infrastructure &nbsp;·&nbsp; Products
          </motion.p>

          <motion.p {...fadeUp(0.4)} className="hero-desc">
            We design, build, and operate AI-native systems and infrastructure —
            engineered for the next generation of enterprise.
          </motion.p>

          <motion.div {...fadeUp(0.52)} className="hero-ctas">
            <Link href="/services" className="hero-btn-primary">
              Explore Services
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className="hero-btn-secondary">Get a Demo</Link>
          </motion.div>

          <motion.div {...fadeUp(0.65)} className="hero-stats">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="hero-stat-value">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Fade to white for next section */}
        <div className="hero-fade" />
      </section>
    </>
  )
}
