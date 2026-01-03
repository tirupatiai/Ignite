
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Box, 
  Download, 
  Smartphone, 
  Laptop, 
  Globe, 
  Server, 
  Shield, 
  Zap, 
  ChevronRight, 
  CheckCircle2,
  Calendar,
  Layers,
  ExternalLink
} from 'lucide-react';

const Products: React.FC = () => {
  const featuredProducts = [
    { 
      name: 'Ignite Event Craft', 
      desc: 'The complete toolkit for modern event organizers. List your services, share custom booking links, and manage your event calendar with ease.', 
      platform: 'Web / Tablet / Desktop', 
      icon: <Calendar className="text-white w-8 h-8" />,
      link: 'https://eventcraft.ignite24x7.com/',
      color: 'bg-indigo-600',
      shadow: 'shadow-indigo-600/20',
      border: 'border-indigo-500/20',
      gradient: 'from-indigo-500/5',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800',
      tag: 'Strategic Tool',
      benefits: [
        'Custom Service Catalogs',
        'Direct Booking Links',
        'Automated Scheduling',
        'Customer Inquiry Management'
      ]
    },
    { 
      name: 'IgnitePOS Manager', 
      desc: 'The ultimate 100% mobile POS for small restaurants. AI-powered insights and full offline support. No expensive hardware needed.', 
      platform: 'Android / iOS / Web', 
      icon: <Smartphone className="text-white w-8 h-8" />,
      link: 'https://ignitepos1.vercel.app',
      color: 'bg-emerald-600',
      shadow: 'shadow-emerald-600/20',
      border: 'border-emerald-500/20',
      gradient: 'from-emerald-500/5',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
      tag: 'New Release',
      benefits: [
        'Zero Infrastructure - Use your phone',
        'Gemini AI Business Insights',
        '100% Offline Support',
        'Real-time Revenue Analytics'
      ]
    }
  ];

  const comingSoonProducts = [
    { 
      name: 'Ignite Flow', 
      desc: 'Enterprise Task & Workflow Management for scaling teams.', 
      platform: 'Web / Desktop', 
      icon: <Layers className="text-orange-500" /> 
    },
    { 
      name: 'TalentSync AI', 
      desc: 'Next-gen AI Recruitment Platform for global talent acquisition.', 
      platform: 'iOS / Android', 
      icon: <Smartphone className="text-blue-500" /> 
    },
    { 
      name: 'DevSpark Tools', 
      desc: 'Efficiency Suite for modern software engineers.', 
      platform: 'macOS / Windows', 
      icon: <Laptop className="text-emerald-500" /> 
    },
    { 
      name: 'Ignite CRM', 
      desc: 'Integrated Client Relationship Suite for digital agencies.', 
      platform: 'Cloud / SaaS', 
      icon: <Shield className="text-purple-500" /> 
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8">
            <Box size={16} className="text-orange-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">The Ignite Ecosystem</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900">
            Our <span className="text-orange-600">Digital Solutions</span>
          </h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Proprietary software and SaaS solutions engineered to solve real-world business challenges and drive operational efficiency.
          </p>
        </div>

        {/* Featured Products Section */}
        <div className="space-y-12 mb-32">
          {featuredProducts.map((prod, i) => (
            <div 
              key={i} 
              className={`bg-white p-8 md:p-12 rounded-[2.5rem] border ${prod.border} relative group overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-gradient-to-br ${prod.gradient} to-transparent`}
            >
              <div className="absolute top-0 right-0 p-8">
                <div className={`bg-slate-900/5 text-slate-900 text-[10px] font-black uppercase tracking-widest py-1.5 px-4 rounded-full border border-slate-900/10`}>
                  {prod.tag}
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className={`w-16 h-16 ${prod.color} rounded-2xl flex items-center justify-center mb-8 shadow-xl ${prod.shadow}`}>
                    {prod.icon}
                  </div>
                  <h2 className="text-4xl font-black mb-6 text-slate-900">{prod.name}</h2>
                  <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">
                    {prod.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                    {prod.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="text-orange-600 shrink-0" />
                        <span className="text-sm font-bold tracking-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={prod.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-3 ${prod.color} hover:opacity-90 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl ${prod.shadow} group`}
                    >
                      <ExternalLink size={20} />
                      Launch Application
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
                
                <div className="relative order-1 lg:order-2">
                  <div className={`absolute -inset-10 opacity-20 blur-[100px] rounded-full ${prod.color}`}></div>
                  <div className="relative bg-white border border-slate-100 rounded-3xl p-3 transform rotate-1 group-hover:rotate-0 transition-transform duration-700 shadow-2xl">
                    <img 
                      src={prod.image} 
                      alt={`${prod.name} Interface`} 
                      className="rounded-2xl w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent flex flex-col justify-end p-8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                       <p className="text-white font-black uppercase tracking-widest text-xs mb-1">Platform Compatibility</p>
                       <p className="text-white/70 text-sm font-bold">{prod.platform}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Grid */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Development Pipeline</h3>
            <div className="h-px flex-grow mx-8 bg-slate-100"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {comingSoonProducts.map((prod, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 relative group overflow-hidden hover:border-orange-500/20 hover:shadow-xl transition-all duration-500">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                   <Zap size={18} className="text-orange-600" />
                </div>
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-50 transition-colors">
                  {prod.icon}
                </div>
                <h3 className="text-2xl font-black mb-3 text-slate-900">{prod.name}</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">{prod.desc}</p>
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest pt-6 border-t border-slate-50">
                  <span className="text-slate-300">{prod.platform}</span>
                  <span className="text-orange-600 animate-pulse">In Engineering</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unified Hub Call to Action */}
        <div className="bg-slate-900 p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px]"></div>
          
          <div className="flex justify-center gap-12 mb-12 text-slate-700">
            <Smartphone size={32} />
            <Laptop size={32} />
            <Globe size={32} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tighter">Your Hub for Digital Efficiency</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            We are continuously engineering and certifying new productivity tools for our clients. 
            Join our early access program to be the first to ignite your operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-black transition-all border border-white/10"
            >
              <ArrowLeft size={18} /> Return Home
            </Link>
            <a 
              href="mailto:info@ignite24x7.com" 
              className="inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl shadow-orange-600/30"
            >
              Get Early Access
              <ChevronRight size={18} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;
