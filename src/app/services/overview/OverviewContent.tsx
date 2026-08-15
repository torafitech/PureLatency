'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from './Overview.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

export default function Overview() {
  const coreServices = [
    {
      title: 'Applications',
      href: '/services/applications',
      desc: 'Web and mobile applications that combine beautiful design with powerful functionality.',
      icon: '📱',
      color: '#7C3AED',
      // TODO: unverifiable claims removed — confirm with business before re-adding: "50+ apps", "10M+ users", "4.9 rating"
      metrics: [] as string[]
    },
    {
      title: 'Web Development',
      href: '/services/web-development',
      desc: 'Modern, performant web solutions built with cutting-edge technologies.',
      icon: '🌐',
      color: '#10B981',
      // TODO: unverifiable claim removed — confirm with business before re-adding: "<1s load"
      metrics: ['100% responsive', 'SEO optimized']
    },
    {
      title: 'Data and AI',
      href: '/services/data-ai',
      desc: 'Intelligent systems that learn, adapt, and provide actionable insights.',
      icon: '🤖',
      color: '#F59E0B',
      // TODO: unverifiable claims removed — confirm with business before re-adding: "40% efficiency", "99.9% accuracy", "2.5x decisions"
      metrics: [] as string[]
    },
    {
      title: 'Cloud and DevOps',
      href: '/services/cloud-devops',
      desc: 'Automate infrastructure and streamline deployments for faster releases.',
      icon: '☁️',
      color: '#EC4899',
      // TODO: unverifiable claims removed — confirm with business before re-adding: "10x deploys", "99.99% uptime", "40% savings"
      metrics: [] as string[]
    },
    {
      title: 'Infrastructure',
      href: '/services/infrastructure',
      desc: 'Secure, scalable infrastructure that serves as the foundation for success.',
      icon: '⚙️',
      color: '#6366F1',
      // TODO: unverifiable claims removed — confirm with business before re-adding: "99.99% uptime", "<50ms latency", "100% compliant"
      metrics: [] as string[]
    },
    {
      title: 'Fiber Optics',
      href: '/services/fiber-optics',
      desc: 'High-speed fiber optic solutions for reliable, future-proof connectivity.',
      icon: '🔆',
      color: '#F97316',
      // TODO: unverifiable claims removed — confirm with business before re-adding: "10k+ miles", "99.99% uptime", "40km+ distance"
      metrics: [] as string[]
    }
  ];

  const approach = [
    {
      phase: 'Discovery',
      icon: '🔍',
      desc: 'We dive deep into your business goals, user needs, and technical requirements.',
      color: '#0066cc'
    },
    {
      phase: 'Strategy',
      icon: '🎯',
      desc: 'We create a roadmap that aligns technology with your business objectives.',
      color: '#7C3AED'
    },
    {
      phase: 'Execution',
      icon: '⚙️',
      desc: 'We build with agility, quality, and transparency every step of the way.',
      color: '#10B981'
    },
    {
      phase: 'Evolution',
      icon: '📈',
      desc: 'We continuously optimize and scale your solutions for long-term success.',
      color: '#F59E0B'
    }
  ];

  // TODO: unverifiable claims removed — confirm with business before re-adding: "10+ years average
  // experience", "100% client retention", "2 weeks sprint cycles", "5+ years average engagement".
  // `stat`/`statDesc` fields removed from all four cards below, qualitative title/desc kept.
  const differentiators = [
    {
      title: 'Technical Excellence',
      desc: 'Our engineers master the latest technologies and best practices.',
      icon: '⚡'
    },
    {
      title: 'Business First',
      desc: 'We focus on outcomes, not just output. Your success is our success.',
      icon: '🎯'
    },
    {
      title: 'Agile Delivery',
      desc: 'We deliver value continuously with transparent processes.',
      icon: '🔄'
    },
    {
      title: 'Long-term Partnership',
      desc: 'We build lasting relationships and support you beyond launch.',
      icon: '🤝'
    }
  ];

  const technologies = [
    // Frontend
    'React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular',
    // Backend
    'Node.js', 'Python', 'Go', 'Java', '.NET',
    // Mobile
    'React Native', 'Flutter', 'Swift', 'Kotlin',
    // Cloud
    'AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker',
    // AI/ML
    'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain',
    // Database
    'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch',
    // Fiber Optics
    'OTDR', 'OS2', 'OM4', 'DWDM', 'MPO/MTP'
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
          <span className={styles.breadcrumbCurrent}> Services</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              🚀 Comprehensive Digital Solutions
            </div>
            <h1 className={styles.heroTitle}>
              Transform your vision<br />
              <span className={styles.heroTitleGradient}>
                into digital reality
              </span>
            </h1>
            <p className={styles.heroText}>
              We offer a comprehensive suite of digital services designed to help you build,
              scale, and optimize your technology. From applications to infrastructure,
              we deliver solutions that drive real business results.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Start Your Project
              </Link>
              <Link href="#services" className={styles.buttonSecondary}>
                Explore Services ↓
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>⚡</div>
              <h3 className={styles.heroCardTitle}>The Pure Latency Approach</h3>
              {/* TODO: unverifiable claims removed — confirm with business before re-adding:
                  "50+ successful projects", "100% client satisfaction", "10+ years of expertise" */}
              <p className={styles.heroCardSubtitle}>
                Discovery, strategy, execution, and evolution — the same four-phase approach on every engagement.
              </p>
            </div>
          </div>
        </div>

        {/* Core Services */}
        <section id="services" style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our Core Services</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive digital solutions tailored to your unique business needs
          </p>
          <div className={styles.servicesGrid}>
            {coreServices.map(service => (
              <Link
                key={service.title}
                href={service.href}
                className={styles.serviceCard}
                style={{ '--service-color': service.color } as React.CSSProperties}
              >
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
                {service.metrics.length > 0 && (
                  <div className={styles.serviceMetrics}>
                    {service.metrics.map(metric => (
                      <span key={metric} className={styles.serviceMetric}>
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
                <div className={styles.serviceLink} style={{ color: service.color }}>
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Our Approach */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our Approach</h2>
          <p className={styles.sectionSubtitle}>
            A proven methodology that ensures successful project delivery
          </p>
          <div className={styles.approachGrid}>
            {approach.map((phase, index) => (
              <div
                key={phase.phase}
                className={styles.approachItem}
                style={{ '--phase-color': phase.color } as React.CSSProperties}
              >
                <div className={styles.approachIcon}>{phase.icon}</div>
                <div className={styles.approachPhaseNum}>Phase {index + 1}</div>
                <h3 className={styles.approachTitle}>{phase.phase}</h3>
                <p className={styles.approachDesc}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>What Sets Us Apart</h2>
          <p className={styles.sectionSubtitle}>
            Why clients choose Pure Latency for their most important projects
          </p>
          <div className={styles.differentiatorsGrid}>
            {differentiators.map(diff => (
              <div key={diff.title} className={styles.diffCard}>
                <div className={styles.diffIcon}>{diff.icon}</div>
                <h3 className={styles.diffTitle}>{diff.title}</h3>
                <p className={styles.diffDesc}>{diff.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our Technology Ecosystem</h2>
          <p className={styles.sectionSubtitle}>
            We leverage the best tools and frameworks to build exceptional solutions
          </p>
          <div className={styles.techStack}>
            {technologies.map(tech => (
              <span key={tech} className={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/*
          Testimonials section removed entirely (not just commented out): it attributed named
          quotes to "Sarah Chen, Product Lead, InnovateTech" and "Michael Rodriguez, CTO,
          FinScale" plus a "40% cost savings" figure — none of these people, companies, or
          numbers exist anywhere else in this repo. This is a fabricated testimonial, not just
          an unverified stat, and does not belong in source even TODO-flagged.
        */}

        {/* Services Overview (short factual body copy — this page is canonicalized to /services, see page.tsx) */}
        <section className={styles.bodySection}>
          <h2 className={styles.sectionTitle}>What This Page Covers</h2>
          <p>
            This is a services overview for Pure Latency, a Hyderabad, India-based technology
            company. Full details on each service — including the specific tools and
            technologies used, FAQs, and industry fit — live on the{' '}
            <Link href="/services">main Services page</Link> and on each individual service
            page (<Link href="/services/applications">Applications</Link>,{' '}
            <Link href="/services/web-development">Web Development</Link>,{' '}
            <Link href="/services/data-ai">Data and AI</Link>,{' '}
            <Link href="/services/cloud-devops">Cloud and DevOps</Link>,{' '}
            <Link href="/services/infrastructure">Infrastructure</Link>). Clients are primarily{' '}
            <Link href="/industries/enterprise">enterprise</Link> organizations, along with{' '}
            <Link href="/industries/telco-space">telecom and space-tech</Link> clients for
            infrastructure and connectivity work.
          </p>
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
        <div className={styles.backLinkContainer}>
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
