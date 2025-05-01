import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the shape of the translations
interface Translations {
  [key: string]: string | Translations;
}

// Define the structure of the language context
interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

// Create the language context with a default value
const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

// Translation files for different languages
const enTranslations = {
  nav: {
    home: "Home",
    about: "About",
    benefits: "Benefits",
    howitworks: "How It Works",
    contact: "Contact",
    signin: "Sign In",
    signup: "Sign Up",
    dashboard: "Dashboard"
  },
  home: {
    heroTitle: "Unlock Free Energy with Community Solar",
    heroSubtitle: "Join our innovative program and start saving on your electricity bills today.",
    learnMore: "Learn More",
    getStarted: "Get Started",
    feature1Title: "Sustainable Energy",
    feature1Description: "Reduce your carbon footprint and support a cleaner environment.",
    feature2Title: "Cost Savings",
    feature2Description: "Lower your monthly electricity bills with free energy credits.",
    feature3Title: "Easy Enrollment",
    feature3Description: "Simple sign-up process with no equipment or installation required.",
    howItWorksTitle: "How It Works",
    howItWorksSubtitle: "Our simple 4-step process gets you free energy quickly and easily.",
    step1Title: "Sign Up",
    step1Description: "Create your account and provide basic information about your energy needs and location.",
    step2Title: "We Build Solar Farm",
    step2Description: "We construct or allocate a portion of our solar farm dedicated to generating your free energy units.",
    step3Title: "Energy Production Begins",
    step3Description: "Your allocated solar panels start generating clean, renewable energy that feeds into the grid.",
    step4Title: "Receive Free Units",
    step4Description: "You receive free energy credits on your utility bill each month, reducing or eliminating your energy costs."
  },
  about: {
    title: "About Us",
    subtitle: "Learn more about our mission to provide sustainable and affordable energy solutions.",
    missionTitle: "Our Mission",
    missionDescription: "To empower communities with access to clean, renewable energy while reducing energy costs and promoting environmental sustainability.",
    visionTitle: "Our Vision",
    visionDescription: "To be a leading provider of community solar programs, transforming the way people access and use energy.",
    teamTitle: "Our Team",
    teamDescription: "Meet the passionate individuals driving our mission forward.",
    teamMember1Name: "John Doe",
    teamMember1Title: "CEO",
    teamMember2Name: "Jane Smith",
    teamMember2Title: "CTO"
  },
  benefits: {
    title: "Benefits of Community Solar",
    subtitle: "Discover the advantages of joining our community solar program.",
    benefit1Title: "Save Money",
    benefit1Description: "Reduce your monthly electricity bills with free energy credits.",
    benefit2Title: "Support Sustainability",
    benefit2Description: "Contribute to a cleaner environment by using renewable energy.",
    benefit3Title: "No Installation",
    benefit3Description: "Enjoy the benefits of solar energy without installing any equipment on your property.",
    benefit4Title: "Easy Enrollment",
    benefit4Description: "Simple and hassle-free sign-up process.",
    benefit5Title: "Community Support",
    benefit5Description: "Join a community of like-minded individuals supporting sustainable energy.",
    benefit6Title: "Reliable Energy",
    benefit6Description: "Access a stable and reliable source of clean energy."
  },
  contact: {
    title: "Contact Us",
    subtitle: "Have questions? Reach out to our team for assistance.",
    info: {
      title: "Contact Information",
      location: {
        title: "Location",
        value: "123 Solar Street, Sunshine City, SC 12345"
      },
      email: {
        title: "Email",
        value: "info@sunnyfree.com"
      },
      phone: {
        title: "Phone",
        value: "(123) 456-7890"
      },
      hours: {
        title: "Hours of Operation",
        weekdays: "Monday - Friday",
        weekdaysTime: "9:00 AM - 5:00 PM",
        saturday: "Saturday",
        saturdayTime: "10:00 AM - 2:00 PM",
        sunday: "Sunday",
        sundayTime: "Closed"
      }
    },
    form: {
      title: "Send us a Message",
      name: "Your Name",
      namePlaceholder: "John Doe",
      email: "Your Email",
      emailPlaceholder: "john@example.com",
      phone: "Your Phone",
      phonePlaceholder: "(123) 456-7890",
      message: "Message",
      messagePlaceholder: "How can we help you?",
      send: "Send Message",
      success: "Success!",
      successMsg: "Your message has been sent. We'll get back to you soon."
    }
  },
  language: "Language",
  "language.english": "English",
  "language.odia": "Odia",
  footer: {
    companyDescription: "Innovative solar technology solutions empowering businesses and individuals.",
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    benefits: "Benefits",
    howItWorks: "How It Works",
    testimonials: "Testimonials",
    contactUs: "Contact Us",
    ourServices: "Our Services",
    communitySolar: "Community Solar",
    freeEnergyProgram: "Free Energy Program",
    residentialSolar: "Residential Solar",
    commercialSolar: "Commercial Solar",
    solarMaintenance: "Solar Maintenance",
    address: "123 Solar Street, Sunshine City, SC 12345",
    phone: "(123) 456-7890",
    email: "info@lumifly.com",
    copyright: "Lumifly Technologies. All rights reserved.",
  },
  howitworks: {
    title: "How It Works",
    subtitle: "Our simple 4-step process gets you free energy quickly and easily.",
    step: "Step",
    step1: {
      title: "Sign Up",
      description: "Create your account and provide basic information about your energy needs and location.",
      alt: "Sign up process"
    },
    step2: {
      title: "We Build Solar Farm",
      description: "We construct or allocate a portion of our solar farm dedicated to generating your free energy units.",
      alt: "Solar farm construction"
    },
    step3: {
      title: "Energy Production Begins",
      description: "Your allocated solar panels start generating clean, renewable energy that feeds into the grid.",
      alt: "Energy production"
    },
    step4: {
      title: "Receive Free Units",
      description: "You receive free energy credits on your utility bill each month, reducing or eliminating your energy costs.",
      alt: "Free energy units"
    }
  },
};

