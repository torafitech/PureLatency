import React from 'react';
import Link from 'next/link';
import Container from '../layout/ui/Container';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Applications', href: '/services/applications' },
        { label: 'Web Development', href: '/services/web-development' },
        { label: 'Data and AI', href: '/services/data-ai' },
        { label: 'Cloud and DevOps', href: '/services/cloud-devops' },
        { label: 'Infrastructure', href: '/services/infrastructure' },
      ]
    },
    {
      title: 'Industries',
      links: [
        { label: 'Enterprise', href: '/industries/enterprise' },
        { label: 'Government', href: '/industries/government' },
        { label: 'Telco and Space', href: '/industries/telco-space' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Purpose and Beliefs', href: '/about/purpose' },
        { label: 'Milestones', href: '/about/milestones' },
        { label: 'Partners', href: '/partners' },
        { label: 'Contact Us', href: '/contact' },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              Pure Latency
            </Link>
            <p className="text-gray-400 mb-4">
              Leading digital and technology services company in Singapore and Southeast Asia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h5 className="font-semibold mb-4">{section.title}</h5>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pure Latency. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;