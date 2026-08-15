'use client'

import { motion, type Transition } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import NetworkWaveCanvas from './NetworkWaveCanvas'

const HeroGlobe = dynamic(() => import('./HeroGlobe'), {
  ssr: false,
  loading: () => <div style={{ position: 'absolute', inset: 0 }} />,
})

/* ─── Animation helpers ─────────────────────────────────────── */
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] } as Transition,
})

const STATS = [
  { value: '200+',  label: 'Projects Delivered' },
  { value: '50+',   label: 'Enterprise Clients'  },
  { value: '99.9%', label: 'Platform Uptime'     },
]

/* ─── Hero ──────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <>
      <style>{`
        /* ══ Layout ═══════════════════════════════════════════ */
        .hero {
          background: #ffffff;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          padding-top: 80px;
          overflow: hidden;
          position: relative;
        }

        /* ══ Text column ══════════════════════════════════════ */
        .hero-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3rem clamp(2rem, 3.5vw, 3.5rem) 3rem clamp(2.5rem, 5.5vw, 5.5rem);
          position: relative;
          z-index: 10;
        }

        .hero-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 1.5rem;
        }
        .hero-label-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #00d4ff;
          box-shadow: 0 0 8px rgba(0,212,255,0.9);
          flex-shrink: 0;
        }

        .hero-h1 {
          font-family: var(--font-syne), 'Syne', sans-serif;
          font-size: clamp(2.6rem, 3.8vw, 3.8rem);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1.08;
          color: #06091a;
          margin: 0;
          white-space: nowrap;
        }
        .hero-h1 .word-latency {
          position: relative;
          display: inline-block;
        }
        .hero-h1 .word-latency::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -3px;
          height: 3px;
          background: #00d4ff;
          border-radius: 2px;
          transform-origin: left;
          animation: ul-grow 0.6s 0.75s both cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes ul-grow {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }

        .hero-pillars {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #a0aec0;
          margin: 1.25rem 0 0;
        }

        .hero-desc {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: clamp(0.92rem, 1.15vw, 1.02rem);
          color: #6b7280;
          line-height: 1.72;
          max-width: 400px;
          margin: 1.3rem 0 2rem;
        }

        .hero-ctas {
          display: flex;
          gap: 0.7rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }
        .hero-btn-primary {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.86rem;
          font-weight: 600;
          padding: 0.76rem 1.75rem;
          border-radius: 9999px;
          background: #06091a;
          color: #fff;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.38rem;
          letter-spacing: 0.01em;
          transition: opacity 0.15s, transform 0.15s;
        }
        .hero-btn-primary:hover { opacity: 0.78; transform: translateY(-1px); }

        .hero-btn-ghost {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.86rem;
          font-weight: 500;
          padding: 0.76rem 1.75rem;
          border-radius: 9999px;
          background: transparent;
          color: #374151;
          border: 1.5px solid rgba(6,9,26,0.3);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.38rem;
          transition: border-color 0.15s, background 0.15s;
        }
        .hero-btn-ghost:hover {
          border-color: rgba(6,9,26,0.5);
          background: rgba(6,9,26,0.04);
        }

        .hero-stats {
          display: flex;
          border-top: 1px solid rgba(6,9,26,0.07);
          padding-top: 2rem;
          max-width: 380px;
        }
        .hero-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .hero-stat + .hero-stat { padding-left: 1.5rem; }
        .hero-stat + .hero-stat::before {
          content: '';
          position: absolute;
          left: 0; top: 12%; bottom: 12%;
          width: 1px;
          background: rgba(6,9,26,0.07);
        }
        .hero-stat-value {
          font-family: var(--font-syne), 'Syne', sans-serif;
          font-size: clamp(1.4rem, 2.2vw, 1.9rem);
          font-weight: 700;
          color: #06091a;
          line-height: 1;
          margin-bottom: 0.3rem;
        }
        .hero-stat-label {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.6rem;
          color: #9ca3af;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        /* ══ Scene column ═════════════════════════════════════ */
        .hero-scene {
          position: relative;
          overflow: hidden;
          background: rgba(0,212,255,0.02);
        }
        .hero-scene::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 60% at 50% 50%,
            rgba(0,212,255,0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 3;
        }
        /* Left-edge blend */
        .hero-scene::after {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0; width: 80px;
          background: linear-gradient(to right, #fff, transparent);
          pointer-events: none;
          z-index: 6;
        }

        /* ══ Responsive ═══════════════════════════════════════ */
        @media (max-width: 1024px) {
          .hero-text {
            padding: 2.5rem clamp(1.5rem,3vw,3rem) 2.5rem clamp(2rem,4.5vw,4rem);
          }
          .hero-h1 { font-size: clamp(2.4rem,3.6vw,3.6rem); }
        }

        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
            grid-template-rows: auto 65vw;
            min-height: 100svh;
          }
          .hero-text {
            padding: 3rem 1.5rem 2rem;
            order: 1;
            align-items: center;
            text-align: center;
          }
          .hero-h1 { font-size: clamp(2.4rem,10vw,4rem); white-space: normal; }
          .hero-desc { max-width: 100%; }
          .hero-ctas {
            justify-content: center;
            flex-direction: column;
            max-width: 300px;
            margin: 0 auto 3rem;
          }
          .hero-btn-primary, .hero-btn-ghost {
            justify-content: center; width: 100%;
          }
          .hero-stats {
            max-width: 100%; justify-content: center;
          }
          .hero-stat + .hero-stat { padding-left: 1.25rem; }
          .hero-scene { order: 2; max-height: 380px; }
          .hero-scene::after { display: none; }
        }

        @media (max-width: 480px) {
          .hero { grid-template-rows: auto 60vw; }
          .hero-text { padding: 3rem 1.25rem 1.5rem; }
          .hero-label { font-size: 0.58rem; letter-spacing: 0.14em; margin-bottom: 1.5rem; }
          .hero-h1 { font-size: clamp(2.4rem,13vw,3.6rem); }
          .hero-pillars { font-size: 0.58rem; }
          .hero-desc { font-size: 0.92rem; }
          .hero-stats { padding-top: 1.5rem; }
          .hero-stat-value { font-size: 1.35rem; }
          .hero-stat-label { font-size: 0.56rem; }
        }
      `}</style>

      <section className="hero">

        {/* ── LEFT: Text ── */}
        <div className="hero-text">
          <motion.div {...fadeUp(0.0)} className="hero-label">
            <span className="hero-label-dot" />
            Next-Gen Technology Platform
          </motion.div>

          <motion.h1 {...fadeUp(0.12)} className="hero-h1">
            Pure{' '}<span className="word-latency">Latency</span>
          </motion.h1>

          <motion.p {...fadeUp(0.22)} className="hero-pillars">
            AI &nbsp;·&nbsp; Infrastructure &nbsp;·&nbsp; Products
          </motion.p>

          <motion.p {...fadeUp(0.34)} className="hero-desc">
            We design, build, and operate AI-native systems and infrastructure —
            engineered for the next generation of enterprise. Based in Hyderabad,
            we work with clients across time zones as a remote-first team.
          </motion.p>

          <motion.div {...fadeUp(0.46)} className="hero-ctas">
            <Link href="/services" className="hero-btn-primary">
              Explore Services <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className="hero-btn-ghost">Get a Demo</Link>
          </motion.div>

          <motion.div {...fadeUp(0.6)} className="hero-stats">
            {STATS.map(s => (
              <div key={s.label} className="hero-stat">
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Globe ── */}
        <div className="hero-scene">
          <NetworkWaveCanvas />
          <HeroGlobe />
        </div>

      </section>
    </>
  )
}
