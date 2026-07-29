import React from 'react';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onRequestQuote }) {
  const { dark, toggleTheme } = useTheme();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-surface/80 backdrop-blur-xl border-b border-slate-800/20 shadow-lg shadow-black/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Corporate Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center font-display font-extrabold text-black dark:text-white text-sm">
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

        {/* Theme Toggle + Action CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 flex items-center justify-center transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={onRequestQuote}
            className="px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-400 text-black dark:text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-md"
          >
            <span>Request Pricing</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
