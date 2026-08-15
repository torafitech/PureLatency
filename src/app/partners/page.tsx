'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from './Partners.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

export default function PartnersPage() {
  // Deleted outright, not TODO-flagged — fabricated partnerships with real,
  // identifiable companies (AWS, Google Cloud, Microsoft Azure,
  // DigitalOcean, Vercel, MongoDB, Elastic, Datadog, Auth0, GitHub, GitLab,
  // Figma, Slack, Jira, Deloitte, Accenture, IBM, TCS), each with an
  // invented tier and "since 2026" date, plus a stats banner ("25+ Active
  // Partners" etc.) and three fake spokesperson testimonials attributed to
  // named individuals at AWS/Vercel/MongoDB. None of this exists anywhere
  // else in this repo. Same treatment as the fabricated about-page content
  // in the prior pass: deleted, not commented out. The tab navigation that
  // switched between these sections ('all' / 'by-category' / 'success') is
  // removed along with them — only 'benefits' had any non-fabricated
  // content, so this page no longer needs tabs.
  //
  // If real technology or implementation partnerships exist, this page
  // should be rebuilt from actual signed agreements — ask the business for
  // partner names, tiers, and dates rather than reintroducing placeholders.

  const benefits = [
    {
      title: 'Access to Enterprise Clients',
      desc: 'Connect with enterprise and high-growth clients through our network',
      icon: '🏢'
    },
    {
      title: 'Joint Go-to-Market',
      desc: 'Collaborative marketing campaigns, events, and sales initiatives',
      icon: '📢'
    },
    {
      title: 'Technical Collaboration',
      desc: 'Work alongside our engineering team on innovative solutions',
      icon: '⚙️'
    },
    {
      title: 'Co-innovation Opportunities',
      desc: 'Build next-generation products together with shared IP',
      icon: '💡'
    },
    {
      title: 'Dedicated Partner Manager',
      desc: 'Single point of contact for all your needs',
      icon: '🤝'
    },
    {
      title: 'Training & Enablement',
      desc: 'Technical and sales training for your team',
      icon: '📚'
    }
  ];

  const partnerTiers = [
    {
      tier: 'Strategic',
      color: '#0066cc',
      benefits: ['Executive sponsorship', 'Joint roadmap planning', 'Co-marketing funds', 'Quarterly business reviews']
    },
    {
      tier: 'Premier',
      color: '#10B981',
      benefits: ['Dedicated partner manager', 'Technical account support', 'Joint go-to-market', 'Partner portal access']
    },
    {
      tier: 'Gold',
      color: '#7C3AED',
      benefits: ['Partner enablement', 'Sales training', 'Marketing support', 'Community access']
    },
    {
      tier: 'Partner',
      color: '#F59E0B',
      benefits: ['Basic support', 'Partner directory listing', 'Newsletter inclusion', 'Event invitations']
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
          <span className={styles.breadcrumbCurrent}> Partners</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              🤝 Built on Partnerships
            </div>
            <h1 className={styles.heroTitle}>
              Stronger together<br />
              <span className={styles.heroTitleGradient}>
                with the best in tech
              </span>
            </h1>
            <p className={styles.heroText}>
              We don&apos;t believe in going it alone. We&apos;re building a partner ecosystem with
              technology and implementation partners who share our commitment to quality
              and innovation.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Become a Partner
              </Link>
              <Link href="#benefits" className={styles.buttonSecondary}>
                See What&apos;s In It For You ↓
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>🌐</div>
              <h3 className={styles.heroCardTitle}>Partner With Us</h3>
              <p className={styles.heroCardSubtitle}>
                Technology and implementation partnerships, structured around four tiers.
              </p>
            </div>
          </div>
        </div>

        {/* Partner Benefits */}
        <section id="benefits" style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Why Partner With Us</h2>
          <p className={styles.sectionSubtitle}>
            More than a vendor — a true partnership
          </p>
          <div className={styles.benefitsGrid}>
            {benefits.map(benefit => (
              <div key={benefit.title} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDesc}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partner Tiers */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Partnership Tiers</h2>
          <div className={styles.tiersGrid}>
            {partnerTiers.map(tier => (
              <div
                key={tier.tier}
                className={styles.tierCard}
                style={{ borderTopColor: tier.color }}
              >
                <h3 className={styles.tierTitle} style={{ color: tier.color }}>
                  {tier.tier}
                </h3>
                <ul className={styles.tierBenefits}>
                  {tier.benefits.map(benefit => (
                    <li key={benefit} className={styles.tierBenefit}>
                      <span className={styles.tierBenefitCheck} style={{ color: tier.color }}>✓</span>
                      {benefit}
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