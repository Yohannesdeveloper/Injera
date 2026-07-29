import React from 'react';
import { ShieldCheck, Award, FileCheck, Lock, CheckCircle2 } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';

const STANDARDS = [
  {
    icon: ShieldCheck,
    title: 'ISO 22000:2018 Certified',
    code: 'FSMS-ETH-2024',
    desc: 'International benchmark for harvest, fermentation, baking, and distribution.'
  },
  {
    icon: Award,
    title: 'HACCP Certified Facility',
    code: 'HACCP-QC-9901',
    desc: 'HACCP with continuous microbiological testing and digital thermal tracking.'
  },
  {
    icon: FileCheck,
    title: 'FDA Registered Export Facility',
    code: 'FDA Reg: 18492049182',
    desc: 'US FDA registered with FSMA preventive controls and nutrition labeling.'
  },
  {
    icon: Lock,
    title: 'ECX 100% Teff Guarantee',
    code: 'ECX-TEFF-PREMIUM',
    desc: '100% pure Ethiopian Teff verified by ECX with zero wheat blending.'
  }
];

export default function QualityStandards() {
  return (
    <section id="standards" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">
      
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          Global Food Safety & Hygiene
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-100">
          <KineticText text="International" as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text="Certifications" as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-medium text-base">
          Our Bole Lemi facility operates under strict global food safety management systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STANDARDS.map((std, idx) => {
          const Icon = std.icon;
          return (
            <BorderGlow key={idx} className="p-6 space-y-4" borderRadius={24} colors={['#D4AF37', '#F4C430', '#C87D32']}>
              <div className="w-10 h-10 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[9px] font-mono font-bold text-gold-400 uppercase tracking-widest">{std.code}</p>
                <h3 className="font-display text-base font-bold text-slate-100 mt-1">{std.title}</h3>
              </div>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">{std.desc}</p>
            </BorderGlow>
          );
        })}
      </div>

      <BorderGlow className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-300" borderRadius={24} colors={['#D4AF37', '#F4C430', '#C87D32']}>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
          <span>Zero Wheat or Gluten Blending</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
          <span>HEPA Cleanroom Environment</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
          <span>Phytosanitary Export Permits</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
          <span>Batch Certificate of Analysis</span>
        </div>
      </BorderGlow>

    </section>
  );
}
