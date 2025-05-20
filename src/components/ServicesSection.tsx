import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Languages, Users, FileText, Award, UsersRound, Clipboard, 
  Plane, Shield, Book, Car, Calendar, Scale, FileCheck, 
  FileSignature, SquareUser, Receipt, UserRound
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card group hover:border-primary-300">
      <div className="mb-4 text-primary-600 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-neutral-600 text-center">
        {description}
      </p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  
  const servicesList = [
    { 
      title: t('services.translation.title'), 
      description: t('services.translation.description'), 
      icon: <Languages size={36} className="transition-transform group-hover:scale-110 duration-300" />
    },
    { 
      title: t('services.mediation.title'), 
      description: t('services.mediation.description'), 
      icon: <Users size={36} className="transition-transform group-hover:scale-110 duration-300" />
    },
    { 
      title: t('services.citizenship.title'), 
      description: t('services.citizenship.description'), 
      icon: <Award size={36} className="transition-transform group-hover:scale-110 duration-300" />
    },
    { 
      title: t('services.family.title'), 
      description: t('services.family.description'), 
      icon: <UsersRound size={36} className="transition-transform group-hover:scale-110 duration-300" />
    },
    { 
      title: t('services.permit.title'), 
      description: t('services.permit.description'), 
      icon: <Clipboard size={36} className="transition-transform group-hover:scale-110 duration-300" />
    },
    { 
      title: t('services.visa.title'), 
      description: t('services.visa.description'), 
      icon: <Plane size={36} className="transition-transform group-hover:scale-110 duration-300" />
    },
    { 
      title: t('services.asylum.title'), 
      description: t('services.asylum.description'), 
      icon: <Shield size={36} className="transition-transform group-hover:scale-110 duration-300" />
    },
    { 
      title: t('services.language.title'), 
      description: t('services.language.description'), 
      icon: <Book size={36} className="transition-transform group-hover:scale-110 duration-300" />
    },
    { 
      title: t('services.license.title'), 
      description: t('services.license.description'), 
      icon: <Car size={36} className="transition-transform group-hover:scale-110 duration-300" />
    },
    { 
      title: t('services.appointments.title'), 
      description: t('services.appointments.description'), 
      icon: <Calendar size={36} className="transition-transform group-hover:scale-110 duration-300" />
    },
    { 
      title: t('services.legal.title'), 
      description: t('services.legal.description'), 
      icon: <Scale size={36} className="transition-transform group-hover:scale-110 duration-300" />
    },
    { 
      title: t('services.regularization.title'), 
      description: t('services.regularization.description'), 
      icon: <FileCheck size={36} className="transition-transform group-hover:scale-110 duration-300" />
    },
    { 
      title: t('services.authentication.title'), 
      description: t('services.authentication.description'), 
      icon: <FileSignature size={36} className="transition-transform group-hover:scale-110 duration-300" />
    },
    { 
      title: t('services.digital.title'), 
      description: t('services.digital.description'), 
      icon: <SquareUser size={36} className="transition-transform group-hover:scale-110 duration-300" />
    },
    { 
      title: t('services.tax.title'), 
      description: t('services.tax.description'), 
      icon: <Receipt size={36} className="transition-transform group-hover:scale-110 duration-300" />
    },
    { 
      title: t('services.domestic.title'), 
      description: t('services.domestic.description'), 
      icon: <UserRound size={36} className="transition-transform group-hover:scale-110 duration-300" />
    }
  ];
  
  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('services.title')}</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;