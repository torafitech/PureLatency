'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function IndustriesPage() {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  const industries = [
    {
      id: 'enterprise',
      title: 'Enterprise',
      tagline: 'Scale with confidence',
      desc: 'Comprehensive digital solutions for large organizations seeking to modernize, optimize, and innovate at scale.',
      longDesc: 'We help enterprises transform legacy systems into modern, efficient platforms that drive business growth.',
      icon: '🏢',
      color: '#0066cc',
      metrics: ['99.99% uptime', '50+ clients', '40% cost savings'],
      solutions: ['Legacy Modernization', 'Digital Transformation', 'Enterprise Integration', 'Scalable Architecture']
    },
    {
      id: 'government',
      title: 'Government',
      tagline: 'Secure, compliant, accessible',
      desc: 'Digital solutions designed for the public sector with security, compliance, and accessibility as top priorities.',
      longDesc: 'We help government agencies modernize services and improve citizen experience through secure technology.',
      icon: '⚖️',
      color: '#10B981',
      metrics: ['FedRAMP ready', 'SOC 2 certified', 'WCAG compliant'],
      solutions: ['Digital Services', 'Internal Tools', 'Data Systems', 'Legacy Modernization']
    },
    {
      id: 'telco-space',
      title: 'Telco and Space',
      tagline: 'Connect the future',
      desc: 'Innovative software solutions for telecommunications and aerospace industries, from 5G networks to satellite systems.',
      longDesc: 'We build reliable, high-performance software that powers global connectivity and space exploration.',
      icon: '🛰️',
      color: '#7C3AED',
      metrics: ['99.999% reliability', '<1ms latency', 'Global reach'],
      solutions: ['Network Management', 'Ground Systems', 'Satellite Data', 'Flight Software']
    }
  ];

  const stats = [
    { value: '15+', label: 'Years Combined Experience', icon: '⏳' },
    { value: '100+', label: 'Industry Projects', icon: '🏆' },
    { value: '100%', label: 'Compliance Success', icon: '✓' },
    { value: '24/7', label: 'Dedicated Support', icon: '🌙' }
  ];

  const capabilities = [
    {
      title: 'Security & Compliance',
      desc: 'We build solutions that meet the strictest security and regulatory requirements.',
      icon: '🔒',
      color: '#0066cc',
      details: ['FedRAMP', 'SOC 2', 'HIPAA', 'GDPR']
    },
    {
      title: 'Scalability',
      desc: 'Infrastructure and applications designed to grow with your organization.',
      icon: '📈',
      color: '#10B981',
      details: ['Auto-scaling', 'High availability', 'Load balancing']
    },
    {
      title: 'Integration',
      desc: 'Seamlessly connect with existing systems and third-party platforms.',
      icon: '🔗',
      color: '#7C3AED',
      details: ['API-first', 'Legacy integration', 'Real-time sync']
    },
    {
      title: 'Innovation',
      desc: 'Cutting-edge technology solutions tailored to your industry.',
      icon: '💡',
      color: '#F59E0B',
      details: ['AI/ML', 'IoT', 'Edge computing', '5G']
    }
  ];

  const successStories = [
    {
      industry: 'Enterprise',
      title: 'Global Manufacturing Giant',
      challenge: 'Legacy systems causing inefficiencies and security risks',
      solution: 'Modernized core systems with cloud-native architecture',
      result: '40% cost reduction, 99.99% uptime, 3x faster deployments',
      icon: '🏭',
      color: '#0066cc'
    },
    {
      industry: 'Government',
      title: 'State Digital Services Portal',
      challenge: 'Outdated citizen services with accessibility issues',
      solution: 'Built modern, WCAG-compliant portal serving 5M+ citizens',
      result: '100% accessibility compliance, 2M+ monthly users',
      icon: '🏛️',
      color: '#10B981'
    },
    {
      industry: 'Telco and Space',
      title: 'Global Satellite Network',
      challenge: 'Need for reliable ground station software',
      solution: 'Developed mission-critical ground control system',
      result: '99.999% uptime, real-time telemetry, global coverage',
      icon: '🛰️',
      color: '#7C3AED'
    }
  ];

  const differentiators = [
    {
      title: 'Industry-Specific Expertise',
      desc: 'Deep domain knowledge in enterprise, government, and aerospace sectors.',
      icon: '🎯',
      stat: '15+',
      statDesc: 'years average experience'
    },
    {
      title: 'Security-First Approach',
      desc: 'Built-in security and compliance from day one, not an afterthought.',
      icon: '🔐',
      stat: '100%',
      statDesc: 'compliance rate'
    },
    {
      title: 'Proven Track Record',
      desc: 'Successful projects for Fortune 500 companies and government agencies.',
      icon: '📊',
      stat: '100+',
      statDesc: 'successful projects'
    },
    {
      title: 'Long-Term Partnership',
      desc: 'We work alongside your team for ongoing success and evolution.',
      icon: '🤝',
      stat: '5+',
      statDesc: 'average engagement years'
    }
  ];

  const technologies = [
    // Cloud & Infrastructure
    'AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform',
    // Security
    'Okta', 'Auth0', 'Hashicorp Vault', 'CloudFlare',
    // Data
    'PostgreSQL', 'MongoDB', 'Snowflake', 'Elasticsearch',
    // AI/ML
    'TensorFlow', 'PyTorch', 'Hugging Face', 'OpenAI',
    // IoT/Edge
    'AWS IoT', 'Azure IoT', 'Edge Computing', '5G'
  ];

  const partners = [
    { name: 'AWS', logo: 'AWS', type: 'Cloud Provider' },
    { name: 'Microsoft', logo: 'MS', type: 'Technology Partner' },
    { name: 'Google Cloud', logo: 'GCP', type: 'Cloud Provider' },
    { name: 'Okta', logo: 'OK', type: 'Security Partner' },
    { name: 'Datadog', logo: 'DD', type: 'Monitoring' },
    { name: 'MongoDB', logo: 'MDB', type: 'Database' }
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
          <span style={{ color: '#1d1d1f' }}> Industries</span>
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
              🌍 Industry-Specific Expertise
            </div>
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Solutions tailored to<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #0066cc 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                your industry's needs
              </span>
            </h1>
            <p style={{ color: '#86868b', fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              We bring deep domain expertise to solve complex challenges across enterprise, government, 
              and telco and space sectors. Our solutions are built to meet the unique requirements of your industry.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link
                href="#industries"
                style={{
                  background: '#0066cc',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                Explore Industries ↓
              </Link>
              <Link
                href="/contact"
                style={{
                  background: 'transparent',
                  color: '#1d1d1f',
                  padding: '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  border: '1px solid #e6e6e9'
                }}
              >
                Discuss Your Project
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
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🏆</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '1rem' }}>Trusted by Industry Leaders</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '100+ industry projects delivered',
                  '15+ years combined experience',
                  '100% compliance success rate'
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

        {/* Industries Grid */}
        <section id="industries" style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Industries We Serve
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Deep expertise in sectors with complex requirements and high standards
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {industries.map(industry => (
              <Link
                key={industry.id}
                href={`/industries/${industry.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    background: 'white',
                    border: hoveredIndustry === industry.id ? `2px solid ${industry.color}` : '1px solid #e6e6e9',
                    transition: 'all 0.2s ease',
                    height: '100%',
                    transform: hoveredIndustry === industry.id ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: hoveredIndustry === industry.id ? '0 10px 25px rgba(0,0,0,0.1)' : 'none'
                  }}
                  onMouseEnter={() => setHoveredIndustry(industry.id)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{industry.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.3rem', color: '#1d1d1f' }}>
                    {industry.title}
                  </h3>
                  <p style={{ color: industry.color, fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 500 }}>
                    {industry.tagline}
                  </p>
                  <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                    {industry.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    {industry.metrics.map(metric => (
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
                  <div style={{ color: industry.color, fontWeight: 500, fontSize: '0.95rem' }}>
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Key Capabilities */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Cross-Industry Capabilities
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Core competencies that deliver value across every sector we serve
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
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
                  {cap.details.map(detail => (
                    <span
                      key={detail}
                      style={{
                        background: 'white',
                        color: '#666',
                        padding: '0.2rem 0.8rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
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

        {/* Success Stories */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Success Stories
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Real results for real clients across industries
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {successStories.map(story => (
              <div
                key={story.title}
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
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                  {story.title}
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
                  padding: '0.8rem',
                  borderRadius: '12px'
                }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 500, color: story.color, marginBottom: '0.2rem' }}>Result:</div>
                  <p style={{ color: '#1d1d1f', fontSize: '0.95rem', fontWeight: 500 }}>{story.result}</p>
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
            Why Industry Leaders Trust Us
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            What sets PureLatency apart in serving complex industries
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
            Enterprise-Grade Technology
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Modern tools and platforms we use to build industry solutions
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

        {/* Trusted Partners */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Our Ecosystem Partners
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
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
                  {partner.logo}
                </div>
                <div style={{ fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{partner.name}</div>
                <div style={{ color: '#86868b', fontSize: '0.7rem' }}>{partner.type}</div>
              </div>
            ))}
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
              margin: '0 auto'
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
                Deep industry expertise for enterprise, government, and aerospace.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Industries</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {industries.map(industry => (
                  <li key={industry.id} style={{ marginBottom: '0.5rem' }}>
                    <Link href={`/industries/${industry.id}`} style={{ color: '#aaa', textDecoration: 'none' }}>{industry.title}</Link>
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