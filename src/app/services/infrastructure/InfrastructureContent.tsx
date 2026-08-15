'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from './Infrastructure.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

type FaqItem = { question: string; answer: string };

export default function InfrastructureContent({ faqItems }: { faqItems: FaqItem[] }) {
  const capabilities = [
    {
      title: 'Network Architecture',
      desc: 'Design and implement robust, scalable network architectures for optimal performance and security.',
      icon: '🌐',
      color: '#7C3AED',
      // TODO: unverifiable claim removed — confirm with business before re-adding: "99.99% uptime"
      // TODO: unverifiable claim removed — confirm with business before re-adding: "<10ms latency"
      metrics: ['Global CDN']
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

  // TODO: unverifiable claim removed — confirm with business before re-adding: entire
  // "Industry-Specific Infrastructure" solutions section (was already commented out in
  // the original source, never rendered). Contained fabricated case-study outcomes:
  // "99.999% uptime achieved, 100% compliance passed" (Financial Services)
  // "Full HIPAA compliance, zero security incidents" (Healthcare)
  // "Handled 10x traffic surge, 0 downtime during Black Friday" (E-commerce)
  // "<50ms latency worldwide, 40% faster user experience" (SaaS Platforms)
  // Removed entirely per content policy — no backing case studies exist in this repo.

  const innovations = [
    {
      title: 'Infrastructure as Code',
      desc: 'Define and manage infrastructure through code for consistent, repeatable deployments.',
      icon: '📝'
      // TODO: unverifiable claim removed — confirm with business before re-adding: "100% configuration consistency"
    },
    {
      title: 'Zero Trust Security',
      desc: 'Never trust, always verify - security model for modern infrastructure.',
      icon: '🔐'
      // TODO: unverifiable claim removed — confirm with business before re-adding: "0 trust assumptions"
    },
    {
      title: 'Immutable Infrastructure',
      desc: 'Replace, never modify - infrastructure that never drifts from configuration.',
      icon: '🔄'
      // TODO: unverifiable claim removed — confirm with business before re-adding: "100% configuration accuracy"
    },
    {
      title: 'Chaos Engineering',
      desc: 'Proactively test infrastructure resilience through controlled experiments.',
      icon: '🧪'
      // TODO: unverifiable claim removed — confirm with business before re-adding: "10x improved resilience"
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

  // TODO: unverifiable claim removed — confirm with business before re-adding: stats banner
  // ("99.99% Average Uptime", "50ms Global Latency", "100% Security Compliant", "24/7 Monitoring")
  // Entire block removed — no verified track-record data backs these figures.

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

          {/* TODO: unverifiable claim removed — confirm with business before re-adding:
              "99.99% uptime guarantee", "50ms global latency", "100% security compliant"
              (was the "Infrastructure Advantage" checklist card). Whole card removed since
              every list item was a fabricated numeric claim with no qualitative content left
              to keep. See .heroGrid CSS updated to single column to account for its removal. */}
        </div>

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

        {/* Innovative Technologies */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our Infrastructure Innovations</h2>
          <p className={styles.sectionSubtitle}>
            Pushing the boundaries of what&apos;s possible with modern infrastructure
          </p>
          <div className={styles.innovationsGrid}>
            {innovations.map(innovation => (
              <div key={innovation.title} className={styles.innovationCard}>
                <div className={styles.innovationIcon}>{innovation.icon}</div>
                <h3 className={styles.innovationTitle}>{innovation.title}</h3>
                <p className={styles.innovationDesc}>{innovation.desc}</p>
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

        {/* Infrastructure Overview (factual body copy) */}
        <section className={styles.bodySection}>
          <h2>Infrastructure Built for Enterprises, Telcos, and Government</h2>
          <p>
            Pure Latency&apos;s Infrastructure practice covers four connected areas: network architecture,
            cloud infrastructure, security and compliance, and database systems. On the network side,
            this means designing and configuring routing, load balancing, and edge delivery using
            tools like Cisco and Juniper hardware, pfSense firewalls, and HAProxy or NGINX for traffic
            management. Cloud infrastructure work spans AWS, Microsoft Azure, and Google Cloud, with
            infrastructure-as-code practices built on Terraform, CloudFormation, Pulumi, Ansible, and
            Chef so environments can be provisioned and reproduced consistently rather than configured
            by hand — a deployment can be rebuilt from source rather than restored from a snapshot of
            unknown state.
          </p>
          <p>
            Security and compliance is treated as part of the infrastructure layer rather than an
            add-on: identity and access via Okta or Auth0, secrets management with Hashicorp Vault,
            edge protection through Cloudflare and AWS WAF, and monitoring stacks built on Prometheus,
            Grafana, Datadog, New Relic, or the ELK Stack to give visibility into how systems behave in
            production before an incident, not just after one. Database infrastructure covers both
            relational systems (PostgreSQL, MySQL) and non-relational systems (MongoDB, Redis,
            Cassandra), with attention to backup strategy, replication, and performance tuning as data
            volumes grow and query patterns change.
          </p>
          <p>
            This kind of work is aimed at organizations where infrastructure failures or security gaps
            carry outsized cost — enterprises consolidating fragmented systems across business units,
            and sectors like <Link href="/industries/telco-space">telecom and space-tech</Link> and{' '}
            <Link href="/industries/government">government</Link>, where network reliability, data
            security, and regulatory compliance are operational requirements rather than optional
            extras. A telco network expansion and a government data-handling project draw on the same
            underlying discipline: architecture that&apos;s documented, access that&apos;s auditable, and systems
            that behave predictably under load. The goal is infrastructure that a technical team can
            audit, reproduce, and hand over cleanly, not a black box tied to one engineer&apos;s memory.
          </p>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          {faqItems.map((item) => (
            <div key={item.question} className={styles.faqItem}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
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
