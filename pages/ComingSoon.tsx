
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Zap } from 'lucide-react';

interface Props {
  title: string;
}

const ComingSoon: React.FC<Props> = ({ title }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-slate-50 to-transparent -z-10"></div>
      
      <div className="max-w-3xl w-full text-center">
        <div className="w-20 h-20 bg-orange-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-12 shadow-2xl shadow-orange-600/30">
          <Zap size={40} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
          {title} <br />
          <span className="text-orange-500 italic">Coming Soon</span>
        </h1>
        
        <p className="text-slate-500 text-xl mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
          We are currently engineering a world-class dedicated platform for our <span className="text-slate-900 font-bold">{title}</span> operations. 
          Stay tuned as we prepare to ignite a new standard in the industry.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            to="/" 
            className="w-full sm:w-auto px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-full transition-all flex items-center justify-center gap-3 uppercase tracking-widest"
          >
            <ArrowLeft size={18} /> Return Home
          </Link>
          <a 
            href="mailto:info@ignite24x7.com" 
            className="w-full sm:w-auto px-10 py-5 border border-slate-200 hover:border-orange-500 hover:text-orange-600 text-slate-500 font-black rounded-full transition-all flex items-center justify-center gap-3 uppercase tracking-widest"
          >
            <Clock size={18} /> Notify Me
          </a>
        </div>
      </div>
      
      <div className="mt-24 pt-12 border-t border-slate-50 w-full max-w-xs flex items-center justify-center gap-3 text-slate-400">
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Launch Sequence Initiated</span>
      </div>
    </div>
  );
};

export default ComingSoon;
