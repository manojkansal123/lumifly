
import { Sun, Users, Zap, Leaf } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lumifly-navy mb-4">About Our Community Solar</h2>
          <div className="w-24 h-1 bg-lumifly-gold mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We're bringing the power of solar energy to communities while making clean energy accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-lumifly-gold opacity-20 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1559302995-f1d7e5f67f9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Solar panels on a community building" 
                className="rounded-lg shadow-lg w-full h-auto object-cover relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-lumifly-blue opacity-20 rounded-lg"></div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-lumifly-navy mb-6">
              Empowering Communities with Free Solar Energy
            </h3>
            <p className="text-gray-600 mb-8">
              Our mission is to make renewable energy accessible to everyone. We build community solar farms that generate clean energy and share the benefits with local residents. By joining our community solar program, you get free energy up to 150 units every month and contribute to a more sustainable future.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-lumifly-gold/10 p-3 rounded-lg mr-4">
                  <Sun className="h-6 w-6 text-lumifly-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lumifly-navy mb-1">Clean Energy</h4>
                  <p className="text-gray-600 text-sm">100% renewable solar power with zero emissions</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-lumifly-blue/10 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-lumifly-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lumifly-navy mb-1">Community Focused</h4>
                  <p className="text-gray-600 text-sm">Solar farms built by and for local communities</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-lumifly-purple/10 p-3 rounded-lg mr-4">
                  <Zap className="h-6 w-6 text-lumifly-purple" />
                </div>
                <div>
                  <h4 className="font-bold text-lumifly-navy mb-1">Free Energy</h4>
                  <p className="text-gray-600 text-sm">Up to 150 units free for every customer</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-lumifly-blue/10 p-3 rounded-lg mr-4">
                  <Leaf className="h-6 w-6 text-lumifly-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lumifly-navy mb-1">Eco-Friendly</h4>
                  <p className="text-gray-600 text-sm">Reducing carbon footprint and fighting climate change</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
