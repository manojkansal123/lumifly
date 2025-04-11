
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CircleChevronRight, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Fill out our simple form to join our community solar program. No credit check or upfront costs required.",
      color: "yellow",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      number: "02",
      title: "We Build Solar",
      description: "We build and maintain community solar farms in your area, generating clean renewable energy.",
      color: "orange",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
    },
    {
      number: "03",
      title: "Energy Production",
      description: "The solar farms produce electricity that flows into the local power grid, powering homes and businesses.",
      color: "green",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
    },
    {
      number: "04",
      title: "Get Free Units",
      description: "You receive up to 150 free energy units every month, credited directly to your regular utility bill.",
      color: "blue",
      image: "https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const faqs = [
    {
      question: "How does community solar work?",
      answer: "Community solar allows multiple people to benefit from a single, shared solar array. The solar panels are installed in a sunny location, and the electricity generated is fed into the local power grid. Subscribers receive credits on their electricity bills for their share of the power produced."
    },
    {
      question: "Do I need to install anything on my property?",
      answer: "No. There is no need for any installation on your property. Our solar farms are built and maintained at remote locations, allowing you to benefit from solar energy without any changes to your home or business."
    },
    {
      question: "Am I locked into a long-term contract?",
      answer: "No. Our program offers flexible terms, and you can cancel at any time with reasonable notice. There are no cancellation fees or hidden charges."
    },
    {
      question: "How much will I save on my electricity bill?",
      answer: "With our program, you can get up to 150 units of free electricity every month. The exact savings depend on your energy consumption, but most customers save between $300-$600 annually."
    },
    {
      question: "What happens if I move?",
      answer: "If you move within our service area, your subscription can move with you. If you move outside our service area, you can cancel your subscription without any penalty."
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
              <h1 className="text-4xl md:text-5xl font-bold text-solar-dark mb-6">How Our Solar Program Works</h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                Our simple 4-step process makes it easy to start enjoying free clean energy without any installation or upfront costs.
              </p>
            </div>
          </div>
        </section>

        {/* Main How It Works Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">Simple Four-Step Process</h2>
              <div className="w-24 h-1 bg-solar-yellow mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Our process is simple and straightforward, allowing you to benefit from solar energy without any hassle.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
              
              {/* Steps */}
              <div className="space-y-20 md:space-y-32 relative">
                {steps.map((step, index) => (
                  <div 
                    key={step.number}
                    className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <span className={`inline-block text-sm font-semibold text-solar-${step.color} mb-2 px-3 py-1 bg-solar-${step.color}/10 rounded-full`}>
                        Step {step.number}
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
                        alt={step.title}
                        className="rounded-lg shadow-lg w-full h-auto object-cover mt-4 md:mt-0"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Overview */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-solar-dark mb-4">Why Choose Our Program?</h2>
              <div className="w-24 h-1 bg-solar-yellow mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-solar-yellow/20 p-2 rounded-full mr-3">
                    <CheckCircle className="h-6 w-6 text-solar-yellow" />
                  </div>
                  <h3 className="font-bold text-xl">No Upfront Cost</h3>
                </div>
                <p className="text-gray-600">Join our program without any initial investment or hidden fees.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-solar-orange/20 p-2 rounded-full mr-3">
                    <CheckCircle className="h-6 w-6 text-solar-orange" />
                  </div>
                  <h3 className="font-bold text-xl">No Installation</h3>
                </div>
                <p className="text-gray-600">No need for roof space or any installations on your property.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-solar-green/20 p-2 rounded-full mr-3">
                    <CheckCircle className="h-6 w-6 text-solar-green" />
                  </div>
                  <h3 className="font-bold text-xl">Free Energy Units</h3>
                </div>
                <p className="text-gray-600">Receive up to 150 free energy units every month on your utility bill.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-solar-blue/20 p-2 rounded-full mr-3">
                    <CheckCircle className="h-6 w-6 text-solar-blue" />
                  </div>
                  <h3 className="font-bold text-xl">No Maintenance</h3>
                </div>
                <p className="text-gray-600">We handle all maintenance and operations of the solar facilities.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-solar-yellow/20 p-2 rounded-full mr-3">
                    <CheckCircle className="h-6 w-6 text-solar-yellow" />
                  </div>
                  <h3 className="font-bold text-xl">Flexible Terms</h3>
                </div>
                <p className="text-gray-600">No long-term commitments; you can cancel anytime with notice.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-solar-orange/20 p-2 rounded-full mr-3">
                    <CheckCircle className="h-6 w-6 text-solar-orange" />
                  </div>
                  <h3 className="font-bold text-xl">Eco-Friendly</h3>
                </div>
                <p className="text-gray-600">Support renewable energy and reduce your carbon footprint.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-solar-yellow mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our community solar program.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-solar-dark mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-solar-dark py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Join our community solar program today and start enjoying free energy units every month.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button size="lg" className="bg-solar-yellow hover:bg-solar-orange text-solar-dark">
                Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact Us
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

export default HowItWorks;
