
import React from 'react';
import { 
  Users, 
  Search, 
  Briefcase, 
  UserPlus, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare,
  ShieldCheck,
  School,
  Target,
  UserCheck
} from 'lucide-react';

const HRServices: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-100 bg-slate-50 mb-8 transition-all hover:border-emerald-200">
              <Users size={14} className="text-emerald-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Talent Engineering</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 leading-[1.1]">
              Right Talent. Right Time. <br />
              <span className="text-emerald-600">Real Impact.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-lg text-slate-500 font-medium leading-relaxed mb-12">
              We help organizations attract, hire, and retain the right talent through strategic recruitment, 
              HR consulting, and workforce solutions tailored for today’s fast-changing business environment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">🚀 What We Do</h2>
            <p className="text-slate-500 text-lg">Comprehensive talent solutions designed for scalable growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Talent Acquisition */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Search size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Talent Acquisition</h3>
              <p className="text-slate-500 font-medium mb-8">Strategic hiring for permanent and project-based roles across industries.</p>
              <ul className="space-y-4">
                {['Permanent Staffing Solutions', 'Contract & Project-Based Hiring', 'Leadership & Executive Search', 'Mid-to-Senior Management Hiring'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialized & Niche Hiring */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Specialized & Niche Hiring</h3>
              <p className="text-slate-500 font-medium mb-8">Connecting organizations with high-demand tech and engineering talent.</p>
              <ul className="space-y-4">
                {['Data & AI Engineers', 'Cloud & DevOps Specialists', 'Software Architects', 'Emerging Technology Talent'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* HR Consulting & Advisory */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">HR Consulting & Advisory</h3>
              <p className="text-slate-500 font-medium mb-8">Optimizing your human capital through strategic process improvement.</p>
              <ul className="space-y-4">
                {['Strategic Workforce Planning', 'Performance Management Systems', 'HR Process Optimization', 'Culture & Engagement Strategy'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-orange-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Third-Party & Volume Hiring */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <UserPlus size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Third-Party & Volume Hiring</h3>
              <p className="text-slate-500 font-medium mb-8">Scalable recruitment support for large hiring drives and enterprise needs.</p>
              <ul className="space-y-4">
                {['Recruitment Process Outsourcing', 'Large-Scale Hiring Drives', 'Vendor Management Services', 'Rapid Team Deployment'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-purple-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Campus & Early Career */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-white transition-all">
                <School size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Campus & Early Career</h3>
              <p className="text-slate-500 font-medium mb-8">Bridging the gap between fresh talent and industry leadership.</p>
              <ul className="space-y-4">
                {['University Placement Drives', 'Internship Program Management', 'Career Readiness Workshops', 'Fresh Talent Sourcing'].map((item, i) => (
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
            <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-3xl -z-10 transform scale-150"></div>
            <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg">
              <UserCheck size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">Build Strong Teams. <br/>Scale With Confidence.</h2>
            <p className="text-lg text-slate-500 font-medium mb-10">From startups to enterprises, we connect businesses with talent that drives long-term success.</p>
            <div className="space-y-4">
              {['Industry-focused recruiters', 'Faster time-to-hire', 'Quality-driven screening', 'Transparent practices'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-700 font-bold">
                  <CheckCircle2 size={18} className="text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-left shadow-inner">
            <h3 className="text-xs font-black mb-8 text-slate-400 uppercase tracking-[0.4em]">Why Work With Us?</h3>
            <div className="space-y-8">
              {[
                { title: 'Industry-Focused', desc: 'Expert recruiters who understand your specific market.' },
                { title: 'AI-Powered Screening', desc: 'Advanced assessment tools for high-quality candidates.' },
                { title: 'Fast Turnaround', desc: 'Optimized workflows to reduce your time-to-hire.' },
                { title: 'Ethical Practices', desc: 'Completely transparent and compliant hiring models.' }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0"></div>
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
            Ready to Build Your <span className="text-emerald-600 italic">Dream Team?</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium mb-12 leading-relaxed">
            Let’s build your workforce strategy. Our talent acquisition specialists are ready to find your next star player.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-emerald-600 hover:bg-slate-900 text-white font-black rounded-full uppercase tracking-widest transition-all shadow-lg shadow-emerald-600/10 flex items-center justify-center gap-3"
            >
              Start Building Today
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HRServices;
