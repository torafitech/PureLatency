'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Industries.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

export default function IndustriesPage() {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  const industries = [
    {
      id: 'enterprise',
      title: 'Enterprise',
      tagline: 'Scale with confidence',
      desc: 'Comprehensive digital solutions for large organizations seeking to modernize, optimize, and innovate at scale.',
      longDesc: 'We help enterprises transform legacy systems into modern, efficient platforms that drive business growth.',
      icon: '🏢',
      color: '#0066cc',
      metrics: ['99.99% uptime', '50+ clients', '40% cost savings'],
      solutions: ['Legacy Modernization', 'Digital Transformation', 'Enterprise Integration', 'Scalable Architecture']
    },
    {
      id: 'government',
      title: 'Government',
      tagline: 'Secure, compliant, accessible',
      desc: 'Digital solutions designed for the public sector with security, compliance, and accessibility as top priorities.',
      longDesc: 'We help government agencies modernize services and improve citizen experience through secure technology.',
      icon: '⚖️',
      color: '#10B981',
      metrics: ['FedRAMP ready', 'SOC 2 certified', 'WCAG compliant'],
      solutions: ['Digital Services', 'Internal Tools', 'Data Systems', 'Legacy Modernization']
    },
    {
      id: 'telco-space',
      title: 'Telco and Space',
      tagline: 'Connect the future',
      desc: 'Innovative software solutions for telecommunications and aerospace industries, from 5G networks to satellite systems.',
      longDesc: 'We build reliable, high-performance software that powers global connectivity and space exploration.',
      icon: '🛰️',
      color: '#7C3AED',
      metrics: ['99.999% reliability', '<1ms latency', 'Global reach'],
      solutions: ['Network Management', 'Ground Systems', 'Satellite Data', 'Flight Software']
    }
  ];

  // Updated stats to reflect actual experience
  const stats = [
    { value: '10+', label: 'Year Experience', icon: '⏳' },
    { value: '2+', label: 'Industry Projects', icon: '🏆' },
    { value: '100%', label: 'Compliance Success', icon: '✓' },
    { value: '24/7', label: 'Dedicated Support', icon: '🌙' }
  ];

  const capabilities = [
    {
      title: 'Security & Compliance',
      desc: 'We build solutions that meet the strictest security and regulatory requirements.',
      icon: '🔒',
      color: '#0066cc',
      details: ['FedRAMP', 'SOC 2', 'HIPAA', 'GDPR']
    },
    {
      title: 'Scalability',
      desc: 'Infrastructure and applications designed to grow with your organization.',
      icon: '📈',
      color: '#10B981',
      details: ['Auto-scaling', 'High availability', 'Load balancing']
    },
    {
      title: 'Integration',
      desc: 'Seamlessly connect with existing systems and third-party platforms.',
      icon: '🔗',
      color: '#7C3AED',
      details: ['API-first', 'Legacy integration', 'Real-time sync']
    },
    {
      title: 'Innovation',
      desc: 'Cutting-edge technology solutions tailored to your industry.',
      icon: '💡',
      color: '#F59E0B',
      details: ['AI/ML', 'IoT', 'Edge computing', '5G']
    }
  ];

  const successStories = [
    {
      industry: 'Enterprise',
      title: 'Global Manufacturing Giant',
      challenge: 'Legacy systems causing inefficiencies and security risks',
      solution: 'Modernized core systems with cloud-native architecture',
      result: '40% cost reduction, 99.99% uptime, 3x faster deployments',
      icon: '🏭',
      color: '#0066cc'
    },
    {
      industry: 'Government',
      title: 'State Digital Services Portal',
      challenge: 'Outdated citizen services with accessibility issues',
      solution: 'Built modern, WCAG-compliant portal serving 5M+ citizens',
      result: '100% accessibility compliance, 2M+ monthly users',
      icon: '🏛️',
      color: '#10B981'
    },
    {
      industry: 'Telco and Space',
      title: 'Global Satellite Network',
      challenge: 'Need for reliable ground station software',
      solution: 'Developed mission-critical ground control system',
      result: '99.999% uptime, real-time telemetry, global coverage',
      icon: '🛰️',
      color: '#7C3AED'
    }
  ];

  // Updated differentiators to reflect current experience
  const differentiators = [
    {
      title: 'Industry-Specific Expertise',
      desc: 'Deep domain knowledge in enterprise, government, and aerospace sectors.',
      icon: '🎯',
      stat: '1',
      statDesc: 'year experience'
    },
    {
      title: 'Security-First Approach',
      desc: 'Built-in security and compliance from day one, not an afterthought.',
      icon: '🔐',
      stat: '100%',
      statDesc: 'compliance rate'
    },
    {
      title: 'Proven Track Record',
      desc: 'Successful projects for early-stage clients and proof-of-concepts.',
      icon: '📊',
      stat: '2',
      statDesc: 'successful projects'
    },
    {
      title: 'Long-Term Partnership',
      desc: 'We work alongside your team for ongoing success and evolution.',
      icon: '🤝',
      stat: '1+',
      statDesc: 'year engagement'
    }
  ];

  const technologies = [
    // Cloud & Infrastructure
    'AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform',
    // Security
    'Okta', 'Auth0', 'Hashicorp Vault', 'CloudFlare',
    // Data
    'PostgreSQL', 'MongoDB', 'Snowflake', 'Elasticsearch',
    // AI/ML
    'TensorFlow', 'PyTorch', 'Hugging Face', 'OpenAI',
    // IoT/Edge
    'AWS IoT', 'Azure IoT', 'Edge Computing', '5G'
  ];

  const partners = [
    { name: 'AWS', logo: 'AWS', type: 'Cloud Provider' },
    { name: 'Microsoft', logo: 'MS', type: 'Technology Partner' },
    { name: 'Google Cloud', logo: 'GCP', type: 'Cloud Provider' },
    { name: 'Okta', logo: 'OK', type: 'Security Partner' },
    { name: 'Datadog', logo: 'DD', type: 'Monitoring' },
    { name: 'MongoDB', logo: 'MDB', type: 'Database' }
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
          <span className={styles.breadcrumbCurrent}> Industries</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              🌍 Industry-Specific Expertise
            </div>
            <h1 className={styles.heroTitle}>
              Solutions tailored to<br />
              <span className={styles.heroTitleGradient}>
                your industry's needs
              </span>
            </h1>
            <p className={styles.heroText}>
              We bring deep domain expertise to solve complex challenges across enterprise, government, 
              and telco and space sectors. Our solutions are built to meet the unique requirements of your industry.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="#industries" className={styles.buttonPrimary}>
                Explore Industries ↓
              </Link>
              <Link href="/contact" className={styles.buttonSecondary}>
                Discuss Your Project
              </Link>
            </div>
          </div>

          {/* Right Card - updated to reflect 2 projects and 1 year */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>🏆</div>
              <h3 className={styles.heroCardTitle}>Trusted by Industry Leaders</h3>
              <ul className={styles.heroCardList}>
                {[
                  '2+ industry projects delivered',
                  '10+ year combined experience',
                  '100% compliance success rate'
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

        {/* Stats Banner - updated to 1 year, 2 projects */}
        <section className={styles.statsBanner}>
          {stats.map(stat => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Industries Grid */}
        <section id="industries" style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Industries We Serve</h2>
          <p className={styles.sectionSubtitle}>
            Deep expertise in sectors with complex requirements and high standards
          </p>
          <div className={styles.industriesGrid}>
            {industries.map(industry => (
              <Link
                key={industry.id}
                href={`/industries/${industry.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className={styles.industryCard}
                  style={{
                    borderColor: hoveredIndustry === industry.id ? industry.color : '#e6e6e9'
                  }}
                  onMouseEnter={() => setHoveredIndustry(industry.id)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                >
                  <div className={styles.industryIcon}>{industry.icon}</div>
                  <h3 className={styles.industryTitle}>{industry.title}</h3>
                  <p className={styles.industryTagline} style={{ color: industry.color }}>
                    {industry.tagline}
                  </p>
                  <p className={styles.industryDesc}>{industry.desc}</p>
                  <div className={styles.industryMetrics}>
                    {industry.metrics.map(metric => (
                      <span key={metric} className={styles.metricTag}>
                        {metric}
                      </span>
                    ))}
                  </div>
                  <div className={styles.industryLink} style={{ color: industry.color }}>
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Key Capabilities */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Cross-Industry Capabilities</h2>
          <p className={styles.sectionSubtitle}>
            Core competencies that deliver value across every sector we serve
          </p>
          <div className={styles.capabilitiesGrid}>
            {capabilities.map(cap => (
              <div key={cap.title} className={styles.capabilityCard}>
                <div className={styles.capabilityIcon}>{cap.icon}</div>
                <h3 className={styles.capabilityTitle}>{cap.title}</h3>
                <p className={styles.capabilityDesc}>{cap.desc}</p>
                <div className={styles.capabilityDetails}>
                  {cap.details.map(detail => (
                    <span key={detail} className={styles.detailTag}>
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Success Stories</h2>
          <p className={styles.sectionSubtitle}>
            Real results for real clients across industries
          </p>
          <div className={styles.storiesGrid}>
            {successStories.map(story => (
              <div key={story.title} className={styles.storyCard}>
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
                <h3 className={styles.storyTitle}>{story.title}</h3>
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
                  <div className={styles.storyResultTitle}>Result:</div>
                  <p className={styles.storyResult}>{story.result}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us - updated to 1 year, 2 projects */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Why Industry Leaders Trust Us</h2>
          <p className={styles.sectionSubtitle}>
            What sets PureLatency apart in serving complex industries
          </p>
          <div className={styles.differentiatorsGrid}>
            {differentiators.map(diff => (
              <div key={diff.title} className={styles.diffCard}>
                <div className={styles.diffIcon}>{diff.icon}</div>
                <h3 className={styles.diffTitle}>{diff.title}</h3>
                <p className={styles.diffDesc}>{diff.desc}</p>
                <div>
                  <div className={styles.diffStat}>{diff.stat}</div>
                  <div className={styles.diffStatDesc}>{diff.statDesc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Enterprise-Grade Technology</h2>
          <p className={styles.sectionSubtitle}>
            Modern tools and platforms we use to build industry solutions
          </p>
          <div className={styles.techStack}>
            {technologies.map(tech => (
              <span key={tech} className={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Trusted Partners */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our Ecosystem Partners</h2>
          <div className={styles.partnersGrid}>
            {partners.map(partner => (
              <div key={partner.name} className={styles.partnerItem}>
                <div className={styles.partnerLogo}>{partner.logo}</div>
                <div className={styles.partnerName}>{partner.name}</div>
                <div className={styles.partnerType}>{partner.type}</div>
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

        {/* Back to Home */}
        <div className={styles.backHome}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </>
  );
}