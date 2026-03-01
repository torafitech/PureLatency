"use client";

import Navbar from "@/components/layout/Navbar";
import { useState } from "react";

import { collection, addDoc } from "firebase/firestore";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { db } from "@/firebase";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    organisation: "",
    email: "",
    designation: "",
    enquiry: "Collaboration",
    country: "India",
    message: "",
  });
  
  const [phoneValue, setPhoneValue] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const countries = [
    "Afghanistan","Albania","Algeria","Argentina","Australia","Austria","Bangladesh",
    "Belgium","Brazil","Canada","Chile","China","Colombia","Denmark","Egypt","Finland",
    "France","Germany","Greece","Hong Kong","Hungary","India","Indonesia","Ireland",
    "Israel","Italy","Japan","Kenya","Malaysia","Mexico","Netherlands","New Zealand",
    "Nigeria","Norway","Pakistan","Philippines","Poland","Portugal","Qatar",
    "Romania","Russia","Saudi Arabia","Singapore","South Africa","South Korea",
    "Spain","Sri Lanka","Sweden","Switzerland","Thailand","Turkey","UAE",
    "UK","USA","Vietnam"
  ];

  // Social media links (purelatency@gmail.com accounts)
  const socialMedia = [
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/purelatency',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg',
      color: '#E4405F'
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/purelatency',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg',
      color: '#1877F2'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/purelatency',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg',
      color: '#0A66C2'
    }
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      if (!phoneValue) {
        throw new Error('Phone number is required');
      }

      const submissionData = {
        ...formData,
        phoneNumber: phoneValue,
        submittedAt: new Date().toISOString(),
        status: 'new',
        userAgent: navigator.userAgent,
        timestamp: new Date().getTime()
      };

      const docRef = await addDoc(collection(db, 'contacts'), submissionData);
      
      console.log('Document written with ID: ', docRef.id);
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your enquiry! We\'ll get back to you soon.'
      });

      setFormData({
        fullName: "",
        organisation: "",
        email: "",
        designation: "",
        enquiry: "Collaboration",
        country: "India",
        message: "",
      });
      setPhoneValue('');

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Navbar – responsive, with logo properly sized */}
      <Navbar />

      <section className="relative w-full min-h-screen text-gray-900 bg-white">
        {/* Social Media Icons – mobile-friendly: larger touch targets, stacked on small screens */}
        <div className="absolute top-36 right-2 sm:right-8 flex flex-col sm:flex-row gap-3 sm:gap-6 items-end sm:items-center z-50">
          {socialMedia.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition p-3 sm:p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md" // touch-friendly padding
              aria-label={social.name}
            >
              <img 
                src={social.icon}
                alt=""
                className="w-6 h-6 sm:w-5 sm:h-5"
                // Original colours (no filter)
              />
            </a>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-20 pb-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">Contact Us</h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mb-12 sm:mb-16">
            We endeavour to respond to your email as soon as possible. When sending
            an enquiry, please fill your contact details and indicate the request
            purpose for our follow-up.
          </p>

          {submitStatus.type && (
            <div className={`mb-6 sm:mb-8 p-4 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* LEFT COLUMN */}
            <div className="space-y-6 sm:space-y-10">
              <Input
                label="Full name *"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

              <Input
                label="Organisation (optional)"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
              />

              <div>
                <label className="block text-sm tracking-widest mb-2">
                  Enquiry Category *
                </label>
                <select
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  className="w-full border-b border-gray-400 focus:outline-none py-3 sm:py-2 text-base"
                  required
                >
                  <option>Collaboration</option>
                  <option>Feedback</option>
                  <option>Support</option>
                  <option>Sales</option>
                  <option>Others</option>
                </select>
              </div>

              <div>
                <label className="block text-sm tracking-widest mb-2">
                  Phone Number *
                </label>
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={phoneValue}
                  onChange={(value: string | undefined) => setPhoneValue(value || '')}
                  className="w-full border-b border-gray-400 focus:outline-none py-3 sm:py-2 text-base"
                  required
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6 sm:space-y-10">
              <Input
                label="Email address *"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                label="Designation (optional)"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
              />

              <div>
                <label className="block text-sm tracking-widest mb-2">
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border-b border-gray-400 focus:outline-none py-3 sm:py-2 text-base"
                  required
                >
                  {countries.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* FULL WIDTH TEXTAREA */}
            <div className="md:col-span-2 mt-4 sm:mt-8">
              <label className="block text-sm tracking-widest mb-3">
                Tell us more about your enquiry *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full border border-gray-400 p-4 focus:outline-none text-base"
                required
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="md:col-span-2 mt-4 sm:mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-3 bg-black text-white font-semibold hover:opacity-90 transition rounded-md text-base ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
              <p className="text-xs text-gray-500 mt-2">* Required fields</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

/* Reusable Input Component with mobile-friendly touch size */
function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: any;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm tracking-widest mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border-b border-gray-400 focus:outline-none py-3 sm:py-2 text-base"
        required={required}
      />
    </div>
  );
}