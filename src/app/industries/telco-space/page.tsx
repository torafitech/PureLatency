'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function TelcoSpacePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const industry = {
    title: 'Telco and Space',
    tagline: 'Connect the future',
    description: 'Innovative software solutions for telecommunications and aerospace industries, from 5G networks to satellite systems.',
    longDescription: 'We build reliable, high-performance software that powers global connectivity and space exploration. From ground stations to network infrastructure, we deliver solutions that work at the edge of possibility.',
    icon: '🛰️',
    color: '#7C3AED',
    stats: [
      { value: '99.999%', label: 'Reliability', icon: '📡' },
      { value: '<1ms', label: 'Latency', icon: '⚡' },
      { value: '100+', label: 'Satellites', icon: '🛰️' },
      { value: '24/7', label: 'Mission Critical', icon: '🌍' }
    ]
  };

  const challenges = [
    {
      title: 'Network Complexity',
      desc: 'Managing increasingly complex 5G and fiber networks with millions of connected devices.',
      icon: '🌐',
      impact: '60% of network costs spent on operations'
    },
    {
      title: 'Latency Requirements',
      desc: 'Ultra-low latency demands for real-time applications and edge computing.',
      icon: '⚡',
      impact: '<1ms required for 5G applications'
    },
    {
      title: 'Space Environment',
      desc: 'Radiation-hardened software for extreme space conditions.',
      icon: '🛰️',
      impact: 'Radiation causes 1 in 10 satellite failures'
    },
    {
      title: 'Global Coverage',
      desc: 'Providing seamless connectivity across the entire planet.',
      icon: '🌍',
      impact: '3 billion people still lack internet access'
    }
  ];

  const solutions = [
    {
      title: 'Network Management',
      tagline: 'Intelligent network orchestration',
      desc: 'AI-powered network management for 5G, fiber, and hybrid networks.',
      icon: '📡',
      color: '#7C3AED',
      features: [
        'SDN/NFV orchestration',
        'Network slicing',
        'Traffic optimization',
        'Predictive maintenance'
      ],
      benefits: [
        '30% lower OPEX',
        '99.999% reliability',
        'Real-time visibility'
      ]
    },
    {
      title: 'Ground Systems',
      tagline: 'Mission-critical control',
      desc: 'Software for satellite ground stations including mission control and telemetry.',
      icon: '🛸',
      color: '#10B981',
      features: [
        'Mission control',
        'Telemetry processing',
        'Command & control',
        'Data downlink'
      ],
      benefits: [
        'Zero data loss',
        'Real-time processing',
        'Automated operations'
      ]
    },
    {
      title: 'Satellite Data',
      tagline: 'Insights from space',
      desc: 'Process and analyze satellite imagery and sensor data at scale.',
      icon: '🛰️',
      color: '#F59E0B',
      features: [
        'Image processing',
        'Data fusion',
        'Analytics',
        'API delivery'
      ],
      benefits: [
        '10x faster processing',
        'Petabyte scale',
        'Real-time insights'
      ]
    },
    {
      title: 'Flight Software',
      tagline: 'Software for the edge of space',
      desc: 'Reliable, radiation-hardened software for space systems and satellites.',
      icon: '🚀',
      color: '#0066cc',
      features: [
        'Real-time systems',
        'Fault tolerance',
        'Rad-hardened',
        'Verification'
      ],
      benefits: [
        '100% mission success',
        'Auto-recovery',
        'Space-qualified'
      ]
    }
  ];

  const successStories = [
    {
      client: 'Global Satellite Network',
      industry: 'Space Communications',
      challenge: 'Managing 50+ satellites with legacy ground systems',
      solution: 'Modern ground control software with automated telemetry',
      result: '99.999% uptime, 60% fewer operators, real-time monitoring',
      metrics: ['99.999% uptime', '60% less staff', '50+ satellites'],
      icon: '🛰️',
      color: '#7C3AED'
    },
    {
      client: 'Tier-1 Telecom Provider',
      industry: '5G Network',
      challenge: 'Network complexity with millions of connected devices',
      solution: 'AI-powered network orchestration and slicing',
      result: '30% lower costs, <1ms latency, 5M+ devices managed',
      metrics: ['30% savings', '<1ms latency', '5M devices'],
      icon: '📡',
      color: '#10B981'
    },
    {
      client: 'Space Agency',
      industry: 'Government Space',
      challenge: 'Critical mission software for deep space exploration',
      solution: 'Radiation-hardened flight software with fault tolerance',
      result: '100% mission success, 10+ years in space, zero failures',
      metrics: ['100% success', '10+ years', 'Zero failures'],
      icon: '🚀',
      color: '#F59E0B'
    }
  ];

  const capabilities = [
    {
      title: '5G Ready',
      desc: 'Solutions built for next-generation networks',
      icon: '📶',
      stat: '<1ms',
      statDesc: 'latency'
    },
    {
      title: 'Space Qualified',
      desc: 'Radiation-hardened for space environments',
      icon: '🛰️',
      stat: '100%',
      statDesc: 'mission success'
    },
    {
      title: 'Edge Computing',
      desc: 'Process data at the network edge',
      icon: '⚡',
      stat: '10ms',
      statDesc: 'edge latency'
    },
    {
      title: 'Massive Scale',
      desc: 'Handle billions of connected devices',
      icon: '📊',
      stat: '1B+',
      statDesc: 'devices'
    }
  ];

  const partners = [
    { name: 'SpaceX', logo: 'SX', type: 'Launch Partner' },
    { name: 'OneWeb', logo: 'OW', type: 'Satellite Network' },
    { name: 'Starlink', logo: 'SL', type: 'Constellation' },
    { name: 'Ericsson', logo: 'ER', type: '5G Infrastructure' },
    { name: 'Nokia', logo: 'NK', type: 'Network Partner' },
    { name: 'Huawei', logo: 'HW', type: 'Telecom Equipment' },
    { name: 'Thales', logo: 'TH', type: 'Space Systems' },
    { name: 'Airbus', logo: 'AB', type: 'Aerospace' }
  ];

  const faqs = [
    {
      question: 'How do you achieve 99.999% reliability?',
      answer: 'We use redundant systems, automated failover, and continuous monitoring. Our software is designed with fault tolerance and self-healing capabilities.'
    },
    {
      question: 'What about radiation hardening for space?',
      answer: 'Our flight software uses radiation-hardened designs, error correction, and redundant systems to operate reliably in space environments.'
    },
    {
      question: 'Can you integrate with existing network infrastructure?',
      answer: 'Yes, we support standard protocols and APIs for seamless integration with existing telecom and ground station equipment.'
    },
    {
      question: 'How do you handle massive scale?',
      answer: 'Our distributed architecture scales horizontally to handle millions of devices and petabytes of data with real-time processing.'
    }
  ];

  const technologies = [
    '5G', 'SDN', 'NFV', 'OpenRAN', 'MIMO',
    'Kubernetes', 'Docker', 'Istio', 'Envoy',
    'Apache Kafka', 'Apache Flink', 'InfluxDB',
    'C/C++', 'Rust', 'Python', 'Go',
    'FPGA', 'VHDL', 'Verilog', 'RTOS'
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
          <Link href="/industries" style={{ color: '#86868b', textDecoration: 'none' }}> Industries</Link> / 
          <span style={{ color: '#1d1d1f' }}> Telco and Space</span>
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
              background: 'rgba(124,58,237,0.1)',
              color: industry.color,
              padding: '0.5rem 1.5rem',
              borderRadius: '30px',
              fontSize: '0.9rem',
              marginBottom: '1.5rem'
            }}>
              🛰️ Connectivity & Aerospace
            </div>
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              {industry.title}<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #7C3AED 0%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {industry.tagline}
              </span>
            </h1>
            <p style={{ color: '#86868b', fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              {industry.longDescription}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link
                href="/contact"
                style={{
                  background: industry.color,
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                Contact Space Team
              </Link>
              <Link
                href="#solutions"
                style={{
                  background: 'transparent',
                  color: '#1d1d1f',
                  padding: '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  border: '1px solid #e6e6e9'
                }}
              >
                Explore Solutions ↓
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
              background: 'rgba(124,58,237,0.1)',
              borderRadius: '50%'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-50px',
              left: '-50px',
              width: '200px',
              height: '200px',
              background: 'rgba(16,185,129,0.1)',
              borderRadius: '50%'
            }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🌍</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '1rem' }}>Global Connectivity</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '99.999% mission-critical reliability',
                  '<1ms latency for 5G networks',
                  '100+ satellites supported'
                ].map((item, i) => (
                  <li key={i} style={{ 
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#86868b'
                  }}>
                    <span style={{ color: '#7C3AED' }}>✓</span>
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
          {industry.stats.map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 300, color: '#7C3AED', marginBottom: '0.3rem' }}>
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
          {['overview', 'solutions', 'success', 'faq'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                fontWeight: activeTab === tab ? 600 : 400,
                color: activeTab === tab ? '#7C3AED' : '#86868b',
                cursor: 'pointer',
                borderBottom: activeTab === tab ? '2px solid #7C3AED' : 'none',
                textTransform: 'capitalize'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <>
            {/* Challenges */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                Telco & Space Challenges We Solve
              </h2>
              <p style={{ 
                color: '#86868b', 
                fontSize: '1.2rem', 
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 3rem'
              }}>
                Critical issues facing connectivity and aerospace industries
              </p>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '2rem'
              }}>
                {challenges.map(challenge => (
                  <div
                    key={challenge.title}
                    style={{
                      padding: '2rem',
                      borderRadius: '20px',
                      background: '#fafafa',
                      border: '1px solid #e6e6e9',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{challenge.icon}</div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                      {challenge.title}
                    </h3>
                    <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                      {challenge.desc}
                    </p>
                    <div style={{
                      background: 'white',
                      padding: '0.8rem',
                      borderRadius: '12px',
                      border: '1px solid #e6e6e9'
                    }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 500, color: '#7C3AED', marginBottom: '0.2rem' }}>Industry Impact</div>
                      <p style={{ color: '#1d1d1f', fontSize: '0.9rem' }}>{challenge.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Capabilities */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                Telco & Space Capabilities
              </h2>
              <p style={{ 
                color: '#86868b', 
                fontSize: '1.2rem', 
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 3rem'
              }}>
                What we bring to connectivity and aerospace
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
                      background: '#fafafa',
                      border: '1px solid #e6e6e9',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{cap.icon}</div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                      {cap.title}
                    </h3>
                    <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                      {cap.desc}
                    </p>
                    <div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 300, color: '#7C3AED' }}>
                        {cap.stat}
                      </div>
                      <div style={{ color: '#86868b', fontSize: '0.85rem' }}>{cap.statDesc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'solutions' && (
          <section id="solutions" style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Telco & Space Solutions
            </h2>
            <p style={{ 
              color: '#86868b', 
              fontSize: '1.2rem', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 3rem'
            }}>
              Comprehensive solutions for connectivity and aerospace
            </p>
            <div style={{ 
              display: 'grid',
              gap: '2rem'
            }}>
              {solutions.map(solution => (
                <div
                  key={solution.title}
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9',
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    gap: '2rem',
                    alignItems: 'start'
                  }}
                >
                  <div style={{ fontSize: '3rem' }}>{solution.icon}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.5rem', color: '#1d1d1f' }}>{solution.title}</h3>
                      <span style={{
                        background: `${solution.color}20`,
                        color: solution.color,
                        padding: '0.2rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 500
                      }}>
                        {solution.tagline}
                      </span>
                    </div>
                    <p style={{ color: '#86868b', fontSize: '1rem', marginBottom: '1rem' }}>{solution.desc}</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#1d1d1f', marginBottom: '0.5rem' }}>Features</div>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {solution.features.map(feature => (
                            <li key={feature} style={{ 
                              color: '#86868b', 
                              fontSize: '0.9rem',
                              marginBottom: '0.3rem',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.3rem'
                            }}>
                              <span style={{ color: solution.color }}>→</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#1d1d1f', marginBottom: '0.5rem' }}>Benefits</div>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {solution.benefits.map(benefit => (
                            <li key={benefit} style={{ 
                              color: '#86868b', 
                              fontSize: '0.9rem',
                              marginBottom: '0.3rem',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.3rem'
                            }}>
                              <span style={{ color: '#10B981' }}>✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Link
                      href="/contact"
                      style={{
                        padding: '0.6rem 1.5rem',
                        background: solution.color,
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '30px',
                        fontSize: '0.9rem',
                        textAlign: 'center'
                      }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'success' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Telco & Space Success Stories
            </h2>
            <p style={{ 
              color: '#86868b', 
              fontSize: '1.2rem', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 3rem'
            }}>
              Real results for connectivity and aerospace clients
            </p>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem'
            }}>
              {successStories.map(story => (
                <div
                  key={story.client}
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{story.icon}</div>
                  <div style={{ 
                    display: 'inline-block',
                    background: `${story.color}20`,
                    color: story.color,
                    padding: '0.2rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    marginBottom: '1rem',
                    fontWeight: 500
                  }}>
                    {story.industry}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                    {story.client}
                  </h3>
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 500, color: '#1d1d1f', marginBottom: '0.2rem' }}>Challenge:</div>
                    <p style={{ color: '#86868b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{story.challenge}</p>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 500, color: '#1d1d1f', marginBottom: '0.2rem' }}>Solution:</div>
                    <p style={{ color: '#86868b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{story.solution}</p>
                  </div>
                  <div style={{ 
                    background: `${story.color}10`,
                    padding: '1rem',
                    borderRadius: '12px'
                  }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 500, color: story.color, marginBottom: '0.5rem' }}>Results:</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      {story.metrics.map(metric => (
                        <span key={metric} style={{
                          background: 'white',
                          color: '#1d1d1f',
                          padding: '0.2rem 0.5rem',
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          fontWeight: 500
                        }}>
                          {metric}
                        </span>
                      ))}
                    </div>
                    <p style={{ color: '#1d1d1f', fontSize: '0.95rem', fontWeight: 500 }}>{story.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'faq' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Frequently Asked Questions
            </h2>
            <div style={{ 
              display: 'grid',
              gap: '1rem',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1.5rem',
                    borderRadius: '12px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9'
                  }}
                >
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                    {faq.question}
                  </h3>
                  <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Industry Partners */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Industry Partners
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Collaborating with leaders in connectivity and aerospace
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {partners.map(partner => (
              <div
                key={partner.name}
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
                  background: 'linear-gradient(135deg, #7C3AED 0%, #10B981 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.5rem',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 600
                }}>
                  {partner.logo}
                </div>
                <div style={{ fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{partner.name}</div>
                <div style={{ color: '#86868b', fontSize: '0.7rem' }}>{partner.type}</div>
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
            Telco & Space Technology Stack
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Cutting-edge technologies for connectivity and aerospace
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

        {/* CTA Section */}
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

        {/* Back to Industries */}
        <div style={{ 
          borderTop: '1px solid #e6e6e9',
          paddingTop: '2rem',
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <Link 
            href="/industries" 
            style={{ 
              color: '#86868b', 
              textDecoration: 'none', 
              fontSize: '0.9rem',
              display: 'inline-block'
            }}
          >
            ← Back to Industries
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
                Connecting the world through space and telecommunications.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Solutions</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {solutions.slice(0, 4).map(solution => (
                  <li key={solution.title} style={{ marginBottom: '0.5rem' }}>
                    <Link href="#solutions" style={{ color: '#aaa', textDecoration: 'none' }}>{solution.title}</Link>
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