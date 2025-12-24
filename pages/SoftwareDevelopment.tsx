
import React from 'react';
import { CheckCircle2, Code, Database, Brain, Rocket, Box, Cpu, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants.tsx';

const SoftwareDevelopment: React.FC = () => {
  const softwareDev = SERVICES.find(s => s.id === 'software-development');

  const icons = {
    'Custom Software Development': <Code className="w-6 h-6 text-blue-400" />,
    'AI & Automation': <Brain className="w-6 h-6 text-purple-400" />,
    'Data & Analytics': <Database className="w-6 h-6 text-emerald-400" />,
    'Product Engineering': <Rocket className="w-6 h-6 text-red-400" />,
    'Design & Modeling': <Box className="w-6 h-6 text-orange-400" />,
    'Technology Consulting': <Cpu className="w-6 h-6 text-cyan-400" />
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-600/20">
            <Code className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            Software <span className="text-blue-500">Development</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            From architecture to deployment, we build scalable, resilient, and intelligent software systems 
            that drive modern business innovation.
          </p>
        </div>
      </section>

      {/* Grid of Sub-services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareDev?.subCategories?.map((cat, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-blue-600/10 transition-colors">
                    {icons[cat.title as keyof typeof icons] || <CheckCircle2 />}
                  </div>
                  <h3 className="text-xl font-bold">{cat.title}</h3>
                </div>
                <ul className="space-y-4">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-20 bg-blue-600/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-8">Have a vision for your next product?</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's discuss how our expert engineering team can turn your ideas into a high-performance reality.
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20"
          >
            Schedule a Consultation <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
