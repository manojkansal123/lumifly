
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface EnergySavingsCardProps {
  totalInvestment: number;
  savingsToDate: number;
  roiPercentage: number;
}

const EnergySavingsCard = ({
  totalInvestment,
  savingsToDate,
  roiPercentage,
}: EnergySavingsCardProps) => {
  const savingsPercentage = Math.round((savingsToDate / totalInvestment) * 100);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Return on Investment</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-40 h-40">
            <CircularProgressbar
              value={savingsPercentage}
              text={`${savingsPercentage}%`}
              styles={buildStyles({
                pathColor: "#FFB400",
                textColor: "#1E293B",
                trailColor: "#E2E8F0",
              })}
            />
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <p className="text-sm text-gray-500">Total Investment</p>
              <p className="text-2xl font-bold">${totalInvestment.toLocaleString()}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Savings to Date</p>
              <p className="text-2xl font-bold text-solar-orange">${savingsToDate.toLocaleString()}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">ROI</p>
              <p className="text-lg font-medium">
                {roiPercentage}% <span className="text-gray-400 text-sm">annualized</span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnergySavingsCard;
