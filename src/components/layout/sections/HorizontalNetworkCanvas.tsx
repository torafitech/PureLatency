'use client'

import { useEffect, useRef } from 'react'

export default function HorizontalNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    let w = canvas.width = window.innerWidth
    let h = canvas.height = 260

    const nodes = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      speed: 0.3 + Math.random() * 0.4,
    }))

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = 260
    }
    window.addEventListener('resize', resize)

    function draw() {
      ctx.clearRect(0, 0, w, h)

      // Links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.hypot(dx, dy)

          if (dist < 120) {
            ctx.strokeStyle = 'rgba(37,99,235,0.16)'
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Nodes
      nodes.forEach(n => {
        const depth = n.y / h
        ctx.fillStyle = `rgba(37,99,235,${0.55 + depth * 0.2})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, 2 + depth, 0, Math.PI * 2)
        ctx.fill()

        n.x += n.speed
        if (n.x > w + 40) {
          n.x = -40
          n.y = Math.random() * h
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
      className="w-full h-full pointer-events-none"
    />
  )
}