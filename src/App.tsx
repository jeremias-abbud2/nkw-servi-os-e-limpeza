import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { BudgetCalculator } from './components/BudgetCalculator';
import { ReviewsSection } from './components/ReviewsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceForCalculator, setSelectedServiceForCalculator] = useState<string | undefined>(undefined);

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceForCalculator(serviceId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F7] text-[#0A1128] font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesSection onSelectServiceForCalculator={handleSelectService} />
        <BeforeAfterSection />
        <BudgetCalculator initialServiceId={selectedServiceForCalculator} />
        <ReviewsSection />
        <AboutSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
