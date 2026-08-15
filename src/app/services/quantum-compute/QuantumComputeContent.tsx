'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from './QuantumCompute.module.css';
import Footer from '@/components/layout/Footer';

// TODO: confirm real capability before expanding content — do not optimize
// for ranking until content is verified. Per context.md: Quantum Compute is
// aspirational, not a validated operating practice — the specific claims
// below (processor counts, years of experience, quantum volume, etc.) are
// unverified and must not be treated as established track record.
export default function QuantumComputePage() {
  const technologies = [
    {
      category: 'Hardware',
      icon: '🔬',
      items: ['Superconducting', 'Trapped Ion', 'Photonic', 'Neutral Atoms', 'Spin Qubits', 'Topological', 'Annealing', 'Simulators']
    },
    {
      category: 'Software',
      icon: '💻',
      items: ['Qiskit', 'Cirq', 'PennyLane', 'Braket SDK', 'Forest (pyQuil)', 'Strawberry Fields', 'Q#', 'Ocean SDK']
    },
    {
      category: 'Algorithms',
      icon: '🧮',
      items: ['Shor’s', 'Grover’s', 'VQE', 'QAOA', 'HHL', 'Quantum ML', 'Simulation', 'Optimization']
    },
    {
      category: 'Infrastructure',
      icon: '☁️',
      items: ['Cloud Access', 'Hybrid Classical', 'QPU Integration', 'Real-time Control', 'Error Mitigation', 'Calibration', 'Cooling', 'Control Electronics']
    }
  ];

  const features = [
    {
      title: 'Exponential Speed',
      desc: 'Solve complex problems in minutes, not millennia',
      icon: '⚡',
      metric: '100Mx faster' // TODO: unverifiable claim, confirm or remove
    },
    {
      title: 'Quantum Volume',
      desc: 'High-fidelity qubits with low error rates',
      icon: '📊',
      metric: 'QV 512+' // TODO: unverifiable claim, confirm or remove
    },
    {
      title: 'Entanglement',
      desc: 'Harness quantum correlation for power',
      icon: '🔗',
      metric: 'Full connectivity'
    },
    {
      title: 'Coherence Time',
      desc: 'Extended stability for deep circuits',
      icon: '⏱️',
      metric: '>100 µs' // TODO: unverifiable claim, confirm or remove
    }
  ];

  // TODO: all four stats below are unverified — confirm with the business
  // before shipping, or remove the stats banner entirely.
  const stats = [
    { number: '20+', label: 'Quantum Processors' },
    { number: '100%', label: 'Secure & Private' },
    { number: '24/7', label: 'Quantum Expert Support' },
    { number: '5+', label: 'Years in Quantum' }
  ];

  const process = [
    { step: '01', title: 'Discovery', desc: 'Identify quantum-advantage problems' },
    { step: '02', title: 'Algorithm Design', desc: 'Build and test quantum circuits' },
    { step: '03', title: 'Execution', desc: 'Run on real quantum hardware' },
    { step: '04', title: 'Analysis', desc: 'Interpret results and refine' }
  ];

  const expertise = [
    'Drug Discovery',
    'Financial Modeling',
    'Logistics Optimization',
    'Cryptography',
    'Material Science',
    'Quantum Machine Learning',
    'Climate Simulation',
    'Supply Chain'
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
          <span className={styles.breadcrumbCurrent}> Quantum Compute</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroIcon}>⚛️</div>
            <h1 className={styles.heroTitle}>Quantum Compute</h1>
            <p className={styles.heroText}>
              Unlock unprecedented processing power with our quantum computing solutions.
              From algorithm development to hardware access, we help you solve the world&apos;s
              most complex problems — drug discovery, financial modeling, and beyond.
            </p>
          </div>
          <div className={styles.heroCard}>
            <span className={styles.heroCardIcon}>🌀</span>
            <h3 className={styles.heroCardTitle}>Qubit Advantage</h3>
            <p className={styles.heroCardSubtitle}>Superposition · Entanglement · Interference</p>
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
          <h2 className={styles.sectionTitle}>Why Quantum Computing</h2>
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
          <h2 className={styles.sectionTitle}>Quantum Technology Stack</h2>
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
          <h2 className={styles.sectionTitle}>Key Applications</h2>
          <div className={styles.expertiseGrid}>
            {expertise.map(item => (
              <div key={item} className={styles.expertiseItem}>
                <span className={styles.expertiseIcon}>⚛️</span>
                <span className={styles.expertiseText}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className={styles.sectionTitle}>Our Quantum Process</h2>
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
