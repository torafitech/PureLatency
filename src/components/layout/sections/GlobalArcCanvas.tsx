'use client'

import { useEffect, useRef } from 'react'

export default function GlobalArcCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!

    const w = canvas.width = window.innerWidth
    const h = canvas.height = 260

    const cx = w / 2
    const cy = h + 80
    const radius = w * 0.45

    function draw() {
      ctx.clearRect(0, 0, w, h)

      ctx.beginPath()
      ctx.arc(cx, cy, radius, Math.PI * 1.05, Math.PI * 1.95)

      ctx.strokeStyle = 'rgba(37, 99, 235, 0.12)'
      ctx.lineWidth = 1
      ctx.stroke()

      requestAnimationFrame(draw)
    }

    draw()
  }, [])

  return (
    <canvas
      ref={ref}
      className="absolute inset-x-0 bottom-0 pointer-events-none"
    />
  )
}