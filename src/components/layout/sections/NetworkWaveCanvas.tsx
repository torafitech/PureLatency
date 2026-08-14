'use client'

import { useEffect, useRef } from 'react'

const WAVE_RGB = '0,212,255'
const SPAWN_INTERVAL_MS = 500
const MAX_RADIUS_RATIO = 0.62
// Globe sphere covers roughly this fraction of the shorter container side —
// waves must start past it or they fade out hidden behind the opaque globe.
const GLOBE_RADIUS_RATIO = 0.34
const LINE_WIDTH = 1.4

interface Wave {
  radius: number
  opacity: number
  growth: number
  decay: number
}

export default function NetworkWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas?.parentElement
    if (!canvas || !parent) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    const dpr = window.devicePixelRatio || 1
    const waves: Wave[] = []
    let lastSpawn = 0
    let raf = 0

    const resize = () => {
      const rect = parent.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(parent)
    resize()

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height)
      const cx = width / 2
      const cy = height / 2
      const minSide = Math.min(width, height)
      const maxR = minSide * MAX_RADIUS_RATIO
      const globeR = minSide * GLOBE_RADIUS_RATIO

      if (time - lastSpawn > SPAWN_INTERVAL_MS) {
        const startR = globeR + Math.random() * 12
        const growth = 0.7 + Math.random() * 0.5
        const initialOpacity = 0.24 + Math.random() * 0.16
        const travelFrames = (maxR - startR) / growth
        waves.push({
          radius: startR,
          opacity: initialOpacity,
          growth,
          decay: initialOpacity / travelFrames,
        })
        lastSpawn = time
      }

      for (let i = waves.length - 1; i >= 0; i--) {
        const w = waves[i]
        w.radius += w.growth
        w.opacity -= w.decay
        if (w.opacity <= 0.002 || w.radius > maxR) {
          waves.splice(i, 1)
          continue
        }
        ctx.beginPath()
        ctx.arc(cx, cy, w.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${WAVE_RGB},${w.opacity})`
        ctx.lineWidth = LINE_WIDTH
        ctx.shadowColor = `rgba(${WAVE_RGB},${w.opacity * 0.8})`
        ctx.shadowBlur = 4
        ctx.stroke()
        ctx.shadowBlur = 0
      }

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}
    />
  )
}
