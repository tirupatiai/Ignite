
import React from 'react';
import { Megaphone, TrendingUp, PenTool, Target, Globe, BarChart3, ArrowRight, Share2, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants.tsx';

const DigitalMarketing: React.FC = () => {
  const marketing = SERVICES.find(s => s.id === 'digital-marketing');

  const icons = {
    'Digital Strategy': <Target className="w-6 h-6 text-purple-400" />,
    'Branding & Creative': <PenTool className="w-6 h-6 text-pink-400" />,
    'Performance Marketing': <TrendingUp className="w-6 h-6 text-purple-500" />,
    'Social Media & Content': <Share2 className="w-6 h-6 text-pink-500" />,
    'Web & Experience': <Globe className="w-6 h-6 text-purple-400" />,
    'Analytics & Optimization': <BarChart3 className="w-6 h-6 text-pink-400" />
  };

  return (
    <div className="pt-24 pb-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-purple-600/20">
            <Megaphone className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            Digital <span className="text-purple-500">Marketing</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Empowering brands to scale through data-driven creativity. We combine branding, 
            performance, and technical expertise to drive unmatched online growth.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketing?.subCategories?.map((cat, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-purple-600/10 transition-colors">
                    {icons[cat.title as keyof typeof icons] || <CheckCircle2 />}
                  </div>
                  <h3 className="text-xl font-bold">{cat.title}</h3>
                </div>
                <ul className="space-y-4">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-600/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-8">Ready for exponential growth?</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            From viral social campaigns to high-converting SEO strategies, our growth hackers are ready to take your brand to the moon.
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-purple-600/20"
          >
            Launch Your Campaign <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
