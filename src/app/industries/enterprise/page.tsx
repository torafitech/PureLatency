'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Enterprise.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

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
      { value: '2+', label: 'Enterprise Clients', icon: '🏢' },
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

  // const successStories = [
  //   {
  //     client: 'Global Manufacturing Corp',
  //     industry: 'Manufacturing',
  //     challenge: 'Legacy ERP system causing inefficiencies and limiting growth',
  //     solution: 'Modernized core systems with cloud-native architecture',
  //     result: '40% cost reduction, 99.99% uptime, 3x faster deployments',
  //     metrics: ['$5M annual savings', '60% faster processes', 'Zero downtime'],
  //     icon: '🏭',
  //     color: '#0066cc'
  //   },
  //   {
  //     client: 'Fortune 500 Retailer',
  //     industry: 'Retail',
  //     challenge: 'Disconnected systems leading to poor customer experience',
  //     solution: 'Unified commerce platform with real-time inventory',
  //     result: '45% increase in online sales, 30% faster checkout',
  //     metrics: ['45% revenue growth', '30% faster checkout', '98% satisfaction'],
  //     icon: '🛍️',
  //     color: '#10B981'
  //   },
  //   {
  //     client: 'International Bank',
  //     industry: 'Finance',
  //     challenge: 'Security concerns and slow transaction processing',
  //     solution: 'Modern banking platform with real-time processing',
  //     result: '99.99% security compliance, 50% faster transactions',
  //     metrics: ['Zero breaches', '50% faster', '$2M saved'],
  //     icon: '💰',
  //     color: '#7C3AED'
  //   }
  // ];

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
          <span className={styles.breadcrumbCurrent}> Enterprise</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge} style={{ color: industry.color, background: `${industry.color}10` }}>
              🏢 Enterprise Solutions
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
              <Link href="/contact" className={styles.buttonPrimary} style={{ background: industry.color }}>
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
              <div className={styles.heroCardIcon}>📈</div>
              <h3 className={styles.heroCardTitle}>Enterprise Impact</h3>
              <ul className={styles.heroCardList}>
                {[
                  '2+ enterprise clients served',
                  '40% average cost reduction',
                  '99.99% uptime guaranteed'
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
          {['overview', 'solutions',  'faq'].map(tab => (
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
              <h2 className={styles.sectionTitle}>Enterprise Challenges We Solve</h2>
              <p className={styles.sectionSubtitle}>
                Real problems facing large organizations today
              </p>
              <div className={styles.challengesGrid}>
                {challenges.map(challenge => (
                  <div key={challenge.title} className={styles.challengeCard}>
                    <div className={styles.challengeIcon}>{challenge.icon}</div>
                    <h3 className={styles.challengeTitle}>{challenge.title}</h3>
                    <p className={styles.challengeDesc}>{challenge.desc}</p>
                    <div className={styles.impactBox}>
                      <div className={styles.impactTitle}>Business Impact</div>
                      <p className={styles.impactText}>{challenge.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Capabilities */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>Enterprise Capabilities</h2>
              <p className={styles.sectionSubtitle}>
                What we bring to your organization
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
            <h2 className={styles.sectionTitle}>Enterprise Solutions</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive solutions designed for large-scale organizations
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

        {/* {activeTab === 'success' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>Enterprise Success Stories</h2>
            <p className={styles.sectionSubtitle}>
              Real results for real enterprise clients
            </p>
            <div className={styles.storiesGrid}>
              {successStories.map(story => (
                <div key={story.client} className={styles.storyCard}>
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
                  <h3 className={styles.storyClient}>{story.client}</h3>
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
        )} */}

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

        {/* Technology Stack */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Enterprise Technology Stack</h2>
          <p className={styles.sectionSubtitle}>
            Battle-tested technologies for enterprise-scale solutions
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