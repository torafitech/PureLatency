import type { Metadata } from 'next';
import { SITE_URL, organizationJsonLd, serviceJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import FiberOpticsContent from './FiberOpticsContent';

const description =
  'Fiber optic network installation, testing, and maintenance from Pure Latency, offered by inquiry for telecommunications, data center, and enterprise network projects.';

export const metadata: Metadata = {
  title: 'Fiber Optics | Pure Latency — Hyderabad',
  description,
  alternates: { canonical: `${SITE_URL}/services/fiber-optics` },
  openGraph: {
    title: 'Fiber Optics | Pure Latency',
    description,
    url: `${SITE_URL}/services/fiber-optics`,
    images: [{ url: `${SITE_URL}/images/fiber-optics.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fiber Optics | Pure Latency',
    description,
    images: [`${SITE_URL}/images/fiber-optics.png`],
  },
};

// TODO: confirm real capability before expanding this schema — description
// is intentionally generic/inquiry-framed, matching llms.txt and
// context.md's flag that Fiber Optics is aspirational, not an established
// practice with a verified track record.
const jsonLd = [
  organizationJsonLd(),
  serviceJsonLd({
    name: 'Fiber Optics',
    description,
    serviceType: 'Fiber Optic Network Installation',
    slug: 'fiber-optics',
  }),
  breadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Fiber Optics', url: '/services/fiber-optics' },
  ]),
];

export default function FiberOpticsPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <FiberOpticsContent />
    </>
  );
}
