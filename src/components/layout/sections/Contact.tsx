'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Handle form submission logic here
  };

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge mb-4">Contact Us</span>
            <h2 className="mb-6">Get in touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              If you're ready to make extraordinary happen, get in touch today.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-phone text-primary"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Call us</h4>
                  <a href="tel:+6565568000" className="text-primary hover:underline">
                    6556 8000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email us</h4>
                  <a href="mailto:reachus@ncs.com.sg" className="text-primary hover:underline">
                    reachus@ncs.com.sg
                  </a>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                We endeavour to respond to your email as soon as possible. When sending in an enquiry, please fill your contact details and indicate the request purpose for our follow-up.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check text-3xl text-green-600"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
                <p className="text-gray-600">
                  Thank you for your enquiry! We'll get back to you as soon we can.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-2">
                    Request Purpose
                  </label>
                  <select
                    id="purpose"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a purpose</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;