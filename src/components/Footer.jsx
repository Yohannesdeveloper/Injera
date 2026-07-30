import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative z-10 border-t border-gold-500/20 bg-black/20 pt-12 4xl:pt-16 7xl:pt-20 pb-8 4xl:pb-12 px-4 4xl:px-6">
      <div className="max-w-6xl mx-auto grid gap-8 sm:gap-10 4xl:gap-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        
        <div className="4xl:col-span-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/images/Logo.png"
              alt={t('site.name')}
              className="w-10 h-10 sm:w-12 sm:h-12 4xl:w-14 4xl:h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-display text-lg sm:text-xl font-black text-gold-500">{t('site.name')}</h4>
              <p className="text-xs sm:text-sm text-slate-400">{t('site.nameAm')}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <h4 className="font-display text-sm sm:text-base 4xl:text-lg font-black text-gold-500 uppercase tracking-widest">{t('footer.quickLinks')}</h4>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-300">
            <li><a href="#products" className="hover:text-gold-500 transition-colors">{t('nav.products')}</a></li>
            <li><a href="#about" className="hover:text-gold-500 transition-colors">{t('nav.about')}</a></li>
            <li><a href="#process" className="hover:text-gold-500 transition-colors">{t('nav.process')}</a></li>
            <li><a href="#quality" className="hover:text-gold-500 transition-colors">{t('nav.quality')}</a></li>
            <li><a href="#contact" className="hover:text-gold-500 transition-colors">{t('nav.contact')}</a></li>
            <li><a href="#faq" className="hover:text-gold-500 transition-colors">{t('nav.faq')}</a></li>
          </ul>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <h4 className="font-display text-sm sm:text-base 4xl:text-lg font-black text-gold-500 uppercase tracking-widest">{t('footer.location')}</h4>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-300">
            <li>{t('footer.addisAbaba')}</li>
          </ul>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <h4 className="font-display text-sm sm:text-base 4xl:text-lg font-black text-gold-500 uppercase tracking-widest">{t('footer.contact')}</h4>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-300">
            <li>{t('footer.emailLabel')} <a href={`mailto:${t('contact.emailVal')}`} className="hover:text-gold-500 transition-colors">{t('contact.emailVal')}</a></li>
            <li>{t('footer.phoneLabel')} {t('contact.phoneVal')}</li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-10 4xl:mt-14 7xl:mt-18 pt-6 4xl:pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs text-slate-400">
        <p>{t('site.copyright')}</p>
      </div>
    </footer>
  );
}
