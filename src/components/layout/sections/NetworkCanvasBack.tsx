'use client'

import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  z: number
  speed: number
}

export default function NetworkCanvasBack() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!

    let w = canvas.width = window.innerWidth
    let h = canvas.height = 420

    const nodes: Node[] = Array.from({ length: 35 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.5 + 0.5,
      speed: 0.15,
    }))

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = 420
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

        const alpha = 0.04 * (1 / n.z)

        ctx.fillStyle = `rgba(0,0,0,${alpha})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.2, 0, Math.PI * 2)
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
      className="absolute inset-x-0 bottom-28 pointer-events-none"
    />
  )
}
``