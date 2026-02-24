import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '../layout/ui/Container';


const WhyUsPage: NextPage = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.',
      icon: 'fa-star'
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and innovative approaches to solve complex business challenges.',
      icon: 'fa-lightbulb'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients, fostering transparent communication and partnership throughout the journey.',
      icon: 'fa-handshake'
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and a commitment to doing what\'s right for our clients and team.',
      icon: 'fa-shield'
    }
  ];

  const team = [
    { name: 'Alex Chen', role: 'CEO & Co-Founder', image: '/team/alex.jpg' },
    { name: 'Sarah Johnson', role: 'CTO & Co-Founder', image: '/team/sarah.jpg' },
    { name: 'Michael Rodriguez', role: 'Head of Design', image: '/team/michael.jpg' },
    { name: 'Emily Zhang', role: 'Lead AI Engineer', image: '/team/emily.jpg' },
  ];

  return (
    <>
      <Head>
        <title>Why Choose Us | PureLatency</title>
        <meta name="description" content="Learn why forward-thinking companies choose PureLatency for their digital transformation needs." />
      </Head>
      
      <Navbar />
      
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-white to-[#fafafa]">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <span className="badge-custom">Our Story</span>
              <h1 className="text-5xl md:text-6xl mb-6">Why PureLatency</h1>
              <p className="text-xl text-[#6e6e73]">
                We're not just developers — we're partners in your success, committed to delivering exceptional digital experiences.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <div>
                <h2 className="text-4xl mb-6">Our Mission</h2>
                <p className="text-lg text-[#6e6e73] mb-6">
                  To empower businesses with transformative technology solutions that drive growth, efficiency, and innovation.
                </p>
                <p className="text-lg text-[#6e6e73]">
                  Founded in 2015, PureLatency has grown from a small team of passionate developers to a full-service digital innovation studio trusted by over 500 clients worldwide.
                </p>
              </div>
              <div className="bg-[#f5f5f7] rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#0066cc] mb-2">500+</div>
                    <div className="text-sm text-[#6e6e73]">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#0066cc] mb-2">50+</div>
                    <div className="text-sm text-[#6e6e73]">Expert Team</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#0066cc] mb-2">11+</div>
                    <div className="text-sm text-[#6e6e73]">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#0066cc] mb-2">99.9%</div>
                    <div className="text-sm text-[#6e6e73]">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-4xl text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
              {values.map((value) => (
                <div key={value.title} className="text-center p-8 bg-[#fafafa] rounded-3xl">
                  <div className="w-16 h-16 bg-[#0066cc]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i className={`fas ${value.icon} text-2xl text-[#0066cc]`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-[#6e6e73]">{value.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-4xl text-center mb-12">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-32 h-32 bg-[#e6e6e9] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="fas fa-user text-4xl text-[#86868b]"></i>
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-[#6e6e73]">{member.role}</p>
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

export default WhyUsPage;
