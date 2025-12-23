
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Construction } from 'lucide-react';

interface Props {
  title: string;
}

const ComingSoon: React.FC<Props> = ({ title }) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="glass-card p-12 md:p-20 rounded-3xl max-w-2xl w-full text-center border-white/10 shadow-2xl">
        <div className="w-24 h-24 bg-orange-600/10 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-10">
          <Clock size={48} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
          {title} <br />
          <span className="text-orange-500 underline decoration-orange-500/30 underline-offset-8">Coming Soon</span>
        </h1>
        
        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
          We're currently building a world-class dedicated experience for our {title} operations. 
          Stay tuned, we're igniting something incredible!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10"
          >
            <ArrowLeft size={18} className="mr-2" /> Back to Home
          </Link>
          <a 
            href="mailto:info@ignite24x7.com" 
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-600/20"
          >
            Notify Me
          </a>
        </div>
      </div>
      
      <div className="mt-12 flex items-center space-x-2 text-gray-500 animate-pulse">
        <Construction size={20} />
        <span className="text-sm font-medium tracking-widest uppercase">Under Construction</span>
      </div>
    </div>
  );
};

export default ComingSoon;
