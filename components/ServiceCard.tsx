
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface Props {
  service: Service;
}

const ServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <Link to={service.path} className="group block h-full">
      <div className="relative bg-white p-10 rounded-3xl h-full flex flex-col border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-3 hover:border-orange-200 overflow-hidden">
        
        {/* Subtle Side Color Strip */}
        <div className={`absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>

        <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center bg-slate-50 text-slate-800 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500`}>
          {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28, strokeWidth: 1.5 })}
        </div>
        
        <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-orange-600 transition-colors leading-tight tracking-tight">
          {service.title}
        </h3>
        
        <p className="text-slate-400 font-medium mb-10 flex-grow leading-relaxed text-[15px]">
          {service.description}
        </p>
        
        <div className="flex items-center gap-2 text-[11px] font-black text-slate-400 uppercase tracking-widest group-hover:text-orange-600 transition-colors">
          View Detail
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
