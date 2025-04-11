
import { CircleChevronRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Fill out our simple form to join our community solar program. No credit check or upfront costs required.",
      color: "yellow"
    },
    {
      number: "02",
      title: "We Build Solar",
      description: "We build and maintain community solar farms in your area, generating clean renewable energy.",
      color: "orange"
    },
    {
      number: "03",
      title: "Energy Production",
      description: "The solar farms produce electricity that flows into the local power grid, powering homes and businesses.",
      color: "green"
    },
    {
      number: "04",
      title: "Get Free Units",
      description: "You receive up to 150 free energy units every month, credited directly to your regular utility bill.",
      color: "blue"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-solar-yellow mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Our process is simple and straightforward, allowing you to benefit from solar energy without any hassle.
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
                  {index === 0 && (
                    <img 
                      src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="Sign up process"
                      className="rounded-lg shadow-lg w-full h-auto object-cover mt-4 md:mt-0"
                    />
                  )}
                  {index === 1 && (
                    <img 
                      src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
                      alt="Solar farm construction"
                      className="rounded-lg shadow-lg w-full h-auto object-cover mt-4 md:mt-0"
                    />
                  )}
                  {index === 2 && (
                    <img 
                      src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
                      alt="Energy production"
                      className="rounded-lg shadow-lg w-full h-auto object-cover mt-4 md:mt-0"
                    />
                  )}
                  {index === 3 && (
                    <img 
                      src="https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="Free energy units"
                      className="rounded-lg shadow-lg w-full h-auto object-cover mt-4 md:mt-0"
                    />
                  )}
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
