
import { Button } from '@/components/ui/button';
import { Sun, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-solar-dark py-16 md:py-20 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="pattern-waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0,50 C20,40 40,60 60,50 C80,40 100,60 120,50 C140,40 160,60 180,50 C200,40 220,60 240,50 L240,100 L0,100 Z" fill="#FFFFFF"></path>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-waves)"></rect>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-solar-yellow/20 p-4 rounded-full">
              <Sun className="h-12 w-12 text-solar-yellow" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("cta.title")}
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            {t("cta.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-solar-yellow hover:bg-solar-orange text-white font-semibold px-8 text-lg">
              {t("cta.button.primary")}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 text-lg">
              {t("cta.button.secondary")} <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg inline-block">
            <p className="text-white text-sm">
              {t("cta.features")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
