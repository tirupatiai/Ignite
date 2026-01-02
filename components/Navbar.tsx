
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowLeft } from 'lucide-react';
import { NAV_ITEMS } from '../constants.tsx';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Pages that should have a simplified "Back to Home" navigation
  const isSpecializedPage = ['/software', '/academy', '/marketing', '/hr'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${scrolled ? 'glass-nav py-3 border-b border-slate-100 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo size="md" />
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            {isSpecializedPage ? (
              <Link
                to="/"
                className="group flex items-center gap-2 text-[13px] font-black text-slate-900 uppercase tracking-widest hover:text-orange-600 transition-all"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            ) : (
              <>
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="group relative">
                    <Link
                      to={item.path}
                      className="text-[13px] font-bold text-slate-600 hover:text-orange-600 uppercase tracking-widest transition-colors flex items-center gap-1.5"
                    >
                      {item.label}
                      {item.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                    </Link>
                    {item.children && (
                      <div className="absolute top-full -left-4 w-56 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                        <div className="bg-white border border-slate-100 rounded-xl shadow-2xl overflow-hidden py-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.path}
                              className="block px-6 py-3 text-[12px] font-bold text-slate-500 hover:text-orange-600 hover:bg-slate-50 transition-all uppercase tracking-wider"
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
                  className="bg-[#0F172A] hover:bg-orange-600 text-white px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all"
                >
                  Get In Touch
                </Link>
              </>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-900">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen border-b border-slate-100 shadow-xl' : 'max-h-0'}`}>
        <div className="p-8 space-y-6">
          {isSpecializedPage ? (
            <Link to="/" className="flex items-center gap-2 text-xl font-black text-slate-900">
              <ArrowLeft size={20} /> HOME
            </Link>
          ) : (
            NAV_ITEMS.map((item) => (
              <Link key={item.label} to={item.path} className="block text-xl font-black text-slate-900">
                {item.label}
              </Link>
            ))
          )}
          <Link to="/#contact" className="block w-full text-center bg-orange-600 text-white py-4 rounded-xl font-black">
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
