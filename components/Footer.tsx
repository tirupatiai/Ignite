
import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Linkedin, Twitter, Github, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                <Flame className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tighter">
                IGNITE<span className="text-orange-600">24x7</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              We ignite business potential through integrated software development, 
              strategic recruitment, talent development, and digital excellence. 
              Available 24x7 to push your boundaries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-orange-600/20 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-orange-600/20 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-orange-600/20 transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/software" className="text-gray-400 hover:text-white transition-colors">Software Dev</Link></li>
              <li><Link to="/academy" className="text-gray-400 hover:text-white transition-colors">Ignite Academy</Link></li>
              <li><Link to="/marketing" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link to="/hr" className="text-gray-400 hover:text-white transition-colors">HR Solutions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={18} className="mt-1 text-orange-600 shrink-0" />
                <span>Tiruchanur Tirupati, Andhra Pradesh India 517503</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} className="text-orange-600 shrink-0" />
                <span>info@ignite24x7.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} className="text-orange-600 shrink-0" />
                <span>+1 (247) IGNITE-ME</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Ignite24x7. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
