'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Container from '../layout/ui/Container';
import Button from '../layout/ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Products',
      href: '/products',
      dropdown: [
        { label: 'Starling Post', href: '/products/starling-post' },
      ],
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
      dropdown: [
        { label: 'Overview', href: '/partners' },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Pure Latency Logo"
              width={100}
              height={40}
              priority
              style={{
                objectFit: "contain",
                filter: "brightness(1.1)",
                width: 'auto',
                height: 'clamp(40px, 6vw, 60px)'
              }}
              className="hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop navigation - hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <i className="fas fa-chevron-down ml-1 text-xs" />
                  )}
                </Link>

                {/* Dropdown menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute left-0 top-full w-56 bg-white rounded-lg shadow-lg py-2 animate-fade-in z-50">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.label}
                        href={dropItem.href}
                        className={`block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary ${
                          pathname === dropItem.href
                            ? 'text-primary bg-gray-50'
                            : 'text-gray-700'
                        }`}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop contact button */}
          <Button href="/contact" variant="primary" className="hidden lg:block">
            Contact Us
          </Button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-2xl p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`} />
          </button>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile menu panel */}
            <div className="fixed top-0 right-0 w-[300px] h-full bg-white shadow-2xl z-50 lg:hidden overflow-y-auto animate-slide-in">
              <div className="p-6">
                {/* Mobile header */}
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                      src="/images/logo.png"
                      alt="Pure Latency Logo"
                      width={140}
                      height={45}
                      style={{ objectFit: "contain" }}
                    />
                  </Link>
                  <button
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-times text-2xl" />
                  </button>
                </div>

                {/* Mobile navigation */}
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <div key={item.label} className="border-b border-gray-100 pb-4">
                      <Link
                        href={item.href}
                        className={`block font-medium text-lg mb-2 ${
                          pathname === item.href ? 'text-primary' : 'text-gray-700'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      
                      {item.dropdown && (
                        <div className="pl-4 space-y-2">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.label}
                              href={dropItem.href}
                              className={`block text-sm ${
                                pathname === dropItem.href
                                  ? 'text-primary'
                                  : 'text-gray-600 hover:text-primary'
                              }`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile contact button */}
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Mobile social links */}
                <div className="mt-8 flex justify-center space-x-6">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <i className="fab fa-linkedin text-xl" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <i className="fab fa-twitter text-xl" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <i className="fab fa-github text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </Container>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;