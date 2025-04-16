
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { monthlyGenerationData } from "@/lib/mock-data";

interface EnergyGenerationChartProps {
  title: string;
  data?: typeof monthlyGenerationData;
}

const EnergyGenerationChart = ({ title, data = monthlyGenerationData }: EnergyGenerationChartProps) => {
  return (
    <Card className="w-full h-[400px]">
      <CardHeader className="pb-0">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUnits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFB400" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFB400" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#888', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#888', fontSize: 12 }}
              tickFormatter={(value) => `${value}kWh`}
            />
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-3 border border-gray-200 shadow-lg rounded-md">
                      <p className="font-medium">{payload[0].payload.month}</p>
                      <p className="text-solar-orange font-semibold">
                        {payload[0].value} kWh
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="units"
              stroke="#FFB400"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorUnits)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default EnergyGenerationChart;
