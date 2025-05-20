import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo className="text-white mb-4" />
            <p className="text-neutral-300 mt-4 max-w-xs">
              {t('meta.title')}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">{t('navigation.about')}</h4>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-neutral-300 hover:text-white transition-colors">
                    {t('navigation.home')}
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-neutral-300 hover:text-white transition-colors">
                    {t('navigation.about')}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-neutral-300 hover:text-white transition-colors">
                    {t('navigation.services')}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-neutral-300 hover:text-white transition-colors">
                    {t('navigation.contact')}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">{t('contact.title')}</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">Via del Carmine, 23 Napoli (NA) CAP 80142</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">339 368 4316, 327 990 7062</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary-400 flex-shrink-0" />
                <a href="mailto:simosannak@gmail.com" className="text-neutral-300 hover:text-white transition-colors">
                  simosannak@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 mt-8 text-center">
          <p className="text-neutral-400 text-sm">
            &copy; {currentYear} Casa Mia. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;