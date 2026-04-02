'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from './Infrastructure.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

export default function InfrastructurePage() {
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
      color: '#000000'
    }
  ];

  const footerServices = [
    { title: 'Applications', href: '/services/applications' },
    { title: 'Fiber Optics', href: '/services/fiber-optics' },
    { title: 'Cloud and DevOps', href: '/services/cloud-devops' },
    { title: 'Data and AI', href: '/services/data-ai' },
    { title: 'Infrastructure', href: '/services/infrastructure' }
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
          <Link href="/services" className={styles.breadcrumbLink}> Services</Link> / 
          <span className={styles.breadcrumbCurrent}> Infrastructure</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              ⚡ The Foundation of Digital Innovation
            </div>
            <h1 className={styles.heroTitle}>
              Build infrastructure that<br />
              <span className={styles.heroTitleGradient}>
                scales with your business
              </span>
            </h1>
            <p className={styles.heroText}>
              We design and build secure, resilient, and scalable infrastructure that serves as the foundation 
              for your digital success. From network architecture to cloud infrastructure, we ensure your 
              systems are built to last.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Contact Us
              </Link>
              <Link href="/services" className={styles.buttonSecondary}>
                View All Services →
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>⚙️</div>
              <h3 className={styles.heroCardTitle}>The Infrastructure Advantage</h3>
              <ul className={styles.heroCardList}>
                {[
                  '99.99% uptime guarantee',
                  '50ms global latency',
                  '100% security compliant'
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

        {/* Core Capabilities */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Core Infrastructure Capabilities</h2>
          <p className={styles.sectionSubtitle}>
            We build the foundation that powers your digital transformation
          </p>
          <div className={styles.capabilitiesGrid}>
            {capabilities.map(cap => (
              <div key={cap.title} className={styles.capabilityCard}>
                <div className={styles.capabilityIcon}>{cap.icon}</div>
                <h3 className={styles.capabilityTitle}>{cap.title}</h3>
                <p className={styles.capabilityDesc}>{cap.desc}</p>
                <div className={styles.capabilityMetrics}>
                  {cap.metrics.map(metric => (
                    <span key={metric} className={styles.metricTag}>
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Solutions */}
        {/* <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Industry-Specific Infrastructure</h2>
          <p className={styles.sectionSubtitle}>
            Tailored infrastructure solutions for your industry's unique requirements
          </p>
          <div className={styles.solutionsGrid}>
            {solutions.map(sol => (
              <div
                key={sol.industry}
                className={styles.solutionCard}
                style={{ background: sol.gradient }}
              >
                <div className={styles.solutionIcon}>{sol.icon}</div>
                <h3 className={styles.solutionIndustry}>{sol.industry}</h3>
                <div style={{ marginBottom: '1rem' }}>
                  <div className={styles.solutionLabel}>Challenge:</div>
                  <p className={styles.solutionText}>{sol.challenge}</p>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <div className={styles.solutionLabel}>Solution:</div>
                  <p className={styles.solutionText}>{sol.solution}</p>
                </div>
                <div className={styles.solutionImpactBox}>
                  <div className={styles.solutionLabel}>Impact:</div>
                  <p className={styles.solutionImpact}>{sol.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Innovative Technologies */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our Infrastructure Innovations</h2>
          <p className={styles.sectionSubtitle}>
            Pushing the boundaries of what's possible with modern infrastructure
          </p>
          <div className={styles.innovationsGrid}>
            {innovations.map(innovation => (
              <div key={innovation.title} className={styles.innovationCard}>
                <div className={styles.innovationIcon}>{innovation.icon}</div>
                <h3 className={styles.innovationTitle}>{innovation.title}</h3>
                <p className={styles.innovationDesc}>{innovation.desc}</p>
                <div className={styles.innovationStat}>
                  <div className={styles.innovationStatValue}>{innovation.stat}</div>
                  <div className={styles.innovationStatDesc}>{innovation.statDesc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Timeline */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our Infrastructure Development Process</h2>
          <div className={styles.processGrid}>
            {process.map((phase, index) => (
              <div key={phase.phase} className={styles.processPhase}>
                {index < process.length - 1 && <div className={styles.processConnector} />}
                <div className={styles.processCard}>
                  <div className={styles.processIcon}>{phase.icon}</div>
                  <div className={styles.processPhaseNum}>Phase {index + 1}</div>
                  <h3 className={styles.processPhaseTitle}>{phase.phase}</h3>
                  <ul className={styles.processActivityList}>
                    {phase.activities.map(activity => (
                      <li key={activity} className={styles.processActivityItem}>
                        <span className={styles.processActivityArrow}>→</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.processDuration}>
                    ⏱️ {phase.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our Technology Ecosystem</h2>
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

        {/* Back to Services */}
        <div className={styles.backLinkContainer}>
          <Link href="/services" className={styles.backLink}>
            ← Back to Services
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </>
  );
}