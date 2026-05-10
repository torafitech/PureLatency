'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const BG = '#06091a'

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

      // Camera: positioned so globe appears at ~65% viewport height
      const camera = new THREE.PerspectiveCamera(
        42,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      )
      camera.position.set(0, 0, 4.5)
      camera.lookAt(0, 0.5, 0)

      // Lighting for dark-theme
      scene.add(new THREE.AmbientLight(0x0a1a3a, 1.5))

      const key = new THREE.DirectionalLight(0x2255ff, 3.5)
      key.position.set(-3, 2, 2)
      scene.add(key)

      const rim = new THREE.DirectionalLight(0x00d4ff, 1.8)
      rim.position.set(4, -1, -2)
      scene.add(rim)

      const top = new THREE.DirectionalLight(0x88bbff, 0.8)
      top.position.set(0, 5, 1)
      scene.add(top)

      const loader = new THREE.TextureLoader()

      // Earth mesh
      const earth = new THREE.Mesh(
        new THREE.SphereGeometry(1, 96, 96),
        new THREE.MeshStandardMaterial({
          map: loader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'),
          normalMap: loader.load(
            'https://threejs.org/examples/textures/planets/earth_normal_2048.jpg'
          ),
          roughness: 0.72,
          metalness: 0.12,
        })
      )
      scene.add(earth)

      // Atmosphere glow shell
      scene.add(
        new THREE.Mesh(
          new THREE.SphereGeometry(1.09, 48, 48),
          new THREE.MeshStandardMaterial({
            color: 0x0033cc,
            transparent: true,
            opacity: 0.07,
            side: THREE.BackSide,
          })
        )
      )

      // Helper: create a thin orbit line
      const orbitLine = (radius: number, rx: number, rz: number, op: number) => {
        const pts = Array.from({ length: 129 }, (_, i) => {
          const a = (i / 128) * Math.PI * 2
          return new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius)
        })
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: op })
        )
        line.rotation.x = rx
        line.rotation.z = rz
        return line
      }

      const r1 = orbitLine(1.38, Math.PI / 2, 0, 0.3)
      const r2 = orbitLine(1.62, Math.PI / 2 + 0.38, 0.42, 0.18)
      const r3 = orbitLine(1.88, Math.PI / 2 - 0.22, -0.55, 0.11)
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

    // Wave config — centered around globe equator
    type Wave = {
      dy: number     // offset from globe center Y (px)
      amp: number
      freq: number
      color: string
      op: number
      speed: number
    }

    const WAVES: Wave[] = [
      { dy:   0, amp: 20, freq: 0.010, color: '0,212,255',  op: 0.55, speed: 1.0 },
      { dy: -28, amp: 16, freq: 0.012, color: '0,130,255',  op: 0.38, speed: 0.8 },
      { dy:  28, amp: 16, freq: 0.009, color: '0,212,255',  op: 0.38, speed: 1.2 },
      { dy: -56, amp: 14, freq: 0.014, color: '60,160,255', op: 0.25, speed: 0.65 },
      { dy:  56, amp: 14, freq: 0.011, color: '0,180,255',  op: 0.25, speed: 1.35 },
      { dy: -84, amp: 10, freq: 0.013, color: '0,212,255',  op: 0.15, speed: 0.55 },
      { dy:  84, amp: 10, freq: 0.008, color: '0,100,255',  op: 0.15, speed: 1.45 },
      { dy:-112, amp:  7, freq: 0.015, color: '0,212,255',  op: 0.09, speed: 0.45 },
      { dy: 112, amp:  7, freq: 0.007, color: '0,150,255',  op: 0.09, speed: 1.55 },
    ]

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)
      t += 0.009

      const cx = w / 2
      const cy = h * 0.655         // globe center Y estimate
      const gr = Math.min(w, h) * 0.245  // globe radius estimate (screen px)

      // Pass 1 — draw all waves at full opacity
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
        ctx.strokeStyle = `rgba(${wv.color},${wv.op})`
        ctx.stroke()
      })

      // Pass 2 — darken globe interior (refraction/absorption effect)
      const overlay = ctx.createRadialGradient(cx, cy, 0, cx, cy, gr)
      overlay.addColorStop(0,   `rgba(6,9,26,0.68)`)
      overlay.addColorStop(0.65, `rgba(6,9,26,0.45)`)
      overlay.addColorStop(1,    `rgba(6,9,26,0)`)
      ctx.fillStyle = overlay
      ctx.fillRect(0, 0, w, h)

      // Pass 3 — redraw waves inside globe at low opacity (refracted look)
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
        ctx.strokeStyle = `rgba(${wv.color},${wv.op * 0.28})`
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
    <section
      className="relative h-screen overflow-hidden"
      style={{ background: BG }}
    >
      {/* Ambient center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 68%, rgba(0,80,220,0.13) 0%, transparent 70%)',
        }}
      />

      {/* Globe — full viewport canvas so we control camera */}
      <div className="absolute inset-0 z-10">
        <GlobeScene />
      </div>

      {/* Animated signal waves */}
      <WaveCanvas />

      {/* Text content */}
      <div className="relative z-30 flex flex-col items-center text-center px-6 pt-[7.5rem]">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border"
          style={{ borderColor: 'rgba(0,212,255,0.22)', background: 'rgba(0,212,255,0.05)' }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: '#00d4ff',
              boxShadow: '0 0 6px #00d4ff',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#00d4ff',
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
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(3.2rem, 9vw, 7.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 0.95,
            color: '#ffffff',
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
            fontFamily: 'DM Sans, sans-serif',
            color: '#7a90b8',
            fontSize: 'clamp(0.88rem, 2.2vw, 1.05rem)',
            letterSpacing: '0.06em',
            marginBottom: '0.5rem',
          }}
        >
          AI &nbsp;·&nbsp; Infrastructure &nbsp;·&nbsp; Products
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            color: '#4a5878',
            fontSize: '0.82rem',
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
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: '0.85rem',
              padding: '0.6rem 1.75rem',
              borderRadius: '9999px',
              background: '#ffffff',
              color: BG,
              letterSpacing: '0.01em',
              transition: 'background 0.18s, box-shadow 0.18s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e0f7ff'
              e.currentTarget.style.boxShadow = '0 0 18px rgba(0,212,255,0.22)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 400,
              fontSize: '0.85rem',
              padding: '0.6rem 1.75rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.72)',
              letterSpacing: '0.01em',
              transition: 'border-color 0.18s, color 0.18s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.45)'
              e.currentTarget.style.color = '#ffffff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.72)'
            }}
          >
            Get a Demo
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade: dark → white (for Stats section transition) */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none z-20"
        style={{
          height: '180px',
          background: `linear-gradient(to bottom, transparent, ${BG} 55%, #ffffff)`,
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
          style={{ color: 'rgba(255,255,255,0.25)' }}
        >
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
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
