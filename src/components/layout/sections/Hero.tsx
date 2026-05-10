'use client'

import { motion, type Transition } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import type { QuadraticBezierCurve3, Mesh } from 'three'

interface ArcParticle {
  curve: QuadraticBezierCurve3
  mesh:  Mesh
  t:     number
  speed: number
}

/* ─── Lat/Lon → sphere XYZ ─────────────────────────────────── */
function llToVec3(lat: number, lon: number, r: number, THREE: typeof import('three')) {
  const phi   = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta),
  )
}

/* ─── City hub coordinates ──────────────────────────────────── */
const HUBS = [
  [17.4,  78.5],   // Hyderabad (home)
  [40.7, -74.0],   // New York
  [51.5,  -0.1],   // London
  [ 1.3, 103.8],   // Singapore
  [35.7, 139.7],   // Tokyo
  [25.2,  55.3],   // Dubai
  [-33.9, 151.2],  // Sydney
  [37.8, -122.4],  // San Francisco
  [48.9,   2.3],   // Paris
  [55.8,  37.6],   // Moscow
]

/* Connection pairs (indices into HUBS) */
const CONNECTIONS = [
  [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],  // Hyderabad → all
  [1,2],[2,5],[3,4],[5,3],[7,1],[8,2],[9,2],  // cross links
]

