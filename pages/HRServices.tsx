
import React from 'react';
import { Users, Search, Briefcase, UserPlus, TrendingUp, Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants.tsx';

const HRServices: React.FC = () => {
  const hr = SERVICES.find(s => s.id === 'hr-recruitment');

  const icons = {
    'Recruitment Services': <Search className="w-6 h-6 text-emerald-400" />,
    'IT & Specialized Hiring': <Briefcase className="w-6 h-6 text-teal-400" />,
    'HR Consulting': <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    'Third-Party Hiring Support': <Users className="w-6 h-6 text-teal-500" />,
    'Career Services': <TrendingUp className="w-6 h-6 text-emerald-400" />,
    'HR Events & Engagement': <Calendar className="w-6 h-6 text-teal-400" />
  };

  return (
    <div className="pt-24 pb-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/10 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-600/20">
            <Users className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            HR & <span className="text-emerald-500">Recruitment</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Revolutionizing the way organizations find, foster, and retain top talent. 
            From staffing to workforce consulting, we ignite your human potential.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hr?.subCategories?.map((cat, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-emerald-600/10 transition-colors">
                    {icons[cat.title as keyof typeof icons] || <CheckCircle2 />}
                  </div>
                  <h3 className="text-xl font-bold">{cat.title}</h3>
                </div>
                <ul className="space-y-4">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-600/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-8">Looking for your next star hire?</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Our talent acquisition specialists utilize advanced AI tools and a global network to find the perfect fit for your culture and technical needs.
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-emerald-600/20"
          >
            Start Hiring With Us <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HRServices;
