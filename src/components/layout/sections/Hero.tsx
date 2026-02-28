'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="mb-6 text-5xl md:text-6xl font-light">
            Digital and Technology Services
          </h1>
          <p className="text-xl text-gray-600">
            Keep up to date with news on PureLatency, from upcoming developments to collaborations with governments and enterprises.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;