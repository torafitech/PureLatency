import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

const InsightsPage: NextPage = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of AI in Web Development',
      excerpt: 'Explore how artificial intelligence is reshaping the way we build and interact with web applications.',
      author: 'Alex Chen',
      date: 'Feb 15, 2026',
      category: 'AI & ML',
      readTime: '5 min read',
      image: '/insights/ai-web.jpg',
      slug: 'future-of-ai-web-development'
    },
    {
      id: 2,
      title: 'Building Scalable Microservices with Kubernetes',
      excerpt: 'Learn best practices for designing, deploying, and managing microservices architecture at scale.',
      author: 'Sarah Johnson',
      date: 'Feb 10, 2026',
      category: 'Cloud',
      readTime: '8 min read',
      image: '/insights/kubernetes.jpg',
      slug: 'scalable-microservices-kubernetes'
    },
    {
      id: 3,
      title: 'UX Trends to Watch in 2026',
      excerpt: 'Discover the latest user experience trends that will define digital products this year.',
      author: 'Michael Rodriguez',
      date: 'Feb 5, 2026',
      category: 'Design',
      readTime: '6 min read',
      image: '/insights/ux-trends.jpg',
      slug: 'ux-trends-2026'
    },
    {
      id: 4,
      title: 'The Rise of Progressive Web Apps',
      excerpt: 'Why PWAs are becoming the preferred choice for businesses looking to reach mobile users.',
      author: 'Emily Zhang',
      date: 'Jan 28, 2026',
      category: 'Mobile',
      readTime: '4 min read',
      image: '/insights/pwa.jpg',
      slug: 'rise-of-progressive-web-apps'
    },
    {
      id: 5,
      title: 'Implementing CI/CD for Faster Releases',
      excerpt: 'A comprehensive guide to setting up continuous integration and deployment pipelines.',
      author: 'David Kim',
      date: 'Jan 20, 2026',
      category: 'DevOps',
      readTime: '7 min read',
      image: '/insights/cicd.jpg',
      slug: 'implementing-cicd'
    },
    {
      id: 6,
      title: 'Security Best Practices for Modern Apps',
      excerpt: 'Essential security measures every development team should implement in 2026.',
      author: 'Lisa Wang',
      date: 'Jan 12, 2026',
      category: 'Security',
      readTime: '6 min read',
      image: '/insights/security.jpg',
      slug: 'security-best-practices'
    }
  ];

  const categories = ['All', 'AI & ML', 'Cloud', 'Design', 'Mobile', 'DevOps', 'Security'];

  return (
    <>
      <Head>
        <title>Insights | PureLatency Blog</title>
        <meta name="description" content="Latest insights, trends, and best practices in web development, mobile apps, AI, and cloud technology." />
      </Head>
      
      <Navbar />
      
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-white to-[#fafafa]">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <span className="badge-custom">Our Blog</span>
              <h1 className="text-5xl md:text-6xl mb-6">Insights</h1>
              <p className="text-xl text-[#6e6e73]">
                Thoughts, stories, and ideas on technology, design, and digital innovation.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-[#f5f5f7] hover:bg-[#e6e6e9] transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="group bg-[#fafafa] rounded-3xl overflow-hidden hover:shadow-lg transition-all">
                  <div className="aspect-video bg-[#e6e6e9] flex items-center justify-center">
                    <i className="fas fa-image text-4xl text-[#86868b]"></i>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 text-sm text-[#86868b] mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#0066cc] transition-colors">
                      <Link href={`/insights/${post.slug}`} className="no-underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-[#6e6e73] mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{post.author}</span>
                      <span className="text-xs px-3 py-1.5 bg-white rounded-full border border-[#e6e6e9]">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button href="#" variant="outline">
                Load More Articles
              </Button>
            </div>
          </Container>
        </section>

        <section className="py-20 bg-[#fafafa]">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-[#6e6e73] mb-8">
                Get the latest insights and trends delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full border border-[#d2d2d7] focus:outline-none focus:border-[#0066cc]"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default InsightsPage;