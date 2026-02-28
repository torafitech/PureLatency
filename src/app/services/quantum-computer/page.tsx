'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

export default function QuantumComputerPage() {
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

  // Define services for footer
  const footerServices = [
    { title: 'Applications', href: '/services/applications' },
    { title: 'Quantum Computer', href: '/services/quantum-computer' },
    { title: 'Data and AI', href: '/services/data-ai' },
    { title: 'Cloud and DevOps', href: '/services/cloud-devops' },
    { title: 'Infrastructure', href: '/services/infrastructure' }
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
              { name: 'Facebook', href: 'https://facebook.com/purelatency', color: '#1877F2' }
            ].map(social => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
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
          <Link href="/services" style={{ color: '#86868b', textDecoration: 'none' }}> Services</Link> / 
          <span style={{ color: '#1d1d1f' }}> Quantum Computer</span>
        </div>

        {/* Hero Section */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚛️</div>
            <h1 style={{ fontSize: '3rem', fontWeight: 300, color: '#1d1d1f', marginBottom: '1rem' }}>
              Quantum Computer
            </h1>
            <p style={{ color: '#86868b', fontSize: '1.2rem', lineHeight: '1.6' }}>
              Unlock unprecedented processing power with our quantum computing solutions. 
              From algorithm development to hardware access, we help you solve the world's 
              most complex problems — drug discovery, financial modeling, and beyond.
            </p>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #1a0b2e 0%, #2d1a4a 100%)',
            borderRadius: '24px',
            padding: '2rem',
            textAlign: 'center',
            border: '1px solid #6b4f9f',
            color: '#fff'
          }}>
            <span style={{ fontSize: '5rem', display: 'block', marginBottom: '1rem' }}>🌀</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 300, marginBottom: '0.5rem' }}>Qubit Advantage</h3>
            <p style={{ color: '#b8a9d4' }}>Superposition · Entanglement · Interference</p>
          </div>
        </div>

        {/* Stats Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          padding: '2rem',
          backgroundColor: '#f5f5f7',
          borderRadius: '16px',
          marginBottom: '4rem'
        }}>
          {stats.map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 300, color: '#5f2b9c' }}>{stat.number}</div>
              <div style={{ color: '#86868b', fontSize: '0.85rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 300, color: '#1d1d1f', marginBottom: '2rem' }}>
            Why Quantum Computing
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem'
          }}>
            {features.map(feature => (
              <div key={feature.title} style={{ 
                padding: '1.5rem',
                border: '1px solid #e6e6e9',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>{feature.icon}</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', color: '#1d1d1f' }}>{feature.title}</h3>
                <p style={{ color: '#86868b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{feature.desc}</p>
                <span style={{ fontSize: '0.8rem', color: '#5f2b9c', fontWeight: 500 }}>{feature.metric}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 300, color: '#1d1d1f', marginBottom: '2rem' }}>
            Quantum Technology Stack
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {technologies.map(category => (
              <div key={category.category} style={{
                padding: '1.5rem',
                background: '#fafafa',
                borderRadius: '12px',
                border: '1px solid #e6e6e9'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 500 }}>{category.category}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {category.items.map(item => (
                    <span key={item} style={{ 
                      color: '#86868b',
                      fontSize: '0.9rem',
                      padding: '0.2rem 0'
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 300, color: '#1d1d1f', marginBottom: '2rem' }}>
            Key Applications
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem'
          }}>
            {expertise.map(item => (
              <div key={item} style={{
                padding: '1rem',
                border: '1px solid #e6e6e9',
                borderRadius: '8px',
                textAlign: 'center',
                background: '#fafafa'
              }}>
                <span style={{ color: '#5f2b9c', fontSize: '1rem', marginRight: '0.3rem' }}>⚛️</span>
                <span style={{ color: '#1d1d1f', fontSize: '0.95rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 300, color: '#1d1d1f', marginBottom: '2rem' }}>
            Our Quantum Process
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {process.map(item => (
              <div key={item.step} style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '2rem', 
                  fontWeight: 300, 
                  color: '#5f2b9c',
                  marginBottom: '1rem'
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#86868b', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Gradient Contact Section */}
        <div style={{
          marginTop: '4rem',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div
            style={{
              width: '100%',
              maxWidth: '1200px',
              padding: '4rem 2rem',
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
            <h2 style={{ fontSize: '3rem', fontWeight: 400, marginBottom: '1rem' }}>
              Contact Us
            </h2>

            <p style={{ fontSize: '1.25rem', marginBottom: '2.2rem', opacity: 0.95 }}>
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
                backgroundColor: 'transparent'
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
              fontSize: '0.9rem',
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
                {footerServices.map(service => (
                  <li key={service.title} style={{ marginBottom: '0.5rem' }}>
                    <Link href={service.href} style={{ color: '#aaa', textDecoration: 'none' }}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: '#aaa', textDecoration: 'none' }}>About</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/careers" style={{ color: '#aaa', textDecoration: 'none' }}>Careers</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog" style={{ color: '#aaa', textDecoration: 'none' }}>Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Connect</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map(item => (
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