'use client'

import { useEffect, useRef, useState } from 'react'
import Globe, { type GlobeMethods } from 'react-globe.gl'
import * as THREE from 'three'

const SITE_DARK = '#06091a'

interface Arc {
  startLat: number
  startLng: number
  endLat: number
  endLng: number
  dashTime: number
}

const CITIES = {
  hyderabad: { lat: 17.4, lng: 78.5 },
  singapore: { lat: 1.3, lng: 103.8 },
  london: { lat: 51.5, lng: -0.1 },
  newYork: { lat: 40.7, lng: -74.0 },
  dubai: { lat: 25.2, lng: 55.3 },
  sydney: { lat: -33.9, lng: 151.2 },
  tokyo: { lat: 35.7, lng: 139.7 },
  sanFrancisco: { lat: 37.8, lng: -122.4 },
}

const ARCS: Arc[] = [
  { startLat: CITIES.hyderabad.lat, startLng: CITIES.hyderabad.lng, endLat: CITIES.singapore.lat, endLng: CITIES.singapore.lng, dashTime: 2600 },
  { startLat: CITIES.hyderabad.lat, startLng: CITIES.hyderabad.lng, endLat: CITIES.london.lat, endLng: CITIES.london.lng, dashTime: 4200 },
  { startLat: CITIES.hyderabad.lat, startLng: CITIES.hyderabad.lng, endLat: CITIES.dubai.lat, endLng: CITIES.dubai.lng, dashTime: 2000 },
  { startLat: CITIES.hyderabad.lat, startLng: CITIES.hyderabad.lng, endLat: CITIES.tokyo.lat, endLng: CITIES.tokyo.lng, dashTime: 3000 },
  { startLat: CITIES.hyderabad.lat, startLng: CITIES.hyderabad.lng, endLat: CITIES.sydney.lat, endLng: CITIES.sydney.lng, dashTime: 4800 },
  { startLat: CITIES.london.lat, startLng: CITIES.london.lng, endLat: CITIES.newYork.lat, endLng: CITIES.newYork.lng, dashTime: 2400 },
  { startLat: CITIES.newYork.lat, startLng: CITIES.newYork.lng, endLat: CITIES.sanFrancisco.lat, endLng: CITIES.sanFrancisco.lng, dashTime: 2200 },
  { startLat: CITIES.dubai.lat, startLng: CITIES.dubai.lng, endLat: CITIES.singapore.lat, endLng: CITIES.singapore.lng, dashTime: 3400 },
  { startLat: CITIES.singapore.lat, startLng: CITIES.singapore.lng, endLat: CITIES.sydney.lat, endLng: CITIES.sydney.lng, dashTime: 3800 },
  { startLat: CITIES.singapore.lat, startLng: CITIES.singapore.lng, endLat: CITIES.tokyo.lat, endLng: CITIES.tokyo.lng, dashTime: 2800 },
]

const HUBS = Object.values(CITIES)

// Lazy + cached: canvas/texture need `document`, unsafe at module-eval time under SSR.
let glowTexture: THREE.Texture | null = null
function getGlowTexture(): THREE.Texture {
  if (glowTexture) return glowTexture
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 128
  const ctx = canvas.getContext('2d')!
  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.16, 'rgba(210,245,255,1)')
  gradient.addColorStop(0.4, 'rgba(120,220,255,0.7)')
  gradient.addColorStop(1, 'rgba(0,212,255,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 128, 128)
  glowTexture = new THREE.CanvasTexture(canvas)
  return glowTexture
}

const CITY_LIGHT_BASE_SCALE = 16

