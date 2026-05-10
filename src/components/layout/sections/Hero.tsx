'use client'

import { motion, type Transition } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

/* ─── 3D Scene ────────────────────────────────────────────── */
function Scene3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return
    let rafId: number
    let cleanup = () => {}

    import('three').then((THREE) => {
      if (!mountRef.current) return

      const W = container.clientWidth
      const H = container.clientHeight

      /* Renderer */
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(W, H)
      renderer.setClearColor(0x000000, 0)
      Object.assign(renderer.domElement.style, {
        position: 'absolute', top: '0', left: '0',
        width: '100%', height: '100%',
      })
      container.appendChild(renderer.domElement)

      /* Scene + camera */
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 100)
      camera.position.set(0, 0, 5.2)

      /* Lights */
      scene.add(new THREE.AmbientLight(0xffffff, 0.18))

      const keyLight = new THREE.DirectionalLight(0xffffff, 1.4)
      keyLight.position.set(-4, 5, 3)
      scene.add(keyLight)

      const fillLight = new THREE.DirectionalLight(0xd0f0ff, 0.5)
      fillLight.position.set(4, -2, 2)
      scene.add(fillLight)

      /* Pulsing cyan core glow */
      const glow = new THREE.PointLight(0x00d4ff, 5.5, 5)
      glow.position.set(0, 0, 0)
      scene.add(glow)

      /* Group — lets mouse parallax move mesh + wire together */
      const group = new THREE.Group()
      scene.add(group)

      /* Main geometry — icosahedron detail=1 (80 faces, low-poly) */
      const geo = new THREE.IcosahedronGeometry(1.55, 1)

      const mat = new THREE.MeshPhongMaterial({
        color: 0x06091a,
        emissive: 0x001122,
        specular: 0x00d4ff,
        shininess: 55,
        flatShading: true,
        transparent: true,
        opacity: 0.94,
      })
      const mesh = new THREE.Mesh(geo, mat)
      group.add(mesh)

      /* Cyan wireframe overlay */
      const wireGeo = new THREE.WireframeGeometry(geo)
      const wire = new THREE.LineSegments(
        wireGeo,
        new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.28 })
      )
      group.add(wire)

      /* Orbit rings */
      const makeRing = (radius: number, rx: number, rz: number, opacity: number) => {
        const pts = Array.from({ length: 129 }, (_, i) => {
          const a = (i / 128) * Math.PI * 2
          return new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius)
        })
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity })
        )
        line.rotation.x = rx
        line.rotation.z = rz
        return line
      }
      const ring1 = makeRing(2.05, Math.PI * 0.38, 0.18, 0.18)
      const ring2 = makeRing(2.42, -Math.PI * 0.22, -0.28, 0.09)
      group.add(ring1, ring2)

      /* ResizeObserver */
      const ro = new ResizeObserver(() => {
        const w = container.clientWidth
        const h = container.clientHeight
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
      })
      ro.observe(container)

      /* Mouse parallax */
      let tx = 0, ty = 0   // target
      let cx = 0, cy = 0   // current (lerped)
      const onMouse = (e: MouseEvent) => {
        tx = (e.clientX / window.innerWidth  - 0.5) * 0.55
        ty = (e.clientY / window.innerHeight - 0.5) * 0.35
      }
      window.addEventListener('mousemove', onMouse)

      /* Animation */
      let t = 0
      const animate = () => {
        rafId = requestAnimationFrame(animate)
        t += 0.006

        /* Lerp mouse parallax */
        cx += (tx - cx) * 0.04
        cy += (ty - cy) * 0.04

        /* Rotate */
        group.rotation.y  = t * 0.25 + cx * 0.3
        group.rotation.x  = Math.sin(t * 0.35) * 0.12 - cy * 0.18

        /* Counter-rotate rings for orbital feel */
        ring1.rotation.z -= 0.0018
        ring2.rotation.z += 0.0012

        /* Breathing glow */
        glow.intensity = 5.5 + Math.sin(t * 1.8) * 1.2

        renderer.render(scene, camera)
      }
      animate()

      cleanup = () => {
        cancelAnimationFrame(rafId)
        ro.disconnect()
        window.removeEventListener('mousemove', onMouse)
        renderer.dispose()
        if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
      }
    })

    return () => cleanup()
  }, [])

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0 }} />
}

/* ─── Helpers ─────────────────────────────────────────────── */
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

