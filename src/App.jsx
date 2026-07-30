import React, { useState, useCallback } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HeroOverlay from './components/HeroOverlay';
import ScrollJourney from './components/ScrollJourney';
import FarmSourcingTraceability from './components/FarmSourcingTraceability';
import ProductShowcase from './components/ProductShowcase';
import BaltenaCollection from './components/BaltenaCollection';
import ExportCalculator from './components/ExportCalculator';
import GlobalLogisticsHubs from './components/GlobalLogisticsHubs';
import QualityStandards from './components/QualityStandards';
import PartnerTestimonials from './components/PartnerTestimonials';
import ExportFAQ from './components/ExportFAQ';
import ContactSection from './components/ContactSection';
import CorporateLeadership from './components/CorporateLeadership';
import QRCodeSection from './components/QRCodeSection';
import RequestQuoteModal from './components/RequestQuoteModal';
import AudioEngine from './components/AudioEngine';
import Footer from './components/Footer';
import GradualBlur from './components/GradualBlur';
import { HexagonPattern } from './components/HexagonPattern';

function AppContent() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: -9999, y: -9999 });

  const handleMouseMove = useCallback((e) => {
    setCursor({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <div
      className="min-h-screen relative font-sans selection:bg-gold-500 selection:text-black w-full max-w-full overflow-x-hidden"
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
      <Navbar />

      {/* 2. Hero Commercial Showcase */}
      <HeroOverlay onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* 3. Our Process */}
      <ScrollJourney />

      {/* 4. Why Choose Us */}
      <FarmSourcingTraceability />

      {/* 5. Our Products */}
      <ProductShowcase onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* 6. Baltena Collection */}
      <BaltenaCollection onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* 7. Final CTA */}
      <ExportCalculator onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* 8. Global Reach */}
      <GlobalLogisticsHubs onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* 9. Who We Serve */}
      <QualityStandards />

      {/* 10. Testimonials */}
      <PartnerTestimonials />

      {/* 11. FAQ */}
      <ExportFAQ />

      {/* 12. Contact Us */}
      <ContactSection onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* 13. Who We Are + Our Commitment */}
      <CorporateLeadership onRequestQuote={() => setIsQuoteModalOpen(true)} />

      {/* 13.5 QR Code */}
      <QRCodeSection />

      {/* GradualBlur footer fade */}
      <GradualBlur preset="page-footer" strength={2} opacity={0.6} />

      {/* 14. Corporate Footer */}
      <Footer />

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

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
