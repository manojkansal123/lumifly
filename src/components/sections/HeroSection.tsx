
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-lumifly-navy to-lumifly-navy/80 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6bTQgMGgxdjFoLTF2LTF6bTIgMmgxdjFoLTF2LTF6bS0yIDRoMXYxaC0xdi0xem0wLTJoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6TTM0IDBoMXYxaC0xVjB6bTAgNGgxdjFoLTFWNHptMC0yaDF2MWgtMVYyek0zMiAwaDF2MWgtMVYwem0wIDRoMXYxaC0xVjR6bTAtMmgxdjFoLTFWMnptLTItMmgxdjFoLTFWMHptMCA0aDF2MWgtMVY0em0wLTJoMXYxaC0xVjJ6TTI4IDBoMXYxaC0xVjB6bTAgNGgxdjFoLTFWNHptMC0yaDF2MWgtMVYyek0yNiAwaDF2MWgtMVYwem0wIDRoMXYxaC0xVjR6bTAtMmgxdjFoLTFWMnptLTItMmgxdjFoLTFWMHptMCA0aDF2MWgtMVY0em0wLTJoMXYxaC0xVjJ6TTIyIDBoMXYxaC0xVjB6bTAgNGgxdjFoLTFWNHptMC0yaDF2MWgtMVYyek0yMCAwaDF2MWgtMVYwem0wIDRoMXYxaC0xVjR6bTAtMmgxdjFoLTFWMnptLTItMmgxdjFoLTFWMHptMCA0aDF2MWgtMVY0em0wLTJoMXYxaC0xVjJ6TTE2IDBoMXYxaC0xVjB6bTAgNGgxdjFoLTFWNHptMC0yaDF2MWgtMVYyek0xNCAwaDEydjFIMTRWMHptMCA0aDEydjFIMTRWNHptMC0yaDF2MWgtMVYyem0tMi0yaDF2MWgtMVYwem0wIDRoMXYxaC0xVjR6bTAtMmgxdjFoLTFWMnptLTItMmgxdjFoLTFWMHptMCA0aDF2MWgtMVY0em0wLTJoMXYxaC0xVjJ6TTggMGgxdjFIOFYwem0wIDRoMXYxSDhWNHptMC0yaDF2MUg4VjJ6TTYgMGgxdjFINlYwem0wIDRoMXYxSDZWNHptMC0yaDF2MUg2VjJ6bS0yLTJoMXYxSDRWMHptMCA0aDF2MUg0VjR6bTAtMmgxdjFINFYyek0yIDBoMXYxSDJWMHptMCA0aDF2MUgyVjR6bTAtMmgxdjFIMlYyek0wIDBoMXYxSDBWMHptMCA0aDF2MUgwVjR6bTAtMmgxdjFIMFYyeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="block">Free Solar Energy</span>
            <span className="block text-lumifly-gold">Up to 150 Units</span>
            <span className="block">For Every Customer</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Join our community solar program and reduce your energy bills while supporting renewable energy.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-lumifly-gold hover:bg-lumifly-purple text-white font-semibold px-8 text-lg">
              Get Free Solar
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 text-lg">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-lumifly-gold text-3xl font-bold">150</div>
              <div className="text-white">Free Energy Units</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-lumifly-gold text-3xl font-bold">30%</div>
              <div className="text-white">Average Bill Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-lumifly-gold text-3xl font-bold">1000+</div>
              <div className="text-white">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
