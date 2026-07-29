import React from 'react';
import { Building, MapPin, Phone, Mail } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';

export default function CorporateLeadership({ onRequestQuote }) {
  return (
    <section className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Corporate Overview */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            About Zedagm ዘ፟-ዳግም Injera Export PLC
          </span>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-100 leading-tight">
            <KineticText text="Ethiopia's Leading Export Facility in" as="span" className="inline flex-wrap" /> <br />
            <span className="gold-gradient-text"><KineticText text="Bole Lemi Industrial Park" as="span" className="inline flex-wrap" /></span>
          </h2>

          <p className="text-slate-300 font-bold text-xl leading-relaxed">
            A 4,500 m² baking, packaging, and cold-chain facility in Bole Lemi Industrial Park, Addis Ababa.
          </p>

          <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-200 pt-2">
            <div className="p-3.5 rounded-xl bg-elevated/80 border border-slate-800 space-y-1">
              <p className="text-[10px] text-slate-400 uppercase font-semibold">Facility Area</p>
              <p className="font-bold text-gold-400 text-sm">4,500 m² Sterile Plant</p>
            </div>
            <div className="p-3.5 rounded-xl bg-elevated/80 border border-slate-800 space-y-1">
              <p className="text-[10px] text-slate-400 uppercase font-semibold">Daily Production</p>
              <p className="font-bold text-slate-100 text-sm">50,000 Injera Discs</p>
            </div>
            <div className="p-3.5 rounded-xl bg-elevated/80 border border-slate-800 space-y-1">
              <p className="text-[10px] text-slate-400 uppercase font-semibold">Export Compliance</p>
              <p className="font-bold text-slate-100 text-sm">FDA, ISO 22000 & HACCP</p>
            </div>
            <div className="p-3.5 rounded-xl bg-elevated/80 border border-slate-800 space-y-1">
              <p className="text-[10px] text-slate-400 uppercase font-semibold">Air Freight Hub</p>
              <p className="font-bold text-gold-400 text-sm">Addis Ababa Bole Cargo</p>
            </div>
          </div>
        </div>

        {/* Right Side: Factory Location Card & Contact Box */}
        <div className="lg:col-span-6">
          <BorderGlow className="p-8 space-y-6" borderRadius={24} colors={['#D4AF37', '#F4C430', '#C87D32']}>
            <h3 className="font-display text-xl font-bold text-slate-100">Export Headquarters Contact</h3>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <div>
                  <p className="font-bold text-slate-100">Export Sales Line</p>
                  <p className="text-slate-400 mt-0.5">+251 (11) 662-8800 / +251 (91) 124-9988</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <div>
                  <p className="font-bold text-slate-100">B2B Commercial Email</p>
                  <p className="text-slate-400 mt-0.5">export@habeshagoldinjera.com</p>
                </div>
              </div>
            </div>

            <InteractiveHoverButton
              onClick={onRequestQuote}
              className="w-full py-3.5 shadow-lg"
            >
              Request Sample & Pricing
            </InteractiveHoverButton>
          </BorderGlow>
        </div>

      </div>

    </section>
  );
}
