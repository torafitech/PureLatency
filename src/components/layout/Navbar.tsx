'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
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
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const isActive = (href: string) => pathname === href;
  const isParentActive = (item: (typeof navItems)[number]) => {
    if (pathname === item.href) return true;
    if (item.dropdown) {
      return item.dropdown.some((drop) => pathname === drop.href);
    }
    return false;
  };

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
        // { label: 'Applications', href: '/services/applications' },
        { label: 'Web Development', href: '/services/web-development' },
        { label: 'Data and AI', href: '/services/data-ai' },
        { label: 'Cloud and DevOps', href: '/services/cloud-devops' },
        { label: 'Infrastructure', href: '/services/infrastructure' },
        { label: 'Quantum Compute', href: '/services/quantum-compute' },
        { label: 'Fiber Optics', href: '/services/fiber-optics' },
      ],
    },
    {
      label: 'Industries',
      href: '/industries',
      dropdown: [
        { label: 'Enterprise', href: '/industries/enterprise' },
        // { label: 'Government', href: '/industries/government' },
        { label: 'Telco and Space', href: '/industries/telco-space' },
      ],
    },
    {
      label: 'About Us',
      href: '/about',
      dropdown: [
        { label: 'Overview', href: '/about' },
        { label: 'Purpose and Beliefs', href: '/about/beliefs' },
        // { label: 'Milestones', href: '/about/milestones' },
      ],
    },
  ];

  const socialMedia = [
    { name: 'Instagram', href: 'https://instagram.com/purelatency', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg' },
    { name: 'Facebook', href: 'https://facebook.com/purelatency', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg' },
    { name: 'Twitter', href: 'https://twitter.com/purelatency', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg' },
  ];

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
        <div className={styles.container}>
          <div className={styles.header}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <Image
                src="/images/logo.png"
                alt="Pure Latency Logo"
                width={80}
                height={32}
                priority
                className={styles.logoImage}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className={styles.desktopNav}>
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={styles.navItem}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${
                      isParentActive(item) ? styles.active : ''
                    }`}
                  >
                    {item.label}
                  </Link>

                  {item.dropdown && activeDropdown === item.label && (
                    <div className={styles.dropdown}>
                      {item.dropdown.map((drop) => (
                        <Link
                          key={drop.label}
                          href={drop.href}
                          className={`${styles.dropdownItem} ${
                            isActive(drop.href) ? styles.active : ''
                          }`}
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Contact Button - reduced height */}
            <Link
              href="/contact"
              className={styles.desktopContactButton}
              style={{ height: '32px', padding: '4px 12px', lineHeight: '1.2' }}
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={styles.mobileMenuButton}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Panel */}
      {isMobileMenuOpen && (
        <>
          <div className={styles.overlay} onClick={() => setIsMobileMenuOpen(false)} />
          <div className={styles.mobileMenuPanel}>
            <div className={styles.mobileHeader}>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="/images/logo.png"
                  alt="Pure Latency Logo"
                  width={60}
                  height={24}
                  className={styles.logoImage}
                />
              </Link>
              <button
                className={styles.mobileCloseButton}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className={styles.mobileNav}>
              {navItems.map((item) => (
                <div key={item.label} className={styles.mobileNavItem}>
                  <Link
                    href={item.href}
                    className={`${styles.mobileNavLink} ${
                      isParentActive(item) ? styles.active : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown?.map((drop) => (
                    <Link
                      key={drop.label}
                      href={drop.href}
                      className={`${styles.mobileDropdownItem} ${
                        isActive(drop.href) ? styles.active : ''
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {drop.label}
                    </Link>
                  ))}
                </div>
              ))}

              {/* Mobile Contact Button - reduced height */}
              <Link
                href="/contact"
                className={styles.mobileContactButton}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ height: '32px', padding: '4px 12px', lineHeight: '1.2' }}
              >
                Contact Us
              </Link>

              <div className={styles.mobileSocial}>
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className={styles.mobileSocialIcon}
                    />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;