import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroOverlay from './components/HeroOverlay';
import ScrollJourney from './components/ScrollJourney';
import FarmSourcingTraceability from './components/FarmSourcingTraceability';
import ProductShowcase from './components/ProductShowcase';
import ExportCalculator from './components/ExportCalculator';
import GlobalLogisticsHubs from './components/GlobalLogisticsHubs';
import QualityStandards from './components/QualityStandards';
import PartnerTestimonials from './components/PartnerTestimonials';
import ExportFAQ from './components/ExportFAQ';
import CorporateLeadership from './components/CorporateLeadership';
import RequestQuoteModal from './components/RequestQuoteModal';
import AudioEngine from './components/AudioEngine';
import Footer from './components/Footer';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative text-slate-100 font-sans selection:bg-gold-500 selection:text-black">

      {/* 1. Corporate Header */}
      <Navbar onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* 2. Hero Commercial Showcase */}
      <HeroOverlay onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* 3. Factory Production Process */}
      <ScrollJourney onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* 4. Farm Sourcing Integrity & ECX Traceability */}
      <FarmSourcingTraceability />

      {/* 5. Export Product Portfolio Catalog */}
      <ProductShowcase onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* 6. B2B Freight Logistics Estimator */}
      <ExportCalculator onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* 7. Global Air & Ocean Logistics Hubs */}
      <GlobalLogisticsHubs onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* 8. Food Safety & Compliance Standards */}
      <QualityStandards />

      {/* 9. International Client Endorsements */}
      <PartnerTestimonials />

      {/* 10. Buyer Knowledge Base & FAQ */}
      <ExportFAQ />

      {/* 11. Corporate Overview & Addis Ababa HQ */}
      <CorporateLeadership onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* 12. Corporate Footer */}
      <Footer onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* Ambient Audio Engine */}
      <AudioEngine />

      {/* B2B Quotation Modal */}
      <RequestQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
