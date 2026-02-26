'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const whatsappNumber = "+9676191370"; // Your WhatsApp number
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleWhatsAppChat = () => {
    const message = "Hello! I'm interested in PureLatency's services. Can you help me?";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  if (!isMounted) {
    return null; // Prevent hydration issues
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999
    }}>
      {/* Chat Popup */}
      {isOpen && (
        <div style={{
          marginBottom: '16px',
          width: '320px',
          backgroundColor: '#ffffff',
          border: '1px solid #e6e6e9',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#1d1d1f',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <MessageCircle size={20} color="#ffffff" />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: '#1d1d1f' }}>
                  PureLatency
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#86868b' }}>Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                color: '#86868b'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Message Bubble */}
          <div style={{
            backgroundColor: '#f5f5f7',
            borderRadius: '12px',
            padding: '12px',
            marginBottom: '16px'
          }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#1d1d1f' }}>
              Hi! 👋 How can we help you with your digital innovation needs?
            </p>
          </div>

          {/* Chat Button */}
          <button
            onClick={handleWhatsAppChat}
            style={{
              width: '100%',
              padding: '10px 16px',
              backgroundColor: '#1d1d1f',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000000'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1d1d1f'}
          >
            Start Chat on WhatsApp
          </button>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#1d1d1f',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000000'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1d1d1f'}
      >
        {isOpen ? (
          <X size={24} color="#ffffff" />
        ) : (
          <MessageCircle size={24} color="#ffffff" />
        )}
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <div style={{
          position: 'absolute',
          right: '70px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#1d1d1f',
          color: '#ffffff',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '14px',
          whiteSpace: 'nowrap'
        }}>
          Need help? Chat with us!
          <div style={{
            position: 'absolute',
            left: '100%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 0,
            height: 0,
            borderLeft: '8px solid #1d1d1f',
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent'
          }} />
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;