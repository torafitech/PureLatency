'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CTABanner: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-white mb-6">Join an extraordinary team</h2>
          <p className="text-xl text-white/90 mb-8">
            Our diverse and talented teams build innovations that touch millions of lives every day, are you ready to be part of it?
          </p>
          <Button 
            href="/careers" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Explore Careers <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTABanner;