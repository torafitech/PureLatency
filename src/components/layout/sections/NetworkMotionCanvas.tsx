'use client'

import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  z: number
  speed: number
}

export default function NetworkMotionCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    let width = canvas.width = window.innerWidth
    let height = canvas.height = 400

    const NODE_COUNT = 70
    const nodes: Node[] = []

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = 400
    }

    window.addEventListener('resize', resize)

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height * (0.6 + Math.random() * 0.4),
        z: Math.random() * 0.9 + 0.1,
        speed: 0.2 + Math.random() * 0.4,
      })
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      // subtle connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]

          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)

          if (dist < 90 && Math.random() < 0.02) {
            const alpha = 0.03 * (1 - dist / 90)
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // nodes
      nodes.forEach(n => {
        const depth = 1 / n.z
        const size = 2 * depth
        const alpha = 0.045 * depth

        ctx.fillStyle = `rgba(37, 99, 235, ${alpha})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, size, 0, Math.PI * 2)
        ctx.fill()

        n.x += n.speed * depth
        n.y += 0.03 * depth

        if (n.x > width + 50) {
          n.x = -50
          n.y = Math.random() * height
        }
      })

      requestAnimationFrame(draw)
    }

    draw()
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-x-0 bottom-20 pointer-events-none"
    />
  )
}
