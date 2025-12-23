
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface Props {
  service: Service;
}

const ServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <div className="group relative">
      {/* Background glow animation */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500`}></div>
      
      <div className="relative glass-card p-8 rounded-2xl h-full flex flex-col hover:border-white/20 transition-all">
        <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} text-white`}>
          {service.icon}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
          {service.description}
        </p>
        
        <Link 
          to={service.path}
          className="inline-flex items-center text-orange-500 font-bold group-hover:gap-2 transition-all"
        >
          Explore Service <ArrowRight size={18} className="ml-2 group-hover:ml-1 transition-all" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
