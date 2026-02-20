import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '../layout/ui/Container';
import SectionTitle from '../layout/ui/SectionTitle';
import  Services  from '../layout/sections/Services';
import Link from 'next/link';

const ServicesPage: NextPage = () => {
  const serviceCategories = [
    {
      name: 'Web Development',
      icon: 'fa-code',
      services: [
        { name: 'Custom Web Applications', description: 'Scalable, high-performance web apps with modern frameworks', href: '/services/web-development/custom-apps' },
        { name: 'E-Commerce Solutions', description: 'Full-featured online stores with payment integration', href: '/services/web-development/ecommerce' },
        { name: 'SaaS Platforms', description: 'Enterprise-grade SaaS with multi-tenancy and billing', href: '/services/web-development/saas' },
      ]
    },
    {
      name: 'Mobile Development',
      icon: 'fa-mobile-screen',
      services: [
        { name: 'Native Mobile Apps', description: 'High-performance iOS and Android applications', href: '/services/mobile-development/native' },
        { name: 'Cross-Platform Apps', description: 'Cost-effective solutions with React Native & Flutter', href: '/services/mobile-development/cross-platform' },
        { name: 'Progressive Web Apps', description: 'App-like web experiences that work offline', href: '/services/mobile-development/pwa' },
      ]
    },
    {
      name: 'AI & Machine Learning',
      icon: 'fa-brain',
      services: [
        { name: 'Custom AI Models', description: 'Tailored machine learning solutions', href: '/services/ai-ml/custom-models' },
        { name: 'AI Automation', description: 'Intelligent automation workflows', href: '/services/ai-ml/automation' },
        { name: 'NLP & Chatbots', description: 'Advanced natural language processing', href: '/services/ai-ml/nlp-chatbots' },
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      icon: 'fa-cloud',
      services: [
        { name: 'Cloud Migration', description: 'Seamless migration to AWS, Azure, or GCP', href: '/services/cloud/migration' },
        { name: 'DevOps & CI/CD', description: 'Automated deployment pipelines', href: '/services/cloud/devops' },
        { name: 'Serverless Architecture', description: 'Build without managing servers', href: '/services/cloud/serverless' },
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services | PureLatency</title>
        <meta name="description" content="Explore our comprehensive digital services including web development, mobile apps, AI solutions, and cloud infrastructure." />
      </Head>
      
      <Navbar />
      
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-white to-[#fafafa]">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <span className="badge-custom">Our Expertise</span>
              <h1 className="text-5xl md:text-6xl mb-6">Services</h1>
              <p className="text-xl text-[#6e6e73]">
                End-to-end digital solutions tailored to your business needs. From concept to launch and beyond.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="space-y-20">
              {serviceCategories.map((category) => (
                <div key={category.name}>
                  <div className="flex items-center gap-4 mb-10">
                    <i className={`fas ${category.icon} text-3xl text-[#0066cc]`}></i>
                    <h2 className="text-3xl md:text-4xl">{category.name}</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map((service) => (
                      <Link 
                        key={service.name}
                        href={service.href}
                        className="group p-8 bg-[#fafafa] rounded-3xl hover:bg-[#f5f5f7] transition-all border border-transparent hover:border-[#e6e6e9] no-underline"
                      >
                        <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#0066cc] transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-[#6e6e73] mb-4">{service.description}</p>
                        <span className="text-[#0066cc] font-medium inline-flex items-center gap-2">
                          Learn more <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ServicesPage;