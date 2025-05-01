
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from '@/context/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    toast({
      title: t("contact.form.success"),
      description: t("contact.form.successMsg"),
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">{t("contact.title")}</h2>
          <div className="w-24 h-1 bg-solar-yellow mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information - Left Side */}
          <div className="bg-solar-dark text-white rounded-lg p-8 relative overflow-hidden">
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%">
                <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                  <circle id="pattern-circle" cx="10" cy="10" r="1.5" fill="#fff"></circle>
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">{t("contact.info.title")}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-solar-yellow rounded-full p-3 mr-4">
                    <MapPin className="h-5 w-5 text-solar-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold">{t("contact.info.location.title")}</h4>
                    <p className="text-gray-300 mt-1">{t("contact.info.location.value")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-solar-yellow rounded-full p-3 mr-4">
                    <Mail className="h-5 w-5 text-solar-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold">{t("contact.info.email.title")}</h4>
                    <p className="text-gray-300 mt-1">{t("contact.info.email.value")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-solar-yellow rounded-full p-3 mr-4">
                    <Phone className="h-5 w-5 text-solar-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold">{t("contact.info.phone.title")}</h4>
                    <p className="text-gray-300 mt-1">{t("contact.info.phone.value")}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-bold mb-3">{t("contact.info.hours.title")}</h4>
                <div className="grid grid-cols-2 gap-2 text-gray-300">
                  <div>{t("contact.info.hours.weekdays")}</div>
                  <div>{t("contact.info.hours.weekdaysTime")}</div>
                  <div>{t("contact.info.hours.saturday")}</div>
                  <div>{t("contact.info.hours.saturdayTime")}</div>
                  <div>{t("contact.info.hours.sunday")}</div>
                  <div>{t("contact.info.hours.sundayTime")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-solar-dark mb-6">{t("contact.form.title")}</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.name")}</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.form.namePlaceholder")}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.email")}</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.form.emailPlaceholder")}
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.phone")}</label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("contact.form.phonePlaceholder")}
                  className="w-full"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.message")}</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.messagePlaceholder")}
                  required
                  className="w-full h-32"
                />
              </div>
              
              <Button type="submit" className="bg-solar-yellow hover:bg-solar-orange text-white w-full md:w-auto">
                {t("contact.form.send")} <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