function createCityLightSprite(): THREE.Sprite {
  const material = new THREE.SpriteMaterial({
    map: getGlowTexture(),
    transparent: true,
    opacity: 1,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
  const sprite = new THREE.Sprite(material)
  sprite.scale.set(CITY_LIGHT_BASE_SCALE, CITY_LIGHT_BASE_SCALE, 1)
  return sprite
}

export default function HeroGlobe() {
  const globeRef = useRef<GlobeMethods | undefined>(undefined)
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const citySpritesRef = useRef<THREE.Sprite[]>([])
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [countries, setCountries] = useState<object[]>([])

  useEffect(() => {
    fetch('/data/world-countries-110m.geojson')
      .then((res) => res.json())
      .then((data) => setCountries(data.features))
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })
    ro.observe(container)
    return () => ro.disconnect()
  }, [])

  // Parallax reads mouse position, wrapper transform lerps toward it each frame —
  // keeps the tilt smooth without re-rendering React on every mousemove.
  useEffect(() => {
    const container = containerRef.current
    const wrapper = wrapperRef.current
    if (!container || !wrapper) return

    const MAX_OFFSET = 14
    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }
    let raf = 0

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const nx = (e.clientX - rect.left) / rect.width - 0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5
      target.x = nx * MAX_OFFSET
      target.y = ny * MAX_OFFSET
    }
    const onLeave = () => {
      target.x = 0
      target.y = 0
    }

    const tick = () => {
      current.x += (target.x - current.x) * 0.06
      current.y += (target.y - current.y) * 0.06
      wrapper.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`
      raf = requestAnimationFrame(tick)
    }

    container.addEventListener('mousemove', onMove)
    container.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      container.removeEventListener('mousemove', onMove)
      container.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  // City lights breathe out of phase with each other so the globe reads as
  // "live traffic" rather than a static texture.
  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = (now - start) / 1000
      citySpritesRef.current.forEach((sprite, i) => {
        const phase = t * 1.6 + i * 1.1
        const pulse = 0.72 + 0.28 * Math.sin(phase)
        const mat = sprite.material as THREE.SpriteMaterial
        mat.opacity = pulse
        const scale = CITY_LIGHT_BASE_SCALE * (0.85 + 0.25 * pulse)
        sprite.scale.set(scale, scale, 1)
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const handleGlobeReady = () => {
    const globe = globeRef.current
    if (!globe) return
    globe.pointOfView({ lat: 20, lng: 60, altitude: 2.4 }, 0)

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2)
    keyLight.position.set(-4, 3, 5)
    const fillLight = new THREE.DirectionalLight(0xaaccff, 0.5)
    fillLight.position.set(5, -2, -3)
    const ambient = new THREE.AmbientLight(0xffffff, 0.35)
    globe.lights([ambient, keyLight, fillLight])

    const controls = globe.controls()
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.3
    controls.enableZoom = false
    controls.enablePan = false
    controls.enableRotate = true
  }

  return (
    <div ref={containerRef} style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
      <div ref={wrapperRef} style={{ position: 'absolute', inset: 0, willChange: 'transform' }}>
        {size.width > 0 && size.height > 0 && (
          <Globe
            ref={globeRef}
            width={size.width}
            height={size.height}
            onGlobeReady={handleGlobeReady}
            backgroundColor="rgba(0,0,0,0)"
            globeMaterial={new THREE.MeshPhongMaterial({
              color: SITE_DARK,
              specular: new THREE.Color(0x666677),
              shininess: 18,
            })}
            showAtmosphere={true}
            atmosphereColor="#ffffff"
            atmosphereAltitude={0.18}
            polygonsData={countries}
            polygonCapColor={() => 'rgba(0,212,255,0.10)'}
            polygonSideColor={() => 'rgba(0,212,255,0.02)'}
            polygonStrokeColor={() => 'rgba(255,255,255,0.5)'}
            polygonAltitude={0.006}
            polygonsTransitionDuration={0}
            arcsData={ARCS}
            arcColor={() => 'rgba(255,255,255,0.55)'}
            arcStroke={0.4}
            arcDashLength={0.4}
            arcDashGap={2}
            arcDashAnimateTime={(d) => (d as Arc).dashTime}
            arcAltitudeAutoScale={0.3}
            pointsData={HUBS}
            pointLat={(d) => (d as { lat: number }).lat}
            pointLng={(d) => (d as { lng: number }).lng}
            pointColor={() => 'rgba(255,255,255,0.95)'}
            pointAltitude={0.006}
            pointRadius={0.32}
            pointsMerge={true}
            objectsData={HUBS}
            objectLat={(d) => (d as { lat: number }).lat}
            objectLng={(d) => (d as { lng: number }).lng}
            objectAltitude={0.02}
            objectThreeObject={(d) => {
              const sprite = createCityLightSprite()
              citySpritesRef.current[HUBS.indexOf(d as (typeof HUBS)[number])] = sprite
              return sprite
            }}
            ringsData={HUBS}
            ringLat={(d) => (d as { lat: number }).lat}
            ringLng={(d) => (d as { lng: number }).lng}
            ringColor={() => (t: number) => `rgba(0,212,255,${0.55 * (1 - t)})`}
            ringMaxRadius={3}
            ringPropagationSpeed={1.4}
            ringRepeatPeriod={2400}
            showGraticules={false}
          />
        )}
      </div>
    </div>
  )
}
