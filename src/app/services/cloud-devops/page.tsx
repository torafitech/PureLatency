'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CloudDevOpsPage() {
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
      title: 'Infrastructure as Code',
      desc: 'Automate and manage infrastructure through code for consistent, repeatable deployments.',
      icon: '📝',
      color: '#7C3AED',
      metrics: ['Faster deployments', 'Version controlled', 'Repeatable']
    },
    {
      title: 'Container Orchestration',
      desc: 'Manage containerized applications at scale with Kubernetes, Docker Swarm, and ECS.',
      icon: '🐳',
      color: '#10B981',
      metrics: ['Auto-scaling', 'Self-healing', 'Load balancing']
    },
    {
      title: 'CI/CD Pipelines',
      desc: 'Automate your build, test, and deployment processes for faster, reliable releases.',
      icon: '🔄',
      color: '#F59E0B',
      metrics: ['Continuous integration', 'Automated testing', 'Zero-downtime']
    },
    {
      title: 'Monitoring & Observability',
      desc: 'Gain deep insights into your systems with comprehensive monitoring and logging.',
      icon: '📊',
      color: '#EC4899',
      metrics: ['Real-time metrics', 'Distributed tracing', 'Alerting']
    }
  ];

  const solutions = [
    {
      industry: 'E-commerce',
      icon: '🛒',
      challenge: 'Peak traffic during sales events causing downtime',
      solution: 'Auto-scaling Kubernetes infrastructure that handles 10x traffic spikes',
      impact: '99.99% uptime during Black Friday, $2M+ revenue protected',
      gradient: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)'
    },
    {
      industry: 'FinTech',
      icon: '💰',
      challenge: 'Regulatory compliance and security requirements',
      solution: 'Compliant infrastructure with automated security scanning and auditing',
      impact: '100% compliance passed, 60% faster audit preparation',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
    },
    {
      industry: 'SaaS',
      icon: '☁️',
      challenge: 'Slow deployment cycles and environment inconsistencies',
      solution: 'Fully automated CI/CD pipeline with infrastructure as code',
      impact: 'Deployment time reduced from days to minutes, 90% fewer errors',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
    },
    {
      industry: 'Healthcare',
      icon: '🏥',
      challenge: 'HIPAA compliance and data sovereignty requirements',
      solution: 'Secure, compliant cloud infrastructure with data encryption',
      impact: 'Achieved HIPAA compliance, 100% data sovereignty guaranteed',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)'
    }
  ];

  const innovations = [
    {
      title: 'GitOps',
      desc: 'Manage infrastructure and applications using Git as the single source of truth.',
      icon: '🔀',
      stat: '99.9%',
      statDesc: 'configuration accuracy'
    },
    {
      title: 'Service Mesh',
      desc: 'Dedicated infrastructure layer for service-to-service communication.',
      icon: '🔗',
      stat: '0ms',
      statDesc: 'added latency'
    },
    {
      title: 'Chaos Engineering',
      desc: 'Proactively test system resilience through controlled experiments.',
      icon: '🧪',
      stat: '10x',
      statDesc: 'improved resilience'
    },
    {
      title: 'FinOps',
      desc: 'Cloud financial management and optimization practices.',
      icon: '💰',
      stat: '40%',
      statDesc: 'cost reduction'
    }
  ];

  const process = [
    {
      phase: 'Assessment',
      icon: '📋',
      activities: ['Infrastructure audit', 'Workload analysis', 'Security review', 'Cost assessment'],
      duration: '1-2 weeks'
    },
    {
      phase: 'Strategy',
      icon: '🎯',
      activities: ['Architecture design', 'Tool selection', 'Migration planning', 'Compliance mapping'],
      duration: '2-3 weeks'
    },
    {
      phase: 'Implementation',
      icon: '⚙️',
      activities: ['Infrastructure setup', 'Pipeline creation', 'Monitoring implementation', 'Security hardening'],
      duration: '4-8 weeks'
    },
    {
      phase: 'Optimization',
      icon: '📈',
      activities: ['Performance tuning', 'Cost optimization', 'Process refinement', 'Team training'],
      duration: 'ongoing'
    }
  ];

  const stats = [
    { value: '10x', label: 'Faster Deployments', icon: '⚡' },
    { value: '99.99%', label: 'Average Uptime', icon: '📈' },
    { value: '40%', label: 'Cost Reduction', icon: '💰' },
    { value: '24/7', label: 'Monitoring', icon: '🔍' }
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
          <span style={{ color: '#1d1d1f' }}> Cloud and DevOps</span>
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
              ⚡ Modern Infrastructure, Seamless Operations
            </div>
            <h1 style={heroTitleStyle}>
              Automate, scale, and<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #0066cc 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                optimize your infrastructure
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
              We help you build scalable, resilient cloud infrastructure with cutting-edge DevOps practices. 
              From CI/CD pipelines to Kubernetes orchestration, we automate everything.
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
              <div style={{ fontSize: isMobile ? '2.5rem' : '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>☁️</div>
              <h3 style={{ 
                fontSize: isMobile ? '1.5rem' : '1.8rem', 
                fontWeight: 400, 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>The DevOps Advantage</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '10x faster deployments',
                  '99.99% uptime guarantee',
                  '40% cost reduction'
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
            Core DevOps Capabilities
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: isMobile ? '1rem' : '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            We combine automation, orchestration, and best practices to deliver reliable infrastructure
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
            Industry-Specific Solutions
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: isMobile ? '1rem' : '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Tailored cloud infrastructure that addresses the unique challenges of your industry
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
            Our DevOps Innovations
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: isMobile ? '1rem' : '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Pushing the boundaries of infrastructure automation and operations
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
            Our DevOps Implementation Process
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
            {[
              'AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker',
              'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'GitLab CI',
              'Prometheus', 'Grafana', 'Datadog', 'ArgoCD', 'Istio'
            ].map(tech => (
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
                We build cloud solutions that drive real results.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: isMobile ? '1.1rem' : '1.2rem' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Cloud Migration', 'Kubernetes', 'CI/CD', 'Monitoring'].map(item => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <Link href="/services" style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: isMobile ? '1.1rem' : '1.2rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['About', 'Careers', 'Blog', 'Contact'].map(item => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <Link href={`/${item.toLowerCase()}`} style={{ color: '#aaa', textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>{item}</Link>
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