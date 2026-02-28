'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductsPage() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const products = [
    {
      id: 'starling-post',
      title: 'Starling Post',
      tagline: 'Intelligent team communication',
      desc: 'A modern communication platform that combines real-time messaging, AI assistance, and task management to help teams work smarter.',
      icon: '🚀',
      color: '#7C3AED',
      metrics: ['50k+ users', '4.9 rating', '99.9% uptime'],
      status: 'Live',
      launchDate: 'Feb 2026'
    },
    {
      id: 'nexus-flow',
      title: 'Nexus Flow',
      tagline: 'Enterprise workflow automation',
      desc: 'Automate complex business processes with an intuitive visual workflow builder and seamless integrations.',
      icon: '⚡',
      color: '#10B981',
      metrics: ['10x faster', '40% cost reduction', 'Enterprise-ready'],
      status: 'Coming Soon',
      launchDate: 'Q3 2026'
    },
    {
      id: 'aether-ai',
      title: 'Aether AI',
      tagline: 'AI-powered analytics',
      desc: 'Transform your data into actionable insights with advanced machine learning models and intuitive dashboards.',
      icon: '🤖',
      color: '#F59E0B',
      metrics: ['99.7% accuracy', 'Real-time', 'Custom models'],
      status: 'Coming Soon',
      launchDate: 'Q4 2026'
    }
  ];

  const stats = [
    { value: '3', label: 'Products Launched', icon: '🚀' },
    { value: '50k+', label: 'Active Users', icon: '👥' },
    { value: '99.9%', label: 'Uptime SLA', icon: '📊' },
    { value: '4.9', label: 'Avg Rating', icon: '⭐' }
  ];

  const features = [
    {
      title: 'Real-time Collaboration',
      desc: 'Work together seamlessly with instant messaging, file sharing, and live updates.',
      icon: '⚡',
      color: '#0066cc'
    },
    {
      title: 'AI-Powered Insights',
      desc: 'Get intelligent recommendations, automated summaries, and predictive analytics.',
      icon: '🤖',
      color: '#7C3AED'
    },
    {
      title: 'Enterprise Security',
      desc: 'Bank-level encryption, SSO, and compliance with industry standards.',
      icon: '🔒',
      color: '#10B981'
    },
    {
      title: 'Seamless Integration',
      desc: 'Connect with your favorite tools through our extensive API and integrations.',
      icon: '🔗',
      color: '#F59E0B'
    }
  ];

  const roadmap = [
    {
      quarter: 'Q1 2026',
      items: ['Starling Post Launch', 'Initial User Testing', 'Feedback Integration'],
      status: 'Completed',
      color: '#10B981'
    },
    {
      quarter: 'Q2 2026',
      items: ['Mobile App Release', 'Enterprise Features', 'API v2'],
      status: 'In Progress',
      color: '#F59E0B'
    },
    {
      quarter: 'Q3 2026',
      items: ['Nexus Flow Beta', 'AI Model Training', 'Partner Integrations'],
      status: 'Planned',
      color: '#6366F1'
    },
    {
      quarter: 'Q4 2026',
      items: ['Aether AI Preview', 'Global Expansion', 'Enterprise Rollout'],
      status: 'Planned',
      color: '#7C3AED'
    }
  ];

  const technologies = [
    // Frontend
    'React', 'Next.js 14', 'TypeScript', 'Tailwind CSS',
    // Backend
    'Node.js', 'Python', 'Go', 'GraphQL',
    // Infrastructure
    'AWS', 'Kubernetes', 'Docker', 'Terraform',
    // AI/ML
    'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain',
    // Database
    'PostgreSQL', 'Redis', 'MongoDB', 'Elasticsearch'
  ];

  const testimonials = [
    {
      quote: "Starling Post has transformed how our remote team communicates. The AI assistant alone saves us hours each week.",
      author: "Sarah Chen",
      role: "Product Lead, InnovateTech",
      product: "Starling Post"
    },
    {
      quote: "The workflow automation capabilities are incredible. We've reduced manual work by 60% since implementing Nexus Flow.",
      author: "Michael Rodriguez",
      role: "CTO, FinScale",
      product: "Nexus Flow"
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
              { name: 'Facebook', href: 'https://facebook.com/purelatency', color: '#111' }
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
          <span style={{ color: '#1d1d1f' }}> Products</span>
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
              ✨ Products Built for Impact
            </div>
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Software that<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #0066cc 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                solves real problems
              </span>
            </h1>
            <p style={{ color: '#86868b', fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Every PureLatency product is crafted with intention—built to address specific challenges 
              that teams face every day. From communication to automation, we build tools that make work better.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link
                href="#products"
                style={{
                  background: '#0066cc',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                Explore Products ↓
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
                Request Early Access
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
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📊</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '1rem' }}>By the Numbers</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '3 products and counting',
                  '50,000+ active users',
                  '99.9% average uptime'
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

        {/* Products Grid */}
        <section id="products" style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Our Products
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Purpose-built tools designed to solve specific challenges and improve how you work
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {products.map(product => (
              <Link
                key={product.id}
                href={product.status === 'Live' ? `/products/${product.id}` : '#'}
                style={{ textDecoration: 'none', cursor: product.status === 'Live' ? 'pointer' : 'default' }}
              >
                <div
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    background: 'white',
                    border: hoveredProduct === product.id ? `2px solid ${product.color}` : '1px solid #e6e6e9',
                    transition: 'all 0.2s ease',
                    height: '100%',
                    transform: hoveredProduct === product.id && product.status === 'Live' ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: hoveredProduct === product.id && product.status === 'Live' ? '0 10px 25px rgba(0,0,0,0.1)' : 'none',
                    opacity: product.status === 'Coming Soon' ? 0.8 : 1
                  }}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{product.icon}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.3rem', color: '#1d1d1f' }}>
                      {product.title}
                    </h3>
                    <span style={{
                      background: product.status === 'Live' ? '#e6f0ff' : '#f5f5f7',
                      color: product.status === 'Live' ? '#0066cc' : '#86868b',
                      padding: '0.2rem 0.8rem',
                      borderRadius: '20px',
                      fontSize: '0.7rem',
                      fontWeight: 500
                    }}>
                      {product.status}
                    </span>
                  </div>
                  <p style={{ color: '#86868b', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{product.tagline}</p>
                  <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                    {product.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    {product.metrics.map(metric => (
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#86868b', fontSize: '0.8rem' }}>{product.launchDate}</span>
                    {product.status === 'Live' && (
                      <span style={{ color: product.color, fontWeight: 500, fontSize: '0.9rem' }}>
                        Learn more →
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Features Across Our Products
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Consistent quality and thoughtful design in everything we build
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {features.map(feature => (
              <div
                key={feature.title}
                style={{
                  padding: '2rem',
                  borderRadius: '20px',
                  background: '#fafafa',
                  border: '1px solid #e6e6e9',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Roadmap */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Product Roadmap
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            What's coming next from PureLatency
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {roadmap.map((quarter, index) => (
              <div key={quarter.quarter} style={{ 
                padding: '2rem',
                borderRadius: '20px',
                background: '#fafafa',
                border: '1px solid #e6e6e9',
                position: 'relative'
              }}>
                {index < roadmap.length - 1 && (
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.3rem', color: '#1d1d1f' }}>
                    {quarter.quarter}
                  </h3>
                  <span style={{
                    background: `${quarter.color}20`,
                    color: quarter.color,
                    padding: '0.2rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontWeight: 500
                  }}>
                    {quarter.status}
                  </span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {quarter.items.map(item => (
                    <li key={item} style={{ 
                      color: '#86868b', 
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}>
                      <span style={{ color: '#0066cc' }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
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
            Built With
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Modern technologies powering our products
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
            What Our Users Say
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
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
                <p style={{ color: '#1d1d1f', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
                  {testimonial.quote}
                </p>
                <div>
                  <strong style={{ color: '#1d1d1f' }}>{testimonial.author}</strong>
                  <p style={{ color: '#86868b', fontSize: '0.9rem', margin: '0.2rem 0 0 0' }}>
                    {testimonial.role} · {testimonial.product}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

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
                Building software that solves real problems and makes work better.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Products</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {products.map(product => (
                  <li key={product.id} style={{ marginBottom: '0.5rem' }}>
                    <Link href={`/products/${product.id}`} style={{ color: '#aaa', textDecoration: 'none' }}>{product.title}</Link>
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
                {['Facebook', 'Twitter','Instagram'].map(item => (
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