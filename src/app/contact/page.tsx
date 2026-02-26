'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ fullName: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
        <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Social Links - Improved responsive layout */}
          <div className="flex justify-center flex-wrap gap-6 md:gap-8 mb-12">
            {[
              { name: 'LinkedIn', icon: 'fab fa-linkedin', href: '#' },
              { name: 'Instagram', icon: 'fab fa-instagram', href: '#' },
              { name: 'Twitter', icon: 'fab fa-twitter', href: '#' },
              { name: 'GitHub', icon: 'fab fa-github', href: '#' }
            ].map(item => (
              <a
                key={item.name}
                href={item.href}
                className="group flex flex-col items-center gap-2 text-gray-500 hover:text-[#0066cc] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`${item.icon} text-2xl md:text-3xl group-hover:scale-110 transition-transform`}></i>
                <span className="text-xs md:text-sm font-medium">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Breadcrumb - Improved */}
          <nav className="flex justify-center md:justify-start items-center gap-2 text-sm mb-8 text-gray-500">
            <Link href="/" className="hover:text-[#0066cc] transition-colors">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#0066cc] font-medium">Contact</span>
          </nav>

          {/* Header Section */}
          <div className="text-center md:text-left mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
              Contact us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="fullName" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Full name <span className="text-[#0066cc]">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 transition-all outline-none text-base"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address <span className="text-[#0066cc]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 transition-all outline-none text-base"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Message <span className="text-[#0066cc]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 transition-all outline-none text-base resize-vertical"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-600 text-sm flex items-center gap-2">
                    <i className="fas fa-check-circle"></i>
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm flex items-center gap-2">
                    <i className="fas fa-exclamation-circle"></i>
                    Something went wrong. Please try again later.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full sm:w-auto px-8 py-3 rounded-full font-medium text-white
                    transition-all duration-300 transform hover:scale-105
                    ${isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#0066cc] hover:bg-[#004999] shadow-lg hover:shadow-xl'
                    }
                  `}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
                
                <Link
                  href="/"
                  className="text-gray-500 hover:text-[#0066cc] transition-colors text-sm sm:text-base flex items-center gap-2"
                >
                  <i className="fas fa-arrow-left"></i>
                  Back to Home
                </Link>
              </div>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
            {/* Email Card */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-[#0066cc]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-envelope text-[#0066cc] text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a 
                href="mailto:hello@purelatency.com" 
                className="text-[#0066cc] hover:underline break-all"
              >
                hello@purelatency.com
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-[#0066cc]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-map-marker-alt text-[#0066cc] text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">
                Hyderabad, India
              </p>
            </div>

            {/* Response Time Card */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all group sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 bg-[#0066cc]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-clock text-[#0066cc] text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-600">
                Within 24 hours
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}