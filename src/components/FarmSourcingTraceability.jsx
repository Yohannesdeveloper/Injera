import React from 'react';
import { Shield, Leaf, QrCode, Award, CheckCircle2 } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';

const TRACEABILITY_PILLARS = [
  {
    icon: Leaf,
    title: 'Direct Farmer Partnerships',
    subtitle: 'Debre Zeit, Ada & East Shewa Cooperative',
    desc: 'Direct contracts with 1,200+ smallholder families across East Shewa high plateaus.'
  },
  {
    icon: Award,
    title: 'ECX Grade A Verification',
    subtitle: 'Zero Wheat or Adulteration Guarantee',
    desc: 'ECX-certified with <11% moisture, zero gluten, and 99.9% grain purity.'
  },
  {
    icon: QrCode,
    title: 'Farm-to-Table QR Barcode Traceability',
    subtitle: 'Batch CoA & Harvest Location Tracking',
    desc: 'QR code on every carton traces harvest farm, fermentation date, and CoA.'
  }
];

export default function FarmSourcingTraceability() {
  return (
    <section id="sourcing" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          Agricultural Integrity & Sourcing
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-100">
          <KineticText text="Farm Sourcing &" as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text="Traceability" as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-bold text-xl">
          Full transparency from Ethiopian farms to international distribution centers.
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TRACEABILITY_PILLARS.map((p, idx) => {
          const Icon = p.icon;
          return (
            <BorderGlow key={idx} className="p-8 space-y-5" borderRadius={24} colors={['#D4AF37', '#F4C430', '#C87D32']}>
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>

              <div>
                <p className="text-[10px] font-mono font-bold text-gold-400 uppercase tracking-widest">{p.subtitle}</p>
                <h3 className="font-display text-xl font-bold text-slate-100 mt-1">{p.title}</h3>
              </div>

              <p className="text-base text-slate-300 font-bold leading-relaxed">{p.desc}</p>
            </BorderGlow>
          );
        })}
      </div>

      {/* Sourcing Credentials Bar */}
      <BorderGlow className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-semibold text-slate-200" borderRadius={24} colors={['#D4AF37', '#F4C430', '#C87D32']}>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
          <span>Non-GMO Certified Seeds</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
          <span>Ethical Fair Trade Pricing</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
          <span>Aflatoxin & Pesticide Free</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
          <span>Zero Preservative Baking</span>
        </div>
      </BorderGlow>

    </section>
  );
}
