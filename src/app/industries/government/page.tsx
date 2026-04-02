'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Government.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

export default function GovernmentPage() {
  const [activeTab, setActiveTab] = useState('overview');

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
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                style={{ color: social.color }}
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
          <Link href="/industries" className={styles.breadcrumbLink}> Industries</Link> / 
          <span className={styles.breadcrumbCurrent}> Government</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              ⚖️ Public Sector Solutions
            </div>
            <h1 className={styles.heroTitle}>
              {industry.title}<br />
              <span className={styles.heroTitleGradient}>
                {industry.tagline}
              </span>
            </h1>
            <p className={styles.heroText}>
              {industry.longDescription}
            </p>
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Talk to Our Team
              </Link>
              <Link href="#solutions" className={styles.buttonSecondary}>
                Explore Solutions ↓
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>🏛️</div>
              <h3 className={styles.heroCardTitle}>Government Impact</h3>
              <ul className={styles.heroCardList}>
                {[
                  '10+ government agencies served',
                  '1M+ citizens served',
                  '100% compliance achieved'
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
          {industry.stats.map(stat => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          {['overview', 'solutions', 'success', 'faq'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
            >
              {tab === 'overview' ? 'Overview' : 
               tab === 'solutions' ? 'Solutions' : 
               tab === 'success' ? 'Success Stories' : 
               'FAQ'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <>
            {/* Challenges */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>Government Challenges We Solve</h2>
              <p className={styles.sectionSubtitle}>
                Critical issues facing public sector organizations today
              </p>
              <div className={styles.challengesGrid}>
                {challenges.map(challenge => (
                  <div key={challenge.title} className={styles.challengeCard}>
                    <div className={styles.challengeIcon}>{challenge.icon}</div>
                    <h3 className={styles.challengeTitle}>{challenge.title}</h3>
                    <p className={styles.challengeDesc}>{challenge.desc}</p>
                    <div className={styles.impactBox}>
                      <div className={styles.impactTitle}>Critical Impact</div>
                      <p className={styles.impactText}>{challenge.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Capabilities */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>Government Capabilities</h2>
              <p className={styles.sectionSubtitle}>
                What we bring to public sector organizations
              </p>
              <div className={styles.capabilitiesGrid}>
                {capabilities.map(cap => (
                  <div key={cap.title} className={styles.capabilityCard}>
                    <div className={styles.capabilityIcon}>{cap.icon}</div>
                    <h3 className={styles.capabilityTitle}>{cap.title}</h3>
                    <p className={styles.capabilityDesc}>{cap.desc}</p>
                    <div>
                      <div className={styles.capabilityStat}>{cap.stat}</div>
                      <div className={styles.capabilityStatDesc}>{cap.statDesc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'solutions' && (
          <section id="solutions" style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>Government Solutions</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive solutions designed for public sector needs
            </p>
            <div className={styles.solutionsGrid}>
              {solutions.map(solution => (
                <div key={solution.title} className={styles.solutionItem}>
                  <div className={styles.solutionIcon}>{solution.icon}</div>
                  <div>
                    <div className={styles.solutionHeader}>
                      <h3 className={styles.solutionName}>{solution.title}</h3>
                      <span 
                        className={styles.solutionTagline}
                        style={{ 
                          '--color': solution.color,
                          '--color20': solution.color + '20'
                        } as React.CSSProperties}
                      >
                        {solution.tagline}
                      </span>
                    </div>
                    <p className={styles.solutionDesc}>{solution.desc}</p>
                    
                    <div className={styles.solutionFeaturesGrid}>
                      <div>
                        <div className={styles.featureListTitle}>Features</div>
                        <ul className={styles.featureList}>
                          {solution.features.map(feature => (
                            <li key={feature} className={styles.featureItem}>
                              <span className={styles.featureArrow} style={{ color: solution.color }}>→</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className={styles.featureListTitle}>Benefits</div>
                        <ul className={styles.featureList}>
                          {solution.benefits.map(benefit => (
                            <li key={benefit} className={styles.featureItem}>
                              <span className={styles.benefitCheck}>✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link
                      href="/contact"
                      className={styles.solutionButton}
                      style={{ '--color': solution.color } as React.CSSProperties}
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
            <h2 className={styles.sectionTitle}>Government Success Stories</h2>
            <p className={styles.sectionSubtitle}>
              Real results for government agencies
            </p>
            <div className={styles.storiesGrid}>
              {successStories.map(story => (
                <div key={story.agency} className={styles.storyCard}>
                  <div className={styles.storyIcon}>{story.icon}</div>
                  <div 
                    className={styles.storyIndustryTag}
                    style={{ 
                      '--color': story.color,
                      '--color20': story.color + '20'
                    } as React.CSSProperties}
                  >
                    {story.industry}
                  </div>
                  <h3 className={styles.storyAgency}>{story.agency}</h3>
                  <div className={styles.storySection}>
                    <div className={styles.storySectionTitle}>Challenge:</div>
                    <p className={styles.storyText}>{story.challenge}</p>
                  </div>
                  <div className={styles.storySection}>
                    <div className={styles.storySectionTitle}>Solution:</div>
                    <p className={styles.storyText}>{story.solution}</p>
                  </div>
                  <div 
                    className={styles.storyResultBox}
                    style={{ 
                      '--color10': story.color + '10',
                      '--color': story.color
                    } as React.CSSProperties}
                  >
                    <div className={styles.metricsRow}>
                      {story.metrics.map(metric => (
                        <span key={metric} className={styles.metricTag}>{metric}</span>
                      ))}
                    </div>
                    <p className={styles.storyResult}>{story.result}</p>
                  </div>
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

        {/* Compliance Standards */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Compliance & Security Standards</h2>
          <p className={styles.sectionSubtitle}>
            We meet the strictest government requirements
          </p>
          <div className={styles.complianceGrid}>
            {compliance.map(standard => (
              <div key={standard.name} className={styles.complianceItem}>
                <div className={styles.complianceLogo}>{standard.logo}</div>
                <div className={styles.complianceName}>{standard.name}</div>
                <div className={styles.complianceType}>{standard.type}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Government Technology Stack</h2>
          <p className={styles.sectionSubtitle}>
            Secure, compliant technologies for public sector
          </p>
          <div className={styles.techStack}>
            {technologies.map(tech => (
              <span key={tech} className={styles.techItem}>
                {tech}
              </span>
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

        {/* Back to Industries */}
        <div className={styles.backLinkContainer}>
          <Link href="/industries" className={styles.backLink}>
            ← Back to Industries
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </>
  );
}