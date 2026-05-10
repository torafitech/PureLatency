'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import styles from './AIServices.module.css';

export default function AIServicesPage() {
  const offerings = [
    {
      icon: '🤖',
      title: 'AI Agents & Autonomous Workflows',
      desc: 'Deploy intelligent agents that research, reason, and act — autonomously completing multi-step tasks without human intervention. From customer support to internal ops.',
      tags: ['CrewAI', 'LangGraph', 'AutoGen', 'Task Delegation', 'Multi-Agent'],
    },
    {
      icon: '🧠',
      title: 'Large Language Model Integration',
      desc: 'Embed state-of-the-art LLMs (OpenAI GPT-4, Claude, Gemini) directly into your products. Custom fine-tuning, RAG pipelines, and prompt engineering for your domain.',
      tags: ['OpenAI', 'Claude', 'Gemini', 'Fine-tuning', 'RAG', 'Vector DBs'],
    },
    {
      icon: '✨',
      title: 'Generative AI Solutions',
      desc: 'From AI-generated marketing copy and code to synthetic data and design assets — build generative pipelines that create at enterprise scale.',
      tags: ['Content Generation', 'Code Gen', 'Image AI', 'Synthetic Data'],
    },
    {
      icon: '🗺️',
      title: 'AI Strategy & Consulting',
      desc: 'Not sure where to start? We map your business goals to AI opportunities, build a prioritised roadmap, and govern responsible AI adoption end-to-end.',
      tags: ['Roadmapping', 'AI Governance', 'ROI Modeling', 'Change Management'],
    },
  ];

  const useCases = [
    { icon: '💬', title: 'AI Customer Support', desc: 'Intelligent chatbots that resolve 80%+ of queries without escalation, available 24/7 across every channel.' },
    { icon: '📄', title: 'Document Intelligence', desc: 'Extract, classify, and summarise contracts, invoices, and reports at thousands of pages per minute.' },
    { icon: '🔍', title: 'Enterprise Search', desc: 'Semantic search across internal knowledge bases — give employees instant answers from your institutional knowledge.' },
    { icon: '📊', title: 'AI-Powered Analytics', desc: 'Natural language queries over your data warehouse. Ask questions in plain English, get board-ready insights.' },
    { icon: '⚙️', title: 'Process Automation', desc: 'Automate repetitive back-office workflows — approvals, data entry, reconciliation — with AI that adapts to exceptions.' },
    { icon: '🛡️', title: 'AI Security & Compliance', desc: 'Detect anomalies, flag policy violations, and enforce compliance automatically using AI trained on your ruleset.' },
  ];

  const process = [
    { num: '01', icon: '🔍', title: 'Discovery', desc: 'Map business goals to AI opportunity areas. Identify quick wins and long-term bets.' },
    { num: '02', icon: '🏗️', title: 'Architecture', desc: 'Design the AI stack — model selection, data flows, integration points, and governance framework.' },
    { num: '03', icon: '🧪', title: 'Prototype', desc: 'Build a working proof-of-concept in 2–3 weeks. Validate ROI before full commitment.' },
    { num: '04', icon: '🚀', title: 'Production', desc: 'Harden, scale, and deploy to production with full observability and safety guardrails.' },
    { num: '05', icon: '📈', title: 'Optimise', desc: 'Continuous model evaluation, retraining, and improvement as your data and needs evolve.' },
  ];

  const stats = [
    { value: '200+', label: 'AI Deployments', icon: '🤖' },
    { value: '10×', label: 'Workflow Acceleration', icon: '⚡' },
    { value: '99.5%', label: 'System Uptime', icon: '🟢' },
    { value: '24/7', label: 'AI Operations', icon: '⏱️' },
  ];

  const techStack = [
    'OpenAI GPT-4o', 'Anthropic Claude', 'Google Gemini', 'Meta Llama 3',
    'LangChain', 'LangGraph', 'LlamaIndex', 'CrewAI', 'AutoGen',
    'Pinecone', 'Weaviate', 'pgvector', 'Chroma',
    'Hugging Face', 'MLflow', 'Weights & Biases', 'Ray',
    'FastAPI', 'Celery', 'Redis', 'Docker', 'Kubernetes',
  ];

  return (
    <>
      <Navbar />

      <main className={styles.container}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link>{' / '}
          <Link href="/services" className={styles.breadcrumbLink}>Services</Link>{' / '}
          <span className={styles.breadcrumbCurrent}>AI Services</span>
        </div>

        {/* Hero */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>🤖 Enterprise-Grade AI</div>
            <h1 className={styles.heroTitle}>
              AI that works for your{' '}
              <span className={styles.heroTitleGradient}>business, today</span>
            </h1>
            <p className={styles.heroText}>
              We build, deploy, and operate AI systems that automate workflows, augment your team,
              and unlock insights hidden in your data — using the most capable models on the planet.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.buttonPrimary}>Get a Free AI Assessment</Link>
              <Link href="/services" className={styles.buttonSecondary}>View All Services →</Link>
            </div>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>🧠</div>
              <h3 className={styles.heroCardTitle}>The AI Advantage</h3>
              <ul className={styles.heroCardList}>
                {[
                  '10× faster process execution',
                  '80% reduction in manual tasks',
                  'Real-time intelligence at scale',
                  'Zero-downtime AI operations',
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

        {/* Stats */}
        <section className={styles.statsBanner}>
          {stats.map(s => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statIcon}>{s.icon}</div>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </section>

        {/* Offerings */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>What We Build</h2>
          <p className={styles.sectionSubtitle}>
            Four core AI service lines — each delivering measurable business outcomes
          </p>
          <div className={styles.offeringsGrid}>
            {offerings.map(o => (
              <div key={o.title} className={styles.offeringCard}>
                <div className={styles.offeringIcon}>{o.icon}</div>
                <h3 className={styles.offeringTitle}>{o.title}</h3>
                <p className={styles.offeringDesc}>{o.desc}</p>
                <div className={styles.tagRow}>
                  {o.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Common Use Cases</h2>
          <p className={styles.sectionSubtitle}>
            Proven AI applications delivering ROI across industries
          </p>
          <div className={styles.useCasesGrid}>
            {useCases.map(u => (
              <div key={u.title} className={styles.useCaseCard}>
                <div className={styles.useCaseIcon}>{u.icon}</div>
                <h3 className={styles.useCaseTitle}>{u.title}</h3>
                <p className={styles.useCaseDesc}>{u.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Our AI Delivery Process</h2>
          <p className={styles.sectionSubtitle}>
            From first conversation to production AI in weeks, not months
          </p>
          <div className={styles.processGrid}>
            {process.map(p => (
              <div key={p.num} className={styles.processCard}>
                <div className={styles.processNum}>Step {p.num}</div>
                <div className={styles.processIcon}>{p.icon}</div>
                <h3 className={styles.processTitle}>{p.title}</h3>
                <p className={styles.processDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Technology Ecosystem</h2>
          <div className={styles.techStack}>
            {techStack.map(t => <span key={t} className={styles.techItem}>{t}</span>)}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to deploy AI?</h2>
            <p className={styles.ctaText}>Book a free 30-minute AI assessment with our team.</p>
            <Link href="/contact" className={styles.ctaButton}>Contact Us</Link>
          </div>
        </section>

        <div className={styles.backLinkContainer}>
          <Link href="/services" className={styles.backLink}>← Back to Services</Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
