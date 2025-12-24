
import React from 'react';
import { ArrowDown, CheckCircle2, Globe, Rocket, Shield, Zap } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero & Services Section - Combined for immediate visibility */}
      <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-16 px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card border-white/10 mb-12 animate-pulse">
            <Zap size={16} className="text-orange-500" />
            <span className="text-sm font-semibold tracking-wide uppercase text-gray-300">Igniting Innovation 24x7</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {SERVICES.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#about" className="w-full sm:w-auto px-8 py-4 glass-card hover:bg-white/5 text-white font-bold rounded-2xl transition-all border-white/10 text-base">
              Learn More About Us
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-orange-600/20 text-base">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-white">
                Why Industry Leaders <br />
                <span className="text-orange-500">Trust Ignite24x7</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Global Delivery', icon: <Globe />, text: 'Service delivery centers across 3 continents ensuring true 24/7 support.' },
                  { title: 'Modern Solutions', icon: <Rocket />, text: 'Leveraging the latest technologies to build scalable and efficient platforms.' },
                  { title: 'Secure & Compliant', icon: <Shield />, text: 'Enterprise-grade security standards for all our software and data handling.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 glass-card rounded-2xl hover:border-orange-500/30 transition-all">
                    <div className="w-12 h-12 bg-orange-600/10 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-600/20 blur-3xl rounded-full"></div>
              <div className="relative glass-card border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team collaborating" className="w-full h-auto opacity-60" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                 <div className="absolute bottom-10 left-10 text-white">
                    <div className="flex items-center space-x-2 text-orange-500 font-bold mb-2">
                       <CheckCircle2 size={20} />
                       <span>Certified Professionals</span>
                    </div>
                    <p className="text-4xl font-black">24x7 Support</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden bg-black">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">Ready to Ignite?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Whether you have a project in mind or just want to explore how we can help, our team is standing by.
          </p>
          <div className="glass-card p-8 md:p-12 rounded-3xl border-white/10 shadow-2xl relative">
            <form className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">How can we help?</label>
                <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                  <option className="bg-[#1a1a1c]">Software Development</option>
                  <option className="bg-[#1a1a1c]">Ignite Academy</option>
                  <option className="bg-[#1a1a1c]">Digital Marketing</option>
                  <option className="bg-[#1a1a1c]">HR & Recruitment</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white h-32 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Tell us about your needs..."></textarea>
              </div>
              <button type="button" className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-4 rounded-xl text-lg transition-all shadow-lg shadow-orange-600/30 uppercase tracking-widest">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
