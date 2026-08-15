'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from './PartnersOverview.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

export default function PartnersOverviewPage() {
  // Deleted outright, not TODO-flagged — same fabrication as
  // src/app/partners/page.tsx: a stats banner ("25+ Active Partners" etc.),
  // an "ecosystem" of real, identifiable companies (AWS, Google Cloud,
  // Microsoft Azure, DigitalOcean, Vercel, MongoDB, Elastic, Datadog,
  // Auth0, GitHub, GitLab, Figma, Slack, Jira, Deloitte, Accenture, IBM,
  // TCS) claimed as partners, a "By the Numbers" section inventing a
  // "$10M+ Joint Revenue" figure, and three fake spokesperson testimonials
  // attributed to named individuals at AWS/Vercel/MongoDB. None of this
  // exists anywhere else in this repo. Tabs removed along with them — only
  // 'approach' had non-fabricated content, so this page no longer needs
  // tab navigation.
  //
  // If real partnerships exist, rebuild this from actual signed
  // agreements — ask the business for partner names, tiers, and dates
  // rather than reintroducing placeholders.

  const theBenefits = [
    {
      title: 'For Our Partners',
      items: [
        'Access to enterprise clients',
        'Joint go-to-market programs',
        'Technical collaboration',
        'Co-innovation opportunities',
        'Dedicated partner support'
      ],
      icon: '🤝',
      color: '#0066cc'
    },
    {
      title: 'For Our Clients',
      items: [
        'Best-in-class technology stack',
        'Seamless integrations',
        'Certified expertise',
        'Vendor-backed support',
        'Future-proof solutions'
      ],
      icon: '👥',
      color: '#10B981'
    }
  ];

  const theApproach = [
    {
      step: '01',
      title: 'Strategic Alignment',
      desc: 'We choose partners who share our values and commitment to quality.',
      icon: '🎯',
      color: '#0066cc'
    },
    {
      step: '02',
      title: 'Technical Integration',
      desc: 'Deep technical collaboration to ensure seamless integration.',
      icon: '⚙️',
      color: '#10B981'
    },
    {
      step: '03',
      title: 'Joint Go-to-Market',
      desc: 'Collaborative marketing and sales initiatives.',
      icon: '📢',
      color: '#7C3AED'
    },
    {
      step: '04',
      title: 'Continuous Evolution',
      desc: 'Regular reviews and adaptation to market needs.',
      icon: '🔄',
      color: '#F59E0B'
    }
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
          <Link href="/partners" className={styles.breadcrumbLink}> Partners</Link> / 
          <span className={styles.breadcrumbCurrent}> Overview</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              🌐 Our Partner Ecosystem
            </div>
            <h1 className={styles.heroTitle}>
              Stronger together<br />
              <span className={styles.heroTitleGradient}>
                with the best in class
              </span>
            </h1>
            <p className={styles.heroText}>
              We believe that great software is built through collaboration. We&apos;re building a
              partner ecosystem to extend our capabilities and give clients access to a wider
              range of technology and expertise.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Become a Partner
              </Link>
              <Link href="#approach" className={styles.buttonSecondary}>
                See Our Approach ↓
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>🤝</div>
              <h3 className={styles.heroCardTitle}>Partner With Us</h3>
              <p className={styles.heroCardSubtitle}>
                Technology and implementation partnerships, built one relationship at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <section id="approach" style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our Partnership Approach</h2>
          <p className={styles.sectionSubtitle}>
            How we build and nurture lasting partnerships
          </p>
          <div className={styles.approachGrid}>
            {theApproach.map((item, index) => (
              <div key={item.step} className={styles.approachCard}>
                {index < theApproach.length - 1 && (
                  <div className={styles.approachConnector} />
                )}
                <div className={styles.approachIcon}>{item.icon}</div>
                <div className={styles.approachStep} style={{ color: item.color }}>
                  {item.step}
                </div>
                <h3 className={styles.approachTitle}>{item.title}</h3>
                <p className={styles.approachDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Who Benefits</h2>
          <div className={styles.benefitsGrid}>
            {theBenefits.map(benefit => (
              <div key={benefit.title} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle} style={{ color: benefit.color }}>
                  {benefit.title}
                </h3>
                <ul className={styles.benefitList}>
                  {benefit.items.map(item => (
                    <li key={item} className={styles.benefitItem}>
                      <span className={styles.benefitCheck} style={{ color: benefit.color }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
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

        {/* Back to Partners */}
        <div className={styles.backLinkContainer}>
          <Link href="/partners" className={styles.backLink}>
            ← Back to Partners
          </Link>
        </div>
      </main>

      {/* Footer */}
     
      <Footer/>
    </>
  );
}