'use client'

import { useEffect, useRef } from 'react'

export default function UniverseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    let w = canvas.width = window.innerWidth
    let h = canvas.height = 420

    const stars = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.8 + 0.2,
    }))

    function resize() {
      w = canvas.width = window.innerWidth
      h = canvas.height = 420
    }

    window.addEventListener('resize', resize)

    function draw() {
      ctx.clearRect(0, 0, w, h)

      stars.forEach(s => {
        const size = 1.2 * (1 / s.z)
        const alpha = 0.04 * (1 / s.z)

        ctx.fillStyle = `rgba(37, 99, 235, ${alpha})`
        ctx.beginPath()
        ctx.arc(s.x, s.y, size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(draw)
    }

    draw()
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-x-0 bottom-24 pointer-events-none"
    />
  )
}
``