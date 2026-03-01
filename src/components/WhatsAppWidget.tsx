'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;
    // Replace with your WhatsApp number (without +)
    const phoneNumber = '91 9676191370'; // Example: India number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setMessage('')
    setIsOpen(false);
  };

  if (!isMounted) return null;

  const widgetContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-[99999] flex flex-col items-end gap-4 pointer-events-auto"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-green-600 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <MessageCircle className="text-white" size={24} />
                <span className="text-white font-semibold text-lg">Chat with us</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              <p className="text-gray-600 mb-3 text-sm">
                👋 Hi! Have a question about our digital and technology services? Send us a message and we'll reply shortly.
              </p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-sm"
              />
            </div>

            {/* Footer */}
            <div className="p-4 pt-0 flex justify-end">
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white px-5 py-2.5 rounded-full flex items-center gap-2 transition-colors text-sm font-medium shadow-md"
              >
                <Send size={16} />
                Send via WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label="Toggle WhatsApp chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </motion.div>
  );

  return createPortal(widgetContent, document.body);
};

export default WhatsAppWidget;