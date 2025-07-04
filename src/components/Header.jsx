import React, { useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import LogoVayuguard from '../images/LogoVayuguard_removebg.png';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white dark:bg-[#070419] backdrop-blur-sm transition-colors duration-300 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src={LogoVayuguard}
              alt="Vayugard Logo"
              className="h-[50px] w-auto" 
            />
            <span style={{ color: '#076499' }} className="text-xl font-semibold">VAYUGARD</span>
          </Link>
          <div className="flex items-center">
            <nav className="hidden lg:block mr-4">
              <ul className="flex space-x-6">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About Us' },
                  { to: '/services', label: 'Services' },
                  { to: '/products', label: 'Products' },
                  { to: '/contact', label: 'Contact Us' },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className={`relative inline-block font-medium transition-colors ${
                        location.pathname === to
                          ? 'text-[#076499] after:content-[""] after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-[2px] after:bg-[#076499]'
                          : 'text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors mr-4 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden mt-4`}>
          <ul className="space-y-2">
            <li><Link to="/about" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Services</Link></li>
            <li><Link to="/products" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Products</Link></li>
            <li><Link to="/contact" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

