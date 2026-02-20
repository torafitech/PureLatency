'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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

  const navItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Products', 
      href: '/products',
      dropdown: [
        { label: 'Starting Post', href: '/products/starting-post' }
      ]
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
      ]
    },
    { 
      label: 'Industries', 
      href: '/industries',
      dropdown: [
        { label: 'Enterprise', href: '/industries/enterprise' },
        { label: 'Government', href: '/industries/government' },
        { label: 'Telco and Space', href: '/industries/telco-space' },
      ]
    },
    { 
      label: 'About Us', 
      href: '/about',
      dropdown: [
        { label: 'Overview', href: '/about' },
        { label: 'Purpose and Beliefs', href: '/about/purpose' },
        { label: 'Milestones', href: '/about/milestones' },
      ]
    },
    { 
      label: 'Partners', 
      href: '/partners',
      dropdown: [
        { label: 'Overview', href: '/partners' },
      ]
    },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            NCS
          </Link>

          {/* Desktop Navigation */}
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
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                  {item.dropdown && <i className="fas fa-chevron-down ml-1 text-xs"></i>}
                </Link>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 animate-fade-in">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.label}
                        href={dropItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <Button href="/contact" variant="primary" className="hidden lg:block">
            Contact Us
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-slide-up">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <Link
                  href={item.href}
                  className="block text-gray-700 hover:text-primary font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.label}
                        href={dropItem.href}
                        className="block text-sm text-gray-600 hover:text-primary"
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
        )}
      </Container>
    </nav>
  );
};

export default Navbar;