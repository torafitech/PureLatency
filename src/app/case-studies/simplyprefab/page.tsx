import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './SimplyPrefab.module.css';

// STUB PAGE — do not remove this comment until the page is filled in and
// unflagged. This route was created because the site-wide SEO/GEO task
// instructed linking service pages to "the SimplyPrefab case study," but a
// full repo + git-history search turned up zero information about this
// engagement: no client industry, no problem statement, no solution
// description, no dates, no tech stack, no metrics. The only fact available
// is the client name "SimplyPrefab" itself, taken from the task instructions.
// This page exists as a flagged placeholder, not as published case-study
// content — it is noindexed below and must not be linked from any service
// page or nav until real engagement details are supplied and this file is
// rewritten.
export const metadata: Metadata = {
  title: 'SimplyPrefab Case Study (Draft) | Pure Latency',
  description: 'Draft placeholder — case study content pending real engagement details.',
  robots: { index: false, follow: false },
};

const missingFields = [
  'Client industry / what SimplyPrefab does',
  'The problem or project brief Pure Latency was engaged to solve',
  'What was actually built (product, scope, features)',
  'Technologies/stack used for this specific engagement',
  'Engagement dates (start, launch, duration)',
  'Team size / roles involved',
  'Any real, client-approved metrics or outcomes (only if verified — do not estimate or round up)',
  'Whether SimplyPrefab has approved public use of their name and project details',
];

export default function SimplyPrefabCaseStudyPage() {
  return (
    <>
      <Navbar />

      <main className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link> / DRAFT — not linked or indexed
        </div>

        <h1 className={styles.title}>SimplyPrefab Case Study</h1>
        <p className={styles.subtitle}>Draft placeholder — not ready to publish.</p>

        <div className={styles.flagBox}>
          <div className={styles.flagTitle}>⚠ This page has no real content yet</div>
          <p style={{ color: '#78350f', marginBottom: '0.75rem' }}>
            The client name &quot;SimplyPrefab&quot; is the only fact available for this
            engagement. No details were found anywhere in this repository or its git history.
            The following fields need to be filled in from the actual engagement before this
            page can be unflagged, indexed, or linked from any service page:
          </p>
          <ul className={styles.flagList}>
            {missingFields.map((field) => (
              <li key={field}>{field}</li>
            ))}
          </ul>
        </div>

        <div className={styles.knownSection}>
          <h2>What we actually know</h2>
          <p>
            Pure Latency worked with a client called SimplyPrefab. That is the extent of what
            is documented anywhere in this codebase. No metrics, dates, or project details have
            been invented to fill this page out — per policy, unverifiable claims are not
            shipped, even for case studies.
          </p>
        </div>

        <div className={styles.backLinkContainer}>
          <Link href="/services" className={styles.backLink}>
            ← Back to Services
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
