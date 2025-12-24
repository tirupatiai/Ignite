
import React from 'react';
import { GraduationCap, BookOpen, UserCheck, Award, Users, Video, ArrowRight, Lightbulb, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants.tsx';

const Academy: React.FC = () => {
  const academy = SERVICES.find(s => s.id === 'academy');

  const icons = {
    'Training Programs': <BookOpen className="w-6 h-6 text-orange-400" />,
    'Corporate Learning': <Users className="w-6 h-6 text-red-400" />,
    'Workshops & Seminars': <Lightbulb className="w-6 h-6 text-yellow-400" />,
    'Certification & Skill Building': <Award className="w-6 h-6 text-orange-500" />,
    'Students & Institutions': <UserCheck className="w-6 h-6 text-red-500" />,
    'Learning Resources': <Video className="w-6 h-6 text-orange-400" />
  };

  return (
    <div className="pt-24 pb-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/10 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-orange-600/20">
            <GraduationCap className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            Ignite <span className="text-orange-500">Academy</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between academic learning and industry excellence. We empower individuals, 
            students, and corporates with the skills needed to dominate the digital frontier.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academy?.subCategories?.map((cat, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-orange-600/10 transition-colors">
                    {icons[cat.title as keyof typeof icons] || <CheckCircle2 />}
                  </div>
                  <h3 className="text-xl font-bold">{cat.title}</h3>
                </div>
                <ul className="space-y-4">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-600/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-8">Ready to upskill your team or career?</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of learners and hundreds of corporate partners who have ignited their potential with our tailored training solutions.
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-orange-600/20"
          >
            Inquire About Programs <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Academy;
