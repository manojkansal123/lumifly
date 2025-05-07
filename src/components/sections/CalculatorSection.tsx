
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '@/context/LanguageContext';
import { Calculator, IndianRupee, CheckCircle, ArrowRight, Lightbulb, Percent, Info, Sun } from 'lucide-react';

const CalculatorSection = () => {
  const { t } = useLanguage();
  const [monthlyBill, setMonthlyBill] = useState<number>(1500);
  const [capacity, setCapacity] = useState<number>(3); // Default set to 3 kW
  const [manualCapacity, setManualCapacity] = useState<boolean>(false);
  const [manualBill, setManualBill] = useState<boolean>(false);
  
  // Effect to calculate capacity based on monthly bill
  useEffect(() => {
    if (!manualCapacity && manualBill) {
      // Only calculate if bill amount is changed by user
      // First adjust the bill amount as per formula: adjusted = Current Bill Amount / 1.04
      const adjustedBill = monthlyBill / 1.04;
      
      // Formula for solar system size calculation
      let calculatedValue;
      
      if (adjustedBill < 145) {
        calculatedValue = adjustedBill / 2.9;
      } else if (adjustedBill < 850) {
        calculatedValue = (50 + (adjustedBill - 145) / 4.7);
      } else if (adjustedBill < 1990) {
        calculatedValue = (200 + (adjustedBill - 850) / 5.7);
      } else {
        calculatedValue = (400 + (adjustedBill - 1990) / 6.1);
      }
      
      // Convert to kW based on the updated formula (divide by 110 only)
      let estimatedCapacity = calculatedValue / 110;
      
      // Round to nearest whole number
      estimatedCapacity = Math.round(estimatedCapacity);
      
      // Ensure minimum of 1kW and maximum of 9kW for the UI
      estimatedCapacity = Math.max(1, Math.min(estimatedCapacity, 9));
      
      setCapacity(estimatedCapacity);
    }
  }, [monthlyBill, manualCapacity, manualBill]);

  // Effect to calculate monthly bill based on capacity
  useEffect(() => {
    if (!manualBill && manualCapacity) {
      // Calculate bill based on capacity
      const unitsGenerated = 110 * capacity;
      let calculatedBillAmount = calculateBillAmount(unitsGenerated);
      
      // Round to nearest 100
      calculatedBillAmount = Math.round(calculatedBillAmount / 100) * 100;
      
      // Ensure minimum of 100 and maximum of 6000 for the UI (increased from 5000)
      calculatedBillAmount = Math.max(100, Math.min(calculatedBillAmount, 6000));
      
      setMonthlyBill(calculatedBillAmount);
    }
  }, [capacity, manualBill, manualCapacity]);

  // Helper function to calculate bill amount based on units
  const calculateBillAmount = (units: number) => {
    let billAmount = 0;
    
    if (units <= 50) {
      billAmount = units * 2.9;
    } else if (units <= 200) {
      billAmount = 50 * 2.9 + (units - 50) * 4.7;
    } else if (units <= 400) {
      billAmount = 50 * 2.9 + 150 * 4.7 + (units - 200) * 5.7;
    } else {
      billAmount = 50 * 2.9 + 150 * 4.7 + 200 * 5.7 + (units - 400) * 6.1;
    }
    
    // Multiply with 1.04 to get total bill amount
    return billAmount * 1.04;
  };

  // Calculate energy generation based on capacity
  const freeUnits = 110 * capacity;
  
  // Calculate savings using the formula
  const calculateSavings = () => {
    let billAmount = 0;
    const unitsGenerated = freeUnits;
    
    if (unitsGenerated <= 50) {
      billAmount = unitsGenerated * 2.9;
    } else if (unitsGenerated <= 200) {
      billAmount = 50 * 2.9 + (unitsGenerated - 50) * 4.7;
    } else if (unitsGenerated <= 400) {
      billAmount = 50 * 2.9 + 150 * 4.7 + (unitsGenerated - 200) * 5.7;
    } else {
      billAmount = 50 * 2.9 + 150 * 4.7 + 200 * 5.7 + (unitsGenerated - 400) * 6.1;
    }
    
    // Multiply with 1.04 to get total savings
    return billAmount * 1.04;
  };
  
  // Calculate all the values
  const savingsAmount = calculateSavings();
  const newBillAmount = 1.5 * freeUnits;
  const savingsPerMonth = Math.max(0, savingsAmount - newBillAmount);
  const savingsPercentage = Math.round((savingsPerMonth / monthlyBill) * 100);
  const annualSavings = savingsPerMonth * 12;
  
  // Investment based on capacity - updated to add 60000 for each kW beyond 3kW
  let investment = 42000; // Base cost for 3kW system
  
  if (capacity < 3) {
    // For systems smaller than 3kW
    switch(Math.round(capacity)) {
      case 1:
        investment = 5000;
        break;
      case 2:
        investment = 10000;
        break;
      // 3kW case is covered by the default value of 42000
    }
  } else if (capacity > 3) {
    // For systems larger than 3kW, add 60000 for each additional kW
    investment = 42000 + (capacity - 3) * 60000;
  }
  
  const breakEvenPeriod = annualSavings > 0 ? Math.round(investment / annualSavings * 10) / 10 : 0;
  const lifetimeSavings = annualSavings * 25;

  // Handler for changing monthly bill
  const handleMonthlyBillChange = (value: number) => {
    setManualBill(true);
    setManualCapacity(false);
    setMonthlyBill(value);
  };

  // Handler for changing capacity manually
  const handleCapacityChange = (value: number) => {
    setManualCapacity(true);
    setManualBill(false);
    setCapacity(value);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lumifly-navy mb-4">
            {t("calculator.title") || "Solar Savings Calculator"}
          </h2>
          <div className="w-24 h-1 bg-solar-orange mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            {t("calculator.subtitle") || "See how much you could save with Lumifly's solar energy solutions"}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Inputs Side - Enhanced with more content */}
            <div className="p-8 bg-gray-50">
              <h3 className="text-xl font-bold text-lumifly-navy mb-6 flex items-center">
                <Calculator className="mr-2 text-solar-orange" />
                Solar Calculator
              </h3>

              <div className="space-y-8">
                {/* Solar System Size Input - MOVED TO FIRST POSITION */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Solar System Size (kW)
                  </label>
                  <div className="flex items-center">
                    <Input
                      type="number"
                      min="1"
                      max="9"
                      value={capacity}
                      onChange={(e) => handleCapacityChange(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="text-gray-500 ml-2">kW</span>
                  </div>
                  <div className="mt-2">
                    <Slider
                      value={[capacity]}
                      min={1}
                      max={9}
                      step={1}
                      className="w-full"
                      onValueChange={(value) => handleCapacityChange(value[0])}
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1 kW</span>
                      <span>5 kW</span>
                      <span>9 kW</span>
                    </div>
                  </div>
                </div>

                {/* Average Monthly Bill - MOVED TO SECOND POSITION */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Average Monthly Electricity Bill
                  </label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">₹</span>
                    <Input
                      type="number"
                      min="100"
                      max="6000"
                      value={monthlyBill}
                      onChange={(e) => handleMonthlyBillChange(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <div className="mt-2">
                    <Slider
                      value={[monthlyBill]}
                      min={100}
                      max={6000}
                      step={100}
                      className="w-full"
                      onValueChange={(value) => handleMonthlyBillChange(value[0])}
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>₹100</span>
                      <span>₹3,000</span>
                      <span>₹6,000</span>
                    </div>
                  </div>
                </div>

                {/* Required Capacity Box */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <div className="h-8 w-8 rounded-full bg-solar-orange/20 flex items-center justify-center mr-3">
                      <Sun size={18} className="text-solar-orange" />
                    </div>
                    <h4 className="font-medium text-lumifly-navy">
                      {manualCapacity ? "Selected Solar System" : "Recommended Solar System"}
                    </h4>
                  </div>
                  
                  <div className="pl-11">
                    <div className="font-bold text-2xl text-lumifly-navy">{capacity} kW</div>
                    <p className="text-sm text-gray-500 mt-1">
                      {manualCapacity ? "Custom selection" : "Based on your electricity consumption pattern"}
                    </p>
                  </div>
                </div>

                {/* How It Works */}
                <div className="bg-solar-yellow/10 p-4 rounded-lg">
                  <h4 className="font-medium text-lumifly-navy flex items-center mb-3">
                    <Lightbulb size={18} className="mr-2 text-solar-orange" />
                    How Our Solar Program Works
                  </h4>
                  <ul className="space-y-2 pl-7 list-disc text-sm text-gray-600">
                    <li>Zero upfront cost for installation</li>
                    <li>Generate free electricity from day one</li>
                    <li>Reduce your electricity bill substantially</li>
                    <li>Maintenance and repairs handled by us</li>
                    <li>25-year warranty on solar panels</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-500 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-solar-orange" />
                    Results are estimates based on typical energy usage patterns
                  </p>
                </div>
              </div>
            </div>

            {/* Results Side */}
            <div className="p-8 bg-white border-t md:border-t-0 md:border-l border-gray-100">
              <h3 className="text-xl font-bold text-lumifly-navy mb-6">
                Your Estimated Savings
              </h3>

              <div className="space-y-6">
                {/* Free Units */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">Free Energy Generated</p>
                    <p className="font-semibold text-solar-orange">{freeUnits} units/month</p>
                  </div>
                  <div className="bg-solar-orange/10 text-solar-orange font-medium py-1 px-3 rounded-full text-sm">
                    Green Energy
                  </div>
                </div>

                {/* Bill Comparison */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">Current Monthly Bill</p>
                    <p className="font-semibold text-lumifly-navy line-through">₹{monthlyBill.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="text-solar-orange mx-2" />
                    <div>
                      <p className="text-sm text-gray-500">New Monthly Bill</p>
                      <p className="font-semibold text-solar-orange">₹{newBillAmount.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {/* Monthly Savings */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">Monthly Bill Savings</p>
                    <p className="font-semibold text-solar-orange">₹{savingsPerMonth.toLocaleString()}</p>
                  </div>
                  <div className="bg-solar-orange/10 text-solar-orange font-medium py-1 px-3 rounded-full text-sm">
                    {savingsPercentage}% reduction
                  </div>
                </div>

                {/* Annual Savings */}
                <div className="bg-solar-orange/10 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-lumifly-navy">Annual Savings</p>
                      <p className="text-xl font-bold text-lumifly-navy">₹{annualSavings.toLocaleString()}</p>
                    </div>
                    <div className="border-l pl-4">
                      <p className="text-sm text-lumifly-navy">25-Year Savings</p>
                      <p className="text-xl font-bold text-lumifly-navy">₹{lifetimeSavings.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                
                {/* Investment Details */}
                <div className="bg-solar-yellow/10 p-4 rounded-lg">
                  <div className="flex justify-between flex-col sm:flex-row gap-3">
                    <div>
                      <p className="text-sm text-gray-600">One-time Investment</p>
                      <p className="text-lg font-bold text-lumifly-navy">₹{investment.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Break-even Period</p>
                      <p className="text-lg font-bold text-solar-orange">{breakEvenPeriod} years</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-solar-orange hover:bg-solar-orange/90 text-white py-6 text-lg font-bold">
                  Sign Up For Solar Today
                </Button>

                <div className="flex items-start space-x-2">
                  <Info className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                  <p className="text-xs text-gray-500">
                    Start saving today with our zero-upfront cost solar installation program. 
                    Actual savings may vary based on your actual consumption pattern and local regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
