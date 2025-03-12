import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 text-black py-12" aria-label="Footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-700">
              We are a leading e-commerce platform dedicated to providing the best shopping experience.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-700 hover:text-black transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-700 hover:text-black transition-colors">Contact Us</a></li>
              <li><a href="/privacy-policy" className="text-gray-700 hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-700 hover:text-black transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Email: support@ecommerce.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Ecommerce St, City, Country</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md text-black border-2 border-black"
                aria-label="Email for newsletter subscription"
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebook className="text-black hover:text-gray-400 transition-colors" size={24} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter className="text-black hover:text-gray-400 transition-colors" size={24} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram className="text-black hover:text-gray-400 transition-colors" size={24} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <FaLinkedin className="text-black hover:text-gray-400 transition-colors" size={24} />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Ecommerce Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;