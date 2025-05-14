
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/language/LanguageSwitcher";

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Text color class based on scroll state
  const textColorClass = scrolled ? "text-solar-dark" : "text-black";
  // Make sure nav links are always visible
  const navLinkClass = (isActive: boolean) => {
    return `px-3 py-2 rounded-md text-sm font-medium ${
      isActive
        ? "text-solar-yellow"
        : scrolled
        ? "text-gray-800 hover:text-solar-yellow"
        : "text-black hover:text-solar-yellow"
    }`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/f24cd895-98e0-49fa-b35b-d6541b7d9521.png" 
              alt="Lumifly Logo" 
              className="h-8 w-8 mr-2" 
            />
            <span className={`font-bold text-xl ${textColorClass}`}>
              Lumifly
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={navLinkClass(location.pathname === "/")}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/about"
              className={navLinkClass(location.pathname === "/about")}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/benefits"
              className={navLinkClass(location.pathname === "/benefits")}
            >
              {t("nav.benefits")}
            </Link>
            <Link
              to="/how-it-works"
              className={navLinkClass(location.pathname === "/how-it-works")}
            >
              {t("nav.howitworks")}
            </Link>
            <Link
              to="/contact"
              className={navLinkClass(location.pathname === "/contact")}
            >
              {t("nav.contact")}
            </Link>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Auth Buttons */}
            <div className="ml-4 flex items-center">
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button className="bg-solar-orange hover:bg-solar-orange/90 text-white">
                    {t("nav.dashboard")}
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/signin">
                    <Button 
                      className="bg-solar-orange hover:bg-solar-orange/90 text-white"
                    >
                      {t("nav.signin")}
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="bg-solar-orange hover:bg-solar-orange/90 text-white ml-2">
                      {t("nav.signup")}
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
                scrolled ? "text-gray-800" : "text-black"
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/benefits"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
            >
              {t("nav.benefits")}
            </Link>
            <Link
              to="/how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
            >
              {t("nav.howitworks")}
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
            >
              {t("nav.contact")}
            </Link>

            <div className="pt-4 pb-3 border-t border-gray-200">
              {isAuthenticated ? (
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-solar-orange text-white text-center"
                >
                  {t("nav.dashboard")}
                </Link>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link
                    to="/signin"
                    className="block px-3 py-2 rounded-md text-base font-medium bg-solar-orange text-white text-center"
                  >
                    {t("nav.signin")}
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-3 py-2 rounded-md text-base font-medium bg-solar-orange text-white text-center"
                  >
                    {t("nav.signup")}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
