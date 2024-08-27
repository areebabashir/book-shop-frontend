import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="py-8 mt-auto w-full" style={{ background: 'linear-gradient(to bottom right, #ccffff 0%, #ff66cc 65%)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faPhone} className="text-white mr-2" />
              <p className="text-gray-800">+1 (234) 567-890</p>
            </div>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-white mr-2" />
              <p className="text-gray-800">info@bookshop.com</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white mr-2" />
              <p className="text-gray-800">123 Book St, Booktown, BK 45678</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <a href="https://facebook.com" className="text-white mx-3" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} size="3x" />
            </a>
            <a href="https://twitter.com" className="text-white mx-3" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
            <a href="https://instagram.com" className="text-white mx-3" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a href="https://linkedin.com" className="text-white mx-3" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6">
          <p className="text-gray-800 text-sm">&copy; {new Date().getFullYear()} BookShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