/* ─── Globe + network scene ─────────────────────────────────── */
function GlobeScene() {
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

      /* ── Renderer ── */
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(W, H)
      renderer.setClearColor(0x000000, 0)
      Object.assign(renderer.domElement.style, {
        position: 'absolute', top: '0', left: '0',
        width: '100%', height: '100%',
      })
      container.appendChild(renderer.domElement)

      const scene  = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 100)
      camera.position.set(0, 0, 4.8)

      /* ── Lighting ── */
      scene.add(new THREE.AmbientLight(0xffffff, 0.55))

      const sun = new THREE.DirectionalLight(0x88bbff, 2.2)
      sun.position.set(-4, 3, 3)
      scene.add(sun)

      const backLight = new THREE.DirectionalLight(0x00d4ff, 0.35)
      backLight.position.set(3, -2, -2)
      scene.add(backLight)

      /* ── Earth ── */
      const loader = new THREE.TextureLoader()
      const R = 1.55
      const earthMesh = new THREE.Mesh(
        new THREE.SphereGeometry(R, 80, 80),
        new THREE.MeshStandardMaterial({
          map:       loader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'),
          normalMap: loader.load('https://threejs.org/examples/textures/planets/earth_normal_2048.jpg'),
          roughness: 0.78,
          metalness: 0.12,
        })
      )
      scene.add(earthMesh)

      /* ── Atmosphere ── */
      scene.add(new THREE.Mesh(
        new THREE.SphereGeometry(R * 1.055, 48, 48),
        new THREE.MeshStandardMaterial({
          color: 0x0044cc, side: THREE.BackSide,
          transparent: true, opacity: 0.055,
        })
      ))

      /* ── Thin halo ring ── */
      const haloMat = new THREE.SpriteMaterial({
        map: (() => {
          const size = 256
          const c    = document.createElement('canvas')
          c.width = c.height = size
          const cx = c.getContext('2d')!
          const g  = cx.createRadialGradient(size/2, size/2, size*0.45, size/2, size/2, size*0.5)
          g.addColorStop(0,   'rgba(0,212,255,0.0)')
          g.addColorStop(0.7, 'rgba(0,212,255,0.12)')
          g.addColorStop(1,   'rgba(0,212,255,0.0)')
          cx.fillStyle = g
          cx.fillRect(0, 0, size, size)
          return new THREE.CanvasTexture(c)
        })(),
        transparent: true,
        depthWrite: false,
      })
      const halo = new THREE.Sprite(haloMat)
      halo.scale.set(R * 2.5, R * 2.5, 1)
      scene.add(halo)

      /* ── City dots ── */
      const dotGeo = new THREE.SphereGeometry(0.018, 10, 10)
      const dotMat = new THREE.MeshBasicMaterial({ color: 0x00d4ff })
      HUBS.forEach(([lat, lon]) => {
        const dot = new THREE.Mesh(dotGeo, dotMat)
        const p   = llToVec3(lat, lon, R + 0.01, THREE)
        dot.position.copy(p)
        scene.add(dot)
      })

      /* ── Connection arcs + animated particles ── */
      const particles: ArcParticle[] = []

      const lineMat = new THREE.LineBasicMaterial({ color: 0x00aaff, transparent: true, opacity: 0.22 })
      const pMat    = new THREE.MeshBasicMaterial({ color: 0x00d4ff })
      const pGeo    = new THREE.SphereGeometry(0.022, 8, 8)

      CONNECTIONS.forEach(([a, b]) => {
        const p1  = llToVec3(HUBS[a][0], HUBS[a][1], R + 0.01, THREE)
        const p2  = llToVec3(HUBS[b][0], HUBS[b][1], R + 0.01, THREE)
        const mid = p1.clone().add(p2).multiplyScalar(0.5)
        const lift = mid.length()
        mid.normalize().multiplyScalar(lift + 0.45 + Math.random() * 0.3)

        const curve  = new THREE.QuadraticBezierCurve3(p1, mid, p2)
        const pts    = curve.getPoints(60)
        const lineGeo = new THREE.BufferGeometry().setFromPoints(pts)
        scene.add(new THREE.Line(lineGeo, lineMat))

        const pmesh = new THREE.Mesh(pGeo, pMat.clone())
        scene.add(pmesh)
        particles.push({ curve, mesh: pmesh, t: Math.random(), speed: 0.003 + Math.random() * 0.003 })
      })

      /* ── Orbit ring ── */
      const makeLine = (radius: number, rx: number, rz: number, op: number) => {
        const pts = Array.from({ length: 129 }, (_, i) => {
          const a = (i / 128) * Math.PI * 2
          return new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius)
        })
        const l = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: op })
        )
        l.rotation.x = rx; l.rotation.z = rz
        return l
      }
      const ring = makeLine(R * 1.3, Math.PI * 0.42, 0.2, 0.14)
      scene.add(ring)

      /* ── ResizeObserver ── */
      const ro = new ResizeObserver(() => {
        const w = container.clientWidth, h = container.clientHeight
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
      })
      ro.observe(container)

      /* ── Mouse parallax ── */
      let tx = 0, ty = 0, cx2 = 0, cy2 = 0
      const onMouse = (e: MouseEvent) => {
        tx = (e.clientX / window.innerWidth  - 0.5) * 0.4
        ty = (e.clientY / window.innerHeight - 0.5) * 0.25
      }
      window.addEventListener('mousemove', onMouse)

      /* ── Animation ── */
      let t = 0
      const animate = () => {
        rafId = requestAnimationFrame(animate)
        t += 0.004

        cx2 += (tx - cx2) * 0.035
        cy2 += (ty - cy2) * 0.035

        earthMesh.rotation.y = t * 0.12 + cx2 * 0.25
        earthMesh.rotation.x = -cy2 * 0.15

        /* Sync dots and arcs to earth */
        scene.children.forEach(obj => {
          if (obj instanceof THREE.Mesh && obj !== earthMesh) {
            obj.rotation.y = earthMesh.rotation.y
            obj.rotation.x = earthMesh.rotation.x
          }
          if (obj instanceof THREE.Line) {
            obj.rotation.y = earthMesh.rotation.y
            obj.rotation.x = earthMesh.rotation.x
          }
        })

        particles.forEach(p => {
          p.t = (p.t + p.speed) % 1
          const pos = p.curve.getPoint(p.t)
          /* Apply same rotation as earth */
          pos.applyEuler(new THREE.Euler(earthMesh.rotation.x, earthMesh.rotation.y, 0))
          p.mesh.position.copy(pos)
        })

        ring.rotation.y = t * 0.1
        ring.rotation.z = t * 0.05

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

/* ─── Signal wave canvas ─────────────────────────────────────── */
function WaveCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx    = canvas.getContext('2d')!
    let rafId: number, t = 0

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const WAVES = [
      { dy: 0,   amp: 22, freq: 0.009, op: 0.22, spd: 1.0 },
      { dy: -38, amp: 16, freq: 0.012, op: 0.13, spd: 0.75 },
      { dy:  38, amp: 16, freq: 0.008, op: 0.13, spd: 1.3  },
      { dy: -70, amp: 10, freq: 0.015, op: 0.07, spd: 0.55 },
      { dy:  70, amp: 10, freq: 0.007, op: 0.07, spd: 1.6  },
    ]

    const draw = () => {
      rafId = requestAnimationFrame(draw)
      t += 0.007
      const w = canvas.width, h = canvas.height
      ctx.clearRect(0, 0, w, h)
      const cy = h * 0.5

      WAVES.forEach(wv => {
        ctx.beginPath()
        ctx.lineWidth = 1.2
        for (let x = 0; x <= w; x += 2) {
          const y = cy + wv.dy + Math.sin(x * wv.freq + t * wv.spd) * wv.amp
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.strokeStyle = `rgba(0,180,220,${wv.op})`
        ctx.stroke()
      })
    }
    draw()

    return () => { cancelAnimationFrame(rafId); ro.disconnect() }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 5,
      }}
    />
  )
}

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
          padding: 4rem clamp(2rem, 4vw, 4rem) 4rem clamp(2.5rem, 7vw, 7rem);
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
          margin-bottom: 2rem;
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
          z-index: 2;
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
            padding: 3.5rem clamp(1.5rem,3vw,3rem) 3.5rem clamp(2rem,5vw,4rem);
          }
          .hero-h1 { font-size: clamp(2.8rem,5vw,4.5rem); }
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
          .hero-h1 { font-size: clamp(2.8rem,12vw,4.5rem); }
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

        {/* ── RIGHT: Globe + waves ── */}
        <div className="hero-scene">
          <GlobeScene />
          <WaveCanvas />
        </div>

      </section>
    </>
  )
}
