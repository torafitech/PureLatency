import type { Metadata } from 'next';
import { SITE_URL, organizationJsonLd, serviceJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import QuantumComputeContent from './QuantumComputeContent';

const description =
  'Quantum computing consulting from Pure Latency — algorithm exploration and hardware-access guidance for enterprises evaluating quantum use cases, offered by inquiry.';

export const metadata: Metadata = {
  title: 'Quantum Compute | Pure Latency — Hyderabad',
  description,
  alternates: { canonical: `${SITE_URL}/services/quantum-compute` },
  openGraph: {
    title: 'Quantum Compute | Pure Latency',
    description,
    url: `${SITE_URL}/services/quantum-compute`,
    images: [{ url: `${SITE_URL}/images/qunatum-computing.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Compute | Pure Latency',
    description,
    images: [`${SITE_URL}/images/qunatum-computing.png`],
  },
};

// TODO: confirm real capability before expanding this schema — description
// is intentionally generic/inquiry-framed, matching llms.txt and
// context.md's flag that Quantum Compute is aspirational, not an
// established practice with a verified track record.
const jsonLd = [
  organizationJsonLd(),
  serviceJsonLd({
    name: 'Quantum Compute',
    description,
    serviceType: 'Quantum Computing Consulting',
    slug: 'quantum-compute',
  }),
  breadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Quantum Compute', url: '/services/quantum-compute' },
  ]),
];

export default function QuantumComputePage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <QuantumComputeContent />
    </>
  );
}
