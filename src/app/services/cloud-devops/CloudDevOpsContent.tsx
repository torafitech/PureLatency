'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from './CloudDevOps.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

interface FaqItem {
  question: string;
  answer: string;
}

interface CloudDevOpsContentProps {
  faqItems: FaqItem[];
}

export default function CloudDevOpsContent({ faqItems }: CloudDevOpsContentProps) {
  const capabilities = [
    {
      title: 'Infrastructure as Code',
      desc: 'Automate and manage infrastructure through code for consistent, repeatable deployments.',
      icon: '📝',
      color: '#7C3AED',
      metrics: ['Faster deployments', 'Version controlled', 'Repeatable']
    },
    {
      title: 'Container Orchestration',
      desc: 'Manage containerized applications at scale with Kubernetes, Docker Swarm, and ECS.',
      icon: '🐳',
      color: '#10B981',
      metrics: ['Auto-scaling', 'Self-healing', 'Load balancing']
    },
    {
      title: 'CI/CD Pipelines',
      desc: 'Automate your build, test, and deployment processes for faster, reliable releases.',
      icon: '🔄',
      color: '#F59E0B',
      // TODO: unverifiable claim removed — confirm with business before re-adding: "Zero-downtime"
      metrics: ['Continuous integration', 'Automated testing']
    },
    {
      title: 'Monitoring & Observability',
      desc: 'Gain deep insights into your systems with comprehensive monitoring and logging.',
      icon: '📊',
      color: '#EC4899',
      metrics: ['Real-time metrics', 'Distributed tracing', 'Alerting']
    }
  ];

  // TODO: unverifiable claim removed — confirm with business before re-adding — entire
  // "Industry-Specific Solutions" section was a fabricated case-study array. Original impact
  // claims were: "99.99% uptime during Black Friday, $2M+ revenue protected" (E-commerce),
  // "100% compliance passed, 60% faster audit preparation" (FinTech),
  // "Deployment time reduced from days to minutes, 90% fewer errors" (SaaS),
  // "Achieved HIPAA compliance, 100% data sovereignty guaranteed" (Healthcare).

  const innovations = [
    {
      title: 'GitOps',
      desc: 'Manage infrastructure and applications using Git as the single source of truth.',
      icon: '🔀'
      // TODO: unverifiable claim removed — confirm with business before re-adding: "99.9% configuration accuracy"
    },
    {
      title: 'Service Mesh',
      desc: 'Dedicated infrastructure layer for service-to-service communication.',
      icon: '🔗'
      // TODO: unverifiable claim removed — confirm with business before re-adding: "0ms added latency"
    },
    {
      title: 'Chaos Engineering',
      desc: 'Proactively test system resilience through controlled experiments.',
      icon: '🧪'
      // TODO: unverifiable claim removed — confirm with business before re-adding: "10x improved resilience"
    },
    {
      title: 'FinOps',
      desc: 'Cloud financial management and optimization practices.',
      icon: '💰'
      // TODO: unverifiable claim removed — confirm with business before re-adding: "40% cost reduction"
    }
  ];

  const process = [
    {
      phase: 'Assessment',
      icon: '📋',
      activities: ['Infrastructure audit', 'Workload analysis', 'Security review', 'Cost assessment'],
      duration: '1-2 weeks'
    },
    {
      phase: 'Strategy',
      icon: '🎯',
      activities: ['Architecture design', 'Tool selection', 'Migration planning', 'Compliance mapping'],
      duration: '2-3 weeks'
    },
    {
      phase: 'Implementation',
      icon: '⚙️',
      activities: ['Infrastructure setup', 'Pipeline creation', 'Monitoring implementation', 'Security hardening'],
      duration: '4-8 weeks'
    },
    {
      phase: 'Optimization',
      icon: '📈',
      activities: ['Performance tuning', 'Cost optimization', 'Process refinement', 'Team training'],
      duration: 'ongoing'
    }
  ];

  // TODO: unverifiable claim removed — confirm with business before re-adding — entire "Stats
  // Banner" section was fabricated. Original items were: "10x Faster Deployments",
  // "99.99% Average Uptime", "40% Cost Reduction", "24/7 Monitoring".

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
          <span className={styles.breadcrumbCurrent}> Cloud and DevOps</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              ⚡ Modern Infrastructure, Seamless Operations
            </div>
            <h1 className={styles.heroTitle}>
              Automate, scale, and<br />
              <span className={styles.heroTitleGradient}>
                optimize your infrastructure
              </span>
            </h1>
            <p className={styles.heroText}>
              We help you build scalable, resilient cloud infrastructure with cutting-edge DevOps practices.
              From CI/CD pipelines to Kubernetes orchestration, we automate everything.
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
              <div className={styles.heroCardIcon}>☁️</div>
              <h3 className={styles.heroCardTitle}>The DevOps Advantage</h3>
              {/* TODO: unverifiable claim removed — confirm with business before re-adding:
                  "10x faster deployments", "99.99% uptime guarantee", "40% cost reduction" */}
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Core DevOps Capabilities</h2>
          <p className={styles.sectionSubtitle}>
            We combine automation, orchestration, and best practices to deliver reliable infrastructure
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
          <h2 className={styles.sectionTitle}>Our DevOps Innovations</h2>
          <p className={styles.sectionSubtitle}>
            Pushing the boundaries of infrastructure automation and operations
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
          <h2 className={styles.sectionTitle}>Our DevOps Implementation Process</h2>
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
              'AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker',
              'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'GitLab CI',
              'Prometheus', 'Grafana', 'Datadog', 'ArgoCD', 'Istio'
            ].map(tech => (
              <span key={tech} className={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Cloud Infrastructure and DevOps Engineering — factual body copy */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Cloud Infrastructure and DevOps Engineering</h2>
          <p
            style={{
              color: '#1d1d1f',
              lineHeight: 1.7,
              fontSize: '1rem',
              maxWidth: '860px',
              margin: '0 auto 1.5rem'
            }}
          >
            Pure Latency&apos;s Cloud and DevOps practice builds and operates the infrastructure layer
            that sits underneath applications: provisioning, orchestration, delivery pipelines, and the
            monitoring stack that keeps all of it observable. Infrastructure is defined and versioned as
            code using tools like Terraform and Ansible, so environments can be reproduced exactly across
            development, staging, and production instead of being configured by hand. Workloads run in
            containers orchestrated with Kubernetes and Docker, giving teams a consistent way to package,
            deploy, and scale services across AWS, Azure, or GCP. Release pipelines are automated end to
            end with GitHub Actions, GitLab CI, or Jenkins, moving code from commit to deployment through
            defined build, test, and release stages instead of manual handoffs. Once systems are running,
            Prometheus, Grafana, and Datadog provide metrics, dashboards, and alerting so operations teams
            can see system health and respond to issues.
          </p>
          <p
            style={{
              color: '#1d1d1f',
              lineHeight: 1.7,
              fontSize: '1rem',
              maxWidth: '860px',
              margin: '0 auto'
            }}
          >
            This work addresses a common failure mode in growing technical organizations: infrastructure
            built ad hoc and deployed manually, which is difficult to reproduce, audit, or scale. Without
            infrastructure as code and automated pipelines, environments drift from one another,
            deployments become risky manual events, and diagnosing incidents takes longer because there is
            no consistent observability layer. Pure Latency&apos;s Cloud and DevOps service is built for
            organizations where that risk carries real weight — enterprises running production systems at
            scale, telecom operators managing distributed network infrastructure, and government bodies
            with compliance and auditability requirements. See how this applies to your sector on our{' '}
            <Link href="/industries/enterprise">enterprise</Link> and{' '}
            <Link href="/industries/telco-space">telecom and space-tech</Link> industry pages.
          </p>
        </section>

        {/* Frequently Asked Questions */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            {faqItems.map((item) => (
              <div key={item.question} style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#1d1d1f', marginBottom: '0.5rem' }}>
                  {item.question}
                </h3>
                <p style={{ color: '#86868b', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {item.answer}
                </p>
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
