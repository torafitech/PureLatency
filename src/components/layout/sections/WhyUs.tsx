import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { WhyUsItem } from '../../types/TS index';

const WhyUs: React.FC = () => {
  const items: WhyUsItem[] = [
    {
      number: '500+',
      label: 'Projects',
      description: '11+ years of experience delivering exceptional technology solutions across industries.'
    },
    {
      number: '99.9%',
      label: 'Satisfaction',
      description: 'Your success is our priority. We build solutions tailored to your unique business needs.'
    },
    {
      number: '80%',
      label: 'Faster',
      description: 'Agile methodology ensures rapid development without compromising on quality.'
    },
    {
      number: '100%',
      label: 'Tested',
      description: 'Rigorous testing and code reviews guarantee reliable, secure, and scalable solutions.'
    },
    {
      number: '50+',
      label: 'Experts',
      description: 'Skilled developers, designers, and consultants dedicated to your project success.'
    },
    {
      number: '40%',
      label: 'Savings',
      description: 'Maximize ROI with our optimized development process and competitive pricing.'
    }
  ];

  return (
    <section className="section-padding bg-[#fafafa]">
      <Container>
        <SectionTitle
          badge="PureLatency"
          title="Why Choose PureLatency"
          subtitle="Proven excellence meets client-focused delivery for unparalleled results"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              className="bg-white rounded-3xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-[#0066cc] leading-none mb-2">
                {item.number}
              </div>
              <div className="text-xl font-semibold mb-4">{item.label}</div>
              <p className="text-sm text-[#6e6e73]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;