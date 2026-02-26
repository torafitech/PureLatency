'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function PartnersPage() {
  const [activeTab, setActiveTab] = useState('all');

  const stats = [
    { value: '25+', label: 'Active Partners', icon: '🤝' },
    { value: '50+', label: 'Joint Projects', icon: '🚀' },
    { value: '100%', label: 'Partner Satisfaction', icon: '⭐' },
    { value: '24/7', label: 'Partner Support', icon: '🌙' }
  ];

  const partnerCategories = [
    {
      name: 'Cloud Infrastructure',
      icon: '☁️',
      color: '#0066cc',
      partners: [
        { name: 'AWS', logo: 'AWS', description: 'Premier cloud provider for scalable infrastructure', tier: 'Premier', since: '2026' },
        { name: 'Google Cloud', logo: 'GCP', description: 'Advanced cloud and AI/ML capabilities', tier: 'Advanced', since: '2026' },
        { name: 'Microsoft Azure', logo: 'AZ', description: 'Enterprise cloud solutions', tier: 'Gold', since: '2026' },
        { name: 'DigitalOcean', logo: 'DO', description: 'Developer-friendly cloud platform', tier: 'Partner', since: '2026' }
      ]
    },
    {
      name: 'Technology Platforms',
      icon: '⚙️',
      color: '#10B981',
      partners: [
        { name: 'Vercel', logo: 'VC', description: 'Frontend deployment and hosting', tier: 'Premier', since: '2026' },
        { name: 'MongoDB', logo: 'MDB', description: 'Modern database solutions', tier: 'Premier', since: '2026' },
        { name: 'Elastic', logo: 'EL', description: 'Search and analytics engine', tier: 'Gold', since: '2026' },
        { name: 'Datadog', logo: 'DD', description: 'Cloud monitoring and security', tier: 'Premier', since: '2026' },
        { name: 'Auth0', logo: 'A0', description: 'Identity and access management', tier: 'Gold', since: '2026' }
      ]
    },
    {
      name: 'Development Tools',
      icon: '🛠️',
      color: '#7C3AED',
      partners: [
        { name: 'GitHub', logo: 'GH', description: 'Code hosting and collaboration', tier: 'Premier', since: '2026' },
        { name: 'GitLab', logo: 'GL', description: 'DevOps platform', tier: 'Gold', since: '2026' },
        { name: 'Figma', logo: 'FG', description: 'Design collaboration', tier: 'Premier', since: '2026' },
        { name: 'Slack', logo: 'SL', description: 'Team communication', tier: 'Gold', since: '2026' },
        { name: 'Jira', logo: 'JR', description: 'Project management', tier: 'Partner', since: '2026' }
      ]
    },
    {
      name: 'Implementation Partners',
      icon: '🏢',
      color: '#F59E0B',
      partners: [
        { name: 'Deloitte', logo: 'DL', description: 'Global consulting and implementation', tier: 'Strategic', since: '2026' },
        { name: 'Accenture', logo: 'AC', description: 'Technology and transformation', tier: 'Strategic', since: '2026' },
        { name: 'IBM', logo: 'IBM', description: 'Enterprise solutions', tier: 'Premier', since: '2026' },
        { name: 'TCS', logo: 'TCS', description: 'Global IT services', tier: 'Gold', since: '2026' }
      ]
    }
  ];

  const allPartners = partnerCategories.flatMap(cat => cat.partners);

  const benefits = [
    {
      title: 'Access to Enterprise Clients',
      desc: 'Connect with Fortune 500 companies and high-growth startups through our network',
      icon: '🏢',
      stats: '50+ enterprise introductions in 2026'
    },
    {
      title: 'Joint Go-to-Market',
      desc: 'Collaborative marketing campaigns, events, and sales initiatives',
      icon: '📢',
      stats: '15 joint campaigns launched'
    },
    {
      title: 'Technical Collaboration',
      desc: 'Work alongside our engineering team on innovative solutions',
      icon: '⚙️',
      stats: '20+ co-developed features'
    },
    {
      title: 'Co-innovation Opportunities',
      desc: 'Build next-generation products together with shared IP',
      icon: '💡',
      stats: '3 joint products in development'
    },
    {
      title: 'Dedicated Partner Manager',
      desc: 'Single point of contact for all your needs',
      icon: '🤝',
      stats: '24/7 availability'
    },
    {
      title: 'Training & Enablement',
      desc: 'Comprehensive technical and sales training for your team',
      icon: '📚',
      stats: '500+ hours of training'
    }
  ];

  const testimonials = [
    {
      quote: "PureLatency has been an exceptional partner. Their technical depth and collaborative approach have helped us deliver better solutions to our mutual clients.",
      author: "Sarah Chen",
      role: "Partner Alliance Manager",
      company: "AWS",
      logo: "AWS"
    },
    {
      quote: "The team at PureLatency doesn't just implement our platform — they extend it. We've co-created features that benefit our entire ecosystem.",
      author: "Michael Rodriguez",
      role: "VP of Partnerships",
      company: "Vercel",
      logo: "VC"
    },
    {
      quote: "Working with PureLatency has opened doors to enterprise clients we couldn't reach on our own. True partnership in every sense.",
      author: "David Kim",
      role: "Head of Strategic Alliances",
      company: "MongoDB",
      logo: "MDB"
    }
  ];

  const partnerTiers = [
    {
      tier: 'Strategic',
      color: '#0066cc',
      benefits: ['Executive sponsorship', 'Joint roadmap planning', 'Co-marketing funds', 'Quarterly business reviews']
    },
    {
      tier: 'Premier',
      color: '#10B981',
      benefits: ['Dedicated partner manager', 'Technical account support', 'Joint go-to-market', 'Partner portal access']
    },
    {
      tier: 'Gold',
      color: '#7C3AED',
      benefits: ['Partner enablement', 'Sales training', 'Marketing support', 'Community access']
    },
    {
      tier: 'Partner',
      color: '#F59E0B',
      benefits: ['Basic support', 'Partner directory listing', 'Newsletter inclusion', 'Event invitations']
    }
  ];

  const successStories = [
    {
      title: 'Enterprise Cloud Migration',
      partner: 'AWS',
      description: 'Together with AWS, we helped a Fortune 500 manufacturer migrate 200+ applications to the cloud in 6 months.',
      result: '40% cost reduction, 99.99% uptime',
      icon: '☁️'
    },
    {
      title: 'Real-time Analytics Platform',
      partner: 'MongoDB & Datadog',
      description: 'Collaborated to build a real-time analytics platform processing 10M+ events daily.',
      result: '50% faster insights, 3x data growth',
      icon: '📊'
    },
    {
      title: 'Global Design System',
      partner: 'Figma & Vercel',
      description: 'Co-created a design system now used by 50+ product teams across both companies.',
      result: '70% faster design-to-development',
      icon: '🎨'
    }
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
          <span style={{ color: '#1d1d1f' }}> Partners</span>
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
              🤝 Built on Partnerships
            </div>
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Stronger together<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #0066cc 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                with the best in tech
              </span>
            </h1>
            <p style={{ color: '#86868b', fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              We don't believe in going it alone. Our partners are extensions of our team — 
              technology leaders who share our commitment to quality and innovation. Together, 
              we deliver solutions that are greater than the sum of their parts.
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
                Become a Partner
              </Link>
              <Link
                href="#partners"
                style={{
                  background: 'transparent',
                  color: '#1d1d1f',
                  padding: '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  border: '1px solid #e6e6e9'
                }}
              >
                Meet Our Partners ↓
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
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🌐</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '1rem' }}>Partner Ecosystem</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '25+ active technology partners',
                  '4 strategic alliances',
                  '50+ successful joint projects'
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
          {['all', 'by-category', 'benefits', 'success'].map(tab => (
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
              {tab === 'all' ? 'All Partners' : tab === 'by-category' ? 'By Category' : tab === 'benefits' ? 'Benefits' : 'Success Stories'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'all' && (
          <section id="partners" style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Our Partner Ecosystem
            </h2>
            <p style={{ 
              color: '#86868b', 
              fontSize: '1.2rem', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 3rem'
            }}>
              Technology leaders we're proud to work with
            </p>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem'
            }}>
              {allPartners.map((partner, index) => (
                <div
                  key={partner.name}
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9',
                    textAlign: 'center',
                    transition: 'transform 0.2s',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: partner.tier === 'Strategic' ? '#0066cc' : 
                               partner.tier === 'Premier' ? '#10B981' : 
                               partner.tier === 'Gold' ? '#7C3AED' : '#F59E0B',
                    color: 'white',
                    padding: '0.2rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.6rem',
                    fontWeight: 500
                  }}>
                    {partner.tier}
                  </div>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #0066cc 0%, #7C3AED 100%)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}>
                    {partner.logo}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem', color: '#1d1d1f' }}>
                    {partner.name}
                  </h3>
                  <p style={{ color: '#86868b', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                    {partner.description}
                  </p>
                  <p style={{ color: '#0066cc', fontSize: '0.7rem' }}>
                    Partner since {partner.since}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'by-category' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '3rem',
              textAlign: 'center'
            }}>
              Partners by Category
            </h2>
            {partnerCategories.map(category => (
              <div key={category.name} style={{ marginBottom: '4rem' }}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>{category.icon}</span>
                  <h3 style={{ fontSize: '1.5rem', color: '#1d1d1f' }}>{category.name}</h3>
                </div>
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '1.5rem'
                }}>
                  {category.partners.map(partner => (
                    <div
                      key={partner.name}
                      style={{
                        padding: '1.5rem',
                        borderRadius: '16px',
                        background: '#fafafa',
                        border: '1px solid #e6e6e9',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}
                    >
                      <div style={{
                        width: '50px',
                        height: '50px',
                        background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}CC 100%)`,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: 600
                      }}>
                        {partner.logo}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '0.1rem', color: '#1d1d1f' }}>
                          {partner.name}
                        </h4>
                        <p style={{ color: '#86868b', fontSize: '0.75rem' }}>
                          {partner.tier} · Since {partner.since}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {activeTab === 'benefits' && (
          <>
            {/* Partner Benefits */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                Why Partner With Us
              </h2>
              <p style={{ 
                color: '#86868b', 
                fontSize: '1.2rem', 
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 3rem'
              }}>
                More than a vendor — a true partnership
              </p>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem'
              }}>
                {benefits.map(benefit => (
                  <div
                    key={benefit.title}
                    style={{
                      padding: '2rem',
                      borderRadius: '20px',
                      background: '#fafafa',
                      border: '1px solid #e6e6e9'
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{benefit.icon}</div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                      {benefit.title}
                    </h3>
                    <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                      {benefit.desc}
                    </p>
                    <p style={{ color: '#0066cc', fontSize: '0.9rem', fontWeight: 500 }}>
                      {benefit.stats}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Partner Tiers */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Partnership Tiers
              </h2>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '2rem'
              }}>
                {partnerTiers.map(tier => (
                  <div
                    key={tier.tier}
                    style={{
                      padding: '2rem',
                      borderRadius: '20px',
                      background: '#fafafa',
                      border: `1px solid ${tier.color}30`,
                      borderTop: `4px solid ${tier.color}`
                    }}
                  >
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: tier.color }}>
                      {tier.tier}
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {tier.benefits.map(benefit => (
                        <li key={benefit} style={{ 
                          marginBottom: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          color: '#86868b',
                          fontSize: '0.9rem'
                        }}>
                          <span style={{ color: tier.color }}>✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'success' && (
          <>
            {/* Testimonials */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                What Our Partners Say
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem'
              }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} style={{
                    padding: '2rem',
                    background: '#fafafa',
                    borderRadius: '20px',
                    border: '1px solid #e6e6e9',
                    position: 'relative'
                  }}>
                    <span style={{ fontSize: '4rem', color: '#0066cc', opacity: 0.2, position: 'absolute', top: '10px', left: '20px' }}>"</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #0066cc 0%, #7C3AED 100%)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 600
                      }}>
                        {testimonial.logo}
                      </div>
                      <div>
                        <strong style={{ color: '#1d1d1f', fontSize: '0.9rem' }}>{testimonial.company}</strong>
                      </div>
                    </div>
                    <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1rem', fontStyle: 'italic' }}>
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p style={{ color: '#1d1d1f', fontSize: '0.9rem', fontWeight: 500 }}>
                        {testimonial.author}
                      </p>
                      <p style={{ color: '#86868b', fontSize: '0.8rem' }}>
                        {testimonial.role}
                      </p>
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
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Success Stories
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem'
              }}>
                {successStories.map((story, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '2rem',
                      background: '#fafafa',
                      borderRadius: '20px',
                      border: '1px solid #e6e6e9'
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{story.icon}</div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem', color: '#1d1d1f' }}>
                      {story.title}
                    </h3>
                    <p style={{ color: '#0066cc', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                      with {story.partner}
                    </p>
                    <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                      {story.description}
                    </p>
                    <p style={{ color: '#10B981', fontSize: '0.9rem', fontWeight: 500 }}>
                      {story.result}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* CTA Section */}
        <section
          style={{
            textAlign: 'center',
            padding: '120px 20px',
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
                Stronger together with the best in tech.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Explore</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: '#aaa', textDecoration: 'none' }}>About</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/services" style={{ color: '#aaa', textDecoration: 'none' }}>Services</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/products" style={{ color: '#aaa', textDecoration: 'none' }}>Products</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Connect</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/contact" style={{ color: '#aaa', textDecoration: 'none' }}>Contact</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/careers" style={{ color: '#aaa', textDecoration: 'none' }}>Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/privacy" style={{ color: '#aaa', textDecoration: 'none' }}>Privacy</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/terms" style={{ color: '#aaa', textDecoration: 'none' }}>Terms</Link></li>
              </ul>
            </div>
          </div>
          <div style={{ 
            borderTop: '1px solid #333', 
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#666'
          }}>
            © 2026 PureLatency. Built with partners who make us better.
          </div>
        </div>
      </footer>
    </>
  );
}