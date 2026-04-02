'use client';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { useState } from 'react';
import styles from './About.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('story');

  const stats = [
    { value: '2026', label: 'Founded', icon: '📅' },
    { value: '5', label: 'Founders', icon: '👥' },
    { value: '50+', label: 'Team Members', icon: '👨‍💻' },
    { value: '3', label: 'Global Offices', icon: '🌍' }
  ];

  const values = [
    {
      title: 'Quality First',
      desc: 'We never compromise on quality. Every line of code, every design decision matters.',
      icon: '✨',
      color: '#0066cc'
    },
    {
      title: 'Long-term Thinking',
      desc: 'We build for today and tomorrow. Short-term gains never outweigh long-term value.',
      icon: '🌱',
      color: '#10B981'
    },
    {
      title: 'Radical Transparency',
      desc: 'Open communication with clients and within our team. No surprises, no hidden agendas.',
      icon: '🔍',
      color: '#F59E0B'
    },
    {
      title: 'Continuous Learning',
      desc: 'Technology evolves, and so do we. Always learning, always improving.',
      icon: '📚',
      color: '#7C3AED'
    },
    {
      title: 'Human-Centered',
      desc: 'Technology serves people. We build for humans, with empathy and understanding.',
      icon: '👥',
      color: '#EC4899'
    },
    {
      title: 'Sustainable Pace',
      desc: 'Great work comes from rested minds. We maintain balance and avoid burnout.',
      icon: '⚖️',
      color: '#6366F1'
    }
  ];

  const timeline = [
    {
      year: '2026',
      title: 'Company Founded',
      desc: 'PureLatency was founded in San Francisco by a team of engineers and designers.',
      icon: '🚀',
      color: '#0066cc'
    },
    {
      year: '2026',
      title: 'First Product Launch',
      desc: 'Starling Post, our intelligent communication platform, launched to early access.',
      icon: '📱',
      color: '#10B981'
    },
    {
      year: '2026',
      title: 'First Enterprise Client',
      desc: 'Signed our first Fortune 500 client for digital transformation services.',
      icon: '🏢',
      color: '#F59E0B'
    },
    {
      year: '2027',
      title: 'Global Expansion',
      desc: 'Opening offices in Singapore and London to serve clients worldwide.',
      icon: '🌍',
      color: '#7C3AED'
    }
  ];

  const leadership = [
    {
      name: 'Alex Rivera',
      role: 'CEO & Co-Founder',
      bio: 'Former engineering leader with 15 years in enterprise software.',
      image: 'AR',
      color: '#0066cc'
    },
    {
      name: 'Jamie Chen',
      role: 'CTO & Co-Founder',
      bio: 'Cloud architecture expert, previously at major tech companies.',
      image: 'JC',
      color: '#10B981'
    },
    {
      name: 'Sam Taylor',
      role: 'Design Lead & Co-Founder',
      bio: 'Award-winning designer focused on human-centered design.',
      image: 'ST',
      color: '#F59E0B'
    },
    {
      name: 'Jordan Lee',
      role: 'Engineering Lead & Co-Founder',
      bio: 'Full-stack developer with passion for clean code and architecture.',
      image: 'JL',
      color: '#7C3AED'
    },
    {
      name: 'Casey Morgan',
      role: 'Strategy Lead & Co-Founder',
      bio: 'Business strategist helping companies transform digitally.',
      image: 'CM',
      color: '#EC4899'
    }
  ];

  const offices = [
    { city: 'San Francisco', country: 'USA', icon: '🌉', address: '548 Market St, San Francisco, CA 94104' },
    { city: 'Singapore', country: 'Singapore', icon: '🏝️', address: 'Marina Bay Financial Centre, Singapore' },
    { city: 'London', country: 'UK', icon: '🇬🇧', address: 'Tech City, London, UK' }
  ];

  const clients = [
    { name: 'TechVision', logo: 'TV', industry: 'SaaS' },
    { name: 'GlobalBank', logo: 'GB', industry: 'Finance' },
    { name: 'MediCore', logo: 'MC', industry: 'Healthcare' },
    { name: 'EduSmart', logo: 'ES', industry: 'Education' },
    { name: 'GreenEnergy', logo: 'GE', industry: 'Energy' },
    { name: 'SpaceX', logo: 'SX', industry: 'Aerospace' }
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
          <span className={styles.breadcrumbCurrent}> About</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              👋 Meet PureLatency
            </div>
            <h1 className={styles.heroTitle}>
              We're on a mission to<br />
              <span className={styles.heroTitleGradient}>
                build exceptional software
              </span>
            </h1>
            <p className={styles.heroText}>
              PureLatency is a digital engineering and technology services company founded in 2026.
              We help organizations modernize infrastructure, accelerate product development, 
              and deliver intelligent digital experiences that make a difference.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Join Our Team
              </Link>
              <Link href="#story" className={styles.buttonSecondary}>
                Read Our Story ↓
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>🎯</div>
              <h3 className={styles.heroCardTitle}>By the Numbers</h3>
              <ul className={styles.heroCardList}>
                {[
                  'Founded 2026',
                  '2 passionate founders',
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



        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          {['story', 'values'].map(tab => (
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
        {activeTab === 'story' && (
          <>
            {/* Mission & Vision */}
            <section className={styles.missionGrid}>
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>🎯</div>
                <h2 className={styles.missionTitle}>Our Mission</h2>
                <p className={styles.missionText}>
                  To build reliable and scalable digital systems that help businesses
                  move faster and innovate with confidence. We believe technology should 
                  solve real problems and create lasting value.
                </p>
              </div>
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>👁️</div>
                <h2 className={styles.missionTitle}>Our Vision</h2>
                <p className={styles.missionText}>
                  To become a global technology partner delivering modern engineering,
                  cloud platforms, and AI-driven innovation. We aspire to be the most 
                  trusted partner for companies building the future.
                </p>
              </div>
            </section>

          </>
        )}

        {activeTab === 'values' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <p className={styles.sectionSubtitle}>
              The principles that guide every decision we make
            </p>
            <div className={styles.valuesGrid}>
              {values.map(value => (
                <div key={value.title} className={styles.valueCard}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDesc}>{value.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'team' && (
          <>
            {/* Leadership */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>Meet Our Leadership</h2>
              <p className={styles.sectionSubtitle}>
                The passionate founders building PureLatency
              </p>
              <div className={styles.leadershipGrid}>
                {leadership.map(leader => (
                  <div key={leader.name} className={styles.leaderCard}>
                    <div 
                      className={styles.leaderAvatar}
                      style={{ background: `linear-gradient(135deg, ${leader.color} 0%, #7C3AED 100%)` }}
                    >
                      {leader.image}
                    </div>
                    <h3 className={styles.leaderName}>{leader.name}</h3>
                    <p className={styles.leaderRole} style={{ color: leader.color }}>
                      {leader.role}
                    </p>
                    <p className={styles.leaderBio}>{leader.bio}</p>
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