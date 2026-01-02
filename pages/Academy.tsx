
import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Cpu, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Monitor, 
  Microscope, 
  Code2, 
  Target, 
  School,
  LineChart,
  MessageSquare
} from 'lucide-react';

const Academy: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-100 bg-slate-50 mb-8 transition-all hover:border-orange-200">
              <GraduationCap size={14} className="text-orange-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Skill Engineering</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 leading-[1.1]">
              Learn Industry-Ready Skills. <br />
              <span className="text-orange-600">Build Future-Proof Careers.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-lg text-slate-500 font-medium leading-relaxed mb-12">
              Ignite Academy delivers hands-on, practical training designed by industry experts for students, 
              professionals, and institutions. We focus on real-world skills that lead to real career outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">🚀 What We Offer</h2>
            <p className="text-slate-500 text-lg">Specialized programs for every stage of your technical journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Software & Analytics */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <Code2 size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Software & Analytics Training</h3>
              <p className="text-slate-500 font-medium mb-8">Master the tools that drive the modern digital economy.</p>
              <ul className="space-y-4">
                {['Python Development', 'Data Analytics & Power BI', 'Data Engineering Pipelines', 'Modern Technology Stacks'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-orange-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Robotics & Electronics */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Cpu size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Robotics & Electronics</h3>
              <p className="text-slate-500 font-medium mb-8">Hands-on workshops for schools and colleges focused on hardware innovation.</p>
              <ul className="space-y-4">
                {['Arduino & Microcontrollers', 'Industrial Automation', 'IoT Device Prototyping', 'Electronics Workshops'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Kids Coding */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Microscope size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Kids Coding & Robotics</h3>
              <p className="text-slate-500 font-medium mb-8">Interactive programs that build logic, creativity, and STEM foundations.</p>
              <ul className="space-y-4">
                {['Junior Python Programs', 'Block-based Logic Building', 'Educational Robotics', 'STEM Foundations'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Transition */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <LineChart size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Career Transition Programs</h3>
              <p className="text-slate-500 font-medium mb-8">Structured learning paths to switch careers into analytics and BI.</p>
              <ul className="space-y-4">
                {['Analytics Bridge Programs', 'BI Transition Roadmap', 'Structured Career Guidance', 'Interview & Portfolio Prep'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-purple-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Partnerships */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-3xl -z-10 transform scale-150"></div>
            <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg">
              <School size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">Industry Expert Sessions</h2>
            <p className="text-lg text-slate-500 font-medium mb-10">We partner with educational institutions to deliver guest lectures, specialized workshops, and custom training modules.</p>
            <div className="space-y-4">
              {['Guest Lectures for Tech Depts', 'Institutional Workshops', 'Custom Faculty Training', 'Project Mentorship Programs'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-700 font-bold">
                  <CheckCircle2 size={18} className="text-orange-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-left shadow-inner">
            <h3 className="text-xs font-black mb-8 text-slate-400 uppercase tracking-[0.4em]">Why Learn With Us?</h3>
            <div className="space-y-8">
              {[
                { title: 'Industry-Aligned', desc: 'Curriculum shaped by current market demands.' },
                { title: 'Practical Projects', desc: 'Real-world labs and hands-on case studies.' },
                { title: 'Expert-Led', desc: 'Direct mentorship from active industry professionals.' },
                { title: 'Flexible Formats', desc: 'On-campus, online, and hybrid learning options.' }
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
             <Monitor size={24} />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Learn Today. <span className="text-orange-600 italic">Lead Tomorrow.</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium mb-12 leading-relaxed">
            From students exploring technology to professionals upgrading their careers, our Academy empowers learners at every stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-orange-600 hover:bg-slate-900 text-white font-black rounded-full uppercase tracking-widest transition-all shadow-lg shadow-orange-600/10 flex items-center justify-center gap-3"
            >
              Explore Courses & Partnerships
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;
