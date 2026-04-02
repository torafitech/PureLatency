'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import NetworkMotionCanvas from './NetworkMotionCanvas'
import UniverseCanvas from './UniverseCanvas'
import Container from '../ui/Container'

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden min-h-screen">

      {/* Background layers */}
      <UniverseCanvas />
      <NetworkMotionCanvas />

      {/* Fade bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Content */}
      <Container className="relative z-10 pt-28 pb-24">
        <div className="text-center max-w-4xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-black"
          >
            Pure Latency
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            Building high‑performance technology systems for the future.
          </motion.p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="/services"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Explore Services
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-gray-400 transition"
            >
              Get a Demo
            </Link>
          </div>

        </div>
      </Container>

    </section>
  )
}
