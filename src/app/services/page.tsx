import type { Metadata } from 'next';
import { SITE_URL, organizationJsonLd, breadcrumbJsonLd, itemListJsonLd, faqJsonLd } from '@/lib/seo';
import ServicesContent from './ServicesContent';

const title = 'Services | Pure Latency — Hyderabad';
const description =
  'Pure Latency offers applications, web development, data and AI, cloud and DevOps, infrastructure, fiber optics, and quantum compute services from Hyderabad, India.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/services`,
    images: [{ url: `${SITE_URL}/images/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${SITE_URL}/images/logo.png`],
  },
};

const services = [
  { name: 'Applications', url: '/services/applications' },
  { name: 'Web Development', url: '/services/web-development' },
  { name: 'Data and AI', url: '/services/data-ai' },
  { name: 'Cloud and DevOps', url: '/services/cloud-devops' },
  { name: 'Infrastructure', url: '/services/infrastructure' },
  { name: 'Fiber Optics', url: '/services/fiber-optics' },
  { name: 'Quantum Compute', url: '/services/quantum-compute' },
];

const faqItems = [
  {
    question: 'What services does Pure Latency offer?',
    answer:
      'Pure Latency offers seven service lines: applications, web development, data and AI, cloud and DevOps, infrastructure, fiber optics, and quantum compute. Applications, web development, data and AI, cloud and DevOps, and infrastructure are established engineering practices; fiber optics and quantum compute are earlier-stage offerings taken on a project-inquiry basis.',
  },
  {
    question: 'Where is Pure Latency based?',
    answer:
      'Pure Latency is based in Hyderabad, India. Engagements are not limited to clients in India — the technology stack and delivery process are the same regardless of client location.',
  },
  {
    question: 'What kind of clients does Pure Latency work with?',
    answer:
      'Pure Latency works primarily with enterprises, and with telecom and space-tech organizations for infrastructure- and network-heavy engagements. Each service page lists which client types are the closest fit for that specific practice.',
  },
  {
    question: 'Does Pure Latency handle both software and infrastructure work?',
    answer:
      'Yes — the service lines span both ends: applications, web development, and data/AI on the software side, and cloud/DevOps, infrastructure, and fiber optics on the systems side. Many engagements combine both, such as an application built alongside the cloud infrastructure it runs on.',
  },
];

const jsonLd = [
  organizationJsonLd(),
  breadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]),
  itemListJsonLd(services),
  faqJsonLd(faqItems),
];

export default function ServicesPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServicesContent faqItems={faqItems} />
    </>
  );
}
