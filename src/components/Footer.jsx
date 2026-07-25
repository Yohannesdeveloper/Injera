import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Globe } from 'lucide-react';

export default function Footer({ onRequestQuote }) {
  return (
    <footer className="relative z-10 border-t border-gold-500/20 bg-dark-950/95 pt-16 pb-12 px-6 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Brand */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gold-600 to-gold-400 p-[1px]">
              <div className="w-full h-full bg-dark-950 rounded-full flex items-center justify-center">
                <span className="text-gold-400 font-display text-xs font-bold">H</span>
              </div>
            </div>
            <div>
              <p className="font-display text-base font-bold text-slate-100 tracking-widest">HABESHA GOLD</p>
              <p className="text-[9px] text-gold-400 font-semibold uppercase tracking-widest">Injera Export PLC</p>
            </div>
          </div>
          <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
            Ethiopia's premier certified Injera manufacturer and global exporter. Delivering authentic, freshly baked 100% Teff Injera with modern food safety standards to international markets worldwide.
          </p>
          <div className="flex items-center gap-2 text-gold-400 font-semibold text-[11px]">
            <ShieldCheck className="w-4 h-4" />
            <span>FDA Registered • ISO 22000 • HACCP Certified</span>
          </div>
        </div>

        {/* Global HQ */}
        <div className="space-y-3">
          <h4 className="font-display text-xs font-bold text-slate-100 uppercase tracking-widest">Addis Ababa HQ</h4>
          <ul className="space-y-2 text-[11px] text-slate-300">
            <li className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
              <span>Bole Lemi Industrial Park Phase II, Addis Ababa, Ethiopia</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>+251 (11) 662-8800</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>export@habeshagoldinjera.com</span>
            </li>
          </ul>
        </div>

        {/* Logistics Destinations */}
        <div className="space-y-3">
          <h4 className="font-display text-xs font-bold text-slate-100 uppercase tracking-widest">Export Destinations</h4>
          <ul className="space-y-2 text-[11px] text-slate-300">
            <li className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>North America (Washington IAD, Toronto)</span>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Europe (Frankfurt FRA, London LHR)</span>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Middle East (Dubai DXB, Riyadh)</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
        <p>© {new Date().getFullYear()} Zedagm ዘ፟-ዳግም Injera Export PLC. All rights reserved.</p>
        <button
          onClick={onRequestQuote}
          className="text-gold-400 hover:text-gold-300 font-semibold uppercase tracking-wider"
        >
          Request Export Samples & Quote →
        </button>
      </div>
    </footer>
  );
}
