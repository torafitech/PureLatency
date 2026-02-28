'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { useState } from 'react';

export default function PartnersOverviewPage() {
  const [activeTab, setActiveTab] = useState('ecosystem');

  const stats = [
    { value: '25+', label: 'Active Partners', icon: '🤝' },
    { value: '50+', label: 'Joint Projects', icon: '🚀' },
    { value: '4', label: 'Strategic Alliances', icon: '⭐' },
    { value: '100%', label: 'Partner Retention', icon: '📈' }
  ];

  const ecosystem = [
    {
      title: 'Cloud Infrastructure',
      desc: 'We partner with leading cloud providers to deliver scalable, reliable infrastructure for our clients.',
      partners: ['AWS', 'Google Cloud', 'Microsoft Azure', 'DigitalOcean'],
      icon: '☁️',
      color: '#0066cc',
      count: '4 partners'
    },
    {
      title: 'Technology Platforms',
      desc: 'Deep integrations with platforms that power modern applications.',
      partners: ['Vercel', 'MongoDB', 'Elastic', 'Datadog', 'Auth0'],
      icon: '⚙️',
      color: '#10B981',
      count: '5 partners'
    },
    {
      title: 'Development Tools',
      desc: 'Tools that help our teams build better software, faster.',
      partners: ['GitHub', 'GitLab', 'Figma', 'Slack', 'Jira'],
      icon: '🛠️',
      color: '#7C3AED',
      count: '5 partners'
    },
    {
      title: 'Implementation Partners',
      desc: 'Global consulting and implementation partners who extend our reach.',
      partners: ['Deloitte', 'Accenture', 'IBM', 'TCS'],
      icon: '🏢',
      color: '#F59E0B',
      count: '4 partners'
    }
  ];

  const theBenefits = [
    {
      title: 'For Our Partners',
      items: [
        'Access to enterprise clients',
        'Joint go-to-market programs',
        'Technical collaboration',
        'Co-innovation opportunities',
        'Dedicated partner support'
      ],
      icon: '🤝',
      color: '#0066cc'
    },
    {
      title: 'For Our Clients',
      items: [
        'Best-in-class technology stack',
        'Seamless integrations',
        'Certified expertise',
        'Vendor-backed support',
        'Future-proof solutions'
      ],
      icon: '👥',
      color: '#10B981'
    }
  ];

  const theApproach = [
    {
      step: '01',
      title: 'Strategic Alignment',
      desc: 'We choose partners who share our values and commitment to quality.',
      icon: '🎯',
      color: '#0066cc'
    },
    {
      step: '02',
      title: 'Technical Integration',
      desc: 'Deep technical collaboration to ensure seamless integration.',
      icon: '⚙️',
      color: '#10B981'
    },
    {
      step: '03',
      title: 'Joint Go-to-Market',
      desc: 'Collaborative marketing and sales initiatives.',
      icon: '📢',
      color: '#7C3AED'
    },
    {
      step: '04',
      title: 'Continuous Evolution',
      desc: 'Regular reviews and adaptation to market needs.',
      icon: '🔄',
      color: '#F59E0B'
    }
  ];

  const theNumbers = [
    {
      category: 'Partner Ecosystem',
      stats: [
        { value: '25+', label: 'Technology Partners' },
        { value: '4', label: 'Strategic Alliances' },
        { value: '15+', label: 'Integration Partners' }
      ]
    },
    {
      category: 'Joint Impact',
      stats: [
        { value: '50+', label: 'Client Projects' },
        { value: '$10M+', label: 'Joint Revenue' },
        { value: '95%', label: 'Renewal Rate' }
      ]
    },
    {
      category: 'Partner Success',
      stats: [
        { value: '100%', label: 'Satisfaction' },
        { value: '4.9/5', label: 'Partner Rating' },
        { value: '24/7', label: 'Support Access' }
      ]
    }
  ];

  const theTestimonials = [
    {
      quote: "PureLatency's partner program is unlike any other. They treat us as true collaborators, not just another vendor in their ecosystem.",
      author: "Sarah Chen",
      role: "Partner Alliance Manager",
      company: "AWS",
      logo: "AWS"
    },
    {
      quote: "The technical depth of the PureLatency team has helped us co-innovate in ways we never expected. True partnership in every sense.",
      author: "Michael Rodriguez",
      role: "VP of Partnerships",
      company: "Vercel",
      logo: "VC"
    },
    {
      quote: "Working with PureLatency has opened doors to enterprise clients we couldn't reach on our own. The ROI has been exceptional.",
      author: "David Kim",
      role: "Head of Strategic Alliances",
      company: "MongoDB",
      logo: "MDB"
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
          <Link href="/partners" style={{ color: '#86868b', textDecoration: 'none' }}> Partners</Link> / 
          <span style={{ color: '#1d1d1f' }}> Overview</span>
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
              🌐 Our Partner Ecosystem
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
                with the best in class
              </span>
            </h1>
            <p style={{ color: '#86868b', fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              We believe that great software is built through collaboration. Our partner ecosystem 
              extends our capabilities, deepens our expertise, and ensures our clients always have 
              access to the best technology and talent. Here's how we work with partners and what 
              it means for you.
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
                href="#ecosystem"
                style={{
                  background: 'transparent',
                  color: '#1d1d1f',
                  padding: '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  border: '1px solid #e6e6e9'
                }}
              >
                Explore Ecosystem ↓
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
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🤝</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '1rem' }}>Partner Impact</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '25+ technology partners',
                  '50+ successful joint projects',
                  '100% partner retention rate'
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
          {['ecosystem', 'approach', 'numbers', 'voices'].map(tab => (
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
              {tab === 'ecosystem' ? 'Ecosystem' : tab === 'approach' ? 'Approach' : tab === 'numbers' ? 'By the Numbers' : 'Partner Voices'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'ecosystem' && (
          <section id="ecosystem" style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '3rem',
              textAlign: 'center'
            }}>
              Our Partner Ecosystem
            </h2>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              {ecosystem.map(item => (
                <div
                  key={item.title}
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                    <h3 style={{ fontSize: '1.3rem', color: '#1d1d1f' }}>{item.title}</h3>
                  </div>
                  <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                    {item.desc}
                  </p>
                  <div style={{ 
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    {item.partners.map(partner => (
                      <span
                        key={partner}
                        style={{
                          background: 'white',
                          color: item.color,
                          padding: '0.3rem 0.8rem',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          border: `1px solid ${item.color}30`,
                          fontWeight: 500
                        }}
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                  <p style={{ color: item.color, fontSize: '0.9rem', fontWeight: 500 }}>
                    {item.count}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'approach' && (
          <>
            {/* Our Approach */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                Our Partnership Approach
              </h2>
              <p style={{ 
                color: '#86868b', 
                fontSize: '1.2rem', 
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 3rem'
              }}>
                How we build and nurture lasting partnerships
              </p>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '2rem'
              }}>
                {theApproach.map((item, index) => (
                  <div key={item.step} style={{ 
                    padding: '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9',
                    position: 'relative'
                  }}>
                    {index < theApproach.length - 1 && (
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
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                    <div style={{ 
                      fontSize: '1.2rem',
                      color: item.color,
                      fontWeight: 500,
                      marginBottom: '0.5rem'
                    }}>
                      {item.step}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#86868b', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Who Benefits
              </h2>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem'
              }}>
                {theBenefits.map(benefit => (
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
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: benefit.color }}>
                      {benefit.title}
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {benefit.items.map(item => (
                        <li key={item} style={{ 
                          marginBottom: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#86868b'
                        }}>
                          <span style={{ color: benefit.color }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'numbers' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              By the Numbers
            </h2>
            <p style={{ 
              color: '#86868b', 
              fontSize: '1.2rem', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 3rem'
            }}>
              The measurable impact of our partnerships
            </p>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem'
            }}>
              {theNumbers.map(category => (
                <div
                  key={category.category}
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9'
                  }}
                >
                  <h3 style={{ 
                    fontSize: '1.2rem', 
                    marginBottom: '1.5rem', 
                    color: '#0066cc',
                    borderBottom: '1px solid #e6e6e9',
                    paddingBottom: '0.5rem'
                  }}>
                    {category.category}
                  </h3>
                  {category.stats.map(stat => (
                    <div key={stat.label} style={{ marginBottom: '1rem' }}>
                      <div style={{ fontSize: '1.8rem', fontWeight: 300, color: '#1d1d1f' }}>
                        {stat.value}
                      </div>
                      <div style={{ color: '#86868b', fontSize: '0.85rem' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'voices' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Partner Voices
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem'
            }}>
              {theTestimonials.map((testimonial, index) => (
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
        )}

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
        {/* Back to Partners */}
        <div style={{ 
          borderTop: '1px solid #e6e6e9',
          paddingTop: '2rem',
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <Link 
            href="/partners" 
            style={{ 
              color: '#86868b', 
              textDecoration: 'none', 
              fontSize: '0.9rem',
              display: 'inline-block'
            }}
          >
            ← Back to Partners
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
                Building the future through powerful partnerships.
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
            © 2026 PureLatency. Partnerships that make a difference.
          </div>
        </div>
      </footer>
    </>
  );
}