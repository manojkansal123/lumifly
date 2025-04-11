
import { 
  Sun, Users, Trophy, Lightbulb, GraduationCap, 
  LifeBuoy, Heart, Globe, Calendar, Target
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-solar-dark to-solar-dark/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About SunnyFree</h1>
              <div className="w-24 h-1 bg-solar-yellow mx-auto mb-8"></div>
              <p className="text-xl text-gray-200">
                Pioneering community solar solutions with a mission to make clean, 
                renewable energy accessible to everyone through our free energy program.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-6">Our Story</h2>
                <div className="w-24 h-1 bg-solar-yellow mb-8"></div>
                <p className="text-gray-600 mb-6">
                  SunnyFree was founded in 2020 with a simple but powerful vision: to democratize access to clean energy. 
                  We recognized that despite growing awareness about climate change and the benefits of renewable energy, 
                  many communities were being left behind in the green energy revolution.
                </p>
                <p className="text-gray-600 mb-6">
                  Our founders, a team of renewable energy experts and community advocates, came together with a 
                  groundbreaking idea—create community-owned solar farms that could provide free energy to households 
                  while significantly reducing carbon emissions.
                </p>
                <p className="text-gray-600">
                  Today, we've expanded to multiple locations across the country, powering thousands of homes with 
                  clean, renewable energy and saving communities millions in energy costs through our innovative 
                  free energy program providing up to 150 units per household.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-solar-orange opacity-20 rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1497440001374-f21e010e3b5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                  alt="Team meeting discussing solar project" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-solar-blue opacity-20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">Our Mission & Values</h2>
              <div className="w-24 h-1 bg-solar-yellow mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're guided by core principles that define who we are and how we operate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <Card className="border-t-4 border-t-solar-yellow hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-6 w-6 text-solar-yellow mr-2" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To accelerate the transition to sustainable energy by making solar power 
                    accessible to all communities through innovative sharing models that 
                    provide free energy while reducing environmental impact.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="border-t-4 border-t-solar-blue hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="h-6 w-6 text-solar-blue mr-2" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A world where clean energy is the standard, not the exception, and where every 
                    community benefits from sustainable power generation regardless of 
                    socioeconomic status.
                  </p>
                </CardContent>
              </Card>

              {/* Values */}
              <Card className="border-t-4 border-t-solar-green hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-6 w-6 text-solar-green mr-2" />
                    Our Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We believe in sustainability, community empowerment, accessibility, innovation, and 
                    transparency in everything we do to create a more equitable energy future.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">Our Leadership Team</h2>
              <div className="w-24 h-1 bg-solar-yellow mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the passionate experts leading our mission to revolutionize community solar energy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Sarah Johnson, CEO" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-solar-dark">Sarah Johnson</h3>
                  <p className="text-solar-blue font-medium mb-3">CEO & Co-Founder</p>
                  <p className="text-gray-600">
                    With 15+ years in renewable energy, Sarah leads our mission to democratize solar power.
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                    alt="Michael Chen, CTO" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-solar-dark">Michael Chen</h3>
                  <p className="text-solar-blue font-medium mb-3">CTO & Co-Founder</p>
                  <p className="text-gray-600">
                    Michael brings cutting-edge engineering expertise to optimize our solar farm technology.
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80" 
                    alt="Amara Patel, COO" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-solar-dark">Amara Patel</h3>
                  <p className="text-solar-blue font-medium mb-3">COO</p>
                  <p className="text-gray-600">
                    Amara ensures smooth operations and community engagement in all our solar projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 md:py-20 bg-solar-dark text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
              <div className="w-24 h-1 bg-solar-yellow mx-auto mb-6"></div>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                We're proud of what we've accomplished in our journey to revolutionize community solar energy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Stat 1 */}
              <div className="bg-solar-dark/40 rounded-lg p-6 text-center border border-solar-yellow/20 hover:border-solar-yellow/50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-solar-yellow/10 rounded-full mb-4">
                  <Sun className="h-8 w-8 text-solar-yellow" />
                </div>
                <h3 className="text-4xl font-bold text-solar-yellow mb-2">25+</h3>
                <p className="text-gray-300">Community Solar Farms</p>
              </div>

              {/* Stat 2 */}
              <div className="bg-solar-dark/40 rounded-lg p-6 text-center border border-solar-blue/20 hover:border-solar-blue/50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-solar-blue/10 rounded-full mb-4">
                  <Users className="h-8 w-8 text-solar-blue" />
                </div>
                <h3 className="text-4xl font-bold text-solar-blue mb-2">15,000+</h3>
                <p className="text-gray-300">Households Powered</p>
              </div>

              {/* Stat 3 */}
              <div className="bg-solar-dark/40 rounded-lg p-6 text-center border border-solar-green/20 hover:border-solar-green/50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-solar-green/10 rounded-full mb-4">
                  <Globe className="h-8 w-8 text-solar-green" />
                </div>
                <h3 className="text-4xl font-bold text-solar-green mb-2">200K+</h3>
                <p className="text-gray-300">Tons of CO2 Offset</p>
              </div>

              {/* Stat 4 */}
              <div className="bg-solar-dark/40 rounded-lg p-6 text-center border border-solar-orange/20 hover:border-solar-orange/50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-solar-orange/10 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-solar-orange" />
                </div>
                <h3 className="text-4xl font-bold text-solar-orange mb-2">5+</h3>
                <p className="text-gray-300">Years of Operation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-solar-blue/10 to-solar-green/10 rounded-xl py-12 px-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-6">
                  Join Our Free Energy Movement
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Be part of our mission to make clean energy accessible to everyone. Get up to 150 free energy units monthly.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="/#contact" className="bg-solar-yellow hover:bg-solar-orange text-white font-medium py-3 px-6 rounded-lg transition-colors">
                    Contact Us
                  </a>
                  <a href="/#how-it-works" className="bg-white border border-solar-dark text-solar-dark font-medium py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors">
                    Learn How It Works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
