import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const WorkPage: NextPage = () => {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'FinTech Dashboard',
      category: 'web',
      client: 'PayFlow',
      description: 'A comprehensive financial dashboard with real-time analytics, transaction monitoring, and reporting tools.',
      image: '/projects/fintech.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'D3.js'],
      link: '/work/fintech-dashboard'
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      category: 'mobile',
      client: 'VitalFit',
      description: 'A cross-platform mobile app for personalized workout plans, nutrition tracking, and progress monitoring.',
      image: '/projects/fitness.jpg',
      tags: ['React Native', 'Firebase', 'Redux'],
      link: '/work/fitness-app'
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      category: 'web',
      client: 'UrbanStyle',
      description: 'A modern e-commerce platform with AI-powered product recommendations and seamless checkout experience.',
      image: '/projects/ecommerce.jpg',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'Prisma'],
      link: '/work/ecommerce-platform'
    },
    {
      id: 4,
      title: 'AI Content Generator',
      category: 'ai',
      client: 'ContentCraft',
      description: 'An AI-powered platform that generates high-quality content for marketing teams and content creators.',
      image: '/projects/ai-content.jpg',
      tags: ['Python', 'OpenAI', 'FastAPI', 'React'],
      link: '/work/ai-content-generator'
    },
    {
      id: 5,
      title: 'Logistics Management System',
      category: 'web',
      client: 'ShipSmart',
      description: 'A comprehensive logistics platform for route optimization, fleet management, and real-time tracking.',
      image: '/projects/logistics.jpg',
      tags: ['Vue.js', 'Django', 'PostgreSQL', 'Redis'],
      link: '/work/logistics-system'
    },
    {
      id: 6,
      title: 'Meditation & Wellness App',
      category: 'mobile',
      client: 'MindSpace',
      description: 'A mobile app offering guided meditations, sleep stories, and mindfulness exercises.',
      image: '/projects/wellness.jpg',
      tags: ['Flutter', 'Firebase', 'Spotify API'],
      link: '/work/wellness-app'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'ai', label: 'AI & ML' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      <Head>
        <title>Our Work | PureLatency</title>
        <meta name="description" content="Explore our portfolio of successful projects across web development, mobile apps, and AI solutions." />
      </Head>
      
      <Navbar />
      
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-white to-[#fafafa]">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <span className="badge-custom">Our Portfolio</span>
              <h1 className="text-5xl md:text-6xl mb-6">Work</h1>
              <p className="text-xl text-[#6e6e73]">
                Real projects, real results. See how we've helped businesses transform their digital presence.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    filter === cat.value
                      ? 'bg-[#0066cc] text-white'
                      : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e6e6e9]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group bg-[#fafafa] rounded-3xl overflow-hidden hover:shadow-lg transition-all">
                  <div className="aspect-video bg-[#e6e6e9] flex items-center justify-center">
                    <i className="fas fa-image text-4xl text-[#86868b]"></i>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-semibold text-[#0066cc]">{project.client}</span>
                      <span className="text-sm text-[#86868b]">•</span>
                      <span className="text-sm capitalize text-[#86868b]">{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#0066cc] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#6e6e73] mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-white px-3 py-1.5 rounded-full border border-[#e6e6e9]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button href={project.link} variant="link" className="p-0">
                      View Case Study <i className="fas fa-arrow-right"></i>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default WorkPage;