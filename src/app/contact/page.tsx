"use client";

import Navbar from "@/components/layout/Navbar";
import { useState } from "react";

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

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section className="relative w-full min-h-screen text-gray-900">

        {/* Social Media Top Right */}
        <div className="absolute top-24 right-8 flex gap-6 text-sm font-semibold">

          <a
            href="https://instagram.com/purelatency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700 transition"
          >
            Instagram
          </a>

          <a
            href="https://x.com/purelatency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:text-sky-600 transition"
          >
            Twitter
          </a>

          <a
            href="https://facebook.com/purelatency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition"
          >
            Facebook
          </a>

        </div>

        <div className="max-w-7xl mx-auto px-6 py-20">

          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>

          <p className="text-lg text-gray-600 max-w-4xl mb-16">
            We endeavour to respond to your email as soon as possible. When sending
            an enquiry, please fill your contact details and indicate the request
            purpose for our follow-up.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT */}
            <div className="space-y-10">
              <Input
                label="Full name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />

              <Input
                label="Organisation (optional)"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
              />

              <div>
                <label className="block text-sm tracking-widest mb-2">
                  Enquiry Category
                </label>

                <select
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  className="w-full border-b border-gray-400 focus:outline-none py-2"
                >
                  <option>Collaboration</option>
                  <option>Feedback</option>
                  <option>Others</option>
                </select>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-10">
              <Input
                label="Email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                label="Designation (optional)"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
              />

              <div>
                <label className="block text-sm tracking-widest mb-2">
                  Country
                </label>

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border-b border-gray-400 focus:outline-none py-2"
                >
                  {countries.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* TEXTAREA */}
            <div className="md:col-span-2 mt-8">
              <label className="block text-sm tracking-widest mb-3">
                Tell us more about your enquiry
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full border border-gray-400 p-4 focus:outline-none"
              />
            </div>

            {/* BUTTON */}
            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                className="px-10 py-3 bg-black text-white font-semibold hover:opacity-90 transition"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </section>
    </>
  );
}

/* Reusable Input Component */
function Input({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: any;
}) {
  return (
    <div>
      <label className="block text-sm tracking-widest mb-2">
        {label}
      </label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border-b border-gray-400 focus:outline-none py-2"
      />
    </div>
  );
}