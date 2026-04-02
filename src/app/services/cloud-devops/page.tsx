'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from './CloudDevOps.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

export default function CloudDevOpsPage() {
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
      metrics: ['Continuous integration', 'Automated testing', 'Zero-downtime']
    },
    {
      title: 'Monitoring & Observability',
      desc: 'Gain deep insights into your systems with comprehensive monitoring and logging.',
      icon: '📊',
      color: '#EC4899',
      metrics: ['Real-time metrics', 'Distributed tracing', 'Alerting']
    }
  ];

  const solutions = [
    {
      industry: 'E-commerce',
      icon: '🛒',
      challenge: 'Peak traffic during sales events causing downtime',
      solution: 'Auto-scaling Kubernetes infrastructure that handles 10x traffic spikes',
      impact: '99.99% uptime during Black Friday, $2M+ revenue protected',
      gradient: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)'
    },
    {
      industry: 'FinTech',
      icon: '💰',
      challenge: 'Regulatory compliance and security requirements',
      solution: 'Compliant infrastructure with automated security scanning and auditing',
      impact: '100% compliance passed, 60% faster audit preparation',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
    },
    {
      industry: 'SaaS',
      icon: '☁️',
      challenge: 'Slow deployment cycles and environment inconsistencies',
      solution: 'Fully automated CI/CD pipeline with infrastructure as code',
      impact: 'Deployment time reduced from days to minutes, 90% fewer errors',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
    },
    {
      industry: 'Healthcare',
      icon: '🏥',
      challenge: 'HIPAA compliance and data sovereignty requirements',
      solution: 'Secure, compliant cloud infrastructure with data encryption',
      impact: 'Achieved HIPAA compliance, 100% data sovereignty guaranteed',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)'
    }
  ];

  const innovations = [
    {
      title: 'GitOps',
      desc: 'Manage infrastructure and applications using Git as the single source of truth.',
      icon: '🔀',
      stat: '99.9%',
      statDesc: 'configuration accuracy'
    },
    {
      title: 'Service Mesh',
      desc: 'Dedicated infrastructure layer for service-to-service communication.',
      icon: '🔗',
      stat: '0ms',
      statDesc: 'added latency'
    },
    {
      title: 'Chaos Engineering',
      desc: 'Proactively test system resilience through controlled experiments.',
      icon: '🧪',
      stat: '10x',
      statDesc: 'improved resilience'
    },
    {
      title: 'FinOps',
      desc: 'Cloud financial management and optimization practices.',
      icon: '💰',
      stat: '40%',
      statDesc: 'cost reduction'
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

  const stats = [
    { value: '10x', label: 'Faster Deployments', icon: '⚡' },
    { value: '99.99%', label: 'Average Uptime', icon: '📈' },
    { value: '40%', label: 'Cost Reduction', icon: '💰' },
    { value: '24/7', label: 'Monitoring', icon: '🔍' }
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
              <ul className={styles.heroCardList}>
                {[
                  '10x faster deployments',
                  '99.99% uptime guarantee',
                  '40% cost reduction'
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

        {/* Industry Solutions */}
        {/* <section style={{ marginBottom: '6rem' }}>
          <h2 className={styles.sectionTitle}>Industry-Specific Solutions</h2>
          <p className={styles.sectionSubtitle}>
            Tailored cloud infrastructure that addresses the unique challenges of your industry
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