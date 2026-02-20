import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { ProcessStep } from '../../types/TS index';

const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      step: 1,
      duration: '1-2 Days',
      title: 'Discovery & Consultation',
      description: 'We start by understanding your business goals, challenges, and technical requirements through detailed consultations. Our team conducts in-depth sessions to identify pain points and define clear objectives.',
      features: [
        'Initial consultation and requirement gathering',
        'Business goals and technical analysis',
        'Project scope definition',
        'Timeline and resource planning'
      ]
    },
    {
      step: 2,
      duration: '3-5 Days',
      title: 'Planning & Strategy',
      description: 'We create a comprehensive project roadmap, technology stack selection, and architectural design tailored to your requirements.',
      features: [
        'Technical architecture design',
        'Technology stack selection',
        'UX/UI wireframing',
        'Sprint planning'
      ]
    },
    {
      step: 3,
      duration: '2-12 Weeks',
      title: 'Development & Testing',
      description: 'Agile development with continuous integration, regular demos, and thorough testing at every stage.',
      features: [
        'Iterative development',
        'Weekly sprint reviews',
        'Automated testing',
        'Performance optimization'
      ]
    },
    {
      step: 4,
      duration: '1-3 Days',
      title: 'Deployment & Launch',
      description: 'Production deployment with zero downtime, final QA, and launch support.',
      features: [
        'Production deployment',
        'Final QA and testing',
        'Launch coordination',
        'Post-launch monitoring'
      ]
    },
    {
      step: 5,
      duration: 'Ongoing',
      title: 'Support & Maintenance',
      description: 'Long-term partnership with continuous improvement, updates, and technical support.',
      features: [
        '24/7 technical support',
        'Regular updates and patches',
        'Performance monitoring',
        'Feature enhancements'
      ]
    }
  ];

  return (
    <section id="process" className="section-padding">
      <Container>
        <SectionTitle
          badge="How We Work"
          title="Our Process"
          subtitle="A proven methodology for successful project delivery"
        />

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="process-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <div className="text-sm font-semibold text-[#0066cc] mb-2">
                  {step.duration}
                </div>
                <div className="text-sm font-semibold text-[#86868b] tracking-wider">
                  Step {String(step.step).padStart(2, '0')}
                </div>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl mb-4">{step.title}</h4>
                <p className="text-base text-[#6e6e73] mb-5">{step.description}</p>
                <ul className="space-y-3">
                  {step.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-base text-[#6e6e73]">
                      <i className="fas fa-circle-check text-[#0066cc] text-sm"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;