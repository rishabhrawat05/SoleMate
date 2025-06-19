import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' }
  ];

  const footerLinks = [
    {
      title: 'Products',
      links: ['Running Shoes', 'Casual Sneakers', 'Sports Shoes', 'Lifestyle']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'News', 'Investors']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Size Guide', 'Returns', 'Contact']
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Zap className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">SoleMate</span>
            </motion.div>
            
            <p className="text-gray-300 text-lg">
              Crafting premium footwear that combines style, comfort, and performance for every step of your journey.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-xl font-semibold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href="#"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">hello@solemate.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  123 Shoe Street<br />
                  Fashion District, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2025 SoleMate. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;