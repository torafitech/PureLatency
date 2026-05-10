'use client'

import { motion, type Transition } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

/* ─── Three.js Globe ─────────────────────────────────────── */
function GlobeScene() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    let frame: number
    let cleanup = () => {}

    import('three').then((THREE) => {
      if (!ref.current) return

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(container.clientWidth, container.clientHeight)
      renderer.setClearColor(0x000000, 0)
      container.appendChild(renderer.domElement)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        44,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      )
      camera.position.set(0, 0, 3.8)
      camera.lookAt(0, 0, 0)

      scene.add(new THREE.AmbientLight(0xffffff, 0.85))
      const key = new THREE.DirectionalLight(0x4477ff, 2.4)
      key.position.set(-4, 3, 2)
      scene.add(key)
      const fill = new THREE.DirectionalLight(0xffffff, 0.9)
      fill.position.set(4, 0, 2)
      scene.add(fill)
      const rim = new THREE.DirectionalLight(0x88aaff, 0.4)
      rim.position.set(0, -4, -1)
      scene.add(rim)

      const loader = new THREE.TextureLoader()
      const earth = new THREE.Mesh(
        new THREE.SphereGeometry(1, 96, 96),
        new THREE.MeshStandardMaterial({
          map: loader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'),
          normalMap: loader.load('https://threejs.org/examples/textures/planets/earth_normal_2048.jpg'),
          roughness: 0.72,
          metalness: 0.08,
        })
      )
      scene.add(earth)

      scene.add(new THREE.Mesh(
        new THREE.SphereGeometry(1.08, 48, 48),
        new THREE.MeshStandardMaterial({
          color: 0x1a44bb, transparent: true, opacity: 0.045, side: THREE.BackSide,
        })
      ))

      const ring = (r: number, rx: number, rz: number, op: number) => {
        const pts = Array.from({ length: 129 }, (_, i) => {
          const a = (i / 128) * Math.PI * 2
          return new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r)
        })
        const l = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineBasicMaterial({ color: 0x2563eb, transparent: true, opacity: op })
        )
        l.rotation.x = rx; l.rotation.z = rz
        return l
      }
      const r1 = ring(1.35, Math.PI / 2, 0, 0.25)
      const r2 = ring(1.58, Math.PI / 2 + 0.38, 0.42, 0.15)
      const r3 = ring(1.82, Math.PI / 2 - 0.22, -0.52, 0.09)
      scene.add(r1, r2, r3)

      const onResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(container.clientWidth, container.clientHeight)
      }
      window.addEventListener('resize', onResize)

      const animate = () => {
        frame = requestAnimationFrame(animate)
        earth.rotation.y += 0.0006
        r1.rotation.z += 0.0004
        r2.rotation.z -= 0.0003
        r3.rotation.z += 0.0002
        renderer.render(scene, camera)
      }
      animate()

      cleanup = () => {
        cancelAnimationFrame(frame)
        window.removeEventListener('resize', onResize)
        renderer.dispose()
        if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
      }
    })

    return () => cleanup()
  }, [])

  return <div ref={ref} className="absolute inset-0" />
}

