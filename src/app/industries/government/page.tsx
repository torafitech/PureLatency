'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function GovernmentPage() {
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

  const industry = {
    title: 'Government',
    tagline: 'Secure. Compliant. Accessible.',
    description: 'Digital solutions designed for the public sector with security, compliance, and accessibility as top priorities.',
    longDescription: 'We help government agencies modernize services and improve citizen experience through secure, accessible technology that meets the highest compliance standards.',
    icon: '⚖️',
    color: '#10B981',
    stats: [
      { value: '10+', label: 'Agencies Served', icon: '🏛️' },
      { value: '1M+', label: 'Citizens Served', icon: '👥' },
      { value: '99.9%', label: 'Uptime SLA', icon: '📊' },
      { value: '24/7', label: 'Security Monitoring', icon: '🔒' }
    ]
  };

  const challenges = [
    {
      title: 'Legacy Systems',
      desc: 'Outdated infrastructure hindering efficiency and citizen experience.',
      icon: '🏛️',
      impact: '70% of IT budgets spent on maintenance'
    },
    {
      title: 'Security Compliance',
      desc: 'Meeting strict federal and state security requirements.',
      icon: '🔒',
      impact: 'FedRAMP, FISMA, CJIS compliance needed'
    },
    {
      title: 'Accessibility',
      desc: 'Ensuring services are available to all citizens regardless of ability.',
      icon: '♿',
      impact: 'WCAG 2.1 AA compliance required by law'
    },
    {
      title: 'Budget Constraints',
      desc: 'Delivering more value with limited public funds.',
      icon: '💰',
      impact: '40% efficiency gap to close'
    }
  ];

  const solutions = [
    {
      title: 'Digital Services',
      tagline: 'Citizen-first experience',
      desc: 'Modern, accessible portals and applications that make government services easy to use.',
      icon: '🏛️',
      color: '#10B981',
      features: [
        'Citizen portals',
        'Permit systems',
        'Public records',
        'Benefit applications'
      ],
      benefits: [
        '2x citizen satisfaction',
        '24/7 service availability',
        '50% faster processing'
      ]
    },
    {
      title: 'Internal Tools',
      tagline: 'Empower government employees',
      desc: 'Streamlined workflows and tools that help staff work more efficiently.',
      icon: '⚙️',
      color: '#F59E0B',
      features: [
        'Case management',
        'Document processing',
        'Analytics dashboards',
        'Resource planning'
      ],
      benefits: [
        '30% efficiency gain',
        'Reduced paperwork',
        'Better decision-making'
      ]
    },
    {
      title: 'Data Systems',
      tagline: 'Secure, compliant data',
      desc: 'Robust data management with privacy protection and compliance built in.',
      icon: '📊',
      color: '#7C3AED',
      features: [
        'Data warehouses',
        'Compliance reporting',
        'Open data initiatives',
        'Privacy protection'
      ],
      benefits: [
        '100% compliance',
        'Real-time insights',
        'Transparent governance'
      ]
    },
    {
      title: 'Legacy Modernization',
      tagline: 'Modernize, don\'t replace',
      desc: 'Update critical government systems while minimizing disruption.',
      icon: '🔄',
      color: '#0066cc',
      features: [
        'Mainframe migration',
        'System integration',
        'Cloud adoption',
        'Security updates'
      ],
      benefits: [
        '60% cost reduction',
        'Enhanced security',
        'Future-ready'
      ]
    }
  ];

  const successStories = [
    {
      agency: 'State of California',
      industry: 'State Government',
      challenge: 'Outdated benefits portal causing delays for millions of citizens',
      solution: 'Modernized portal with cloud-native architecture and accessibility compliance',
      result: '2M+ monthly users, 99.9% uptime, 100% WCAG compliant',
      metrics: ['2M+ users', '99.9% uptime', '100% compliant'],
      icon: '🏛️',
      color: '#10B981'
    },
    {
      agency: 'City of Austin',
      industry: 'Municipal Government',
      challenge: 'Manual permit process causing 6-month delays',
      solution: 'Digital permit system with automated workflows and online payments',
      result: '90% faster permits, 40% revenue increase, 50k+ applications processed',
      metrics: ['90% faster', '40% revenue', '50k+ apps'],
      icon: '🏙️',
      color: '#F59E0B'
    },
    {
      agency: 'Federal Health Agency',
      industry: 'Federal Government',
      challenge: 'HIPAA compliance and security concerns with legacy systems',
      solution: 'Secure, compliant data platform with end-to-end encryption',
      result: '100% HIPAA compliant, zero security incidents, 99.99% uptime',
      metrics: ['100% compliant', 'Zero incidents', '99.99% uptime'],
      icon: '⚕️',
      color: '#7C3AED'
    }
  ];

  const capabilities = [
    {
      title: 'FedRAMP Ready',
      desc: 'Solutions built to meet federal security requirements',
      icon: '✓',
      stat: '100%',
      statDesc: 'compliance ready'
    },
    {
      title: 'Accessibility First',
      desc: 'WCAG 2.1 AA compliant by design',
      icon: '♿',
      stat: '100%',
      statDesc: 'accessible'
    },
    {
      title: 'Security Monitoring',
      desc: '24/7 threat detection and response',
      icon: '🔒',
      stat: '24/7',
      statDesc: 'monitoring'
    },
    {
      title: 'Open Data',
      desc: 'Transparent, accessible government data',
      icon: '📊',
      stat: '100%',
      statDesc: 'transparency'
    }
  ];

  const compliance = [
    { name: 'FedRAMP', logo: 'FR', type: 'Federal' },
    { name: 'FISMA', logo: 'FM', type: 'Federal' },
    { name: 'CJIS', logo: 'CJ', type: 'Criminal Justice' },
    { name: 'HIPAA', logo: 'HP', type: 'Healthcare' },
    { name: 'SOC 2', logo: 'S2', type: 'Security' },
    { name: 'ISO 27001', logo: 'IS', type: 'Security' },
    { name: 'WCAG', logo: 'WA', type: 'Accessibility' },
    { name: 'Section 508', logo: '508', type: 'Accessibility' }
  ];

  const faqs = [
    {
      question: 'How do you ensure FedRAMP compliance?',
      answer: 'We follow a security-first approach with continuous monitoring, encryption, and strict access controls. Our solutions are built to meet FedRAMP Moderate and High impact levels.'
    },
    {
      question: 'Can you integrate with existing government systems?',
      answer: 'Yes, we specialize in integrating with legacy government systems through secure APIs and modern integration patterns.'
    },
    {
      question: 'How do you ensure accessibility?',
      answer: 'We follow WCAG 2.1 AA standards from day one, with automated testing and user testing with people with disabilities.'
    },
    {
      question: 'What about ongoing support and maintenance?',
      answer: 'We provide 24/7 support with dedicated teams, regular security updates, and continuous improvement based on user feedback.'
    }
  ];

  const technologies = [
    'AWS GovCloud', 'Azure Government', 'Okta', 'Ping Identity',
    'PostgreSQL', 'MongoDB', 'Elasticsearch', 'Kafka',
    'Kubernetes', 'Terraform', 'Ansible', 'Prometheus',
    'Grafana', 'SonarQube', 'Fortify', 'Veracode'
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

  const challengesGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
    gap: '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const capabilitiesGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
    gap: '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const solutionsGridStyle = {
    display: 'grid',
    gap: '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const solutionItemStyle = (isMobile: boolean) => ({
    padding: isMobile ? '1.5rem' : '2rem',
    borderRadius: '20px',
    background: '#fafafa',
    border: '1px solid #e6e6e9',
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr auto',
    gap: isMobile ? '1.5rem' : '2rem',
    alignItems: isMobile ? 'flex-start' : 'start',
  });

  const storiesGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
    gap: '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const complianceGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: '1rem',
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

  const buttonStyle = (isActive: boolean) => ({
    background: 'none',
    border: 'none',
    padding: isMobile ? '0.5rem 0.8rem' : '0.5rem 1rem',
    fontSize: isMobile ? '0.8rem' : '1rem',
    fontWeight: isActive ? 600 : 400,
    color: isActive ? '#10B981' : '#86868b',
    cursor: 'pointer',
    borderBottom: isActive ? '2px solid #10B981' : 'none',
    textTransform: 'capitalize' as const,
    whiteSpace: 'nowrap' as const,
  });

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
          <Link href="/industries" style={{ color: '#86868b', textDecoration: 'none' }}> Industries</Link> / 
          <span style={{ color: '#1d1d1f' }}> Government</span>
        </div>

        {/* Hero Section */}
        <div style={heroGridStyle}>
          <div>
            <div style={{ 
              display: 'inline-block',
              background: 'rgba(16,185,129,0.1)',
              color: industry.color,
              padding: isMobile ? '0.4rem 1.2rem' : '0.5rem 1.5rem',
              borderRadius: '30px',
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              marginBottom: '1.5rem',
              textAlign: (isMobile ? 'center' : 'left') as 'center' | 'left',
              width: isMobile ? '100%' : 'auto',
            }}>
              ⚖️ Public Sector Solutions
            </div>
            <h1 style={heroTitleStyle}>
              {industry.title}<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #10B981 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {industry.tagline}
              </span>
            </h1>
            <p style={{ 
              color: '#86868b', 
              fontSize: isMobile ? '1rem' : '1.2rem', 
              lineHeight: '1.7', 
              marginBottom: '2rem',
              textAlign: (isMobile ? 'center' : 'left') as 'center' | 'left',
              padding: isMobile ? '0 0.5rem' : '0'
            }}>
              {industry.longDescription}
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
                  background: industry.color,
                  color: 'white',
                  padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  textAlign: 'center' as const,
                  width: isMobile ? '100%' : 'auto',
                }}
              >
                Contact Government Team
              </Link>
              <Link
                href="#solutions"
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
                Explore Solutions ↓
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
              background: 'rgba(16,185,129,0.1)',
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
              <div style={{ fontSize: isMobile ? '2.5rem' : '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>🏛️</div>
              <h3 style={{ 
                fontSize: isMobile ? '1.5rem' : '1.8rem', 
                fontWeight: 400, 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>Government Impact</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '10+ government agencies served',
                  '1M+ citizens served',
                  '100% compliance achieved'
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
                    <span style={{ color: '#10B981' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <section style={statsGridStyle}>
          {industry.stats.map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div style={{ 
                fontSize: isMobile ? '1.8rem' : '2.5rem', 
                fontWeight: 300, 
                color: '#10B981', 
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
          {['overview', 'solutions', 'success', 'faq'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={buttonStyle(activeTab === tab)}
            >
              {tab === 'overview' ? (isMobile ? 'Overview' : 'Overview') : 
               tab === 'solutions' ? (isMobile ? 'Solutions' : 'Solutions') : 
               tab === 'success' ? (isMobile ? 'Success' : 'Success Stories') : 
               (isMobile ? 'FAQ' : 'FAQ')}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <>
            {/* Challenges */}
            <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '2rem' : '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '1rem',
                textAlign: 'center',
                padding: isMobile ? '0 1rem' : '0'
              }}>
                Government Challenges We Solve
              </h2>
              <p style={{ 
                color: '#86868b', 
                fontSize: isMobile ? '1rem' : '1.2rem', 
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 2rem',
                padding: isMobile ? '0 1rem' : '0'
              }}>
                Critical issues facing public sector organizations today
              </p>
              <div style={challengesGridStyle}>
                {challenges.map(challenge => (
                  <div
                    key={challenge.title}
                    style={{
                      padding: isMobile ? '1.5rem' : '2rem',
                      borderRadius: '20px',
                      background: '#fafafa',
                      border: '1px solid #e6e6e9',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '1rem' }}>{challenge.icon}</div>
                    <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                      {challenge.title}
                    </h3>
                    <p style={{ color: '#86868b', fontSize: isMobile ? '0.85rem' : '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                      {challenge.desc}
                    </p>
                    <div style={{
                      background: 'white',
                      padding: '0.8rem',
                      borderRadius: '12px',
                      border: '1px solid #e6e6e9'
                    }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 500, color: '#10B981', marginBottom: '0.2rem' }}>Critical Impact</div>
                      <p style={{ color: '#1d1d1f', fontSize: '0.85rem' }}>{challenge.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Capabilities */}
            <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '2rem' : '2.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '1rem',
                textAlign: 'center',
                padding: isMobile ? '0 1rem' : '0'
              }}>
                Government Capabilities
              </h2>
              <p style={{ 
                color: '#86868b', 
                fontSize: isMobile ? '1rem' : '1.2rem', 
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 2rem',
                padding: isMobile ? '0 1rem' : '0'
              }}>
                What we bring to public sector organizations
              </p>
              <div style={capabilitiesGridStyle}>
                {capabilities.map(cap => (
                  <div
                    key={cap.title}
                    style={{
                      padding: isMobile ? '1.5rem' : '2rem',
                      borderRadius: '20px',
                      background: '#fafafa',
                      border: '1px solid #e6e6e9',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '1rem' }}>{cap.icon}</div>
                    <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                      {cap.title}
                    </h3>
                    <p style={{ color: '#86868b', fontSize: isMobile ? '0.85rem' : '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                      {cap.desc}
                    </p>
                    <div>
                      <div style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', fontWeight: 300, color: '#10B981' }}>
                        {cap.stat}
                      </div>
                      <div style={{ color: '#86868b', fontSize: isMobile ? '0.75rem' : '0.85rem' }}>{cap.statDesc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'solutions' && (
          <section id="solutions" style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
            <h2 style={{ 
              fontSize: isMobile ? '2rem' : '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1rem',
              textAlign: 'center',
              padding: isMobile ? '0 1rem' : '0'
            }}>
              Government Solutions
            </h2>
            <p style={{ 
              color: '#86868b', 
              fontSize: isMobile ? '1rem' : '1.2rem', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 2rem',
              padding: isMobile ? '0 1rem' : '0'
            }}>
              Comprehensive solutions designed for public sector needs
            </p>
            <div style={solutionsGridStyle}>
              {solutions.map(solution => (
                <div
                  key={solution.title}
                  style={solutionItemStyle(isMobile)}
                >
                  <div style={{ 
                    fontSize: isMobile ? '2.5rem' : '3rem', 
                    textAlign: isMobile ? 'center' : 'left' 
                  }}>{solution.icon}</div>
                  <div>
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: isMobile ? 'column' : 'row',
                      alignItems: isMobile ? 'flex-start' : 'center', 
                      gap: isMobile ? '0.5rem' : '1rem', 
                      marginBottom: '0.5rem' 
                    }}>
                      <h3 style={{ fontSize: isMobile ? '1.3rem' : '1.5rem', color: '#1d1d1f' }}>{solution.title}</h3>
                      <span style={{
                        background: `${solution.color}20`,
                        color: solution.color,
                        padding: '0.2rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        alignSelf: isMobile ? 'flex-start' : 'center'
                      }}>
                        {solution.tagline}
                      </span>
                    </div>
                    <p style={{ color: '#86868b', fontSize: isMobile ? '0.9rem' : '1rem', marginBottom: '1rem' }}>{solution.desc}</p>
                    
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                      gap: '1rem', 
                      marginBottom: '1rem' 
                    }}>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 500, color: '#1d1d1f', marginBottom: '0.5rem' }}>Features</div>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {solution.features.map(feature => (
                            <li key={feature} style={{ 
                              color: '#86868b', 
                              fontSize: isMobile ? '0.8rem' : '0.9rem',
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
                        <div style={{ fontSize: '0.85rem', fontWeight: 500, color: '#1d1d1f', marginBottom: '0.5rem' }}>Benefits</div>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {solution.benefits.map(benefit => (
                            <li key={benefit} style={{ 
                              color: '#86868b', 
                              fontSize: isMobile ? '0.8rem' : '0.9rem',
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
                  {!isMobile && (
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
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'success' && (
          <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
            <h2 style={{ 
              fontSize: isMobile ? '2rem' : '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1rem',
              textAlign: 'center',
              padding: isMobile ? '0 1rem' : '0'
            }}>
              Government Success Stories
            </h2>
            <p style={{ 
              color: '#86868b', 
              fontSize: isMobile ? '1rem' : '1.2rem', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 2rem',
              padding: isMobile ? '0 1rem' : '0'
            }}>
              Real results for government agencies
            </p>
            <div style={storiesGridStyle}>
              {successStories.map(story => (
                <div
                  key={story.agency}
                  style={{
                    padding: isMobile ? '1.5rem' : '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9'
                  }}
                >
                  <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '1rem' }}>{story.icon}</div>
                  <div style={{ 
                    display: 'inline-block',
                    background: `${story.color}20`,
                    color: story.color,
                    padding: '0.2rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    marginBottom: '0.8rem',
                    fontWeight: 500
                  }}>
                    {story.industry}
                  </div>
                  <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.3rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                    {story.agency}
                  </h3>
                  <div style={{ marginBottom: '0.8rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 500, color: '#1d1d1f', marginBottom: '0.2rem' }}>Challenge:</div>
                    <p style={{ color: '#86868b', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{story.challenge}</p>
                  </div>
                  <div style={{ marginBottom: '0.8rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 500, color: '#1d1d1f', marginBottom: '0.2rem' }}>Solution:</div>
                    <p style={{ color: '#86868b', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{story.solution}</p>
                  </div>
                  <div style={{ 
                    background: `${story.color}10`,
                    padding: '1rem',
                    borderRadius: '12px'
                  }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 500, color: story.color, marginBottom: '0.5rem' }}>Results:</div>
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: isMobile ? 'column' : 'row',
                      flexWrap: 'wrap',
                      gap: '0.5rem', 
                      justifyContent: 'space-between', 
                      marginBottom: '0.5rem' 
                    }}>
                      {story.metrics.map(metric => (
                        <span key={metric} style={{
                          background: 'white',
                          color: '#1d1d1f',
                          padding: '0.2rem 0.5rem',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          textAlign: 'center'
                        }}>
                          {metric}
                        </span>
                      ))}
                    </div>
                    <p style={{ color: '#1d1d1f', fontSize: '0.85rem', fontWeight: 500 }}>{story.result}</p>
                  </div>
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
              marginBottom: '1.5rem',
              textAlign: 'center',
              padding: isMobile ? '0 1rem' : '0'
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
                  <p style={{ color: '#86868b', fontSize: isMobile ? '0.85rem' : '0.95rem', lineHeight: '1.6' }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Compliance Standards */}
        <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
          <h2 style={{ 
            fontSize: isMobile ? '2rem' : '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1.5rem',
            textAlign: 'center',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Compliance & Security Standards
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: isMobile ? '1rem' : '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            We meet the strictest government requirements
          </p>
          <div style={complianceGridStyle}>
            {compliance.map(standard => (
              <div
                key={standard.name}
                style={{
                  padding: isMobile ? '1rem' : '1.5rem',
                  background: '#fafafa',
                  borderRadius: '12px',
                  textAlign: 'center',
                  border: '1px solid #e6e6e9'
                }}
              >
                <div style={{
                  width: isMobile ? '40px' : '50px',
                  height: isMobile ? '40px' : '50px',
                  background: 'linear-gradient(135deg, #10B981 0%, #7C3AED 100%)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.5rem',
                  color: 'white',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  fontWeight: 600
                }}>
                  {standard.logo}
                </div>
                <div style={{ fontWeight: 500, fontSize: isMobile ? '0.85rem' : '1rem', marginBottom: '0.2rem' }}>{standard.name}</div>
                <div style={{ color: '#86868b', fontSize: '0.7rem' }}>{standard.type}</div>
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
            marginBottom: '1.5rem',
            textAlign: 'center',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Government Technology Stack
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: isMobile ? '1rem' : '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Secure, compliant technologies for public sector
          </p>
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
              fontSize: isMobile ? '0.85rem' : '0.9rem',
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
          padding: isMobile ? '3rem 1rem' : '4rem 2rem',
          marginTop: '4rem'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={footerGridStyle}>
            <div>
              <div style={{ fontSize: isMobile ? '1.3rem' : '1.5rem', color: '#fff', marginBottom: '1rem' }}>PureLatency</div>
              <p style={{ color: '#666', lineHeight: '1.7', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                Secure, compliant solutions for government agencies.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: isMobile ? '1.1rem' : '1.2rem' }}>Solutions</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {solutions.slice(0, 4).map(solution => (
                  <li key={solution.title} style={{ marginBottom: '0.5rem' }}>
                    <Link href="#solutions" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                      {solution.title}
                    </Link>
                  </li>
                ))}
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
                        justifyContent: isMobile ? 'center' : 'flex-start',
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