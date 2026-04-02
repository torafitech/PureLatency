'use client'

import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  z: number
  speed: number
}

export default function NetworkCanvasFront() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!

    let w = canvas.width = window.innerWidth
    let h = canvas.height = 360

    const nodes: Node[] = Array.from({ length: 28 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.3 + 0.2,
      speed: 0.35,
    }))

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = 360
    }
    window.addEventListener('resize', resize)

    function draw() {
      ctx.clearRect(0, 0, w, h)

      nodes.forEach(n => {
        n.x += n.speed * (1 / n.z)

        if (n.x > w + 50) {
          n.x = -50
          n.y = Math.random() * h
        }

        const size = 2.4 * (1 / n.z)
        const alpha = 0.12 * (1 / n.z)

        ctx.fillStyle = `rgba(37, 99, 235, ${alpha})`      // Tailwind blue-600
        ctx.beginPath()
        ctx.arc(n.x, n.y, size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(draw)
    }

    draw()
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <canvas
      ref={ref}
      className="absolute inset-x-0 bottom-16 pointer-events-none"
    />
  )
}
