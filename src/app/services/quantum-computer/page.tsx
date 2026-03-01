'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function QuantumComputerPage() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const technologies = [
    {
      category: 'Hardware',
      icon: '🔬',
      items: ['Superconducting', 'Trapped Ion', 'Photonic', 'Neutral Atoms', 'Spin Qubits', 'Topological', 'Annealing', 'Simulators']
    },
    {
      category: 'Software',
      icon: '💻',
      items: ['Qiskit', 'Cirq', 'PennyLane', 'Braket SDK', 'Forest (pyQuil)', 'Strawberry Fields', 'Q#', 'Ocean SDK']
    },
    {
      category: 'Algorithms',
      icon: '🧮',
      items: ['Shor’s', 'Grover’s', 'VQE', 'QAOA', 'HHL', 'Quantum ML', 'Simulation', 'Optimization']
    },
    {
      category: 'Infrastructure',
      icon: '☁️',
      items: ['Cloud Access', 'Hybrid Classical', 'QPU Integration', 'Real-time Control', 'Error Mitigation', 'Calibration', 'Cooling', 'Control Electronics']
    }
  ];

  const features = [
    {
      title: 'Exponential Speed',
      desc: 'Solve complex problems in minutes, not millennia',
      icon: '⚡',
      metric: '100Mx faster'
    },
    {
      title: 'Quantum Volume',
      desc: 'High-fidelity qubits with low error rates',
      icon: '📊',
      metric: 'QV 512+'
    },
    {
      title: 'Entanglement',
      desc: 'Harness quantum correlation for power',
      icon: '🔗',
      metric: 'Full connectivity'
    },
    {
      title: 'Coherence Time',
      desc: 'Extended stability for deep circuits',
      icon: '⏱️',
      metric: '>100 µs'
    }
  ];

  const stats = [
    { number: '20+', label: 'Quantum Processors' },
    { number: '100%', label: 'Secure & Private' },
    { number: '24/7', label: 'Quantum Expert Support' },
    { number: '5+', label: 'Years in Quantum' }
  ];

  const process = [
    { step: '01', title: 'Discovery', desc: 'Identify quantum-advantage problems' },
    { step: '02', title: 'Algorithm Design', desc: 'Build and test quantum circuits' },
    { step: '03', title: 'Execution', desc: 'Run on real quantum hardware' },
    { step: '04', title: 'Analysis', desc: 'Interpret results and refine' }
  ];

  const expertise = [
    'Drug Discovery',
    'Financial Modeling',
    'Logistics Optimization',
    'Cryptography',
    'Material Science',
    'Quantum Machine Learning',
    'Climate Simulation',
    'Supply Chain'
  ];

  // Social media icons with image URLs
  const socialMedia = [
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/purelatency',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg',
      color: '#E4405F'
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/purelatency',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg',
      color: '#1877F2'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/purelatency',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg',
      color: '#0A66C2'
    }
  ];

  // Define services for footer
  const footerServices = [
    { title: 'Applications', href: '/services/applications' },
    { title: 'Quantum Computer', href: '/services/quantum-computer' },
    { title: 'Data and AI', href: '/services/data-ai' },
    { title: 'Cloud and DevOps', href: '/services/cloud-devops' },
    { title: 'Infrastructure', href: '/services/infrastructure' },
    { title: 'Fiber Optics', href: '/services/fiber-optics' }
  ];

  // Responsive styles
  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: isMobile ? '5rem 1rem 2rem' : '6rem 2rem 4rem',
  };

  const heroGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '2rem' : '4rem',
    marginBottom: isMobile ? '3rem' : '4rem',
    alignItems: 'center',
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '1rem' : '2rem',
    padding: isMobile ? '1.5rem' : '2rem',
    backgroundColor: '#f5f5f7',
    borderRadius: '16px',
    marginBottom: isMobile ? '3rem' : '4rem',
  };

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '1rem' : '1.5rem',
    marginBottom: isMobile ? '3rem' : '4rem',
  };

  const technologiesGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
    gap: isMobile ? '1.5rem' : '2rem',
    marginBottom: isMobile ? '3rem' : '4rem',
  };

  const expertiseGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: '1rem',
    marginBottom: isMobile ? '3rem' : '4rem',
  };

  const processGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '1rem' : '2rem',
    marginBottom: isMobile ? '3rem' : '4rem',
  };

  const footerGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr',
    gap: isMobile ? '2rem' : '4rem',
    marginBottom: '4rem',
    textAlign: (isMobile ? 'center' : 'left') as 'center' | 'left',
  };

  return (
    <>
      <Navbar />

      <main style={containerStyle}>
        {/* Social Media - With Icons */}
        <section style={{ 
          display: 'flex', 
          justifyContent: isMobile ? 'center' : 'flex-end', 
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '20px' : '24px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <img 
                  src={social.icon} 
                  alt={social.name}
                  style={{ 
                    width: isMobile ? '24px' : '28px', 
                    height: isMobile ? '24px' : '28px',
                  }}
                />
                {!isMobile && (
                  <span style={{ 
                    color: social.color, 
                    fontWeight: 500,
                    fontSize: '0.9rem'
                  }}>
                    {social.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </section>

        {/* Breadcrumb */}
        <div style={{ 
          color: '#86868b', 
          marginBottom: '2rem', 
          fontSize: isMobile ? '0.85rem' : '0.9rem',
          textAlign: (isMobile ? 'center' : 'left') as 'center' | 'left',
        }}>
          <Link href="/" style={{ color: '#86868b', textDecoration: 'none' }}>Home</Link> / 
          <Link href="/services" style={{ color: '#86868b', textDecoration: 'none' }}> Services</Link> / 
          <span style={{ color: '#1d1d1f' }}> Quantum Computer</span>
        </div>

        {/* Hero Section */}
        <div style={heroGridStyle}>
          <div>
            <div style={{ fontSize: isMobile ? '2.5rem' : '3rem', marginBottom: '1rem', textAlign: isMobile ? 'center' : 'left' }}>⚛️</div>
            <h1 style={{ 
              fontSize: isMobile ? '2.5rem' : '3rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1rem',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              Quantum Computer
            </h1>
            <p style={{ 
              color: '#86868b', 
              fontSize: isMobile ? '1rem' : '1.2rem', 
              lineHeight: '1.6',
              textAlign: isMobile ? 'center' : 'left',
              padding: isMobile ? '0 0.5rem' : '0'
            }}>
              Unlock unprecedented processing power with our quantum computing solutions. 
              From algorithm development to hardware access, we help you solve the world's 
              most complex problems — drug discovery, financial modeling, and beyond.
            </p>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #1a0b2e 0%, #2d1a4a 100%)',
            borderRadius: '24px',
            padding: isMobile ? '1.5rem' : '2rem',
            textAlign: 'center',
            border: '1px solid #6b4f9f',
            color: '#fff',
            marginTop: isMobile ? '1rem' : '0'
          }}>
            <span style={{ fontSize: isMobile ? '4rem' : '5rem', display: 'block', marginBottom: '1rem' }}>🌀</span>
            <h3 style={{ fontSize: isMobile ? '1.3rem' : '1.5rem', fontWeight: 300, marginBottom: '0.5rem' }}>Qubit Advantage</h3>
            <p style={{ color: '#b8a9d4', fontSize: isMobile ? '0.9rem' : '1rem' }}>Superposition · Entanglement · Interference</p>
          </div>
        </div>

        {/* Stats Section */}
        <div style={statsGridStyle}>
          {stats.map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 300, color: '#5f2b9c' }}>{stat.number}</div>
              <div style={{ color: '#86868b', fontSize: isMobile ? '0.75rem' : '0.85rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div style={{ marginBottom: isMobile ? '3rem' : '4rem' }}>
          <h2 style={{ 
            fontSize: isMobile ? '1.8rem' : '2rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Why Quantum Computing
          </h2>
          <div style={featuresGridStyle}>
            {features.map(feature => (
              <div key={feature.title} style={{ 
                padding: isMobile ? '1rem' : '1.5rem',
                border: '1px solid #e6e6e9',
                borderRadius: '12px',
                textAlign: 'center',
                height: '100%'
              }}>
                <span style={{ fontSize: isMobile ? '1.8rem' : '2rem', display: 'block', marginBottom: '0.8rem' }}>{feature.icon}</span>
                <h3 style={{ fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: '0.3rem', color: '#1d1d1f' }}>{feature.title}</h3>
                <p style={{ color: '#86868b', fontSize: isMobile ? '0.8rem' : '0.9rem', marginBottom: '0.5rem' }}>{feature.desc}</p>
                <span style={{ fontSize: isMobile ? '0.7rem' : '0.8rem', color: '#5f2b9c', fontWeight: 500 }}>{feature.metric}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div style={{ marginBottom: isMobile ? '3rem' : '4rem' }}>
          <h2 style={{ 
            fontSize: isMobile ? '1.8rem' : '2rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Quantum Technology Stack
          </h2>
          <div style={technologiesGridStyle}>
            {technologies.map(category => (
              <div key={category.category} style={{
                padding: isMobile ? '1.2rem' : '1.5rem',
                background: '#fafafa',
                borderRadius: '12px',
                border: '1px solid #e6e6e9'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: isMobile ? '1.3rem' : '1.5rem' }}>{category.icon}</span>
                  <h3 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 500 }}>{category.category}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {category.items.slice(0, isMobile ? 4 : 8).map(item => (
                    <span key={item} style={{ 
                      color: '#86868b',
                      fontSize: isMobile ? '0.8rem' : '0.9rem',
                      padding: '0.1rem 0'
                    }}>
                      {item}
                    </span>
                  ))}
                  {isMobile && category.items.length > 4 && (
                    <span style={{ color: '#5f2b9c', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                      +{category.items.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div style={{ marginBottom: isMobile ? '3rem' : '4rem' }}>
          <h2 style={{ 
            fontSize: isMobile ? '1.8rem' : '2rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Key Applications
          </h2>
          <div style={expertiseGridStyle}>
            {expertise.map(item => (
              <div key={item} style={{
                padding: '0.8rem',
                border: '1px solid #e6e6e9',
                borderRadius: '8px',
                textAlign: 'center',
                background: '#fafafa'
              }}>
                <span style={{ color: '#5f2b9c', fontSize: '0.9rem', marginRight: '0.3rem' }}>⚛️</span>
                <span style={{ color: '#1d1d1f', fontSize: isMobile ? '0.8rem' : '0.95rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div style={{ marginBottom: isMobile ? '3rem' : '4rem' }}>
          <h2 style={{ 
            fontSize: isMobile ? '1.8rem' : '2rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Our Quantum Process
          </h2>
          <div style={processGridStyle}>
            {process.map(item => (
              <div key={item.step} style={{ 
                textAlign: 'center',
                padding: isMobile ? '1rem' : '0'
              }}>
                <div style={{ 
                  fontSize: isMobile ? '1.5rem' : '2rem', 
                  fontWeight: 300, 
                  color: '#5f2b9c',
                  marginBottom: '0.5rem'
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: isMobile ? '1rem' : '1.2rem', marginBottom: '0.3rem' }}>{item.title}</h3>
                <p style={{ color: '#86868b', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Gradient Contact Section */}
        <div style={{
          marginTop: isMobile ? '2rem' : '4rem',
          display: 'flex',
          justifyContent: 'center',
          padding: isMobile ? '0 1rem' : '0'
        }}>
          <div
            style={{
              width: '100%',
              maxWidth: '1200px',
              padding: isMobile ? '3rem 1.5rem' : '4rem 2rem',
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
            <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 400, marginBottom: '1rem' }}>
              Contact Us
            </h2>

            <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', marginBottom: '2rem', opacity: 0.95 }}>
              Be always in front line, get in touch today.
            </p>

            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                padding: isMobile ? '14px 40px' : '18px 60px',
                borderRadius: '70px 70px 0 70px',
                border: '3px solid #ffffff',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: isMobile ? '1rem' : '1.1rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backgroundColor: 'transparent',
                width: isMobile ? '100%' : 'auto',
                maxWidth: isMobile ? '300px' : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#111';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Back to Services */}
        <div style={{ 
          borderTop: '1px solid #e6e6e9',
          paddingTop: '2rem',
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <Link 
            href="/services" 
            style={{ 
              color: '#86868b', 
              textDecoration: 'none', 
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              display: 'inline-block'
            }}
          >
            ← Back to Services
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: '#111',
          color: '#aaa',
          padding: isMobile ? '3rem 1rem' : '4rem 2rem',
          marginTop: '4rem'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={footerGridStyle}>
            <div>
              <div style={{ fontSize: isMobile ? '1.3rem' : '1.5rem', color: '#fff', marginBottom: '1rem' }}>PureLatency</div>
              <p style={{ color: '#666', lineHeight: '1.7', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                Engineering exceptional digital products that drive real business growth.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: isMobile ? '1.1rem' : '1.2rem' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {footerServices.slice(0, isMobile ? 4 : 6).map(service => (
                  <li key={service.title} style={{ marginBottom: '0.5rem' }}>
                    <Link href={service.href} style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: isMobile ? '1.1rem' : '1.2rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/about" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>About</Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/careers" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>Careers</Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/blog" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>Blog</Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/contact" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: isMobile ? '1.1rem' : '1.2rem' }}>Connect</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {socialMedia.map(social => (
                  <li key={social.name} style={{ marginBottom: '0.5rem' }}>
                    <a 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: '#aaa', 
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        justifyContent: isMobile ? 'center' : 'flex-start',
                      }}
                    >
                      <img 
                        src={social.icon} 
                        alt={social.name}
                        style={{ width: '20px', height: '20px' }}
                      />
                      <span style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ 
            borderTop: '1px solid #333', 
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#666',
            fontSize: isMobile ? '0.8rem' : '0.9rem'
          }}>
            © 2026 PureLatency. All rights reserved. Crafted with precision in San Francisco.
          </div>
        </div>
      </footer>
    </>
  );
}