'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Products',
      href: '/products',
      dropdown: [{ label: 'Starling Post', href: '/products/starling-post' }],
    },
    {
      label: 'Services',
      href: '/services',
      dropdown: [
        { label: 'Overview', href: '/services' },
        { label: 'Applications', href: '/services/applications' },
        { label: 'Web Development', href: '/services/web-development' },
        { label: 'Data and AI', href: '/services/data-ai' },
        { label: 'Cloud and DevOps', href: '/services/cloud-devops' },
        { label: 'Infrastructure', href: '/services/infrastructure' },
        { label: 'Quantum computer', href: '/services/quantum-computer' },
        { label: 'Fiber Optics', href: '/services/fiber-optics' },
      ],
    },
    {
      label: 'Industries',
      href: '/industries',
      dropdown: [
        { label: 'Enterprise', href: '/industries/enterprise' },
        { label: 'Government', href: '/industries/government' },
        { label: 'Telco and Space', href: '/industries/telco-space' },
      ],
    },
    {
      label: 'About Us',
      href: '/about',
      dropdown: [
        { label: 'Overview', href: '/about' },
        { label: 'Purpose and Beliefs', href: '/about/beliefs' },
        { label: 'Milestones', href: '/about/milestones' },
      ],
    },
    {
      label: 'Partners',
      href: '/partners',
      dropdown: [{ label: 'Overview', href: '/partners' }],
    },
  ];

  const socialMedia = [
    { name: 'Instagram', href: 'https://instagram.com/purelatency', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg', color: '#E4405F' },
    { name: 'Facebook', href: 'https://facebook.com/purelatency', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg', color: '#1877F2' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/purelatency', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg', color: '#0A66C2' },
  ];

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50,
    transition: 'all 0.3s',
    background: isScrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(8px)' : 'none',
    boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 2rem',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '80px',
  };

  const desktopNavStyle: React.CSSProperties = {
    display: isMobile ? 'none' : 'flex',
    alignItems: 'center',
    gap: '2rem',
  };

  const navLinkStyle = (active: boolean): React.CSSProperties => ({
    fontSize: '0.875rem',
    fontWeight: 500,
    color: active ? '#0066cc' : '#374151',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
  });

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    top: '100%',
    width: '224px',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    padding: '0.5rem 0',
    zIndex: 50,
  };

  const dropdownItemStyle = (active: boolean): React.CSSProperties => ({
    display: 'block',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    color: active ? '#0066cc' : '#374151',
    textDecoration: 'none',
    background: active ? '#f9fafb' : 'transparent',
  });

  const contactButtonStyle: React.CSSProperties = {
    background: '#0066cc',
    color: 'white',
    padding: '0.5rem 1.5rem',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.875rem',
    display: isMobile ? 'none' : 'inline-block',
  };

  const mobileMenuButtonStyle: React.CSSProperties = {
    display: isMobile ? 'block' : 'none',
    fontSize: '1.5rem',
    padding: '0.5rem',
    borderRadius: '8px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    color: '#374151',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.2)',
    backdropFilter: 'blur(4px)',
    zIndex: 40,
  };

  const mobileMenuPanelStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '300px',
    height: '100%',
    background: 'white',
    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
    zIndex: 50,
    overflowY: 'auto',
    animation: 'slideIn 0.3s ease-out forwards',
  };

  const mobileHeaderStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem',
    borderBottom: '1px solid #e6e6e9',
  };

  const mobileNavStyle: React.CSSProperties = {
    padding: '1.5rem',
  };

  const mobileNavItemStyle: React.CSSProperties = {
    borderBottom: '1px solid #e6e6e9',
    paddingBottom: '1rem',
    marginBottom: '1rem',
  };

  const mobileNavLinkStyle = (active: boolean): React.CSSProperties => ({
    display: 'block',
    fontWeight: 500,
    fontSize: '1.125rem',
    color: active ? '#0066cc' : '#1d1d1f',
    textDecoration: 'none',
    marginBottom: '0.5rem',
  });

  const mobileDropdownItemStyle = (active: boolean): React.CSSProperties => ({
    display: 'block',
    paddingLeft: '1rem',
    fontSize: '0.875rem',
    color: active ? '#0066cc' : '#86868b',
    textDecoration: 'none',
    marginBottom: '0.5rem',
  });

  const mobileContactButtonStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    background: '#0066cc',
    color: 'white',
    padding: '0.75rem 1rem',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 500,
    marginTop: '2rem',
  };

  const mobileSocialStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginTop: '2rem',
    padding: '0 1.5rem',
  };

  const mobileSocialImgStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    filter: 'brightness(0.8)',
    transition: 'filter 0.2s',
  };

  return (
    <>
      <nav style={navStyle}>
        <div style={containerStyle}>
          <div style={headerStyle}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src="/images/logo.png"
                alt="Pure Latency Logo"
                width={100}
                height={40}
                priority
                style={{
                  objectFit: 'contain',
                  filter: 'brightness(1.1)',
                  width: 'auto',
                  height: isMobile ? '40px' : '60px',
                }}
              />
            </Link>

            <div style={desktopNavStyle}>
              {navItems.map((item) => (
                <div
                  key={item.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href={item.href} style={navLinkStyle(pathname === item.href)}>
                    {item.label}
                    {item.dropdown && <i className="fas fa-chevron-down" style={{ fontSize: '0.75rem', marginLeft: '0.25rem' }} />}
                  </Link>
                  {item.dropdown && activeDropdown === item.label && (
                    <div style={dropdownStyle}>
                      {item.dropdown.map((drop) => (
                        <Link key={drop.label} href={drop.href} style={dropdownItemStyle(pathname === drop.href)}>
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Link href="/contact" style={contactButtonStyle}>Contact Us</Link>

            <button style={mobileMenuButtonStyle} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`} />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <>
            <div style={overlayStyle} onClick={() => setIsMobileMenuOpen(false)} />
            <div style={mobileMenuPanelStyle}>
              <div style={mobileHeaderStyle}>
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image src="/images/logo.png" alt="Logo" width={140} height={45} style={{ objectFit: 'contain' }} />
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>
                  <i className="fas fa-times" />
                </button>
              </div>

              <div style={mobileNavStyle}>
                {navItems.map((item) => (
                  <div key={item.label} style={mobileNavItemStyle}>
                    <Link href={item.href} style={mobileNavLinkStyle(pathname === item.href)} onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <div style={{ paddingLeft: '1rem' }}>
                        {item.dropdown.map((drop) => (
                          <Link key={drop.label} href={drop.href} style={mobileDropdownItemStyle(pathname === drop.href)} onClick={() => setIsMobileMenuOpen(false)}>
                            {drop.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ padding: '0 1.5rem' }}>
                <Link href="/contact" style={mobileContactButtonStyle} onClick={() => setIsMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </div>

              <div style={mobileSocialStyle}>
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex' }}
                    onMouseEnter={(e) => (e.currentTarget.firstChild as HTMLElement).style.filter = 'brightness(1)'}
                    onMouseLeave={(e) => (e.currentTarget.firstChild as HTMLElement).style.filter = 'brightness(0.8)'}
                  >
                    <img src={social.icon} alt={social.name} style={mobileSocialImgStyle} />
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </nav>
      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default Navbar;