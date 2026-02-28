'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

export default function ApplicationsPage() {
  const capabilities = [
    {
      title: 'Web Applications',
      desc: 'Build scalable, high-performance web applications with modern frameworks and best practices.',
      icon: '🌐',
      color: '#7C3AED',
      metrics: ['< 1s load time', '100% responsive', 'SEO optimized']
    },
    {
      title: 'Mobile Applications',
      desc: 'Create native and cross-platform mobile experiences that delight users on every device.',
      icon: '📱',
      color: '#10B981',
      metrics: ['iOS & Android', 'Offline support', 'Push notifications']
    },
    {
      title: 'Enterprise Applications',
      desc: 'Develop robust, secure applications that power critical business operations at scale.',
      icon: '🏢',
      color: '#F59E0B',
      metrics: ['99.99% uptime', 'Role-based access', 'Audit logging']
    },
    {
      title: 'Real-time Applications',
      desc: 'Build interactive applications with live updates, messaging, and collaborative features.',
      icon: '⚡',
      color: '#EC4899',
      metrics: ['< 100ms latency', 'WebSocket ready', 'Live sync']
    }
  ];

  const solutions = [
    {
      industry: 'E-commerce',
      icon: '🛍️',
      challenge: 'High traffic spikes and cart abandonment during peak seasons',
      solution: 'Scalable e-commerce platform with personalized recommendations and one-click checkout',
      impact: '45% increase in conversion, 99.99% uptime during Black Friday',
      gradient: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)'
    },
    {
      industry: 'Healthcare',
      icon: '🏥',
      challenge: 'Secure patient portals and HIPAA-compliant data handling',
      solution: 'Patient portal with secure messaging, appointment scheduling, and medical records access',
      impact: '200,000+ active patients, 100% HIPAA compliant',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
    },
    {
      industry: 'FinTech',
      icon: '💰',
      challenge: 'Complex financial transactions requiring iron-clad security',
      solution: 'Mobile banking app with biometric authentication and real-time transaction monitoring',
      impact: '$500M+ transactions processed, zero security incidents',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
    },
    {
      industry: 'Logistics',
      icon: '🚚',
      challenge: 'Real-time tracking and route optimization for fleet management',
      solution: 'Driver app with live GPS tracking, route optimization, and delivery confirmation',
      impact: '30% faster deliveries, 25% fuel savings',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)'
    }
  ];

  const innovations = [
    {
      title: 'Progressive Web Apps',
      desc: 'App-like experiences that work offline and install on home screens without app stores.',
      icon: '📲',
      stat: '3x',
      statDesc: 'faster engagement'
    },
    {
      title: 'Micro-frontends',
      desc: 'Build scalable applications with independently deployable frontend modules.',
      icon: '🧩',
      stat: '10x',
      statDesc: 'development speed'
    },
    {
      title: 'Serverless Architecture',
      desc: 'Run application code without managing servers, scaling automatically.',
      icon: '⚡',
      stat: '0',
      statDesc: 'server management'
    },
    {
      title: 'AI-Powered Apps',
      desc: 'Integrate intelligent features like recommendations and chatbots.',
      icon: '🤖',
      stat: '40%',
      statDesc: 'user engagement lift'
    }
  ];

  const process = [
    {
      phase: 'Discovery',
      icon: '🔍',
      activities: ['Requirements gathering', 'User research', 'Technical feasibility', 'MVP definition'],
      duration: '2-3 weeks'
    },
    {
      phase: 'Design',
      icon: '🎨',
      activities: ['UX wireframing', 'UI design', 'Prototyping', 'User testing'],
      duration: '3-4 weeks'
    },
    {
      phase: 'Development',
      icon: '⚙️',
      activities: ['Agile sprints', 'API integration', 'Testing', 'Code reviews'],
      duration: '8-16 weeks'
    },
    {
      phase: 'Launch',
      icon: '🚀',
      activities: ['Deployment', 'App store submission', 'Performance monitoring', 'User feedback'],
      duration: '2-3 weeks'
    }
  ];

  const stats = [
    { value: '50+', label: 'Apps Delivered', icon: '📱' },
    { value: '10M+', label: 'Users Served', icon: '👥' },
    { value: '4.9', label: 'App Store Rating', icon: '⭐' },
    { value: '24/7', label: 'Support', icon: '🆘' }
  ];

  const technologies = [
    // Frontend Frameworks
    'React', 'Next.js', 'Vue.js', 'Angular', 'Svelte',
    // Mobile Frameworks
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android',
    // State Management
    'Redux', 'Zustand', 'MobX', 'Recoil', 'Context API',
    // Backend & API
    'Node.js', 'GraphQL', 'REST', 'WebSockets', 'tRPC',
    // Testing
    'Jest', 'Cypress', 'Detox', 'Playwright', 'Testing Library',
    // Deployment
    'Vercel', 'Netlify', 'App Store Connect', 'Google Play Console'
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
          <span style={{ color: '#1d1d1f' }}> Applications</span>
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
              📱 Where Ideas Become Reality
            </div>
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Build applications that<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #0066cc 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                users love to use
              </span>
            </h1>
            <p style={{ color: '#86868b', fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              We design and develop exceptional web and mobile applications that combine beautiful 
              user experiences with powerful functionality. From startups to enterprises, we build 
              apps that drive engagement and deliver results.
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
                Contact Us
              </Link>
              <Link
                href="/services"
                style={{
                  background: 'transparent',
                  color: '#1d1d1f',
                  padding: '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  border: '1px solid #e6e6e9'
                }}
              >
                View All Services →
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
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📱</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '1rem' }}>The Application Advantage</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '50+ apps delivered',
                  '10M+ users served',
                  '4.9 star average rating'
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

        {/* Core Capabilities */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Core Application Capabilities
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            We build applications that combine beautiful design with powerful functionality
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {capabilities.map(cap => (
              <div
                key={cap.title}
                style={{
                  padding: '2rem',
                  borderRadius: '20px',
                  background: 'white',
                  border: '1px solid #e6e6e9'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{cap.icon}</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                  {cap.title}
                </h3>
                <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                  {cap.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cap.metrics.map(metric => (
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
              </div>
            ))}
          </div>
        </section>

        {/* Industry Solutions */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Industry-Specific Applications
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Tailored applications that address the unique challenges of your industry
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem'
          }}>
            {solutions.map(sol => (
              <div
                key={sol.industry}
                style={{
                  padding: '2rem',
                  borderRadius: '20px',
                  background: sol.gradient,
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{sol.icon}</div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '1rem' }}>
                  {sol.industry}
                </h3>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.3rem' }}>Challenge:</div>
                  <p style={{ fontSize: '1rem', marginBottom: '1rem', opacity: 0.9 }}>{sol.challenge}</p>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.3rem' }}>Solution:</div>
                  <p style={{ fontSize: '1rem', marginBottom: '1rem', opacity: 0.9 }}>{sol.solution}</p>
                </div>
                <div style={{ 
                  background: 'rgba(255,255,255,0.2)',
                  padding: '1rem',
                  borderRadius: '12px'
                }}>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.3rem' }}>Impact:</div>
                  <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{sol.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Innovative Technologies */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Our Application Innovations
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Pushing the boundaries of what's possible with modern application development
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {innovations.map(innovation => (
              <div
                key={innovation.title}
                style={{
                  padding: '2rem',
                  borderRadius: '20px',
                  background: '#fafafa',
                  border: '1px solid #e6e6e9'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{innovation.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                  {innovation.title}
                </h3>
                <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {innovation.desc}
                </p>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 300, color: '#0066cc' }}>
                    {innovation.stat}
                  </div>
                  <div style={{ color: '#86868b', fontSize: '0.85rem' }}>{innovation.statDesc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Timeline */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Our Application Development Process
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {process.map((phase, index) => (
              <div key={phase.phase} style={{ position: 'relative' }}>
                {index < process.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '30px',
                    right: '-20px',
                    width: '40px',
                    height: '2px',
                    background: '#e6e6e9',
                    zIndex: 1
                  }} />
                )}
                <div style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '20px',
                  border: '1px solid #e6e6e9',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{phase.icon}</div>
                  <div style={{ 
                    fontSize: '1.2rem',
                    color: '#0066cc',
                    fontWeight: 500,
                    marginBottom: '0.5rem'
                  }}>
                    Phase {index + 1}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#1d1d1f' }}>
                    {phase.phase}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
                    {phase.activities.map(activity => (
                      <li key={activity} style={{ 
                        color: '#86868b', 
                        fontSize: '0.9rem',
                        marginBottom: '0.3rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}>
                        <span style={{ color: '#0066cc' }}>→</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <div style={{
                    background: '#f5f5f7',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    textAlign: 'center',
                    color: '#666',
                    fontSize: '0.9rem'
                  }}>
                    ⏱️ {phase.duration}
                  </div>
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
            Our Technology Ecosystem
          </h2>
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

        {/* Contact Section */}
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
          textAlign: 'center'
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
                Transforming businesses through intelligent technology. 
                We build applications that drive real results.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Web Apps', 'Mobile Apps', 'Enterprise Apps', 'Real-time Apps'].map(item => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <Link href="/services" style={{ color: '#aaa', textDecoration: 'none' }}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['About', 'Careers', 'Blog', 'Contact'].map(item => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <Link href={`/${item.toLowerCase()}`} style={{ color: '#aaa', textDecoration: 'none' }}>{item}</Link>
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