import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import FlagModel from './FlagModel';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20"></div>
      </div>
      
      <div className="container relative z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-700 mb-8 max-w-xl mx-auto lg:mx-0">
            {t('hero.subtitle')}
          </p>
          <button 
            onClick={scrollToServices}
            className="btn btn-primary text-base px-8 py-3"
          >
            {t('hero.cta')}
          </button>
        </div>
        
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="w-72 h-72 sm:w-96 sm:h-96 relative">
            <FlagModel />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll down"
          className="bg-white p-2 rounded-full shadow-md"
        >
          <ChevronDown size={24} className="text-primary-600" />
        </button>
      </div>
      
      <div ref={servicesRef} className="hidden"></div>
    </section>
  );
};

export default HeroSection;