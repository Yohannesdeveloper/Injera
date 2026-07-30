import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { KineticText } from './KineticText';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection({ onRequestQuote }) {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-3 xs:px-4 sm:px-5 md:px-6 relative z-10 max-w-4xl mx-auto space-y-10 xs:space-y-12 sm:space-y-14 md:space-y-16">
      
      <div className="text-center space-y-2 xs:space-y-3 sm:space-y-4 max-w-3xl mx-auto px-2 xs:px-3 sm:px-4">
        <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-400">
          {t('contact.badge')}
        </span>
        <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-100">
          <KineticText text={t('contact.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('contact.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-bold text-sm xs:text-base sm:text-lg md:text-xl">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
        <div className="text-center space-y-2 xs:space-y-3 sm:space-y-4 p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 bg-black/10 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-[20px] md:rounded-[25px] border border-slate-800/50">
          <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:w-10 md:w-12 md:h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
            <Mail className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </div>
          <h3 className="font-display text-sm xs:text-base sm:text-lg md:text-xl font-black text-slate-100">{t('contact.email')}</h3>
          <a href={`mailto:${t('contact.emailVal')}`} className="text-slate-300 font-bold hover:text-gold-400 transition-colors text-xs xs:text-sm sm:text-base">
            {t('contact.emailVal')}
          </a>
        </div>

        <div className="text-center space-y-2 xs:space-y-3 sm:space-y-4 p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 bg-black/10 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-[20px] md:rounded-[25px] border border-slate-800/50">
          <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:w-10 md:w-12 md:h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
            <Phone className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </div>
          <h3 className="font-display text-sm xs:text-base sm:text-lg md:text-xl font-black text-slate-100">{t('contact.phone')}</h3>
          <p className="text-slate-300 font-bold text-xs xs:text-sm sm:text-base">{t('contact.phoneVal')}</p>
        </div>

        <div className="text-center space-y-2 xs:space-y-3 sm:space-y-4 p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 bg-black/10 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-[20px] md:rounded-[25px] border border-slate-800/50 sm:col-span-2 md:col-span-1">
          <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:w-10 md:w-12 md:h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
            <MapPin className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </div>
          <h3 className="font-display text-sm xs:text-base sm:text-lg md:text-xl font-black text-slate-100">{t('contact.location')}</h3>
          <p className="text-slate-300 font-bold text-xs xs:text-sm sm:text-base">{t('contact.locationVal')}</p>
        </div>
      </div>

      <div className="space-y-2 xs:space-y-3 sm:space-y-4">
        <span className="block text-center text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-400">{t('contact.visitUs')}</span>
        <div className="rounded-lg xs:rounded-xl sm:rounded-[20px] md:rounded-[25px] overflow-hidden border border-slate-800/50 bg-black/10 backdrop-blur-sm h-48 xs:h-56 sm:h-64 md:h-72">
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
          className="inline-flex items-center gap-1.5 xs:gap-2 px-5 xs:px-6 sm:px-8 md:px-10 py-2 xs:py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-gold-500 to-ochre-500 text-black font-bold text-[9px] xs:text-[10px] sm:text-[11px] md:text-xs uppercase tracking-wider hover:from-gold-400 hover:to-ochre-400 transition-all"
        >
          {t('contact.btn')}
        </button>
      </div>
    </section>
  );
}
