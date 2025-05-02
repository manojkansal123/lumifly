
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-lumifly-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/f24cd895-98e0-49fa-b35b-d6541b7d9521.png" 
                alt="Lumifly Logo" 
                className="h-10 w-10 mr-2" 
              />
              <span className="font-bold text-xl">Lumifly</span>
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer.companyDescription')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-lumifly-purple transition-colors">{t('footer.aboutUs')}</a></li>
              <li><a href="/#benefits" className="text-gray-300 hover:text-lumifly-purple transition-colors">{t('footer.benefits')}</a></li>
              <li><a href="/#how-it-works" className="text-gray-300 hover:text-lumifly-purple transition-colors">{t('footer.howItWorks')}</a></li>
              <li><a href="/#testimonials" className="text-gray-300 hover:text-lumifly-purple transition-colors">{t('footer.testimonials')}</a></li>
              <li><a href="/#contact" className="text-gray-300 hover:text-lumifly-purple transition-colors">{t('footer.contactUs')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.ourServices')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">{t('footer.communitySolar')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">{t('footer.freeEnergyProgram')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">{t('footer.residentialSolar')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">{t('footer.commercialSolar')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">{t('footer.solarMaintenance')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.contactUs')}</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-lumifly-purple mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{t('footer.address')}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-lumifly-purple mr-2 flex-shrink-0" />
                <span className="text-gray-300">{t('footer.phone')}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-lumifly-purple mr-2 flex-shrink-0" />
                <span className="text-gray-300">{t('footer.email')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>{t('footer.copyright', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
