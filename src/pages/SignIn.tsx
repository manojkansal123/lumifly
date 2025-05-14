
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Eye, EyeOff, Mail, Key } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof formSchema>;

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      console.log("Attempting login with:", data.email);
      const result = await login(data.email, data.password);
      console.log("Login result:", result);
      if (result) {
        console.log("Login successful, redirecting to dashboard");
        navigate("/dashboard");
      } else {
        console.log("Login failed");
        // The toast notification is already handled in the login function
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Sign in failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  // Pre-fill demo credentials for convenience
  const fillDemoCredentials = () => {
    form.setValue("email", "demo@lumifly.com");
    form.setValue("password", "password");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 my-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-lumifly-navy tracking-tight">Sign In to Your Account</h1>
            <p className="mt-2 text-sm text-gray-600 mb-6">
              Access your solar energy dashboard and monitor your savings
            </p>
          </div>

          <Card className="shadow-lg border-solar-yellow/20">
            <CardHeader className="pb-4 space-y-1">
              <CardTitle className="text-xl font-semibold text-center">Welcome Back</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-4 pb-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input 
                              placeholder="you@example.com" 
                              className="pl-10" 
                              {...field} 
                              autoComplete="email"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Key className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              type={showPassword ? "text" : "password"}
                              className="pl-10"
                              {...field}
                              autoComplete="current-password"
                            />
                            <button
                              type="button"
                              onClick={toggleShowPassword}
                              className="absolute right-3 top-3"
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4 text-gray-400" />
                              ) : (
                                <Eye className="h-4 w-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-solar-yellow hover:bg-solar-orange"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 pt-2 pb-6 px-6">
              <div className="text-sm text-center">
                <Link to="#" className="text-lumifly-secondary hover:text-lumifly-tertiary">
                  Forgot your password?
                </Link>
              </div>
              <div className="text-sm text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-solar-orange hover:text-solar-dark font-medium">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </Card>
          
          <div className="text-center text-sm text-gray-500 mt-4">
            <p>Demo account: <button onClick={fillDemoCredentials} className="text-solar-orange hover:text-solar-dark">demo@lumifly.com / password</button></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
