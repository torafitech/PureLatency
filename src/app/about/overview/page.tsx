'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { useState, useEffect } from 'react';

export default function OverviewPage() {
  const [activeTab, setActiveTab] = useState('essence');
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

  const stats = [
    { value: '7', label: 'Time Zones Covered', icon: '🌐' },
    { value: '87%', label: 'Client Return Rate', icon: '🔄' },
    { value: '12+', label: 'Industry Awards', icon: '🏆' },
    { value: '0', label: 'Missed Deadlines', icon: '⏱️' }
  ];

  const coreEssence = [
    {
      title: 'Why "Latency"?',
      desc: 'We believe in taking the time to do things right. In a world of instant everything, we choose precision, intention, and quality over speed.',
      icon: '⏳',
      color: '#0066cc'
    },
    {
      title: 'Our DNA',
      desc: 'Engineers, designers, and strategists who left corporate giants to build something better. We value craft over scale, and relationships over transactions.',
      icon: '🧬',
      color: '#10B981'
    },
    {
      title: 'The Pure Difference',
      desc: 'No bureaucracy. No sales pitches. Just honest conversations about technology and real problem-solving with people who actually write code.',
      icon: '✨',
      color: '#7C3AED'
    },
    {
      title: 'Our Promise',
      desc: 'We never stop caring about your project after launch. We build lasting partnerships, not just products.',
      icon: '🤝',
      color: '#F59E0B'
    }
  ];

  const originStory = [
    {
      year: 'Late 2025',
      title: 'The Coffee Shop Meeting',
      desc: 'Five friends, frustrated with corporate tech culture, sketched the idea of PureLatency on a napkin at a café in San Francisco.',
      icon: '☕',
      color: '#0066cc'
    },
    {
      year: 'Jan 2026',
      title: 'First Office',
      desc: 'Rented a small space with a leaky ceiling but great natural light. The leak became our "feature" — a reminder that perfection takes time.',
      icon: '🏢',
      color: '#10B981'
    },
    {
      year: 'Feb 2026',
      title: 'First Client',
      desc: "A startup that couldn't afford enterprise rates but needed enterprise thinking. We've been partners ever since.",
      icon: '🤲',
      color: '#7C3AED'
    },
    {
      year: 'Mar 2026',
      title: 'The Name Stuck',
      desc: 'Originally a placeholder name, "PureLatency" became our identity — a constant reminder of our philosophy.',
      icon: '🏷️',
      color: '#F59E0B'
    }
  ];

  const theFounders = [
    {
      name: 'Alex Rivera',
      role: 'The Builder',
      bio: "Alex codes every day. He believes leaders should still write software. When not coding, he's restoring a 1967 Mustang.",
      trait: '🔧',
      color: '#0066cc'
    },
    {
      name: 'Jamie Chen',
      role: 'The Architect',
      bio: 'Jamie dreams in distributed systems. She once debugged a production issue at 35,000 feet. Her code is poetry.',
      trait: '🏗️',
      color: '#10B981'
    },
    {
      name: 'Sam Taylor',
      role: 'The Designer',
      bio: 'Sam makes complex things feel simple. He insists that every pixel has purpose. Outside work, he builds furniture by hand.',
      trait: '🎨',
      color: '#7C3AED'
    },
    {
      name: 'Jordan Lee',
      role: 'The Strategist',
      bio: 'Jordan translates business needs into technical reality. She speaks fluent "CEO" and "engineer" with equal ease.',
      trait: '🧠',
      color: '#F59E0B'
    },
    {
      name: 'Casey Morgan',
      role: 'The Operator',
      bio: 'Casey ensures everything runs smoothly. He believes process should enable creativity, not stifle it. Coffee connoisseur.',
      trait: '⚙️',
      color: '#EC4899'
    }
  ];

  const workPhilosophy = [
    {
      title: 'No Heroes',
      desc: "We don't want rock stars or ninjas. We want reliable teammates who show up, communicate, and care about the outcome.",
      icon: '👥',
      stat: '100%',
      statDesc: 'team players'
    },
    {
      title: 'Quiet Office',
      desc: 'We value deep work over constant meetings. Headphones are encouraged. Interruptions are minimized.',
      icon: '🔇',
      stat: '4hrs',
      statDesc: 'deep work daily'
    },
    {
      title: 'Radical Candor',
      desc: 'We tell you what you need to hear, not what you want to hear. Respectfully, honestly, directly.',
      icon: '💬',
      stat: '100%',
      statDesc: 'honest feedback'
    },
    {
      title: 'Sustainable Pace',
      desc: "We don't do crunch time. Burnout doesn't help anyone. Great work comes from rested minds.",
      icon: '🌿',
      stat: '40hrs',
      statDesc: 'max work week'
    }
  ];

  const theSpace = [
    {
      location: 'San Francisco',
      vibe: 'Creative chaos meets calm',
      feature: 'A wall of vintage tech (think old Macs and a working Commodore 64)',
      icon: '🌉',
      color: '#0066cc'
    },
    {
      location: 'Singapore',
      vibe: 'Tropical efficiency',
      feature: 'Rooftop garden where we brainstorm under the stars',
      icon: '🏝️',
      color: '#10B981'
    },
    {
      location: 'London',
      vibe: 'Warm pub energy indoors',
      feature: 'A proper tea bar and a corner dedicated to British computing history',
      icon: '🇬🇧',
      color: '#7C3AED'
    }
  ];

  const theUnexpected = [
    {
      title: 'We Have a Dog',
      desc: 'Meet Pixel, our office corgi. He attends every design review and has strong opinions about typography.',
      icon: '🐕',
      detail: 'Chief Morale Officer'
    },
    {
      title: 'Annual Build Week',
      desc: 'Once a year, we build anything we want. Some of our best products started as side projects.',
      icon: '🔨',
      detail: '10 products born'
    },
    {
      title: 'The Latency Library',
      desc: 'A curated collection of books we actually read. Borrow any time, no due dates.',
      icon: '📚',
      detail: '500+ books'
    },
    {
      title: 'Music Obsessed',
      desc: 'Every office has a vinyl player. Current rotation: jazz, classic rock, and whatever the team brings.',
      icon: '🎵',
      detail: '12 turntables'
    }
  ];

  const clientVoices = [
    {
      quote: "They turned down our money once because they didn't think we were ready. That's integrity.",
      author: "Maya Patel",
      company: "SeedStage VC",
      role: "Founder"
    },
    {
      quote: "Alex once spent three hours on a call with my junior dev, just teaching. No billing. Just kindness.",
      author: "David Chen",
      company: "HealthTech Solutions",
      role: "CTO"
    },
    {
      quote: "They care about our success more than their profit. That's rare.",
      author: "Sarah Williams",
      company: "EcoStart",
      role: "CEO"
    }
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
      name: 'Twitter', 
      href: 'https://twitter.com/purelatency',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg',
      color: '#000000'
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
    marginBottom: isMobile ? '3rem' : '6rem',
    alignItems: 'center',
  };

  const heroTitleStyle = {
    fontSize: isMobile ? '2.5rem' : '4rem',
    fontWeight: 300,
    color: '#1d1d1f',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
    textAlign: (isMobile ? 'center' : 'left') as 'center' | 'left',
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '1.5rem' : '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
    padding: isMobile ? '2rem' : '3rem',
    background: 'linear-gradient(135deg, #1d1d1f 0%, #2d2d2f 100%)',
    borderRadius: '20px',
    color: 'white',
  };

  const essenceGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
    gap: '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const originGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
    gap: isMobile ? '1.5rem' : '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const foundersGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
    gap: '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const philosophyGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
    gap: '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const voicesGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
    gap: '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const spaceGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
    gap: '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const unexpectedGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
    gap: '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const footerGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr',
    gap: isMobile ? '2rem' : '4rem',
    marginBottom: '4rem',
    textAlign: (isMobile ? 'center' : 'left') as 'center' | 'left',
  };

  const tabsContainerStyle = {
    display: 'flex',
    gap: isMobile ? '0.5rem' : '2rem',
    justifyContent: 'center',
    marginBottom: '3rem',
    borderBottom: '1px solid #e6e6e9',
    paddingBottom: '1rem',
    flexWrap: 'wrap' as const,
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
          <Link href="/about" style={{ color: '#86868b', textDecoration: 'none' }}> About</Link> / 
          <span style={{ color: '#1d1d1f' }}> Overview</span>
        </div>

        {/* Hero Section */}
        <div style={heroGridStyle}>
          <div>
            <div style={{ 
              display: 'inline-block',
              background: 'rgba(0,102,204,0.1)',
              color: '#0066cc',
              padding: isMobile ? '0.4rem 1.2rem' : '0.5rem 1.5rem',
              borderRadius: '30px',
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              marginBottom: '1.5rem',
              textAlign: (isMobile ? 'center' : 'left') as 'center' | 'left',
              width: isMobile ? '100%' : 'auto',
            }}>
              💫 Not Your Average Tech Company
            </div>
            <h1 style={heroTitleStyle}>
              We're different<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #0066cc 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                on purpose
              </span>
            </h1>
            <p style={{ 
              color: '#86868b', 
              fontSize: isMobile ? '1rem' : '1.2rem', 
              lineHeight: '1.7', 
              marginBottom: '2rem',
              textAlign: (isMobile ? 'center' : 'left') as 'center' | 'left',
            }}>
              PureLatency wasn't started to get rich. It was started to build things differently. 
              No bureaucracy. No egos. Just really good people solving really hard problems, 
              at a pace that makes sense.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1rem',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: isMobile ? 'center' : 'flex-start',
            }}>
              <Link
                href="/contact"
                style={{
                  background: '#0066cc',
                  color: 'white',
                  padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  textAlign: 'center' as const,
                  width: isMobile ? '100%' : 'auto',
                }}
              >
                Come Say Hello
              </Link>
              <Link
                href="#essence"
                style={{
                  background: 'transparent',
                  color: '#1d1d1f',
                  padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  border: '1px solid #e6e6e9',
                  textAlign: 'center' as const,
                  width: isMobile ? '100%' : 'auto',
                }}
              >
                Understand Our Vibe ↓
              </Link>
            </div>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #f5f5f7 0%, #e6e6e9 100%)',
            borderRadius: '30px',
            padding: isMobile ? '2rem' : '3rem',
            position: 'relative',
            overflow: 'hidden',
            marginTop: isMobile ? '1rem' : '0',
          }}>
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: isMobile ? '150px' : '200px',
              height: isMobile ? '150px' : '200px',
              background: 'rgba(0,102,204,0.1)',
              borderRadius: '50%'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-50px',
              left: '-50px',
              width: isMobile ? '150px' : '200px',
              height: isMobile ? '150px' : '200px',
              background: 'rgba(124,58,237,0.1)',
              borderRadius: '50%'
            }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: isMobile ? '2.5rem' : '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>🎲</div>
              <h3 style={{ 
                fontSize: isMobile ? '1.5rem' : '1.8rem', 
                fontWeight: 400, 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>The Un-Slide Deck</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "We code. We don't just manage.",
                  'No salespeople. Just engineers.',
                  'Honest timelines. No BS.'
                ].map((item, i) => (
                  <li key={i} style={{ 
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#86868b',
                    justifyContent: 'center',
                    fontSize: isMobile ? '0.95rem' : '1rem',
                  }}>
                    <span style={{ color: '#0066cc' }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <section style={statsGridStyle}>
          {stats.map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div style={{ 
                fontSize: isMobile ? '1.8rem' : '2.5rem', 
                fontWeight: 300, 
                color: '#0066cc', 
                marginBottom: '0.3rem' 
              }}>
                {stat.value}
              </div>
              <div style={{ 
                color: '#aaa', 
                fontSize: isMobile ? '0.75rem' : '0.9rem' 
              }}>{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Navigation Tabs */}
        <div style={tabsContainerStyle}>
          {['essence', 'origin', 'philosophy', 'vibes'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: 'none',
                border: 'none',
                padding: isMobile ? '0.5rem 0.8rem' : '0.5rem 1rem',
                fontSize: isMobile ? '0.9rem' : '1rem',
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
        {activeTab === 'essence' && (
          <section id="essence" style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
            <h2 style={{ 
              fontSize: isMobile ? '2rem' : '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              The Essence of PureLatency
            </h2>
            <div style={essenceGridStyle}>
              {coreEssence.map(item => (
                <div
                  key={item.title}
                  style={{
                    padding: isMobile ? '1.5rem' : '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9'
                  }}
                >
                  <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: isMobile ? '1.3rem' : '1.5rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#86868b', fontSize: isMobile ? '0.95rem' : '1rem', lineHeight: '1.7' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'origin' && (
          <>
            {/* Origin Story */}
            <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '2rem' : '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                How We Started
              </h2>
              <p style={{ 
                color: '#86868b', 
                fontSize: isMobile ? '1rem' : '1.2rem', 
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 2rem',
                padding: isMobile ? '0 1rem' : '0'
              }}>
                It began with a napkin, a leaky ceiling, and five friends who believed work could be better
              </p>
              <div style={originGridStyle}>
                {originStory.map((item, index) => (
                  <div key={item.title} style={{ 
                    padding: isMobile ? '1.5rem' : '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9',
                    position: 'relative'
                  }}>
                    {!isMobile && index < originStory.length - 1 && (
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
                    <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                    <div style={{ 
                      fontSize: '0.9rem',
                      color: item.color,
                      fontWeight: 500,
                      marginBottom: '0.5rem'
                    }}>
                      {item.year}
                    </div>
                    <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.3rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#86868b', fontSize: isMobile ? '0.9rem' : '0.95rem', lineHeight: '1.6' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* The Founders */}
            <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '2rem' : '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                The Five Who Stayed
              </h2>
              <p style={{ 
                color: '#86868b', 
                fontSize: isMobile ? '1rem' : '1.2rem', 
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 2rem',
                padding: isMobile ? '0 1rem' : '0'
              }}>
                We could have taken easier paths. We chose this one.
              </p>
              <div style={foundersGridStyle}>
                {theFounders.map(founder => (
                  <div
                    key={founder.name}
                    style={{
                      padding: isMobile ? '1.5rem' : '2rem',
                      borderRadius: '20px',
                      background: '#fafafa',
                      border: '1px solid #e6e6e9'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '1.8rem' }}>{founder.trait}</span>
                      <span style={{ 
                        fontSize: '0.9rem',
                        color: founder.color,
                        fontWeight: 500
                      }}>
                        {founder.role}
                      </span>
                    </div>
                    <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.3rem', marginBottom: '0.3rem', color: '#1d1d1f' }}>
                      {founder.name}
                    </h3>
                    <p style={{ color: '#86868b', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      {founder.bio}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'philosophy' && (
          <>
            {/* Work Philosophy */}
            <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '2rem' : '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                How We Actually Work
              </h2>
              <p style={{ 
                color: '#86868b', 
                fontSize: isMobile ? '1rem' : '1.2rem', 
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 2rem',
                padding: isMobile ? '0 1rem' : '0'
              }}>
                No mission statements. Just how we show up every day.
              </p>
              <div style={philosophyGridStyle}>
                {workPhilosophy.map(item => (
                  <div
                    key={item.title}
                    style={{
                      padding: isMobile ? '1.5rem' : '2rem',
                      borderRadius: '20px',
                      background: '#fafafa',
                      border: '1px solid #e6e6e9',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                    <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#86868b', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                      {item.desc}
                    </p>
                    <div>
                      <div style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', fontWeight: 300, color: '#0066cc' }}>
                        {item.stat}
                      </div>
                      <div style={{ color: '#86868b', fontSize: '0.8rem' }}>{item.statDesc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Client Voices */}
            <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '2rem' : '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                What People Say (When We're Not in the Room)
              </h2>
              <div style={voicesGridStyle}>
                {clientVoices.map((voice, index) => (
                  <div key={index} style={{
                    padding: isMobile ? '1.5rem' : '2rem',
                    background: '#fafafa',
                    borderRadius: '20px',
                    border: '1px solid #e6e6e9',
                    position: 'relative'
                  }}>
                    <span style={{ fontSize: isMobile ? '3rem' : '4rem', color: '#0066cc', opacity: 0.2, position: 'absolute', top: '10px', left: '20px' }}>"</span>
                    <p style={{ color: '#1d1d1f', fontSize: isMobile ? '0.95rem' : '1rem', lineHeight: '1.8', marginBottom: '1.5rem', position: 'relative', zIndex: 2, fontStyle: 'italic' }}>
                      {voice.quote}
                    </p>
                    <div>
                      <strong style={{ color: '#1d1d1f', fontSize: isMobile ? '0.95rem' : '1rem' }}>{voice.author}</strong>
                      <p style={{ color: '#86868b', fontSize: '0.85rem' }}>
                        {voice.role}, {voice.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'vibes' && (
          <>
            {/* The Space */}
            <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '2rem' : '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                Where We Create
              </h2>
              <p style={{ 
                color: '#86868b', 
                fontSize: isMobile ? '1rem' : '1.2rem', 
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 2rem',
                padding: isMobile ? '0 1rem' : '0'
              }}>
                Our offices reflect who we are — a little weird, a lot functional
              </p>
              <div style={spaceGridStyle}>
                {theSpace.map(place => (
                  <div
                    key={place.location}
                    style={{
                      padding: isMobile ? '1.5rem' : '2rem',
                      background: '#fafafa',
                      borderRadius: '20px',
                      border: '1px solid #e6e6e9'
                    }}
                  >
                    <div style={{ fontSize: isMobile ? '2.5rem' : '3rem', marginBottom: '1rem' }}>{place.icon}</div>
                    <h3 style={{ fontSize: isMobile ? '1.3rem' : '1.5rem', marginBottom: '0.2rem', color: '#1d1d1f' }}>
                      {place.location}
                    </h3>
                    <p style={{ color: place.color, fontSize: '0.9rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                      {place.vibe}
                    </p>
                    <p style={{ color: '#86868b', fontSize: '0.85rem', lineHeight: '1.6' }}>
                      ✨ {place.feature}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* The Unexpected */}
            <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '2rem' : '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Things You Didn't Expect
              </h2>
              <div style={unexpectedGridStyle}>
                {theUnexpected.map(item => (
                  <div
                    key={item.title}
                    style={{
                      padding: isMobile ? '1.2rem' : '1.5rem',
                      background: '#fafafa',
                      borderRadius: '20px',
                      border: '1px solid #e6e6e9',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                    <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', marginBottom: '0.3rem', color: '#1d1d1f' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#86868b', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                      {item.desc}
                    </p>
                    <p style={{ color: '#0066cc', fontSize: '0.75rem', fontWeight: 500 }}>
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* CTA Section */}
        <section style={{
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
            <h2 style={{
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 400,
              marginBottom: '1rem'
            }}>
              Contact Us
            </h2>

            <p style={{
              fontSize: isMobile ? '1rem' : '1.25rem',
              marginBottom: '2rem',
              opacity: 0.95
            }}>
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
                width: isMobile ? '100%' : 'auto',
                maxWidth: isMobile ? '300px' : 'none',
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

        {/* Back to About */}
        <div style={{ 
          borderTop: '1px solid #e6e6e9',
          paddingTop: '2rem',
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <Link 
            href="/about" 
            style={{ 
              color: '#86868b', 
              textDecoration: 'none', 
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              display: 'inline-block'
            }}
          >
            ← Back to About
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
                Different by design. Better by choice.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: isMobile ? '1.1rem' : '1.2rem' }}>Explore</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/about" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>Our Story</Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/services" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>What We Do</Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/products" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>What We Built</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: isMobile ? '1.1rem' : '1.2rem' }}>Connect</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/contact" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>Say Hi</Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/careers" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>Join Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: isMobile ? '1.1rem' : '1.2rem' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/privacy" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>Privacy</Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/terms" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>Terms</Link>
                </li>
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
            © 2026 PureLatency. All rights reserved. Pixel the Corgi approves this message.
          </div>
        </div>
      </footer>
    </>
  );
}