/* ─── Signal Wave Canvas ─────────────────────────────────── */
function WaveCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    let frame: number
    let t = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const WAVES = [
      { dy:   0, amp: 18, freq: 0.011, op: 0.30, spd: 1.0 },
      { dy: -30, amp: 14, freq: 0.013, op: 0.18, spd: 0.8 },
      { dy:  30, amp: 14, freq: 0.009, op: 0.18, spd: 1.2 },
      { dy: -58, amp: 10, freq: 0.015, op: 0.10, spd: 0.6 },
      { dy:  58, amp: 10, freq: 0.008, op: 0.10, spd: 1.4 },
    ]
    const C = '37,99,235'

    const draw = () => {
      const w = canvas.width, h = canvas.height
      ctx.clearRect(0, 0, w, h)
      t += 0.009
      const cx = w / 2, cy = h / 2
      const gr = Math.min(w, h) * 0.32

      WAVES.forEach(wv => {
        ctx.beginPath(); ctx.lineWidth = 1.0
        let first = true
        for (let x = 0; x <= w; x += 3) {
          const y = cy + wv.dy + Math.sin(x * wv.freq + t * wv.spd) * wv.amp
          first ? ctx.moveTo(x, y) : ctx.lineTo(x, y); first = false
        }
        ctx.strokeStyle = `rgba(${C},${wv.op})`; ctx.stroke()
      })

      const ov = ctx.createRadialGradient(cx, cy, 0, cx, cy, gr)
      ov.addColorStop(0, 'rgba(255,255,255,0.75)')
      ov.addColorStop(0.62, 'rgba(255,255,255,0.52)')
      ov.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = ov; ctx.fillRect(0, 0, w, h)

      ctx.save()
      ctx.beginPath(); ctx.arc(cx, cy, gr, 0, Math.PI * 2); ctx.clip()
      WAVES.forEach(wv => {
        ctx.beginPath(); ctx.lineWidth = 0.55
        let first = true
        for (let x = 0; x <= w; x += 3) {
          const y = cy + wv.dy + Math.sin(x * wv.freq + t * wv.spd) * wv.amp
          first ? ctx.moveTo(x, y) : ctx.lineTo(x, y); first = false
        }
        ctx.strokeStyle = `rgba(${C},${wv.op * 0.2})`; ctx.stroke()
      })
      ctx.restore()

      frame = requestAnimationFrame(draw)
    }
    draw()

    return () => { cancelAnimationFrame(frame); ro.disconnect() }
  }, [])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 15 }}
    />
  )
}

/* ─── Hero ───────────────────────────────────────────────── */
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } as Transition,
})

const STATS = [
  { value: '200+',  label: 'Projects Delivered' },
  { value: '50+',   label: 'Enterprise Clients'  },
  { value: '99.9%', label: 'Platform Uptime'     },
]

