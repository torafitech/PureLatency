import type { Metadata } from 'next';
import { SITE_URL, organizationJsonLd, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';
import InfrastructureContent from './InfrastructureContent';

const title = 'Infrastructure | Pure Latency — Hyderabad';
const description =
  'Pure Latency builds network architecture, cloud infrastructure, security, and database systems for enterprises, telcos, and government, based in Hyderabad.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/services/infrastructure` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/services/infrastructure`,
    images: [{ url: `${SITE_URL}/images/infrastructure.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${SITE_URL}/images/infrastructure.png`],
  },
};

const faqItems = [
  {
    question: "What does Pure Latency's Infrastructure service include?",
    answer:
      'It covers network architecture, cloud infrastructure, security and compliance, and database systems. In practice that means designing network topology and edge delivery, provisioning cloud environments with infrastructure-as-code, implementing identity, secrets, and edge security controls, and building or tuning relational and non-relational databases.',
  },
  {
    question: "What technologies does Pure Latency use for infrastructure work?",
    answer:
      'The stack spans major cloud providers, networking, infrastructure-as-code, security, monitoring, and database tooling. This includes AWS, Microsoft Azure, and Google Cloud; Cisco, Juniper, pfSense, HAProxy, and NGINX; Terraform, CloudFormation, Pulumi, Ansible, and Chef; Hashicorp Vault, AWS WAF, Cloudflare, Okta, and Auth0; Prometheus, Grafana, Datadog, New Relic, and the ELK Stack; and PostgreSQL, MongoDB, MySQL, Redis, and Cassandra.',
  },
  {
    question: 'Does Pure Latency support multi-cloud infrastructure?',
    answer:
      'Yes, multi-cloud deployment is a core part of the cloud infrastructure capability. Environments are built across AWS, Azure, and Google Cloud using infrastructure-as-code so configuration stays consistent and portable rather than locked to a single provider.',
  },
  {
    question: "What is Pure Latency's infrastructure project process?",
    answer:
      'Projects move through four phases: assessment, architecture, implementation, and optimization. Assessment covers an infrastructure audit and requirements gathering; architecture covers design and technology selection; implementation covers deployment and security hardening; optimization is ongoing performance and cost tuning after go-live.',
  },
];

const jsonLd = [
  organizationJsonLd(),
  serviceJsonLd({
    name: 'Infrastructure',
    description,
    serviceType: 'IT Infrastructure Services',
    slug: 'infrastructure',
  }),
  breadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Infrastructure', url: '/services/infrastructure' },
  ]),
  faqJsonLd(faqItems),
];

export default function InfrastructurePage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <InfrastructureContent faqItems={faqItems} />
    </>
  );
}
