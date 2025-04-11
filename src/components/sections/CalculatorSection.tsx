
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

const CalculatorSection = () => {
  const [averageMonthlyBill, setAverageMonthlyBill] = useState<number>(150);
  const [monthlyConsumption, setMonthlyConsumption] = useState<number>(300);
  
  // Calculations
  const freeUnits = 150;
  const costPerUnit = averageMonthlyBill / monthlyConsumption;
  const savingsFromFreeUnits = freeUnits * costPerUnit;
  const remainingUnits = Math.max(0, monthlyConsumption - freeUnits);
  const remainingCost = remainingUnits * costPerUnit;
  const totalSavings = savingsFromFreeUnits;
  const newMonthlyBill = remainingCost;
  const savingsPercentage = (totalSavings / averageMonthlyBill) * 100;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">Savings Calculator</h2>
          <div className="w-24 h-1 bg-solar-yellow mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            See how much you could save with our free solar energy program.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Inputs Side */}
            <div className="p-8 bg-gray-50">
              <h3 className="text-xl font-bold text-solar-dark mb-6">Enter Your Details</h3>

              <div className="space-y-8">
                {/* Average Monthly Bill */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Average Monthly Electric Bill
                  </label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">$</span>
                    <Input
                      type="number"
                      min="10"
                      max="1000"
                      value={averageMonthlyBill}
                      onChange={(e) => setAverageMonthlyBill(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <div className="mt-2">
                    <Slider
                      value={[averageMonthlyBill]}
                      min={10}
                      max={500}
                      step={10}
                      className="w-full"
                      onValueChange={(value) => setAverageMonthlyBill(value[0])}
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$10</span>
                      <span>$250</span>
                      <span>$500</span>
                    </div>
                  </div>
                </div>

                {/* Monthly Consumption */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Monthly Energy Consumption (kWh)
                  </label>
                  <Input
                    type="number"
                    min="50"
                    max="2000"
                    value={monthlyConsumption}
                    onChange={(e) => setMonthlyConsumption(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="mt-2">
                    <Slider
                      value={[monthlyConsumption]}
                      min={50}
                      max={1000}
                      step={10}
                      className="w-full"
                      onValueChange={(value) => setMonthlyConsumption(value[0])}
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>50 kWh</span>
                      <span>500 kWh</span>
                      <span>1000 kWh</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-500">
                  Our program provides 150 free units of electricity every month.
                  Adjust your current bill and consumption to see your potential savings.
                </p>
              </div>
            </div>

            {/* Results Side */}
            <div className="p-8 bg-white border-t md:border-t-0 md:border-l border-gray-100">
              <h3 className="text-xl font-bold text-solar-dark mb-6">Your Estimated Savings</h3>

              <div className="space-y-6">
                {/* Free Units Value */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">Value of Free Units</p>
                    <p className="font-semibold text-solar-green">${savingsFromFreeUnits.toFixed(2)}</p>
                  </div>
                  <div className="bg-solar-green/10 text-solar-green font-medium py-1 px-3 rounded-full text-sm">
                    150 Free Units
                  </div>
                </div>

                {/* New Monthly Bill */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">New Monthly Bill</p>
                    <p className="font-semibold text-solar-dark">${newMonthlyBill.toFixed(2)}</p>
                  </div>
                  <div className="bg-solar-blue/10 text-solar-blue font-medium py-1 px-3 rounded-full text-sm">
                    {remainingUnits.toFixed(0)} Units
                  </div>
                </div>

                {/* Monthly Savings */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">Monthly Savings</p>
                    <p className="font-semibold text-solar-orange">${totalSavings.toFixed(2)}</p>
                  </div>
                  <div className="bg-solar-orange/10 text-solar-orange font-medium py-1 px-3 rounded-full text-sm">
                    {savingsPercentage.toFixed(0)}% Savings
                  </div>
                </div>

                {/* Annual Savings */}
                <div className="bg-solar-yellow/10 p-6 rounded-lg text-center">
                  <p className="text-sm text-solar-dark mb-1">Your Annual Savings</p>
                  <p className="text-3xl font-bold text-solar-dark">${(totalSavings * 12).toFixed(2)}</p>
                </div>

                <Button className="w-full bg-solar-yellow hover:bg-solar-orange text-white">
                  Sign Up Now & Start Saving
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
