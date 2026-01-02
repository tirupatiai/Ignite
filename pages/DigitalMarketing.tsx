
import React from 'react';
import { 
  Megaphone, 
  TrendingUp, 
  Target, 
  Globe, 
  BarChart3, 
  Mail, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare,
  Search,
  Share2,
  PieChart
} from 'lucide-react';

const DigitalMarketing: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-100 bg-slate-50 mb-8 transition-all hover:border-orange-200">
              <Megaphone size={14} className="text-orange-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Growth Engineering</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 leading-[1.1]">
              Grow Your Brand. Reach the Right Audience. <br />
              <span className="text-orange-600">Drive Real Results.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-lg text-slate-500 font-medium leading-relaxed mb-12">
              We help businesses build visibility, generate leads, and scale faster through data-driven digital 
              marketing strategies designed for measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">🚀 What We Do</h2>
            <p className="text-slate-500 text-lg">Strategic execution across the entire digital landscape.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Performance Marketing */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Performance Marketing</h3>
              <p className="text-slate-500 font-medium mb-8">ROI-focused campaigns across Google, Meta, and high-intent platforms.</p>
              <ul className="space-y-4">
                {['Google Ads & PPC Management', 'Paid Social (FB, IG, LinkedIn)', 'Conversion Focused Ad Copy', 'Retargeting & LAL Campaigns'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-orange-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SEO & Website Growth */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Search size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">SEO & Website Growth</h3>
              <p className="text-slate-500 font-medium mb-8">Strategic search optimization to dominate organic search results.</p>
              <ul className="space-y-4">
                {['Technical SEO Audits', 'Content Strategy & SEO Writing', 'Keyword Research & Mapping', 'High-Quality Backlink Building'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Marketing */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Share2 size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Social Media Marketing</h3>
              <p className="text-slate-500 font-medium mb-8">Building brand authority and engagement across social channels.</p>
              <ul className="space-y-4">
                {['Brand Building & Positioning', 'Strategic Content Creation', 'Audience Engagement', 'Platform-Specific Growth'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Email & Automation */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Email & Automation</h3>
              <p className="text-slate-500 font-medium mb-8">Nurturing leads through automated customer journeys.</p>
              <ul className="space-y-4">
                {['Lead Nurturing Sequences', 'Lifecycle Marketing Automation', 'High-Conversion Newsletters', 'Retention & Re-engagement'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-purple-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Analytics & Insights */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-white transition-all">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Analytics & Insights</h3>
              <p className="text-slate-500 font-medium mb-8">Using data and AI to optimize every aspect of your growth engine.</p>
              <ul className="space-y-4">
                {['Real-time Dashboards', 'Campaign Performance Audits', 'Data-Driven AI Optimization', 'Attribution Modeling'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-slate-900 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-3xl -z-10 transform scale-150"></div>
            <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg">
              <PieChart size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">Market Smarter. <br/>Grow Faster.</h2>
            <p className="text-lg text-slate-500 font-medium mb-10">From startups to growing enterprises, we turn digital marketing into a predictable growth engine.</p>
            <div className="space-y-4">
              {['Strategy-first approach', 'Data-driven execution', 'Scalable campaigns', 'Transparent reporting'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-700 font-bold">
                  <CheckCircle2 size={18} className="text-orange-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-left shadow-inner">
            <h3 className="text-xs font-black mb-8 text-slate-400 uppercase tracking-[0.4em]">Why Work With Us?</h3>
            <div className="space-y-8">
              {[
                { title: 'Strategy-First', desc: 'Every campaign starts with deep research and planning.' },
                { title: 'AI-Enabled', desc: 'Leveraging AI for creative optimization and targeting.' },
                { title: 'Measurable ROI', desc: 'Focus on business outcomes, not just vanity metrics.' },
                { title: 'Scalable Growth', desc: 'Systems built to handle increasing volume as you grow.' }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{benefit.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center mx-auto mb-10 shadow-lg">
             <Target size={24} />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Ready for <span className="text-orange-600 italic">Predictable Growth?</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium mb-12 leading-relaxed">
            Let’s build your digital growth strategy. Our team of specialists is ready to help you dominate your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-orange-600 hover:bg-slate-900 text-white font-black rounded-full uppercase tracking-widest transition-all shadow-lg shadow-orange-600/10 flex items-center justify-center gap-3"
            >
              Start Your Growth Journey
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
