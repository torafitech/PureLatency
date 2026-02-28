'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const coreServices = [
    {
      title: 'Applications',
      href: '/services/applications',
      desc: 'Custom web and mobile apps engineered for performance, scalability, and exceptional user experiences.',
      icon: '📱',
      color: '#7C3AED',
      metrics: ['Fast time-to-market', 'Intuitive UX', 'Scalable architecture']
    },
    {
      title: 'Web Development',
      href: '/services/web-development',
      desc: 'Modern, lightning-fast websites and web applications built with the latest frameworks and best practices.',
      icon: '🌐',
      color: '#10B981',
      metrics: ['Blazing fast', 'SEO optimized', 'Mobile-first']
    },
    {
      title: 'Data and AI',
      href: '/services/data-ai',
      desc: 'Intelligent systems that transform raw data into actionable insights and competitive advantage.',
      icon: '🤖',
      color: '#F59E0B',
      metrics: ['Predictive analytics', 'Automated decisions', 'Real-time insights']
    },
    {
      title: 'Cloud and DevOps',
      href: '/services/cloud-devops',
      desc: 'Streamlined infrastructure and automated pipelines that accelerate delivery and reduce costs.',
      icon: '☁️',
      color: '#EC4899',
      metrics: ['Faster releases', 'Reduced downtime', 'Cost efficient']
    },
    {
      title: 'Infrastructure',
      href: '/services/infrastructure',
      desc: 'Rock-solid, secure infrastructure designed to grow with your business and handle any load.',
      icon: '⚙️',
      color: '#6366F1',
      metrics: ['High availability', 'Enterprise security', 'Auto-scaling']
    }
  ];

  const stats = [
    { value: '120+', label: 'Successful Projects', icon: '🏆' },
    { value: '98%', label: 'Client Retention Rate', icon: '🤝' },
    { value: '8+', label: 'Years of Innovation', icon: '⏳' },
    { value: '24/7', label: 'Expert Support', icon: '🌙' }
  ];

  const methodology = [
    {
      phase: 'Discover',
      icon: '🔎',
      desc: 'We immerse ourselves in your business to understand goals, users, and technical constraints.',
      color: '#0066cc',
      details: ['User research', 'Market analysis', 'Technical audit']
    },
    {
      phase: 'Design',
      icon: '✏️',
      desc: 'We craft elegant solutions that balance user needs with business objectives.',
      color: '#7C3AED',
      details: ['UX strategy', 'Visual design', 'Prototyping']
    },
    {
      phase: 'Build',
      icon: '🛠️',
      desc: 'We develop with agility, transparency, and rigorous quality standards.',
      color: '#10B981',
      details: ['Agile sprints', 'Continuous testing', 'Regular demos']
    },
    {
      phase: 'Scale',
      icon: '📊',
      desc: 'We optimize and grow your solution to meet evolving business demands.',
      color: '#F59E0B',
      details: ['Performance tuning', 'Feature expansion', 'Growth strategy']
    }
  ];

  const differentiators = [
    {
      title: 'Deep Technical Expertise',
      desc: 'Our engineers master the full technology stack, from frontend to infrastructure.',
      icon: '⚙️',
      stat: '10+',
      statDesc: 'specialized engineers'
    },
    {
      title: 'Business-Driven Approach',
      desc: 'We measure success by business outcomes, not just technical deliverables.',
      icon: '📈',
      stat: '2x',
      statDesc: 'faster ROI'
    },
    {
      title: 'Transparent Collaboration',
      desc: "You're part of the team with open communication and regular progress updates.",
      icon: '🤝',
      stat: '100%',
      statDesc: 'transparency'
    },
    {
      title: 'Future-Ready Solutions',
      desc: 'We build with tomorrow in mind, ensuring your technology evolves with you.',
      icon: '🔮',
      stat: '5+ years',
      statDesc: 'forward compatibility'
    }
  ];

  const technologies = [
    // Frontend
    'React', 'Next.js 14', 'TypeScript', 'Vue 3', 'Svelte',
    // Backend
    'Node.js', 'Python FastAPI', 'Go', 'GraphQL', 'tRPC',
    // Mobile
    'React Native', 'Flutter 3', 'SwiftUI', 'Jetpack Compose',
    // Cloud
    'AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform',
    // AI/ML
    'TensorFlow', 'PyTorch', 'LangChain', 'OpenAI', 'Hugging Face',
    // Database
    'PostgreSQL', 'MongoDB', 'Redis', 'ClickHouse', 'Snowflake'
  ];

  const clients = [
    { name: 'TechVision', logo: 'TV', industry: 'SaaS' },
    { name: 'GreenLeaf', logo: 'GL', industry: 'E-commerce' },
    { name: 'MediCore', logo: 'MC', industry: 'Healthcare' },
    { name: 'FinTrust', logo: 'FT', industry: 'FinTech' },
    { name: 'EduSmart', logo: 'ES', industry: 'EdTech' },
    { name: 'LogiSync', logo: 'LS', industry: 'Logistics' }
  ];

  return (
    <>
      <Navbar />

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '6rem 2rem 4rem' }}>
        {/* Social Media */}
        <section style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { name: 'Instagram', href: 'https://instagram.com/purelatency', color: '#E4405F' },
              { name: 'Twitter', href: 'https://twitter.com/purelatency', color: '#1DA1F2' },
              { name: 'Facebook', href: 'https://facebook.com/purelatency', color: '#0A66C2' }
             
            ].map(social => (
              <a
                key={social.name}
                href={social.href}
                style={{ color: social.color, textDecoration: 'none', fontWeight: 500 }}
              >
                {social.name}
              </a>
            ))}
          </div>
        </section>

        {/* Breadcrumb */}
        <div style={{ color: '#86868b', marginBottom: '2rem', fontSize: '0.9rem' }}>
          <Link href="/" style={{ color: '#86868b', textDecoration: 'none' }}>Home</Link> / 
          <span style={{ color: '#1d1d1f' }}> Services</span>
        </div>

        {/* Hero Section */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '6rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ 
              display: 'inline-block',
              background: 'rgba(0,102,204,0.1)',
              color: '#0066cc',
              padding: '0.5rem 1.5rem',
              borderRadius: '30px',
              fontSize: '0.9rem',
              marginBottom: '1.5rem'
            }}>
              ✨ Engineering Excellence, Delivered
            </div>
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Technology solutions<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #0066cc 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                that drive real growth
              </span>
            </h1>
            <p style={{ color: '#86868b', fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              We partner with forward-thinking companies to build technology that solves complex problems, 
              delights users, and creates lasting business value. From concept to scale, we're with you 
              every step of the way.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link
                href="/contact"
                style={{
                  background: '#0066cc',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                Discuss Your Project
              </Link>
              <Link
                href="#services"
                style={{
                  background: 'transparent',
                  color: '#1d1d1f',
                  padding: '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  border: '1px solid #e6e6e9'
                }}
              >
                Explore Offerings ↓
              </Link>
            </div>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #f5f5f7 0%, #e6e6e9 100%)',
            borderRadius: '30px',
            padding: '3rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'rgba(0,102,204,0.1)',
              borderRadius: '50%'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-50px',
              left: '-50px',
              width: '200px',
              height: '200px',
              background: 'rgba(124,58,237,0.1)',
              borderRadius: '50%'
            }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🚀</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '1rem' }}>Why Companies Choose Us</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '120+ successful projects delivered',
                  '98% client retention rate',
                  '8+ years of innovation'
                ].map((item, i) => (
                  <li key={i} style={{ 
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#86868b'
                  }}>
                    <span style={{ color: '#0066cc' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          marginBottom: '6rem',
          padding: '3rem',
          background: 'linear-gradient(135deg, #1d1d1f 0%, #2d2d2f 100%)',
          borderRadius: '20px',
          color: 'white'
        }}>
          {stats.map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 300, color: '#0066cc', marginBottom: '0.3rem' }}>
                {stat.value}
              </div>
              <div style={{ color: '#aaa', fontSize: '0.9rem' }}>{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Core Services */}
        <section id="services" style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            What We Offer
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Comprehensive technology services tailored to your unique challenges
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {coreServices.map(service => (
              <Link
                key={service.title}
                href={service.href}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    background: 'white',
                    border: hoveredService === service.title ? `2px solid ${service.color}` : '1px solid #e6e6e9',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    height: '100%',
                    transform: hoveredService === service.title ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: hoveredService === service.title ? '0 10px 25px rgba(0,0,0,0.1)' : 'none'
                  }}
                  onMouseEnter={() => setHoveredService(service.title)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                    {service.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    {service.metrics.map(metric => (
                      <span
                        key={metric}
                        style={{
                          background: '#f5f5f7',
                          color: '#666',
                          padding: '0.2rem 0.8rem',
                          borderRadius: '20px',
                          fontSize: '0.8rem'
                        }}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                  <div style={{ color: service.color, fontWeight: 500, fontSize: '0.95rem' }}>
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Our Methodology */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Our Methodology
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            A proven framework for delivering exceptional results
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {methodology.map((phase, index) => (
              <div key={phase.phase} style={{ 
                padding: '2rem',
                borderRadius: '20px',
                background: '#fafafa',
                border: '1px solid #e6e6e9',
                position: 'relative'
              }}>
                {index < methodology.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-20px',
                    width: '40px',
                    height: '2px',
                    background: '#e6e6e9',
                    transform: 'translateY(-50%)',
                    zIndex: 1
                  }} />
                )}
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{phase.icon}</div>
                <div style={{ 
                  fontSize: '1.2rem',
                  color: phase.color,
                  fontWeight: 500,
                  marginBottom: '0.5rem'
                }}>
                  Phase {index + 1}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#1d1d1f' }}>
                  {phase.phase}
                </h3>
                <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                  {phase.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {phase.details.map(detail => (
                    <span
                      key={detail}
                      style={{
                        background: 'white',
                        color: '#666',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '16px',
                        fontSize: '0.75rem',
                        border: '1px solid #e6e6e9'
                      }}
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Why Our Clients Trust Us
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            What makes PureLatency the partner of choice for innovative companies
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {differentiators.map(diff => (
              <div
                key={diff.title}
                style={{
                  padding: '2rem',
                  borderRadius: '20px',
                  background: '#fafafa',
                  border: '1px solid #e6e6e9',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{diff.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                  {diff.title}
                </h3>
                <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {diff.desc}
                </p>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 300, color: '#0066cc' }}>
                    {diff.stat}
                  </div>
                  <div style={{ color: '#86868b', fontSize: '0.85rem' }}>{diff.statDesc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Modern Tech Stack
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            We leverage cutting-edge technologies to build future-proof solutions
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            padding: '2rem',
            background: '#fafafa',
            borderRadius: '20px'
          }}>
            {technologies.map(tech => (
              <span
                key={tech}
                style={{
                  background: 'white',
                  color: '#1d1d1f',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '30px',
                  fontSize: '0.9rem',
                  border: '1px solid #e6e6e9',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Trusted By */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Trusted By Industry Leaders
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '2rem'
          }}>
            {clients.map(client => (
              <div
                key={client.name}
                style={{
                  padding: '1.5rem',
                  background: '#fafafa',
                  borderRadius: '12px',
                  textAlign: 'center',
                  border: '1px solid #e6e6e9'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #0066cc 0%, #7C3AED 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 600
                }}>
                  {client.logo}
                </div>
                <div style={{ fontWeight: 500, marginBottom: '0.2rem' }}>{client.name}</div>
                <div style={{ color: '#86868b', fontSize: '0.8rem' }}>{client.industry}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
  style={{
    marginTop: '4rem',
    display: 'flex',
    justifyContent: 'center'
  }}
>
  <div
    style={{
      width: '100%',
      maxWidth: '1200px',
      padding: '4rem 2rem',   // reduced height
      borderRadius: '28px',
      textAlign: 'center',
       background: `
              radial-gradient(circle at 20% 30%, #7a3cff 0%, transparent 40%),
              radial-gradient(circle at 80% 10%, #ff2e88 0%, transparent 40%),
              linear-gradient(180deg, #0b1c48 0%, #2a1e5c 100%)
            `,
            color: '#ffffff',
    }}
  >
    <h2
      style={{
        fontSize: '3rem',
        fontWeight: 400,
        marginBottom: '1rem'
      }}
    >
      Contact Us
    </h2>

    <p
      style={{
        fontSize: '1.25rem',
        marginBottom: '2.2rem',
        opacity: 0.95
      }}
    >
      Be always in front line, get in touch today.
    </p>

    <Link
                 href="/contact"
            style={{
              display: 'inline-block',
              padding: '18px 60px',
              borderRadius: '70px 70px 0 70px',
              border: '3px solid #ffffff',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '1.1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#ffffff';
        e.currentTarget.style.color = '#111';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = '#ffffff';
      }}
    >
      Contact Us
    </Link>
  </div>
</section>

        {/* Back to Home */}
        <div style={{ 
          borderTop: '1px solid #e6e6e9',
          paddingTop: '2rem',
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <Link 
            href="/" 
            style={{ 
              color: '#86868b', 
              textDecoration: 'none', 
              fontSize: '0.9rem',
              display: 'inline-block'
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: '#111',
          color: '#aaa',
          padding: '4rem 2rem',
          marginTop: '4rem'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '4rem',
            marginBottom: '4rem'
          }}>
            <div>
              <div style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>PureLatency</div>
              <p style={{ color: '#666', lineHeight: '1.7' }}>
                Engineering exceptional digital products that drive real business growth.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {coreServices.map(service => (
                  <li key={service.title} style={{ marginBottom: '0.5rem' }}>
                    <Link href={service.href} style={{ color: '#aaa', textDecoration: 'none' }}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Connect</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['LinkedIn', 'Twitter', 'Instagram'].map(item => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ 
            borderTop: '1px solid #333', 
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#666'
          }}>
            © 2026 PureLatency. All rights reserved. Crafted with precision in San Francisco.
          </div>
        </div>
      </footer>
    </>
  );
}