/* ─── Hero ────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <>
      <style>{`
        /* ════════════════════════════════════════
           SECTION
        ════════════════════════════════════════ */
        .hero {
          background: #ffffff;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          padding-top: 80px;   /* clear fixed navbar */
          overflow: hidden;
          position: relative;
        }

        /* ════════════════════════════════════════
           LEFT — TEXT
        ════════════════════════════════════════ */
        .hero-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem clamp(2rem, 4vw, 4rem) 4rem clamp(2.5rem, 7vw, 7rem);
          position: relative;
          z-index: 2;
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
          margin-bottom: 2rem;
        }
        .hero-label-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #00d4ff;
          box-shadow: 0 0 7px rgba(0,212,255,0.85);
          flex-shrink: 0;
        }

        .hero-h1 {
          font-family: var(--font-syne), 'Syne', sans-serif;
          font-size: clamp(3rem, 5.5vw, 5.2rem);
          font-weight: 800;
          letter-spacing: -0.045em;
          line-height: 1.0;
          color: #06091a;
          margin: 0 0 0.15rem;
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
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #d1d5db;
          margin: 1.6rem 0 0;
        }

        .hero-desc {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: clamp(0.95rem, 1.3vw, 1.08rem);
          color: #6b7280;
          line-height: 1.72;
          max-width: 440px;
          margin: 1.6rem 0 2.5rem;
        }

        .hero-ctas {
          display: flex;
          gap: 0.7rem;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
        }
        .hero-btn-primary {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.86rem;
          font-weight: 600;
          padding: 0.76rem 1.75rem;
          border-radius: 9999px;
          background: #06091a;
          color: #ffffff;
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
          color: #06091a;
          border: 1px solid rgba(6,9,26,0.18);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.38rem;
          transition: border-color 0.15s, background 0.15s;
        }
        .hero-btn-ghost:hover {
          border-color: rgba(6,9,26,0.36);
          background: rgba(6,9,26,0.03);
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
        .hero-stat + .hero-stat::before {
          content: '';
          position: absolute;
          left: 0; top: 12%; bottom: 12%;
          width: 1px;
          background: rgba(6,9,26,0.07);
        }
        .hero-stat + .hero-stat { padding-left: 1.5rem; }
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

        /* ════════════════════════════════════════
           RIGHT — 3D
        ════════════════════════════════════════ */
        .hero-scene {
          position: relative;
          overflow: hidden;
          /* Very faint bg tint to separate from text column */
          background: rgba(0,212,255,0.015);
        }

        /* Ambient glow behind mesh */
        .hero-scene::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 55% 55% at 50% 50%,
            rgba(0,212,255,0.07) 0%, transparent 68%);
          pointer-events: none;
          z-index: 1;
        }

        /* Subtle edge fade on left of scene to blend with text column */
        .hero-scene::after {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 80px;
          background: linear-gradient(to right, #ffffff, transparent);
          pointer-events: none;
          z-index: 3;
        }

        /* ════════════════════════════════════════
           RESPONSIVE
        ════════════════════════════════════════ */
        @media (max-width: 1024px) {
          .hero-text {
            padding: 3.5rem clamp(1.5rem, 3vw, 3rem) 3.5rem clamp(2rem, 5vw, 4rem);
          }
          .hero-h1 { font-size: clamp(2.8rem, 5vw, 4.5rem); }
        }

        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
            grid-template-rows: auto 65vw;
            min-height: 100svh;
          }
          .hero-text {
            padding: 3.5rem 1.5rem 2rem;
            order: 1;
            align-items: center;
            text-align: center;
          }
          .hero-h1 { font-size: clamp(2.8rem, 12vw, 4.5rem); }
          .hero-desc { max-width: 100%; }
          .hero-ctas { justify-content: center; flex-direction: column; max-width: 300px; margin: 0 auto 3rem; }
          .hero-btn-primary, .hero-btn-ghost { justify-content: center; width: 100%; }
          .hero-stats { max-width: 100%; justify-content: center; }
          .hero-stat + .hero-stat { padding-left: 1.25rem; }
          .hero-scene {
            order: 2;
            max-height: 380px;
          }
          .hero-scene::after { display: none; }
        }

        @media (max-width: 480px) {
          .hero { grid-template-rows: auto 62vw; }
          .hero-text { padding: 3rem 1.25rem 1.5rem; }
          .hero-label { font-size: 0.58rem; letter-spacing: 0.14em; margin-bottom: 1.5rem; }
          .hero-h1 { font-size: clamp(2.4rem, 13vw, 3.6rem); }
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
            engineered for the next generation of enterprise.
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

        {/* ── RIGHT: 3D ── */}
        <div className="hero-scene">
          <Scene3D />
        </div>

      </section>
    </>
  )
}
