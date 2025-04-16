
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-gray-100 py-3 px-4 md:px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/f24cd895-98e0-49fa-b35b-d6541b7d9521.png" 
            alt="Lumifly Logo" 
            className="h-10 w-10 mr-2" 
          />
          <span className="font-bold text-xl text-lumifly-navy">Lumifly</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-solar-dark hover:text-solar-orange transition-colors">Home</Link>
          <Link to="/about" className="text-solar-dark hover:text-solar-orange transition-colors">About Us</Link>
          <Link to="/benefits" className="text-solar-dark hover:text-solar-orange transition-colors">Benefits</Link>
          <Link to="/how-it-works" className="text-solar-dark hover:text-solar-orange transition-colors">How It Works</Link>
          <Link to="/contact" className="text-solar-dark hover:text-solar-orange transition-colors">Contact</Link>
          
          {isAuthenticated ? (
            <Button 
              className="bg-solar-yellow hover:bg-solar-orange text-white"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </Button>
          ) : (
            <>
              <Link to="/signin" className="text-solar-dark hover:text-solar-orange transition-colors">Sign In</Link>
              <Button 
                className="bg-solar-yellow hover:bg-solar-orange text-white"
                onClick={() => navigate("/signup")}
              >
                Get Started
              </Button>
            </>
          )}
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
            
            {isAuthenticated ? (
              <Button 
                className="bg-solar-yellow hover:bg-solar-orange text-white w-full"
                onClick={() => {
                  navigate("/dashboard");
                  setIsMenuOpen(false);
                }}
              >
                Dashboard
              </Button>
            ) : (
              <>
                <Link to="/signin" className="text-solar-dark hover:text-solar-orange py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                <Button 
                  className="bg-solar-yellow hover:bg-solar-orange text-white w-full"
                  onClick={() => {
                    navigate("/signup");
                    setIsMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
