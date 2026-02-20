'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const Accreditations: React.FC = () => {
  const awards = [
    {
      title: "Frost & Sullivan 2025 Singapore Company of the Year",
      description: "Managed IT Services industry for the second consecutive year. This recognition exemplifies visionary innovation, market-leading performance, and unmatched customer care.",
      icon: "fa-trophy"
    },
    {
      title: "Data Protection Trustmark (DPTM)",
      description: "Enterprise-wide certification for organisations in Singapore to demonstrate accountable data protection practices.",
      icon: "fa-shield"
    },
    {
      title: "BizSAFE STAR",
      description: "Recognises that NCS' Workplace Safety and Health Management System identifies, manages and controls workplace risks.",
      icon: "fa-certificate"
    },
    {
      title: "ISO 14001 & ISO 45001",
      description: "Internationally recognised standards for environmental management and occupational health and safety.",
      icon: "fa-check-circle"
    },
    {
      title: "Company of Good – 3 Hearts",
      description: "Recognising NCS as a leading organisation with a strong sense of purpose and a clear plan to expand its impact.",
      icon: "fa-heart"
    },
    {
      title: "Frost & Sullivan 2025 Customer Value Leadership",
      description: "Recognised for enabling organisations to modernise customer engagement and future-proof customer experience operations.",
      icon: "fa-star"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="badge mb-4">Accreditations</span>
          <h2>View our accolades</h2>
          <p className="text-xl text-gray-600 mt-4">
            Recognitions that elevate our commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <i className={`fas ${award.icon} text-2xl text-primary`}></i>
              </div>
              <h3 className="text-lg font-semibold mb-3">{award.title}</h3>
              <p className="text-gray-600 text-sm">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Accreditations;