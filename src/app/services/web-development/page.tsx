import type { Metadata } from 'next';
import { SITE_URL, organizationJsonLd, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';
import WebDevelopmentContent from './WebDevelopmentContent';

const description =
  'Web development services from Pure Latency: React, Next.js, and Node.js applications, APIs, and platforms for enterprises, telcos, and government in Hyderabad.';

export const metadata: Metadata = {
  title: 'Web Development | Pure Latency — Hyderabad',
  description,
  alternates: { canonical: `${SITE_URL}/services/web-development` },
  openGraph: {
    title: 'Web Development | Pure Latency — Hyderabad',
    description,
    url: `${SITE_URL}/services/web-development`,
    images: [{ url: `${SITE_URL}/images/web-development.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development | Pure Latency — Hyderabad',
    description,
    images: [`${SITE_URL}/images/web-development.png`],
  },
};

const faqItems = [
  {
    question: "What does Pure Latency's Web Development service include?",
    answer:
      "Pure Latency's Web Development service covers the full build: front-end interfaces, back-end APIs, database design, and deployment infrastructure. This includes corporate websites, web portals, e-commerce platforms, SaaS applications, progressive web apps, and content management systems, built and shipped as production systems rather than one-off templates.",
  },
  {
    question: 'What technologies does Pure Latency use for web development?',
    answer:
      'Pure Latency builds with React, Next.js, TypeScript, Vue.js, and Angular on the front end, and Node.js, Python, Go, Ruby on Rails, PHP, Java, and .NET Core on the back end. Data is stored in PostgreSQL, MongoDB, MySQL, Redis, Elasticsearch, DynamoDB, Firebase, or Supabase, and applications are deployed with Docker, Kubernetes, and CI/CD pipelines on AWS, Vercel, or Netlify.',
  },
  {
    question: 'How does Pure Latency approach SEO and accessibility?',
    answer:
      'Pages are built with search-engine crawlability and accessibility best practices (WCAG guidelines) in mind from the start, rather than retrofitted later. This includes semantic HTML, structured data, responsive layouts, and keyboard- and screen-reader-friendly components.',
  },
  {
    question: 'Can Pure Latency build e-commerce or CMS-driven websites?',
    answer:
      'Yes, e-commerce platforms and content management systems are both part of the Web Development service. These are built on the same technology stack as our other web projects — React/Next.js front ends connected to a database and API layer suited to the catalog, checkout, or publishing workflow involved.',
  },
  {
    question: "What is Pure Latency's deployment and infrastructure stack for web projects?",
    answer:
      'Web applications are containerized with Docker, orchestrated with Kubernetes where scale requires it, and deployed through CI/CD pipelines (GitHub Actions) to AWS, Vercel, or Netlify. Infrastructure is provisioned with Terraform so environments stay reproducible across staging and production.',
  },
];

const jsonLd = [
  organizationJsonLd(),
  serviceJsonLd({
    name: 'Web Development',
    description,
    serviceType: 'Web Development',
    slug: 'web-development',
  }),
  breadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Web Development', url: '/services/web-development' },
  ]),
  faqJsonLd(faqItems),
];

export default function WebDevelopmentPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <WebDevelopmentContent faqItems={faqItems} />
    </>
  );
}
