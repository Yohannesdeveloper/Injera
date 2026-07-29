import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import PillNav from './PillNav';

const LOGO_SRC = "/images/Logo (2).jpg";

const NAV_ITEMS = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Quality', href: '#quality' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onRequestQuote }) {
  const { dark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-surface/20 backdrop-blur-xl border-b border-slate-800/20 shadow-lg shadow-black/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <PillNav
          logo={LOGO_SRC}
          logoAlt="Zedagm Export"
          logoTitles={{ main: 'Zedagm', sub: 'ዘ፟-ዳግም' }}
          items={NAV_ITEMS}
          baseColor={dark ? '#000000' : '#ffffff'}
          pillColor={dark ? '#1a1a1a' : '#f0f0f0'}
          hoveredPillTextColor="#D4AF37"
          pillTextColor={dark ? '#ffffff' : '#000000'}
          ease="power2.easeOut"
        />

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 flex items-center justify-center transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={onRequestQuote}
            className="hidden sm:inline-flex items-center justify-center h-[42px] px-5 rounded-full border border-gold-500/30 font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
            style={{
              backgroundColor: dark ? '#1a1a1a' : '#f0f0f0',
              color: dark ? '#ffffff' : '#000000',
            }}
            onMouseEnter={(e) => { e.target.style.color = '#D4AF37'; }}
            onMouseLeave={(e) => { e.target.style.color = dark ? '#ffffff' : '#000000'; }}
          >
            Request a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
