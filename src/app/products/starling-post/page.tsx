'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState } from 'react';
import styles from './StarlingPost.module.css'; // adjust path as needed

export default function StarlingPostPage() {
  const [activeTab, setActiveTab] = useState('overview');

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
      name: 'Twitter',
      href: 'https://twitter.com/purelatency',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg',
      color: '#000000',
    }
  ];

  return (
    <>
      <Navbar />

      <main className={styles.container}>
        {/* Social Media */}
        <section className={styles.socialSection}>
          <div className={styles.socialLinks}>
            {socialMedia.map(social => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                style={{ '--social-color': social.color } as React.CSSProperties}
              >
                <img 
                  src={social.icon} 
                  alt={social.name}
                  className={styles.socialIcon}
                />
                <span className={styles.socialName}>{social.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link> / 
          <Link href="/products" className={styles.breadcrumbLink}> Products</Link> / 
          <span className={styles.breadcrumbCurrent}> Starling Post</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              🚀 {product.launchDate} · {product.status}
            </div>
            <h1 className={styles.heroTitle}>
              {product.title}<br />
              <span className={styles.heroTitleGradient}>
                {product.tagline}
              </span>
            </h1>
            <p className={styles.heroText}>
              {product.longDescription}
            </p>
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Get Started Free
              </Link>
              <Link href="#demo" className={styles.buttonSecondary}>
                Watch Demo →
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>💬</div>
              <h3 className={styles.heroCardTitle}>One Workspace, Endless Possibilities</h3>
              <ul className={styles.heroCardList}>
                {[
                  'Messaging + Tasks + AI',
                  '50,000+ happy users',
                  '4.9 star rating'
                ].map((item, i) => (
                  <li key={i} className={styles.heroCardItem}>
                    <span className={styles.heroCardCheck}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <section className={styles.statsBanner}>
          {stats.map(stat => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          {['overview', 'features', 'pricing', 'faq'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <>
            {/* Features Grid */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>Powerful Features, Simple Interface</h2>
              <p className={styles.sectionSubtitle}>
                Everything your team needs to communicate and collaborate effectively
              </p>
              <div className={styles.featuresGrid}>
                {features.map(feature => (
                  <div key={feature.title} className={styles.featureCard}>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDesc}>{feature.desc}</p>
                    <div className={styles.featureDetails}>
                      {feature.details.map(detail => (
                        <span key={detail} className={styles.featureDetail}>
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>Real Results for Real Teams</h2>
              <div className={styles.benefitsGrid}>
                {benefits.map(benefit => (
                  <div key={benefit.title} className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>{benefit.icon}</div>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDesc}>{benefit.desc}</p>
                    <div>
                      <div className={styles.benefitStat}>{benefit.stat}</div>
                      <div className={styles.benefitStatDesc}>{benefit.statDesc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'features' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>Every Feature You Need</h2>
            <div className={styles.featuresTabList}>
              {features.map(feature => (
                <div key={feature.title} className={styles.featureTabItem}>
                  <div className={styles.featureTabIcon}>{feature.icon}</div>
                  <div>
                    <h3 className={styles.featureTabTitle}>{feature.title}</h3>
                    <p className={styles.featureTabDesc}>{feature.desc}</p>
                    <div className={styles.featureTabDetails}>
                      {feature.details.map(detail => (
                        <span key={detail} className={styles.featureTabDetail}>
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
          <section style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>Simple, Transparent Pricing</h2>
            <p className={styles.sectionSubtitle}>
              Choose the plan that's right for your team
            </p>
            <div className={styles.pricingGrid}>
              {pricing.map(plan => (
                <div
                  key={plan.tier}
                  className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}
                >
                  {plan.popular && <span className={styles.popularBadge}>MOST POPULAR</span>}
                  <h3 className={styles.pricingTier}>{plan.tier}</h3>
                  <div className={styles.pricingPrice}>
                    <span className={styles.pricingAmount}>{plan.price}</span>
                    <span className={styles.pricingPeriod}>/{plan.period}</span>
                  </div>
                  <ul className={styles.pricingFeatures}>
                    {plan.features.map(feature => (
                      <li key={feature} className={styles.pricingFeature}>
                        <span className={styles.pricingCheck}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`${styles.pricingButton} ${plan.popular ? styles.popular : ''}`}
                  >
                    {plan.tier === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'faq' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqContainer}>
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Integrations */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Works With Your Favorite Tools</h2>
          <p className={styles.sectionSubtitle}>
            Seamless integrations with the tools you already use
          </p>
          <div className={styles.integrationsGrid}>
            {integrations.map(integration => (
              <div key={integration.name} className={styles.integrationItem}>
                {integration.logo.startsWith('http') ? (
                  <img 
                    src={integration.logo} 
                    alt={integration.name}
                    className={styles.integrationLogo}
                  />
                ) : (
                  <div className={styles.integrationFallback}>
                    {integration.logo}
                  </div>
                )}
                <div className={styles.integrationName}>{integration.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Built With Modern Technology</h2>
          <div className={styles.techStack}>
            {technologies.map(tech => (
              <span key={tech} className={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Loved by Teams Everywhere</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <span className={styles.testimonialQuote}>"</span>
                <p className={styles.testimonialText}>{testimonial.quote}</p>
                <div>
                  <strong className={styles.testimonialAuthor}>{testimonial.author}</strong>
                  <p className={styles.testimonialRole}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Contact Us</h2>
            <p className={styles.ctaText}>Be always in front line, get in touch today.</p>
            <Link href="/contact" className={styles.ctaButton}>
              Contact Us
            </Link>
          </div>
        </section>

        {/* Back to Products */}
        <div className={styles.backLinkContainer}>
          <Link href="/products" className={styles.backLink}>
            ← Back to All Products
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerLogo}>Pure Latency</div>
              <p className={styles.footerText}>
                Building software that solves real problems and makes work better.
              </p>
            </div>
            <div>
              <h4 className={styles.footerHeading}>Product</h4>
              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <Link href="/products/starling-post" className={styles.footerLink}>
                    Starling Post
                  </Link>
                </li>
                <li className={styles.footerListItem}>
                  <Link href="/products/nexus-flow" className={styles.footerLink}>
                    Nexus Flow
                  </Link>
                </li>
                <li className={styles.footerListItem}>
                  <Link href="/products/aether-ai" className={styles.footerLink}>
                    Aether AI
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={styles.footerHeading}>Company</h4>
              <ul className={styles.footerList}>
                {['About', 'Careers', 'Blog', 'Contact'].map(item => (
                  <li key={item} className={styles.footerListItem}>
                    <Link href={`/${item.toLowerCase()}`} className={styles.footerLink}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={styles.footerHeading}>Connect</h4>
              <ul className={styles.footerList}>
                {socialMedia.map(social => (
                  <li key={social.name} className={styles.footerListItem}>
                    <a 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.footerSocialLink}
                    >
                      <img 
                        src={social.icon} 
                        alt={social.name}
                        className={styles.footerSocialIcon}
                      />
                      <span>{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            © 2026 PureLatency. All rights reserved. Crafted with precision in San Francisco.
          </div>
        </div>
      </footer>
    </>
  );
}