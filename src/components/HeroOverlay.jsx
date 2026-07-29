import React from 'react';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';

export default function HeroOverlay({ onRequestQuote }) {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Full-screen video background */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/Video_4.mp4"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 leading-tight">
          <KineticText text="Authentic Ethiopian Injera." as="span" className="inline flex-wrap" /> <br />
          <span className="gold-gradient-text"><KineticText text="Exported Worldwide." as="span" className="inline flex-wrap" /></span>
        </h1>

        <p className="text-slate-300 font-bold text-xl leading-relaxed max-w-3xl mx-auto">
          Delivering the authentic taste of Ethiopia to international supermarkets, restaurants, wholesalers, and food distributors with premium quality, reliable supply, and export-ready packaging.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <InteractiveHoverButton onClick={onRequestQuote}>
            Request a Quote
          </InteractiveHoverButton>
          <a
            href="#products"
            className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gold-500/50 text-gold-400 font-bold text-xs uppercase tracking-wider hover:bg-gold-500/10 transition-colors"
          >
            View Products
          </a>
        </div>
      </div>
    </section>
  );
}
