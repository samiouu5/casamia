import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const isRtl = i18n.language === 'ar';
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    alert('Form submitted! (This is a demo)');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('contact.title')}</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={isRtl ? 'order-2' : ''}>
            <div className="bg-neutral-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6">
                {t('contact.title')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('contact.address')}</h4>
                    <p className="text-neutral-700">
                      Via del Carmine, 23 Napoli (NA) CAP 80142
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('contact.phone')}</h4>
                    <p className="text-neutral-700">
                      339 368 4316, 327 990 7062
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('contact.email')}</h4>
                    <a 
                      href="mailto:simosannak@gmail.com" 
                      className="text-primary-600 hover:underline"
                    >
                      simosannak@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                {/* Casa Mia Location */}
                <div>
                  <h4 className="font-semibold mb-2">Casa Mia Location</h4>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.583290538323!2d14.267719115651268!3d40.85308397931685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b081fdc9d86b3%3A0x5cb3c04afa67a0c5!2sVia%20del%20Carmine%2C%2023%2C%2080142%20Napoli%20NA%2C%20Italy!5e0!3m2!1sen!2sus!4v1626270842377!5m2!1sen!2sus" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    title="Casa Mia Location"
                    className="rounded-lg shadow-sm"
                  ></iframe>
                </div>
                
                {/* Moroccan Consulate Location */}
                <div>
                  <h4 className="font-semibold mb-2">Moroccan Consulate</h4>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.7127873715455!2d14.236876776344657!3d40.82871663750772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0976f66e3b79%3A0x1fa8f5652c7c9ffd!2sConsulat%20G%C3%A9n%C3%A9ral%20du%20Royaume%20du%20Maroc%20%C3%A0%20Naples!5e0!3m2!1sen!2sit!4v1709925097955!5m2!1sen!2sit"
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    title="Moroccan Consulate Location"
                    className="rounded-lg shadow-sm"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          
          <div className={isRtl ? 'order-1' : ''}>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-2xl font-bold mb-6">
                {t('contact.title')}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    {t('contact.formName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    {t('contact.formEmail')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    {t('contact.formMessage')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn btn-primary w-full flex justify-center items-center gap-2"
                >
                  <Send size={18} />
                  {t('contact.formSubmit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;