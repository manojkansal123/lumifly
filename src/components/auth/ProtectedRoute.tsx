
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Access denied",
        description: "Please sign in to access this page",
        variant: "destructive",
      });
      navigate("/signin");
    }
  }, [isAuthenticated, navigate, toast]);

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
