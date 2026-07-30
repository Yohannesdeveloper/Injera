import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { KineticText } from './KineticText';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection({ onRequestQuote }) {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 px-6 relative z-10 max-w-4xl mx-auto space-y-16">
      
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          {t('contact.badge')}
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-100">
          <KineticText text={t('contact.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('contact.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-bold text-xl">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center space-y-4 p-8 bg-black/10 backdrop-blur-sm rounded-[25px] border border-slate-800/50">
          <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="font-display text-lg font-black text-slate-100">{t('contact.email')}</h3>
          <a href={`mailto:${t('contact.emailVal')}`} className="text-slate-300 font-bold hover:text-gold-400 transition-colors">
            {t('contact.emailVal')}
          </a>
        </div>

        <div className="text-center space-y-4 p-8 bg-black/10 backdrop-blur-sm rounded-[25px] border border-slate-800/50">
          <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="font-display text-lg font-black text-slate-100">{t('contact.phone')}</h3>
          <p className="text-slate-300 font-bold">{t('contact.phoneVal')}</p>
        </div>

        <div className="text-center space-y-4 p-8 bg-black/10 backdrop-blur-sm rounded-[25px] border border-slate-800/50">
          <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-display text-lg font-black text-slate-100">{t('contact.location')}</h3>
          <p className="text-slate-300 font-bold">{t('contact.locationVal')}</p>
        </div>
      </div>

      <div className="space-y-4">
        <span className="block text-center text-xs font-bold uppercase tracking-widest text-gold-400">{t('contact.visitUs')}</span>
        <div className="rounded-[25px] overflow-hidden border border-slate-800/50 bg-black/10 backdrop-blur-sm h-72">
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
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-gold-500 to-ochre-500 text-black font-bold text-xs uppercase tracking-wider hover:from-gold-400 hover:to-ochre-400 transition-all"
        >
          {t('contact.btn')}
        </button>
      </div>
    </section>
  );
}
