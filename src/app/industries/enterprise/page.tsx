'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function EnterprisePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const industry = {
    title: 'Enterprise',
    tagline: 'Scale with confidence',
    description: 'Comprehensive digital solutions for large organizations seeking to modernize, optimize, and innovate at scale.',
    longDescription: 'We help enterprises transform legacy systems into modern, efficient platforms that drive business growth, reduce costs, and improve agility.',
    icon: '🏢',
    color: '#0066cc',
    stats: [
      { value: '50+', label: 'Enterprise Clients', icon: '🏢' },
      { value: '99.99%', label: 'Average Uptime', icon: '📊' },
      { value: '40%', label: 'Cost Reduction', icon: '💰' },
      { value: '10+', label: 'Years Experience', icon: '⏳' }
    ]
  };

  const challenges = [
    {
      title: 'Legacy Systems',
      desc: 'Outdated technology slowing down innovation and increasing maintenance costs.',
      icon: '🏛️',
      impact: '60% of IT budgets spent on maintenance'
    },
    {
      title: 'Security & Compliance',
      desc: 'Complex regulatory requirements and increasing security threats.',
      icon: '🔒',
      impact: '$4M average cost of data breach'
    },
    {
      title: 'Integration Complexity',
      desc: 'Disconnected systems creating data silos and inefficiencies.',
      icon: '🔗',
      impact: '30% productivity loss from poor integration'
    },
    {
      title: 'Scalability',
      desc: 'Inability to handle growth and peak demand periods.',
      icon: '📈',
      impact: '53% of users abandon slow sites'
    }
  ];

  const solutions = [
    {
      title: 'Legacy Modernization',
      tagline: 'Transform, don\'t replace',
      desc: 'Modernize existing systems incrementally with minimal business disruption.',
      icon: '🔄',
      color: '#0066cc',
      features: [
        'Application re-platforming',
        'Database modernization',
        'API-first architecture',
        'Cloud migration'
      ],
      benefits: [
        '50-70% lower maintenance costs',
        '3x faster feature delivery',
        'Improved security posture'
      ]
    },
    {
      title: 'Digital Transformation',
      tagline: 'Reimagine your business',
      desc: 'End-to-end digital solutions that streamline operations and enhance customer experience.',
      icon: '🚀',
      color: '#10B981',
      features: [
        'Process automation',
        'Customer portals',
        'Mobile solutions',
        'Analytics & insights'
      ],
      benefits: [
        '40% operational efficiency',
        '2x customer engagement',
        'Real-time decision making'
      ]
    },
    {
      title: 'Enterprise Integration',
      tagline: 'Connect everything',
      desc: 'Seamlessly connect disparate systems and data sources across your organization.',
      icon: '🔗',
      color: '#7C3AED',
      features: [
        'API gateway implementation',
        'Event-driven architecture',
        'Legacy system integration',
        'Real-time data sync'
      ],
      benefits: [
        'Unified data view',
        'Eliminate data silos',
        'Faster time-to-market'
      ]
    },
    {
      title: 'Scalable Architecture',
      tagline: 'Built for growth',
      desc: 'Design and build systems that scale effortlessly with your business.',
      icon: '📊',
      color: '#F59E0B',
      features: [
        'Microservices architecture',
        'Cloud-native design',
        'Auto-scaling infrastructure',
        'High availability clusters'
      ],
      benefits: [
        'Handle 10x traffic spikes',
        '99.99% uptime',
        'Pay-as-you-grow model'
      ]
    }
  ];

  const successStories = [
    {
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Legacy ERP system causing inefficiencies and limiting growth',
      solution: 'Modernized core systems with cloud-native architecture',
      result: '40% cost reduction, 99.99% uptime, 3x faster deployments',
      metrics: ['$5M annual savings', '60% faster processes', 'Zero downtime'],
      icon: '🏭',
      color: '#0066cc'
    },
    {
      client: 'Fortune 500 Retailer',
      industry: 'Retail',
      challenge: 'Disconnected systems leading to poor customer experience',
      solution: 'Unified commerce platform with real-time inventory',
      result: '45% increase in online sales, 30% faster checkout',
      metrics: ['45% revenue growth', '30% faster checkout', '98% satisfaction'],
      icon: '🛍️',
      color: '#10B981'
    },
    {
      client: 'International Bank',
      industry: 'Finance',
      challenge: 'Security concerns and slow transaction processing',
      solution: 'Modern banking platform with real-time processing',
      result: '99.99% security compliance, 50% faster transactions',
      metrics: ['Zero breaches', '50% faster', '$2M saved'],
      icon: '💰',
      color: '#7C3AED'
    }
  ];

  const capabilities = [
    {
      title: 'Cloud Migration',
      desc: 'Seamless migration to AWS, Azure, or Google Cloud',
      icon: '☁️',
      stat: '99.99%',
      statDesc: 'uptime'
    },
    {
      title: 'Security & Compliance',
      desc: 'Enterprise-grade security with compliance ready',
      icon: '🔒',
      stat: '100%',
      statDesc: 'compliance'
    },
    {
      title: 'Data & Analytics',
      desc: 'Turn data into actionable insights',
      icon: '📊',
      stat: '10x',
      statDesc: 'faster insights'
    },
    {
      title: 'AI & Automation',
      desc: 'Intelligent automation for business processes',
      icon: '🤖',
      stat: '40%',
      statDesc: 'efficiency gain'
    }
  ];

  const partners = [
    { name: 'AWS', logo: 'AWS', type: 'Cloud Provider' },
    { name: 'Microsoft', logo: 'MS', type: 'Technology Partner' },
    { name: 'Google Cloud', logo: 'GCP', type: 'Cloud Provider' },
    { name: 'Salesforce', logo: 'SF', type: 'CRM Partner' },
    { name: 'SAP', logo: 'SAP', type: 'ERP Partner' },
    { name: 'Oracle', logo: 'OR', type: 'Database Partner' }
  ];

  const faqs = [
    {
      question: 'How long does enterprise modernization typically take?',
      answer: 'Timelines vary based on complexity, but we typically phase projects over 6-18 months, delivering value incrementally rather than a big-bang approach.'
    },
    {
      question: 'How do you ensure security during migration?',
      answer: 'We follow a security-first approach with encryption, access controls, and continuous monitoring throughout the migration process.'
    },
    {
      question: 'Can you work with our existing IT team?',
      answer: 'Absolutely. We collaborate closely with your internal teams, providing knowledge transfer and building internal capabilities.'
    },
    {
      question: 'What about compliance requirements?',
      answer: 'We have deep experience with enterprise compliance standards including SOC2, HIPAA, GDPR, and industry-specific regulations.'
    }
  ];

  const technologies = [
    'AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker',
    'Terraform', 'Kafka', 'Snowflake', 'Databricks', 'MongoDB',
    'PostgreSQL', 'Redis', 'Elasticsearch', 'TensorFlow', 'PyTorch'
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
          <span style={{ color: '#1d1d1f' }}> Enterprise</span>
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
              color: industry.color,
              padding: '0.5rem 1.5rem',
              borderRadius: '30px',
              fontSize: '0.9rem',
              marginBottom: '1.5rem'
            }}>
              🏢 Enterprise Solutions
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
                background: 'linear-gradient(135deg, #0066cc 0%, #7C3AED 100%)',
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
                Talk to Our Team
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
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📈</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '1rem' }}>Enterprise Impact</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '50+ enterprise clients served',
                  '40% average cost reduction',
                  '99.99% uptime guaranteed'
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
          {industry.stats.map(stat => (
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
                color: activeTab === tab ? '#0066cc' : '#86868b',
                cursor: 'pointer',
                borderBottom: activeTab === tab ? '2px solid #0066cc' : 'none',
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
                Enterprise Challenges We Solve
              </h2>
              <p style={{ 
                color: '#86868b', 
                fontSize: '1.2rem', 
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 3rem'
              }}>
                Real problems facing large organizations today
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
                      <div style={{ fontSize: '0.85rem', fontWeight: 500, color: '#0066cc', marginBottom: '0.2rem' }}>Business Impact</div>
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
                Enterprise Capabilities
              </h2>
              <p style={{ 
                color: '#86868b', 
                fontSize: '1.2rem', 
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 3rem'
              }}>
                What we bring to your organization
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
                      <div style={{ fontSize: '1.8rem', fontWeight: 300, color: '#0066cc' }}>
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
              Enterprise Solutions
            </h2>
            <p style={{ 
              color: '#86868b', 
              fontSize: '1.2rem', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 3rem'
            }}>
              Comprehensive solutions designed for large-scale organizations
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
              Enterprise Success Stories
            </h2>
            <p style={{ 
              color: '#86868b', 
              fontSize: '1.2rem', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 3rem'
            }}>
              Real results for real enterprise clients
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

        {/* Technology Stack */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Enterprise Technology Stack
          </h2>
          <p style={{ 
            color: '#86868b', 
            fontSize: '1.2rem', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Battle-tested technologies for enterprise-scale solutions
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

        {/* Partners */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300, 
            color: '#1d1d1f', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Enterprise Partners
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
                Enterprise-grade solutions for large-scale organizations.
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