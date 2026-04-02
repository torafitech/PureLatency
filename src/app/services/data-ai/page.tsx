'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from './DataAI.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

export default function DataAIPage() {
  const capabilities = [
    {
      title: 'Predictive Intelligence',
      desc: 'Forecast trends, anticipate customer behavior, and make data-driven decisions before your competitors.',
      icon: '🔮',
      color: '#7C3AED',
      metrics: ['92% accuracy', '3x faster predictions', 'real-time']
    },
    {
      title: 'Conversational AI',
      desc: 'Build intelligent chatbots and voice assistants that understand context, emotion, and intent.',
      icon: '💬',
      color: '#10B981',
      metrics: ['24/7 availability', '85% resolution rate', 'multilingual']
    },
    {
      title: 'Computer Vision',
      desc: 'Extract insights from images and video with human-like perception and accuracy.',
      icon: '👁️',
      color: '#F59E0B',
      metrics: ['99.9% accuracy', 'real-time processing', 'scalable']
    },
    {
      title: 'Generative AI',
      desc: 'Create original content, designs, and code using cutting-edge generative models.',
      icon: '✨',
      color: '#EC4899',
      metrics: ['10x faster creation', 'unique outputs', 'customizable']
    }
  ];

  const solutions = [
    {
      industry: 'Healthcare',
      icon: '🏥',
      challenge: 'Delayed diagnoses and manual image analysis',
      solution: 'AI-powered medical imaging that detects anomalies 3x faster with 99.7% accuracy',
      impact: 'Reduced diagnosis time from days to minutes',
      gradient: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)'
    },
    {
      industry: 'Finance',
      icon: '💰',
      challenge: 'Sophisticated fraud patterns and false positives',
      solution: 'Real-time anomaly detection that learns and adapts to new fraud patterns',
      impact: '80% reduction in false positives, $10M+ saved annually',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
    },
    {
      industry: 'Retail',
      icon: '🛍️',
      challenge: 'Generic recommendations and inventory waste',
      solution: 'Hyper-personalized recommendations with 40% higher conversion',
      impact: '35% increase in average order value',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
    },
    {
      industry: 'Manufacturing',
      icon: '🏭',
      challenge: 'Unexpected equipment failures and downtime',
      solution: 'Predictive maintenance that forecasts failures 7 days in advance',
      impact: '60% reduction in unplanned downtime',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)'
    }
  ];

  const innovations = [
    {
      title: 'Neural Architecture Search',
      desc: 'Our AutoML platform automatically discovers the optimal neural network architecture for your specific use case.',
      icon: '🧠',
      stat: '3x faster',
      statDesc: 'model development'
    },
    {
      title: 'Federated Learning',
      desc: 'Train models across decentralized data without compromising privacy or security.',
      icon: '🔒',
      stat: '100%',
      statDesc: 'data privacy'
    },
    {
      title: 'Explainable AI',
      desc: 'Understand exactly why your AI makes each decision with our interpretability layer.',
      icon: '🔍',
      stat: '100%',
      statDesc: 'decision transparency'
    },
    {
      title: 'Edge AI',
      desc: 'Deploy sophisticated models directly on edge devices for instant, offline inference.',
      icon: '⚡',
      stat: '<10ms',
      statDesc: 'latency'
    }
  ];

  const process = [
    {
      phase: 'Discovery',
      icon: '🔍',
      activities: ['Business goal mapping', 'Data audit', 'Feasibility assessment', 'ROI modeling'],
      duration: '1-2 weeks'
    },
    {
      phase: 'Data Foundation',
      icon: '📊',
      activities: ['Data collection', 'Cleaning & preparation', 'Feature engineering', 'Pipeline setup'],
      duration: '2-4 weeks'
    },
    {
      phase: 'Model Development',
      icon: '🧪',
      activities: ['Architecture design', 'Model training', 'Hyperparameter tuning', 'Validation'],
      duration: '4-8 weeks'
    },
    {
      phase: 'Production',
      icon: '🚀',
      activities: ['Deployment', 'Monitoring', 'Continuous learning', 'Optimization'],
      duration: 'ongoing'
    }
  ];

  const stats = [
    { value: '500+', label: 'Models Deployed', icon: '🧮' },
    { value: '99.9%', label: 'Average Accuracy', icon: '🎯' },
    { value: '50TB+', label: 'Data Processed Daily', icon: '💾' },
    { value: '24/7', label: 'Model Monitoring', icon: '⏱️' }
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
          <span className={styles.breadcrumbCurrent}> Data and AI</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              ⚡ Where Data Meets Intelligence
            </div>
            <h1 className={styles.heroTitle}>
              Turn your data into a<br />
              <span className={styles.heroTitleGradient}>
                competitive advantage
              </span>
            </h1>
            <p className={styles.heroText}>
              We build intelligent systems that learn, adapt, and provide actionable insights. 
              From predictive analytics to generative AI, we help you harness the full potential 
              of your data.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Contact Us
              </Link>
              <Link href="/services" className={styles.buttonSecondary}>
                View All Services →
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>🧠</div>
              <h3 className={styles.heroCardTitle}>The AI Advantage</h3>
              <ul className={styles.heroCardList}>
                {[
                  '40% average efficiency gain',
                  '2.5x faster decision-making',
                  '85% report competitive advantage'
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

        {/* Core Capabilities */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Core AI Capabilities</h2>
          <p className={styles.sectionSubtitle}>
            We combine cutting-edge research with practical engineering to deliver AI that actually works
          </p>
          <div className={styles.capabilitiesGrid}>
            {capabilities.map(cap => (
              <div key={cap.title} className={styles.capabilityCard}>
                <div className={styles.capabilityIcon}>{cap.icon}</div>
                <h3 className={styles.capabilityTitle}>{cap.title}</h3>
                <p className={styles.capabilityDesc}>{cap.desc}</p>
                <div className={styles.capabilityMetrics}>
                  {cap.metrics.map(metric => (
                    <span key={metric} className={styles.metricTag}>
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Solutions */}
        {/* <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Industry-Specific Solutions</h2>
          <p className={styles.sectionSubtitle}>
            Tailored AI solutions that address the unique challenges of your industry
          </p>
          <div className={styles.solutionsGrid}>
            {solutions.map(sol => (
              <div
                key={sol.industry}
                className={styles.solutionCard}
                style={{ background: sol.gradient }}
              >
                <div className={styles.solutionIcon}>{sol.icon}</div>
                <h3 className={styles.solutionIndustry}>{sol.industry}</h3>
                <div style={{ marginBottom: '1rem' }}>
                  <div className={styles.solutionLabel}>Challenge:</div>
                  <p className={styles.solutionText}>{sol.challenge}</p>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <div className={styles.solutionLabel}>Solution:</div>
                  <p className={styles.solutionText}>{sol.solution}</p>
                </div>
                <div className={styles.solutionImpactBox}>
                  <div className={styles.solutionLabel}>Impact:</div>
                  <p className={styles.solutionImpact}>{sol.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Innovative Technologies */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our AI Innovations</h2>
          <p className={styles.sectionSubtitle}>
            Pushing the boundaries of what's possible with artificial intelligence
          </p>
          <div className={styles.innovationsGrid}>
            {innovations.map(innovation => (
              <div key={innovation.title} className={styles.innovationCard}>
                <div className={styles.innovationIcon}>{innovation.icon}</div>
                <h3 className={styles.innovationTitle}>{innovation.title}</h3>
                <p className={styles.innovationDesc}>{innovation.desc}</p>
                <div className={styles.innovationStat}>
                  <div className={styles.innovationStatValue}>{innovation.stat}</div>
                  <div className={styles.innovationStatDesc}>{innovation.statDesc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Timeline */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our AI Development Process</h2>
          <div className={styles.processGrid}>
            {process.map((phase, index) => (
              <div key={phase.phase} className={styles.processPhase}>
                {index < process.length - 1 && <div className={styles.processConnector} />}
                <div className={styles.processCard}>
                  <div className={styles.processIcon}>{phase.icon}</div>
                  <div className={styles.processPhaseNum}>Phase {index + 1}</div>
                  <h3 className={styles.processPhaseTitle}>{phase.phase}</h3>
                  <ul className={styles.processActivityList}>
                    {phase.activities.map(activity => (
                      <li key={activity} className={styles.processActivityItem}>
                        <span className={styles.processActivityArrow}>→</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.processDuration}>
                    ⏱️ {phase.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our Technology Ecosystem</h2>
          <div className={styles.techStack}>
            {[
              'TensorFlow', 'PyTorch', 'Hugging Face', 'OpenAI', 'LangChain',
              'scikit-learn', 'XGBoost', 'Spark ML', 'Keras', 'LlamaIndex',
              'Weights & Biases', 'MLflow', 'Kubeflow', 'Ray', 'DVC'
            ].map(tech => (
              <span key={tech} className={styles.techItem}>
                {tech}
              </span>
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