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
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-surface/20 backdrop-blur-xl border-b border-slate-800/20 shadow-lg shadow-black/5">
      <div className="max-w-6xl mx-auto flex items-center">
        {/* Left: Logo */}
        <a href="#" className="pill-logo flex-shrink-0" aria-label={t('nav.homeAria')}>
          <img src={LOGO_SRC} alt={t('site.logoAlt')} className="w-[52px] h-[52px] rounded-full object-cover" />
          <span className="logo-titles">
            <span className="logo-title-main">{t('site.name')}</span>
            <span className="logo-title-sub">{t('site.nameAm')}</span>
          </span>
        </a>

        {/* Center: Nav items */}
        <div className="flex-1 flex lg:justify-center">
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
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={toggleLanguage}
            className="w-9 h-9 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 flex items-center justify-center transition-colors text-[10px] font-bold uppercase tracking-wider"
            aria-label={t('nav.switchLang')}
            title={language === 'en' ? 'አማርኛ' : 'English'}
          >
            {language === 'en' ? 'AM' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 flex items-center justify-center transition-colors"
            aria-label={t('nav.toggleTheme')}
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
            {t('nav.requestQuote')}
          </button>
        </div>
      </div>
    </header>
  );
}
