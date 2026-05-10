'use client'

import { motion, type Transition } from 'framer-motion'
import Image from 'next/image'
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
        .hero {
          position: relative;
          min-height: 100vh;
          background: #06091a;
          color: #ffffff;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 9rem 1.5rem 7rem;
          isolation: isolate;
        }

        /* Single subtle ambient glow — minimal, not decorative */
        .hero-glow {
          position: absolute;
          width: 700px;
          height: 700px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -55%);
          background: radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 65%);
          pointer-events: none;
          z-index: 1;
        }

        /* Bottom fade to white body */
        .hero-fade {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 160px;
          background: linear-gradient(to bottom, transparent, #ffffff);
          pointer-events: none;
          z-index: 4;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 760px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Logo */
        .hero-logo {
          margin-bottom: 2.5rem;
          opacity: 0.95;
        }

        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.42rem 1rem;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #7a90b8;
          margin-bottom: 2rem;
        }
        .hero-badge-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00d4ff;
          box-shadow: 0 0 8px rgba(0,212,255,0.9);
          flex-shrink: 0;
        }

        /* Headline */
        .hero-h1 {
          font-family: var(--font-syne), Syne, sans-serif;
          font-size: clamp(2.8rem, 8vw, 6rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          margin: 0 0 1.2rem;
          color: #ffffff;
        }
        .hero-h1 .accent {
          color: #00d4ff;
        }

        /* Pillars */
        .hero-pillars {
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          color: #4a5878;
          font-size: 0.75rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 500;
          margin-bottom: 1.75rem;
        }

        /* Description */
        .hero-desc {
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          color: #7a90b8;
          font-size: clamp(1rem, 1.4vw, 1.12rem);
          line-height: 1.7;
          max-width: 540px;
          margin: 0 auto 2.75rem;
        }

        /* CTAs */
        .hero-ctas {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 4.5rem;
          flex-wrap: wrap;
        }
        .hero-btn-primary {
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          font-weight: 600;
          font-size: 0.88rem;
          padding: 0.8rem 1.75rem;
          border-radius: 9999px;
          background: #ffffff;
          color: #06091a;
          text-decoration: none;
          transition: opacity 0.15s, transform 0.15s;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          letter-spacing: 0.01em;
        }
        .hero-btn-primary:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }
        .hero-btn-secondary {
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          font-weight: 500;
          font-size: 0.88rem;
          padding: 0.8rem 1.75rem;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.18);
          background: transparent;
          color: #ffffff;
          text-decoration: none;
          transition: border-color 0.15s, background 0.15s;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        .hero-btn-secondary:hover {
          border-color: rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.04);
        }

        /* Stats */
        .hero-divider {
          width: 100%;
          max-width: 520px;
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin-bottom: 2rem;
        }
        .hero-stats {
          display: flex;
          gap: 3.5rem;
          justify-content: center;
        }
        .hero-stat-value {
          font-family: var(--font-syne), Syne, sans-serif;
          font-size: clamp(1.4rem, 2vw, 1.8rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 0.4rem;
        }
        .hero-stat-label {
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          font-size: 0.65rem;
          color: #4a5878;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* TABLET ≤ 900 */
        @media (max-width: 900px) {
          .hero { padding: 8rem 1.5rem 6rem; }
        }

        /* MOBILE ≤ 768 */
        @media (max-width: 768px) {
          .hero { padding: 7rem 1.25rem 5rem; min-height: 100svh; }
          .hero-glow { width: 480px; height: 480px; }
          .hero-ctas {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
            margin-bottom: 3.5rem;
          }
          .hero-btn-primary, .hero-btn-secondary {
            justify-content: center;
            width: 100%;
            padding: 0.85rem 1.5rem;
          }
          .hero-stats { gap: 2rem; flex-wrap: wrap; }
          .hero-stats > div { flex: 1 1 30%; min-width: 80px; }
          .hero-fade { height: 100px; }
        }

        /* SMALL MOBILE ≤ 480 */
        @media (max-width: 480px) {
          .hero { padding: 6rem 1rem 4rem; }
          .hero-logo { margin-bottom: 2rem; }
          .hero-h1 { font-size: clamp(2.4rem, 12vw, 3.6rem); }
          .hero-pillars { font-size: 0.62rem; letter-spacing: 0.18em; margin-bottom: 1.4rem; }
          .hero-desc { font-size: 0.95rem; margin-bottom: 2.25rem; }
          .hero-stats { gap: 1.5rem; }
          .hero-stat-value { font-size: 1.4rem; }
          .hero-stat-label { font-size: 0.58rem; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-glow" />

        <div className="hero-content">
          {/* Logo */}
          <motion.div {...fadeUp(0)} className="hero-logo">
            <Image
              src="/images/logo.png"
              alt="Pure Latency"
              width={110}
              height={44}
              priority
            />
          </motion.div>

          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="hero-badge">
            <span className="hero-badge-dot" />
            Next-Gen Technology Platform
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.2)} className="hero-h1">
            Pure <span className="accent">Latency</span>
          </motion.h1>

          {/* Pillars */}
          <motion.p {...fadeUp(0.3)} className="hero-pillars">
            AI &nbsp;·&nbsp; Infrastructure &nbsp;·&nbsp; Products
          </motion.p>

          {/* Description */}
          <motion.p {...fadeUp(0.4)} className="hero-desc">
            We design, build, and operate AI-native systems and infrastructure —
            engineered for the next generation of enterprise.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.5)} className="hero-ctas">
            <Link href="/services" className="hero-btn-primary">
              Explore Services <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className="hero-btn-secondary">Get a Demo</Link>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.62)} className="hero-divider" />
          <motion.div {...fadeUp(0.68)} className="hero-stats">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="hero-stat-value">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hero-fade" />
      </section>
    </>
  )
}
