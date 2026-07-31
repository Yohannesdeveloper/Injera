import React, { useState, useCallback, Suspense, lazy } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HeroOverlay from './components/HeroOverlay';
import GradualBlur from './components/GradualBlur';
import { HexagonPattern } from './components/HexagonPattern';
import LoadingFallback from './components/LoadingFallback';

// Lazy load heavy components
const ScrollJourney = lazy(() => import('./components/ScrollJourney'));
const FarmSourcingTraceability = lazy(() => import('./components/FarmSourcingTraceability'));
const ProductShowcase = lazy(() => import('./components/ProductShowcase'));
const BaltenaCollection = lazy(() => import('./components/BaltenaCollection'));
const ExportCalculator = lazy(() => import('./components/ExportCalculator'));
const GlobalLogisticsHubs = lazy(() => import('./components/GlobalLogisticsHubs'));
const QualityStandards = lazy(() => import('./components/QualityStandards'));
const PartnerTestimonials = lazy(() => import('./components/PartnerTestimonials'));
const ExportFAQ = lazy(() => import('./components/ExportFAQ'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const CorporateLeadership = lazy(() => import('./components/CorporateLeadership'));
const QRCodeSection = lazy(() => import('./components/QRCodeSection'));
const RequestQuoteModal = lazy(() => import('./components/RequestQuoteModal'));
const AudioEngine = lazy(() => import('./components/AudioEngine'));
const Footer = lazy(() => import('./components/Footer'));

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

      {/* 3. About Us */}
      <Suspense fallback={<LoadingFallback message="Loading leadership..." />}>
        <CorporateLeadership onRequestQuote={() => setIsQuoteModalOpen(true)} />
      </Suspense>

      {/* 4. Baltena Collection */}
      <Suspense fallback={<LoadingFallback message="Loading collection..." />}>
        <BaltenaCollection onRequestQuote={() => setIsQuoteModalOpen(true)} />
      </Suspense>

      {/* 5. Our Process */}
      <Suspense fallback={<LoadingFallback message="Loading process..." />}>
        <ScrollJourney />
      </Suspense>

      {/* 6. Why Choose Us */}
      <Suspense fallback={<LoadingFallback message="Loading sourcing..." />}>
        <FarmSourcingTraceability />
      </Suspense>

      {/* 7. Our Products */}
      <Suspense fallback={<LoadingFallback message="Loading products..." />}>
        <ProductShowcase onRequestQuote={() => setIsQuoteModalOpen(true)} />
      </Suspense>

      {/* 8. Final CTA */}
      <Suspense fallback={<LoadingFallback message="Loading calculator..." />}>
        <ExportCalculator onRequestQuote={() => setIsQuoteModalOpen(true)} />
      </Suspense>

      {/* 9. Global Reach */}
      <Suspense fallback={<LoadingFallback message="Loading logistics..." />}>
        <GlobalLogisticsHubs onRequestQuote={() => setIsQuoteModalOpen(true)} />
      </Suspense>

      {/* 10. Who We Serve */}
      <Suspense fallback={<LoadingFallback message="Loading standards..." />}>
        <QualityStandards />
      </Suspense>

      {/* 11. Testimonials */}
      <Suspense fallback={<LoadingFallback message="Loading testimonials..." />}>
        <PartnerTestimonials />
      </Suspense>

      {/* 12. FAQ */}
      <Suspense fallback={<LoadingFallback message="Loading FAQ..." />}>
        <ExportFAQ />
      </Suspense>

      {/* 13. Contact Us */}
      <Suspense fallback={<LoadingFallback message="Loading contact..." />}>
        <ContactSection onRequestQuote={() => setIsQuoteModalOpen(true)} />
      </Suspense>

      {/* 13.5 QR Code */}
      <Suspense fallback={<LoadingFallback message="Loading QR code..." />}>
        <QRCodeSection />
      </Suspense>

      {/* GradualBlur footer fade */}
      <GradualBlur preset="page-footer" strength={2} opacity={0.6} />

      {/* 14. Corporate Footer */}
      <Suspense fallback={<LoadingFallback message="Loading footer..." />}>
        <Footer />
      </Suspense>

      {/* Ambient Audio Engine */}
      <Suspense fallback={null}>
        <AudioEngine />
      </Suspense>

      {/* B2B Quotation Modal */}
      <Suspense fallback={null}>
        <RequestQuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
        />
      </Suspense>
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
