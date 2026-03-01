'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function InfrastructurePage() {
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

  const capabilities = [
    {
      title: 'Network Architecture',
      desc: 'Design and implement robust, scalable network architectures for optimal performance and security.',
      icon: '🌐',
      color: '#7C3AED',
      metrics: ['99.99% uptime', '<10ms latency', 'Global CDN']
    },
    {
      title: 'Cloud Infrastructure',
      desc: 'Build and manage cloud-native infrastructure across AWS, Azure, and Google Cloud.',
      icon: '☁️',
      color: '#10B981',
      metrics: ['Multi-cloud', 'Auto-scaling', 'Disaster recovery']
    },
    {
      title: 'Security & Compliance',
      desc: 'Implement defense-in-depth security with comprehensive compliance frameworks.',
      icon: '🔒',
      color: '#F59E0B',
      metrics: ['Zero trust', 'End-to-end encryption', 'Compliance ready']
    },
    {
      title: 'Database Infrastructure',
      desc: 'Design and optimize database systems for performance, reliability, and scale.',
      icon: '🗄️',
      color: '#EC4899',
      metrics: ['High availability', 'Automated backups', 'Performance tuning']
    }
  ];

  const solutions = [
    {
      industry: 'Financial Services',
      icon: '🏦',
      challenge: 'Strict regulatory compliance and zero downtime requirements',
      solution: 'Multi-region, highly available infrastructure with automated failover and comprehensive audit logging',
      impact: '99.999% uptime achieved, 100% compliance passed',
      gradient: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)'
    },
    {
      industry: 'Healthcare',
      icon: '🏥',
      challenge: 'HIPAA compliance and secure patient data handling',
      solution: 'Isolated, encrypted infrastructure with strict access controls and audit trails',
      impact: 'Full HIPAA compliance, zero security incidents',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
    },
    {
      industry: 'E-commerce',
      icon: '🛒',
      challenge: 'Handling massive traffic spikes during sales events',
      solution: 'Auto-scaling infrastructure with load balancing and CDN integration',
      impact: 'Handled 10x traffic surge, 0 downtime during Black Friday',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
    },
    {
      industry: 'SaaS Platforms',
      icon: '📱',
      challenge: 'Global user base requiring low-latency access',
      solution: 'Multi-region deployment with edge computing and global load balancing',
      impact: '<50ms latency worldwide, 40% faster user experience',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)'
    }
  ];

  const innovations = [
    {
      title: 'Infrastructure as Code',
      desc: 'Define and manage infrastructure through code for consistent, repeatable deployments.',
      icon: '📝',
      stat: '100%',
      statDesc: 'configuration consistency'
    },
    {
      title: 'Zero Trust Security',
      desc: 'Never trust, always verify - security model for modern infrastructure.',
      icon: '🔐',
      stat: '0',
      statDesc: 'trust assumptions'
    },
    {
      title: 'Immutable Infrastructure',
      desc: 'Replace, never modify - infrastructure that never drifts from configuration.',
      icon: '🔄',
      stat: '100%',
      statDesc: 'configuration accuracy'
    },
    {
      title: 'Chaos Engineering',
      desc: 'Proactively test infrastructure resilience through controlled experiments.',
      icon: '🧪',
      stat: '10x',
      statDesc: 'improved resilience'
    }
  ];

  const process = [
    {
      phase: 'Assessment',
      icon: '📋',
      activities: ['Infrastructure audit', 'Requirements gathering', 'Performance baseline', 'Security review'],
      duration: '2-3 weeks'
    },
    {
      phase: 'Architecture',
      icon: '🏗️',
      activities: ['High-level design', 'Technology selection', 'Security architecture', 'Cost modeling'],
      duration: '3-4 weeks'
    },
    {
      phase: 'Implementation',
      icon: '⚙️',
      activities: ['Infrastructure deployment', 'Security hardening', 'Monitoring setup', 'Documentation'],
      duration: '6-12 weeks'
    },
    {
      phase: 'Optimization',
      icon: '📈',
      activities: ['Performance tuning', 'Cost optimization', 'Process refinement', 'Ongoing support'],
      duration: 'ongoing'
    }
  ];

  const stats = [
    { value: '99.99%', label: 'Average Uptime', icon: '📊' },
    { value: '50ms', label: 'Global Latency', icon: '⚡' },
    { value: '100%', label: 'Security Compliant', icon: '🔒' },
    { value: '24/7', label: 'Monitoring', icon: '🔍' }
  ];

  const technologies = [
    // Cloud Providers
    'AWS', 'Microsoft Azure', 'Google Cloud', 'DigitalOcean', 'Linode',
    // Networking
    'Cisco', 'Juniper', 'pfSense', 'HAProxy', 'NGINX',
    // Infrastructure as Code
    'Terraform', 'CloudFormation', 'Pulumi', 'Ansible', 'Chef',
    // Security
    'Hashicorp Vault', 'AWS WAF', 'CloudFlare', 'Okta', 'Auth0',
    // Monitoring
    'Prometheus', 'Grafana', 'Datadog', 'New Relic', 'ELK Stack',
    // Database
    'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Cassandra'
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

  // Define services for footer
  const footerServices = [
    { title: 'Applications', href: '/services/applications' },
    { title: 'Fiber Optics', href: '/services/fiber-optics' },
    { title: 'Cloud and DevOps', href: '/services/cloud-devops' },
    { title: 'Data and AI', href: '/services/data-ai' },
    { title: 'Infrastructure', href: '/services/infrastructure' }
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

  const capabilitiesGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
    gap: '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const solutionsGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
    gap: '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const innovationsGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
    gap: '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const processGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
    gap: isMobile ? '1.5rem' : '2rem',
    marginBottom: isMobile ? '3rem' : '6rem',
  };

  const footerGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr',
    gap: isMobile ? '2rem' : '4rem',
    marginBottom: '4rem',
    textAlign: (isMobile ? 'center' : 'left') as 'center' | 'left',
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
          <Link href="/services" style={{ color: '#86868b', textDecoration: 'none' }}> Services</Link> / 
          <span style={{ color: '#1d1d1f' }}> Infrastructure</span>
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
              ⚡ The Foundation of Digital Innovation
            </div>
            <h1 style={heroTitleStyle}>
              Build infrastructure that<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #0066cc 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                scales with your business
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
              We design and build secure, resilient, and scalable infrastructure that serves as the foundation 
              for your digital success. From network architecture to cloud infrastructure, we ensure your 
              systems are built to last.
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
                Contact Us
              </Link>
              <Link
                href="/services"
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
                View All Services →
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
              <div style={{ fontSize: isMobile ? '2.5rem' : '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>⚙️</div>
              <h3 style={{ 
                fontSize: isMobile ? '1.5rem' : '1.8rem', 
                fontWeight: 400, 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>The Infrastructure Advantage</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '99.99% uptime guarantee',
                  '50ms global latency',
                  '100% security compliant'
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
                    <span style={{ color: '#0066cc' }}>✓</span>
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

        {/* Core Capabilities */}
        <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
          <h2 style={{ 
            fontSize: isMobile ? '2rem' : '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Core Infrastructure Capabilities
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: isMobile ? '1rem' : '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            We build the foundation that powers your digital transformation
          </p>
          <div style={capabilitiesGridStyle}>
            {capabilities.map(cap => (
              <div
                key={cap.title}
                style={{
                  padding: isMobile ? '1.5rem' : '2rem',
                  borderRadius: '20px',
                  background: 'white',
                  border: '1px solid #e6e6e9'
                }}
              >
                <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '1rem' }}>{cap.icon}</div>
                <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.3rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                  {cap.title}
                </h3>
                <p style={{ color: '#86868b', fontSize: isMobile ? '0.85rem' : '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                  {cap.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cap.metrics.map(metric => (
                    <span
                      key={metric}
                      style={{
                        background: '#f5f5f7',
                        color: '#666',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '20px',
                        fontSize: '0.7rem'
                      }}
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Solutions */}
        <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
          <h2 style={{ 
            fontSize: isMobile ? '2rem' : '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Industry-Specific Infrastructure
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: isMobile ? '1rem' : '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Tailored infrastructure solutions for your industry's unique requirements
          </p>
          <div style={solutionsGridStyle}>
            {solutions.map(sol => (
              <div
                key={sol.industry}
                style={{
                  padding: isMobile ? '1.5rem' : '2rem',
                  borderRadius: '20px',
                  background: sol.gradient,
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ fontSize: isMobile ? '2.5rem' : '3rem', marginBottom: '1rem' }}>{sol.icon}</div>
                <h3 style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', fontWeight: 400, marginBottom: '1rem' }}>
                  {sol.industry}
                </h3>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.3rem' }}>Challenge:</div>
                  <p style={{ fontSize: isMobile ? '0.9rem' : '1rem', marginBottom: '1rem', opacity: 0.9 }}>{sol.challenge}</p>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.3rem' }}>Solution:</div>
                  <p style={{ fontSize: isMobile ? '0.9rem' : '1rem', marginBottom: '1rem', opacity: 0.9 }}>{sol.solution}</p>
                </div>
                <div style={{ 
                  background: 'rgba(255,255,255,0.2)',
                  padding: '1rem',
                  borderRadius: '12px'
                }}>
                  <div style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.3rem' }}>Impact:</div>
                  <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 500 }}>{sol.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Innovative Technologies */}
        <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
          <h2 style={{ 
            fontSize: isMobile ? '2rem' : '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '1rem',
            textAlign: 'center',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Our Infrastructure Innovations
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: isMobile ? '1rem' : '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Pushing the boundaries of what's possible with modern infrastructure
          </p>
          <div style={innovationsGridStyle}>
            {innovations.map(innovation => (
              <div
                key={innovation.title}
                style={{
                  padding: isMobile ? '1.5rem' : '2rem',
                  borderRadius: '20px',
                  background: '#fafafa',
                  border: '1px solid #e6e6e9'
                }}
              >
                <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '1rem' }}>{innovation.icon}</div>
                <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                  {innovation.title}
                </h3>
                <p style={{ color: '#86868b', fontSize: isMobile ? '0.85rem' : '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                  {innovation.desc}
                </p>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', fontWeight: 300, color: '#0066cc' }}>
                    {innovation.stat}
                  </div>
                  <div style={{ color: '#86868b', fontSize: isMobile ? '0.75rem' : '0.85rem' }}>{innovation.statDesc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Timeline */}
        <section style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
          <h2 style={{ 
            fontSize: isMobile ? '2rem' : '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '2rem',
            textAlign: 'center',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Our Infrastructure Development Process
          </h2>
          <div style={processGridStyle}>
            {process.map((phase, index) => (
              <div key={phase.phase} style={{ position: 'relative' }}>
                {!isMobile && index < process.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '30px',
                    right: '-20px',
                    width: '40px',
                    height: '2px',
                    background: '#e6e6e9',
                    zIndex: 1
                  }} />
                )}
                <div style={{
                  background: 'white',
                  padding: isMobile ? '1.5rem' : '2rem',
                  borderRadius: '20px',
                  border: '1px solid #e6e6e9',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div style={{ fontSize: isMobile ? '1.8rem' : '2rem', marginBottom: '1rem' }}>{phase.icon}</div>
                  <div style={{ 
                    fontSize: '1rem',
                    color: '#0066cc',
                    fontWeight: 500,
                    marginBottom: '0.5rem'
                  }}>
                    Phase {index + 1}
                  </div>
                  <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.3rem', marginBottom: '1rem', color: '#1d1d1f' }}>
                    {phase.phase}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
                    {phase.activities.map(activity => (
                      <li key={activity} style={{ 
                        color: '#86868b', 
                        fontSize: isMobile ? '0.8rem' : '0.9rem',
                        marginBottom: '0.3rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}>
                        <span style={{ color: '#0066cc' }}>→</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <div style={{
                    background: '#f5f5f7',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    textAlign: 'center',
                    color: '#666',
                    fontSize: isMobile ? '0.8rem' : '0.9rem'
                  }}>
                    ⏱️ {phase.duration}
                  </div>
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
            marginBottom: '1.5rem',
            textAlign: 'center',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Our Technology Ecosystem
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

        {/* Contact Section */}
        <div style={{
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
            <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 400, marginBottom: '1rem' }}>
              Contact Us
            </h2>

            <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', marginBottom: '2rem', opacity: 0.95 }}>
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
                backgroundColor: 'transparent',
                width: isMobile ? '100%' : 'auto',
                maxWidth: isMobile ? '300px' : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#111';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Back to Services */}
        <div style={{ 
          borderTop: '1px solid #e6e6e9',
          paddingTop: '2rem',
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <Link 
            href="/services" 
            style={{ 
              color: '#86868b', 
              textDecoration: 'none', 
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              display: 'inline-block'
            }}
          >
            ← Back to Services
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
                Transforming businesses through intelligent technology. 
                We build infrastructure that drives real results.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: isMobile ? '1.1rem' : '1.2rem' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {footerServices.map(service => (
                  <li key={service.title} style={{ marginBottom: '0.5rem' }}>
                    <Link href={service.href} style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: isMobile ? '1.1rem' : '1.2rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/about" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>About</Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/careers" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>Careers</Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/blog" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>Blog</Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/contact" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>Contact</Link>
                </li>
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