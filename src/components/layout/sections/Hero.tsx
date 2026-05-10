'use client'

import { motion, type Transition } from 'framer-motion'
import Link from 'next/link'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
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
        /* ─── Hero ─────────────────────────────────────────── */
        .hero {
          background: #ffffff;
          /* Clear fixed navbar (80px) + breathable top space */
          padding: calc(80px + 5.5rem) 1.5rem 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          box-sizing: border-box;
          text-align: center;
        }

        .hero-inner {
          max-width: 820px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── Label ─ */
        .hero-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 2.25rem;
        }
        .hero-label-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00d4ff;
          box-shadow: 0 0 7px rgba(0, 212, 255, 0.8);
          flex-shrink: 0;
        }

        /* ── Headline ─ */
        .hero-h1 {
          font-family: var(--font-syne), 'Syne', sans-serif;
          font-size: clamp(3.2rem, 9vw, 6.8rem);
          font-weight: 800;
          letter-spacing: -0.045em;
          line-height: 1.0;
          color: #06091a;
          margin: 0 0 0.2rem;
        }
        /* "Latency" — only decoration: single cyan underline */
        .hero-h1 .word-latency {
          position: relative;
          display: inline-block;
        }
        .hero-h1 .word-latency::after {
          content: '';
          position: absolute;
          left: 0; right: 0;
          bottom: -4px;
          height: 3px;
          background: #00d4ff;
          border-radius: 2px;
          transform-origin: left;
          animation: underline-grow 0.6s 0.7s both cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes underline-grow {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }

        /* ── Pillars ─ */
        .hero-pillars {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #d1d5db;
          margin: 1.8rem 0 0;
        }

        /* ── Description ─ */
        .hero-desc {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: clamp(1rem, 1.4vw, 1.12rem);
          color: #6b7280;
          line-height: 1.7;
          max-width: 520px;
          margin: 1.75rem auto 2.75rem;
        }

        /* ── CTAs ─ */
        .hero-ctas {
          display: flex;
          gap: 0.7rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 5rem;
        }
        .hero-btn-primary {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          padding: 0.78rem 1.8rem;
          border-radius: 9999px;
          background: #06091a;
          color: #ffffff;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.38rem;
          transition: opacity 0.15s, transform 0.15s;
          letter-spacing: 0.01em;
        }
        .hero-btn-primary:hover {
          opacity: 0.8;
          transform: translateY(-1px);
        }
        .hero-btn-ghost {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          padding: 0.78rem 1.8rem;
          border-radius: 9999px;
          background: transparent;
          color: #06091a;
          border: 1px solid rgba(6, 9, 26, 0.18);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.38rem;
          transition: border-color 0.15s, background 0.15s;
        }
        .hero-btn-ghost:hover {
          border-color: rgba(6, 9, 26, 0.38);
          background: rgba(6, 9, 26, 0.03);
        }

        /* ── Stats ─ */
        .hero-stats {
          width: 100%;
          max-width: 540px;
          border-top: 1px solid rgba(6, 9, 26, 0.07);
          padding-top: 2.25rem;
          display: flex;
        }
        .hero-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .hero-stat + .hero-stat::before {
          content: '';
          position: absolute;
          left: 0; top: 15%; bottom: 15%;
          width: 1px;
          background: rgba(6, 9, 26, 0.07);
        }
        .hero-stat-value {
          font-family: var(--font-syne), 'Syne', sans-serif;
          font-size: clamp(1.6rem, 2.5vw, 2.1rem);
          font-weight: 700;
          color: #06091a;
          line-height: 1;
          margin-bottom: 0.35rem;
        }
        .hero-stat-label {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.63rem;
          color: #9ca3af;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        /* ── Responsive ─────────────────────────────────────── */
        @media (max-width: 900px) {
          .hero { padding: calc(80px + 4rem) 1.5rem 4rem; }
        }

        @media (max-width: 768px) {
          .hero {
            padding: calc(80px + 3rem) 1.25rem 3.5rem;
            min-height: 100svh;
          }
          .hero-ctas {
            flex-direction: column;
            width: 100%;
            max-width: 290px;
            margin-bottom: 3.5rem;
          }
          .hero-btn-primary,
          .hero-btn-ghost {
            justify-content: center;
            width: 100%;
          }
          .hero-stats { max-width: 100%; }
        }

        @media (max-width: 480px) {
          .hero { padding: calc(80px + 2.5rem) 1rem 3rem; }
          .hero-label { font-size: 0.6rem; letter-spacing: 0.14em; margin-bottom: 1.75rem; }
          .hero-h1 { font-size: clamp(2.6rem, 13vw, 3.8rem); }
          .hero-pillars { font-size: 0.6rem; letter-spacing: 0.18em; }
          .hero-desc { font-size: 0.95rem; margin-bottom: 2rem; }
          .hero-ctas { max-width: 100%; }
          .hero-stats { padding-top: 1.75rem; }
          .hero-stat-value { font-size: 1.4rem; }
          .hero-stat-label { font-size: 0.58rem; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-inner">

          {/* Label */}
          <motion.div {...fadeUp(0.0)} className="hero-label">
            <span className="hero-label-dot" />
            Next-Gen Technology Platform
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.12)} className="hero-h1">
            Pure{' '}
            <span className="word-latency">Latency</span>
          </motion.h1>

          {/* Pillars */}
          <motion.p {...fadeUp(0.22)} className="hero-pillars">
            AI &nbsp;·&nbsp; Infrastructure &nbsp;·&nbsp; Products
          </motion.p>

          {/* Description */}
          <motion.p {...fadeUp(0.34)} className="hero-desc">
            We design, build, and operate AI-native systems and infrastructure —
            engineered for the next generation of enterprise.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.46)} className="hero-ctas">
            <Link href="/services" className="hero-btn-primary">
              Explore Services <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className="hero-btn-ghost">Get a Demo</Link>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.6)} className="hero-stats">
            {STATS.map(s => (
              <div key={s.label} className="hero-stat">
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  )
}
