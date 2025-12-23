
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flame } from 'lucide-react';
import { NAV_ITEMS } from '../constants.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors glow-effect">
              <Flame className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold tracking-tighter">
              IGNITE<span className="text-orange-600 group-hover:text-orange-500 transition-colors">24x7</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-sm font-medium text-gray-300 hover:text-white hover:underline transition-all underline-offset-4"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 bg-black/95' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 border-t border-white/10 mt-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              to="/#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-orange-600 text-white px-5 py-3 rounded-md text-base font-bold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
