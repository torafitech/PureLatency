'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState } from 'react';
import styles from './TelcoSpace.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

export default function TelcoSpacePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const industry = {
    title: 'Telco and Space',
    tagline: 'Connect the future',
    description: 'Innovative software solutions for telecommunications and aerospace industries, from 5G networks to satellite systems.',
    longDescription: 'We build reliable, high-performance software that powers global connectivity and space exploration. From ground stations to network infrastructure, we deliver solutions that work at the edge of possibility.',
    icon: '🛰️',
    color: '#7C3AED',
    stats: [
      { value: '99.999%', label: 'Reliability', icon: '📡' },
      { value: '<1ms', label: 'Latency', icon: '⚡' },
      { value: '100+', label: 'Satellites', icon: '🛰️' },
      { value: '24/7', label: 'Mission Critical', icon: '🌍' }
    ]
  };

  const challenges = [
    {
      title: 'Network Complexity',
      desc: 'Managing increasingly complex 5G and fiber networks with millions of connected devices.',
      icon: '🌐',
      impact: '60% of network costs spent on operations'
    },
    {
      title: 'Latency Requirements',
      desc: 'Ultra-low latency demands for real-time applications and edge computing.',
      icon: '⚡',
      impact: '<1ms required for 5G applications'
    },
    {
      title: 'Space Environment',
      desc: 'Radiation-hardened software for extreme space conditions.',
      icon: '🛰️',
      impact: 'Radiation causes 1 in 10 satellite failures'
    },
    {
      title: 'Global Coverage',
      desc: 'Providing seamless connectivity across the entire planet.',
      icon: '🌍',
      impact: '3 billion people still lack internet access'
    }
  ];

  const solutions = [
    {
      title: 'Network Management',
      tagline: 'Intelligent network orchestration',
      desc: 'AI-powered network management for 5G, fiber, and hybrid networks.',
      icon: '📡',
      color: '#7C3AED',
      features: [
        'SDN/NFV orchestration',
        'Network slicing',
        'Traffic optimization',
        'Predictive maintenance'
      ],
      benefits: [
        '30% lower OPEX',
        '99.999% reliability',
        'Real-time visibility'
      ]
    },
    {
      title: 'Ground Systems',
      tagline: 'Mission-critical control',
      desc: 'Software for satellite ground stations including mission control and telemetry.',
      icon: '🛸',
      color: '#10B981',
      features: [
        'Mission control',
        'Telemetry processing',
        'Command & control',
        'Data downlink'
      ],
      benefits: [
        'Zero data loss',
        'Real-time processing',
        'Automated operations'
      ]
    },
    {
      title: 'Satellite Data',
      tagline: 'Insights from space',
      desc: 'Process and analyze satellite imagery and sensor data at scale.',
      icon: '🛰️',
      color: '#F59E0B',
      features: [
        'Image processing',
        'Data fusion',
        'Analytics',
        'API delivery'
      ],
      benefits: [
        '10x faster processing',
        'Petabyte scale',
        'Real-time insights'
      ]
    },
    {
      title: 'Flight Software',
      tagline: 'Software for the edge of space',
      desc: 'Reliable, radiation-hardened software for space systems and satellites.',
      icon: '🚀',
      color: '#0066cc',
      features: [
        'Real-time systems',
        'Fault tolerance',
        'Rad-hardened',
        'Verification'
      ],
      benefits: [
        '100% mission success',
        'Auto-recovery',
        'Space-qualified'
      ]
    }
  ];

  const successStories = [
    {
      client: 'Global Satellite Network',
      industry: 'Space Communications',
      challenge: 'Managing 50+ satellites with legacy ground systems',
      solution: 'Modern ground control software with automated telemetry',
      result: '99.999% uptime, 60% fewer operators, real-time monitoring',
      metrics: ['99.999% uptime', '60% less staff', '50+ satellites'],
      icon: '🛰️',
      color: '#7C3AED'
    },
    {
      client: 'Tier-1 Telecom Provider',
      industry: '5G Network',
      challenge: 'Network complexity with millions of connected devices',
      solution: 'AI-powered network orchestration and slicing',
      result: '30% lower costs, <1ms latency, 5M+ devices managed',
      metrics: ['30% savings', '<1ms latency', '5M devices'],
      icon: '📡',
      color: '#10B981'
    },
    {
      client: 'Space Agency',
      industry: 'Government Space',
      challenge: 'Critical mission software for deep space exploration',
      solution: 'Radiation-hardened flight software with fault tolerance',
      result: '100% mission success, 10+ years in space, zero failures',
      metrics: ['100% success', '10+ years', 'Zero failures'],
      icon: '🚀',
      color: '#F59E0B'
    }
  ];

  const capabilities = [
    {
      title: '5G Ready',
      desc: 'Solutions built for next-generation networks',
      icon: '📶',
      stat: '<1ms',
      statDesc: 'latency'
    },
    {
      title: 'Space Qualified',
      desc: 'Radiation-hardened for space environments',
      icon: '🛰️',
      stat: '100%',
      statDesc: 'mission success'
    },
    {
      title: 'Edge Computing',
      desc: 'Process data at the network edge',
      icon: '⚡',
      stat: '10ms',
      statDesc: 'edge latency'
    },
    {
      title: 'Massive Scale',
      desc: 'Handle billions of connected devices',
      icon: '📊',
      stat: '1B+',
      statDesc: 'devices'
    }
  ];

  const partners = [
    { name: 'SpaceX', logo: 'SX', type: 'Launch Partner' },
    { name: 'OneWeb', logo: 'OW', type: 'Satellite Network' },
    { name: 'Starlink', logo: 'SL', type: 'Constellation' },
    { name: 'Ericsson', logo: 'ER', type: '5G Infrastructure' },
    { name: 'Nokia', logo: 'NK', type: 'Network Partner' },
    { name: 'Huawei', logo: 'HW', type: 'Telecom Equipment' },
    { name: 'Thales', logo: 'TH', type: 'Space Systems' },
    { name: 'Airbus', logo: 'AB', type: 'Aerospace' }
  ];

  const faqs = [
    {
      question: 'How do you achieve 99.999% reliability?',
      answer: 'We use redundant systems, automated failover, and continuous monitoring. Our software is designed with fault tolerance and self-healing capabilities.'
    },
    {
      question: 'What about radiation hardening for space?',
      answer: 'Our flight software uses radiation-hardened designs, error correction, and redundant systems to operate reliably in space environments.'
    },
    {
      question: 'Can you integrate with existing network infrastructure?',
      answer: 'Yes, we support standard protocols and APIs for seamless integration with existing telecom and ground station equipment.'
    },
    {
      question: 'How do you handle massive scale?',
      answer: 'Our distributed architecture scales horizontally to handle millions of devices and petabytes of data with real-time processing.'
    }
  ];

  const technologies = [
    '5G', 'SDN', 'NFV', 'OpenRAN', 'MIMO',
    'Kubernetes', 'Docker', 'Istio', 'Envoy',
    'Apache Kafka', 'Apache Flink', 'InfluxDB',
    'C/C++', 'Rust', 'Python', 'Go',
    'FPGA', 'VHDL', 'Verilog', 'RTOS'
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
          <span className={styles.breadcrumbCurrent}> Telco and Space</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              🛰️ Connectivity & Aerospace
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
                Contact Space Team
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
              <div className={styles.heroCardIcon}>🌍</div>
              <h3 className={styles.heroCardTitle}>Global Connectivity</h3>
              <ul className={styles.heroCardList}>
                {[
                  '99.999% mission-critical reliability',
                  '<1ms latency for 5G networks',
                  '100+ satellites supported'
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
              <h2 className={styles.sectionTitle}>Telco & Space Challenges We Solve</h2>
              <p className={styles.sectionSubtitle}>
                Critical issues facing connectivity and aerospace industries
              </p>
              <div className={styles.challengesGrid}>
                {challenges.map(challenge => (
                  <div key={challenge.title} className={styles.challengeCard}>
                    <div className={styles.challengeIcon}>{challenge.icon}</div>
                    <h3 className={styles.challengeTitle}>{challenge.title}</h3>
                    <p className={styles.challengeDesc}>{challenge.desc}</p>
                    <div className={styles.impactBox}>
                      <div className={styles.impactTitle}>Industry Impact</div>
                      <p className={styles.impactText}>{challenge.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Capabilities */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>Telco & Space Capabilities</h2>
              <p className={styles.sectionSubtitle}>
                What we bring to connectivity and aerospace
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
            <h2 className={styles.sectionTitle}>Telco & Space Solutions</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive solutions for connectivity and aerospace
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
            <h2 className={styles.sectionTitle}>Telco & Space Success Stories</h2>
            <p className={styles.sectionSubtitle}>
              Real results for connectivity and aerospace clients
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

 

        {/* Technology Stack */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Telco & Space Technology Stack</h2>
          <p className={styles.sectionSubtitle}>
            Cutting-edge technologies for connectivity and aerospace
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