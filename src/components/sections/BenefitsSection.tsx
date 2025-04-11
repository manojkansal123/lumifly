
import { CheckCircle, Sparkles, Leaf, Home, Shield, Building, Clock, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

// Custom animated icon container component
const AnimatedIconContainer = ({ 
  bgColor, 
  children, 
  className = "" 
}: { 
  bgColor: string; 
  children: React.ReactNode; 
  className?: string;
}) => {
  return (
    <div 
      className={cn(
        "rounded-full p-3 w-20 h-20 flex items-center justify-center mb-6 relative overflow-hidden group", 
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${bgColor}30 0%, ${bgColor}15 100%)`,
        boxShadow: `0 5px 15px ${bgColor}20`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
        {children}
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">Benefits of Our Solar Program</h2>
          <div className="w-24 h-1 bg-solar-yellow mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who are enjoying free clean energy and contributing to a more sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit Card 1 */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <AnimatedIconContainer bgColor="#f97316">
              <Sparkles size={36} className="text-solar-yellow fill-solar-yellow/10" strokeWidth={1.5} />
            </AnimatedIconContainer>
            <h3 className="text-xl font-bold text-solar-dark mb-3">Free Energy Units</h3>
            <p className="text-gray-600">
              Get up to 150 units of free electricity every month. That's significant savings on your power bill.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>Zero cost for the first 150 units</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>Discounted rates beyond free units</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>Average annual savings of $500+</span>
              </li>
            </ul>
          </div>

          {/* Benefit Card 2 */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <AnimatedIconContainer bgColor="#10b981">
              <Leaf size={36} className="text-solar-green fill-solar-green/10" strokeWidth={1.5} />
            </AnimatedIconContainer>
            <h3 className="text-xl font-bold text-solar-dark mb-3">Environmental Impact</h3>
            <p className="text-gray-600">
              Reduce your carbon footprint and contribute to a cleaner environment with renewable energy.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>Reduce CO₂ emissions</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>Support renewable energy growth</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>Combat climate change locally</span>
              </li>
            </ul>
          </div>

          {/* Benefit Card 3 */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <AnimatedIconContainer bgColor="#0ea5e9">
              <Home size={36} className="text-solar-blue fill-solar-blue/10" strokeWidth={1.5} />
            </AnimatedIconContainer>
            <h3 className="text-xl font-bold text-solar-dark mb-3">No Installation Needed</h3>
            <p className="text-gray-600">
              Benefit from solar without installing panels on your property. No maintenance or upfront costs.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>No rooftop installation required</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>Zero maintenance responsibilities</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>Works for renters and homeowners</span>
              </li>
            </ul>
          </div>

          {/* Benefit Card 4 */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <AnimatedIconContainer bgColor="#f97316">
              <Shield size={36} className="text-solar-orange fill-solar-orange/10" strokeWidth={1.5} />
            </AnimatedIconContainer>
            <h3 className="text-xl font-bold text-solar-dark mb-3">Energy Security</h3>
            <p className="text-gray-600">
              Protect yourself from rising energy costs and grid outages with local renewable power.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>Stable energy costs</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>Reduced dependency on the grid</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>Protection from utility price hikes</span>
              </li>
            </ul>
          </div>

          {/* Benefit Card 5 */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <AnimatedIconContainer bgColor="#f97316">
              <Building size={36} className="text-solar-yellow fill-solar-yellow/10" strokeWidth={1.5} />
            </AnimatedIconContainer>
            <h3 className="text-xl font-bold text-solar-dark mb-3">Community Support</h3>
            <p className="text-gray-600">
              Strengthen your local community by supporting local jobs and shared infrastructure.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>Creates local green jobs</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>Builds community resilience</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>Supports local energy independence</span>
              </li>
            </ul>
          </div>

          {/* Benefit Card 6 */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <AnimatedIconContainer bgColor="#0ea5e9">
              <Zap size={36} className="text-solar-blue fill-solar-blue/10" strokeWidth={1.5} />
            </AnimatedIconContainer>
            <h3 className="text-xl font-bold text-solar-dark mb-3">Simple Signup Process</h3>
            <p className="text-gray-600">
              Getting started is easy with our streamlined enrollment process and dedicated support team.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>Quick 5-minute application</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>No credit checks required</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-solar-green mr-2" />
                <span>Dedicated customer support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
