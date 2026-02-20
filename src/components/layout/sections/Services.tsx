import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { Service } from '../../types/TS index';

const Services: React.FC = () => {
  const services: Service[] = [
    // Web Development
    {
      id: 1,
      number: 'SERVICE 01',
      category: 'Web Development',
      title: 'Custom Web Applications',
      description: 'Build scalable, high-performance web applications with modern frameworks. Responsive solutions that drive business growth.',
      tags: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration'],
      link: '/services/web-development/custom-apps'
    },
    {
      id: 2,
      number: 'SERVICE 02',
      category: 'Web Development',
      title: 'E-Commerce Solutions',
      description: 'Full-featured online stores with payment integration, inventory management, and analytics.',
      tags: ['Payment Gateway', 'Cart & Checkout', 'Admin Dashboard', 'SEO Optimized'],
      link: '/services/web-development/ecommerce'
    },
    {
      id: 3,
      number: 'SERVICE 03',
      category: 'Web Development',
      title: 'SaaS Platforms',
      description: 'Enterprise-grade SaaS solutions with multi-tenancy, subscription billing, and advanced analytics.',
      tags: ['Multi-tenant', 'Subscription Billing', 'Role Management', 'Analytics'],
      link: '/services/web-development/saas'
    },
    // Mobile Development
    {
      id: 4,
      number: 'SERVICE 04',
      category: 'Mobile Development',
      title: 'Native Mobile Apps',
      description: 'High-performance native iOS and Android applications with seamless user experiences.',
      tags: ['iOS & Android', 'Native Features', 'Push Notifications', 'Offline Support'],
      link: '/services/mobile-development/native'
    },
    {
      id: 5,
      number: 'SERVICE 05',
      category: 'Mobile Development',
      title: 'Cross-Platform Apps',
      description: 'Cost-effective mobile solutions using React Native and Flutter with a single codebase.',
      tags: ['React Native', 'Flutter', 'Single Codebase', 'Fast Deployment'],
      link: '/services/mobile-development/cross-platform'
    },
    {
      id: 6,
      number: 'SERVICE 06',
      category: 'Mobile Development',
      title: 'Progressive Web Apps',
      description: 'App-like web experiences that work offline and install on home screens.',
      tags: ['Offline First', 'Installable', 'Fast Loading', 'Cross-platform'],
      link: '/services/mobile-development/pwa'
    },
    // AI & ML
    {
      id: 7,
      number: 'SERVICE 07',
      category: 'AI & Machine Learning',
      title: 'Custom AI Models',
      description: 'Tailored machine learning solutions for your specific business challenges.',
      tags: ['Custom ML Models', 'Neural Networks', 'Deep Learning', 'Model Training'],
      link: '/services/ai-ml/custom-models'
    },
    {
      id: 8,
      number: 'SERVICE 08',
      category: 'AI & Machine Learning',
      title: 'AI Automation',
      description: 'Intelligent automation workflows that streamline operations and reduce manual work by 80%.',
      tags: ['Workflow Automation', 'RPA Solutions', 'Process Mining', 'Smart Integration'],
      link: '/services/ai-ml/automation'
    },
    {
      id: 9,
      number: 'SERVICE 09',
      category: 'AI & Machine Learning',
      title: 'NLP & Chatbots',
      description: 'Advanced natural language processing and conversational AI solutions.',
      tags: ['ChatGPT Integration', 'NLP Models', 'Voice Assistants', 'Sentiment Analysis'],
      link: '/services/ai-ml/nlp-chatbots'
    },
    // Cloud & Infrastructure
    {
      id: 10,
      number: 'SERVICE 10',
      category: 'Cloud & Infrastructure',
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime.',
      tags: ['AWS & Azure', 'Zero Downtime', 'Cost Optimization', 'Migration Strategy'],
      link: '/services/cloud/migration'
    },
    {
      id: 11,
      number: 'SERVICE 11',
      category: 'Cloud & Infrastructure',
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code.',
      tags: ['Docker & Kubernetes', 'CI/CD Pipelines', 'GitOps', 'Monitoring'],
      link: '/services/cloud/devops'
    },
    {
      id: 12,
      number: 'SERVICE 12',
      category: 'Cloud & Infrastructure',
      title: 'Serverless Architecture',
      description: 'Build and deploy applications without managing servers. Scale automatically.',
      tags: ['Lambda Functions', 'Auto-scaling', 'Cost Efficient', 'Event-driven'],
      link: '/services/cloud/serverless'
    }
  ];

  return (
    <section id="services" className="section-padding">
      <Container>
        <SectionTitle
          badge="Our Services"
          title="Custom web, mobile & AI solutions"
          subtitle="End-to-end development tailored to your business needs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="text-xs font-semibold text-[#0066cc] tracking-wider mb-4">
                {service.number}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-2">
                {service.category}
              </div>
              <h3 className="text-2xl md:text-3xl mb-4">{service.title}</h3>
              <p className="text-base text-[#6e6e73] mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white text-[#1d1d1f] text-xs font-medium px-3.5 py-1.5 rounded-full border border-[#e6e6e9]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={service.link} className="btn-link">
                Learn more <i className="fas fa-arrow-right"></i>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;