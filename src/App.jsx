// src/App.jsx
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/landing/Navbar";
import HeroSection from "./components/landing/HeroSection";
import FeaturesSection from "./components/landing/FeaturesSection";
import LiveDemoSection from "./components/landing/LiveDemoSection";
import PricingSection from "./components/landing/PricingSection";
import CTASection from "./components/landing/CTASection";
import Footer from "./components/landing/Footer";
import Advantage from "./components/landing/Advantage";
import OrganizeTasksSection from "./components/landing/OrganizeTasksSection";

export default function TeamForTasksSite() {
  const [billingAnnual, setBillingAnnual] = useState(true);
  
  const demoTeams = [
    {
      name: "store",
      progress: 50,
      stats: { total: 6, pending: 2, verify: 0, done: 3 },
      tasks: [
        { title: "Update shelf lighting", pr: "medium", due: "Overdue" },
        { title: "Stock count LEDs", pr: "low", due: "Tomorrow" },
      ],
    },
    {
      name: "Kanhu",
      progress: 0,
      stats: { total: 10, pending: 9, verify: 0, done: 0 },
      tasks: [
        { title: "Vendor follow-up", pr: "medium", due: "Overdue" },
        { title: "Create display", pr: "high", due: "Today" },
      ],
    },
    {
      name: "dj",
      progress: 0,
      stats: { total: 7, pending: 7, verify: 0, done: 0 },
      tasks: [
        { title: "Service ticket #2458", pr: "low", due: "Overdue" },
        { title: "Replace drivers", pr: "medium", due: "This week" },
      ],
    },
  ];

  const pieData = [
    { name: "Pending", value: 18 },
    { name: "To Verify", value: 0 },
    { name: "Completed", value: 3 },
  ];

  const COLORS = ["#fbbf24", "#a78bfa", "#34d399"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 text-foreground">
      <Navbar />
      
      <HeroSection demoTeams={demoTeams} />
      
      <FeaturesSection />
      
      <LiveDemoSection 
        demoTeams={demoTeams} 
        pieData={pieData} 
        COLORS={COLORS}
      />
      
      <PricingSection 
        billingAnnual={billingAnnual}
        setBillingAnnual={setBillingAnnual}
      />

      <OrganizeTasksSection />

      <Advantage />

      
      {/* <CTASection /> */}
      
      <Footer />
    </div>
  );
}