
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
  ExternalLink
} from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    { 
      name: 'IgnitePOS Manager', 
      desc: 'The ultimate 100% mobile POS for small restaurants. AI-powered insights and full offline support.', 
      platform: 'Android / iOS / Web', 
      icon: <Smartphone className="text-emerald-500" />,
      link: 'https://pos.ignite24x7.com',
      isNew: true,
      benefits: [
        'Zero Infrastructure - Runs on any phone',
        'Gemini AI Business Insights',
        '100% Offline Support',
        'Daily/Monthly Revenue Reports'
      ]
    },
    { 
      name: 'Ignite Flow', 
      desc: 'Enterprise Task & Workflow Management for scaling teams.', 
      platform: 'Web / Desktop', 
      icon: <Server className="text-orange-500" /> 
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
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 mb-8">
            <Box size={16} className="text-orange-500" />
            <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Ignite App Store</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Our <span className="text-orange-600">Ignite Products</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Proprietary software and SaaS solutions designed to solve real-world business challenges.
          </p>
        </div>

        {/* Featured / New Product (IgnitePOS) */}
        <div className="mb-16">
          {products.filter(p => p.isNew).map((prod, i) => (
            <div key={i} className="glass-card p-8 md:p-12 rounded-[2rem] border border-emerald-500/20 relative group overflow-hidden bg-gradient-to-br from-emerald-500/5 to-transparent">
              <div className="absolute top-0 right-0 p-8">
                <div className="bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest py-1.5 px-4 rounded-full border border-emerald-500/20">
                  New Release
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-emerald-500/20">
                    <Smartphone className="text-white w-8 h-8" />
                  </div>
                  <h2 className="text-4xl font-black mb-4">{prod.name}</h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {prod.desc} Start your 30-day free trial today. No expensive hardware required.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {prod.benefits?.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={prod.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl shadow-emerald-600/20 group"
                    >
                      <Download size={20} />
                      Install App Now
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
                
                <div className="relative hidden lg:block">
                  <div className="absolute -inset-10 bg-emerald-500/20 blur-[100px] rounded-full"></div>
                  <div className="relative glass-card border-white/10 rounded-3xl p-4 transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600" 
                      alt="POS Interface" 
                      className="rounded-2xl opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                       <p className="text-white font-bold">100% Mobile Ready</p>
                       <p className="text-emerald-500 text-xs font-black uppercase">Android & iOS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Products Grid */}
        <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter text-gray-500">Coming Soon to App Store</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {products.filter(p => !p.isNew).map((prod, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl border border-white/5 relative group overflow-hidden hover:border-orange-500/20 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                 <Download size={20} className="text-orange-600" />
              </div>
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600/10 transition-colors">
                {prod.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{prod.name}</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">{prod.desc}</p>
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest pt-4 border-t border-white/5">
                <span className="text-gray-600">{prod.platform}</span>
                <span className="text-orange-600/80 animate-pulse">Coming Soon</span>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="glass-card p-12 rounded-3xl text-center border border-orange-600/20 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600/50 to-transparent"></div>
          <div className="flex justify-center gap-8 mb-10 text-gray-500">
            <Smartphone size={32} />
            <Laptop size={32} />
            <Globe size={32} />
          </div>
          <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">Your Hub for Digital Tools</h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
            We are continuously building and certifying new productivity apps for our clients. 
            Once live, you'll be able to download native binaries for all platforms directly from here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/10"
            >
              <ArrowLeft size={18} /> Back to Home
            </Link>
            <a 
              href="mailto:info@ignite24x7.com" 
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-orange-600/20"
            >
              Get Early Access Notify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
