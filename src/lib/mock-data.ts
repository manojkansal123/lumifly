
// Mock user products data
export const userProducts = [
  {
    id: "prod-1",
    name: "Solar Panel System - 5kW",
    installDate: "2023-08-15",
    status: "active",
    location: "Rooftop",
    warranty: "25 years"
  },
  {
    id: "prod-2",
    name: "Home Battery - 13.5kWh",
    installDate: "2023-09-22",
    status: "active",
    location: "Garage",
    warranty: "10 years"
  },
  {
    id: "prod-3",
    name: "Smart Meter",
    installDate: "2023-08-15",
    status: "active",
    location: "Utility Room",
    warranty: "5 years"
  }
];

// Mock user energy data
export const userEnergyData = {
  totalUnitsReceived: 4850,
  currentMonthGenerated: 320,
  previousMonthGenerated: 290,
  monthlyAverage: 305,
  yearToDate: 3420,
  savingsToDate: 725.50,
  totalInvestment: 12500,
  roiPercentage: 5.8,
  estimatedAnnualSavings: 1200,
  dailyAverageUsage: 15.2,
};

// Mock monthly energy generation data for charts
export const monthlyGenerationData = [
  { month: "Jan", units: 250 },
  { month: "Feb", units: 280 },
  { month: "Mar", units: 300 },
  { month: "Apr", units: 320 },
  { month: "May", units: 350 },
  { month: "Jun", units: 380 },
  { month: "Jul", units: 400 },
  { month: "Aug", units: 390 },
  { month: "Sep", units: 360 },
  { month: "Oct", units: 320 },
  { month: "Nov", units: 290 },
  { month: "Dec", units: 260 },
];

// Mock daily energy generation data
export const dailyGenerationData = [
  { day: "Mon", units: 16 },
  { day: "Tue", units: 14 },
  { day: "Wed", units: 18 },
  { day: "Thu", units: 17 },
  { day: "Fri", units: 15 },
  { day: "Sat", units: 12 },
  { day: "Sun", units: 10 },
];

// Mock environmental impact data
export const environmentalImpactData = {
  co2Reduced: 3200, // in kg
  treesEquivalent: 52,
  carbonFootprintReduction: 28, // percentage
};
