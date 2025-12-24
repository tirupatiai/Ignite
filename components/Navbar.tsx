
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flame, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on navigation
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      window.clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small buffer to prevent accidental closes
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
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
          <div className="hidden md:flex items-center space-x-8 h-full">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.label} 
                className="relative h-full flex items-center"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={() => item.children && handleMouseLeave()}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 text-sm font-medium transition-all py-2 ${activeDropdown === item.label ? 'text-orange-500' : 'text-gray-300 hover:text-white'}`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown Container */}
                {item.children && (
                  <div 
                    className={`absolute top-full left-0 w-64 pt-2 transition-all duration-300 transform origin-top ${activeDropdown === item.label ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                  >
                    <div className="glass-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-[#0f0f11] backdrop-blur-2xl py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-orange-600/10 transition-all border-l-2 border-transparent hover:border-orange-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/#contact"
              className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-orange-600/20"
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
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen bg-black/95' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 border-t border-white/10 mt-4 h-screen overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-white/5 last:border-0">
              <Link
                to={item.path}
                className="flex justify-between items-center px-3 py-4 text-base font-bold text-gray-200"
                onClick={() => !item.children && setIsOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-6 pb-4 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-3 text-sm text-gray-400 hover:text-orange-500"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-6">
            <Link
              to="/#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-orange-600 text-white px-5 py-4 rounded-xl text-base font-black shadow-lg"
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
