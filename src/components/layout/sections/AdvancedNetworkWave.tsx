'use client'

import { motion } from 'framer-motion'

const NODE_COUNT = 22
const SPACING = 70

function generateWave(y: number, amp = 10, phase = 0) {
  return Array.from({ length: NODE_COUNT }).map((_, i) => ({
    x: i * SPACING,
    y: y + Math.sin(i * 0.6 + phase) * amp,
  }))
}

export default function AdvancedNetworkWave() {
  const waveA = generateWave(55, 10, 0)
  const waveB = generateWave(90, 6, 1)

  return (
    <div className="relative w-full h-40 overflow-hidden pointer-events-none">
      <svg
        width="130%"
        height="100%"
        viewBox="0 0 1600 160"
        preserveAspectRatio="none"
      >
        {/* backbone A */}
        <motion.g
          animate={{ x: [0, -140] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        >
          {waveA.map((p, i) => (
            <g key={`a-${i}`}>
              {i > 0 && (
                <path
                  d={`M ${waveA[i - 1].x} ${waveA[i - 1].y}
                      Q ${(p.x + waveA[i - 1].x) / 2}
                        ${(p.y + waveA[i - 1].y) / 2 - 4}
                        ${p.x} ${p.y}`}
                  stroke="rgba(0,0,0,0.25)"
                  strokeWidth="1"
                  fill="none"
                />
              )}
              <circle cx={p.x} cy={p.y} r="2" fill="rgba(0,0,0,0.5)" />
            </g>
          ))}
        </motion.g>

        {/* backbone B */}
        <motion.g
          animate={{ x: [-140, 0] }}
          transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
        >
          {waveB.map((p, i) => (
            <g key={`b-${i}`}>
              {i > 0 && (
                <line
                  x1={waveB[i - 1].x}
                  y1={waveB[i - 1].y}
                  x2={p.x}
                  y2={p.y}
                  stroke="rgba(0,0,0,0.18)"
                  strokeWidth="0.8"
                />
              )}
              <circle cx={p.x} cy={p.y} r="1.8" fill="rgba(0,0,0,0.4)" />
            </g>
          ))}
        </motion.g>

        {/* pulses */}
        <motion.circle
          initial={{ cx: 0 }}
          animate={{ cx: 1600 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          cy={55}
          r="5"
          fill="rgba(0,0,0,0.85)"
        />
        <motion.circle
          initial={{ cx: 1600 }}
          animate={{ cx: 0 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          cy={90}
          r="4"
          fill="rgba(0,0,0,0.55)"
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}