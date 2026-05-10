'use client'

import { motion } from 'framer-motion'
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

      /* Lighting — balanced for white bg */
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

      /* Atmosphere shell */
      scene.add(new THREE.Mesh(
        new THREE.SphereGeometry(1.08, 48, 48),
        new THREE.MeshStandardMaterial({
          color: 0x1a44bb,
          transparent: true,
          opacity: 0.045,
          side: THREE.BackSide,
        })
      ))

      /* Orbit rings */
      const ring = (r: number, rx: number, rz: number, op: number) => {
        const pts = Array.from({ length: 129 }, (_, i) => {
          const a = (i / 128) * Math.PI * 2
          return new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r)
        })
        const l = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineBasicMaterial({ color: 0x2563eb, transparent: true, opacity: op })
        )
        l.rotation.x = rx
        l.rotation.z = rz
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
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement)
        }
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
      { dy:   0, amp: 18, freq: 0.011, op: 0.32, spd: 1.0 },
      { dy: -30, amp: 14, freq: 0.013, op: 0.20, spd: 0.8 },
      { dy:  30, amp: 14, freq: 0.009, op: 0.20, spd: 1.2 },
      { dy: -60, amp: 10, freq: 0.015, op: 0.12, spd: 0.6 },
      { dy:  60, amp: 10, freq: 0.008, op: 0.12, spd: 1.4 },
    ]
    const COLOR = '37,99,235'

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)
      t += 0.009

      const cx = w / 2
      const cy = h / 2
      const gr = Math.min(w, h) * 0.32

      /* Pass 1 — full waves */
      WAVES.forEach(wv => {
        ctx.beginPath()
        ctx.lineWidth = 1.0
        let first = true
        for (let x = 0; x <= w; x += 3) {
          const y = cy + wv.dy + Math.sin(x * wv.freq + t * wv.spd) * wv.amp
          first ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
          first = false
        }
        ctx.strokeStyle = `rgba(${COLOR},${wv.op})`
        ctx.stroke()
      })

      /* Pass 2 — white overlay dims waves inside globe */
      const ov = ctx.createRadialGradient(cx, cy, 0, cx, cy, gr)
      ov.addColorStop(0,    'rgba(255,255,255,0.75)')
      ov.addColorStop(0.62, 'rgba(255,255,255,0.52)')
      ov.addColorStop(1,    'rgba(255,255,255,0)')
      ctx.fillStyle = ov
      ctx.fillRect(0, 0, w, h)

      /* Pass 3 — dim waves clipped inside globe */
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, gr, 0, Math.PI * 2)
      ctx.clip()
      WAVES.forEach(wv => {
        ctx.beginPath()
        ctx.lineWidth = 0.55
        let first = true
        for (let x = 0; x <= w; x += 3) {
          const y = cy + wv.dy + Math.sin(x * wv.freq + t * wv.spd) * wv.amp
          first ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
          first = false
        }
        ctx.strokeStyle = `rgba(${COLOR},${wv.op * 0.2})`
        ctx.stroke()
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
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const STATS = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+',  label: 'Enterprise Clients'  },
  { value: '99.9%', label: 'Platform Uptime'    },
]

export default function Hero() {
  return (
    <section
      className="hero-split"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        background: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* ── LEFT: Text ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(6rem,10vw,8rem) clamp(1.5rem,3vw,3rem) 4rem clamp(2rem,6vw,7rem)',
          position: 'relative',
          zIndex: 30,
        }}
      >
        {/* Badge */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.38rem 1rem',
            borderRadius: '9999px',
            border: '1px solid rgba(37,99,235,0.22)',
            background: 'rgba(37,99,235,0.05)',
            width: 'fit-content',
            marginBottom: '1.75rem',
          }}
        >
          <span
            style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#2563eb',
              boxShadow: '0 0 6px rgba(37,99,235,0.6)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#2563eb',
            }}
          >
            Next-Gen Technology Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          style={{
            fontFamily: 'var(--font-syne), Syne, sans-serif',
            fontSize: 'clamp(3.8rem, 6.5vw, 7rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
            margin: 0,
            marginBottom: '1.5rem',
          }}
        >
          <span style={{ display: 'block', color: '#0a0f1e' }}>Pure</span>
          <span
            style={{
              display: 'block',
              background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Latency
          </span>
        </motion.h1>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          style={{
            width: 52,
            height: 2,
            background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
            borderRadius: 2,
            marginBottom: '1.5rem',
          }}
        />

        {/* Pillars */}
        <motion.p
          {...fadeUp(0.38)}
          style={{
            fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
            color: '#374151',
            fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginBottom: '0.75rem',
          }}
        >
          AI &nbsp;·&nbsp; Infrastructure &nbsp;·&nbsp; Products
        </motion.p>

        {/* Description */}
        <motion.p
          {...fadeUp(0.45)}
          style={{
            fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
            color: '#6e6e73',
            fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
            lineHeight: 1.75,
            maxWidth: 440,
            marginBottom: '2.5rem',
          }}
        >
          We design, build, and operate high-performance technology systems —
          AI-native, infrastructure-grade, and built for the next generation of enterprise.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.52)}
          style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}
        >
          <Link
            href="/services"
            style={{
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: '0.88rem',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              background: '#0a0f1e',
              color: '#ffffff',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'background 0.18s, box-shadow 0.18s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#1e3a8a'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.28)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#0a0f1e'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            style={{
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontWeight: 400,
              fontSize: '0.88rem',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              border: '1px solid rgba(0,0,0,0.14)',
              color: '#374151',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'border-color 0.18s, color 0.18s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(37,99,235,0.5)'
              e.currentTarget.style.color = '#2563eb'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.14)'
              e.currentTarget.style.color = '#374151'
            }}
          >
            Get a Demo
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.62)}
          style={{
            display: 'flex',
            gap: '2.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid #f0f0f0',
          }}
        >
          {STATS.map(s => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: 'var(--font-syne), Syne, sans-serif',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 700,
                  color: '#0a0f1e',
                  lineHeight: 1,
                  marginBottom: '0.3rem',
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                  fontSize: '0.7rem',
                  color: '#aeaeb2',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT: Globe ── */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Ambient blue glow */}
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 70%)',
          }}
        />

        {/* Globe */}
        <div className="absolute inset-0 z-10">
          <GlobeScene />
        </div>

        {/* Waves */}
        <WaveCanvas />

        {/* Left edge blends into white left column */}
        <div
          style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 100,
            background: 'linear-gradient(to right, #ffffff, transparent)',
            zIndex: 25, pointerEvents: 'none',
          }}
        />
        {/* Top fade */}
        <div
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 120,
            background: 'linear-gradient(to bottom, #ffffff, transparent)',
            zIndex: 25, pointerEvents: 'none',
          }}
        />
        {/* Bottom fade → white (flows into Stats section) */}
        <div
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 140,
            background: 'linear-gradient(to bottom, transparent, #ffffff)',
            zIndex: 25, pointerEvents: 'none',
          }}
        />
      </div>

      {/* ── Scroll CTA — bottom center ── */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        style={{
          position: 'absolute', bottom: 28, left: '50%',
          transform: 'translateX(-50%)', zIndex: 40,
        }}
      >
        <a
          href="#services"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
            fontSize: '0.78rem', fontWeight: 500,
            color: '#374151',
            padding: '0.5rem 1.25rem',
            borderRadius: '9999px',
            border: '1px solid rgba(0,0,0,0.12)',
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
            textDecoration: 'none',
            transition: 'box-shadow 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(37,99,235,0.18)'
            e.currentTarget.style.color = '#2563eb'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)'
            e.currentTarget.style.color = '#374151'
          }}
        >
          View Our Services
          <motion.svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <path
              d="M12 5v14M12 19l6-6M12 19l-6-6"
              stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round"
            />
          </motion.svg>
        </a>
      </motion.div>

      {/* ── Mobile: stack layout ── */}
      <style>{`
        @media (max-width: 768px) {
          .hero-split {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto 70vw;
          }
          .hero-split > div:last-of-type {
            min-height: 70vw;
          }
        }
        @media (max-width: 480px) {
          .hero-split { grid-template-rows: auto 90vw; }
        }
      `}</style>
    </section>
  )
}
