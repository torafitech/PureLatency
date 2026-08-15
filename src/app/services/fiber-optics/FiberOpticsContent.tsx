'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from './FiberOptics.module.css';
import Footer from '@/components/layout/Footer';

// TODO: confirm real capability before expanding content — do not optimize
// for ranking until content is verified. Per context.md: Fiber Optics is
// aspirational, not a validated operating practice — the specific claims
// below (miles deployed, years of experience, uptime guarantee, etc.) are
// unverified and must not be treated as established track record.
export default function FiberOpticsPage() {
  const technologies = [
    {
      category: 'Cable Types',
      icon: '🔌',
      items: ['Single-mode (OS2)', 'Multi-mode (OM3/OM4)', 'Armored', 'Indoor/Outdoor', 'Tight-buffered', 'Loose-tube', 'Ribbon', 'Bend-insensitive']
    },
    {
      category: 'Connectors',
      icon: '🔗',
      items: ['LC', 'SC', 'ST', 'FC', 'MPO/MTP', 'MT-RJ', 'E2000', 'SMA']
    },
    {
      category: 'Testing',
      icon: '📊',
      items: ['OTDR', 'Optical Power Meter', 'Visual Fault Locator', 'Insertion Loss', 'Return Loss', 'Endoscopy', 'Chromatic Dispersion', 'PMD']
    },
    {
      category: 'Infrastructure',
      icon: '🏗️',
      items: ['Fiber Patch Panels', 'Fiber Enclosures', 'Splice Trays', 'Fiber Distribution Hubs', 'WDM/CWDM/DWDM', 'Media Converters', 'SFP Modules', 'Fiber Pigtails']
    }
  ];

  const features = [
    {
      title: 'Light Speed',
      desc: 'Data transmission at the speed of light',
      icon: '⚡',
      metric: 'Up to 100 Gbps' // TODO: unverifiable claim, confirm or remove
    },
    {
      title: 'EMI Immunity',
      desc: 'Completely immune to electromagnetic interference',
      icon: '🛡️',
      metric: '100% secure' // TODO: unverifiable claim, confirm or remove
    },
    {
      title: 'Long Distance',
      desc: 'Signals travel miles without degradation',
      icon: '📏',
      metric: '>40 km' // TODO: unverifiable claim, confirm or remove
    },
    {
      title: 'Future-proof',
      desc: 'Bandwidth capacity for tomorrow\'s needs',
      icon: '🔮',
      metric: 'Scalable'
    }
  ];

  // TODO: all four stats below are unverified — confirm with the business
  // before shipping, or remove the stats banner entirely.
  const stats = [
    { number: '10k+', label: 'Fiber Miles Deployed' },
    { number: '99.99%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Network Monitoring' },
    { number: '15+', label: 'Years Experience' }
  ];

  const process = [
    { step: '01', title: 'Site Survey', desc: 'Assess infrastructure and design pathway' },
    { step: '02', title: 'Installation', desc: 'Precision cabling and fusion splicing' },
    { step: '03', title: 'Testing', desc: 'OTDR certification and power validation' },
    { step: '04', title: 'Maintenance', desc: 'Ongoing support and troubleshooting' }
  ];

  const expertise = [
    'Data Centers',
    'Telecommunications',
    'Enterprise Networks',
    'FTTH (Fiber to the Home)',
    'Campus Backbones',
    'Undersea Cables',
    'Industrial Networks',
    'Smart Cities'
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
          <span className={styles.breadcrumbCurrent}> Fiber Optics</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroIcon}>🔆</div>
            <h1 className={styles.heroTitle}>Fiber Optics</h1>
            <p className={styles.heroText}>
              Experience the speed of light. We provide end-to-end fiber optic solutions
              including installation, testing, and maintenance for telecommunications,
              data centers, and enterprise networks. The backbone of modern connectivity.
            </p>
          </div>
          <div className={styles.heroCard}>
            <span className={styles.heroCardIcon}>✨</span>
            <h3 className={styles.heroCardTitle}>Speed of Light</h3>
            <p className={styles.heroCardSubtitle}>Immune to interference · Secure · Long-haul</p>
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
          <h2 className={styles.sectionTitle}>Why Choose Fiber Optics</h2>
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
          <h2 className={styles.sectionTitle}>Fiber Optics Technology</h2>
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
          <h2 className={styles.sectionTitle}>Our Fiber Solutions</h2>
          <div className={styles.expertiseGrid}>
            {expertise.map(item => (
              <div key={item} className={styles.expertiseItem}>
                <span className={styles.expertiseCheck}>✓</span>
                <span className={styles.expertiseText}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className={styles.sectionTitle}>Our Fiber Deployment Process</h2>
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
