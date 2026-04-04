'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import HorizontalNetworkCanvas from './HorizontalNetworkCanvas'
import NetworkMotionCanvas from './NetworkMotionCanvas'
import UniverseCanvas from './UniverseCanvas'

export default function Hero() {
  const globeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!globeRef.current) return

    import('three').then(THREE => {
      const container = globeRef.current!
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      const scene = new THREE.Scene()

      const isMobile = window.innerWidth < 768
      const camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      )
      camera.position.set(0, isMobile ? -0.2 : -0.12, isMobile ? 4.4 : 4.0)
      camera.lookAt(0, 0, 0)

      renderer.setSize(container.clientWidth, container.clientHeight)
      renderer.setClearColor(0xffffff, 0)
      container.appendChild(renderer.domElement)

      scene.add(new THREE.AmbientLight(0xffffff, 0.6))
      const light = new THREE.DirectionalLight(0xffffff, 1)
      light.position.set(4, 4, 4)
      scene.add(light)

      const loader = new THREE.TextureLoader()
      const globe = new THREE.Mesh(
        new THREE.SphereGeometry(0.95, 96, 96),
        new THREE.MeshStandardMaterial({
          map: loader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'),
          normalMap: loader.load('https://threejs.org/examples/textures/planets/earth_normal_2048.jpg'),
          roughness: 0.82,
          metalness: 0.1,
        })
      )
      scene.add(globe)

      const ringMat = new THREE.MeshStandardMaterial({
        color: 0x2563eb,
        emissive: 0x2563eb,
        emissiveIntensity: 0.3,
        opacity: 0.35,
        transparent: true,
      })

      const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.006, 64, 240), ringMat)
      ring1.rotation.x = Math.PI / 2
      scene.add(ring1)

      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.004, 64, 240), ringMat)
      ring2.rotation.set(Math.PI / 2 + 0.25, 0, 0.3)
      scene.add(ring2)

      function animate() {
        requestAnimationFrame(animate)
        globe.rotation.y += isMobile ? 0.0006 : 0.0012
        ring1.rotation.z += 0.001
        ring2.rotation.z -= 0.0008
        renderer.render(scene, camera)
      }
      animate()

      const resize = () => {
        camera.aspect = container.clientWidth / container.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(container.clientWidth, container.clientHeight)
      }
      window.addEventListener('resize', resize)

      return () => {
        window.removeEventListener('resize', resize)
        renderer.dispose()
        container.removeChild(renderer.domElement)
      }
    })
  }, [])

  return (
    <section className="relative bg-white h-[92vh] md:min-h-screen overflow-hidden">

      {/* CONTENT */}
      <div className="relative z-30 flex flex-col items-center text-center px-6 pt-24">
        <span className="mb-4 text-xs px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-medium">
          Next‑Generation Infrastructure
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Pure Latency
        </h1>

        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Building high‑performance technology systems for the future.
        </p>

        <div className="flex gap-4">
          <Link href="/services" className="px-8 py-3 rounded-full bg-black text-white font-medium">
            Explore Services
          </Link>
          <Link href="/contact" className="px-8 py-3 rounded-full border border-gray-300 text-gray-700">
            Get a Demo
          </Link>
        </div>
      </div>

      {/* HORIZONTAL NETWORK (DESKTOP ONLY) */}
      <div className="hidden md:block absolute inset-x-0 bottom-[200px] z-10 h-[380px]">
        <HorizontalNetworkCanvas />

        {/* ✅ CIRCULAR OCCLUSION MASK */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, white 60%, rgba(255,255,255,0.95) 72%, rgba(255,255,255,0.85) 100%)',
          }}
        />
      </div>

      {/* GLOBAL ARC */}
      <div className="absolute inset-x-0 bottom-[240px] z-0 pointer-events-none">
        <svg viewBox="0 0 1000 200" className="w-full h-[200px]" preserveAspectRatio="none">
          <path
            d="M0,200 Q500,-80 1000,200"
            fill="none"
            stroke="rgba(37,99,235,0.12)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* GLOBE */}
      <div className="relative z-20 w-full h-[320px] sm:h-[400px] md:h-[520px]">
        <div ref={globeRef} className="absolute inset-0" />
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-40">
        <a href="#services" className="flex flex-col items-center gap-1 text-gray-500">
          <span className="text-xs tracking-wide">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              d="M12 5v14M12 19l6-6M12 19l-6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* FADE */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      
      {/* Background layers */}
      <UniverseCanvas />
      <NetworkMotionCanvas />
    </section>
  )
}