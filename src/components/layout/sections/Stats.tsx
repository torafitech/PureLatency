'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const Stats: React.FC = () => {
  const stats = [
    {
      number: "#1",
      label: "in IT services in Singapore and Southeast Asia*",
      description: "*For 2023. Source: IDC's Worldwide Semiannual Services Tracker (2023H2 release). NCS ranks no. 1 in market share based on vendor revenue. SEA (Southeast Asia) = Singapore, Malaysia, Thailand, Indonesia, Philippines and Vietnam."
    },
    {
      number: "> 14,000",
      label: "talents across Singapore, Australia, China and India"
    },
    {
      number: "4000+",
      label: "active projects"
    },
    {
      number: "55",
      label: "areas of specialisations"
    },
    {
      number: "> 20",
      label: "cities we operate in within Asia Pacific"
    },
    {
      number: "3",
      label: "innovation centres in Singapore, Melbourne and Shenzhen"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="stat-card"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 mb-2">{stat.label}</p>
              {stat.description && (
                <p className="text-sm text-gray-400 mt-2">{stat.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;