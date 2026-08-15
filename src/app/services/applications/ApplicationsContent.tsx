'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from './Applications.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

type FaqItem = { question: string; answer: string };

export default function ApplicationsContent({ faqItems }: { faqItems: FaqItem[] }) {
  const capabilities = [
    {
      title: 'Web Applications',
      desc: 'Build scalable, high-performance web applications with modern frameworks and best practices.',
      icon: '🌐',
      color: '#7C3AED',
      metrics: [
        // TODO: unverifiable claim removed — confirm with business before re-adding: "< 1s load time"
        '100% responsive', 'SEO optimized'
      ]
    },
    {
      title: 'Mobile Applications',
      desc: 'Create native and cross-platform mobile experiences that delight users on every device.',
      icon: '📱',
      color: '#10B981',
      metrics: ['iOS & Android', 'Offline support', 'Push notifications']
    },
    {
      title: 'Enterprise Applications',
      desc: 'Develop robust, secure applications that power critical business operations at scale.',
      icon: '🏢',
      color: '#F59E0B',
      metrics: [
        // TODO: unverifiable claim removed — confirm with business before re-adding: "99.99% uptime"
        'Role-based access', 'Audit logging'
      ]
    },
    {
      title: 'Real-time Applications',
      desc: 'Build interactive applications with live updates, messaging, and collaborative features.',
      icon: '⚡',
      color: '#EC4899',
      metrics: [
        // TODO: unverifiable claim removed — confirm with business before re-adding: "< 100ms latency"
        'WebSocket ready', 'Live sync'
      ]
    }
  ];

  // TODO: unverifiable claim removed — confirm with business before re-adding: entire "Industry-Specific
  // Applications" section (fabricated case studies with unverified outcome numbers), including:
  // "45% increase in conversion, 99.99% uptime during Black Friday" (E-commerce)
  // "200,000+ active patients, 100% HIPAA compliant" (Healthcare)
  // "$500M+ transactions processed, zero security incidents" (FinTech)
  // "30% faster deliveries, 25% fuel savings" (Logistics)

  const innovations = [
    {
      title: 'Progressive Web Apps',
      desc: 'App-like experiences that work offline and install on home screens without app stores.',
      icon: '📲'
      // TODO: unverifiable claim removed — confirm with business before re-adding: "3x faster engagement"
    },
    {
      title: 'Micro-frontends',
      desc: 'Build scalable applications with independently deployable frontend modules.',
      icon: '🧩'
      // TODO: unverifiable claim removed — confirm with business before re-adding: "10x development speed"
    },
    {
      title: 'Serverless Architecture',
      desc: 'Run application code without managing servers, scaling automatically.',
      icon: '⚡',
      stat: '0',
      statDesc: 'server management'
    },
    {
      title: 'AI-Powered Apps',
      desc: 'Integrate intelligent features like recommendations and chatbots.',
      icon: '🤖'
      // TODO: unverifiable claim removed — confirm with business before re-adding: "40% user engagement lift"
    }
  ];

  const process = [
    {
      phase: 'Discovery',
      icon: '🔍',
      activities: ['Requirements gathering', 'User research', 'Technical feasibility', 'MVP definition'],
      duration: '2-3 weeks'
    },
    {
      phase: 'Design',
      icon: '🎨',
      activities: ['UX wireframing', 'UI design', 'Prototyping', 'User testing'],
      duration: '3-4 weeks'
    },
    {
      phase: 'Development',
      icon: '⚙️',
      activities: ['Agile sprints', 'API integration', 'Testing', 'Code reviews'],
      duration: '8-16 weeks'
    },
    {
      phase: 'Launch',
      icon: '🚀',
      activities: ['Deployment', 'App store submission', 'Performance monitoring', 'User feedback'],
      duration: '2-3 weeks'
    }
  ];

  const stats = [
    // TODO: unverifiable claim removed — confirm with business before re-adding: "50+ Apps Delivered"
    // TODO: unverifiable claim removed — confirm with business before re-adding: "10M+ Users Served"
    { value: '24/7', label: 'Support', icon: '🆘' }
  ];

  const technologies = [
    // Frontend Frameworks
    'React', 'Next.js', 'Vue.js', 'Angular', 'Svelte',
    // Mobile Frameworks
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android',
    // State Management
    'Redux', 'Zustand', 'MobX', 'Recoil', 'Context API',
    // Backend & API
    'Node.js', 'GraphQL', 'REST', 'WebSockets', 'tRPC',
    // Testing
    'Jest', 'Cypress', 'Detox', 'Playwright', 'Testing Library',
    // Deployment
    'Vercel', 'Netlify', 'App Store Connect', 'Google Play Console'
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
          <span className={styles.breadcrumbCurrent}> Applications</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              📱 Where Ideas Become Reality
            </div>
            <h1 className={styles.heroTitle}>
              Build applications that<br />
              <span className={styles.heroTitleGradient}>
                users love to use
              </span>
            </h1>
            <p className={styles.heroText}>
              We design and develop exceptional web and mobile applications that combine beautiful
              user experiences with powerful functionality. From startups to enterprises, we build
              apps that drive engagement and deliver results.
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
              <div className={styles.heroCardIcon}>📱</div>
              <h3 className={styles.heroCardTitle}>The Application Advantage</h3>
              {/*
                TODO: unverifiable claim removed — confirm with business before re-adding: original
                checklist here was ['50+ apps delivered', '10M+ users served', '4.9 star average
                rating'] — all three were fabricated track-record numbers, so the whole checklist
                was removed rather than partially kept.
              */}
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
          <h2 className={styles.sectionTitle}>Core Application Capabilities</h2>
          <p className={styles.sectionSubtitle}>
            We build applications that combine beautiful design with powerful functionality
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
          <h2 className={styles.sectionTitle}>Our Application Innovations</h2>
          <p className={styles.sectionSubtitle}>
            Pushing the boundaries of what&apos;s possible with modern application development
          </p>
          <div className={styles.innovationsGrid}>
            {innovations.map(innovation => (
              <div key={innovation.title} className={styles.innovationCard}>
                <div className={styles.innovationIcon}>{innovation.icon}</div>
                <h3 className={styles.innovationTitle}>{innovation.title}</h3>
                <p className={styles.innovationDesc}>{innovation.desc}</p>
                {innovation.stat && (
                  <div className={styles.innovationStat}>
                    <div className={styles.innovationStatValue}>{innovation.stat}</div>
                    <div className={styles.innovationStatDesc}>{innovation.statDesc}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Process Timeline */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our Application Development Process</h2>
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

        {/* Application Development Overview */}
        <section className={styles.bodyCopySection}>
          <h2 className={styles.sectionTitle}>Application Development at Pure Latency</h2>
          <p className={styles.bodyCopyText}>
            Pure Latency&apos;s Applications practice designs and builds web, mobile, and enterprise
            software for organizations that need custom systems rather than off-the-shelf tools.
            On the web side this means single-page and server-rendered applications built with
            React and Next.js; on mobile, cross-platform delivery with React Native and Flutter
            alongside native iOS (Swift) and Android (Kotlin) development when a platform-specific
            build is the right call. Backend and API work is handled with Node.js, GraphQL, REST,
            and WebSocket-based services for features that need live, bidirectional updates —
            messaging, dashboards, monitoring views, and collaborative tools.
          </p>
          <p className={styles.bodyCopyText}>
            Enterprise application work covers the parts of software that matter most once a system
            is running in production: role-based access control, audit logging, integration with
            existing identity and data systems, and architecture that can be extended as requirements
            change. This is the core of the practice for{' '}
            <Link href="/industries/enterprise">enterprise</Link> clients who need internal tools,
            customer-facing platforms, or line-of-business systems built to their own specifications
            rather than adapted from a generic product. The same engineering approach — clear
            requirements, staged delivery, and attention to security and access control — applies to
            application work for{' '}
            <Link href="/industries/telco-space">telecom and space-tech</Link> organizations, where
            real-time data handling and system reliability are typically first-order requirements
            rather than add-ons.
          </p>
          <p className={styles.bodyCopyText}>
            The development process runs through discovery, design, build, and launch phases, with
            testing (Jest, Cypress, Playwright, Detox) and code review built into each sprint rather
            than left to the end. Teams size and project scope determine how these phases play out in
            practice — the process above is indicative of how work is typically structured, not a
            fixed schedule that applies to every engagement.
          </p>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          {faqItems.map((item) => (
            <div key={item.question} className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>{item.question}</h3>
              <p className={styles.faqAnswer}>{item.answer}</p>
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