export default function Hero() {
  return (
    <>
      {/* ── Responsive styles ─────────────────────────── */}
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #ffffff;
          overflow: hidden;
          position: relative;
        }

        /* ── Text column ── */
        .hero-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 7rem 3rem 4rem 7rem;
          position: relative;
          z-index: 30;
        }

        /* ── Globe column ── */
        .hero-globe {
          position: relative;
          overflow: hidden;
        }

        /* ── Headline ── */
        .hero-h1 {
          font-family: var(--font-syne), Syne, sans-serif;
          font-size: clamp(3.8rem, 6.5vw, 7rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 0.9;
          margin: 0 0 1.5rem 0;
        }

        /* ── Pillars ── */
        .hero-pillars {
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          color: #374151;
          font-size: clamp(0.8rem, 1.1vw, 0.92rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
          margin-bottom: 0.75rem;
        }

        /* ── Description ── */
        .hero-desc {
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          color: #6e6e73;
          font-size: clamp(0.92rem, 1.2vw, 1.05rem);
          line-height: 1.75;
          max-width: 440px;
          margin-bottom: 2.5rem;
        }

        /* ── CTAs ── */
        .hero-ctas {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .hero-btn-primary {
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          font-weight: 600;
          font-size: 0.88rem;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          background: #0a0f1e;
          color: #ffffff;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: background 0.18s, box-shadow 0.18s;
          white-space: nowrap;
          text-align: center;
        }
        .hero-btn-primary:hover {
          background: #1e3a8a;
          box-shadow: 0 4px 20px rgba(37,99,235,0.28);
        }
        .hero-btn-secondary {
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          font-weight: 400;
          font-size: 0.88rem;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          border: 1px solid rgba(0,0,0,0.14);
          color: #374151;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: border-color 0.18s, color 0.18s;
          white-space: nowrap;
          text-align: center;
        }
        .hero-btn-secondary:hover {
          border-color: rgba(37,99,235,0.5);
          color: #2563eb;
        }

        /* ── Stats ── */
        .hero-stats {
          display: flex;
          gap: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid #f0f0f0;
        }
        .hero-stat-value {
          font-family: var(--font-syne), Syne, sans-serif;
          font-size: clamp(1.5rem, 2.2vw, 2rem);
          font-weight: 700;
          color: #0a0f1e;
          line-height: 1;
          margin-bottom: 0.3rem;
        }
        .hero-stat-label {
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          font-size: 0.68rem;
          color: #aeaeb2;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* ── Scroll button ── */
        .hero-scroll {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 40;
        }
        .hero-scroll a {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-dm-sans), DM Sans, sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          color: #374151;
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          text-decoration: none;
          transition: box-shadow 0.2s, color 0.2s;
        }
        .hero-scroll a:hover {
          box-shadow: 0 4px 24px rgba(37,99,235,0.18);
          color: #2563eb;
        }

        /* ══════════════════════════════
           TABLET  (≤ 900px)
        ══════════════════════════════ */
        @media (max-width: 900px) {
          .hero-text {
            padding: 6.5rem 2.5rem 3rem 3rem;
          }
        }

        /* ══════════════════════════════
           MOBILE  (≤ 768px)
        ══════════════════════════════ */
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr;
            grid-template-rows: auto minmax(72vw, 360px);
            min-height: 100svh;
          }

          .hero-text {
            padding: 6rem 1.5rem 2rem;
            align-items: center;
            text-align: center;
            order: 1;
          }

          .hero-globe {
            order: 2;
          }

          .hero-h1 {
            font-size: clamp(3rem, 14vw, 4.5rem);
            margin-bottom: 1.2rem;
          }

          .hero-desc {
            max-width: 100%;
            margin-bottom: 2rem;
          }

          .hero-ctas {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100%;
            padding: 0.85rem 1.5rem;
          }

          .hero-stats {
            justify-content: center;
            gap: 1.75rem;
          }

          .hero-stat-value {
            font-size: 1.5rem;
          }

          .hero-scroll {
            display: none;
          }
        }

        /* ══════════════════════════════
           SMALL MOBILE  (≤ 480px)
        ══════════════════════════════ */
        @media (max-width: 480px) {
          .hero-text {
            padding: 5.5rem 1.25rem 1.75rem;
          }

          .hero-h1 {
            font-size: clamp(2.6rem, 16vw, 3.8rem);
          }

          .hero-stats {
            gap: 1.25rem;
          }

          .hero-stat-label {
            font-size: 0.6rem;
          }
        }
      `}</style>

      <section className="hero-section">

        {/* ── LEFT: Text ── */}
        <div className="hero-text">

          {/* Badge */}
          <motion.div
            {...fadeUp(0.1)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.38rem 1rem', borderRadius: '9999px',
              border: '1px solid rgba(37,99,235,0.22)',
              background: 'rgba(37,99,235,0.05)',
              marginBottom: '1.75rem', width: 'fit-content',
            }}
          >
            <span style={{
              width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
              background: '#2563eb', boxShadow: '0 0 6px rgba(37,99,235,0.6)',
            }} />
            <span style={{
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontSize: '0.68rem', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563eb',
            }}>
              Next-Gen Technology Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.2)} className="hero-h1">
            <span style={{ display: 'block', color: '#0a0f1e' }}>Pure</span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Latency
            </span>
          </motion.h1>

          {/* Accent rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut', originX: 0 } as Transition}
            style={{
              width: 52, height: 2,
              background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
              borderRadius: 2, marginBottom: '1.5rem',
            }}
          />

          {/* Pillars */}
          <motion.p {...fadeUp(0.38)} className="hero-pillars">
            AI &nbsp;·&nbsp; Infrastructure &nbsp;·&nbsp; Products
          </motion.p>

          {/* Description */}
          <motion.p {...fadeUp(0.45)} className="hero-desc">
            We design, build, and operate high-performance technology systems —
            AI-native, infrastructure-grade, built for the next generation of enterprise.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.52)} className="hero-ctas">
            <Link href="/services" className="hero-btn-primary">Explore Services</Link>
            <Link href="/contact" className="hero-btn-secondary">Get a Demo</Link>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.62)} className="hero-stats">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="hero-stat-value">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Globe ── */}
        <div className="hero-globe">
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 70%)',
          }} />

          <div className="absolute inset-0 z-10"><GlobeScene /></div>
          <WaveCanvas />

          {/* Edge fades */}
          <div style={{ position:'absolute', left:0, top:0, bottom:0, width:90, background:'linear-gradient(to right,#fff,transparent)', zIndex:25, pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:0, left:0, right:0, height:100, background:'linear-gradient(to bottom,#fff,transparent)', zIndex:25, pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:0, left:0, right:0, height:120, background:'linear-gradient(to bottom,transparent,#fff)', zIndex:25, pointerEvents:'none' }} />
        </div>

        {/* ── Scroll CTA ── */}
        <div className="hero-scroll">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <a href="#services">
              View Our Services
              <motion.svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 4 }}
              >
                <path d="M12 5v14M12 19l6-6M12 19l-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </a>
          </motion.div>
        </div>

      </section>
    </>
  )
}
