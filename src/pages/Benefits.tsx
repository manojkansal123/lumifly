
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Sparkles, Leaf, Home, Shield, Building, Zap, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
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

const Benefits = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-solar-yellow/10 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-solar-dark mb-6">{t("benefitspage.hero.title")}</h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                {t("benefitspage.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Main Benefits Section */}
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

        {/* CTA Section */}
        <section className="bg-solar-dark py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t("benefitspage.cta.title")}</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              {t("benefitspage.cta.subtitle")}
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button size="lg" className="bg-solar-yellow hover:bg-solar-orange text-solar-dark">
                {t("benefitspage.cta.button1")} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  {t("benefitspage.cta.button2")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Benefits;
