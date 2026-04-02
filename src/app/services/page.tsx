'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from './Services.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

export default function ServicesPage() {
  const coreServices = [
    {
      title: 'Applications',
      href: '/services/applications',
      desc: 'Custom web and mobile apps engineered for performance, scalability, and exceptional user experiences.',
      icon: '📱',
      color: '#7C3AED',
      metrics: ['Fast time-to-market', 'Intuitive UX', 'Scalable architecture']
    },
    {
      title: 'Web Development',
      href: '/services/web-development',
      desc: 'Modern, lightning-fast websites and web applications built with the latest frameworks and best practices.',
      icon: '🌐',
      color: '#10B981',
      metrics: ['Blazing fast', 'SEO optimized', 'Mobile-first']
    },
    {
      title: 'Data and AI',
      href: '/services/data-ai',
      desc: 'Intelligent systems that transform raw data into actionable insights and competitive advantage.',
      icon: '🤖',
      color: '#F59E0B',
      metrics: ['Predictive analytics', 'Automated decisions', 'Real-time insights']
    },
    {
      title: 'Cloud and DevOps',
      href: '/services/cloud-devops',
      desc: 'Streamlined infrastructure and automated pipelines that accelerate delivery and reduce costs.',
      icon: '☁️',
      color: '#EC4899',
      metrics: ['Faster releases', 'Reduced downtime', 'Cost efficient']
    },
    {
      title: 'Infrastructure',
      href: '/services/infrastructure',
      desc: 'Rock-solid, secure infrastructure designed to grow with your business and handle any load.',
      icon: '⚙️',
      color: '#6366F1',
      metrics: ['High availability', 'Enterprise security', 'Auto-scaling']
    },
    {
      title: 'Fiber Optics',
      href: '/services/fiber-optics',
      desc: 'High-speed, reliable fiber optic solutions for telecommunications, data centers, and enterprise networks.',
      icon: '🔆',
      color: '#F97316',
      metrics: ['10k+ miles deployed', '99.99% uptime', 'Future-proof']
    },
    {
      title: 'Quantum Compute',
      href: '/services/quantum-compute',
      desc: 'Cutting-edge quantum computing solutions for complex problem-solving, from drug discovery to financial modeling.',
      icon: '⚛️',
      color: '#5f2b9c',
      metrics: ['Exponential speed', 'Quantum advantage', 'Expert support']
    }
  ];

  const stats = [
    { value: '2+', label: 'Successful Projects', icon: '🏆' },
    { value: '98%', label: 'Client Retention Rate', icon: '🤝' },
    { value: '10+', label: 'Years of Innovation', icon: '⏳' },
    { value: '24/7', label: 'Expert Support', icon: '🌙' }
  ];

  const methodology = [
    {
      phase: 'Discover',
      icon: '🔎',
      desc: 'We immerse ourselves in your business to understand goals, users, and technical constraints.',
      color: '#0066cc',
      details: ['User research', 'Market analysis', 'Technical audit']
    },
    {
      phase: 'Design',
      icon: '✏️',
      desc: 'We craft elegant solutions that balance user needs with business objectives.',
      color: '#7C3AED',
      details: ['UX strategy', 'Visual design', 'Prototyping']
    },
    {
      phase: 'Build',
      icon: '🛠️',
      desc: 'We develop with agility, transparency, and rigorous quality standards.',
      color: '#10B981',
      details: ['Agile sprints', 'Continuous testing', 'Regular demos']
    },
    {
      phase: 'Scale',
      icon: '📊',
      desc: 'We optimize and grow your solution to meet evolving business demands.',
      color: '#F59E0B',
      details: ['Performance tuning', 'Feature expansion', 'Growth strategy']
    }
  ];

  const differentiators = [
    {
      title: 'Deep Technical Expertise',
      desc: 'Our engineers master the full technology stack, from frontend to infrastructure.',
      icon: '⚙️',
      stat: '10+',
      statDesc: 'specialized engineers'
    },
    {
      title: 'Business-Driven Approach',
      desc: 'We measure success by business outcomes, not just technical deliverables.',
      icon: '📈',
      stat: '2x',
      statDesc: 'faster ROI'
    },
    {
      title: 'Transparent Collaboration',
      desc: "You're part of the team with open communication and regular progress updates.",
      icon: '🤝',
      stat: '100%',
      statDesc: 'transparency'
    },
    {
      title: 'Future-Ready Solutions',
      desc: 'We build with tomorrow in mind, ensuring your technology evolves with you.',
      icon: '🔮',
      stat: '10+ years',
      statDesc: 'forward compatibility'
    }
  ];

  const technologies = [
    // Frontend
    'React', 'Next.js 14', 'TypeScript', 'Vue 3', 'Svelte',
    // Backend
    'Node.js', 'Python FastAPI', 'Go', 'GraphQL', 'tRPC',
    // Mobile
    'React Native', 'Flutter 3', 'SwiftUI', 'Jetpack Compose',
    // Cloud
    'AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform',
    // AI/ML
    'TensorFlow', 'PyTorch', 'LangChain', 'OpenAI', 'Hugging Face',
    // Database
    'PostgreSQL', 'MongoDB', 'Redis', 'ClickHouse', 'Snowflake'
  ];

  const clients = [
    { name: 'TechVision', logo: 'TV', industry: 'SaaS' },
    { name: 'GreenLeaf', logo: 'GL', industry: 'E-commerce' },
    { name: 'MediCore', logo: 'MC', industry: 'Healthcare' },
    { name: 'FinTrust', logo: 'FT', industry: 'FinTech' },
    { name: 'EduSmart', logo: 'ES', industry: 'EdTech' },
    { name: 'LogiSync', logo: 'LS', industry: 'Logistics' }
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
              ✨ Engineering Excellence, Delivered
            </div>
            <h1 className={styles.heroTitle}>
              Technology solutions<br />
              <span className={styles.heroTitleGradient}>
                that drive real growth
              </span>
            </h1>
            <p className={styles.heroText}>
              We partner with forward-thinking companies to build technology that solves complex problems, 
              delights users, and creates lasting business value. From concept to scale, we're with you 
              every step of the way.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Discuss Your Project
              </Link>
              <Link href="#services" className={styles.buttonSecondary}>
                Explore Offerings ↓
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>🚀</div>
              <h3 className={styles.heroCardTitle}>Why Companies Choose Us</h3>
              <ul className={styles.heroCardList}>
                {[
                  '2+ successful projects delivered',
                  '98% client retention rate',
                  '10+ years of innovation'
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

        {/* Core Services */}
        <section id="services" style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>What We Offer</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive technology services tailored to your unique challenges
          </p>
          <div className={styles.servicesGrid}>
            {coreServices.map(service => (
              <Link
                key={service.title}
                href={service.href}
                className={styles.serviceCard}
              >
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <div className={styles.serviceMetrics}>
                  {service.metrics.map(metric => (
                    <span key={metric} className={styles.metricTag}>
                      {metric}
                    </span>
                  ))}
                </div>
                <div className={styles.serviceLink} style={{ color: service.color }}>
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Our Methodology */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our Methodology</h2>
          <p className={styles.sectionSubtitle}>
            A proven framework for delivering exceptional results
          </p>
          <div className={styles.methodologyGrid}>
            {methodology.map((phase, index) => (
              <div key={phase.phase} className={styles.methodologyCard}>
                {index < methodology.length - 1 && <div className={styles.methodologyConnector} />}
                <div className={styles.methodologyIcon}>{phase.icon}</div>
                <div className={styles.methodologyPhaseNum} style={{ color: phase.color }}>
                  Phase {index + 1}
                </div>
                <h3 className={styles.methodologyPhase}>{phase.phase}</h3>
                <p className={styles.methodologyDesc}>{phase.desc}</p>
                <div className={styles.methodologyDetails}>
                  {phase.details.map(detail => (
                    <span key={detail} className={styles.detailTag}>
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Why Our Clients Trust Us</h2>
          <p className={styles.sectionSubtitle}>
            What makes PureLatency the partner of choice for innovative companies
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
          <h2 className={styles.sectionTitle}>Modern Tech Stack</h2>
          <p className={styles.sectionSubtitle}>
            We leverage cutting-edge technologies to build future-proof solutions
          </p>
          <div className={styles.techStack}>
            {technologies.map(tech => (
              <span key={tech} className={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Trusted By */}
        {/* <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Trusted By Industry Leaders</h2>
          <div className={styles.clientsGrid}>
            {clients.map(client => (
              <div key={client.name} className={styles.clientItem}>
                <div className={styles.clientLogo}>{client.logo}</div>
                <div className={styles.clientName}>{client.name}</div>
                <div className={styles.clientIndustry}>{client.industry}</div>
              </div>
            ))}
          </div>
        </section> */}

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