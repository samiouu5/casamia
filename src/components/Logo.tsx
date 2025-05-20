import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/logo.svg" 
        alt="Casa Mia Logo" 
        className="w-10 h-10 object-contain"
      />
      <span className="font-bold text-xl tracking-tight">Casa Mia</span>
    </div>
  );
};

export default Logo;