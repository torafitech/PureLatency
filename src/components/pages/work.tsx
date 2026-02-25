'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '../layout/ui/Container';
import Button from '../layout/ui/Button';


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

export default function WorkPage() {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'FinTech Dashboard',
      category: 'web',
      client: 'PayFlow',
      description:
        'A comprehensive financial dashboard with real-time analytics.',
      image: '/projects/fintech.jpg',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '/work/fintech-dashboard',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'ai', label: 'AI & ML' },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <Navbar />

      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-white to-[#fafafa]">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl mb-6">Work</h1>
              <p className="text-xl text-[#6e6e73]">
                Real projects, real results.
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
                  className={`px-6 py-2 rounded-full ${
                    filter === cat.value
                      ? 'bg-[#0066cc] text-white'
                      : 'bg-[#f5f5f7]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-3xl overflow-hidden bg-[#fafafa]"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-3">
                      {project.title}
                    </h3>

                    <p className="text-[#6e6e73] mb-6">
                      {project.description}
                    </p>

                    <Button href={project.link}>
                      View Case Study
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
}