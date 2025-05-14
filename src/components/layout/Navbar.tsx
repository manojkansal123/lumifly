
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User as UserIcon, Settings } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/language/LanguageSwitcher";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  // Get the first letter of the user's name for the avatar fallback
  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "U";
  
  const handleLogout = async () => {
    console.log("Logout clicked");
    await logout();
    navigate("/");
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

            {/* Auth Buttons or User Profile */}
            <div className="ml-4 flex items-center">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 outline-none focus:ring-2 focus:ring-solar-yellow rounded-md p-1">
                      <Avatar className="h-9 w-9 bg-solar-yellow/20 cursor-pointer">
                        <AvatarFallback className="text-solar-orange">
                          {userInitial}
                        </AvatarFallback>
                      </Avatar>
                      <div className="hidden md:block text-left">
                        <p className="text-sm font-medium line-clamp-1">{user?.name || "User"}</p>
                        <p className="text-xs text-gray-500 line-clamp-1">{user?.email || ""}</p>
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-white">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      <UserIcon className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Preferences</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
            {isAuthenticated && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="mr-2 p-1">
                    <Avatar className="h-8 w-8 bg-solar-yellow/20 cursor-pointer">
                      <AvatarFallback className="text-solar-orange text-sm">
                        {userInitial}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Preferences</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
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
