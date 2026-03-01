'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function StarlingPostPage() {
  const [activeTab, setActiveTab] = useState('overview');
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

  const product = {
    title: 'Starling Post',
    tagline: 'Intelligent team communication',
    description: 'A modern communication platform that combines real-time messaging, AI assistance, and task management to help teams work smarter.',
    longDescription: 'Starling Post transforms how teams communicate by bringing together messaging, tasks, and AI in one seamless experience. Stop switching between apps and start getting more done.',
    icon: '🚀',
    color: '#7C3AED',
    launchDate: 'February 2026',
    status: 'Live'
  };

  const stats = [
    { value: '50k+', label: 'Active Users', icon: '👥' },
    { value: '4.9', label: 'App Store Rating', icon: '⭐' },
    { value: '99.9%', label: 'Uptime SLA', icon: '📊' },
    { value: '10+', label: 'Integrations', icon: '🔗' }
  ];

  const features = [
    {
      title: 'Real-time Messaging',
      desc: 'Instant messaging with threads, reactions, and rich media support for seamless team communication.',
      icon: '💬',
      color: '#7C3AED',
      details: ['Threaded conversations', 'Emoji reactions', 'File sharing', 'Search history']
    },
    {
      title: 'AI Assistant',
      desc: 'Smart AI that summarizes conversations, suggests replies, and creates action items automatically.',
      icon: '🤖',
      color: '#10B981',
      details: ['Conversation summaries', 'Smart replies', 'Action item extraction', 'Meeting notes']
    },
    {
      title: 'Task Management',
      desc: 'Create, assign, and track tasks directly within conversations without switching contexts.',
      icon: '✅',
      color: '#F59E0B',
      details: ['In-chat tasks', 'Assignments', 'Due dates', 'Progress tracking']
    },
    {
      title: 'Enterprise Security',
      desc: 'Bank-level encryption and security features to keep your team\'s conversations private.',
      icon: '🔒',
      color: '#6366F1',
      details: ['End-to-end encryption', 'SSO integration', 'Audit logs', 'Compliance ready']
    }
  ];

  const benefits = [
    {
      title: 'Save 5+ Hours Weekly',
      desc: 'Teams report saving an average of 5 hours per week with AI-powered summaries and smart replies.',
      icon: '⏱️',
      stat: '5h',
      statDesc: 'weekly savings'
    },
    {
      title: '60% Faster Decisions',
      desc: 'Centralized communication and task management leads to faster decision-making.',
      icon: '⚡',
      stat: '60%',
      statDesc: 'faster decisions'
    },
    {
      title: '90% Less Context Switching',
      desc: 'Keep everything in one place instead of jumping between multiple apps.',
      icon: '🔄',
      stat: '90%',
      statDesc: 'less switching'
    },
    {
      title: '4.9 Star Rating',
      desc: 'Loved by teams across the globe for its intuitive design and powerful features.',
      icon: '⭐',
      stat: '4.9',
      statDesc: 'user rating'
    }
  ];

  const integrations = [
    { name: 'Slack', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/slack.svg' },
    { name: 'Microsoft Teams', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftteams.svg' },
    { name: 'Google Drive', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googledrive.svg' },
    { name: 'Trello', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/trello.svg' },
    { name: 'Asana', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/asana.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg' },
    { name: 'Zoom', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zoom.svg' },
    { name: 'Calendar', logo: '📅' }
  ];

  const pricing = [
    {
      tier: 'Free',
      price: '$0',
      period: 'forever',
      features: ['Up to 10 users', 'Basic messaging', 'File sharing', 'Search (30 days)'],
      color: '#86868b'
    },
    {
      tier: 'Pro',
      price: '$8',
      period: 'per user/month',
      features: ['Unlimited users', 'AI assistant', 'Task management', 'Unlimited search', 'Integrations'],
      color: '#7C3AED',
      popular: true
    },
    {
      tier: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: ['SSO', 'Audit logs', 'SLA guarantee', 'Dedicated support', 'On-premise option'],
      color: '#1d1d1f'
    }
  ];

  const faqs = [
    {
      question: 'What makes Starling Post different from Slack or Teams?',
      answer: 'Starling Post combines messaging, AI assistance, and task management in one unified interface. Instead of switching between a chat app and a task manager, everything works together seamlessly.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, all conversations are encrypted end-to-end. We also offer SSO, audit logs, and compliance with major security standards for enterprise customers.'
    },
    {
      question: 'Can I try it for free?',
      answer: 'Absolutely! Our free tier supports up to 10 users with core messaging features. No credit card required.'
    },
    {
      question: 'What platforms does it support?',
      answer: 'Starling Post is available on web, desktop (Windows, Mac, Linux), and mobile (iOS, Android).'
    }
  ];

  const technologies = [
    'React', 'Next.js 14', 'TypeScript', 'Node.js',
    'GraphQL', 'WebSockets', 'PostgreSQL', 'Redis',
    'TensorFlow', 'OpenAI', 'AWS', 'Kubernetes'
  ];

  const testimonials = [
    {
      quote: "Starling Post has transformed how our remote team communicates. The AI assistant alone saves us hours each week.",
      author: "Sarah Chen",
      role: "Product Lead, InnovateTech"
    },
    {
      quote: "The task management integration is brilliant. We've reduced our tool stack from 5 apps to just Starling Post.",
      author: "Michael Rodriguez",
      role: "CTO, FinScale"
    }
  ];

  // Social media icons with image URLs - Twitter removed
  const socialMedia = [
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/purelatency',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg',
      color: '#E4405F'
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

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
    gap: '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const benefitsGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
    gap: '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const pricingGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
    gap: '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const integrationsGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(4, 1fr)' : 'repeat(8, 1fr)',
    gap: isMobile ? '0.8rem' : '1rem',
  };

  const testimonialsGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
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
        {/* Social Media - With Icons (Twitter Removed) */}
        <section style={{ 
          display: 'flex', 
          justifyContent: isMobile ? 'center' : 'flex-end', 
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '16px' : '24px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {socialMedia.map(social => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                <img 
                  src={social.icon} 
                  alt={social.name}
                  style={{ 
                    width: isMobile ? '20px' : '24px', 
                    height: isMobile ? '20px' : '24px',
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
          <Link href="/products" style={{ color: '#86868b', textDecoration: 'none' }}> Products</Link> / 
          <span style={{ color: '#1d1d1f' }}> Starling Post</span>
        </div>

        {/* Hero Section */}
        <div style={heroGridStyle}>
          <div>
            <div style={{ 
              display: 'inline-block',
              background: 'rgba(124,58,237,0.1)',
              color: product.color,
              padding: isMobile ? '0.4rem 1.2rem' : '0.5rem 1.5rem',
              borderRadius: '30px',
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              marginBottom: '1.5rem',
              textAlign: (isMobile ? 'center' : 'left') as 'center' | 'left',
              width: isMobile ? '100%' : 'auto',
            }}>
              🚀 {product.launchDate} · {product.status}
            </div>
            <h1 style={heroTitleStyle}>
              {product.title}<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #7C3AED 0%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                {product.tagline}
              </span>
            </h1>
            <p style={{ 
              color: '#86868b', 
              fontSize: isMobile ? '1rem' : '1.2rem', 
              lineHeight: '1.7', 
              marginBottom: '2rem',
              textAlign: (isMobile ? 'center' : 'left') as 'center' | 'left',
            }}>
              {product.longDescription}
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
                  background: product.color,
                  color: 'white',
                  padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  textAlign: 'center' as const,
                  width: isMobile ? '100%' : 'auto',
                }}
              >
                Get Started Free
              </Link>
              <Link
                href="#demo"
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
                Watch Demo →
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
              background: 'rgba(124,58,237,0.1)',
              borderRadius: '50%'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-50px',
              left: '-50px',
              width: isMobile ? '150px' : '200px',
              height: isMobile ? '150px' : '200px',
              background: 'rgba(16,185,129,0.1)',
              borderRadius: '50%'
            }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: isMobile ? '2.5rem' : '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>💬</div>
              <h3 style={{ 
                fontSize: isMobile ? '1.5rem' : '1.8rem', 
                fontWeight: 400, 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>One Workspace, Endless Possibilities</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Messaging + Tasks + AI',
                  '50,000+ happy users',
                  '4.9 star rating'
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
                    <span style={{ color: '#7C3AED' }}>✓</span>
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
                color: '#7C3AED', 
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
          {['overview', 'features', 'pricing', 'faq'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: 'none',
                border: 'none',
                padding: isMobile ? '0.5rem 0.8rem' : '0.5rem 1rem',
                fontSize: isMobile ? '0.9rem' : '1rem',
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
            {/* Features Grid */}
            <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '2rem' : '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                Powerful Features, Simple Interface
              </h2>
              <p style={{ 
                color: '#86868b', 
                fontSize: isMobile ? '1rem' : '1.2rem', 
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 3rem',
                padding: isMobile ? '0 1rem' : '0'
              }}>
                Everything your team needs to communicate and collaborate effectively
              </p>
              <div style={featuresGridStyle}>
                {features.map(feature => (
                  <div
                    key={feature.title}
                    style={{
                      padding: isMobile ? '1.5rem' : '2rem',
                      borderRadius: '20px',
                      background: '#fafafa',
                      border: '1px solid #e6e6e9'
                    }}
                  >
                    <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
                    <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.3rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                      {feature.title}
                    </h3>
                    <p style={{ color: '#86868b', fontSize: isMobile ? '0.9rem' : '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                      {feature.desc}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {feature.details.map(detail => (
                        <span
                          key={detail}
                          style={{
                            background: 'white',
                            color: '#666',
                            padding: '0.2rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: isMobile ? '0.75rem' : '0.8rem',
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

            {/* Benefits */}
            <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '2rem' : '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Real Results for Real Teams
              </h2>
              <div style={benefitsGridStyle}>
                {benefits.map(benefit => (
                  <div
                    key={benefit.title}
                    style={{
                      padding: isMobile ? '1.5rem' : '2rem',
                      borderRadius: '20px',
                      background: '#fafafa',
                      border: '1px solid #e6e6e9',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '1rem' }}>{benefit.icon}</div>
                    <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                      {benefit.title}
                    </h3>
                    <p style={{ color: '#86868b', fontSize: isMobile ? '0.9rem' : '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                      {benefit.desc}
                    </p>
                    <div>
                      <div style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', fontWeight: 300, color: '#7C3AED' }}>
                        {benefit.stat}
                      </div>
                      <div style={{ color: '#86868b', fontSize: isMobile ? '0.8rem' : '0.85rem' }}>{benefit.statDesc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'features' && (
          <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
            <h2 style={{ 
              fontSize: isMobile ? '2rem' : '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Every Feature You Need
            </h2>
            <div style={{ display: 'grid', gap: '2rem' }}>
              {features.map(feature => (
                <div
                  key={feature.title}
                  style={{
                    padding: isMobile ? '1.5rem' : '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9',
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr',
                    gap: isMobile ? '1rem' : '2rem',
                    alignItems: 'center',
                    textAlign: isMobile ? 'center' : 'left',
                  }}
                >
                  <div style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}>{feature.icon}</div>
                  <div>
                    <h3 style={{ fontSize: isMobile ? '1.3rem' : '1.5rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                      {feature.title}
                    </h3>
                    <p style={{ color: '#86868b', fontSize: isMobile ? '0.95rem' : '1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                      {feature.desc}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                      {feature.details.map(detail => (
                        <span
                          key={detail}
                          style={{
                            background: 'white',
                            color: '#666',
                            padding: isMobile ? '0.3rem 0.8rem' : '0.3rem 1rem',
                            borderRadius: '20px',
                            fontSize: isMobile ? '0.85rem' : '0.9rem',
                            border: '1px solid #e6e6e9'
                          }}
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'pricing' && (
          <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
            <h2 style={{ 
              fontSize: isMobile ? '2rem' : '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Simple, Transparent Pricing
            </h2>
            <p style={{ 
              color: '#86868b', 
              fontSize: isMobile ? '1rem' : '1.2rem', 
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              Choose the plan that's right for your team
            </p>
            <div style={pricingGridStyle}>
              {pricing.map(plan => (
                <div
                  key={plan.tier}
                  style={{
                    padding: isMobile ? '1.5rem' : '2rem',
                    borderRadius: '20px',
                    background: plan.popular ? '#fafafa' : 'white',
                    border: plan.popular ? `2px solid ${plan.color}` : '1px solid #e6e6e9',
                    position: 'relative',
                    transform: plan.popular && !isMobile ? 'scale(1.05)' : 'scale(1)',
                    zIndex: plan.popular ? 2 : 1
                  }}
                >
                  {plan.popular && (
                    <span style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: plan.color,
                      color: 'white',
                      padding: '0.2rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 500
                    }}>
                      MOST POPULAR
                    </span>
                  )}
                  <h3 style={{ fontSize: isMobile ? '1.3rem' : '1.5rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                    {plan.tier}
                  </h3>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: isMobile ? '2rem' : '2.5rem', fontWeight: 300, color: plan.color }}>{plan.price}</span>
                    <span style={{ color: '#86868b', fontSize: '0.9rem' }}>/{plan.period}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                    {plan.features.map(feature => (
                      <li key={feature} style={{ 
                        marginBottom: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#86868b',
                        fontSize: isMobile ? '0.9rem' : '1rem',
                      }}>
                        <span style={{ color: '#7C3AED' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: isMobile ? '0.7rem' : '0.8rem',
                      background: plan.popular ? plan.color : 'transparent',
                      color: plan.popular ? 'white' : plan.color,
                      border: plan.popular ? 'none' : `1px solid ${plan.color}`,
                      borderRadius: '30px',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: isMobile ? '0.9rem' : '1rem',
                    }}
                  >
                    {plan.tier === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'faq' && (
          <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
            <h2 style={{ 
              fontSize: isMobile ? '2rem' : '2.5rem', 
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
              margin: '0 auto',
              padding: isMobile ? '0 0.5rem' : '0'
            }}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  style={{
                    padding: isMobile ? '1.2rem' : '1.5rem',
                    borderRadius: '12px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9'
                  }}
                >
                  <h3 style={{ fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                    {faq.question}
                  </h3>
                  <p style={{ color: '#86868b', fontSize: isMobile ? '0.9rem' : '0.95rem', lineHeight: '1.6' }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Integrations */}
        <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
          <h2 style={{ 
            fontSize: isMobile ? '2rem' : '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Works With Your Favorite Tools
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: isMobile ? '1rem' : '1.2rem', 
            textAlign: 'center',
            marginBottom: '3rem',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Seamless integrations with the tools you already use
          </p>
          <div style={integrationsGridStyle}>
            {integrations.map(integration => (
              <div
                key={integration.name}
                style={{
                  padding: isMobile ? '0.8rem' : '1rem',
                  background: '#fafafa',
                  borderRadius: '12px',
                  textAlign: 'center',
                  border: '1px solid #e6e6e9'
                }}
              >
                {integration.logo.startsWith('http') ? (
                  <img 
                    src={integration.logo} 
                    alt={integration.name}
                    style={{ 
                      width: isMobile ? '24px' : '32px', 
                      height: isMobile ? '24px' : '32px',
                      margin: '0 auto 0.5rem',
                      display: 'block'
                    }}
                  />
                ) : (
                  <div style={{
                    width: isMobile ? '32px' : '40px',
                    height: isMobile ? '32px' : '40px',
                    background: 'white',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.5rem',
                    color: '#1d1d1f',
                    fontSize: isMobile ? '1rem' : '1.2rem',
                    fontWeight: 600,
                    border: '1px solid #e6e6e9'
                  }}>
                    {integration.logo}
                  </div>
                )}
                <div style={{ 
                  fontSize: isMobile ? '0.7rem' : '0.8rem', 
                  color: '#86868b',
                  whiteSpace: 'nowrap' as const,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
          <h2 style={{ 
            fontSize: isMobile ? '2rem' : '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Built With Modern Technology
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: isMobile ? '0.5rem' : '1rem',
            padding: isMobile ? '1.5rem' : '2rem',
            background: '#fafafa',
            borderRadius: '20px'
          }}>
            {technologies.map(tech => (
              <span
                key={tech}
                style={{
                  background: 'white',
                  color: '#1d1d1f',
                  padding: isMobile ? '0.4rem 0.8rem' : '0.6rem 1.2rem',
                  borderRadius: '30px',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
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
        <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
          <h2 style={{ 
            fontSize: isMobile ? '2rem' : '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Loved by Teams Everywhere
          </h2>
          <div style={testimonialsGridStyle}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{
                padding: isMobile ? '1.5rem' : '2rem',
                background: '#fafafa',
                borderRadius: '20px',
                border: '1px solid #e6e6e9',
                position: 'relative'
              }}>
                <span style={{ 
                  fontSize: isMobile ? '3rem' : '4rem', 
                  color: '#7C3AED', 
                  opacity: 0.2, 
                  position: 'absolute', 
                  top: '10px', 
                  left: '20px' 
                }}>"</span>
                <p style={{ 
                  color: '#1d1d1f', 
                  fontSize: isMobile ? '0.95rem' : '1rem', 
                  lineHeight: '1.8', 
                  marginBottom: '1.5rem', 
                  position: 'relative', 
                  zIndex: 2 
                }}>
                  {testimonial.quote}
                </p>
                <div>
                  <strong style={{ color: '#1d1d1f', fontSize: isMobile ? '0.95rem' : '1rem' }}>{testimonial.author}</strong>
                  <p style={{ color: '#86868b', fontSize: isMobile ? '0.85rem' : '0.9rem', margin: '0.2rem 0 0 0' }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          marginTop: '2rem',
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

        {/* Back to Products */}
        <div style={{ 
          borderTop: '1px solid #e6e6e9',
          paddingTop: '2rem',
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <Link 
            href="/products" 
            style={{ 
              color: '#86868b', 
              textDecoration: 'none', 
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              display: 'inline-block'
            }}
          >
            ← Back to All Products
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
                Building software that solves real problems and makes work better.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: isMobile ? '1.1rem' : '1.2rem' }}>Product</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/products/starling-post" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                    Starling Post
                  </Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/products/nexus-flow" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                    Nexus Flow
                  </Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/products/aether-ai" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                    Aether AI
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: isMobile ? '1.1rem' : '1.2rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['About', 'Careers', 'Blog', 'Contact'].map(item => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <Link href={`/${item.toLowerCase()}`} style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: isMobile ? '1.1rem' : '1.2rem' }}>Connect</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {socialMedia.map(social => (
                  <li key={social.name} style={{ marginBottom: '0.5rem' }}>
                    <a 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: '#aaa', 
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        justifyContent: isMobile ? 'center' : 'flex-start'
                      }}
                    >
                      <img 
                        src={social.icon} 
                        alt={social.name}
                        style={{ width: '20px', height: '20px' }}
                      />
                      <span style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>{social.name}</span>
                    </a>
                  </li>
                ))}
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
            © 2026 PureLatency. All rights reserved. Crafted with precision in San Francisco.
          </div>
        </div>
      </footer>
    </>
  );
}