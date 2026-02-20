'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Partners: React.FC = () => {
  const partners = [
    { name: 'Google Cloud', icon: 'fa-cloud' },
    { name: 'Microsoft', icon: 'fa-windows' },
    { name: 'AWS', icon: 'fa-aws' },
    { name: 'Salesforce', icon: 'fa-cloud' },
    { name: 'SAP', icon: 'fa-database' },
    { name: 'Oracle', icon: 'fa-database' },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="badge mb-4">Our Partners</span>
          <h2>Meet our partners</h2>
          <p className="text-xl text-gray-600 mt-4">
            Explore our thriving partner ecosystem where innovation and success go hand in hand.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="partner-card"
            >
              <i className={`fas ${partner.icon} text-4xl text-primary`}></i>
              <span className="text-sm font-medium mt-2">{partner.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button href="/partners" variant="outline">
            View All Partners <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Partners;