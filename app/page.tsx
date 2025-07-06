"use client";

import HeroSection from "./components/HeroSection";
import SystemArchitecture from "./components/SystemArchitecture";
import TechnicalMetrics from "./components/TechnicalMetrics";
import ContactSection from "./components/ContactSection";
import BlogSection from "./components/BlogSection";

export default function BackendPortfolio() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
      <HeroSection />
      <SystemArchitecture />
      <TechnicalMetrics />
      {/* <BlogSection /> */}
      <ContactSection />
    </main>
  );
}
