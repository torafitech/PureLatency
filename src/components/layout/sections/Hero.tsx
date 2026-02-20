'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const news = [
    {
      title: "NCS launches S$130M AI transformation initiative across Asia Pacific focused on Intelligentisation, Internationalisation, and Inspiration",
      date: "2024",
      category: "AI Initiative"
    },
    {
      title: "NCS establishes joint venture with Globe Telecom, to acquire a majority stake in Yondu, Globe's technology solutions arm",
      date: "2024",
      category: "Partnership"
    },
    {
      title: "NCS announces strategic partnership with Google Cloud to accelerate digital transformation in Asia Pacific",
      date: "2024",
      category: "Partnership"
    }
  ];

  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="badge mb-4">Latest News</span>
          <h1 className="mb-6">
            Digital and Technology Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Keep up to date with news on NCS, from upcoming developments to collaborations with governments and enterprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <span className="text-sm text-primary font-semibold mb-2 block">{item.category}</span>
              <h3 className="text-lg font-semibold mb-4 line-clamp-3">{item.title}</h3>
              <span className="text-sm text-gray-500">{item.date}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hero;