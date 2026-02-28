'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { useState } from 'react';

export default function MilestonesPage() {
  const [activeTab, setActiveTab] = useState('achieved');

  const stats = [
    { value: '12', label: 'Major Milestones', icon: '🏆' },
    { value: '100%', label: 'Team Celebrated', icon: '🎉' },
    { value: '0', label: 'Regrets', icon: '😌' },
    { value: '∞', label: 'More to Come', icon: '🚀' }
  ];

  const achievedMilestones = [
    {
      date: 'January 15, 2026',
      title: 'The First Commit',
      desc: 'Alex wrote the first line of code for what would become our internal tooling. The repo was called "test-please-ignore." We kept the name for luck.',
      icon: '💻',
      color: '#0066cc',
      impact: 'Birth of our engineering culture',
      people: 'Alex, Jamie'
    },
    {
      date: 'February 3, 2026',
      title: 'First Client Meeting',
      desc: 'Met a founder in a coffee shop. We had no portfolio. They had no budget. We both took a chance. Three years later, they\'re still a client.',
      icon: '☕',
      color: '#10B981',
      impact: 'First revenue, first friend',
      people: 'Sam, Casey'
    },
    {
      date: 'March 22, 2026',
      title: 'Incorporation Day',
      desc: 'Officially became PureLatency Inc. Celebrated with pizza in an empty apartment. The LLC papers are still framed in our office.',
      icon: '📄',
      color: '#7C3AED',
      impact: 'We became real',
      people: 'All founders'
    },
    {
      date: 'April 10, 2026',
      title: 'First Hire',
      desc: 'Hired our first employee — a designer who applied because she loved our "vibe." She still runs our design team.',
      icon: '🎨',
      color: '#F59E0B',
      impact: 'From founders to team',
      people: 'Priya'
    },
    {
      date: 'May 18, 2026',
      title: 'First Office',
      desc: 'Moved out of apartments into a real space with a real door that locks. The landlord still hasn\'t fixed the leaky faucet. It\'s become a feature.',
      icon: '🏢',
      color: '#EC4899',
      impact: 'Place to call our own',
      people: 'Entire team'
    },
    {
      date: 'June 5, 2026',
      title: 'First Profit Share',
      desc: 'Distributed our first profit share. Nobody expected it. Everyone cried a little. We do it every quarter now.',
      icon: '💰',
      color: '#6366F1',
      impact: 'Shared success',
      people: 'Finance team'
    },
    {
      date: 'July 22, 2026',
      title: 'First Conference Talk',
      desc: 'Jamie spoke at a major tech conference. Our logo on the big screen. We watched from the back row, holding hands, terrified and proud.',
      icon: '🎤',
      color: '#14B8A6',
      impact: 'Industry recognition',
      people: 'Jamie'
    },
    {
      date: 'August 14, 2026',
      title: 'Launched Starling Post',
      desc: 'Our first product launch. The site crashed three times. We didn\'t sleep for 48 hours. Best week of our lives.',
      icon: '🚀',
      color: '#8B5CF6',
      impact: 'From services to products',
      people: 'Product team'
    },
    {
      date: 'September 8, 2026',
      title: 'First 100 Users',
      desc: 'Starling Post hit 100 users. We sent each one a handwritten thank-you note. Some replied with photos of the notes on their fridges.',
      icon: '👥',
      color: '#D946EF',
      impact: 'Product validation',
      people: 'Sofia'
    },
    {
      date: 'October 1, 2026',
      title: 'First Company Retreat',
      desc: 'Rented a cabin in Tahoe. Built a campfire. Stayed up too late. Came back with 47 new inside jokes and zero regrets.',
      icon: '🏕️',
      color: '#F97316',
      impact: 'Team bonds deepened',
      people: 'Everyone'
    },
    {
      date: 'November 12, 2026',
      title: 'First Industry Award',
      desc: 'Won "Best Emerging Tech Company" at a local awards show. Sam\'s acceptance speech went viral (internally). We still quote it.',
      icon: '🏆',
      color: '#0066cc',
      impact: 'External validation',
      people: 'Sam'
    },
    {
      date: 'December 20, 2026',
      title: 'First Holiday Party',
      desc: 'Threw a holiday party for team and families. Seeing partners meet, kids play, and our team relaxed — we knew we\'d built something special.',
      icon: '🎄',
      color: '#10B981',
      impact: 'Family became community',
      people: 'Everyone + families'
    }
  ];

  const theUpcoming = [
    {
      quarter: 'Q1 2027',
      title: 'London Office Opening',
      desc: 'Expanding to Europe with our first London office. Already have five people ready to relocate.',
      icon: '🇬🇧',
      color: '#0066cc',
      status: 'On Track',
      eta: 'March 2027'
    },
    {
      quarter: 'Q1 2027',
      title: 'Nexus Flow Beta',
      desc: 'Private beta of our workflow automation platform. 200 companies on the waitlist already.',
      icon: '⚡',
      color: '#10B981',
      status: 'On Track',
      eta: 'February 2027'
    },
    {
      quarter: 'Q2 2027',
      title: 'Team 50',
      desc: 'Hitting 50 team members. Planning a massive celebration when we do.',
      icon: '👥',
      color: '#7C3AED',
      status: 'Hiring',
      eta: 'April 2027'
    },
    {
      quarter: 'Q2 2027',
      title: 'First Sustainability Report',
      desc: 'Publishing our first environmental impact report. We care about more than just code.',
      icon: '🌍',
      color: '#F59E0B',
      status: 'In Progress',
      eta: 'May 2027'
    },
    {
      quarter: 'Q3 2027',
      title: 'Aether AI Launch',
      desc: 'Public launch of our AI analytics platform. This one\'s going to be big.',
      icon: '🤖',
      color: '#EC4899',
      status: 'In Development',
      eta: 'August 2027'
    },
    {
      quarter: 'Q3 2027',
      title: 'First Acquisition',
      desc: 'We\'re looking to acquire a small tool that our team already loves. Can\'t say more yet.',
      icon: '🤝',
      color: '#6366F1',
      status: 'Exploring',
      eta: 'September 2027'
    },
    {
      quarter: 'Q4 2027',
      title: 'Asia Expansion',
      desc: 'Opening our Singapore office. The team there is already formed, just need a space.',
      icon: '🌏',
      color: '#14B8A6',
      status: 'Planning',
      eta: 'November 2027'
    },
    {
      quarter: 'Q4 2027',
      title: '10,000 Users',
      desc: 'Hitting 10,000 users across all products. We\'ll send 10,000 donuts. Somehow.',
      icon: '🍩',
      color: '#8B5CF6',
      status: 'Ambitions',
      eta: 'December 2027'
    }
  ];

  const theStories = [
    {
      milestone: 'The First Commit',
      story: 'Alex wrote that first line at 2am, alone, questioning life choices. The code was terrible. It didn\'t matter. It was the start.',
      emotion: '😅',
      author: 'Alex'
    },
    {
      milestone: 'First Client Meeting',
      story: 'I wore a hoodie. They wore a hoodie. We bonded over terrible coffee and mutual imposter syndrome. Best meeting ever.',
      emotion: '☕',
      author: 'Sam'
    },
    {
      milestone: 'Incorporation Day',
      story: 'We filed the paperwork at 11pm. Casey made margaritas with mix from a gas station. We toasted to nothing and everything.',
      emotion: '🍹',
      author: 'Casey'
    },
    {
      milestone: 'First Hire',
      story: 'Priya walked in, looked around, and said "this place feels right." She was our first and best decision.',
      emotion: '❤️',
      author: 'Jordan'
    }
  ];

  return (
    <>
      <Navbar />

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '6rem 2rem 4rem' }}>
        {/* Social Media */}
        <section style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { name: 'Instagram', href: 'https://instagram.com/purelatency', color: '#E4405F' },
              { name: 'Twitter', href: 'https://twitter.com/purelatency', color: '#1DA1F2' },
              { name: 'Facebook', href: 'https://facebook.com/purelatency', color: '#0A66C2' }
            ].map(social => (
              <a
                key={social.name}
                href={social.href}
                style={{ color: social.color, textDecoration: 'none', fontWeight: 500 }}
              >
                {social.name}
              </a>
            ))}
          </div>
        </section>

        {/* Breadcrumb */}
        <div style={{ color: '#86868b', marginBottom: '2rem', fontSize: '0.9rem' }}>
          <Link href="/" style={{ color: '#86868b', textDecoration: 'none' }}>Home</Link> / 
          <Link href="/about" style={{ color: '#86868b', textDecoration: 'none' }}> About</Link> / 
          <span style={{ color: '#1d1d1f' }}> Milestones</span>
        </div>

        {/* Hero Section */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '6rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ 
              display: 'inline-block',
              background: 'rgba(0,102,204,0.1)',
              color: '#0066cc',
              padding: '0.5rem 1.5rem',
              borderRadius: '30px',
              fontSize: '0.9rem',
              marginBottom: '1.5rem'
            }}>
              📅 The Journey So Far
            </div>
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Every milestone<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #0066cc 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                has a story behind it
              </span>
            </h1>
            <p style={{ color: '#86868b', fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              We believe in celebrating the journey, not just the destination. Every line of code, 
              every client, every late-night breakthrough — they all matter. Here are the moments 
              that shaped us, the ones we're proud of, and the ones still to come.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link
                href="#achieved"
                style={{
                  background: '#0066cc',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                See Our Journey
              </Link>
              <Link
                href="#upcoming"
                style={{
                  background: 'transparent',
                  color: '#1d1d1f',
                  padding: '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  border: '1px solid #e6e6e9'
                }}
              >
                What's Next ↓
              </Link>
            </div>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #f5f5f7 0%, #e6e6e9 100%)',
            borderRadius: '30px',
            padding: '3rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'rgba(0,102,204,0.1)',
              borderRadius: '50%'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-50px',
              left: '-50px',
              width: '200px',
              height: '200px',
              background: 'rgba(124,58,237,0.1)',
              borderRadius: '50%'
            }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '1rem' }}>By the Numbers</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '12 major milestones achieved',
                  '8 upcoming in 2027',
                  'Countless memories made'
                ].map((item, i) => (
                  <li key={i} style={{ 
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#86868b'
                  }}>
                    <span style={{ color: '#0066cc' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          marginBottom: '6rem',
          padding: '3rem',
          background: 'linear-gradient(135deg, #1d1d1f 0%, #2d2d2f 100%)',
          borderRadius: '20px',
          color: 'white'
        }}>
          {stats.map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 300, color: '#0066cc', marginBottom: '0.3rem' }}>
                {stat.value}
              </div>
              <div style={{ color: '#aaa', fontSize: '0.9rem' }}>{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          marginBottom: '3rem',
          borderBottom: '1px solid #e6e6e9',
          paddingBottom: '1rem'
        }}>
          {['achieved', 'upcoming', 'stories'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                fontWeight: activeTab === tab ? 600 : 400,
                color: activeTab === tab ? '#0066cc' : '#86868b',
                cursor: 'pointer',
                borderBottom: activeTab === tab ? '2px solid #0066cc' : 'none',
                textTransform: 'capitalize'
              }}
            >
              {tab === 'achieved' ? 'Achieved' : tab === 'upcoming' ? 'Upcoming' : 'Stories'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'achieved' && (
          <section id="achieved" style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Milestones We've Reached
            </h2>
            <p style={{ 
              color: '#86868b', 
              fontSize: '1.2rem', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 3rem'
            }}>
              Each one a memory, each one a reason to celebrate
            </p>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem'
            }}>
              {achievedMilestones.map((milestone, index) => (
                <div
                  key={milestone.title}
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9',
                    position: 'relative',
                    transition: 'transform 0.2s'
                  }}
                >
                  <div style={{ 
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: milestone.color,
                    color: 'white',
                    padding: '0.2rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontWeight: 500
                  }}>
                    #{index + 1}
                  </div>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{milestone.icon}</div>
                  <div style={{ 
                    fontSize: '0.9rem',
                    color: milestone.color,
                    fontWeight: 500,
                    marginBottom: '0.5rem'
                  }}>
                    {milestone.date}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                    {milestone.title}
                  </h3>
                  <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                    {milestone.desc}
                  </p>
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderTop: '1px solid #e6e6e9',
                    paddingTop: '1rem',
                    fontSize: '0.85rem'
                  }}>
                    <span style={{ color: '#86868b' }}>🎯 {milestone.impact}</span>
                    <span style={{ color: '#0066cc' }}>👥 {milestone.people}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'upcoming' && (
          <section id="upcoming" style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              What's Next
            </h2>
            <p style={{ 
              color: '#86868b', 
              fontSize: '1.2rem', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 3rem'
            }}>
              The journey continues. Here's what we're building toward.
            </p>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem'
            }}>
              {theUpcoming.map((item, index) => (
                <div
                  key={item.title}
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9',
                    position: 'relative'
                  }}
                >
                  {index < theUpcoming.length - 4 && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      right: '-20px',
                      width: '40px',
                      height: '2px',
                      background: '#e6e6e9',
                      transform: 'translateY(-50%)',
                      zIndex: 1
                    }} />
                  )}
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <div style={{ 
                    fontSize: '0.8rem',
                    color: item.color,
                    fontWeight: 500,
                    marginBottom: '0.3rem'
                  }}>
                    {item.quarter}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem', color: '#1d1d1f' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#86868b', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                    {item.desc}
                  </p>
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid #e6e6e9',
                    paddingTop: '0.8rem'
                  }}>
                    <span style={{
                      background: `${item.color}20`,
                      color: item.color,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '20px',
                      fontSize: '0.7rem',
                      fontWeight: 500
                    }}>
                      {item.status}
                    </span>
                    <span style={{ color: '#86868b', fontSize: '0.7rem' }}>
                      {item.eta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'stories' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Behind the Milestones
            </h2>
            <p style={{ 
              color: '#86868b', 
              fontSize: '1.2rem', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 3rem'
            }}>
              The real stories our team remembers
            </p>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              {theStories.map(story => (
                <div
                  key={story.milestone}
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9',
                    position: 'relative'
                  }}
                >
                  <span style={{ fontSize: '3rem', position: 'absolute', top: '1rem', right: '1rem', opacity: 0.2 }}>
                    {story.emotion}
                  </span>
                  <div style={{ marginBottom: '1rem' }}>
                    <span style={{
                      background: '#0066cc20',
                      color: '#0066cc',
                      padding: '0.2rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 500
                    }}>
                      {story.milestone}
                    </span>
                  </div>
                  <p style={{ color: '#1d1d1f', fontSize: '1rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '1rem' }}>
                    "{story.story}"
                  </p>
                  <div style={{ color: '#86868b', fontSize: '0.9rem' }}>
                    — {story.author}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline Preview */}
            <div style={{ 
              marginTop: '4rem',
              padding: '3rem',
              background: '#fafafa',
              borderRadius: '20px',
              border: '1px solid #e6e6e9'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Our Journey Visualized
              </h3>
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                {achievedMilestones.slice(0, 6).map((milestone, i) => (
                  <div key={i} style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem'
                  }}>
                    <div style={{ 
                      minWidth: '100px',
                      color: milestone.color,
                      fontWeight: 500,
                      fontSize: '0.9rem'
                    }}>
                      {milestone.date}
                    </div>
                    <div style={{ 
                      width: '12px',
                      height: '12px',
                      background: milestone.color,
                      borderRadius: '50%',
                      position: 'relative'
                    }}>
                      {i < 5 && (
                        <div style={{
                          position: 'absolute',
                          top: '12px',
                          left: '5px',
                          width: '2px',
                          height: '60px',
                          background: '#e6e6e9',
                          zIndex: 1
                        }} />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <strong style={{ color: '#1d1d1f' }}>{milestone.title}</strong>
                      <p style={{ color: '#86868b', fontSize: '0.9rem', margin: '0.2rem 0 0 0' }}>
                        {milestone.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section
  style={{
    marginTop: '4rem',
    display: 'flex',
    justifyContent: 'center'
  }}
>
  <div
    style={{
      width: '100%',
      maxWidth: '1200px',
      padding: '4rem 2rem',   // reduced height
      borderRadius: '28px',
      textAlign: 'center',
       background: `
              radial-gradient(circle at 20% 30%, #7a3cff 0%, transparent 40%),
              radial-gradient(circle at 80% 10%, #ff2e88 0%, transparent 40%),
              linear-gradient(180deg, #0b1c48 0%, #2a1e5c 100%)
            `,
            color: '#ffffff',
    }}
  >
    <h2
      style={{
        fontSize: '3rem',
        fontWeight: 400,
        marginBottom: '1rem'
      }}
    >
      Contact Us
    </h2>

    <p
      style={{
        fontSize: '1.25rem',
        marginBottom: '2.2rem',
        opacity: 0.95
      }}
    >
      Be always in front line, get in touch today.
    </p>

    <Link
     href="/contact"
            style={{
              display: 'inline-block',
              padding: '18px 60px',
              borderRadius: '70px 70px 0 70px',
              border: '3px solid #ffffff',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '1.1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#ffffff';
        e.currentTarget.style.color = '#111';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = '#ffffff';
      }}
    >
      Contact Us
    </Link>
  </div>
</section>

        {/* Back to About */}
        <div style={{ 
          borderTop: '1px solid #e6e6e9',
          paddingTop: '2rem',
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <Link 
            href="/about" 
            style={{ 
              color: '#86868b', 
              textDecoration: 'none', 
              fontSize: '0.9rem',
              display: 'inline-block'
            }}
          >
            ← Back to About
          </Link>
        </div>
      </main>


       
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '4rem',
            marginBottom: '4rem'
          }}>
            <div>
              <div style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>PureLatency</div>
              <p style={{ color: '#666', lineHeight: '1.7' }}>
                Celebrating every step of the journey.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Explore</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: '#aaa', textDecoration: 'none' }}>Our Story</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/services" style={{ color: '#aaa', textDecoration: 'none' }}>What We Do</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/products" style={{ color: '#aaa', textDecoration: 'none' }}>What We Built</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Connect</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/contact" style={{ color: '#aaa', textDecoration: 'none' }}>Say Hi</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/careers" style={{ color: '#aaa', textDecoration: 'none' }}>Join Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/privacy" style={{ color: '#aaa', textDecoration: 'none' }}>Privacy</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/terms" style={{ color: '#aaa', textDecoration: 'none' }}>Terms</Link></li>
              </ul>
            </div>
          </div>
          <div style={{ 
            borderTop: '1px solid #333', 
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#666'
          }}>
            © 2026 PureLatency. The best is yet to come.
          </div>
        </div>
      
    </>
  );
}