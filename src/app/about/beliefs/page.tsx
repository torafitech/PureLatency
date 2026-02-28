'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { useState } from 'react';

export default function BeliefsPage() {
  const [activeTab, setActiveTab] = useState('purpose');

  const stats = [
    { value: '10', label: 'Core Beliefs', icon: '📜' },
    { value: '100%', label: 'Live by Them', icon: '❤️' },
    { value: '0', label: 'Exceptions Made', icon: '🚫' },
    { value: '∞', label: 'Years to Build', icon: '⏳' }
  ];

  const ourPurpose = [
    {
      title: 'Why We Exist',
      desc: 'To prove that technology companies can be humane, profitable, and joyful — all at once. We exist to build software that matters, with people who care.',
      icon: '🎯',
      color: '#0066cc'
    },
    {
      title: 'What We Seek',
      desc: 'We seek elegant solutions to messy problems. We seek clients who become friends. We seek work that doesn\'t feel like work.',
      icon: '🔍',
      color: '#10B981'
    },
    {
      title: 'Our North Star',
      desc: 'Every decision passes through one filter: "Does this make our team proud?" If not, we don\'t do it. Simple as that.',
      icon: '⭐',
      color: '#7C3AED'
    },
    {
      title: 'The Legacy Question',
      desc: 'When we\'re gone, we want to be remembered not for our code, but for how we made people feel — respected, valued, and seen.',
      icon: '🕊️',
      color: '#F59E0B'
    }
  ];

  const theBeliefs = [
    {
      title: 'Quality Over Speed',
      desc: 'We refuse to ship crap. Ever. Clients rarely ask us to go faster because they know what "fast" costs. We\'d rather explain a delay than apologize for a bug.',
      icon: '⏳',
      color: '#0066cc'
    },
    {
      title: 'Humans First',
      desc: 'Code is temporary. Human connections are permanent. We choose kindness in every interaction — with clients, with each other, with ourselves.',
      icon: '❤️',
      color: '#10B981'
    },
    {
      title: 'Radical Honesty',
      desc: 'We tell clients what they need to hear, not what they want to hear. If we screw up, we own it immediately. No excuses. No spin.',
      icon: '🔦',
      color: '#7C3AED'
    },
    {
      title: 'Boredom is the Enemy',
      desc: 'If we\'re not learning, we\'re dying. We chase interesting problems and run from repetitive work. Curiosity is our fuel.',
      icon: '⚡',
      color: '#F59E0B'
    },
    {
      title: 'Balance is Non-Negotiable',
      desc: 'Burnout helps no one. We protect evenings, weekends, and sanity fiercely. A rested mind solves problems an exhausted one cannot.',
      icon: '🌿',
      color: '#EC4899'
    },
    {
      title: 'No Ego Left Behind',
      desc: 'The best idea wins, regardless of who it came from. We leave titles at the door. Junior devs correct founders. That\'s how we grow.',
      icon: '🚪',
      color: '#6366F1'
    },
    {
      title: 'Build With, Not For',
      desc: 'We don\'t build things for clients. We build things with them. They\'re partners, not purchase orders. Their success is our success.',
      icon: '🤝',
      color: '#14B8A6'
    },
    {
      title: 'Simple > Clever',
      desc: 'Clever code impresses engineers. Simple code ships. We optimize for readability and maintainability over showing off.',
      icon: '🧠',
      color: '#8B5CF6'
    },
    {
      title: 'Joy is a Feature',
      desc: 'If work isn\'t fun sometimes, we\'re doing it wrong. We laugh daily. We celebrate small wins. We take ourselves lightly but our work seriously.',
      icon: '😊',
      color: '#D946EF'
    },
    {
      title: 'Leave It Better',
      desc: 'Every codebase, every relationship, every process — we leave it better than we found it. No exceptions.',
      icon: '🌱',
      color: '#F97316'
    }
  ];

  const theManifesto = [
    {
      chapter: 'On Code',
      lines: [
        'We write code for humans first, computers second.',
        'We refactor ruthlessly. Technical debt is a choice, not a requirement.',
        'We ship when it\'s ready, not when the calendar says.',
        'Comments explain "why," not "what." The code already shows "what."'
      ]
    },
    {
      chapter: 'On Clients',
      lines: [
        'We partner, not vendor. There\'s a difference.',
        'We celebrate their wins like our own.',
        'We tell them when we\'re wrong, immediately.',
        'We choose clients who share our values.'
      ]
    },
    {
      chapter: 'On Each Other',
      lines: [
        'We assume good intent.',
        'We give credit freely, take blame sparingly.',
        'We teach without condescension.',
        'We protect each other\'s time and energy.'
      ]
    },
    {
      chapter: 'On Ourselves',
      lines: [
        'We rest without guilt.',
        'We learn without pressure.',
        'We grow without comparison.',
        'We stay curious.'
      ]
    }
  ];

  const theParadoxes = [
    {
      title: 'We Care Deeply / We Don\'t Care at All',
      desc: 'We care deeply about quality, integrity, and people. We don\'t care about office politics, arbitrary deadlines, or what competitors are doing.',
      icon: '🎭'
    },
    {
      title: 'We\'re Patient / We\'re Impatient',
      desc: 'We\'re patient with learning, growth, and getting things right. We\'re impatient with bureaucracy, inefficiency, and meetings that could be emails.',
      icon: '⏱️'
    },
    {
      title: 'We Plan / We Pivot',
      desc: 'We plan carefully but hold plans loosely. When reality contradicts our assumptions, we change direction without mourning the old path.',
      icon: '🔄'
    }
  ];

  const dailyPractices = [
    {
      title: 'The 5:15 Rule',
      desc: 'If a meeting runs past 5:15 PM, anyone can leave without explanation. Life happens. We trust you.',
      icon: '⏰'
    },
    {
      title: 'No-Blame Postmortems',
      desc: 'When things break, we ask "what broke our process?" not "who broke it?"',
      icon: '🔍'
    },
    {
      title: 'Random Thank Yous',
      desc: 'Every Friday, names are drawn. You write a thank-you to that person. Gets printed. Given. Cherished.',
      icon: '💌'
    },
    {
      title: 'The "Too Much" Rule',
      desc: 'If you\'re overwhelmed, say so. Work gets reprioritized immediately. Your wellbeing matters more.',
      icon: '🛡️'
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
          <span style={{ color: '#1d1d1f' }}> Purpose and Beliefs</span>
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
              📜 Not Just Words on a Wall
            </div>
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              What we believe<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #0066cc 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                and why it matters
              </span>
            </h1>
            <p style={{ color: '#86868b', fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Every company has values. Most are forgettable words on a "Culture" page. 
              Ours are different — they're lived, argued about, and occasionally broken 
              (then fixed). Here's what we actually believe.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link
                href="#beliefs"
                style={{
                  background: '#0066cc',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                Read Our Beliefs
              </Link>
              <Link
                href="#manifesto"
                style={{
                  background: 'transparent',
                  color: '#1d1d1f',
                  padding: '1rem 2rem',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  border: '1px solid #e6e6e9'
                }}
              >
                The Manifesto ↓
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
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>⚖️</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '1rem' }}>Beliefs in Action</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'We fired a client once. They deserved it.',
                  'We refunded a project, kept the friendship.',
                  'We say "I don\'t know" daily. It\'s liberating.'
                ].map((item, i) => (
                  <li key={i} style={{ 
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#86868b'
                  }}>
                    <span style={{ color: '#0066cc' }}>→</span>
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
          {['purpose', 'beliefs', 'manifesto', 'practice'].map(tab => (
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
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'purpose' && (
          <section id="purpose" style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '3rem',
              textAlign: 'center'
            }}>
              Why We Exist
            </h2>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              {ourPurpose.map(item => (
                <div
                  key={item.title}
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#86868b', fontSize: '1rem', lineHeight: '1.7' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Paradoxes */}
            <div style={{ marginTop: '4rem' }}>
              <h3 style={{ 
                fontSize: '1.8rem', 
                fontWeight: 300, 
                color: '#1d1d1f', 
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                The Paradoxes We Embrace
              </h3>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem'
              }}>
                {theParadoxes.map(item => (
                  <div
                    key={item.title}
                    style={{
                      padding: '2rem',
                      borderRadius: '20px',
                      background: '#fafafa',
                      border: '1px solid #e6e6e9',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                      {item.title}
                    </h4>
                    <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'beliefs' && (
          <section id="beliefs" style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              The 10 Things We Actually Believe
            </h2>
            <p style={{ 
              color: '#86868b', 
              fontSize: '1.2rem', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 3rem'
            }}>
              Not aspirational. Not performative. Just how we operate.
            </p>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              {theBeliefs.map((belief, index) => (
                <div
                  key={belief.title}
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9',
                    borderLeft: `4px solid ${belief.color}`
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{belief.icon}</span>
                    <span style={{ 
                      fontSize: '0.9rem',
                      color: belief.color,
                      fontWeight: 500,
                      background: `${belief.color}10`,
                      padding: '0.2rem 0.8rem',
                      borderRadius: '20px'
                    }}>
                      #{index + 1}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                    {belief.title}
                  </h3>
                  <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.7' }}>
                    {belief.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'manifesto' && (
          <section id="manifesto" style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              The PureLatency Manifesto
            </h2>
            <p style={{ 
              color: '#86868b', 
              fontSize: '1.2rem', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 3rem'
            }}>
              Short. Unfiltered. Actually followed.
            </p>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              {theManifesto.map(chapter => (
                <div
                  key={chapter.chapter}
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9'
                  }}
                >
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    marginBottom: '1.5rem', 
                    color: '#0066cc',
                    borderBottom: '1px solid #e6e6e9',
                    paddingBottom: '0.5rem'
                  }}>
                    {chapter.chapter}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {chapter.lines.map(line => (
                      <li key={line} style={{ 
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        color: '#86868b',
                        fontSize: '1rem',
                        lineHeight: '1.6'
                      }}>
                        <span style={{ color: '#0066cc', fontSize: '1.2rem' }}>•</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'practice' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 300, 
              color: '#1d1d1f', 
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Beliefs in Practice
            </h2>
            <p style={{ 
              color: '#86868b', 
              fontSize: '1.2rem', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 3rem'
            }}>
              How abstract ideas become daily habits
            </p>
            
            {/* Daily Practices */}
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {dailyPractices.map(practice => (
                <div
                  key={practice.title}
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    background: '#fafafa',
                    border: '1px solid #e6e6e9',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{practice.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                    {practice.title}
                  </h3>
                  <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {practice.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Real Stories */}
            <div style={{ 
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
                When Beliefs Became Real
              </h3>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem'
              }}>
                <div style={{ position: 'relative' }}>
                  <span style={{ fontSize: '3rem', color: '#0066cc', opacity: 0.2, position: 'absolute', top: '-20px', left: '-10px' }}>"</span>
                  <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '1rem' }}>
                    "We told a client their project wasn't ready to launch, even though they wanted to. They thanked us later. We'd do it again."
                  </p>
                  <div style={{ color: '#0066cc', fontWeight: 500 }}>— On Quality Over Speed</div>
                </div>
                <div style={{ position: 'relative' }}>
                  <span style={{ fontSize: '3rem', color: '#0066cc', opacity: 0.2, position: 'absolute', top: '-20px', left: '-10px' }}>"</span>
                  <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '1rem' }}>
                    "A junior dev caught a mistake I made. We celebrated it. Ego left, learning happened."
                  </p>
                  <div style={{ color: '#0066cc', fontWeight: 500 }}>— On No Ego</div>
                </div>
                <div style={{ position: 'relative' }}>
                  <span style={{ fontSize: '3rem', color: '#0066cc', opacity: 0.2, position: 'absolute', top: '-20px', left: '-10px' }}>"</span>
                  <p style={{ color: '#86868b', fontSize: '0.95rem', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '1rem' }}>
                    "We refunded $20k because we under-delivered. The client cried. We kept the friendship."
                  </p>
                  <div style={{ color: '#0066cc', fontWeight: 500 }}>— On Radical Honesty</div>
                </div>
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

      {/* Footer */}
      <footer
        style={{
          background: '#111',
          color: '#aaa',
          padding: '4rem 2rem',
          marginTop: '4rem'
        }}
      >
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
                Beliefs aren't just words. They're how we work.
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
            © 2026 PureLatency. Live your beliefs. Or don't. We're not the boss of you.
          </div>
        </div>
      </footer>
    </>
  );
}