import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import LogoVayuguard from '../images/LogoVayuguard.jpeg';

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/">
              <img
                src={theme === 'light' ? LogoVayuguard : LogoVayuguard}
                alt="Vayugurad Engineers Logo"
                className="h-[250px] w-auto mb-4"
              />
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-500 dark:hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 dark:hover:text-blue-400">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 dark:hover:text-blue-400">Services</Link></li>
              <li><Link to="/products" className="hover:text-blue-500 dark:hover:text-blue-400">Products</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p>VAYUGARD AIRCONDITIONING PVT. LTD</p>
            <p>Regd Off: H.No 68, Khasra No 177, </p>
            <p>Kushak Hiranki, North West,</p>
            <p>Delhi-110036</p>
            <p>Phone: +91-8744050073</p>
            <p>Email: sainipawan652@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Vayuguard Airconditioning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

