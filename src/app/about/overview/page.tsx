'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { useState } from 'react';
import styles from './Overview.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

export default function OverviewPage() {
  const [activeTab, setActiveTab] = useState('essence');

  // Stats banner deleted outright — "87% Client Return Rate", "12+
  // Industry Awards", and "0 Missed Deadlines" have no backing anywhere in
  // this repo. Same treatment as the fabricated stats banners removed from
  // about/page.tsx and every service page in prior passes.

  const coreEssence = [
    {
      title: 'Why "Latency"?',
      desc: 'We believe in taking the time to do things right. In a world of instant everything, we choose precision, intention, and quality over speed.',
      icon: '⏳',
      color: '#0066cc'
    },
    {
      title: 'Our DNA',
      desc: 'Engineers, designers, and strategists who left corporate giants to build something better. We value craft over scale, and relationships over transactions.',
      icon: '🧬',
      color: '#10B981'
    },
    {
      title: 'The Pure Difference',
      desc: 'No bureaucracy. No sales pitches. Just honest conversations about technology and real problem-solving with people who actually write code.',
      icon: '✨',
      color: '#7C3AED'
    },
    {
      title: 'Our Promise',
      desc: 'We never stop caring about your project after launch. We build lasting partnerships, not just products.',
      icon: '🤝',
      color: '#F59E0B'
    }
  ];

  // originStory deleted outright — built entirely around the same
  // fabricated San Francisco founding story that contradicted verified
  // facts elsewhere in this repo (Hyderabad, 2026, two founders), plus
  // fictional embellishment (a leaky office ceiling, a founding "napkin
  // sketch") with no factual basis. Same correction as the timeline fix
  // in about/page.tsx, applied here by deletion since there's no
  // verified equivalent narrative to replace it with.

  // theFounders deleted outright — a second copy of the same fabricated
  // named individuals removed from about/page.tsx (Alex Rivera, Jamie
  // Chen, Sam Taylor, Jordan Lee, Casey Morgan), here with additional
  // invented personal details (restoring a 1967 Mustang, debugging at
  // 35,000 feet, etc). No real founder bios exist anywhere in this repo —
  // ask the business for real names/bios rather than reintroducing
  // placeholder people.

  // workPhilosophy stat/statDesc fields removed below (kept qualitative
  // title/desc) — "100% team players", "4hrs deep work daily", "100%
  // honest feedback", and "40hrs max work week" were unverified specific
  // numbers with no backing.
  const workPhilosophy = [
    {
      title: 'No Heroes',
      desc: "We don't want rock stars or ninjas. We want reliable teammates who show up, communicate, and care about the outcome.",
      icon: '👥'
    },
    {
      title: 'Quiet Office',
      desc: 'We value deep work over constant meetings. Headphones are encouraged. Interruptions are minimized.',
      icon: '🔇'
    },
    {
      title: 'Radical Candor',
      desc: 'We tell you what you need to hear, not what you want to hear. Respectfully, honestly, directly.',
      icon: '💬'
    },
    {
      title: 'Sustainable Pace',
      desc: "We don't do crunch time. Burnout doesn't help anyone. Great work comes from rested minds.",
      icon: '🌿'
    }
  ];

  // theSpace deleted outright — fabricated San Francisco / Singapore /
  // London office descriptions. Same treatment as the offices array
  // deleted from about/page.tsx: one verified location, Hyderabad,
  // already covered by the Organization JSON-LD address.

  // theUnexpected deleted outright — fictional workplace details (a named
  // office pet, specific book/turntable counts) presented as facts with
  // no backing anywhere in this repo.

  // clientVoices deleted outright — fabricated named individuals at
  // fabricated companies ("Maya Patel, Founder, SeedStage VC"; "David
  // Chen, CTO, HealthTech Solutions"; "Sarah Williams, CEO, EcoStart").
  // Same treatment as every other fabricated testimonial removed in this
  // pass.

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
          <span className={styles.breadcrumbCurrent}> Overview</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              💫 Not Your Average Tech Company
            </div>
            <h1 className={styles.heroTitle}>
              We&apos;re different<br />
              <span className={styles.heroTitleGradient}>
                on purpose
              </span>
            </h1>
            <p className={styles.heroText}>
              PureLatency wasn&apos;t started to get rich. It was started to build things differently.
              No bureaucracy. No egos. Just really good people solving really hard problems, 
              at a pace that makes sense.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Come Say Hello
              </Link>
              <Link href="#essence" className={styles.buttonSecondary}>
                Understand Our Vibe ↓
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>🎲</div>
              <h3 className={styles.heroCardTitle}>The Un-Slide Deck</h3>
              <ul className={styles.heroCardList}>
                {[
                  "We code. We don't just manage.",
                  'No salespeople. Just engineers.',
                  'Honest timelines. No BS.'
                ].map((item, i) => (
                  <li key={i} className={styles.heroCardItem}>
                    <span className={styles.heroCardCheck}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          {['essence', 'philosophy'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'essence' && (
          <section id="essence" style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>The Essence of PureLatency</h2>
            <div className={styles.essenceGrid}>
              {coreEssence.map(item => (
                <div key={item.title} className={styles.essenceCard}>
                  <div className={styles.essenceIcon}>{item.icon}</div>
                  <h3 className={styles.essenceTitle}>{item.title}</h3>
                  <p className={styles.essenceDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'philosophy' && (
          <>
            {/* Work Philosophy */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>How We Actually Work</h2>
              <p className={styles.sectionSubtitle}>
                No mission statements. Just how we show up every day.
              </p>
              <div className={styles.philosophyGrid}>
                {workPhilosophy.map(item => (
                  <div key={item.title} className={styles.philosophyCard}>
                    <div className={styles.philosophyIcon}>{item.icon}</div>
                    <h3 className={styles.philosophyTitle}>{item.title}</h3>
                    <p className={styles.philosophyDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

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