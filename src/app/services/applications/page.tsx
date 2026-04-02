'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from './Applications.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

export default function ApplicationsPage() {
  const capabilities = [
    {
      title: 'Web Applications',
      desc: 'Build scalable, high-performance web applications with modern frameworks and best practices.',
      icon: '🌐',
      color: '#7C3AED',
      metrics: ['< 1s load time', '100% responsive', 'SEO optimized']
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
      metrics: ['99.99% uptime', 'Role-based access', 'Audit logging']
    },
    {
      title: 'Real-time Applications',
      desc: 'Build interactive applications with live updates, messaging, and collaborative features.',
      icon: '⚡',
      color: '#EC4899',
      metrics: ['< 100ms latency', 'WebSocket ready', 'Live sync']
    }
  ];

  const solutions = [
    {
      industry: 'E-commerce',
      icon: '🛍️',
      challenge: 'High traffic spikes and cart abandonment during peak seasons',
      solution: 'Scalable e-commerce platform with personalized recommendations and one-click checkout',
      impact: '45% increase in conversion, 99.99% uptime during Black Friday',
      gradient: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)'
    },
    {
      industry: 'Healthcare',
      icon: '🏥',
      challenge: 'Secure patient portals and HIPAA-compliant data handling',
      solution: 'Patient portal with secure messaging, appointment scheduling, and medical records access',
      impact: '200,000+ active patients, 100% HIPAA compliant',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
    },
    {
      industry: 'FinTech',
      icon: '💰',
      challenge: 'Complex financial transactions requiring iron-clad security',
      solution: 'Mobile banking app with biometric authentication and real-time transaction monitoring',
      impact: '$500M+ transactions processed, zero security incidents',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
    },
    {
      industry: 'Logistics',
      icon: '🚚',
      challenge: 'Real-time tracking and route optimization for fleet management',
      solution: 'Driver app with live GPS tracking, route optimization, and delivery confirmation',
      impact: '30% faster deliveries, 25% fuel savings',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)'
    }
  ];

  const innovations = [
    {
      title: 'Progressive Web Apps',
      desc: 'App-like experiences that work offline and install on home screens without app stores.',
      icon: '📲',
      stat: '3x',
      statDesc: 'faster engagement'
    },
    {
      title: 'Micro-frontends',
      desc: 'Build scalable applications with independently deployable frontend modules.',
      icon: '🧩',
      stat: '10x',
      statDesc: 'development speed'
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
      icon: '🤖',
      stat: '40%',
      statDesc: 'user engagement lift'
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
    { value: '50+', label: 'Apps Delivered', icon: '📱' },
    { value: '10M+', label: 'Users Served', icon: '👥' },
    // { value: '4.9', label: 'App Store Rating', icon: '⭐' },
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
              <ul className={styles.heroCardList}>
                {[
                  '50+ apps delivered',
                  '10M+ users served',
                  '4.9 star average rating'
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

        {/* Industry Solutions */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Industry-Specific Applications</h2>
          <p className={styles.sectionSubtitle}>
            Tailored applications that address the unique challenges of your industry
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
        </section>

        {/* Innovative Technologies */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our Application Innovations</h2>
          <p className={styles.sectionSubtitle}>
            Pushing the boundaries of what's possible with modern application development
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