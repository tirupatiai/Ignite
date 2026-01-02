
import React from 'react';
import { 
  Zap, 
  Cpu, 
  Database, 
  LayoutGrid, 
  ShieldCheck, 
  ArrowRight, 
  Bot, 
  Cloud, 
  LineChart, 
  CheckCircle2, 
  MessageSquare,
  Users,
  Target,
  Rocket,
  Lock
} from 'lucide-react';

const SoftwareDevelopment: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-100 bg-slate-50 mb-8 transition-all hover:border-orange-200">
              <Cpu size={14} className="text-orange-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Enterprise Engineering</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 leading-[1.1]">
              Software Development That <br />
              <span className="text-orange-600">Moves Your Business Faster</span>
            </h1>
            
            <h2 className="text-lg md:text-xl font-bold text-slate-400 mb-10 tracking-[0.1em] uppercase">
              Build. Automate. Scale.
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-slate-500 font-medium leading-relaxed mb-12">
              At Ignite24x7, we build smart software and AI-powered solutions that help businesses automate operations, 
              work faster, and make better decisions. We turn complex challenges into simple, scalable digital products.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build - Features Bento Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">What We Build</h2>
            <p className="text-slate-500 text-lg">Engineering excellence across four critical digital pillars.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Automation */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Automation That Actually Saves Time</h3>
              <p className="text-slate-500 font-medium mb-8">We eliminate manual work by automating workflows and modernizing outdated systems.</p>
              <ul className="space-y-4">
                {['Process automation and workflow digitization', 'Seamless system integrations', 'Faster operations with fewer errors', 'Real-time visibility into business processes'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-orange-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Bot size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">AI That Works for Your Business</h3>
              <p className="text-slate-500 font-medium mb-8">We use AI to turn data and documents into intelligence for actionable outcomes.</p>
              <ul className="space-y-4">
                {['AI-based document and data extraction', 'Smart dashboards and insights', 'Chatbots and AI assistants', 'Predictive and intelligent analytics'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Apps */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <LayoutGrid size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Modern Web & App Development</h3>
              <p className="text-slate-500 font-medium mb-8">We build clean, scalable, and secure applications users love, optimized for performance.</p>
              <ul className="space-y-4">
                {['Web and enterprise applications', 'API-first and microservices architectures', 'Cloud-native and mobile-ready platforms', 'High-performance, secure systems'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Analytics */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <LineChart size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Data & Analytics</h3>
              <p className="text-slate-500 font-medium mb-8">We help teams move from raw data to real insights that drive business growth.</p>
              <ul className="space-y-4">
                {['Data pipelines and analytics platforms', 'Business Intelligence dashboards', 'Real-time and historical reporting', 'Advanced analytics and KPIs'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-purple-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Ready Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-3xl -z-10 transform scale-150"></div>
            <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg">
              <Cloud size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">Cloud-Ready From Day One</h2>
            <p className="text-lg text-slate-500 font-medium mb-10">We migrate, build, and optimize applications on the cloud, ensuring high availability and cost-efficiency.</p>
            <div className="space-y-4">
              {['Cloud migration and modernization', 'Cloud-native development', 'Scalable and cost-optimized infrastructure', 'Secure and high-availability deployments'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-700 font-bold">
                  <ShieldCheck size={18} className="text-orange-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-left shadow-inner">
            <h3 className="text-xs font-black mb-8 text-slate-400 uppercase tracking-[0.4em]">Strategic Methodology</h3>
            <div className="space-y-10 relative">
               <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-slate-200"></div>
               {[
                 { title: 'Understand', desc: 'Deep dive into your challenges and requirements.' },
                 { title: 'Design', desc: 'Architect the right solution using modern tech stacks.' },
                 { title: 'Build', desc: 'Rapid prototyping and iterative development (Agile).' },
                 { title: 'Scale', desc: 'Continuous optimization and infrastructure scaling.' }
               ].map((phase, i) => (
                 <div key={i} className="relative pl-10">
                   <div className="absolute left-0 w-5 h-5 rounded-full bg-white border-[3px] border-orange-600 z-10"></div>
                   <h4 className="text-lg font-bold text-slate-900 leading-none mb-1.5">{phase.title}</h4>
                   <p className="text-sm text-slate-500 font-medium">{phase.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Why Choose Us & Sector Expertise */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-12">The Ignite Advantage</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {[
                  { title: 'Automation-First', icon: <Zap size={18} className="text-orange-600" />, desc: 'We prioritize operational velocity in every line of code.' },
                  { title: 'AI Excellence', icon: <Bot size={18} className="text-orange-600" />, desc: 'Deep expertise in model integration and data strategy.' },
                  { title: 'Rapid Delivery', icon: <Rocket size={18} className="text-orange-600" />, desc: 'Agile execution designed for immediate business impact.' },
                  { title: 'Secure Architecture', icon: <Lock size={18} className="text-orange-600" />, desc: 'Hardened systems built on enterprise-grade security.' },
                  { title: 'Strategic Partner', icon: <Target size={18} className="text-orange-600" />, desc: 'We think like stakeholders, not just developers.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-md font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-l border-slate-200 pl-12 hidden lg:block">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Sector Expertise</h3>
              <div className="space-y-6">
                {['Technology', 'Manufacturing', 'Finance', 'Healthcare', 'Retail', 'Education'].map((industry) => (
                  <div key={industry} className="text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors cursor-default">
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center mx-auto mb-10 shadow-lg">
             <MessageSquare size={24} />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Let’s Build Something <span className="text-orange-600 italic">Powerful</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium mb-12 leading-relaxed">
            Whether you want to automate operations, introduce AI, build products, or scale on the cloud, we’re ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-orange-600 hover:bg-slate-900 text-white font-black rounded-full uppercase tracking-widest transition-all shadow-lg shadow-orange-600/10 flex items-center justify-center gap-3"
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

export default SoftwareDevelopment;
