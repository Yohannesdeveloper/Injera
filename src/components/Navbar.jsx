import React from 'react';
import { Sun, Moon, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import PillNav from './PillNav';

const LOGO_SRC = "/images/Logo.png";

export default function Navbar({ onRequestQuote }) {
  const { dark, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const NAV_ITEMS = [
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.process'), href: '#process' },
    { label: t('nav.quality'), href: '#quality' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:px-6 py-3 lg:py-4 bg-surface/20 backdrop-blur-xl border-b border-slate-800/20 shadow-lg shadow-black/5">
      <div className="max-w-6xl mx-auto flex items-center">
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-2 lg:gap-3 flex-shrink-0" aria-label={t('nav.homeAria')}>
          <img src={LOGO_SRC} alt={t('site.logoAlt')} className="w-10 h-10 lg:w-[52px] lg:h-[52px] rounded-full object-cover flex-shrink-0" />
          <span className="flex flex-col leading-tight max-lg:scale-75 max-lg:origin-left">
            <span className="font-display text-sm lg:text-lg font-black text-[var(--pill-text)] dark:text-white uppercase tracking-wider whitespace-nowrap">{t('site.name')}</span>
            <span className="text-[10px] lg:text-sm opacity-60 text-[var(--pill-text)] dark:text-white whitespace-nowrap">{t('site.nameAm')}</span>
          </span>
        </a>

        {/* Center: Nav items */}
        <div className="flex-1 flex lg:justify-center max-lg:ml-auto order-3 lg:order-2 min-w-0">
          <PillNav
            hideLogo
            items={NAV_ITEMS}
            baseColor={dark ? '#000000' : '#ffffff'}
            pillColor={dark ? '#1a1a1a' : '#f0f0f0'}
            hoveredPillTextColor="#D4AF37"
            pillTextColor={dark ? '#ffffff' : '#000000'}
            ease="power2.easeOut"
          />
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-1.5 lg:gap-3 flex-shrink-0 order-2 lg:order-3 max-lg:ml-1.5">
          <button
            onClick={toggleLanguage}
            className="w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 flex items-center justify-center transition-colors text-[9px] lg:text-[10px] font-bold uppercase tracking-wider"
            aria-label={t('nav.switchLang')}
            title={language === 'en' ? 'አማርኛ' : 'English'}
          >
            {language === 'en' ? 'AM' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            className="w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 flex items-center justify-center transition-colors"
            aria-label={t('nav.toggleTheme')}
          >
            {dark ? <Sun className="w-3 h-3 lg:w-4 lg:h-4" /> : <Moon className="w-3 h-3 lg:w-4 lg:h-4" />}
          </button>
          <button
            onClick={onRequestQuote}
            className="hidden sm:inline-flex items-center justify-center h-8 lg:h-[42px] px-2.5 lg:px-5 rounded-full border border-gold-500/30 font-semibold text-[9px] lg:text-xs uppercase tracking-wider transition-colors shadow-md"
            style={{
              backgroundColor: dark ? '#1a1a1a' : '#f0f0f0',
              color: dark ? '#ffffff' : '#000000',
            }}
            onMouseEnter={(e) => { e.target.style.color = '#D4AF37'; }}
            onMouseLeave={(e) => { e.target.style.color = dark ? '#ffffff' : '#000000'; }}
          >
            {t('nav.requestQuote')}
          </button>
        </div>
      </div>
    </header>
  );
}
