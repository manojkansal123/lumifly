
import { CheckCircle, Sparkles, Leaf, Home, Shield, Building, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

// Custom animated icon container component
const AnimatedIconContainer = ({ 
  bgColor, 
  children, 
  className = "" 
}: { 
  bgColor: string; 
  children: React.ReactNode; 
  className?: string;
}) => {
  return (
    <div 
      className={cn(
        "rounded-full p-3 w-20 h-20 flex items-center justify-center mb-6 relative overflow-hidden group", 
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${bgColor}30 0%, ${bgColor}15 100%)`,
        boxShadow: `0 5px 15px ${bgColor}20`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
        {children}
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">{t("benefits.title")}</h2>
          <div className="w-24 h-1 bg-solar-yellow mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            {t("benefits.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit Card 1 */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <AnimatedIconContainer bgColor="#f97316">
              <Sparkles size={36} className="text-solar-yellow fill-solar-yellow/10" strokeWidth={1.5} />
            </AnimatedIconContainer>
            <h3 className="text-xl font-bold text-solar-dark mb-3">{t("benefits.card1.title")}</h3>
            <p className="text-gray-600">
              {t("benefits.card1.description")}
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card1.feature1")}</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card1.feature2")}</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card1.feature3")}</span>
              </li>
            </ul>
          </div>

          {/* Benefit Card 2 */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <AnimatedIconContainer bgColor="#10b981">
              <Leaf size={36} className="text-solar-green fill-solar-green/10" strokeWidth={1.5} />
            </AnimatedIconContainer>
            <h3 className="text-xl font-bold text-solar-dark mb-3">{t("benefits.card2.title")}</h3>
            <p className="text-gray-600">
              {t("benefits.card2.description")}
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card2.feature1")}</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card2.feature2")}</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card2.feature3")}</span>
              </li>
            </ul>
          </div>

          {/* Benefit Card 3 */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <AnimatedIconContainer bgColor="#0ea5e9">
              <Home size={36} className="text-solar-blue fill-solar-blue/10" strokeWidth={1.5} />
            </AnimatedIconContainer>
            <h3 className="text-xl font-bold text-solar-dark mb-3">{t("benefits.card3.title")}</h3>
            <p className="text-gray-600">
              {t("benefits.card3.description")}
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card3.feature1")}</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card3.feature2")}</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card3.feature3")}</span>
              </li>
            </ul>
          </div>

          {/* Benefit Card 4 */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <AnimatedIconContainer bgColor="#f97316">
              <Shield size={36} className="text-solar-orange fill-solar-orange/10" strokeWidth={1.5} />
            </AnimatedIconContainer>
            <h3 className="text-xl font-bold text-solar-dark mb-3">{t("benefits.card4.title")}</h3>
            <p className="text-gray-600">
              {t("benefits.card4.description")}
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card4.feature1")}</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card4.feature2")}</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card4.feature3")}</span>
              </li>
            </ul>
          </div>

          {/* Benefit Card 5 */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <AnimatedIconContainer bgColor="#f97316">
              <Building size={36} className="text-solar-yellow fill-solar-yellow/10" strokeWidth={1.5} />
            </AnimatedIconContainer>
            <h3 className="text-xl font-bold text-solar-dark mb-3">{t("benefits.card5.title")}</h3>
            <p className="text-gray-600">
              {t("benefits.card5.description")}
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card5.feature1")}</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card5.feature2")}</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card5.feature3")}</span>
              </li>
            </ul>
          </div>

          {/* Benefit Card 6 */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <AnimatedIconContainer bgColor="#0ea5e9">
              <Zap size={36} className="text-solar-blue fill-solar-blue/10" strokeWidth={1.5} />
            </AnimatedIconContainer>
            <h3 className="text-xl font-bold text-solar-dark mb-3">{t("benefits.card6.title")}</h3>
            <p className="text-gray-600">
              {t("benefits.card6.description")}
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card6.feature1")}</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card6.feature2")}</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>{t("benefits.card6.feature3")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
