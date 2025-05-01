
import { CircleChevronRight } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";

const HowItWorksSection = () => {
  const { t, language } = useLanguage();
  
  // Debug the translations to ensure they're working
  console.log("Current language:", language);
  console.log("Step 1 title translation:", t("howitworks.step1.title"));
  
  const steps = [
    {
      number: "01",
      title: t("howitworks.step1.title"),
      description: t("howitworks.step1.description"),
      color: "yellow",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: t("howitworks.step1.alt")
    },
    {
      number: "02",
      title: t("howitworks.step2.title"),
      description: t("howitworks.step2.description"),
      color: "orange",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      alt: t("howitworks.step2.alt")
    },
    {
      number: "03",
      title: t("howitworks.step3.title"),
      description: t("howitworks.step3.description"),
      color: "green",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      alt: t("howitworks.step3.alt")
    },
    {
      number: "04",
      title: t("howitworks.step4.title"),
      description: t("howitworks.step4.description"),
      color: "blue",
      image: "https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: t("howitworks.step4.alt")
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">{t("howitworks.title")}</h2>
          <div className="w-24 h-1 bg-solar-yellow mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            {t("howitworks.subtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className={`inline-block text-sm font-semibold text-solar-${step.color} mb-2 px-3 py-1 bg-solar-${step.color}/10 rounded-full`}>
                    {t("howitworks.step")} {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-solar-dark mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className="hidden md:flex justify-center items-center relative md:w-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 bg-solar-${step.color} text-white`}>
                    <CircleChevronRight className="h-6 w-6" />
                  </div>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <img 
                    src={step.image}
                    alt={step.alt}
                    className="rounded-lg shadow-lg w-full h-auto object-cover mt-4 md:mt-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
