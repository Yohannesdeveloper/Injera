import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { KineticText } from './KineticText';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection({ onRequestQuote }) {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-16 xs:py-18 sm:py-20 md:py-24 px-4 xs:px-5 sm:px-6 relative z-10 max-w-4xl mx-auto space-y-12 xs:space-y-14 sm:space-y-16">
      
      <div className="text-center space-y-3 xs:space-y-4 max-w-3xl mx-auto px-2 xs:px-3 sm:px-4">
        <span className="text-[10px] xs:text-xs sm:text-xs font-bold uppercase tracking-widest text-gold-400">
          {t('contact.badge')}
        </span>
        <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-100">
          <KineticText text={t('contact.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('contact.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-bold text-base xs:text-lg sm:text-xl">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 xs:gap-6 sm:gap-7 md:gap-8">
        <div className="text-center space-y-3 xs:space-y-4 p-5 xs:p-6 sm:p-7 md:p-8 bg-black/10 backdrop-blur-sm rounded-[15px] xs:rounded-[20px] sm:rounded-[25px] border border-slate-800/50">
          <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
            <Mail className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="font-display text-base xs:text-lg sm:text-lg font-black text-slate-100">{t('contact.email')}</h3>
          <a href={`mailto:${t('contact.emailVal')}`} className="text-slate-300 font-bold hover:text-gold-400 transition-colors text-sm xs:text-base sm:text-base">
            {t('contact.emailVal')}
          </a>
        </div>

        <div className="text-center space-y-3 xs:space-y-4 p-5 xs:p-6 sm:p-7 md:p-8 bg-black/10 backdrop-blur-sm rounded-[15px] xs:rounded-[20px] sm:rounded-[25px] border border-slate-800/50">
          <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
            <Phone className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="font-display text-base xs:text-lg sm:text-lg font-black text-slate-100">{t('contact.phone')}</h3>
          <p className="text-slate-300 font-bold text-sm xs:text-base sm:text-base">{t('contact.phoneVal')}</p>
        </div>

        <div className="text-center space-y-3 xs:space-y-4 p-5 xs:p-6 sm:p-7 md:p-8 bg-black/10 backdrop-blur-sm rounded-[15px] xs:rounded-[20px] sm:rounded-[25px] border border-slate-800/50 sm:col-span-2 md:col-span-1">
          <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
            <MapPin className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="font-display text-base xs:text-lg sm:text-lg font-black text-slate-100">{t('contact.location')}</h3>
          <p className="text-slate-300 font-bold text-sm xs:text-base sm:text-base">{t('contact.locationVal')}</p>
        </div>
      </div>

      <div className="space-y-3 xs:space-y-4">
        <span className="block text-center text-[10px] xs:text-xs sm:text-xs font-bold uppercase tracking-widest text-gold-400">{t('contact.visitUs')}</span>
        <div className="rounded-[15px] xs:rounded-[20px] sm:rounded-[25px] overflow-hidden border border-slate-800/50 bg-black/10 backdrop-blur-sm h-56 xs:h-64 sm:h-72">
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

      <div className="text-center">
        <button
          onClick={onRequestQuote}
          className="inline-flex items-center gap-2 px-6 xs:px-8 sm:px-10 py-3 xs:py-4 rounded-full bg-gradient-to-r from-gold-500 to-ochre-500 text-black font-bold text-[10px] xs:text-[11px] sm:text-xs uppercase tracking-wider hover:from-gold-400 hover:to-ochre-400 transition-all"
        >
          {t('contact.btn')}
        </button>
      </div>
    </section>
  );
}
