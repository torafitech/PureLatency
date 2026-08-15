'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from './DataAI.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

type FaqItem = { question: string; answer: string };

export default function DataAIContent({ faqItems }: { faqItems: FaqItem[] }) {
  const capabilities = [
    {
      title: 'Predictive Intelligence',
      desc: 'Forecast trends, anticipate customer behavior, and make data-driven decisions before your competitors.',
      icon: '🔮',
      color: '#7C3AED',
      // TODO: unverifiable claim removed — confirm with business before re-adding: "92% accuracy", "3x faster predictions"
      metrics: ['real-time']
    },
    {
      title: 'Conversational AI',
      desc: 'Build intelligent chatbots and voice assistants that understand context, emotion, and intent.',
      icon: '💬',
      color: '#10B981',
      // TODO: unverifiable claim removed — confirm with business before re-adding: "85% resolution rate"
      metrics: ['24/7 availability', 'multilingual']
    },
    {
      title: 'Computer Vision',
      desc: 'Extract insights from images and video with human-like perception and accuracy.',
      icon: '👁️',
      color: '#F59E0B',
      // TODO: unverifiable claim removed — confirm with business before re-adding: "99.9% accuracy"
      metrics: ['real-time processing', 'scalable']
    },
    {
      title: 'Generative AI',
      desc: 'Create original content, designs, and code using cutting-edge generative models.',
      icon: '✨',
      color: '#EC4899',
      // TODO: unverifiable claim removed — confirm with business before re-adding: "10x faster creation"
      metrics: ['unique outputs', 'customizable']
    }
  ];

  // TODO: unverifiable claim removed — confirm with business before re-adding: Industry Solutions
  // section (fabricated Healthcare/Finance/Retail/Manufacturing case studies with numbers like
  // "$10M+ saved annually", "99.7% accuracy", "80% reduction in false positives",
  // "40% higher conversion", "35% increase in average order value",
  // "60% reduction in unplanned downtime", "7 days in advance"). Never rendered (JSX was already
  // commented out); dead array removed entirely as part of this cleanup — do not re-add without
  // real client data.

  // TODO: unverifiable claim removed — confirm with business before re-adding: "3x faster model
  // development" (Neural Architecture Search), "100% data privacy" (Federated Learning),
  // "100% decision transparency" (Explainable AI), "<10ms latency" (Edge AI)
  const innovations = [
    {
      title: 'Neural Architecture Search',
      desc: 'Our AutoML platform automatically discovers the optimal neural network architecture for your specific use case.',
      icon: '🧠'
    },
    {
      title: 'Federated Learning',
      desc: 'Train models across decentralized data without compromising privacy or security.',
      icon: '🔒'
    },
    {
      title: 'Explainable AI',
      desc: 'Understand exactly why your AI makes each decision with our interpretability layer.',
      icon: '🔍'
    },
    {
      title: 'Edge AI',
      desc: 'Deploy sophisticated models directly on edge devices for instant, offline inference.',
      icon: '⚡'
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
              {/* TODO: unverifiable claim removed — confirm with business before re-adding:
                  "40% average efficiency gain", "2.5x faster decision-making",
                  "85% report competitive advantage" */}
            </div>
          </div>
        </div>

        {/* TODO: unverifiable claim removed — confirm with business before re-adding: Stats
            Banner section ("500+ Models Deployed", "99.9% Average Accuracy",
            "50TB+ Data Processed Daily", "24/7 Model Monitoring") */}

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

        {/* Innovative Technologies */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our AI Innovations</h2>
          <p className={styles.sectionSubtitle}>
            Pushing the boundaries of what&apos;s possible with artificial intelligence
          </p>
          <div className={styles.innovationsGrid}>
            {innovations.map(innovation => (
              <div key={innovation.title} className={styles.innovationCard}>
                <div className={styles.innovationIcon}>{innovation.icon}</div>
                <h3 className={styles.innovationTitle}>{innovation.title}</h3>
                <p className={styles.innovationDesc}>{innovation.desc}</p>
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

        {/* What We Build */}
        <section className={styles.bodySection}>
          <h2 className={styles.sectionTitle}>What We Build Under Data and AI</h2>
          <p className={styles.bodyText}>
            Pure Latency&apos;s Data and AI practice covers four areas: predictive analytics,
            conversational AI, computer vision, and generative AI. On the predictive side, we
            build forecasting and anomaly-detection models using TensorFlow, PyTorch, and
            scikit-learn, trained on a client&apos;s own operational and transactional data. For
            conversational AI, we build chatbots and voice assistants using Hugging Face
            transformer models and LangChain-based retrieval pipelines, connected to OpenAI or
            open-source models depending on data-residency requirements. Computer vision work
            covers image and video analysis pipelines for inspection, monitoring, and
            classification tasks. Generative AI work uses LangChain and LlamaIndex to connect
            large language models to a client&apos;s internal documents and systems, for use
            cases like drafting, summarization, and internal knowledge search.
          </p>
          <p className={styles.bodyText}>
            The problem this solves is straightforward: most organizations have data scattered
            across systems and no dedicated team to turn it into something usable. We work the
            full path from raw data to a running model — collection and cleaning, feature
            engineering, model training and validation with MLflow for experiment tracking, and
            deployment with ongoing monitoring once a model is in production, using Kubeflow and
            Ray for orchestration and scaling.
          </p>
          <p className={styles.bodyText}>
            This work is built for organizations that need production-grade AI systems, not
            demos: <Link href="/industries/enterprise" className={styles.inlineLink}>enterprises</Link>{' '}
            modernizing decision-making and operations, and{' '}
            <Link href="/industries/telco-space" className={styles.inlineLink}>telecom and space-tech operators</Link>{' '}
            managing network and customer data at scale. Government bodies with compliance and
            data-residency constraints are also a fit, given the on-premise and open-source
            model options in our stack.
          </p>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqItems.map(item => (
              <div key={item.question} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{item.question}</h3>
                <p className={styles.faqAnswer}>{item.answer}</p>
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
