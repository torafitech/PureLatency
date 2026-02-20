import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import { ProcessStep } from '@/types';

const ProcessPage: NextPage = () => {
  const steps: ProcessStep[] = [
    {
      step: 1,
      duration: '1-2 Days',
      title: 'Discovery & Consultation',
      description: 'We start by understanding your business goals, challenges, and technical requirements through detailed consultations.',
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
      title: 'Design & Prototyping',
      description: 'Our designers create intuitive, beautiful interfaces that align with your brand and user expectations.',
      features: [
        'User research and personas',
        'Wireframing and mockups',
        'Interactive prototypes',
        'User testing and feedback'
      ]
    },
    {
      step: 4,
      duration: '4-20 Weeks',
      title: 'Development',
      description: 'Agile development with continuous integration, regular demos, and thorough testing at every stage.',
      features: [
        'Iterative development',
        'Weekly sprint reviews',
        'Code reviews and quality assurance',
        'Performance optimization'
      ]
    },
    {
      step: 5,
      duration: '1-3 Days',
      title: 'Testing & QA',
      description: 'Comprehensive testing ensures your product is reliable, secure, and ready for launch.',
      features: [
        'Automated and manual testing',
        'Security audits',
        'Performance testing',
        'Cross-browser/device testing'
      ]
    },
    {
      step: 6,
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
      step: 7,
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

  const methodologies = [
    {
      title: 'Agile Development',
      description: 'We follow Agile methodology with 2-week sprints, ensuring transparency and adaptability throughout the project.',
      icon: 'fa-arrows-rotate'
    },
    {
      title: 'Continuous Integration',
      description: 'Automated testing and deployment pipelines ensure code quality and rapid delivery.',
      icon: 'fa-code-branch'
    },
    {
      title: 'Client Collaboration',
      description: 'Regular demos and feedback sessions keep you involved and informed at every stage.',
      icon: 'fa-users'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing at every stage ensures reliable, secure, and scalable solutions.',
      icon: 'fa-check-circle'
    }
  ];

  return (
    <>
      <Head>
        <title>Our Process | PureLatency</title>
        <meta name="description" content="Discover our proven methodology for successful project delivery, from discovery to launch and beyond." />
      </Head>
      
      <Navbar />
      
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-white to-[#fafafa]">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <span className="badge-custom">How We Work</span>
              <h1 className="text-5xl md:text-6xl mb-6">Our Process</h1>
              <p className="text-xl text-[#6e6e73]">
                A proven methodology that ensures successful project delivery, from initial concept to ongoing support.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.step} className="relative pb-12 last:pb-0">
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-[#e6e6e9]"></div>
                  )}
                  <div className="flex gap-8">
                    <div className="relative">
                      <div className="w-16 h-16 bg-[#0066cc] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-sm font-semibold text-[#0066cc]">{step.duration}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl mb-4">{step.title}</h3>
                      <p className="text-lg text-[#6e6e73] mb-6">{step.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2.5 text-[#6e6e73]">
                            <i className="fas fa-circle-check text-[#0066cc] text-sm"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 bg-[#fafafa]">
          <Container>
            <h2 className="text-4xl text-center mb-12">Our Methodology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodologies.map((method) => (
                <div key={method.title} className="bg-white p-8 rounded-3xl text-center">
                  <div className="w-16 h-16 bg-[#0066cc]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i className={`fas ${method.icon} text-2xl text-[#0066cc]`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                  <p className="text-[#6e6e73]">{method.description}</p>
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

export default ProcessPage;