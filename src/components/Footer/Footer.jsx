import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primaryDark text-white mt-16 py-12" style={{ backgroundColor: '#1B5E20' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-5 pb-2 relative">
              Tropical Oasis
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '50px',
                height: '2px',
                backgroundColor: '#FFC107'
              }}></div>
            </h3>
            <p className="mb-4" style={{ color: '#C8E6C9' }}>
              Your digital companion for thriving plants. Track, nurture, and grow your green friends with ease.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaPinterest].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-secondary hover:text-text" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  fontSize: '18px'
                }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Quick Links",
              items: ["Dashboard", "My Plants", "Care Tasks", "Health Tracker", "Reminders"]
            },
            {
              title: "Resources",
              items: ["Plant Care Guides", "Tropical Plants Encyclopedia", "Seasonal Care Tips", "Community Forum", "Plant Identifier"]
            },
            {
              title: "Support",
              items: ["Help Center", "Contact Us", "FAQs", "Feedback", "Privacy Policy"]
            }
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-5 pb-2 relative">
                {section.title}
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '50px',
                  height: '2px',
                  backgroundColor: '#FFC107'
                }}></div>
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-secondary transition-colors" style={{ color: '#C8E6C9' }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 border-t text-center text-sm" style={{ borderColor: '#2E7D32', color: '#A5D6A7' }}>
          &copy; 2023 Tropical Oasis Plant Care Tracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

