import type { Metadata } from 'next';
import { SITE_URL, organizationJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import OverviewContent from './OverviewContent';

// This route is not linked from Navbar (the "Overview" nav item points to
// /services itself) and its content is a near-duplicate of /services/page.tsx
// — same services, same methodology framing, same tech list. Rather than
// write a second full set of unique copy competing with the main Services
// page for the same queries, this page's canonical points at /services so
// search engines consolidate ranking signal there instead of splitting it
// across two near-identical URLs. It's kept live (not noindexed/deleted)
// since it may still be linked externally or bookmarked.
const title = 'Services Overview | Pure Latency — Hyderabad';
const description =
  'Overview of Pure Latency’s technology services: applications, web development, data and AI, cloud and DevOps, infrastructure, fiber optics, and quantum compute.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/services/overview`,
    images: [{ url: `${SITE_URL}/images/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${SITE_URL}/images/logo.png`],
  },
};

const jsonLd = [
  organizationJsonLd(),
  breadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Overview', url: '/services/overview' },
  ]),
];

export default function OverviewPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <OverviewContent />
    </>
  );
}
