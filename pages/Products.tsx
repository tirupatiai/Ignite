
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Box, Download, Smartphone, Laptop, Globe, Server, Shield } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    { name: 'Ignite Flow', desc: 'Enterprise Task & Workflow Management', platform: 'Web/Desktop', icon: <Server className="text-orange-500" /> },
    { name: 'TalentSync AI', desc: 'Next-gen AI Recruitment Platform', platform: 'iOS/Android', icon: <Smartphone className="text-blue-500" /> },
    { name: 'DevSpark Tools', desc: 'Efficiency Suite for Software Engineers', platform: 'macOS/Windows', icon: <Laptop className="text-emerald-500" /> },
    { name: 'Ignite CRM', desc: 'Integrated Client Relationship Suite', platform: 'Cloud/SaaS', icon: <Shield className="text-purple-500" /> }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 mb-8">
            <Box size={16} className="text-orange-500" />
            <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Ignite App Store</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Our <span className="text-orange-600">Ignite Products</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            A centralized hub for our proprietary software, tools, and SaaS solutions. 
            Official download links for all platforms are coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {products.map((prod, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl border border-white/5 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                 <Download size={20} className="text-orange-600" />
              </div>
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
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

        <div className="glass-card p-12 rounded-3xl text-center border border-orange-600/20 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600/50 to-transparent"></div>
          <div className="flex justify-center gap-8 mb-10 text-gray-500">
            <Smartphone size={32} />
            <Laptop size={32} />
            <Globe size={32} />
          </div>
          <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">Your Hub for Digital Tools</h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
            We are finalizing the certification for our first wave of productivity apps. 
            Once live, you'll be able to download native binaries for Android, iOS, Windows, and macOS directly from here.
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
