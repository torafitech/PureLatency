'use client';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

export default function Overview() {
  const coreServices = [
    {
      title: 'Applications',
      href: '/services/applications',
      desc: 'Web and mobile applications that combine beautiful design with powerful functionality.',
      icon: '📱',
      color: '#7C3AED',
      metrics: ['50+ apps', '10M+ users', '4.9 rating']
    },
    {
      title: 'Web Development',
      href: '/services/web-development',
      desc: 'Modern, performant web solutions built with cutting-edge technologies.',
      icon: '🌐',
      color: '#10B981',
      metrics: ['<1s load', '100% responsive', 'SEO optimized']
    },
    {
      title: 'Data and AI',
      href: '/services/data-ai',
      desc: 'Intelligent systems that learn, adapt, and provide actionable insights.',
      icon: '🤖',
      color: '#F59E0B',
      metrics: ['40% efficiency', '99.9% accuracy', '2.5x decisions']
    },
    {
      title: 'Cloud and DevOps',
      href: '/services/cloud-devops',
      desc: 'Automate infrastructure and streamline deployments for faster releases.',
      icon: '☁️',
      color: '#EC4899',
      metrics: ['10x deploys', '99.99% uptime', '40% savings']
    },
    {
      title: 'Infrastructure',
      href: '/services/infrastructure',
      desc: 'Secure, scalable infrastructure that serves as the foundation for success.',
      icon: '⚙️',
      color: '#6366F1',
      metrics: ['99.99% uptime', '<50ms latency', '100% compliant']
    }
  ];

  const stats = [
    { value: '50+', label: 'Projects Delivered', icon: '🚀' },
    { value: '100%', label: 'Client Satisfaction', icon: '⭐' },
    { value: '10+', label: 'Years Experience', icon: '📅' },
    { value: '24/7', label: 'Support Available', icon: '🆘' }
  ];

  const approach = [
    {
      phase: 'Discovery',
      icon: '🔍',
      desc: 'We dive deep into your business goals, user needs, and technical requirements.',
      color: '#0066cc'
    },
    {
      phase: 'Strategy',
      icon: '🎯',
      desc: 'We create a roadmap that aligns technology with your business objectives.',
      color: '#7C3AED'
    },
    {
      phase: 'Execution',
      icon: '⚙️',
      desc: 'We build with agility, quality, and transparency every step of the way.',
      color: '#10B981'
    },
    {
      phase: 'Evolution',
      icon: '📈',
      desc: 'We continuously optimize and scale your solutions for long-term success.',
      color: '#F59E0B'
    }
  ];

  const differentiators = [
    {
      title: 'Technical Excellence',
      desc: 'Our engineers master the latest technologies and best practices.',
      icon: '⚡',
      stat: '10+',
      statDesc: 'years average experience'
    },
    {
      title: 'Business First',
      desc: 'We focus on outcomes, not just output. Your success is our success.',
      icon: '🎯',
      stat: '100%',
      statDesc: 'client retention'
    },
    {
      title: 'Agile Delivery',
      desc: 'We deliver value continuously with transparent processes.',
      icon: '🔄',
      stat: '2 weeks',
      statDesc: 'sprint cycles'
    },
    {
      title: 'Long-term Partnership',
      desc: 'We build lasting relationships and support you beyond launch.',
      icon: '🤝',
      stat: '5+ years',
      statDesc: 'average engagement'
    }
  ];

  const technologies = [
    // Frontend
    'React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular',
    // Backend
    'Node.js', 'Python', 'Go', 'Java', '.NET',
    // Mobile
    'React Native', 'Flutter', 'Swift', 'Kotlin',
    // Cloud
    'AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker',
    // AI/ML
    'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain',
    // Database
    'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'
  ];

  return (
    <>
      <Navbar />

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '6rem 2rem 4rem' }}>
        {/* Social Media */}
        <section style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { name: 'LinkedIn', href: '#', color: '#0A66C2' },
              { name: 'Instagram', href: '#', color: '#E4405F' },
              { name: 'Twitter', href: '#', color: '#1DA1F2' },
              { name: 'GitHub', href: '#', color: '#111' }
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
              🚀 Comprehensive Digital Solutions
            </div>
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Transform your vision<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #0066cc 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                into digital reality
              </span>
            </h1>
            <p style={{ color: '#86868b', fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              We offer a comprehensive suite of digital services designed to help you build, 
              scale, and optimize your technology. From applications to infrastructure, 
              we deliver solutions that drive real business results.
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
                Start Your Project
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
                Explore Services ↓
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
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>⚡</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '1rem' }}>The PureLatency Advantage</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '50+ successful projects',
                  '100% client satisfaction',
                  '10+ years of expertise'
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
            Our Core Services
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Comprehensive digital solutions tailored to your unique business needs
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
                    border: '1px solid #e6e6e9',
                    transition: 'transform 0.2s, border-color 0.2s',
                    cursor: 'pointer',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = service.color;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e6e6e9';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
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

        {/* Our Approach */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Our Approach
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            A proven methodology that ensures successful project delivery
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {approach.map((phase, index) => (
              <div key={phase.phase} style={{ 
                textAlign: 'center',
                padding: '2rem',
                borderRadius: '20px',
                background: '#fafafa',
                border: '1px solid #e6e6e9',
                position: 'relative'
              }}>
                {index < approach.length - 1 && (
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
                <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            What Sets Us Apart
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Why clients choose PureLatency for their most important projects
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
                <div style={{ textAlign: 'center' }}>
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
            Our Technology Ecosystem
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            We leverage the best tools and frameworks to build exceptional solutions
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

        {/* Testimonials */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            What Our Clients Say
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem'
          }}>
            <div style={{
              padding: '2rem',
              background: '#fafafa',
              borderRadius: '20px',
              border: '1px solid #e6e6e9',
              position: 'relative'
            }}>
              <span style={{ fontSize: '4rem', color: '#0066cc', opacity: 0.2, position: 'absolute', top: '10px', left: '20px' }}>"</span>
              <p style={{ color: '#1d1d1f', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
                PureLatency transformed our digital presence with a beautiful, high-performance web application. Their team's expertise and collaborative approach made all the difference.
              </p>
              <div>
                <strong style={{ color: '#1d1d1f' }}>Sarah Chen</strong>
                <p style={{ color: '#86868b', fontSize: '0.9rem', margin: '0.2rem 0 0 0' }}>Product Lead, InnovateTech</p>
              </div>
            </div>
            <div style={{
              padding: '2rem',
              background: '#fafafa',
              borderRadius: '20px',
              border: '1px solid #e6e6e9',
              position: 'relative'
            }}>
              <span style={{ fontSize: '4rem', color: '#0066cc', opacity: 0.2, position: 'absolute', top: '10px', left: '20px' }}>"</span>
              <p style={{ color: '#1d1d1f', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
                The infrastructure PureLatency built for us is rock-solid. We've seen zero downtime and 40% cost savings since migrating to their cloud architecture.
              </p>
              <div>
                <strong style={{ color: '#1d1d1f' }}>Michael Rodriguez</strong>
                <p style={{ color: '#86868b', fontSize: '0.9rem', margin: '0.2rem 0 0 0' }}>CTO, FinScale</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          style={{
            textAlign: 'center',
            padding: '140px 20px',
            marginTop: '40px',
            borderRadius: '24px',
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
              fontSize: '3.5rem',
              fontWeight: 400,
              marginBottom: '20px',
            }}
          >
           Contact us
          </h2>

          <p
            style={{
              fontSize: '1.3rem',
              opacity: 0.9,
              marginBottom: '40px',
              maxWidth: '700px',
              marginInline: 'auto'
            }}
          >
           If you're ready to make extraordinary happen, get in touch today.
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
          >
            Contact us
          </Link>
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
                Transforming businesses through intelligent technology. 
                We build solutions that drive real results.
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