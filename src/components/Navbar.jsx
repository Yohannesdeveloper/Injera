import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import PillNav from './PillNav';

const LOGO_SRC = "/images/Logo.png";

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const desktopMenuRef = useRef(null);

  const NAV_ITEMS = [
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.process'), href: '#process' },
    { label: t('nav.quality'), href: '#quality' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopMenuOpen && desktopMenuRef.current && !desktopMenuRef.current.contains(event.target)) {
        setDesktopMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [desktopMenuOpen]);

  const popoverBg = dark ? '#000000' : '#ffffff';
  const popoverPillBg = dark ? '#1a1a1a' : '#f0f0f0';
  const popoverText = dark ? '#ffffff' : '#000000';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-2 xs:py-3 lg:py-4 bg-surface/20 backdrop-blur-xl border-b border-slate-800/20 shadow-lg shadow-black/5">
      <div className="w-full flex items-center">
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-1.5 xs:gap-2 lg:gap-3 flex-shrink-0" aria-label={t('nav.homeAria')}>
          <img src={LOGO_SRC} alt={t('site.logoAlt')} className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 lg:w-[52px] lg:h-[52px] rounded-full object-cover flex-shrink-0" />
          <span className="flex flex-col leading-tight scale-75 xs:scale-85 sm:scale-90 md:scale-95 lg:scale-100 origin-left">
            <span className="font-display text-[10px] xs:text-xs sm:text-sm lg:text-lg font-black text-[var(--pill-text)] dark:text-white uppercase tracking-wider whitespace-nowrap">{t('site.name')}</span>
            <span className="text-[8px] xs:text-[9px] sm:text-[10px] lg:text-sm opacity-60 text-[var(--pill-text)] dark:text-white whitespace-nowrap">{t('site.nameAm')}</span>
          </span>
        </a>

        {/* Desktop nav and controls (lg+) */}
        <div className="hidden lg:flex flex-1 items-center gap-3">
          <div className="flex-1 flex justify-center">
            <PillNav
              hideLogo
              hideHamburger
              items={NAV_ITEMS}
              baseColor={dark ? '#000000' : '#ffffff'}
              pillColor={dark ? '#1a1a1a' : '#f0f0f0'}
              hoveredPillTextColor="#D4AF37"
              pillTextColor={dark ? '#ffffff' : '#000000'}
              ease="power2.easeOut"
            />
          </div>
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
            <div className="relative">
              <button
                onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
                className="w-9 h-9 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 flex items-center justify-center transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-4 h-4" />
              </button>
              {desktopMenuOpen && (
                <div
                  ref={desktopMenuRef}
                  className="fixed top-auto right-0 mt-2 w-56 rounded-2xl shadow-lg overflow-hidden z-[9999]"
                  style={{
                    backgroundColor: popoverBg,
                    transform: 'translateY(0)',
                    border: '1px solid rgba(212, 175, 55, 0.15)',
                  }}
                >
                  <ul className="p-1.5 flex flex-col gap-0.5">
                    {NAV_ITEMS.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={() => setDesktopMenuOpen(false)}
                          className="block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
                          style={{
                            color: popoverText,
                            backgroundColor: 'transparent',
                          }}
                          onMouseEnter={(e) => { e.target.style.backgroundColor = popoverPillBg; }}
                          onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile controls (< lg) */}
        <div className="flex lg:hidden items-center gap-1.5 xs:gap-2 ml-auto">
          <button
            onClick={toggleLanguage}
            className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 flex items-center justify-center transition-colors text-[9px] xs:text-[10px] font-bold uppercase tracking-wider"
            aria-label={t('nav.switchLang')}
            title={language === 'en' ? 'አማርኛ' : 'English'}
          >
            {language === 'en' ? 'AM' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 flex items-center justify-center transition-colors"
            aria-label={t('nav.toggleTheme')}
          >
            {dark ? <Sun className="w-3 h-3 xs:w-3.5 xs:h-3.5" /> : <Moon className="w-3 h-3 xs:w-3.5 xs:h-3.5" />}
          </button>
          <div>
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
        </div>
      </div>
    </header>
  );
}
