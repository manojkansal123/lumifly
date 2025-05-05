
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '@/context/LanguageContext';
import { Calculator, IndianRupee, CheckCircle, ArrowRight } from 'lucide-react';

const CalculatorSection = () => {
  const { t } = useLanguage();
  const [monthlyBill, setMonthlyBill] = useState<number>(1500);
  const [capacity, setCapacity] = useState<number>(1);
  
  // Effect to calculate capacity based on monthly bill
  useEffect(() => {
    // Simple formula to estimate required solar capacity based on bill
    // Assuming 1kW capacity for every Rs. 1500 of monthly bill
    let estimatedCapacity = Math.max(1, Math.round(monthlyBill / 1500));
    // Cap at 3kW for simplicity
    estimatedCapacity = Math.min(estimatedCapacity, 3);
    setCapacity(estimatedCapacity);
  }, [monthlyBill]);

  // Calculate all the values
  const freeUnits = 110 * capacity;
  const newBillAmount = 1.5 * freeUnits;
  const savingsPerMonth = Math.max(0, monthlyBill - newBillAmount);
  const savingsPercentage = Math.round((savingsPerMonth / monthlyBill) * 100);
  const annualSavings = savingsPerMonth * 12;
  
  // Investment based on capacity
  let investment = 0;
  switch(capacity) {
    case 1:
      investment = 5000;
      break;
    case 2:
      investment = 10000;
      break;
    case 3:
    default:
      investment = 42000;
      break;
  }
  
  const breakEvenPeriod = annualSavings > 0 ? Math.round(investment / annualSavings * 10) / 10 : 0;
  const lifetimeSavings = annualSavings * 25;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">
            {t("calculator.title") || "Solar Savings Calculator"}
          </h2>
          <div className="w-24 h-1 bg-solar-yellow mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            {t("calculator.subtitle") || "See how much you could save by switching to solar energy"}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Inputs Side */}
            <div className="p-8 bg-gray-50">
              <h3 className="text-xl font-bold text-solar-dark mb-6 flex items-center">
                <Calculator className="mr-2 text-solar-yellow" />
                {t("calculator.input.bill") || "Enter Your Details"}
              </h3>

              <div className="space-y-8">
                {/* Average Monthly Bill */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("calculator.input.bill") || "Your Average Monthly Bill"}
                  </label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">₹</span>
                    <Input
                      type="number"
                      min="500"
                      max="10000"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <div className="mt-2">
                    <Slider
                      value={[monthlyBill]}
                      min={500}
                      max={10000}
                      step={100}
                      className="w-full"
                      onValueChange={(value) => setMonthlyBill(value[0])}
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>₹500</span>
                      <span>₹5,000</span>
                      <span>₹10,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <div className="h-8 w-8 rounded-full bg-solar-yellow/20 flex items-center justify-center mr-3">
                      <IndianRupee size={18} className="text-solar-yellow" />
                    </div>
                    <h4 className="font-medium text-solar-dark">Required Capacity</h4>
                  </div>
                  
                  <div className="pl-11">
                    <div className="font-bold text-2xl text-solar-dark">{capacity} kW</div>
                    <p className="text-sm text-gray-500 mt-1">Based on your monthly bill</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-500 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-solar-green" />
                  {t("calculator.info") || "Results are estimates based on typical energy usage patterns"}
                </p>
              </div>
            </div>

            {/* Results Side */}
            <div className="p-8 bg-white border-t md:border-t-0 md:border-l border-gray-100">
              <h3 className="text-xl font-bold text-solar-dark mb-6">
                {t("calculator.results.title") || "Your Estimated Savings"}
              </h3>

              <div className="space-y-6">
                {/* Free Units */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">{t("calculator.results.freeUnits") || "Free Units"}</p>
                    <p className="font-semibold text-solar-green">{freeUnits} units</p>
                  </div>
                  <div className="bg-solar-green/10 text-solar-green font-medium py-1 px-3 rounded-full text-sm">
                    {t("calculator.results.freeLabel") || "Monthly"}
                  </div>
                </div>

                {/* Bill Comparison */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">Existing Bill Amount</p>
                    <p className="font-semibold text-solar-dark line-through">₹{monthlyBill.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="text-solar-blue mx-2" />
                    <div>
                      <p className="text-sm text-gray-500">New Bill Amount</p>
                      <p className="font-semibold text-solar-blue">₹{newBillAmount.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {/* Monthly Savings */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">{t("calculator.results.monthlySavings") || "Monthly Savings"}</p>
                    <p className="font-semibold text-solar-orange">₹{savingsPerMonth.toLocaleString()}</p>
                  </div>
                  <div className="bg-solar-orange/10 text-solar-orange font-medium py-1 px-3 rounded-full text-sm">
                    {savingsPercentage}% {t("calculator.results.savingsPercent") || "reduction"}
                  </div>
                </div>

                {/* Annual Savings */}
                <div className="bg-solar-yellow/10 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-solar-dark">{t("calculator.results.annualSavings") || "Annual Savings"}</p>
                      <p className="text-xl font-bold text-solar-dark">₹{annualSavings.toLocaleString()}</p>
                    </div>
                    <div className="border-l pl-4">
                      <p className="text-sm text-solar-dark">Lifetime Savings (25 yrs)</p>
                      <p className="text-xl font-bold text-solar-dark">₹{lifetimeSavings.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                
                {/* Investment Details */}
                <div className="bg-solar-blue/5 p-4 rounded-lg">
                  <div className="flex justify-between flex-col sm:flex-row gap-3">
                    <div>
                      <p className="text-sm text-gray-600">Your Investment</p>
                      <p className="text-lg font-bold text-solar-dark">₹{investment.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Break-even Period</p>
                      <p className="text-lg font-bold text-solar-blue">{breakEvenPeriod} years</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-solar-yellow hover:bg-solar-orange text-white py-6 text-lg font-bold">
                  {t("calculator.results.signUp") || "Sign Up For Solar"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Start saving today with our easy solar installation program
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
