import type { Metadata } from 'next';
import { SITE_URL, organizationJsonLd, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';
import CloudDevOpsContent from './CloudDevOpsContent';

const description =
  "Pure Latency's Cloud and DevOps services cover Infrastructure as Code, Kubernetes orchestration, CI/CD pipelines, and monitoring for enterprise clients.";

const title = 'Cloud and DevOps | Pure Latency — Hyderabad';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/services/cloud-devops`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/services/cloud-devops`,
    images: [{ url: `${SITE_URL}/images/cloud-devops.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${SITE_URL}/images/cloud-devops.png`],
  },
};

const faqItems = [
  {
    question: "What does Pure Latency's Cloud and DevOps service include?",
    answer:
      'It covers infrastructure as code, container orchestration, CI/CD pipeline automation, and monitoring and observability. Specifically, this means provisioning cloud infrastructure with tools like Terraform, deploying containerized workloads through Kubernetes and Docker, automating build-test-deploy pipelines with GitHub Actions or GitLab CI, and instrumenting systems with Prometheus, Grafana, or Datadog for real-time visibility.',
  },
  {
    question: 'What technologies does Pure Latency use for cloud and DevOps work?',
    answer:
      'The technology stack spans major cloud providers and open-source tooling. This includes AWS, Azure, and GCP for cloud infrastructure; Kubernetes, Docker, and Istio for container orchestration and service mesh; Terraform and Ansible for infrastructure as code; and GitHub Actions, GitLab CI, Jenkins, and ArgoCD for CI/CD and GitOps workflows.',
  },
  {
    question: 'How does Pure Latency approach CI/CD pipeline design?',
    answer:
      'Pipelines are built around automated build, test, and deployment stages triggered by code changes. Rather than manual releases, changes move through defined pipeline stages using tools such as GitHub Actions, GitLab CI, or Jenkins, with infrastructure changes tracked through the same version-controlled workflow.',
  },
  {
    question: 'Does Pure Latency support multi-cloud infrastructure?',
    answer:
      "Yes, infrastructure is designed to run across AWS, Azure, and GCP depending on client requirements. Using infrastructure as code tools like Terraform keeps cloud provisioning portable across providers rather than locked into a single vendor's tooling.",
  },
  {
    question: 'What monitoring and observability tools does Pure Latency use?',
    answer:
      'Monitoring relies on Prometheus for metrics collection, Grafana for dashboards, and Datadog for broader observability coverage. These tools are integrated into deployed infrastructure to give operations teams visibility into system health, performance, and alerting without relying on manual checks.',
  },
];

const jsonLd = [
  organizationJsonLd(),
  serviceJsonLd({
    name: 'Cloud and DevOps',
    description,
    serviceType: 'Cloud and DevOps Services',
    slug: 'cloud-devops',
  }),
  breadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Cloud and DevOps', url: '/services/cloud-devops' },
  ]),
  faqJsonLd(faqItems),
];

export default function CloudDevOpsPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <CloudDevOpsContent faqItems={faqItems} />
    </>
  );
}
