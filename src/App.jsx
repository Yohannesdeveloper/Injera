import React, { useState, useCallback } from 'react';
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
import { HexagonPattern } from './components/HexagonPattern';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: -9999, y: -9999 });

  const handleMouseMove = useCallback((e) => {
    setCursor({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <div
      className="min-h-screen relative text-slate-100 font-sans selection:bg-gold-500 selection:text-black"
      onMouseMove={handleMouseMove}
    >

      {/* Hexagon pattern with cursor glow on edges */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HexagonPattern
          radius={50}
          gap={6}
          className="fill-gold-500/10 stroke-gold-500/15"
          strokeDasharray="0"
          direction="vertical"
        />
        <div
          className="absolute inset-0"
          style={{
            maskImage: `radial-gradient(200px circle at ${cursor.x}px ${cursor.y}px, black 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(200px circle at ${cursor.x}px ${cursor.y}px, black 0%, transparent 100%)`,
          }}
        >
          <HexagonPattern
            radius={50}
            gap={6}
            className="fill-gold-500/40 stroke-gold-500/60"
            strokeDasharray="0"
            direction="vertical"
          />
        </div>
      </div>

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
