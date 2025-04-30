import React, { createContext, useState, useContext, useEffect } from "react";

// Define the available languages
export type Language = "en" | "od";

// Define the language context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create translations for both languages
export const translations = {
  en: {
    // Hero Section
    "hero.title.1": "Free Solar Energy",
    "hero.title.2": "Up to 150 Units",
    "hero.title.3": "For Every Customer",
    "hero.subtitle": "Join our community solar program and reduce your energy bills while supporting renewable energy.",
    "hero.cta.primary": "Get Free Solar",
    "hero.cta.secondary": "Learn More",
    "hero.stats.units": "Free Energy Units",
    "hero.stats.savings": "Average Bill Savings",
    "hero.stats.customers": "Happy Customers",
    
    // About Section
    "about.title": "About Our Community Solar",
    "about.subtitle": "We're bringing the power of solar energy to communities while making clean energy accessible to everyone.",
    "about.heading": "Empowering Communities with Free Solar Energy",
    "about.description": "Our mission is to make renewable energy accessible to everyone. We build community solar farms that generate clean energy and share the benefits with local residents. By joining our community solar program, you get free energy up to 150 units every month and contribute to a more sustainable future.",
    "about.feature1.title": "Clean Energy",
    "about.feature1.description": "100% renewable solar power with zero emissions",
    "about.feature2.title": "Community Focused",
    "about.feature2.description": "Solar farms built by and for local communities",
    "about.feature3.title": "Free Energy",
    "about.feature3.description": "Up to 150 units free for every customer",
    "about.feature4.title": "Eco-Friendly",
    "about.feature4.description": "Reducing carbon footprint and fighting climate change",
    
    // Benefits Section
    "benefits.title": "Benefits of Our Solar Program",
    "benefits.subtitle": "Join thousands of satisfied customers who are enjoying free clean energy and contributing to a more sustainable future.",
    
    // How It Works Section
    "howitworks.title": "How It Works",
    "howitworks.subtitle": "Our process is simple and straightforward, allowing you to benefit from solar energy without any hassle.",
    "howitworks.step1.title": "Sign Up",
    "howitworks.step1.description": "Fill out our simple form to join our community solar program. No credit check or upfront costs required.",
    "howitworks.step2.title": "We Build Solar",
    "howitworks.step2.description": "We build and maintain community solar farms in your area, generating clean renewable energy.",
    "howitworks.step3.title": "Energy Production",
    "howitworks.step3.description": "The solar farms produce electricity that flows into the local power grid, powering homes and businesses.",
    "howitworks.step4.title": "Get Free Units",
    "howitworks.step4.description": "You receive up to 150 free energy units every month, credited directly to your regular utility bill.",
    
    // Calculator Section
    "calculator.title": "Savings Calculator",
    "calculator.subtitle": "See how much you could save with our free solar energy program.",
    
    // Testimonial Section
    "testimonials.title": "What Our Customers Say",
    "testimonials.subtitle": "Hear from some of our customers who are enjoying free energy and supporting renewable power.",
    
    // CTA Section
    "cta.title": "Ready to Start Saving with Free Solar Energy?",
    "cta.subtitle": "Join thousands of satisfied customers who are enjoying free energy up to 150 units every month.",
    "cta.button.primary": "Get Started Now",
    "cta.button.secondary": "Learn More",
    "cta.features": "No credit checks • No installation needed • Start saving immediately",
    
    // Contact Section
    "contact.title": "Contact Us",
    "contact.subtitle": "Have questions about our free energy program? Get in touch with our team.",
    
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.benefits": "Benefits",
    "nav.howitworks": "How It Works",
    "nav.contact": "Contact",
    "nav.signin": "Sign In",
    "nav.signup": "Sign Up",
    "nav.dashboard": "Dashboard",
    
    // Language switcher
    "language": "Language",
    "language.english": "English",
    "language.odia": "ଓଡ଼ିଆ",
  },
  od: {
    // Hero Section
    "hero.title.1": "ମାଗଣା ସୌର ଶକ୍ତି",
    "hero.title.2": "150 ୟୁନିଟ୍ ପର୍ଯ୍ୟନ୍ତ",
    "hero.title.3": "ପ୍ରତ୍ୟେକ ଗ୍ରାହକ ପାଇଁ",
    "hero.subtitle": "ଆମର ସମୁଦାୟ ସୌର କାର୍ଯ୍ୟକ୍ରମରେ ଯୋଗ ଦିଅନ୍ତୁ ଏବଂ ନବୀକରଣଯୋଗ୍ୟ ଶକ୍ତିକୁ ସମର୍ଥନ କରି ଆପଣଙ୍କ ଶକ୍ତି ବିଲ୍ କମ୍ କରନ୍ତୁ।",
    "hero.cta.primary": "ମାଗଣା ସୌର ପାଆନ୍ତୁ",
    "hero.cta.secondary": "ଅଧିକ ଜାଣନ୍ତୁ",
    "hero.stats.units": "ମାଗଣା ଶକ୍ତି ୟୁନିଟ୍",
    "hero.stats.savings": "ହାରାହାରି ବିଲ୍ ସଞ୍ଚୟ",
    "hero.stats.customers": "ଖୁସି ଗ୍ରାହକ",
    
    // About Section
    "about.title": "ଆମ ସମୁଦାୟ ସୌର ବିଷୟରେ",
    "about.subtitle": "ଆମେ ସମସ୍ତଙ୍କୁ ସ୍ୱଚ୍ଛ ଶକ୍ତି ସୁଲଭ କରିବା ସହିତ ସମୁଦାୟଙ୍କୁ ସୌର ଶକ୍ତିର ଶକ୍ତି ଆଣୁଛୁ।",
    "about.heading": "ମାଗଣା ସୌର ଶକ୍ତି ସହିତ ସମୁଦାୟକୁ ସଶକ୍ତ କରିବା",
    "about.description": "ଆମର ମିଶନ୍ ହେଉଛି ପ୍ରତ୍ୟେକଙ୍କ ପାଇଁ ନବୀକରଣଯୋଗ୍ୟ ଶକ୍ତିକୁ ସୁଲଭ କରିବା। ଆମେ ସମୁଦାୟ ସୌର ଫାର୍ମ ନିର୍ମାଣ କରୁ ଯାହା ସ୍ୱଚ୍ଛ ଶକ୍ତି ସୃଷ୍ଟି କରେ ଏବଂ ସ୍ଥାନୀୟ ବାସିନ୍ଦାଙ୍କ ସହିତ ଲାଭ ବାଣ୍ଟେ। ଆମର ସମୁଦାୟ ସୌର କାର୍ଯ୍ୟକ୍ରମରେ ଯୋଗ ଦେଇ, ଆପଣ ପ୍ରତି ମାସ 150 ୟୁନିଟ୍ ପର୍ଯ୍ୟନ୍ତ ମାଗଣା ଶକ୍ତି ପାଇବା ସହ ଅଧିକ ସ୍ଥାୟୀ ଭବିଷ୍ୟତରେ ଅବଦାନ ରଖନ୍ତି।",
    "about.feature1.title": "ସ୍ୱଚ୍ଛ ଶକ୍ତି",
    "about.feature1.description": "ଶୂନ୍ୟ ନିର୍ଗମନ ସହିତ 100% ନବୀକରଣଯୋଗ୍ୟ ସୌର ଶକ୍ତି",
    "about.feature2.title": "ସମୁଦାୟ କେନ୍ଦ୍ରିତ",
    "about.feature2.description": "ସ୍ଥାନୀୟ ସମୁଦାୟ ଦ୍ୱାରା ଏବଂ ପାଇଁ ନିର୍ମିତ ସୌର ଫାର୍ମ",
    "about.feature3.title": "ମାଗଣା ଶକ୍ତି",
    "about.feature3.description": "ପ୍ରତ୍ୟେକ ଗ୍ରାହକଙ୍କ ପାଇଁ 150 ୟୁନିଟ୍ ମାଗଣା",
    "about.feature4.title": "ପରିବେଶ ଅନୁକୂଳ",
    "about.feature4.description": "କାର୍ବନ ପଦଚିହ୍ନ କମ୍ କରିବା ଏବଂ ଜଳବାୟୁ ପରିବର୍ତ୍ତନ ବିରୋଧରେ ଲଢ଼େଇ",
    
    // Benefits Section
    "benefits.title": "ଆମ ସୌର କାର୍ଯ୍ୟକ୍ରମର ଲାଭ",
    "benefits.subtitle": "ମାଗଣା ସ୍ୱଚ୍ଛ ଶକ୍ତି ଉପଭୋଗ କରୁଥିବା ଏବଂ ଅଧିକ ସ୍ଥାୟୀ ଭବିଷ୍ୟତରେ ଅବଦାନ ରଖୁଥିବା ହଜାର ହଜାର ସନ୍ତୁଷ୍ଟ ଗ୍ରାହକଙ୍କ ସହ ଯୋଗ ଦିଅନ୍ତୁ।",
    
    // How It Works Section
    "howitworks.title": "ଏହା କିପରି କାମ କରେ",
    "howitworks.subtitle": "ଆମର ପ୍ରକ୍ରିୟା ସରଳ ଏବଂ ସିଧାସଳଖ, ଆପଣଙ୍କୁ ବିନା ହଇରାଣରେ ସୌର ଶକ୍ତିରୁ ଲାଭ ଉଠାଇବାକୁ ଅନୁମତି ଦେଇଥାଏ।",
    "howitworks.step1.title": "ସାଇନ୍ ଅପ୍ କରନ୍ତୁ",
    "howitworks.step1.description": "ଆମର ସମୁଦାୟ ସୌର କାର୍ଯ୍ୟକ୍ରମରେ ଯୋଗ ଦେବାକୁ ଆମର ସରଳ ଫର୍ମ ପୂରଣ କରନ୍ତୁ। କୌଣସି କ୍ରେଡିଟ୍ ଯାଞ୍ଚ କିମ୍ବା ଆଗୁଆ ଖର୍ଚ୍ଚ ଆବଶ୍ୟକ ନାହିଁ।",
    "howitworks.step2.title": "ଆମେ ସୌର ନିର୍ମାଣ କରୁ",
    "howitworks.step2.description": "ଆମେ ଆପଣଙ୍କ ଅଞ୍ଚଳରେ ସମୁଦାୟ ସୌର ଫାର୍ମ ନିର୍ମାଣ ଏବଂ ରକ୍ଷଣାବେକ୍ଷଣ କରୁ, ସ୍ୱଚ୍ଛ ନବୀକରଣଯୋଗ୍ୟ ଶକ୍ତି ସୃଷ୍ଟି କରୁ।",
    "howitworks.step3.title": "ଶକ୍ତି ଉତ୍ପାଦନ",
    "howitworks.step3.description": "ସୌର ଫାର୍ମଗୁଡିକ ବିଦ୍ୟୁତ୍ ଉତ୍ପନ୍ନ କରନ୍ତି ଯାହା ସ୍ଥାନୀୟ ପାୱାର ଗ୍ରିଡ୍ ମଧ୍ୟରେ ପ୍ରବାହିତ ହୁଏ, ଘରୋଇ ଏବଂ ବ୍ୟବସାୟକୁ ଶକ୍ତିଯୁକ୍ତ କରେ।",
    "howitworks.step4.title": "ମାଗଣା ୟୁନିଟ୍ ପାଆନ୍ତୁ",
    "howitworks.step4.description": "ଆପଣ ପ୍ରତି ମାସ 150 ମାଗଣା ଶକ୍ତି ୟୁନିଟ୍ ପାଆନ୍ତି, ସିଧାସଳଖ ଆପଣଙ୍କ ନିୟମିତ ୟୁଟିଲିଟି ବିଲ୍ କୁ କ୍ରେଡିଟ୍ କରାଯାଇଥାଏ।",
    
    // Calculator Section
    "calculator.title": "ସଞ୍ଚୟ କ୍ୟାଲକୁଲେଟର୍",
    "calculator.subtitle": "ଦେଖନ୍ତୁ ଆମର ମାଗଣା ସୌର ଶକ୍ତି କାର୍ଯ୍ୟକ୍ରମ ସହିତ ଆପଣ କେତେ ସଞ୍ଚୟ କରିପାରିବେ।",
    
    // Testimonial Section
    "testimonials.title": "ଆମର ଗ୍ରାହକମାନେ କ'ଣ କହନ୍ତି",
    "testimonials.subtitle": "ମାଗଣା ଶକ୍ତି ଉପଭୋଗ କରୁଥିବା ଏବଂ ନବୀକରଣଯୋଗ୍ୟ ଶକ୍ତିକୁ ସମର୍ଥନ କରୁଥିବା ଆମ ଗ୍ରାହକମାନଙ୍କଠାରୁ ଶୁଣନ୍ତୁ।",
    
    // CTA Section
    "cta.title": "ମାଗଣା ସୌର ଶକ୍ତି ସହିତ ସଞ୍ଚୟ ଆରମ୍ଭ କରିବାକୁ ପ୍ରସ୍ତୁତ?",
    "cta.subtitle": "ପ୍ରତି ମାସ 150 ୟୁନିଟ୍ ପର୍ଯ୍ୟନ୍ତ ମାଗଣା ଶକ୍ତି ଉପଭୋଗ କରୁଥିବା ହଜାର ହଜାର ସନ୍ତୁଷ୍ଟ ଗ୍ରାହକଙ୍କ ସହ ଯୋଗ ଦିଅନ୍ତୁ।",
    "cta.button.primary": "ଏବେ ଆରମ୍ଭ କରନ୍ତୁ",
    "cta.button.secondary": "ଅଧିକ ଜାଣନ୍ତୁ",
    "cta.features": "କୌଣସି କ୍ରେଡିଟ୍ ଯାଞ୍ଚ ନାହିଁ • କୌଣସି ଇନଷ୍ଟଲେସନ୍ ଆବଶ୍ୟକ ନାହିଁ • ତୁରନ୍ତ ସଞ୍ଚୟ ଆରମ୍ଭ କରନ୍ତୁ",
    
    // Contact Section
    "contact.title": "ଆମ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ",
    "contact.subtitle": "ଆମର ମାଗଣା ଶକ୍ତି କାର୍ଯ୍ୟକ୍ରମ ବିଷୟରେ ପ୍ରଶ୍ନ ଅଛି? ଆମ ଟିମ୍ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ।",
    
    // Navigation
    "nav.home": "ମୁଖ୍ୟପୃଷ୍ଠା",
    "nav.about": "ବିଷୟରେ",
    "nav.benefits": "ଲାଭଗୁଡ଼ିକ",
    "nav.howitworks": "ଏହା କିପରି କାମ କରେ",
    "nav.contact": "ଯୋଗାଯୋଗ",
    "nav.signin": "ସାଇନ୍ ଇନ୍",
    "nav.signup": "ସାଇନ୍ ଅପ୍",
    "nav.dashboard": "ଡ୍ୟାସବୋର୍ଡ",
    
    // Language switcher
    "language": "ଭାଷା",
    "language.english": "English",
    "language.odia": "ଓଡ଼ିଆ",
  }
};

// Language provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to get language from localStorage, default to English
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language");
    return (savedLanguage === "od" ? "od" : "en") as Language;
  });

  // Function to set the language and save it to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  // Translation function
  const translate = (key: string): string => {
    return translations[language][key] || key;
  };

  // Set the document language attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
