
import { Sun, Users, Zap, Leaf, Image } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">{t("about.title")}</h2>
          <div className="w-24 h-1 bg-solar-yellow mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-solar-yellow opacity-20 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                alt="Community solar farm landscape" 
                loading="lazy"
                className="rounded-lg shadow-lg w-full h-auto object-cover relative z-10 group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const imgElement = e.target as HTMLImageElement;
                  imgElement.onerror = null;
                  imgElement.src = '/placeholder.svg';
                }}
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-solar-blue opacity-20 rounded-lg"></div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-solar-dark mb-6">
              {t("about.heading")}
            </h3>
            <p className="text-gray-600 mb-8">
              {t("about.description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-solar-yellow/10 p-3 rounded-lg mr-4">
                  <Sun className="h-6 w-6 text-solar-yellow" />
                </div>
                <div>
                  <h4 className="font-bold text-solar-dark mb-1">{t("about.feature1.title")}</h4>
                  <p className="text-gray-600 text-sm">{t("about.feature1.description")}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-solar-green/10 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-solar-green" />
                </div>
                <div>
                  <h4 className="font-bold text-solar-dark mb-1">{t("about.feature2.title")}</h4>
                  <p className="text-gray-600 text-sm">{t("about.feature2.description")}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-solar-orange/10 p-3 rounded-lg mr-4">
                  <Zap className="h-6 w-6 text-solar-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-solar-dark mb-1">{t("about.feature3.title")}</h4>
                  <p className="text-gray-600 text-sm">{t("about.feature3.description")}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-solar-blue/10 p-3 rounded-lg mr-4">
                  <Leaf className="h-6 w-6 text-solar-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-solar-dark mb-1">{t("about.feature4.title")}</h4>
                  <p className="text-gray-600 text-sm">{t("about.feature4.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
