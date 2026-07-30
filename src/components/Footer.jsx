import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative z-10 border-t border-gold-500/20 bg-black/20 pt-20 pb-16 lg:px-6">
      <div className="max-w-6xl mx-auto px-3 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/Logo.png"
              alt={t('site.name')}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-display text-xl font-black text-gold-500">{t('site.name')}</h4>
              <p className="text-sm text-slate-400">{t('site.nameAm')}</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h4 className="font-display text-lg font-black text-gold-500 uppercase tracking-widest">{t('footer.quickLinks')}</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><a href="#products" className="hover:text-gold-500 transition-colors">{t('nav.products')}</a></li>
            <li><a href="#about" className="hover:text-gold-500 transition-colors">{t('nav.about')}</a></li>
            <li><a href="#process" className="hover:text-gold-500 transition-colors">{t('nav.process')}</a></li>
            <li><a href="#quality" className="hover:text-gold-500 transition-colors">{t('nav.quality')}</a></li>
            <li><a href="#contact" className="hover:text-gold-500 transition-colors">{t('nav.contact')}</a></li>
            <li><a href="#faq" className="hover:text-gold-500 transition-colors">{t('nav.faq')}</a></li>
          </ul>
        </div>

        {/* Location */}
        <div className="space-y-4">
          <h4 className="font-display text-lg font-black text-gold-500 uppercase tracking-widest">{t('footer.location')}</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>{t('footer.addisAbaba')}</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-display text-lg font-black text-gold-500 uppercase tracking-widest">{t('footer.contact')}</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>{t('footer.emailLabel')} <a href={`mailto:${t('contact.emailVal')}`} className="hover:text-gold-500 transition-colors">{t('contact.emailVal')}</a></li>
            <li>{t('footer.phoneLabel')} {t('contact.phoneVal')}</li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-3 lg:px-0 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>{t('site.copyright')}</p>
      </div>
    </footer>
  );
}
