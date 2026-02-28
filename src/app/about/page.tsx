'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { useState } from 'react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('story');

  const stats = [
    { value: '2026', label: 'Founded', icon: '📅' },
    { value: '5', label: 'Founders', icon: '👥' },
    { value: '50+', label: 'Team Members', icon: '👨‍💻' },
    { value: '3', label: 'Global Offices', icon: '🌍' }
  ];

  const values = [
    {
      title: 'Quality First',
      desc: 'We never compromise on quality. Every line of code, every design decision matters.',
      icon: '✨',
      color: '#0066cc'
    },
    {
      title: 'Long-term Thinking',
      desc: 'We build for today and tomorrow. Short-term gains never outweigh long-term value.',
      icon: '🌱',
      color: '#10B981'
    },
    {
      title: 'Radical Transparency',
      desc: 'Open communication with clients and within our team. No surprises, no hidden agendas.',
      icon: '🔍',
      color: '#F59E0B'
    },
    {
      title: 'Continuous Learning',
      desc: 'Technology evolves, and so do we. Always learning, always improving.',
      icon: '📚',
      color: '#7C3AED'
    },
    {
      title: 'Human-Centered',
      desc: 'Technology serves people. We build for humans, with empathy and understanding.',
      icon: '👥',
      color: '#EC4899'
    },
    {
      title: 'Sustainable Pace',
      desc: 'Great work comes from rested minds. We maintain balance and avoid burnout.',
      icon: '⚖️',
      color: '#6366F1'
    }
  ];

  const timeline = [
    {
      year: '2026',
      title: 'Company Founded',
      desc: 'PureLatency was founded in San Francisco by a team of engineers and designers.',
      icon: '🚀',
      color: '#0066cc'
    },
    {
      year: '2026',
      title: 'First Product Launch',
      desc: 'Starling Post, our intelligent communication platform, launched to early access.',
      icon: '📱',
      color: '#10B981'
    },
    {
      year: '2026',
      title: 'First Enterprise Client',
      desc: 'Signed our first Fortune 500 client for digital transformation services.',
      icon: '🏢',
      color: '#F59E0B'
    },
    {
      year: '2027',
      title: 'Global Expansion',
      desc: 'Opening offices in Singapore and London to serve clients worldwide.',
      icon: '🌍',
      color: '#7C3AED'
    }
  ];

  const leadership = [
    {
      name: 'Alex Rivera',
      role: 'CEO & Co-Founder',
      bio: 'Former engineering leader with 15 years in enterprise software.',
      image: 'AR',
      color: '#0066cc'
    },
    {
      name: 'Jamie Chen',
      role: 'CTO & Co-Founder',
      bio: 'Cloud architecture expert, previously at major tech companies.',
      image: 'JC',
      color: '#10B981'
    },
    {
      name: 'Sam Taylor',
      role: 'Design Lead & Co-Founder',
      bio: 'Award-winning designer focused on human-centered design.',
      image: 'ST',
      color: '#F59E0B'
    },
    {
      name: 'Jordan Lee',
      role: 'Engineering Lead & Co-Founder',
      bio: 'Full-stack developer with passion for clean code and architecture.',
      image: 'JL',
      color: '#7C3AED'
    },
    {
      name: 'Casey Morgan',
      role: 'Strategy Lead & Co-Founder',
      bio: 'Business strategist helping companies transform digitally.',
      image: 'CM',
      color: '#EC4899'
    }
  ];

  const offices = [
    { city: 'San Francisco', country: 'USA', icon: '🌉', address: '548 Market St, San Francisco, CA 94104' },
    { city: 'Singapore', country: 'Singapore', icon: '🏝️', address: 'Marina Bay Financial Centre, Singapore' },
    { city: 'London', country: 'UK', icon: '🇬🇧', address: 'Tech City, London, UK' }
  ];

  const clients = [
    { name: 'TechVision', logo: 'TV', industry: 'SaaS' },
    { name: 'GlobalBank', logo: 'GB', industry: 'Finance' },
    { name: 'MediCore', logo: 'MC', industry: 'Healthcare' },
    { name: 'EduSmart', logo: 'ES', industry: 'Education' },
    { name: 'GreenEnergy', logo: 'GE', industry: 'Energy' },
    { name: 'SpaceX', logo: 'SX', industry: 'Aerospace' }
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
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                style={{
                  color: social.color,
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                {social.name}
              </a>
            ))}
          </div>
        </section>
        {/* Breadcrumb */}
        <div style={{ color: '#86868b', marginBottom: '2rem', fontSize: '0.9rem' }}>
          <Link href="/" style={{ color: '#86868b', textDecoration: 'none' }}>Home</Link> / 
          <span style={{ color: '#1d1d1f' }}> About</span>
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
              👋 Meet PureLatency
            </div>
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              We're on a mission to<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #0066cc 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                build exceptional software
              </span>
            </h1>
            <p style={{ color: '#86868b', fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              PureLatency is a digital engineering and technology services company founded in 2026.
              We help organizations modernize infrastructure, accelerate product development, 
              and deliver intelligent digital experiences that make a difference.
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
                Join Our Team
              </Link>
              <Link
                href="#story"
                style={{
                  background: 'transparent',
                  color: '#1d1d1f',
                  padding: '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  border: '1px solid #e6e6e9'
                }}
              >
                Read Our Story ↓
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
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '1rem' }}>By the Numbers</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Founded 2026 in San Francisco',
                  '5 passionate founders',
                  '50+ team members globally'
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

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          marginBottom: '3rem',
          borderBottom: '1px solid #e6e6e9',
          paddingBottom: '1rem'
        }}>
          {['story', 'values', 'team'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                fontWeight: activeTab === tab ? 600 : 400,
                color: activeTab === tab ? '#0066cc' : '#86868b',
                cursor: 'pointer',
                borderBottom: activeTab === tab ? '2px solid #0066cc' : 'none',
                textTransform: 'capitalize'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'story' && (
          <>
            {/* Mission & Vision */}
            <section style={{ 
              marginBottom: '6rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              <div
                style={{
                  padding: '2.5rem',
                  borderRadius: '20px',
                  background: '#fafafa',
                  border: '1px solid #e6e6e9'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1d1d1f' }}>
                  Our Mission
                </h2>
                <p style={{ color: '#86868b', fontSize: '1.1rem', lineHeight: '1.7' }}>
                  To build reliable and scalable digital systems that help businesses
                  move faster and innovate with confidence. We believe technology should 
                  solve real problems and create lasting value.
                </p>
              </div>
              <div
                style={{
                  padding: '2.5rem',
                  borderRadius: '20px',
                  background: '#fafafa',
                  border: '1px solid #e6e6e9'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👁️</div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1d1d1f' }}>
                  Our Vision
                </h2>
                <p style={{ color: '#86868b', fontSize: '1.1rem', lineHeight: '1.7' }}>
                  To become a global technology partner delivering modern engineering,
                  cloud platforms, and AI-driven innovation. We aspire to be the most 
                  trusted partner for companies building the future.
                </p>
              </div>
            </section>

            {/* Timeline */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '3rem',
                textAlign: 'center'
              }}>
                Our Journey
              </h2>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '2rem'
              }}>
                {timeline.map((item, index) => (
                  <div key={item.title} style={{ 
                    padding: '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9',
                    position: 'relative'
                  }}>
                    {index < timeline.length - 1 && (
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
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                    <div style={{ 
                      fontSize: '1.2rem',
                      color: item.color,
                      fontWeight: 500,
                      marginBottom: '0.5rem'
                    }}>
                      {item.year}
                    </div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'values' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Our Core Values
            </h2>
            <p style={{ 
              color: '#86868b', 
              fontSize: '1.2rem', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 3rem'
            }}>
              The principles that guide every decision we make
            </p>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem'
            }}>
              {values.map(value => (
                <div
                  key={value.title}
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{value.icon}</div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                    {value.title}
                  </h3>
                  <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'team' && (
          <>
            {/* Leadership */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                Meet Our Leadership
              </h2>
              <p style={{ 
                color: '#86868b', 
                fontSize: '1.2rem', 
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 3rem'
              }}>
                The passionate founders building PureLatency
              </p>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem'
              }}>
                {leadership.map(leader => (
                  <div
                    key={leader.name}
                    style={{
                      padding: '2rem',
                      borderRadius: '20px',
                      background: '#fafafa',
                      border: '1px solid #e6e6e9',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: `linear-gradient(135deg, ${leader.color} 0%, #7C3AED 100%)`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 600
                    }}>
                      {leader.image}
                    </div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem', color: '#1d1d1f' }}>
                      {leader.name}
                    </h3>
                    <p style={{ color: leader.color, fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                      {leader.role}
                    </p>
                    <p style={{ color: '#86868b', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      {leader.bio}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Global Offices */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Global Presence
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem'
              }}>
                {offices.map(office => (
                  <div
                    key={office.city}
                    style={{
                      padding: '2rem',
                      background: '#fafafa',
                      borderRadius: '20px',
                      border: '1px solid #e6e6e9',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{office.icon}</div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.2rem', color: '#1d1d1f' }}>
                      {office.city}
                    </h3>
                    <p style={{ color: '#86868b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                      {office.country}
                    </p>
                    <p style={{ color: '#86868b', fontSize: '0.85rem' }}>
                      {office.address}
                    </p>
                  </div>
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
                      margin: '0 auto 0.5rem',
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: 600
                    }}>
                      {client.logo}
                    </div>
                    <div style={{ fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{client.name}</div>
                    <div style={{ color: '#86868b', fontSize: '0.7rem' }}>{client.industry}</div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Contact Section - EXACT same background as image */}
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
                Building exceptional software that makes a difference.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: '#aaa', textDecoration: 'none' }}>About</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/careers" style={{ color: '#aaa', textDecoration: 'none' }}>Careers</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog" style={{ color: '#aaa', textDecoration: 'none' }}>Blog</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/contact" style={{ color: '#aaa', textDecoration: 'none' }}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/privacy" style={{ color: '#aaa', textDecoration: 'none' }}>Privacy</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/terms" style={{ color: '#aaa', textDecoration: 'none' }}>Terms</Link></li>
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