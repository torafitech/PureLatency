import type { Metadata } from 'next';
import { SITE_URL, organizationJsonLd, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';
import DataAIContent from './DataAIContent';

const description =
  'Data and AI services from Pure Latency: predictive analytics, conversational AI, computer vision, and generative AI for enterprises, telcos, and government.';

// TODO: PLACEHOLDER OG IMAGE — reusing /images/ai-services.png (the homepage
// "AI Services" card raster) because no dedicated Data & AI photo/graphic
// exists yet. The SVG network graphic created for the homepage card
// (/images/data-ai.svg) is not used here since social crawlers don't
// reliably render SVG for og:image previews. Commission a real 1200x630
// PNG/JPG for this page and swap it in.
const ogImage = `${SITE_URL}/images/ai-services.png`;

export const metadata: Metadata = {
  title: 'Data and AI | Pure Latency — Hyderabad',
  description,
  alternates: { canonical: `${SITE_URL}/services/data-ai` },
  openGraph: {
    title: 'Data and AI | Pure Latency — Hyderabad',
    description,
    url: `${SITE_URL}/services/data-ai`,
    images: [{ url: ogImage }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data and AI | Pure Latency — Hyderabad',
    description,
    images: [ogImage],
  },
};

const faqItems = [
  {
    question: "What does Pure Latency's Data and AI service include?",
    answer:
      "It includes predictive analytics, conversational AI, computer vision, and generative AI development, plus the data engineering work needed to support them. We build and deploy models for forecasting, chatbots and voice assistants, image and video analysis, and LLM-powered applications, along with the data pipelines, feature engineering, and MLOps tooling required to train, validate, and run them in production.",
  },
  {
    question: 'What technologies does Pure Latency use for data and AI projects?',
    answer:
      "We use an open, mainstream stack rather than a single proprietary platform. Model development is built on TensorFlow, PyTorch, scikit-learn, XGBoost, Keras, and Spark ML; generative AI and LLM work uses Hugging Face, OpenAI, LangChain, and LlamaIndex; and MLOps is handled with MLflow, Kubeflow, Weights & Biases, Ray, and DVC for experiment tracking, orchestration, and versioning.",
  },
  {
    question: 'Does Pure Latency build generative AI applications?',
    answer:
      "Yes, generative AI is one of our core Data and AI capabilities. We build applications that connect large language models to a client's own documents and systems for tasks like drafting, summarization, and internal search, using retrieval pipelines built with LangChain and LlamaIndex on top of models from OpenAI and open-source providers via Hugging Face.",
  },
  {
    question: 'How does Pure Latency handle data pipelines and infrastructure for AI projects?',
    answer:
      "Every engagement starts with a data foundation phase before any model work begins. That covers data collection, cleaning and preparation, feature engineering, and pipeline setup, since model quality is bounded by the quality of the data feeding it — this groundwork typically takes longer than the modeling itself.",
  },
  {
    question: 'How are AI models deployed and monitored after launch?',
    answer:
      "Models are deployed into production environments and monitored on an ongoing basis rather than handed off after training. We track model performance over time, retrain or adjust as data and usage patterns shift, and use MLOps tooling such as MLflow and Kubeflow to manage that lifecycle.",
  },
];

const jsonLd = [
  organizationJsonLd(),
  serviceJsonLd({
    name: 'Data and AI',
    description,
    serviceType: 'Data and AI Consulting',
    slug: 'data-ai',
  }),
  breadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Data and AI', url: '/services/data-ai' },
  ]),
  faqJsonLd(faqItems),
];

export default function DataAIPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <DataAIContent faqItems={faqItems} />
    </>
  );
}
