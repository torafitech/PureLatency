'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../ui/Container';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-40 overflow-hidden min-h-screen flex items-center">

      {/* Exact Vercel screenshot background replication */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: `
            linear-gradient(135deg, #0f0f23 0%, #000000 50%, #1a0033 100%),
            radial-gradient(circle at 10% 90%, rgba(59,130,246,0.6) 0%, transparent 40%),
            radial-gradient(circle at 90% 10%, rgba(239,68,68,0.7) 0%, transparent 40%),
            radial-gradient(circle at 30% 30%, rgba(16,185,129,0.5) 0%, transparent 40%),
            radial-gradient(circle at 70% 70%, rgba(168,85,247,0.6) 0%, transparent 40%)
          `
        }}
      />

      {/* Wave Image Layer */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <Image
          src="/hero.png"
          alt="wave lines"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 50px,
              rgba(255,255,255,0.04) 50px,
              rgba(255,255,255,0.04) 51px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 50px,
              rgba(255,255,255,0.04) 50px,
              rgba(255,255,255,0.04) 51px
            )
          `
        }}
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto px-6"
        >
          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl tracking-tight">
              Pure Latency
            </span>
            <br />
            <span className="text-white/95 drop-shadow-3xl text-6xl md:text-7xl font-black tracking-tight">
              Technology Services
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-300/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Pure Latency provides the technology and expertise to build, scale, and secure 
            <br className="hidden md:block" />
            your most ambitious projects.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link href="/services">
              <motion.button
                className="px-10 py-4 bg-black text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm border border-white/10 flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Explore Services
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                className="px-10 py-4 bg-white text-black rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm border border-black/10 flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Get a Demo
              </motion.button>
            </Link>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;