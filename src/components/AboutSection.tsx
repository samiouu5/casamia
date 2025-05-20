import React from 'react';
import { useTranslation } from 'react-i18next';
import { Info, CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-50 rounded-lg p-6 md:p-8 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-primary-100 p-3 rounded-full mr-4">
                <Info className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold">{t('about.purpose')}</h3>
            </div>
            
            <p className="mb-6 text-neutral-700">
              {t('about.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {t('about.activities', { returnObjects: true }).map((activity: string, index: number) => (
                <div 
                  key={index}
                  className="flex items-start"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">{t('about.specific')}</h3>
            
            <div className="grid grid-cols-1 gap-4">
              {t('about.specificList', { returnObjects: true }).map((item: string, index: number) => (
                <div 
                  key={index}
                  className="flex items-start p-4 bg-white border border-neutral-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-primary-700">{index + 1}</span>
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;