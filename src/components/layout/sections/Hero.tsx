// components/hero/Hero.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Container from '../ui/Container'
import AdvancedNetworkWave from './AdvancedNetworkWave'
import EarthWithGlowNetwork3D from './EarthWithNetwork3D'

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* === CONTENT === */}
      <Container className="relative z-10 pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-black"
          >
            Pure Latency
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-gray-600 mb-10"
          >
            Building high‑performance technology systems for the future.
          </motion.p>

          <div className="flex justify-center gap-4 mb-10">
            <Link
              href="/services"
              className="px-8 py-4 rounded-full bg-black text-white font-medium"
            >
              Explore Services
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-gray-300 text-black font-medium"
            >
              Get a Demo
            </Link>
          </div>
        </div>
      </Container>

      {/* === GLOBE + WAVES BAND === */}
      <div className="relative w-full h-[360px]">
        {/* Globe centered horizontally, slightly overlapping the content area */}
        <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
          <div className="mt-[-40px] w-[420px] h-[420px] md:w-[480px] md:h-[480px]">
            <EarthWithGlowNetwork3D />
          </div>
        </div>

        {/* Waves locked to bottom of hero band */}
        <div className="absolute inset-x-0 bottom-[-8px]">
          <AdvancedNetworkWave />
        </div>
      </div>
    </section>
  )
}

export default Hero