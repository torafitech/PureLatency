'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from './WebDevelopment.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

export default function WebDevelopmentPage() {
  const technologies = [
    {
      category: 'Frontend',
      icon: '🎨',
      items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular', 'Svelte', 'Tailwind CSS', 'Framer Motion']
    },
    {
      category: 'Backend',
      icon: '⚙️',
      items: ['Node.js', 'Python', 'Go', 'Ruby on Rails', 'PHP', 'Java', '.NET Core', 'GraphQL']
    },
    {
      category: 'Database',
      icon: '🗄️',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB', 'Firebase', 'Supabase']
    },
    {
      category: 'DevOps',
      icon: '🚀',
      items: ['Docker', 'Kubernetes', 'AWS', 'Vercel', 'Netlify', 'GitHub Actions', 'Terraform', 'CI/CD']
    }
  ];

  const features = [
    {
      title: 'Performance Optimized',
      desc: 'Lightning-fast load times and smooth interactions',
      icon: '⚡',
      metric: '< 1s load time'
    },
    {
      title: 'Mobile Responsive',
      desc: 'Flawless experience on every device',
      icon: '📱',
      metric: '100% responsive'
    },
    {
      title: 'SEO/GEO Friendly',
      desc: 'Built with search engines in mind',
      icon: '🔍',
      metric: 'Top rankings'
    },
    {
      title: 'Accessible',
      desc: 'WCAG 2.1 compliant for all users',
      icon: '♿',
      metric: 'AAA standard'
    }
  ];

  const stats = [
    { number: '50+', label: 'Websites Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '10+', label: 'Years Experience' }
  ];

  const process = [
    { step: '01', title: 'Discovery', desc: 'Understanding your vision and requirements' },
    { step: '02', title: 'Design', desc: 'Creating intuitive and beautiful interfaces' },
    { step: '03', title: 'Development', desc: 'Building with modern tech stack' },
    { step: '04', title: 'Launch', desc: 'Deploying with zero downtime' }
  ];

  const expertise = [
    'E-commerce Platforms',
    'SaaS Applications',
    'Corporate Websites',
    'Web Portals',
    'API Development',
    'Progressive Web Apps',
    'Real-time Applications',
    'Content Management Systems'
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
    { title: 'Web Development', href: '/services/web-development' },
    { title: 'Data and AI', href: '/services/data-ai' },
    { title: 'Cloud and DevOps', href: '/services/cloud-devops' },
    { title: 'Infrastructure', href: '/services/infrastructure' },
    { title: 'Fiber Optics', href: '/services/fiber-optics' }
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
          <span className={styles.breadcrumbCurrent}> Web Development</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroIcon}>🌐</div>
            <h1 className={styles.heroTitle}>Web Development</h1>
            <p className={styles.heroText}>
              We build modern, performant, and scalable web applications using 
              cutting-edge technologies. From simple websites to complex enterprise platforms, 
              we deliver digital experiences that engage and convert.
            </p>
          </div>
          <div className={styles.heroCard}>
            <span className={styles.heroCardIcon}>⚡</span>
            <h3 className={styles.heroCardTitle}>Next-Gen Web</h3>
            <p className={styles.heroCardSubtitle}>Built with the latest technologies</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.statsBanner}>
          {stats.map(stat => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className={styles.sectionTitle}>Why Choose Our Web Development</h2>
          <div className={styles.featuresGrid}>
            {features.map(feature => (
              <div key={feature.title} className={styles.featureCard}>
                <span className={styles.featureIcon}>{feature.icon}</span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
                <span className={styles.featureMetric}>{feature.metric}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className={styles.sectionTitle}>Our Technology Stack</h2>
          <div className={styles.technologyGrid}>
            {technologies.map(category => (
              <div key={category.category} className={styles.techCategory}>
                <div className={styles.techCategoryHeader}>
                  <span className={styles.techCategoryIcon}>{category.icon}</span>
                  <h3 className={styles.techCategoryTitle}>{category.category}</h3>
                </div>
                <div className={styles.techItems}>
                  {category.items.map(item => (
                    <span key={item} className={styles.techItem}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className={styles.sectionTitle}>What We Build</h2>
          <div className={styles.expertiseGrid}>
            {expertise.map(item => (
              <div key={item} className={styles.expertiseItem}>
                <span className={styles.expertiseIcon}>✓</span>
                <span className={styles.expertiseText}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className={styles.sectionTitle}>Our Development Process</h2>
          <div className={styles.processGrid}>
            {process.map(item => (
              <div key={item.step} className={styles.processStep}>
                <div className={styles.processStepNumber}>{item.step}</div>
                <h3 className={styles.processStepTitle}>{item.title}</h3>
                <p className={styles.processStepDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

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