const odTranslations = {
  nav: {
    home: "ଘର",
    about: "ଆମ ବିଷୟରେ",
    benefits: "ଲାଭ",
    howitworks: "ଏହା କିପରି କାମ କରେ",
    contact: "ସମ୍ପର୍କ",
    signin: "ସାଇନ୍ ଇନ୍",
    signup: "ସାଇନ୍ ଅପ୍",
    dashboard: "ଡ୍ୟାସବୋର୍ଡ"
  },
   home: {
    heroTitle: "ସାମୁଦାୟିକ ସୌର ସହିତ ମାଗଣା ଶକ୍ତି ଅନଲକ୍ କରନ୍ତୁ",
    heroSubtitle: "ଆମର ଅଭିନବ କାର୍ଯ୍ୟକ୍ରମରେ ଯୋଗ ଦିଅନ୍ତୁ ଏବଂ ଆଜି ତୁମର ବିଦ୍ୟୁତ୍ ବିଲ୍ ସଞ୍ଚୟ କରିବା ଆରମ୍ଭ କରନ୍ତୁ |",
    learnMore: "ଅଧିକ ଜାଣନ୍ତୁ",
    getStarted: "ଆରମ୍ଭ କରନ୍ତୁ",
    feature1Title: "ସ୍ଥାୟୀ ଶକ୍ତି",
    feature1Description: "ତୁମର କାର୍ବନ ଫୁଟପ୍ରିଣ୍ଟ ହ୍ରାସ କର ଏବଂ ଏକ ସ୍ୱଚ୍ଛ ପରିବେଶକୁ ସମର୍ଥନ କର |",
    feature2Title: "ଖର୍ଚ୍ଚ ସଞ୍ଚୟ",
    feature2Description: "ମାଗଣା ଶକ୍ତି କ୍ରେଡିଟ୍ ସହିତ ତୁମର ମାସିକ ବିଦ୍ୟୁତ୍ ବିଲ୍ କମ୍ କର |",
    feature3Title: "ସହଜ ନାମଲେଖା",
    feature3Description: "କ equipment ଣସି ଉପକରଣ କିମ୍ବା ସ୍ଥାପନ ଆବଶ୍ୟକ ବିନା ସରଳ ସାଇନ୍-ଅପ୍ ପ୍ରକ୍ରିୟା |",
    howItWorksTitle: "ଏହା କିପରି କାମ କରେ",
    howItWorksSubtitle: "ଆମର ସରଳ 4-ପଦକ୍ଷେପ ପ୍ରକ୍ରିୟା ଆପଣଙ୍କୁ ଶୀଘ୍ର ଏବଂ ସହଜରେ ମାଗଣା ଶକ୍ତି ପ୍ରଦାନ କରେ |",
    step1Title: "ସାଇନ୍ ଅପ୍ କରନ୍ତୁ",
    step1Description: "ତୁମର ଆକାଉଣ୍ଟ ତିଆରି କର ଏବଂ ତୁମର ଶକ୍ତି ଆବଶ୍ୟକତା ଏବଂ ଅବସ୍ଥାନ ବିଷୟରେ ମ basic ଳିକ ସୂଚନା ପ୍ରଦାନ କର |",
    step2Title: "ଆମେ ସୋଲାର୍ ଫାର୍ମ ନିର୍ମାଣ କରୁ",
    step2Description: "ଆମେ ତୁମର ମାଗଣା ଶକ୍ତି ୟୁନିଟ୍ ଉତ୍ପାଦନ ପାଇଁ ଉତ୍ସର୍ଗୀକୃତ ଆମର ସୋଲାର୍ ଫାର୍ମର ଏକ ଅଂଶ ନିର୍ମାଣ କିମ୍ବା ଆବଣ୍ଟନ କରୁ |",
    step3Title: "ଶକ୍ତି ଉତ୍ପାଦନ ଆରମ୍ଭ ହୁଏ",
    step3Description: "ତୁମର ଆବଣ୍ଟିତ ସୋଲାର୍ ପ୍ୟାନେଲ୍ ସ୍ clean ିଚ୍ଛ, ନବୀକରଣୀୟ ଶକ୍ତି ଉତ୍ପାଦନ କରିବା ଆରମ୍ଭ କରେ ଯାହା ଗ୍ରୀଡ୍ ରେ ଖାଇଥାଏ |",
    step4Title: "ମାଗଣା ୟୁନିଟ୍ ଗ୍ରହଣ କରନ୍ତୁ",
    step4Description: "ପ୍ରତି ମାସରେ ତୁମର ଉପଯୋଗୀତା ବିଲ୍ ଉପରେ ତୁମେ ମାଗଣା ଶକ୍ତି କ୍ରେଡିଟ୍ ପାଇବ, ତୁମର ଶକ୍ତି ଖର୍ଚ୍ଚ ହ୍ରାସ କିମ୍ବା ହ୍ରାସ କରିବ |"
  },
  about: {
    title: "ଆମ ବିଷୟରେ",
    subtitle: "ସ୍ଥାୟୀ ଏବଂ ସୁଲଭ ଶକ୍ତି ସମାଧାନ ଯୋଗାଇବାର ଆମର ମିଶନ୍ ବିଷୟରେ ଅଧିକ ଜାଣନ୍ତୁ |",
    missionTitle: "ଆମର ମିଶନ୍",
    missionDescription: "ଶକ୍ତି ଖର୍ଚ୍ଚ ହ୍ରାସ କରିବା ଏବଂ ପରିବେଶ ସ୍ଥାୟୀତ୍ୱକୁ ପ୍ରୋତ୍ସାହିତ କରିବା ସହିତ ସ୍ୱଚ୍ଛ, ନବୀକରଣୀୟ ଶକ୍ତିରେ ପ୍ରବେଶ ସହିତ ସମ୍ପ୍ରଦାୟଗୁଡ଼ିକୁ ସଶକ୍ତ କରିବା |",
    visionTitle: "ଆମର ଦୃଷ୍ଟି",
    visionDescription: "ସାମୁଦାୟିକ ସୋଲାର୍ ପ୍ରୋଗ୍ରାମଗୁଡ଼ିକର ଏକ ଅଗ୍ରଣୀ ପ୍ରଦାନକାରୀ ହେବା, ଲୋକମାନେ ଶକ୍ତି ପ୍ରବେଶ ଏବଂ ବ୍ୟବହାର କରିବାର ଉପାୟକୁ ରୂପାନ୍ତର କରିବା |",
    teamTitle: "ଆମର ଦଳ",
    teamDescription: "ଆମର ମିଶନ୍ ଆଗକୁ ବ driving ାଇବାରେ ଆଗ୍ରହୀ ବ୍ୟକ୍ତିଙ୍କୁ ଭେଟନ୍ତୁ |",
    teamMember1Name: "ଜନ୍ ଡୋ",
    teamMember1Title: "ସିଇଓ",
    teamMember2Name: "ଜେନ ସ୍ମିଥ୍",
    teamMember2Title: "ସିଟିଓ"
  },
  benefits: {
    title: "ସାମୁଦାୟିକ ସୋଲାରର ଉପକାରିତା",
    subtitle: "ଆମର ସାମୁଦାୟିକ ସୋଲାର୍ ପ୍ରୋଗ୍ରାମରେ ଯୋଗଦେବାର ସୁବିଧାଗୁଡ଼ିକ ଆବିଷ୍କାର କରନ୍ତୁ |",
    benefit1Title: "ଟଙ୍କା ସଞ୍ଚୟ କରନ୍ତୁ",
    benefit1Description: "ମାଗଣା ଶକ୍ତି କ୍ରେଡିଟ୍ ସହିତ ତୁମର ମାସିକ ବିଦ୍ୟୁତ୍ ବିଲ୍ କମ୍ କର |",
    benefit2Title: "ସ୍ଥାୟୀତାକୁ ସମର୍ଥନ କରନ୍ତୁ",
    benefit2Description: "ନବୀକରଣୀୟ ଶକ୍ତି ବ୍ୟବହାର କରି ଏକ ସ୍ୱଚ୍ଛ ପରିବେଶରେ ସହାୟକ ହୁଅନ୍ତୁ |",
    benefit3Title: "କ Installation ଣସି ସ୍ଥାପନ ନାହିଁ",
    benefit3Description: "ତୁମର ସମ୍ପତ୍ତିରେ କ equipment ଣସି ଉପକରଣ ସ୍ଥାପନ ନକରି ସୋଲାର୍ ଶକ୍ତିର ଲାଭ ଉପଭୋଗ କର |",
    benefit4Title: "ସହଜ ନାମଲେଖା",
    benefit4Description: "ସରଳ ଏବଂ ଅସୁବିଧାମୁକ୍ତ ସାଇନ୍-ଅପ୍ ପ୍ରକ୍ରିୟା |",
    benefit5Title: "ସମ୍ପ୍ରଦାୟ ସମର୍ଥନ",
    benefit5Description: "ସ୍ଥାୟୀ ଶକ୍ତିକୁ ସମର୍ଥନ କରୁଥିବା ସମାନ ଚିନ୍ତାଧାରା ଥିବା ବ୍ୟକ୍ତିଙ୍କ ସହିତ ଏକ ସମ୍ପ୍ରଦାୟରେ ଯୋଗ ଦିଅନ୍ତୁ |",
    benefit6Title: "ବିଶ୍ୱସ୍ତ ଶକ୍ତି",
    benefit6Description: "ସ୍ୱଚ୍ଛ ଶକ୍ତିର ଏକ ସ୍ଥିର ଏବଂ ବିଶ୍ୱସ୍ତ ଉତ୍ସକୁ ପ୍ରବେଶ କରନ୍ତୁ |"
  },
  contact: {
    title: "ଯୋଗାଯୋଗ କରନ୍ତୁ",
    subtitle: "ପ୍ରଶ୍ନ ଅଛି? ସହାୟତା ପାଇଁ ଆମ ଦଳ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ |",
    info: {
      title: "ସମ୍ପର୍କ ସୂଚନା",
      location: {
        title: "ସ୍ଥାନ",
        value: "123 ସୋଲାର୍ ଷ୍ଟ୍ରିଟ୍, ସନସାଇନ୍ ସିଟି, SC 12345"
      },
      email: {
        title: "ଇମେଲ୍",
        value: "info@sunnyfree.com"
      },
      phone: {
        title: "ଫୋନ୍",
        value: "(123) 456-7890"
      },
      hours: {
        title: "କାର୍ଯ୍ୟ ସମୟ",
        weekdays: "ସୋମବାର - ଶୁକ୍ରବାର",
        weekdaysTime: "ସକାଳ 9:00 - ସନ୍ଧ୍ୟା 5:00",
        saturday: "ଶନିବାର",
        saturdayTime: "ସକାଳ 10:00 - ଅପରାହ୍ନ 2:00",
        sunday: "ରବିବାର",
        sundayTime: "ବନ୍ଦ"
      }
    },
    form: {
      title: "ଆମକୁ ଏକ ବାର୍ତ୍ତା ପଠାନ୍ତୁ",
      name: "ତୁମର ନାମ",
      namePlaceholder: "ଜନ୍ ଡୋ",
      email: "ତୁମର ଇମେଲ୍",
      emailPlaceholder: "john@example.com",
      phone: "ତୁମର ଫୋନ୍",
      phonePlaceholder: "(123) 456-7890",
      message: "ବାର୍ତ୍ତା",
      messagePlaceholder: "ଆମେ ତୁମକୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବା?",
      send: "ବାର୍ତ୍ତା ପଠାନ୍ତୁ",
      success: "ସଫଳତା!",
      successMsg: "ତୁମର ବାର୍ତ୍ତା ପଠାଯାଇଛି | ଆମେ ଖୁବ୍ ଶୀଘ୍ର ତୁମ ପାଖକୁ ଫେରିବୁ।"
    }
  },
  language: "ଭାଷା",
  "language.english": "ଇଂରାଜୀ",
  "language.odia": "ଓଡିଆ",
  footer: {
    companyDescription: "ବ୍ୟବସାୟ ଏବଂ ବ୍ୟକ୍ତିମାନଙ୍କୁ ସଶକ୍ତ କରୁଥିବା ଅଭିନବ ସୌର ପ୍ରଯୁକ୍ତି ସମାଧାନ।",
    quickLinks: "ଦ୍ରୁତ ଲିଙ୍କ୍",
    aboutUs: "ଆମ ବିଷୟରେ",
    benefits: "ଲାଭ",
    howItWorks: "ଏହା କିପରି କାମ କରେ",
    testimonials: "ପ୍ରଶଂସାପତ୍ର",
    contactUs: "ଆମ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ",
    ourServices: "ଆମର ସେବା",
    communitySolar: "ସାମୁଦାୟିକ ସୌର",
    freeEnergyProgram: "ମୁକ୍ତ ଶକ୍ତି କାର୍ଯ୍ୟକ୍ରମ",
    residentialSolar: "ଆବାସିକ ସୌର",
    commercialSolar: "ବାଣିଜ୍ୟିକ ସୌର",
    solarMaintenance: "ସୌର ରକ୍ଷଣାବେକ୍ଷଣ",
    address: "୧୨୩ ସୌର ଷ୍ଟ୍ରିଟ୍, ସନସାଇନ୍ ସିଟି, SC ୧୨୩୪୫",
    phone: "(୧୨୩) ୪୫୬-୭୮୯୦",
    email: "info@lumifly.com",
    copyright: "ଲୁମିଫ୍ଲାଇ ଟେକ୍ନୋଲୋଜିସ୍। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।",
  },
  howitworks: {
    title: "ଏହା କିପରି କାମ କରେ",
    subtitle: "ଆମର ସରଳ ୪-ପଦକ୍ଷେପ ପ୍ରକ୍ରିୟା ଆପଣଙ୍କୁ ଶୀଘ୍ର ଏବଂ ସହଜରେ ମୁକ୍ତ ଶକ୍ତି ପ୍ରଦାନ କରେ।",
    step: "ପଦକ୍ଷେପ",
    step1: {
      title: "ସାଇନ୍ ଅପ୍ କରନ୍ତୁ",
      description: "ଆପଣଙ୍କର ଆକାଉଣ୍ଟ ତିଆରି କରନ୍ତୁ ଏବଂ ଆପଣଙ୍କ ଶକ୍ତି ଆବଶ୍ୟକତା ଏବଂ ଅବସ୍ଥାନ ବିଷୟରେ ମୌଳିକ ସୂଚନା ପ୍ରଦାନ କରନ୍ତୁ।",
      alt: "ସାଇନ୍ ଅପ୍ ପ୍ରକ୍ରିୟା"
    },
    step2: {
      title: "ଆମେ ସୌର ଫାର୍ମ ନିର୍ମାଣ କରିବା",
      description: "ଆମେ ଆପଣଙ୍କର ମାଗଣା ଶକ୍ତି ୟୁନିଟ୍ ଉତ୍ପାଦନ ପାଇଁ ଉତ୍ସର୍ଗୀକୃତ ଆମର ସୌର ଫାର୍ମର ଏକ ଅଂଶ ନିର୍ମାଣ କିମ୍ବା ବଣ୍ଟନ କରୁ।",
      alt: "ସୌର ଫାର୍ମ ନିର୍ମାଣ"
    },
    step3: {
      title: "ଶକ୍ତି ଉତ୍ପାଦନ ଆରମ୍ଭ ହୁଏ",
      description: "ଆପଣଙ୍କର ବଣ୍ଟନ କରାଯାଇଥିବା ସୌର ପ୍ୟାନେଲ୍ ଗ୍ରିଡ୍‌କୁ ଖାଉଥିବା ସ୍ୱଚ୍ଛ, ନବୀକରଣଯୋଗ୍ୟ ଶକ୍ତି ଉତ୍ପନ୍ନ କରିବା ଆରମ୍ଭ କରେ।",
      alt: "ଶକ୍ତି ଉତ୍ପାଦନ"
    },
    step4: {
      title: "ମୁକ୍ତ ୟୁନିଟ୍ ଗ୍ରହଣ କରନ୍ତୁ",
      description: "ଆପଣ ପ୍ରତି ମାସ ଆପଣଙ୍କ ଉପଯୋଗୀତା ବିଲରେ ମାଗଣା ଶକ୍ତି କ୍ରେଡିଟ୍ ପାଆନ୍ତି, ଯାହା ଆପଣଙ୍କ ଶକ୍ତି ଖର୍ଚ୍ଚକୁ କମ୍ କିମ୍ବା ଦୂର କରେ।",
      alt: "ମୁକ୍ତ ଶକ୍ତି ୟୁନିଟ୍"
    }
  },
};

// Language Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>(localStorage.getItem('lang') || 'en');

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const translations = language === 'en' ? enTranslations : odTranslations;

  const t = (key: string, params: Record<string, string | number> = {}) => {
    let translation = key
      .split('.')
      .reduce((obj: any, i: string) => {
        return obj ? obj[i] : undefined;
      }, translations);

    if (typeof translation === 'string') {
      Object.keys(params).forEach(paramKey => {
        translation = translation.replace(`{{${paramKey}}}`, String(params[paramKey]));
      });
      return translation;
    }

    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to consume the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
