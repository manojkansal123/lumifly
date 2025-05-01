
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
    "benefits.card1.title": "Free Energy Units",
    "benefits.card1.description": "Get up to 150 units of free electricity every month. That's significant savings on your power bill.",
    "benefits.card1.feature1": "Zero cost for the first 150 units",
    "benefits.card1.feature2": "Discounted rates beyond free units",
    "benefits.card1.feature3": "Average annual savings of $500+",
    
    "benefits.card2.title": "Environmental Impact",
    "benefits.card2.description": "Reduce your carbon footprint and contribute to a cleaner environment with renewable energy.",
    "benefits.card2.feature1": "Reduce CO₂ emissions",
    "benefits.card2.feature2": "Support renewable energy growth",
    "benefits.card2.feature3": "Combat climate change locally",
    
    "benefits.card3.title": "No Installation Needed",
    "benefits.card3.description": "Benefit from solar without installing panels on your property. No maintenance or upfront costs.",
    "benefits.card3.feature1": "No rooftop installation required",
    "benefits.card3.feature2": "Zero maintenance responsibilities",
    "benefits.card3.feature3": "Works for renters and homeowners",
    
    "benefits.card4.title": "Energy Security",
    "benefits.card4.description": "Protect yourself from rising energy costs and grid outages with local renewable power.",
    "benefits.card4.feature1": "Stable energy costs",
    "benefits.card4.feature2": "Reduced dependency on the grid",
    "benefits.card4.feature3": "Protection from utility price hikes",
    
    "benefits.card5.title": "Community Support",
    "benefits.card5.description": "Strengthen your local community by supporting local jobs and shared infrastructure.",
    "benefits.card5.feature1": "Creates local green jobs",
    "benefits.card5.feature2": "Builds community resilience",
    "benefits.card5.feature3": "Supports local energy independence",
    
    "benefits.card6.title": "Simple Signup Process",
    "benefits.card6.description": "Getting started is easy with our streamlined enrollment process and dedicated support team.",
    "benefits.card6.feature1": "Quick 5-minute application",
    "benefits.card6.feature2": "No credit checks required",
    "benefits.card6.feature3": "Dedicated customer support",
    
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
    "calculator.input.bill": "Your Average Monthly Electric Bill",
    "calculator.input.consumption": "Your Monthly Energy Consumption (kWh)",
    "calculator.info": "Our program provides 150 free units of electricity every month. Adjust your current bill and consumption to see your potential savings.",
    "calculator.results.title": "Your Estimated Savings",
    "calculator.results.freeUnits": "Value of Free Units",
    "calculator.results.freeLabel": "150 Free Units",
    "calculator.results.newBill": "New Monthly Bill",
    "calculator.results.remainingUnits": "Units",
    "calculator.results.monthlySavings": "Monthly Savings",
    "calculator.results.savingsPercent": "Savings",
    "calculator.results.annualSavings": "Your Annual Savings",
    "calculator.results.signUp": "Sign Up Now & Start Saving",
    
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
    "contact.info.title": "Get In Touch",
    "contact.info.location.title": "Our Location",
    "contact.info.location.value": "123 Solar Street\nSunshine City, SC 12345",
    "contact.info.email.title": "Email Us",
    "contact.info.email.value": "info@sunnyfree.com\nsupport@sunnyfree.com",
    "contact.info.phone.title": "Call Us",
    "contact.info.phone.value": "(123) 456-7890\n(987) 654-3210",
    "contact.info.hours.title": "Hours of Operation",
    "contact.info.hours.weekdays": "Monday - Friday:",
    "contact.info.hours.weekdaysTime": "9:00 AM - 6:00 PM",
    "contact.info.hours.saturday": "Saturday:",
    "contact.info.hours.saturdayTime": "10:00 AM - 4:00 PM",
    "contact.info.hours.sunday": "Sunday:",
    "contact.info.hours.sundayTime": "Closed",
    "contact.form.title": "Send Us a Message",
    "contact.form.name": "Your Name",
    "contact.form.namePlaceholder": "John Doe",
    "contact.form.email": "Email Address",
    "contact.form.emailPlaceholder": "john@example.com",
    "contact.form.phone": "Phone Number",
    "contact.form.phonePlaceholder": "(123) 456-7890",
    "contact.form.message": "Your Message",
    "contact.form.messagePlaceholder": "How can we help you today?",
    "contact.form.send": "Send Message",
    "contact.form.success": "Message Sent",
    "contact.form.successMsg": "Thank you for your message! We will get back to you soon.",
    
    // About Us Page
    "aboutus.title": "About SunnyFree",
    "aboutus.subtitle": "Pioneering community solar solutions with a mission to make clean, renewable energy accessible to everyone through our free energy program.",
    "aboutus.story.title": "Our Story",
    "aboutus.story.p1": "SunnyFree was founded in 2020 with a simple but powerful vision: to democratize access to clean energy. We recognized that despite growing awareness about climate change and the benefits of renewable energy, many communities were being left behind in the green energy revolution.",
    "aboutus.story.p2": "Our founders, a team of renewable energy experts and community advocates, came together with a groundbreaking idea—create community-owned solar farms that could provide free energy to households while significantly reducing carbon emissions.",
    "aboutus.story.p3": "Today, we've expanded to multiple locations across the country, powering thousands of homes with clean, renewable energy and saving communities millions in energy costs through our innovative free energy program providing up to 150 units per household.",
    "aboutus.mission.title": "Our Mission & Values",
    "aboutus.mission.subtitle": "We're guided by core principles that define who we are and how we operate.",
    "aboutus.mission.mission": "Our Mission",
    "aboutus.mission.missionText": "To accelerate the transition to sustainable energy by making solar power accessible to all communities through innovative sharing models that provide free energy while reducing environmental impact.",
    "aboutus.mission.vision": "Our Vision",
    "aboutus.mission.visionText": "A world where clean energy is the standard, not the exception, and where every community benefits from sustainable power generation regardless of socioeconomic status.",
    "aboutus.mission.values": "Our Values",
    "aboutus.mission.valuesText": "We believe in sustainability, community empowerment, accessibility, innovation, and transparency in everything we do to create a more equitable energy future.",
    "aboutus.team.title": "Our Leadership Team",
    "aboutus.team.subtitle": "Meet the passionate experts leading our mission to revolutionize community solar energy.",
    "aboutus.team.member1.name": "Sarah Johnson",
    "aboutus.team.member1.role": "CEO & Co-Founder",
    "aboutus.team.member1.bio": "With 15+ years in renewable energy, Sarah leads our mission to democratize solar power.",
    "aboutus.team.member2.name": "Michael Chen",
    "aboutus.team.member2.role": "CTO & Co-Founder",
    "aboutus.team.member2.bio": "Michael brings cutting-edge engineering expertise to optimize our solar farm technology.",
    "aboutus.team.member3.name": "Amara Patel",
    "aboutus.team.member3.role": "COO",
    "aboutus.team.member3.bio": "Amara ensures smooth operations and community engagement in all our solar projects.",
    "aboutus.impact.title": "Our Impact",
    "aboutus.impact.subtitle": "We're proud of what we've accomplished in our journey to revolutionize community solar energy.",
    "aboutus.impact.stat1.value": "25+",
    "aboutus.impact.stat1.label": "Community Solar Farms",
    "aboutus.impact.stat2.value": "15,000+",
    "aboutus.impact.stat2.label": "Households Powered",
    "aboutus.impact.stat3.value": "200K+",
    "aboutus.impact.stat3.label": "Tons of CO2 Offset",
    "aboutus.impact.stat4.value": "5+",
    "aboutus.impact.stat4.label": "Years of Operation",
    "aboutus.cta.title": "Join Our Free Energy Movement",
    "aboutus.cta.subtitle": "Be part of our mission to make clean energy accessible to everyone. Get up to 150 free energy units monthly.",
    "aboutus.cta.button1": "Contact Us",
    "aboutus.cta.button2": "Learn How It Works",
    
    // Benefits Page
    "benefitspage.hero.title": "Benefits of Our Solar Program",
    "benefitspage.hero.subtitle": "Discover how our community solar program can help you save money while contributing to a sustainable future.",
    "benefitspage.cta.title": "Ready to Start Saving?",
    "benefitspage.cta.subtitle": "Join our community solar program today and start enjoying free energy units every month.",
    "benefitspage.cta.button1": "Sign Up Now",
    "benefitspage.cta.button2": "Learn How It Works",
    
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.benefits": "Benefits",
    "nav.howitworks": "How It Works",
    "nav.contact": "Contact",
    "nav.signin": "Sign In",
    "nav.signup": "Sign Up",
    "nav.dashboard": "Dashboard",
    
    // Footer
    "footer.about": "About Us",
    "footer.about.text": "SunnyFree provides free solar energy units to communities through our innovative program. Join thousands of households already saving with clean energy.",
    "footer.links": "Quick Links",
    "footer.links.home": "Home",
    "footer.links.about": "About Us",
    "footer.links.benefits": "Benefits",
    "footer.links.how": "How It Works",
    "footer.links.faq": "FAQ",
    "footer.links.contact": "Contact Us",
    "footer.legal": "Legal",
    "footer.legal.terms": "Terms of Service",
    "footer.legal.privacy": "Privacy Policy",
    "footer.legal.cookies": "Cookie Policy",
    "footer.subscribe": "Stay Updated",
    "footer.subscribe.text": "Subscribe to our newsletter for the latest updates and offers.",
    "footer.subscribe.placeholder": "Your email address",
    "footer.subscribe.button": "Subscribe",
    "footer.copyright": "© 2024 SunnyFree. All rights reserved.",
    
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
    "benefits.card1.title": "ମାଗଣା ଶକ୍ତି ୟୁନିଟ୍",
    "benefits.card1.description": "ପ୍ରତି ମାସ 150 ୟୁନିଟ୍ ପର୍ଯ୍ୟନ୍ତ ମାଗଣା ବିଦ୍ୟୁତ୍ ପାଆନ୍ତୁ। ତାହା ଆପଣଙ୍କ ବିଦ୍ୟୁତ୍ ବିଲ୍ ରେ ଯଥେଷ୍ଟ ସଞ୍ଚୟ।",
    "benefits.card1.feature1": "ପ୍ରଥମ 150 ୟୁନିଟ୍ ପାଇଁ ଶୂନ୍ୟ ମୂଲ୍ୟ",
    "benefits.card1.feature2": "ମାଗଣା ୟୁନିଟ୍ ଠାରୁ ଅଧିକ ପାଇଁ ରିହାତି ହାର",
    "benefits.card1.feature3": "ବାର୍ଷିକ $500+ ହାରାହାରି ସଞ୍ଚୟ",
    
    "benefits.card2.title": "ପରିବେଶ ପ୍ରଭାବ",
    "benefits.card2.description": "ନବୀକରଣଯୋଗ୍ୟ ଶକ୍ତି ସହ ଆପଣଙ୍କର କାର୍ବନ ପଦଚିହ୍ନ କମ୍ କରନ୍ତୁ ଏବଂ ଏକ ସ୍ୱଚ୍ଛ ପରିବେଶରେ ଅବଦାନ ରଖନ୍ତୁ।",
    "benefits.card2.feature1": "CO₂ ନିର୍ଗମନ ହ୍ରାସ କରନ୍ତୁ",
    "benefits.card2.feature2": "ନବୀକରଣଯୋଗ୍ୟ ଶକ୍ତି ବୃଦ୍ଧିକୁ ସମର୍ଥନ କରନ୍ତୁ",
    "benefits.card2.feature3": "ସ୍ଥାନୀୟ ଭାବରେ ଜଳବାୟୁ ପରିବର୍ତ୍ତନ ସହିତ ଯୁଦ୍ଧ କରନ୍ତୁ",
    
    "benefits.card3.title": "କୌଣସି ଇନଷ୍ଟଲେସନ୍ ଦରକାର ନାହିଁ",
    "benefits.card3.description": "ଆପଣଙ୍କ ସମ୍ପତ୍ତିରେ ପ୍ୟାନେଲ୍ ଇନଷ୍ଟଲ୍ ନ କରି ସୌର ଶକ୍ତିରୁ ଲାଭ ଉଠାନ୍ତୁ। କୌଣସି ରକ୍ଷଣାବେକ୍ଷଣ ବା ଆଗୁଆ ଖର୍ଚ୍ଚ ନାହିଁ।",
    "benefits.card3.feature1": "କୌଣସି ଛାତ ଉପରେ ଇନଷ୍ଟଲେସନ୍ ଆବଶ୍ୟକ ନାହିଁ",
    "benefits.card3.feature2": "ଶୂନ୍ୟ ରକ୍ଷଣାବେକ୍ଷଣ ଦାୟିତ୍ୱ",
    "benefits.card3.feature3": "ଭଡ଼ାଟିଆ ଏବଂ ଘର ମାଲିକମାନଙ୍କ ପାଇଁ କାମ କରେ",
    
    "benefits.card4.title": "ଶକ୍ତି ସୁରକ୍ଷା",
    "benefits.card4.description": "ସ୍ଥାନୀୟ ନବୀକରଣଯୋଗ୍ୟ ଶକ୍ତି ସହିତ ବଢ଼ୁଥିବା ଶକ୍ତି ଖର୍ଚ୍ଚ ଏବଂ ଗ୍ରିଡ୍ ଅଭାବରୁ ନିଜକୁ ରକ୍ଷା କରନ୍ତୁ।",
    "benefits.card4.feature1": "ସ୍ଥିର ଶକ୍ତି ଖର୍ଚ୍ଚ",
    "benefits.card4.feature2": "ଗ୍ରିଡ୍ ଉପରେ ହ୍ରାସ କରାଯାଇଥିବା ନିର୍ଭରତା",
    "benefits.card4.feature3": "ଉପଯୋଗୀ ମୂଲ୍ୟ ବୃଦ୍ଧିରୁ ସୁରକ୍ଷା",
    
    "benefits.card5.title": "ସମୁଦାୟ ସମର୍ଥନ",
    "benefits.card5.description": "ସ୍ଥାନୀୟ ଚାକିରି ଏବଂ ସହଭାଗୀ ଭିତ୍ତିଭୂମିକୁ ସମର୍ଥନ କରି ଆପଣଙ୍କ ସ୍ଥାନୀୟ ସମୁଦାୟକୁ ମଜବୁତ କରନ୍ତୁ।",
    "benefits.card5.feature1": "ସ୍ଥାନୀୟ ସବୁଜ ଚାକିରି ସୃଷ୍ଟି କରେ",
    "benefits.card5.feature2": "ସମୁଦାୟ ସ୍ଥିତିସ୍ଥାପକତା ନିର୍ମାଣ କରେ",
    "benefits.card5.feature3": "ସ୍ଥାନୀୟ ଶକ୍ତି ସ୍ୱାଧୀନତାକୁ ସମର୍ଥନ କରେ",
    
    "benefits.card6.title": "ସରଳ ସାଇନ୍ ଅପ୍ ପ୍ରକ୍ରିୟା",
    "benefits.card6.description": "ଆମର ବ୍ୟବସ୍ଥିତ ନାମାଙ୍କନ ପ୍ରକ୍ରିୟା ଏବଂ ସମର୍ପିତ ସହାୟତା ଦଳ ସହିତ ଆରମ୍ଭ କରିବା ସହଜ।",
    "benefits.card6.feature1": "ଶୀଘ୍ର 5-ମିନିଟ୍ ଆବେଦନ",
    "benefits.card6.feature2": "କୌଣସି କ୍ରେଡିଟ୍ ଯାଞ୍ଚ ଦରକାର ନାହିଁ",
    "benefits.card6.feature3": "ସମର୍ପିତ ଗ୍ରାହକ ସହାୟତା",
    
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
    "calculator.input.bill": "ଆପଣଙ୍କର ହାରାହାରି ମାସିକ ବିଦ୍ୟୁତ୍ ବିଲ୍",
    "calculator.input.consumption": "ଆପଣଙ୍କର ମାସିକ ଶକ୍ତି ଖପତ (kWh)",
    "calculator.info": "ଆମର କାର୍ଯ୍ୟକ୍ରମ ପ୍ରତି ମାସ 150 ମାଗଣା ବିଦ୍ୟୁତ୍ ୟୁନିଟ୍ ପ୍ରଦାନ କରେ। ଆପଣଙ୍କର ସମ୍ଭାବ୍ୟ ସଞ୍ଚୟ ଦେଖିବାକୁ ଆପଣଙ୍କର ବର୍ତ୍ତମାନ ବିଲ୍ ଏବଂ ଖପତ ସମନ୍ୱୟ କରନ୍ତୁ।",
    "calculator.results.title": "ଆପଣଙ୍କର ଅନୁମାନିତ ସଞ୍ଚୟ",
    "calculator.results.freeUnits": "ମାଗଣା ୟୁନିଟ୍ ର ମୂଲ୍ୟ",
    "calculator.results.freeLabel": "150 ମାଗଣା ୟୁନିଟ୍",
    "calculator.results.newBill": "ନୂଆ ମାସିକ ବିଲ୍",
    "calculator.results.remainingUnits": "ୟୁନିଟ୍",
    "calculator.results.monthlySavings": "ମାସିକ ସଞ୍ଚୟ",
    "calculator.results.savingsPercent": "ସଞ୍ଚୟ",
    "calculator.results.annualSavings": "ଆପଣଙ୍କର ବାର୍ଷିକ ସଞ୍ଚୟ",
    "calculator.results.signUp": "ଏବେ ସାଇନ୍ ଅପ୍ କରନ୍ତୁ ଏବଂ ସଞ୍ଚୟ ଆରମ୍ଭ କରନ୍ତୁ",
    
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
    "contact.info.title": "ଯୋଗାଯୋଗରେ ରୁହନ୍ତୁ",
    "contact.info.location.title": "ଆମର ଅବସ୍ଥାନ",
    "contact.info.location.value": "123 ସୋଲାର ଷ୍ଟ୍ରିଟ୍\nସନସାଇନ୍ ସିଟି, SC 12345",
    "contact.info.email.title": "ଆମକୁ ଇମେଲ୍ କରନ୍ତୁ",
    "contact.info.email.value": "info@sunnyfree.com\nsupport@sunnyfree.com",
    "contact.info.phone.title": "ଆମକୁ କଲ୍ କରନ୍ତୁ",
    "contact.info.phone.value": "(123) 456-7890\n(987) 654-3210",
    "contact.info.hours.title": "କାର୍ଯ୍ୟ ସମୟ",
    "contact.info.hours.weekdays": "ସୋମବାର - ଶୁକ୍ରବାର:",
    "contact.info.hours.weekdaysTime": "9:00 AM - 6:00 PM",
    "contact.info.hours.saturday": "ଶନିବାର:",
    "contact.info.hours.saturdayTime": "10:00 AM - 4:00 PM",
    "contact.info.hours.sunday": "ରବିବାର:",
    "contact.info.hours.sundayTime": "ବନ୍ଦ",
    "contact.form.title": "ଆମକୁ ଏକ ବାର୍ତ୍ତା ପଠାନ୍ତୁ",
    "contact.form.name": "ଆପଣଙ୍କର ନାମ",
    "contact.form.namePlaceholder": "ଜନ୍ ଡୋ",
    "contact.form.email": "ଇମେଲ୍ ଠିକଣା",
    "contact.form.emailPlaceholder": "john@example.com",
    "contact.form.phone": "ଫୋନ୍ ନମ୍ବର",
    "contact.form.phonePlaceholder": "(123) 456-7890",
    "contact.form.message": "ଆପଣଙ୍କର ବାର୍ତ୍ତା",
    "contact.form.messagePlaceholder": "ଆଜି ଆମେ ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବୁ?",
    "contact.form.send": "ବାର୍ତ୍ତା ପଠାନ୍ତୁ",
    "contact.form.success": "ବାର୍ତ୍ତା ପଠାଗଲା",
    "contact.form.successMsg": "ଆପଣଙ୍କର ବାର୍ତ୍ତା ପାଇଁ ଧନ୍ୟବାଦ! ଆମେ ଶୀଘ୍ର ଆପଣଙ୍କ ନିକଟକୁ ଫେରିବୁ।",
    
    // About Us Page
    "aboutus.title": "ସନିଫ୍ରି ବିଷୟରେ",
    "aboutus.subtitle": "ଆମର ମାଗଣା ଶକ୍ତି କାର୍ଯ୍ୟକ୍ରମ ମାଧ୍ୟମରେ ସ୍ୱଚ୍ଛ, ନବୀକରଣଯୋଗ୍ୟ ଶକ୍ତିକୁ ସମସ୍ତଙ୍କ ପାଇଁ ସୁଲଭ କରିବାର ଏକ ଲକ୍ଷ୍ୟ ସହିତ ସମୁଦାୟ ସୌର ସମାଧାନର ଅଗ୍ରଣୀ।",
    "aboutus.story.title": "ଆମର କାହାଣୀ",
    "aboutus.story.p1": "ସନିଫ୍ରି 2020 ରେ ଏକ ସରଳ କିନ୍ତୁ ଶକ୍ତିଶାଳୀ ଭିଜନ୍ ସହିତ ପ୍ରତିଷ୍ଠିତ ହୋଇଥିଲା: ସ୍ୱଚ୍ଛ ଶକ୍ତିର ଉପଯୋଗକୁ ଗଣତାନ୍ତ୍ରିକ କରିବା। ଆମେ ଜାଣିଥିଲୁ ଯେ ଜଳବାୟୁ ପରିବର୍ତ୍ତନ ଏବଂ ନବୀକରଣଯୋଗ୍ୟ ଶକ୍ତିର ଲାଭ ବିଷୟରେ ବଢ୍ଟୁଥିବା ସଚେତନତା ସତ୍ତ୍ୱେ, ଅନେକ ସମୁଦାୟ ସବୁଜ ଶକ୍ତି ବିପ୍ଳବରେ ପଛରେ ରହିଯାଉଛନ୍ତି।",
    "aboutus.story.p2": "ଆମର ପ୍ରତିଷ୍ଠାତା, ନବୀକରଣଯୋଗ୍ୟ ଶକ୍ତି ବିଶେଷଜ୍ଞ ଏବଂ ସମୁଦାୟ ପ୍ରବକ୍ତାଙ୍କ ଏକ ଦଳ, ଏକ ମୌଳିକ ଧାରଣା ସହିତ ଏକତ୍ରିତ ହୋଇଥିଲେ - ସମୁଦାୟ-ମାଲିକାନା ସୌର ଫାର୍ମ ସୃଷ୍ଟି କରନ୍ତୁ ଯାହା ଘରୋଇକୁ ମାଗଣା ଶକ୍ତି ପ୍ରଦାନ କରିପାରିବ ସେହି ସହ କାର୍ବନ୍ ନିର୍ଗମନକୁ ଯଥେଷ୍ଟ ହ୍ରାସ କରିପାରିବ।",
    "aboutus.story.p3": "ଆଜି, ଆମେ ଦେଶ ସାରା ବହୁ ସ୍ଥାନକୁ ପ୍ରସାରିତ କରିଛୁ, ଘରୋଇ ଘରୋଇକୁ ସ୍ୱଚ୍ଛ, ନବୀକରଣଯୋଗ୍ୟ ଶକ୍ତି ପ୍ରଦାନ କରୁଛୁ ଏବଂ ଆମର ଉଦ୍ଭାବନୀ ମାଗଣା ଶକ୍ତି କାର୍ଯ୍ୟକ୍ରମ ମାଧ୍ୟମରେ ସମୁଦାୟମାନଙ୍କୁ ଲକ୍ଷ ଲକ୍ଷ ଶକ୍ତି ଖର୍ଚ୍ଚ ସଞ୍ଚୟ କରୁଛୁ ଯାହା ପ୍ରତି ଘରୋଇ ଘରୋଇକୁ 150 ୟୁନିଟ୍ ପର୍ଯ୍ୟନ୍ତ ଯୋଗାଇ ଦେଉଛି।",
    "aboutus.mission.title": "ଆମର ମିଶନ୍ ଏବଂ ମୂଲ୍ୟବୋଧ",
    "aboutus.mission.subtitle": "ଆମେ ମୌଳିକ ନିୟମ ଦ୍ୱାରା ପରିଚାଳିତ ଯାହା ଆମେ କିଏ ଏବଂ ଆମେ କିପରି କାମ କରୁ ତାହା ପରିଭାଷିତ କରେ।",
    "aboutus.mission.mission": "ଆମର ମିଶନ୍",
    "aboutus.mission.missionText": "ଉଦ୍ଭାବନୀ ସହଭାଗୀ ମଡେଲ୍ ମାଧ୍ୟମରେ ସମସ୍ତ ସମୁଦାୟ ପାଇଁ ସୌର ଶକ୍ତିକୁ ସୁଲଭ କରି ସ୍ଥାୟୀ ଶକ୍ତିକୁ ତ୍ୱରାନ୍ୱିତ କରିବା ଯାହା ପରିବେଶ ପ୍ରଭାବ କମ୍ କରିବା ସହିତ ମାଗଣା ଶକ୍ତି ପ୍ରଦାନ କରେ।",
    "aboutus.mission.vision": "ଆମର ଭିଜନ୍",
    "aboutus.mission.visionText": "ଏକ ବିଶ୍ୱ ଯେଉଁଠାରେ ସ୍ୱଚ୍ଛ ଶକ୍ତି ହେଉଛି ମାନକ, ବ୍ୟତିକ୍ରମ ନୁହେଁ, ଏବଂ ଯେଉଁଠାରେ ପ୍ରତ୍ୟେକ ସମୁଦାୟ ସାମାଜିକ-ଆର୍ଥିକ ସ୍ଥିତି ନିର୍ବିଶେଷରେ ସ୍ଥାୟୀ ଶକ୍ତି ଉତ୍ପାଦନରୁ ଲାଭ ଉଠାଏ।",
    "aboutus.mission.values": "ଆମର ମୂଲ୍ୟବୋଧ",
    "aboutus.mission.valuesText": "ଆମେ ଅଧିକ ନ୍ୟାୟସଙ୍ଗତ ଶକ୍ତି ଭବିଷ୍ୟତ ସୃଷ୍ଟି କରିବା ପାଇଁ ଆମେ କରୁଥିବା ସବୁକିଛିରେ ସ୍ଥାୟିତ୍ୱ, ସମୁଦାୟ ସଶକ୍ତିକରଣ, ପ୍ରାପ୍ୟତା, ଉଦ୍ଭାବନ ଏବଂ ସ୍ୱଚ୍ଛତାରେ ବିଶ୍ୱାସ କରୁ।",
    "aboutus.team.title": "ଆମର ନେତୃତ୍ୱ ଦଳ",
    "aboutus.team.subtitle": "ସମୁଦାୟ ସୌର ଶକ୍ତିକୁ ବିପ୍ଳବ କରିବାର ଆମର ମିଶନ୍ ନେତୃତ୍ୱ ନେଉଥିବା ଉତ୍ସାହୀ ବିଶେଷଜ୍ଞମାନଙ୍କୁ ଭେଟନ୍ତୁ।",
    "aboutus.team.member1.name": "ସାରା ଜନସନ୍",
    "aboutus.team.member1.role": "ସିଇଓ ଏବଂ ସହ-ପ୍ରତିଷ୍ଠାତା",
    "aboutus.team.member1.bio": "ନବୀକରଣଯୋଗ୍ୟ ଶକ୍ତିରେ 15+ ବର୍ଷର ଅନୁଭୂତି ସହିତ, ସାରା ସୌର ଶକ୍ତିକୁ ଗଣତନ୍ତ୍ର କରିବା ଆମର ମିଶନ୍ ନେତୃତ୍ୱ ନିଅନ୍ତି।",
    "aboutus.team.member2.name": "ମାଇକେଲ୍ ଚେନ୍",
    "aboutus.team.member2.role": "ସିଟିଓ ଏବଂ ସହ-ପ୍ରତିଷ୍ଠାତା",
    "aboutus.team.member2.bio": "ମାଇକେଲ୍ ଆମର ସୌର ଫାର୍ମ ପ୍ରଯୁକ୍ତିକୁ ଅନୁକୂଳିତ କରିବା ପାଇଁ ଅତ୍ୟାଧୁନିକ ଇଞ୍ଜିନିୟରିଂ ବିଶେଷଜ୍ଞତା ଆଣନ୍ତି।",
    "aboutus.team.member3.name": "ଅମାରା ପାଟେଲ୍",
    "aboutus.team.member3.role": "ସିଓଓ",
    "aboutus.team.member3.bio": "ଅମାରା ଆମର ସମସ୍ତ ସୌର ପ୍ରକଳ୍ପରେ ସୁରୁଖୁରୁ କାର୍ଯ୍ୟ ଏବଂ ସମୁଦାୟ ସହଭାଗିତା ସୁନିଶ୍ଚିତ କରନ୍ତି।",
    "aboutus.impact.title": "ଆମର ପ୍ରଭାବ",
    "aboutus.impact.subtitle": "ସମୁଦାୟ ସୌର ଶକ୍ତିକୁ ବିପ୍ଳବ କରିବା ଆମର ଯାତ୍ରାରେ ଆମେ ଯାହା ହାସଲ କରିଛୁ ତାହା ପାଇଁ ଆମେ ଗର୍ବିତ।",
    "aboutus.impact.stat1.value": "25+",
    "aboutus.impact.stat1.label": "ସମୁଦାୟ ସୌର ଫାର୍ମ",
    "aboutus.impact.stat2.value": "15,000+",
    "aboutus.impact.stat2.label": "ଘରୋଇ ଶକ୍ତି ପ୍ରାପ୍ତ",
    "aboutus.impact.stat3.value": "200K+",
    "aboutus.impact.stat3.label": "ଟନ୍ CO2 ଅଫସେଟ୍",
    "aboutus.impact.stat4.value": "5+",
    "aboutus.impact.stat4.label": "କାର୍ଯ୍ୟ ବର୍ଷ",
    "aboutus.cta.title": "ଆମର ମାଗଣା ଶକ୍ତି ଆନ୍ଦୋଳନରେ ଯୋଗଦିଅନ୍ତୁ",
    "aboutus.cta.subtitle": "ସ୍ୱଚ୍ଛ ଶକ୍ତିକୁ ସମସ୍ତଙ୍କ ପାଇଁ ସୁଲଭ କରିବାର ଆମର ମିଶନ୍ ର ଅଂଶ ହୁଅନ୍ତୁ। ମାସିକ 150 ମାଗଣା ଶକ୍ତି ୟୁନିଟ୍ ପାଆନ୍ତୁ।",
    "aboutus.cta.button1": "ଯୋଗାଯୋଗ କରନ୍ତୁ",
    "aboutus.cta.button2": "ଏହା କିପରି କାମ କରେ ଜାଣନ୍ତୁ",
    
    // Benefits Page
    "benefitspage.hero.title": "ଆମର ସୌର କାର୍ଯ୍ୟକ୍ରମର ଲାଭ",
    "benefitspage.hero.subtitle": "ଆମର ସମୁଦାୟ ସୌର କାର୍ଯ୍ୟକ୍ରମ କିପରି ଆପଣଙ୍କୁ ଏକ ସ୍ଥାୟୀ ଭବିଷ୍ୟତରେ ଅବଦାନ ରଖିବା ସହିତ ଅର୍ଥ ସଞ୍ଚୟ କରିବାରେ ସାହାଯ୍ୟ କରିପାରିବ ତାହା ଆବିଷ୍କାର କରନ୍ତୁ।",
    "benefitspage.cta.title": "ସଞ୍ଚୟ ଆରମ୍ଭ କରିବାକୁ ପ୍ରସ୍ତୁତ?",
    "benefitspage.cta.subtitle": "ଆମର ସମୁଦାୟ ସୌର କାର୍ଯ୍ୟକ୍ରମରେ ଆଜି ଯୋଗ ଦିଅନ୍ତୁ ଏବଂ ପ୍ରତି ମାସ ମାଗଣା ଶକ୍ତି ୟୁନିଟ୍ ଉପଭୋଗ କରିବା ଆରମ୍ଭ କରନ୍ତୁ।",
    "benefitspage.cta.button1": "ଏବେ ସାଇନ୍ ଅପ୍ କରନ୍ତୁ",
    "benefitspage.cta.button2": "ଏହା କିପରି କାମ କରେ ଜାଣନ୍ତୁ",
    
    // Navigation
    "nav.home": "ମୁଖ୍ୟପୃଷ୍ଠା",
    "nav.about": "ବିଷୟରେ",
    "nav.benefits": "ଲାଭଗୁଡ଼ିକ",
    "nav.howitworks": "ଏହା କିପରି କାମ କରେ",
    "nav.contact": "ଯୋଗାଯୋଗ",
    "nav.signin": "ସାଇନ୍ ଇନ୍",
    "nav.signup": "ସାଇନ୍ ଅପ୍",
    "nav.dashboard": "ଡ୍ୟାସବୋର୍ଡ",
    
    // Footer
    "footer.about": "ଆମ ବିଷୟରେ",
    "footer.about.text": "ସନିଫ୍ରି ଆମର ଅଭିନବ କାର୍ଯ୍ୟକ୍ରମ ମାଧ୍ୟମରେ ସମୁଦାୟକୁ ମାଗଣା ସୌର ଶକ୍ତି ୟୁନିଟ୍ ପ୍ରଦାନ କରେ। ପୂର୍ବରୁ ସ୍ୱଚ୍ଛ ଶକ୍ତି ସହିତ ସଞ୍ଚୟ କରୁଥିବା ହଜାର ହଜାର ଘରୋଇ ସହିତ ଯୋଗଦିଅନ୍ତୁ।",
    "footer.links": "ଦ୍ରୁତ ଲିଙ୍କ୍",
    "footer.links.home": "ମୁଖ୍ୟପୃଷ୍ଠା",
    "footer.links.about": "ଆମ ବିଷୟରେ",
    "footer.links.benefits": "ଲାଭଗୁଡ଼ିକ",
    "footer.links.how": "ଏହା କିପରି କାମ କରେ",
    "footer.links.faq": "FAQ",
    "footer.links.contact": "ଯୋଗାଯୋଗ କରନ୍ତୁ",
    "footer.legal": "ଆଇନଗତ",
    "footer.legal.terms": "ସର୍ତ୍ତ ଓ ଗୋପନୀୟତା",
    "footer.legal.privacy": "ଗୋପନୀୟତା ନୀତି",
    "footer.legal.cookies": "କୁକୀ ନୀତି",
    "footer.subscribe": "ଅଦ୍ୟତନ ରୁହନ୍ତୁ",
    "footer.subscribe.text": "ନବୀନତମ ଅଦ୍ୟତନ ଏବଂ ଅଫର ପାଇଁ ଆମର ନ୍ୟୁଜଲେଟର୍ ସଦସ୍ୟତା ନିଅନ୍ତୁ।",
    "footer.subscribe.placeholder": "ଆପଣଙ୍କର ଇମେଲ୍ ଠିକଣା",
    "footer.subscribe.button": "ସଦସ୍ୟତା ନିଅନ୍ତୁ",
    "footer.copyright": "© 2024 ସନିଫ୍ରି। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।",
    
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
