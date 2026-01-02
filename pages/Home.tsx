
import React from 'react';
import { ArrowRight, Globe, Zap, Shield, Database, LayoutGrid } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants.tsx';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* High-End Hero */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden">
        {/* Subtle Engineering Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
          <div className="flex flex-col items-center mb-16 space-y-4">
             <Logo size="xl" className="mb-4" />
          </div>

          <p className="max-w-3xl mx-auto text-xl text-slate-500 font-medium mb-12 leading-relaxed">
            Partnering with global enterprises to deliver <span className="text-slate-900 font-bold">advanced engineering</span>, 
            <span className="text-slate-900 font-bold"> strategic talent acquisition</span>, and <span className="text-slate-900 font-bold">digital transformation</span> solutions.
          </p>

          {/* Solutions Grid - Immediate Service Visibility */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 text-left">
            {SERVICES.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-20 pt-20 border-t border-slate-50">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-10 text-center">Core Capability Framework</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40">
              <div className="flex items-center gap-2"><Database size={20} /> <span className="text-sm font-bold tracking-tight">Data Engineering</span></div>
              <div className="flex items-center gap-2"><Globe size={20} /> <span className="text-sm font-bold tracking-tight">Global Staffing</span></div>
              <div className="flex items-center gap-2"><Shield size={20} /> <span className="text-sm font-bold tracking-tight">SecOps Compliant</span></div>
              <div className="flex items-center gap-2"><LayoutGrid size={20} /> <span className="text-sm font-bold tracking-tight">SaaS Architectures</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Built for scale. <br/>Engineered for success.</h2>
            <p className="text-slate-400 text-lg">We build long-term value architectures that help your business transcend market limitations and achieve operational excellence.</p>
          </div>
          <div className="flex gap-4">
             <a href="#contact" className="px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-full uppercase tracking-widest transition-all">Start Your Journey</a>
          </div>
        </div>
      </section>

      {/* Modern Contact Form */}
      <section id="contact" className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">Connect with an Expert</h2>
            <p className="text-slate-500 text-lg">Send us a brief, and our strategy lead will reach out to you within 24 hours.</p>
          </div>
          <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/50">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" placeholder="Full Name" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 transition-all font-semibold" />
                <input type="email" placeholder="Business Email" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 transition-all font-semibold" />
              </div>
              <select className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 transition-all font-semibold appearance-none">
                <option>Service Category: Software Development</option>
                <option>Service Category: Academy Training</option>
                <option>Service Category: Digital Marketing</option>
                <option>Service Category: HR & Recruitment</option>
              </select>
              <textarea placeholder="Tell us about your project or inquiry..." className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-none h-40 focus:ring-2 focus:ring-orange-500 transition-all font-semibold resize-none"></textarea>
              <button type="button" className="w-full bg-orange-600 hover:bg-[#0F172A] text-white py-6 rounded-2xl text-xl font-black uppercase tracking-[0.2em] shadow-xl transition-all">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
