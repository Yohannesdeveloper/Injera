import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative z-10 border-t border-gold-500/20 bg-black/20 pt-12 xs:pt-14 sm:pt-16 md:pt-20 pb-8 xs:pb-10 sm:pb-12 md:pb-16 px-4 xs:px-5 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 xs:gap-10 sm:gap-12 mb-12 xs:mb-14 sm:mb-16">
        
        {/* Brand */}
        <div className="space-y-3 xs:space-y-4 sm:col-span-2 md:col-span-1 lg:col-span-1">
          <div className="flex items-center gap-2 xs:gap-3">
            <img
              src="/images/Logo.png"
              alt={t('site.name')}
              className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-display text-lg xs:text-xl sm:text-xl font-black text-gold-500">{t('site.name')}</h4>
              <p className="text-xs xs:text-sm sm:text-sm text-slate-400">{t('site.nameAm')}</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-3 xs:space-y-4">
          <h4 className="font-display text-sm xs:text-base sm:text-lg font-black text-gold-500 uppercase tracking-widest">{t('footer.quickLinks')}</h4>
          <ul className="space-y-2 xs:space-y-3 text-xs xs:text-sm sm:text-sm text-slate-300">
            <li><a href="#products" className="hover:text-gold-500 transition-colors">{t('nav.products')}</a></li>
            <li><a href="#about" className="hover:text-gold-500 transition-colors">{t('nav.about')}</a></li>
            <li><a href="#process" className="hover:text-gold-500 transition-colors">{t('nav.process')}</a></li>
            <li><a href="#quality" className="hover:text-gold-500 transition-colors">{t('nav.quality')}</a></li>
            <li><a href="#contact" className="hover:text-gold-500 transition-colors">{t('nav.contact')}</a></li>
            <li><a href="#faq" className="hover:text-gold-500 transition-colors">{t('nav.faq')}</a></li>
          </ul>
        </div>

        {/* Location */}
        <div className="space-y-3 xs:space-y-4">
          <h4 className="font-display text-sm xs:text-base sm:text-lg font-black text-gold-500 uppercase tracking-widest">{t('footer.location')}</h4>
          <ul className="space-y-2 xs:space-y-3 text-xs xs:text-sm sm:text-sm text-slate-300">
            <li>{t('footer.addisAbaba')}</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3 xs:space-y-4">
          <h4 className="font-display text-sm xs:text-base sm:text-lg font-black text-gold-500 uppercase tracking-widest">{t('footer.contact')}</h4>
          <ul className="space-y-2 xs:space-y-3 text-xs xs:text-sm sm:text-sm text-slate-300">
            <li>{t('footer.emailLabel')} <a href={`mailto:${t('contact.emailVal')}`} className="hover:text-gold-500 transition-colors">{t('contact.emailVal')}</a></li>
            <li>{t('footer.phoneLabel')} {t('contact.phoneVal')}</li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto pt-6 xs:pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-3 xs:gap-4 text-[10px] xs:text-xs sm:text-xs text-slate-400">
        <p>{t('site.copyright')}</p>
      </div>
    </footer>
  );
}
