
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
    text: string;
  };
  color?: "default" | "primary" | "secondary" | "success" | "warning";
}

const StatCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon,
  trend,
  color = "default" 
}: StatCardProps) => {
  const colorVariants = {
    default: "bg-white",
    primary: "bg-gradient-to-br from-solar-yellow/20 to-solar-orange/10",
    secondary: "bg-gradient-to-br from-blue-50 to-blue-100/50",
    success: "bg-gradient-to-br from-green-50 to-green-100/50",
    warning: "bg-gradient-to-br from-amber-50 to-amber-100/50",
  };
  
  const iconVariants = {
    default: "text-gray-400",
    primary: "text-solar-orange",
    secondary: "text-blue-500",
    success: "text-green-500",
    warning: "text-amber-500",
  };

  return (
    <Card className={`${colorVariants[color]} border-none shadow-md hover:shadow-lg transition-shadow duration-300`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
            {trend && (
              <div className="flex items-center mt-2">
                <span className={`text-xs ${trend.isPositive ? 'text-green-500' : 'text-red-500'} font-medium`}>
                  {trend.isPositive ? '+' : '-'}{trend.value}%
                </span>
                <span className="text-xs text-gray-500 ml-1">{trend.text}</span>
              </div>
            )}
          </div>
          <div className={`${iconVariants[color]} bg-white p-3 rounded-full shadow-sm`}>
            <Icon size={20} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
