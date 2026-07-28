import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar({ onRequestQuote }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Corporate Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center font-display font-extrabold text-dark-950 text-sm">
            HG
          </div>
          <div>
            <span className="font-display text-sm font-bold tracking-widest text-slate-100 uppercase">
              Zedagm ዘ፟-ዳግም Export
            </span>

          </div>
        </a>

        {/* Professional Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-slate-300">
          <a href="#story" className="hover:text-gold-400 transition-colors">Process</a>
          <a href="#sourcing" className="hover:text-gold-400 transition-colors">Sourcing</a>
          <a href="#products" className="hover:text-gold-400 transition-colors">Products</a>
          <a href="#network" className="hover:text-gold-400 transition-colors">Global Freight</a>
          <a href="#standards" className="hover:text-gold-400 transition-colors">Certifications</a>
        </nav>

        {/* Action CTA */}
        <button
          onClick={onRequestQuote}
          className="px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-400 text-dark-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-md"
        >
          <span>Request Pricing</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
}
