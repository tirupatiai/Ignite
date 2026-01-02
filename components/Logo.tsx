
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-5xl',
    xl: 'text-6xl',
  };

  const taglineSizes = {
    sm: 'text-[8px]',
    md: 'text-[10px]',
    lg: 'text-[14px]',
    xl: 'text-[16px]',
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`${textSizes[size]} font-black tracking-tighter text-[#0F172A]`}>
            IGNITE<span className="text-[#F97316]">24x7</span>
          </span>
          <span className={`${taglineSizes[size]} font-bold text-slate-400 uppercase tracking-[0.3em] mt-1.5`}>
            Automate | Innovate | Grow
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
