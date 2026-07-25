import React from 'react';
import { ArrowDownRight, ShieldCheck, Truck } from 'lucide-react';
import DotField from './DotField/DotField';

export default function HeroOverlay({ onRequestQuote }) {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 pt-32 pb-20">
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={100}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#F4C430"
          gradientTo="#D4AF37"
          glowColor="#120F17"
        />
      </div>
      <div className="z-10 max-w-6xl mx-auto text-center space-y-8">

        {/* Real Enterprise Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-gold-400"></span>
          <span>Certified Injera Manufacturer & Exporter • Bole Lemi Park, Addis Ababa</span>
        </div>

        {/* Human Commercial Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
          Authentic Ethiopian Injera. <br />
          <span className="gold-gradient-text">Baked Daily. Exported Worldwide.</span>
        </h1>

        {/* Human Commercial Narrative */}
        <p className="max-w-3xl mx-auto text-slate-300 text-base md:text-lg font-light leading-relaxed">
          Direct supply partner for international supermarket chains, restaurant groups, and food distributors across North America, Europe, and the Middle East. 100% Ethiopian Teff, 30-day fresh vacuum packaging, daily air cargo dispatch.
        </p>

        {/* Genuine Enterprise Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-2">
          <div className="luxury-card p-5 text-left border-l-2 border-l-gold-500">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Daily Capacity</p>
            <p className="font-display text-2xl font-bold text-gold-400 mt-0.5">50,000</p>
            <p className="text-[11px] text-slate-300">Injera Discs / Day</p>
          </div>
          <div className="luxury-card p-5 text-left border-l-2 border-l-gold-500">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Grain Purity</p>
            <p className="font-display text-2xl font-bold text-slate-100 mt-0.5">100% Teff</p>
            <p className="text-[11px] text-slate-300">No Wheat Blending</p>
          </div>
          <div className="luxury-card p-5 text-left border-l-2 border-l-gold-500">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Fresh Shelf Life</p>
            <p className="font-display text-2xl font-bold text-gold-400 mt-0.5">30 Days</p>
            <p className="text-[11px] text-slate-300">MAP Vacuum Pack</p>
          </div>
          <div className="luxury-card p-5 text-left border-l-2 border-l-gold-500">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Certifications</p>
            <p className="font-display text-2xl font-bold text-slate-100 mt-0.5">FDA & ISO</p>
            <p className="text-[11px] text-slate-300">HACCP Certified</p>
          </div>
        </div>

        {/* Clean Primary Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onRequestQuote}
            className="px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-dark-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-lg"
          >
            <span>Request Wholesale Pricing & Samples</span>
            <ArrowDownRight className="w-4 h-4" />
          </button>

          <a
            href="#story"
            className="px-8 py-4 rounded-xl luxury-card text-slate-200 hover:text-gold-400 font-bold text-xs uppercase tracking-wider hover:border-gold-500/40 transition-colors"
          >
            <span>Production Process</span>
          </a>
        </div>

      </div>
    </section>
  );
}
