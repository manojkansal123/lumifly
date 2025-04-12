
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import LumiflyLogo from '@/components/ui/lumifly-logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border py-3 px-4 md:px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <LumiflyLogo className="h-9 w-9 mr-2" />
          <span className="font-bold text-xl text-foreground">Lumifly Energies</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-lumifly-purple transition-colors">Home</Link>
          <Link to="/about" className="text-foreground hover:text-lumifly-purple transition-colors">About Us</Link>
          <Link to="/benefits" className="text-foreground hover:text-lumifly-purple transition-colors">Benefits</Link>
          <Link to="/how-it-works" className="text-foreground hover:text-lumifly-purple transition-colors">How It Works</Link>
          <Link to="/contact" className="text-foreground hover:text-lumifly-purple transition-colors">Contact</Link>
          <Button className="bg-lumifly-gold hover:bg-lumifly-purple text-white">Get Started</Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-solar-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <div className="flex flex-col space-y-3 py-4 px-6">
            <Link to="/" className="text-solar-dark hover:text-solar-orange py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-solar-dark hover:text-solar-orange py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/benefits" className="text-solar-dark hover:text-solar-orange py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Benefits</Link>
            <Link to="/how-it-works" className="text-solar-dark hover:text-solar-orange py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
            <Link to="/contact" className="text-solar-dark hover:text-solar-orange py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Button className="bg-solar-yellow hover:bg-solar-orange text-white w-full mt-2" onClick={() => setIsMenuOpen(false)}>Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
