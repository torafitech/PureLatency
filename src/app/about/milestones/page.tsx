'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from './Milestones.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

export default function MilestonesPage() {
  // achievedMilestones deleted outright — twelve dated, detailed "history"
  // entries (Jan-Dec 2026) presenting fictional events as already-achieved
  // fact: named fabricated employees (Alex, Jamie, Sam, Casey, Priya,
  // Sofia — the same fake-founder personas removed from about/page.tsx and
  // about/overview/page.tsx), a fabricated industry award, a fabricated
  // company retreat in Tahoe, and an "Incorporation Day" claim that
  // conflicts with the verified founding story (2026, Hyderabad, two
  // founders) already corrected on about/page.tsx. This is a full
  // fictional company history presented as fact, not a stat to flag —
  // deleted, not corrected, since there's no verified equivalent to
  // replace it with.
  //
  // theStories deleted outright — first-person narratives attributed to
  // the same fake first-name personas (Alex/Sam/Casey/Jordan).
  //
  // theUpcoming kept as a forward-looking roadmap (status/eta framing
  // matches the legitimate "Coming Soon" treatment already used for
  // Nexus Flow / Aether AI on products/page.tsx), but with two entries
  // removed and one claim stripped:
  // - "London Office Opening" and "Asia Expansion" (Singapore office)
  //   deleted — same fabricated future-office claim already removed twice
  //   elsewhere in this repo.
  // - Nexus Flow Beta's "200 companies on the waitlist already" claim
  //   removed — unverified specific number.
  const theUpcoming = [
    {
      quarter: 'Q1 2027',
      title: 'Nexus Flow Beta',
      desc: 'Private beta of our workflow automation platform.',
      icon: '⚡',
      color: '#10B981',
      status: 'On Track',
      eta: 'February 2027'
    },
    {
      quarter: 'Q2 2027',
      title: 'Team 50',
      desc: 'Hitting 50 team members. Planning a celebration when we do.',
      icon: '👥',
      color: '#7C3AED',
      status: 'Hiring',
      eta: 'April 2027'
    },
    {
      quarter: 'Q2 2027',
      title: 'First Sustainability Report',
      desc: 'Publishing our first environmental impact report. We care about more than just code.',
      icon: '🌍',
      color: '#F59E0B',
      status: 'In Progress',
      eta: 'May 2027'
    },
    {
      quarter: 'Q3 2027',
      title: 'Aether AI Launch',
      desc: 'Public launch of our AI analytics platform.',
      icon: '🤖',
      color: '#EC4899',
      status: 'In Development',
      eta: 'August 2027'
    },
    {
      quarter: 'Q4 2027',
      title: '10,000 Users',
      desc: 'Hitting 10,000 users across all products.',
      icon: '🍩',
      color: '#8B5CF6',
      status: 'Ambitions',
      eta: 'December 2027'
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
          <Link href="/about" className={styles.breadcrumbLink}> About</Link> / 
          <span className={styles.breadcrumbCurrent}> Milestones</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              📅 The Journey So Far
            </div>
            <h1 className={styles.heroTitle}>
              Every milestone<br />
              <span className={styles.heroTitleGradient}>
                has a story behind it
              </span>
            </h1>
            <p className={styles.heroText}>
              We&apos;re just getting started. Here&apos;s what we&apos;re building toward.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="#upcoming" className={styles.buttonPrimary}>
                What&apos;s Next ↓
              </Link>
              <Link href="/contact" className={styles.buttonSecondary}>
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>🎯</div>
              <h3 className={styles.heroCardTitle}>The Road Ahead</h3>
              <p className={styles.heroCardSubtitle}>
                A working roadmap, not a highlight reel.
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming */}
        <section id="upcoming" style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>What&apos;s Next</h2>
          <p className={styles.sectionSubtitle}>
            Here&apos;s what we&apos;re building toward.
          </p>
          <div className={styles.upcomingGrid}>
            {theUpcoming.map((item, index) => (
              <div key={item.title} className={styles.upcomingCard}>
                {index < theUpcoming.length - 4 && <div className={styles.upcomingConnector} />}
                <div className={styles.upcomingIcon}>{item.icon}</div>
                <div className={styles.upcomingQuarter} style={{ color: item.color }}>
                  {item.quarter}
                </div>
                <h3 className={styles.upcomingTitle}>{item.title}</h3>
                <p className={styles.upcomingDesc}>{item.desc}</p>
                <div className={styles.upcomingFooter}>
                  <span
                    className={styles.upcomingStatus}
                    style={{
                      backgroundColor: `${item.color}20`,
                      color: item.color
                    }}
                  >
                    {item.status}
                  </span>
                  <span className={styles.upcomingEta}>{item.eta}</span>
                </div>
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

        {/* Back to About */}
        <div className={styles.backLinkContainer}>
          <Link href="/about" className={styles.backLink}>
            ← Back to About
          </Link>
        </div>
      </main>

      {/* Footer */}
  
      <Footer/>
    </>
  );
}