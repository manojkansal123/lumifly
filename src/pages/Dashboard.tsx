
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import EnergyGenerationChart from "@/components/dashboard/EnergyGenerationChart";
import ProductsList from "@/components/dashboard/ProductsList";
import EnergySavingsCard from "@/components/dashboard/EnergySavingsCard";
import { userEnergyData, environmentalImpactData } from "@/lib/mock-data";

import { Zap, Battery, Calendar, DollarSign, TrendingUp, Leaf } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <DashboardHeader />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard 
              title="Total Energy Received"
              value={`${userEnergyData.totalUnitsReceived} kWh`}
              description="Since enrollment"
              icon={Zap}
              color="primary"
            />
            
            <StatCard 
              title="Current Month Generation"
              value={`${userEnergyData.currentMonthGenerated} kWh`}
              trend={{
                value: Math.round((userEnergyData.currentMonthGenerated - userEnergyData.previousMonthGenerated) / userEnergyData.previousMonthGenerated * 100),
                isPositive: userEnergyData.currentMonthGenerated > userEnergyData.previousMonthGenerated,
                text: "vs last month"
              }}
              icon={Battery}
              color="secondary"
            />
            
            <StatCard 
              title="Money Saved"
              value={`$${userEnergyData.savingsToDate.toLocaleString()}`}
              description="Total savings to date"
              icon={DollarSign}
              color="success"
            />
          </div>
        </section>

        <section className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <EnergyGenerationChart title="Monthly Energy Generation" />
          </div>
          
          <div>
            <EnergySavingsCard 
              totalInvestment={userEnergyData.totalInvestment}
              savingsToDate={userEnergyData.savingsToDate}
              roiPercentage={userEnergyData.roiPercentage}
            />
          </div>
        </section>

        <section className="mb-8">
          <ProductsList />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Environmental Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
              title="CO₂ Emissions Reduced"
              value={`${environmentalImpactData.co2Reduced} kg`}
              icon={Leaf}
              color="success"
            />
            
            <StatCard 
              title="Equivalent to Trees Planted"
              value={environmentalImpactData.treesEquivalent}
              icon={Leaf}
              color="success"
            />
            
            <StatCard 
              title="Carbon Footprint Reduction"
              value={`${environmentalImpactData.carbonFootprintReduction}%`}
              description="From your household"
              icon={TrendingUp}
              color="success"
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
