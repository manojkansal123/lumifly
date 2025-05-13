
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const DashboardHeader = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Get the first letter of the user's name for the avatar fallback
  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <div className="bg-white border-b border-gray-200 py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-lumifly-navy">Dashboard</h1>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Avatar className="h-9 w-9 bg-solar-yellow/20">
              <AvatarFallback className="text-solar-orange">
                {userInitial}
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="text-sm font-medium line-clamp-1">{user?.name}</p>
              <p className="text-xs text-gray-500 line-clamp-1">{user?.email}</p>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="sm"
            className="border-gray-200 text-gray-700 whitespace-nowrap"
            onClick={handleLogout}
          >
            <LogOut size={16} className="mr-2" />
            <span className="hidden md:inline">Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
