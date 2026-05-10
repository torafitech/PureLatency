'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

function GlobeScene() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    let frame: number
    let cleanup: () => void = () => {}

    import('three').then((THREE) => {
      if (!ref.current) return

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(container.clientWidth, container.clientHeight)
      renderer.setClearColor(0x000000, 0)
      container.appendChild(renderer.domElement)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        42,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      )
      camera.position.set(0, 0, 4.5)
      camera.lookAt(0, 0.5, 0)

      // Balanced lighting for white background
      scene.add(new THREE.AmbientLight(0xffffff, 0.9))

      const key = new THREE.DirectionalLight(0x6699ff, 2.2)
      key.position.set(-4, 3, 2)
      scene.add(key)

      const fill = new THREE.DirectionalLight(0xffffff, 1.0)
      fill.position.set(4, 0, 2)
      scene.add(fill)

      const rim = new THREE.DirectionalLight(0xaaccff, 0.5)
      rim.position.set(0, -3, -2)
      scene.add(rim)

      const loader = new THREE.TextureLoader()

      const earth = new THREE.Mesh(
        new THREE.SphereGeometry(1, 96, 96),
        new THREE.MeshStandardMaterial({
          map: loader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'),
          normalMap: loader.load(
            'https://threejs.org/examples/textures/planets/earth_normal_2048.jpg'
          ),
          roughness: 0.75,
          metalness: 0.08,
        })
      )
      scene.add(earth)

      // Very subtle atmosphere (barely visible on white)
      scene.add(
        new THREE.Mesh(
          new THREE.SphereGeometry(1.08, 48, 48),
          new THREE.MeshStandardMaterial({
            color: 0x2255cc,
            transparent: true,
            opacity: 0.04,
            side: THREE.BackSide,
          })
        )
      )

      // Orbit rings — blue, low opacity for white bg
      const orbitLine = (radius: number, rx: number, rz: number, op: number) => {
        const pts = Array.from({ length: 129 }, (_, i) => {
          const a = (i / 128) * Math.PI * 2
          return new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius)
        })
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineBasicMaterial({ color: 0x2563eb, transparent: true, opacity: op })
        )
        line.rotation.x = rx
        line.rotation.z = rz
        return line
      }

      const r1 = orbitLine(1.38, Math.PI / 2, 0, 0.22)
      const r2 = orbitLine(1.62, Math.PI / 2 + 0.38, 0.42, 0.13)
      const r3 = orbitLine(1.88, Math.PI / 2 - 0.22, -0.55, 0.08)
      scene.add(r1, r2, r3)

      const onResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(container.clientWidth, container.clientHeight)
      }
      window.addEventListener('resize', onResize)

      const animate = () => {
        frame = requestAnimationFrame(animate)
        earth.rotation.y += 0.0007
        r1.rotation.z += 0.00045
        r2.rotation.z -= 0.00032
        r3.rotation.z += 0.00022
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

function WaveCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    let frame: number
    let t = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    type Wave = {
      dy: number
      amp: number
      freq: number
      op: number
      speed: number
    }

    // Blue waves on white — lower opacity, blue-600 color
    const WAVES: Wave[] = [
      { dy:   0, amp: 20, freq: 0.010, op: 0.38, speed: 1.0 },
      { dy: -28, amp: 16, freq: 0.012, op: 0.26, speed: 0.8 },
      { dy:  28, amp: 16, freq: 0.009, op: 0.26, speed: 1.2 },
      { dy: -56, amp: 13, freq: 0.014, op: 0.17, speed: 0.65 },
      { dy:  56, amp: 13, freq: 0.011, op: 0.17, speed: 1.35 },
      { dy: -84, amp:  9, freq: 0.013, op: 0.10, speed: 0.55 },
      { dy:  84, amp:  9, freq: 0.008, op: 0.10, speed: 1.45 },
      { dy:-112, amp:  6, freq: 0.015, op: 0.06, speed: 0.45 },
      { dy: 112, amp:  6, freq: 0.007, op: 0.06, speed: 1.55 },
    ]

    const WAVE_COLOR = '37,99,235'  // blue-600

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)
      t += 0.009

      const cx = w / 2
      const cy = h * 0.655
      const gr = Math.min(w, h) * 0.245

      // Pass 1 — waves at full opacity
      WAVES.forEach((wv) => {
        const baseY = cy + wv.dy
        ctx.beginPath()
        ctx.lineWidth = 1.1
        let first = true
        for (let x = 0; x <= w; x += 3) {
          const y = baseY + Math.sin(x * wv.freq + t * wv.speed) * wv.amp
          first ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
          first = false
        }
        ctx.strokeStyle = `rgba(${WAVE_COLOR},${wv.op})`
        ctx.stroke()
      })

      // Pass 2 — white radial overlay to dim waves inside globe (on white bg)
      const overlay = ctx.createRadialGradient(cx, cy, 0, cx, cy, gr)
      overlay.addColorStop(0,    'rgba(255,255,255,0.72)')
      overlay.addColorStop(0.65, 'rgba(255,255,255,0.50)')
      overlay.addColorStop(1,    'rgba(255,255,255,0)')
      ctx.fillStyle = overlay
      ctx.fillRect(0, 0, w, h)

      // Pass 3 — very faint waves inside globe (refracted)
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, gr, 0, Math.PI * 2)
      ctx.clip()

      WAVES.forEach((wv) => {
        const baseY = cy + wv.dy
        ctx.beginPath()
        ctx.lineWidth = 0.6
        let first = true
        for (let x = 0; x <= w; x += 3) {
          const y = baseY + Math.sin(x * wv.freq + t * wv.speed) * wv.amp
          first ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
          first = false
        }
        ctx.strokeStyle = `rgba(${WAVE_COLOR},${wv.op * 0.22})`
        ctx.stroke()
      })
      ctx.restore()

      frame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 15 }}
    />
  )
}

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-white">
      {/* Very subtle radial tint at globe area */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 50% 68%, rgba(37,99,235,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Globe — full viewport */}
      <div className="absolute inset-0 z-10">
        <GlobeScene />
      </div>

      {/* Signal waves */}
      <WaveCanvas />

      {/* Text content */}
      <div className="relative z-30 flex flex-col items-center text-center px-6 pt-[7.5rem]">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border"
          style={{
            borderColor: 'rgba(37,99,235,0.2)',
            background: 'rgba(37,99,235,0.05)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#2563eb', boxShadow: '0 0 5px rgba(37,99,235,0.5)' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: '#2563eb',
            }}
          >
            Next-Generation Technology Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          style={{
            fontFamily: 'var(--font-syne), Syne, sans-serif',
            fontSize: 'clamp(3.2rem, 9vw, 7.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 0.95,
            color: '#0a0f1e',
            marginBottom: '1.25rem',
          }}
        >
          Pure Latency
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          style={{
            fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
            color: '#6e6e73',
            fontSize: 'clamp(0.85rem, 2.2vw, 1rem)',
            letterSpacing: '0.08em',
            marginBottom: '0.45rem',
          }}
        >
          AI &nbsp;·&nbsp; Infrastructure &nbsp;·&nbsp; Products
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
            color: '#aeaeb2',
            fontSize: '0.8rem',
            marginBottom: '2.25rem',
          }}
        >
          Built for the next generation of enterprise
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.58 }}
          className="flex gap-3"
        >
          <Link
            href="/services"
            style={{
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: '0.85rem',
              padding: '0.62rem 1.75rem',
              borderRadius: '9999px',
              background: '#0a0f1e',
              color: '#ffffff',
              letterSpacing: '0.01em',
              transition: 'background 0.18s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#1a2540')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#0a0f1e')}
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            style={{
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontWeight: 400,
              fontSize: '0.85rem',
              padding: '0.62rem 1.75rem',
              borderRadius: '9999px',
              border: '1px solid rgba(0,0,0,0.15)',
              color: '#374151',
              letterSpacing: '0.01em',
              transition: 'border-color 0.18s, color 0.18s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(37,99,235,0.45)'
              e.currentTarget.style.color = '#2563eb'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'
              e.currentTarget.style.color = '#374151'
            }}
          >
            Get a Demo
          </Link>
        </motion.div>
      </div>

      {/* Bottom: seamless fade to white (no jarring edge) */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none z-20"
        style={{
          height: '120px',
          background: 'linear-gradient(to bottom, transparent, #ffffff)',
        }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-5 left-1/2 z-40"
        style={{ translateX: '-50%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <a
          href="#services"
          className="flex flex-col items-center gap-1.5"
          style={{ color: '#aeaeb2' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Scroll
          </span>
          <motion.svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          >
            <path
              d="M12 5v14M12 19l6-6M12 19l-6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </a>
      </motion.div>
    </section>
  )
}
