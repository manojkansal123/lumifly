import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    alert(t("contact.page.form.successAlert"));
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const faqCategories = [
    {
      title: t("contact.page.faq.programQuestions"),
      icon: <HelpCircle className="h-6 w-6 text-solar-yellow" />,
      questions: [
        t("contact.page.faq.program.q1"),
        t("contact.page.faq.program.q2"),
        t("contact.page.faq.program.q3")
      ]
    },
    {
      title: t("contact.page.faq.technicalSupport"),
      icon: <MessageSquare className="h-6 w-6 text-solar-orange" />,
      questions: [
        t("contact.page.faq.technical.q1"),
        t("contact.page.faq.technical.q2"),
        t("contact.page.faq.technical.q3")
      ]
    },
    {
      title: t("contact.page.faq.enrollment"),
      icon: <Clock className="h-6 w-6 text-solar-green" />,
      questions: [
        t("contact.page.faq.enrollment.q1"),
        t("contact.page.faq.enrollment.q2"),
        t("contact.page.faq.enrollment.q3")
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-solar-yellow/10 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-solar-dark mb-6">{t("contact.page.title")}</h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                {t("contact.page.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Main Contact Form Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-solar-dark mb-4">{t("contact.page.contactInfo")}</h2>
              <div className="w-24 h-1 bg-solar-yellow mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                {t("contact.page.contactDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-2 bg-gradient-to-br from-solar-dark to-solar-dark/90 text-white rounded-lg overflow-hidden relative">
                {/* Image Background */}
                <div className="absolute inset-0 opacity-15 mix-blend-overlay">
                  <img 
                    src="/placeholder.svg" 
                    alt={t("contact.page.teamImageAlt")}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                </div>
                
                {/* Pattern Background */}
                <div className="absolute inset-0 opacity-5">
                  <svg width="100%" height="100%">
                    <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                      <circle id="pattern-circle" cx="10" cy="10" r="1.5" fill="#fff"></circle>
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
                  </svg>
                </div>

                <div className="relative z-10 p-8 backdrop-blur-sm bg-solar-dark/40">
                  <div className="flex items-center mb-6">
                    <div className="bg-solar-yellow rounded-full p-3 mr-4 shadow-lg">
                      <Mail className="h-6 w-6 text-solar-dark" />
                    </div>
                    <h3 className="text-2xl font-bold">{t("contact.page.getInTouch")}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-solar-yellow rounded-full p-3 mr-4 shadow">
                        <MapPin className="h-5 w-5 text-solar-dark" />
                      </div>
                      <div>
                        <h4 className="font-bold">{t("contact.page.locationTitle")}</h4>
                        <p className="text-gray-200 mt-1">{t("contact.page.address")}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-solar-yellow rounded-full p-3 mr-4 shadow">
                        <Mail className="h-5 w-5 text-solar-dark" />
                      </div>
                      <div>
                        <h4 className="font-bold">{t("contact.page.emailTitle")}</h4>
                        <p className="text-gray-200 mt-1">{t("contact.page.emailAddresses")}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-solar-yellow rounded-full p-3 mr-4 shadow">
                        <Phone className="h-5 w-5 text-solar-dark" />
                      </div>
                      <div>
                        <h4 className="font-bold">{t("contact.page.phoneTitle")}</h4>
                        <p className="text-gray-200 mt-1">{t("contact.page.phoneNumbers")}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <h4 className="font-bold mb-3">{t("contact.page.hoursTitle")}</h4>
                    <div className="grid grid-cols-2 gap-2 text-gray-200">
                      <div>{t("contact.page.weekdays")}</div>
                      <div>{t("contact.page.weekdaysHours")}</div>
                      <div>{t("contact.page.saturday")}</div>
                      <div>{t("contact.page.saturdayHours")}</div>
                      <div>{t("contact.page.sunday")}</div>
                      <div>{t("contact.page.sundayHours")}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3 bg-white rounded-lg shadow-lg p-8 border-t-4 border-solar-yellow">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-solar-dark">{t("contact.page.form.title")}</h3>
                    <p className="text-gray-600 mt-2">{t("contact.page.form.subtitle")}</p>
                  </div>
                  <div className="hidden md:block">
                    <div className="bg-solar-yellow/10 p-3 rounded-full">
                      <Send className="h-7 w-7 text-solar-yellow" />
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        {t("contact.page.form.name")} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("contact.page.form.namePlaceholder")}
                        required
                        className="w-full border-gray-300 focus:border-solar-yellow focus:ring focus:ring-solar-yellow/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        {t("contact.page.form.email")} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("contact.page.form.emailPlaceholder")}
                        required
                        className="w-full border-gray-300 focus:border-solar-yellow focus:ring focus:ring-solar-yellow/20 transition-all"
                      />
                    </div>
                  </div>
                  
                  {/* Phone and Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        {t("contact.page.form.phone")}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t("contact.page.form.phonePlaceholder")}
                        className="w-full border-gray-300 focus:border-solar-yellow focus:ring focus:ring-solar-yellow/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        {t("contact.page.form.subject")} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-10 appearance-none pr-8"
                        >
                          <option value="">{t("contact.page.form.selectSubject")}</option>
                          <option value="General Inquiry">{t("contact.page.form.subjects.general")}</option>
                          <option value="Program Information">{t("contact.page.form.subjects.program")}</option>
                          <option value="Technical Support">{t("contact.page.form.subjects.technical")}</option>
                          <option value="Billing Question">{t("contact.page.form.subjects.billing")}</option>
                          <option value="Feedback">{t("contact.page.form.subjects.feedback")}</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      {t("contact.page.form.message")} <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("contact.page.form.messagePlaceholder")}
                      required
                      className="w-full h-32 border-gray-300 focus:border-solar-yellow focus:ring focus:ring-solar-yellow/20 transition-all"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-sm text-gray-500"><span className="text-red-500">*</span> {t("contact.page.form.required")}</p>
                    <Button 
                      type="submit" 
                      className="bg-solar-yellow hover:bg-solar-orange text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      {t("contact.page.form.send")} <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-12 md:py-20 bg-gray-50" id="faqs">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-solar-dark mb-4">{t("contact.page.commonQuestions")}</h2>
              <div className="w-24 h-1 bg-solar-yellow mx-auto"></div>
              <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                {t("contact.page.faqDescription")}
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="credits" className="w-full">
                <TabsList className="flex w-full mb-8 bg-gray-100 p-1 rounded-lg h-auto flex-wrap">
                  <TabsTrigger value="credits" className="flex-1 py-3 data-[state=active]:bg-white data-[state=active]:shadow">
                    {t("contact.page.tabs.credits")}
                  </TabsTrigger>
                  <TabsTrigger value="billing" className="flex-1 py-3 data-[state=active]:bg-white data-[state=active]:shadow">
                    {t("contact.page.tabs.billing")}
                  </TabsTrigger>
                  <TabsTrigger value="program" className="flex-1 py-3 data-[state=active]:bg-white data-[state=active]:shadow">
                    {t("contact.page.tabs.program")}
                  </TabsTrigger>
                  <TabsTrigger value="technical" className="flex-1 py-3 data-[state=active]:bg-white data-[state=active]:shadow">
                    {t("contact.page.tabs.technical")}
                  </TabsTrigger>
                  <TabsTrigger value="account" className="flex-1 py-3 data-[state=active]:bg-white data-[state=active]:shadow">
                    {t("contact.page.tabs.account")}
                  </TabsTrigger>
                </TabsList>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  {/* Energy Credits Tab */}
                  <TabsContent value="credits" className="mt-0">
                    <h3 className="text-xl font-bold text-solar-dark mb-4">{t("contact.page.credits.title")}</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="credits-1">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.credits.q1")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.credits.a1")}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="credits-2">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.credits.q2")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.credits.a2")}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="credits-3">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.credits.q3")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.credits.a3")}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="credits-4">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.credits.q4")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.credits.a4")}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="credits-5">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.credits.q5")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.credits.a5")}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                  
                  {/* Billing & Fees Tab */}
                  <TabsContent value="billing" className="mt-0">
                    <h3 className="text-xl font-bold text-solar-dark mb-4">{t("contact.page.billing.title")}</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="billing-1">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.billing.q1")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.billing.a1")}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="billing-2">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.billing.q2")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.billing.a2")}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="billing-3">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.billing.q3")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.billing.a3")}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                  
                  {/* Program Details Tab */}
                  <TabsContent value="program" className="mt-0">
                    <h3 className="text-xl font-bold text-solar-dark mb-4">{t("contact.page.program.title")}</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="program-1">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.program.q1")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.program.a1")}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="program-2">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.program.q2")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.program.a2")}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="program-3">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.program.q3")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.program.a3")}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="program-4">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.program.q4")}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div>
                            {t("contact.page.program.a4")}
                            <ol className="list-decimal pl-5 mt-2 space-y-1">
                              <li>{t("contact.page.program.a4.option1")}</li>
                              <li>{t("contact.page.program.a4.option2")}</li>
                            </ol>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                  
                  {/* Technical Information Tab */}
                  <TabsContent value="technical" className="mt-0">
                    <h3 className="text-xl font-bold text-solar-dark mb-4">{t("contact.page.technical.title")}</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="technical-1">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.technical.q1")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.technical.a1")}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="technical-2">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.technical.q2")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.technical.a2")}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="technical-3">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.technical.q3")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.technical.a3")}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="technical-4">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.technical.q4")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.technical.a4")}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                  
                  {/* Account Management Tab */}
                  <TabsContent value="account" className="mt-0">
                    <h3 className="text-xl font-bold text-solar-dark mb-4">{t("contact.page.account.title")}</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="account-1">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.account.q1")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.account.a1")}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="account-2">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.account.q2")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.account.a2")}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="account-3">
                        <AccordionTrigger className="text-left">
                          {t("contact.page.account.q3")}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t("contact.page.account.a3")}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-solar-dark mb-4">{t("contact.page.visitOffice")}</h2>
              <p className="text-gray-600">
                {t("contact.page.visitDescription")}
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              {/* Replace with an actual map integration if needed */}
              <div className="bg-gray-200 w-full h-[400px] flex items-center justify-center">
                <p className="text-gray-600">{t("contact.page.mapPlaceholder")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-solar-dark py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">{t("contact.page.stayUpdated")}</h2>
              <p className="text-white/80 mb-8">
                {t("contact.page.newsletter")}
              </p>
              <form className="flex flex-col md:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder={t("contact.page.emailPlaceholder")}
                  className="flex-grow" 
                  required
                />
                <Button type="submit" className="bg-solar-yellow hover:bg-solar-orange text-solar-dark">
                  {t("contact.page.subscribe")}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
