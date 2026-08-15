import type { Metadata } from 'next';
import {
  SITE_URL,
  organizationJsonLd,
  serviceJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/lib/seo';
import ApplicationsContent from './ApplicationsContent';

const description =
  'Pure Latency builds custom web, mobile, and enterprise applications with React, Next.js, React Native, Flutter, and Node.js for enterprise and telecom clients.';

export const metadata: Metadata = {
  title: 'Applications | Pure Latency — Hyderabad',
  description,
  alternates: {
    canonical: `${SITE_URL}/services/applications`,
  },
  openGraph: {
    title: 'Applications | Pure Latency — Hyderabad',
    description,
    url: `${SITE_URL}/services/applications`,
    images: [{ url: `${SITE_URL}/images/applications.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Applications | Pure Latency — Hyderabad',
    description,
    images: [`${SITE_URL}/images/applications.png`],
  },
};

const faqItems = [
  {
    question: "What does Pure Latency's Applications service include?",
    answer:
      'It covers custom web, mobile, and enterprise application development, from initial discovery and design through build, testing, and launch. This includes single-page and server-rendered web apps, cross-platform and native mobile apps, and backend/API work such as role-based access control, audit logging, and real-time features built on WebSockets.',
  },
  {
    question: 'What technologies does Pure Latency use for application development?',
    answer:
      'The primary stack is React, Next.js, and Node.js on the web and API side, with React Native and Flutter for cross-platform mobile, plus native Swift and Kotlin development where required. Testing runs through Jest, Cypress, Playwright, and Detox, and services typically deploy to Vercel, Netlify, or the relevant app store infrastructure.',
  },
  {
    question: 'Does Pure Latency build both web and mobile applications, or specialize in one?',
    answer:
      "Both — the Applications practice covers web, mobile, and enterprise application development under one team. Which combination makes sense for a given project depends on the target users and platforms, and that's typically worked out during the discovery phase before any development starts.",
  },
  {
    question: 'How does Pure Latency handle security for enterprise applications?',
    answer:
      'Enterprise application builds include role-based access control and audit logging as standard parts of the architecture, not optional add-ons. Specific security requirements — compliance frameworks, identity provider integration, data residency — are scoped per project during discovery, since they vary by client and industry.',
  },
  {
    question: 'How long does a typical application development project take?',
    answer:
      'It depends on scope, but engagements generally move through discovery, design, development, and launch phases in sequence. Development is usually the longest phase, since it scales with feature count and integration complexity — actual timelines are set per project during discovery rather than fixed in advance.',
  },
];

const jsonLd = [
  organizationJsonLd(),
  serviceJsonLd({
    name: 'Applications',
    description,
    serviceType: 'Application Development',
    slug: 'applications',
  }),
  breadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Applications', url: '/services/applications' },
  ]),
  faqJsonLd(faqItems),
];

export default function ApplicationsPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ApplicationsContent faqItems={faqItems} />
    </>
  );
}
