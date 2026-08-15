import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = [
    'applications',
    'web-development',
    'data-ai',
    'cloud-devops',
    'infrastructure',
    'quantum-compute',
    'fiber-optics',
    'ai-services',
  ];

  const staticRoutes = [
    '',
    '/services',
    // '/services/overview' intentionally excluded — canonicalized to
    // /services (near-duplicate content), see src/app/services/overview/page.tsx
    '/products',
    '/products/starling-post',
    '/about',
    '/about/overview',
    '/about/beliefs',
    '/about/milestones',
    '/industries',
    '/industries/enterprise',
    '/industries/telco-space',
    '/industries/government',
    '/partners',
    '/partners/overview',
    '/contact',
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      lastModified: now,
    })),
  ];
}
