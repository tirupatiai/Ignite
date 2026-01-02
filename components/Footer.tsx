
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="mb-10 block group">
               <Logo size="md" />
            </Link>
            <p className="text-slate-400 font-medium max-w-md mb-10 leading-relaxed text-lg">
              Ignite24x7 is a global leader in integrated business engineering, 
              talent strategy, and digital modernization. We are built for the future.
            </p>
            <div className="flex space-x-6">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-orange-600 transition-all border border-slate-700/50">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black mb-10 text-xs uppercase tracking-[0.3em]">Verticals</h4>
            <ul className="space-y-6">
              <li><Link to="/software" className="text-slate-400 font-bold hover:text-orange-500 transition-colors uppercase text-[11px] tracking-widest">Software Engineering</Link></li>
              <li><Link to="/academy" className="text-slate-400 font-bold hover:text-orange-500 transition-colors uppercase text-[11px] tracking-widest">Ignite Academy</Link></li>
              <li><Link to="/marketing" className="text-slate-400 font-bold hover:text-orange-500 transition-colors uppercase text-[11px] tracking-widest">Growth Marketing</Link></li>
              <li><Link to="/hr" className="text-slate-400 font-bold hover:text-orange-500 transition-colors uppercase text-[11px] tracking-widest">Talent Solutions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black mb-10 text-xs uppercase tracking-[0.3em]">Headquarters</h4>
            <ul className="space-y-8">
              <li className="flex items-start space-x-4 text-slate-400 font-medium">
                <MapPin size={22} className="mt-1 text-orange-500 shrink-0" />
                <span className="text-sm">Tiruchanur Tirupati, Andhra Pradesh India 517503</span>
              </li>
              <li className="flex items-center space-x-4 text-slate-400 font-medium">
                <Mail size={22} className="text-orange-500 shrink-0" />
                <span className="text-sm">info@ignite24x7.com</span>
              </li>
              <li className="flex items-center space-x-4 text-slate-400 font-medium">
                <Phone size={22} className="text-orange-500 shrink-0" />
                <span className="text-sm">+91 (247) IGNITE-HUB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} Ignite24x7 Global Consultancy.</p>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Security</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
