import { Moon, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-lumifly-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Moon className="h-8 w-8 text-lumifly-purple mr-2" />
              <span className="font-bold text-xl">Lumifly</span>
            </div>
            <p className="text-gray-300 mb-4">
              Innovative technology solutions empowering businesses and individuals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-lumifly-purple transition-colors">About Us</a></li>
              <li><a href="/#benefits" className="text-gray-300 hover:text-lumifly-purple transition-colors">Benefits</a></li>
              <li><a href="/#how-it-works" className="text-gray-300 hover:text-lumifly-purple transition-colors">How It Works</a></li>
              <li><a href="/#testimonials" className="text-gray-300 hover:text-lumifly-purple transition-colors">Testimonials</a></li>
              <li><a href="/#contact" className="text-gray-300 hover:text-lumifly-purple transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">Community Solar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">Free Energy Program</a></li>
              <li><a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">Residential Solar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">Commercial Solar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-lumifly-purple transition-colors">Solar Maintenance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-lumifly-purple mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Solar Street, Sunshine City, SC 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-lumifly-purple mr-2 flex-shrink-0" />
                <span className="text-gray-300">(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-lumifly-purple mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@sunnyfree.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lumifly Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
