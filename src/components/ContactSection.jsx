import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { KineticText } from './KineticText';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection({ onRequestQuote }) {
  const { t } = useLanguage();
  return (
    <section id="contact" className="relative z-10 py-12 4xl:py-16 7xl:py-20 px-4 4xl:px-6 max-w-6xl mx-auto">

      <div className="text-center max-w-3xl mx-auto mb-8 4xl:mb-12 7xl:mb-16 px-4">
        <span className="inline-block text-[9px] sm:text-xs font-bold uppercase tracking-widest text-gold-400 mb-3 sm:mb-4">
          {t('contact.badge')}
        </span>
        <h2 className="font-display text-xl sm:text-3xl 4xl:text-4xl 7xl:text-5xl font-black text-slate-100">
          <KineticText text={t('contact.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('contact.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-bold text-sm sm:text-base 4xl:text-lg mt-3 sm:mt-4">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid gap-4 sm:gap-5 4xl:gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        <div className="text-center space-y-2 sm:space-y-3 4xl:space-y-4 p-4 sm:p-6 4xl:p-8 bg-black/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-800/50">
          <div className="w-8 h-8 sm:w-9 sm:h-9 4xl:w-12 4xl:h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
            <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 4xl:w-6 4xl:h-6" />
          </div>
          <h3 className="font-display text-sm sm:text-base 4xl:text-xl font-black text-slate-100">{t('contact.email')}</h3>
          <a href={`mailto:${t('contact.emailVal')}`} className="text-slate-300 font-bold hover:text-gold-400 transition-colors text-xs sm:text-sm 4xl:text-base">
            {t('contact.emailVal')}
          </a>
        </div>

        <div className="text-center space-y-2 sm:space-y-3 4xl:space-y-4 p-4 sm:p-6 4xl:p-8 bg-black/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-800/50">
          <div className="w-8 h-8 sm:w-9 sm:h-9 4xl:w-12 4xl:h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
            <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 4xl:w-6 4xl:h-6" />
          </div>
          <h3 className="font-display text-sm sm:text-base 4xl:text-xl font-black text-slate-100">{t('contact.phone')}</h3>
          <p className="text-slate-300 font-bold text-xs sm:text-sm 4xl:text-base">{t('contact.phoneVal')}</p>
        </div>

        <div className="text-center space-y-2 sm:space-y-3 4xl:space-y-4 p-4 sm:p-6 4xl:p-8 bg-black/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-800/50">
          <div className="w-8 h-8 sm:w-9 sm:h-9 4xl:w-12 4xl:h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
            <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 4xl:w-6 4xl:h-6" />
          </div>
          <h3 className="font-display text-sm sm:text-base 4xl:text-xl font-black text-slate-100">{t('contact.location')}</h3>
          <p className="text-slate-300 font-bold text-xs sm:text-sm 4xl:text-base">{t('contact.locationVal')}</p>
        </div>
      </div>

      <div className="mt-10 4xl:mt-14 7xl:mt-18 space-y-3 sm:space-y-4">
        <span className="block text-center text-[9px] sm:text-xs font-bold uppercase tracking-widest text-gold-400">{t('contact.visitUs')}</span>
        <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-800/50 bg-black/10 backdrop-blur-sm h-48 sm:h-56 4xl:h-72">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=38.6950%2C8.9800%2C38.8950%2C9.0800&amp;layer=mapnik&amp;marker=9.0300%2C38.7950"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('contact.mapTitle')}
          />
        </div>
      </div>

      <div className="text-center mt-10 4xl:mt-14 7xl:mt-18">
        <button
          onClick={onRequestQuote}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-5 sm:px-8 4xl:px-10 py-2 sm:py-3 rounded-full bg-gradient-to-r from-gold-500 to-ochre-500 text-black font-bold text-[9px] sm:text-[11px] 4xl:text-xs uppercase tracking-wider hover:from-gold-400 hover:to-ochre-400 transition-all"
        >
          {t('contact.btn')}
        </button>
      </div>
    </section>
  );
}
