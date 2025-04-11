
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
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
    alert('Thank you for your message! We will get back to you soon.');
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
      title: "Program Questions",
      icon: <HelpCircle className="h-6 w-6 text-solar-yellow" />,
      questions: [
        "How does the program work?",
        "How many free units can I get?",
        "Am I eligible for the program?"
      ]
    },
    {
      title: "Technical Support",
      icon: <MessageSquare className="h-6 w-6 text-solar-orange" />,
      questions: [
        "How do I check my energy credits?",
        "What if my bill doesn't show credits?",
        "How is the energy measured?"
      ]
    },
    {
      title: "Program Enrollment",
      icon: <Clock className="h-6 w-6 text-solar-green" />,
      questions: [
        "How long does enrollment take?",
        "What documents do I need?",
        "When will I see my first credits?"
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
              <h1 className="text-4xl md:text-5xl font-bold text-solar-dark mb-6">Contact Us</h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                Have questions about our free energy program? Our team is here to help you.
              </p>
            </div>
          </div>
        </section>

        {/* Main Contact Form Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-solar-dark mb-4">Contact Information</h2>
              <div className="w-24 h-1 bg-solar-yellow mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Our team is here to assist you with any questions about our solar energy program.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-2 bg-gradient-to-br from-solar-dark to-solar-dark/90 text-white rounded-lg overflow-hidden relative">
                {/* Image Background */}
                <div className="absolute inset-0 opacity-15 mix-blend-overlay">
                  <img 
                    src="/placeholder.svg" 
                    alt="Solar energy team" 
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
                    <h3 className="text-2xl font-bold">Get In Touch</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-solar-yellow rounded-full p-3 mr-4 shadow">
                        <MapPin className="h-5 w-5 text-solar-dark" />
                      </div>
                      <div>
                        <h4 className="font-bold">Our Location</h4>
                        <p className="text-gray-200 mt-1">123 Solar Street<br />Sunshine City, SC 12345</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-solar-yellow rounded-full p-3 mr-4 shadow">
                        <Mail className="h-5 w-5 text-solar-dark" />
                      </div>
                      <div>
                        <h4 className="font-bold">Email Us</h4>
                        <p className="text-gray-200 mt-1">info@sunnyfree.com<br />support@sunnyfree.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-solar-yellow rounded-full p-3 mr-4 shadow">
                        <Phone className="h-5 w-5 text-solar-dark" />
                      </div>
                      <div>
                        <h4 className="font-bold">Call Us</h4>
                        <p className="text-gray-200 mt-1">(123) 456-7890<br />(987) 654-3210</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <h4 className="font-bold mb-3">Hours of Operation</h4>
                    <div className="grid grid-cols-2 gap-2 text-gray-200">
                      <div>Monday - Friday:</div>
                      <div>9:00 AM - 6:00 PM</div>
                      <div>Saturday:</div>
                      <div>10:00 AM - 4:00 PM</div>
                      <div>Sunday:</div>
                      <div>Closed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3 bg-white rounded-lg shadow-lg p-8 border-t-4 border-solar-yellow">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-solar-dark">Send Us a Message</h3>
                    <p className="text-gray-600 mt-2">We'd love to hear from you! Fill out the form below.</p>
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
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full border-gray-300 focus:border-solar-yellow focus:ring focus:ring-solar-yellow/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full border-gray-300 focus:border-solar-yellow focus:ring focus:ring-solar-yellow/20 transition-all"
                      />
                    </div>
                  </div>
                  
                  {/* Phone and Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        className="w-full border-gray-300 focus:border-solar-yellow focus:ring focus:ring-solar-yellow/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject <span className="text-red-500">*</span>
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
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Program Information">Program Information</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Billing Question">Billing Question</option>
                          <option value="Feedback">Feedback</option>
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
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you today?"
                      required
                      className="w-full h-32 border-gray-300 focus:border-solar-yellow focus:ring focus:ring-solar-yellow/20 transition-all"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-sm text-gray-500"><span className="text-red-500">*</span> Required fields</p>
                    <Button 
                      type="submit" 
                      className="bg-solar-yellow hover:bg-solar-orange text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-solar-dark mb-4">Common Questions</h2>
              <div className="w-24 h-1 bg-solar-yellow mx-auto"></div>
              <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                Find answers to frequently asked questions or reach out to us for specific inquiries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {faqCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-solar-yellow/10 p-3 rounded-full mr-4">
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-xl text-solar-dark">{category.title}</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    {category.questions.map((question, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-solar-yellow mr-2">•</span>
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/how-it-works#faqs" className="text-solar-orange font-semibold hover:underline">
                    View all FAQs →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-solar-dark mb-4">Visit Our Office</h2>
              <p className="text-gray-600">
                Come by our office to learn more about our solar energy programs.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              {/* Replace with an actual map integration if needed */}
              <div className="bg-gray-200 w-full h-[400px] flex items-center justify-center">
                <p className="text-gray-600">Map placeholder - In a real application, an interactive map would be embedded here.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-solar-dark py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-white/80 mb-8">
                Subscribe to our newsletter for the latest updates on our solar programs, energy tips, and special offers.
              </p>
              <form className="flex flex-col md:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow" 
                  required
                />
                <Button type="submit" className="bg-solar-yellow hover:bg-solar-orange text-solar-dark">
                  Subscribe
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
