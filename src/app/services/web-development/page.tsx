import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

export default function WebDevelopmentPage() {
  const technologies = [
    {
      category: 'Frontend',
      icon: '🎨',
      items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular', 'Svelte', 'Tailwind CSS', 'Framer Motion']
    },
    {
      category: 'Backend',
      icon: '⚙️',
      items: ['Node.js', 'Python', 'Go', 'Ruby on Rails', 'PHP', 'Java', '.NET Core', 'GraphQL']
    },
    {
      category: 'Database',
      icon: '🗄️',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB', 'Firebase', 'Supabase']
    },
    {
      category: 'DevOps',
      icon: '🚀',
      items: ['Docker', 'Kubernetes', 'AWS', 'Vercel', 'Netlify', 'GitHub Actions', 'Terraform', 'CI/CD']
    }
  ];

  const features = [
    {
      title: 'Performance Optimized',
      desc: 'Lightning-fast load times and smooth interactions',
      icon: '⚡',
      metric: '< 1s load time'
    },
    {
      title: 'Mobile Responsive',
      desc: 'Flawless experience on every device',
      icon: '📱',
      metric: '100% responsive'
    },
    {
      title: 'SEO Friendly',
      desc: 'Built with search engines in mind',
      icon: '🔍',
      metric: 'Top rankings'
    },
    {
      title: 'Accessible',
      desc: 'WCAG 2.1 compliant for all users',
      icon: '♿',
      metric: 'AAA standard'
    }
  ];

  const stats = [
    { number: '50+', label: 'Websites Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '5+', label: 'Years Experience' }
  ];

  const process = [
    { step: '01', title: 'Discovery', desc: 'Understanding your vision and requirements' },
    { step: '02', title: 'Design', desc: 'Creating intuitive and beautiful interfaces' },
    { step: '03', title: 'Development', desc: 'Building with modern tech stack' },
    { step: '04', title: 'Launch', desc: 'Deploying with zero downtime' }
  ];

  const expertise = [
    'E-commerce Platforms',
    'SaaS Applications',
    'Corporate Websites',
    'Web Portals',
    'API Development',
    'Progressive Web Apps',
    'Real-time Applications',
    'Content Management Systems'
  ];

  return (
    <>
      <Navbar />

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem 4rem' }}>
        {/* Social Media - Lower Top Right */}
        <section
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '2rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '22px',
              fontSize: '0.95rem',
              fontWeight: 500
            }}
          >
            <a
              href="https://linkedin.com/company/purelatency"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0A66C2', textDecoration: 'none' }}
            >
              LinkedIn
            </a>

            <a
              href="https://instagram.com/purelatency"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#E4405F', textDecoration: 'none' }}
            >
              Instagram
            </a>

            <a
              href="https://twitter.com/purelatency"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1DA1F2', textDecoration: 'none' }}
            >
              Twitter
            </a>

            <a
              href="https://github.com/purelatency"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#111', textDecoration: 'none' }}
            >
              GitHub
            </a>
          </div>
        </section>

        {/* Breadcrumb */}
        <div style={{ color: '#86868b', marginBottom: '2rem', fontSize: '0.9rem' }}>
          <Link href="/" style={{ color: '#86868b', textDecoration: 'none' }}>Home</Link> / 
          <Link href="/services" style={{ color: '#86868b', textDecoration: 'none' }}> Services</Link> / 
          <span style={{ color: '#1d1d1f' }}> Web Development</span>
        </div>

        {/* Hero Section */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌐</div>
            <h1 style={{ fontSize: '3rem', fontWeight: 300, color: '#1d1d1f', marginBottom: '1rem' }}>
              Web Development
            </h1>
            <p style={{ color: '#86868b', fontSize: '1.2rem', lineHeight: '1.6' }}>
              We build modern, performant, and scalable web applications using 
              cutting-edge technologies. From simple websites to complex enterprise platforms, 
              we deliver digital experiences that engage and convert.
            </p>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #f5f5f7 0%, #e6e6e9 100%)',
            borderRadius: '24px',
            padding: '2rem',
            textAlign: 'center',
            border: '1px solid #e6e6e9'
          }}>
            <span style={{ fontSize: '5rem', display: 'block', marginBottom: '1rem' }}>⚡</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 300, marginBottom: '0.5rem' }}>Next-Gen Web</h3>
            <p style={{ color: '#86868b' }}>Built with the latest technologies</p>
          </div>
        </div>

        {/* Stats Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          padding: '2rem',
          backgroundColor: '#f5f5f7',
          borderRadius: '16px',
          marginBottom: '4rem'
        }}>
          {stats.map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 300, color: '#0066cc' }}>{stat.number}</div>
              <div style={{ color: '#86868b', fontSize: '0.85rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 300, color: '#1d1d1f', marginBottom: '2rem' }}>
            Why Choose Our Web Development
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem'
          }}>
            {features.map(feature => (
              <div key={feature.title} style={{ 
                padding: '1.5rem',
                border: '1px solid #e6e6e9',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>{feature.icon}</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', color: '#1d1d1f' }}>{feature.title}</h3>
                <p style={{ color: '#86868b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{feature.desc}</p>
                <span style={{ fontSize: '0.8rem', color: '#0066cc', fontWeight: 500 }}>{feature.metric}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 300, color: '#1d1d1f', marginBottom: '2rem' }}>
            Our Technology Stack
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {technologies.map(category => (
              <div key={category.category} style={{
                padding: '1.5rem',
                background: '#fafafa',
                borderRadius: '12px',
                border: '1px solid #e6e6e9'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 500 }}>{category.category}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {category.items.map(item => (
                    <span key={item} style={{ 
                      color: '#86868b',
                      fontSize: '0.9rem',
                      padding: '0.2rem 0'
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 300, color: '#1d1d1f', marginBottom: '2rem' }}>
            What We Build
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem'
          }}>
            {expertise.map(item => (
              <div key={item} style={{
                padding: '1rem',
                border: '1px solid #e6e6e9',
                borderRadius: '8px',
                textAlign: 'center',
                background: '#fafafa'
              }}>
                <span style={{ color: '#0066cc', fontSize: '1rem', marginRight: '0.3rem' }}>✓</span>
                <span style={{ color: '#1d1d1f', fontSize: '0.95rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 300, color: '#1d1d1f', marginBottom: '2rem' }}>
            Our Development Process
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {process.map(item => (
              <div key={item.step} style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '2rem', 
                  fontWeight: 300, 
                  color: '#0066cc',
                  marginBottom: '1rem'
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#86868b', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Gradient Contact Section - NO EVENT HANDLERS */}
        <section
          style={{
            textAlign: 'center',
            padding: '120px 20px',
            background: `
              radial-gradient(circle at 10% 20%, rgba(122,60,255,0.8) 0%, transparent 50%),
              radial-gradient(circle at 90% 0%, rgba(255,46,136,0.8) 0%, transparent 50%),
              linear-gradient(180deg, #0b1c48 0%, #2a1e5c 100%)
            `,
            color: '#ffffff',
            borderRadius: '24px',
            marginBottom: '2rem'
          }}
        >
          <h2 style={{ fontSize: '3.5rem', marginBottom: '25px', fontWeight: 400 }}>
            contact us
          </h2>

          <p style={{ fontSize: '1.3rem', opacity: 0.9, marginBottom: '50px', maxWidth: '700px', margin: '0 auto 50px' }}>
            If you're ready to make extraordinary happen, get in touch today.
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
              background: 'rgba(255,255,255,0.1)'
            }}
          >
            contact us
          </Link>
        </section>

        {/* Back to Services */}
        <div style={{ 
          borderTop: '1px solid #e6e6e9',
          paddingTop: '2rem',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <Link 
            href="/services" 
            style={{ 
              color: '#86868b', 
              textDecoration: 'none', 
              fontSize: '0.9rem',
              display: 'inline-block'
            }}
          >
            ← Back to Services
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#111',
          color: '#aaa',
          padding: '3rem 2rem',
          textAlign: 'center',
          fontSize: '0.9rem'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 300, color: '#fff' }}>PureLatency</span>
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <Link href="/about" style={{ color: '#aaa', textDecoration: 'none' }}>About</Link>
            <Link href="/services" style={{ color: '#aaa', textDecoration: 'none' }}>Services</Link>
            <Link href="/products" style={{ color: '#aaa', textDecoration: 'none' }}>Products</Link>
            <Link href="/industries" style={{ color: '#aaa', textDecoration: 'none' }}>Industries</Link>
            <Link href="/partners" style={{ color: '#aaa', textDecoration: 'none' }}>Partners</Link>
            <Link href="/contact" style={{ color: '#aaa', textDecoration: 'none' }}>Contact</Link>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ color: '#666' }}>San Francisco, CA · hello@purelatency.com</p>
          </div>
          <div style={{ borderTop: '1px solid #333', paddingTop: '2rem' }}>
            © 2026 PureLatency. All rights reserved. Crafted with precision in San Francisco.
          </div>
        </div>
      </footer>
    </>
  );
}