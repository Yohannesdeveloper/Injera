import React from 'react';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';
import { useLanguage } from '../context/LanguageContext';

const BALTENA_IMAGES = {
  berbere: '/images/Berbere.jpg',
  'white-shiro': '/images/white shiro.jpg',
  mitmita: '/images/mitmita.jpg',
  'spice-blends': '/images/images 3.jpg',
  'mitn-shiro': '/images/mitn shiro.jpg',
  beso: '/images/beso.jpg',
  kolo: '/images/Kolo.jpg'
};

export default function BaltenaCollection({ onRequestQuote }) {
  const { t } = useLanguage();
  const items = t('baltena.items');

  return (
    <section id="baltena" className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-3 xs:px-4 sm:px-5 md:px-6 relative z-10 max-w-6xl mx-auto space-y-10 xs:space-y-12 sm:space-y-14 md:space-y-16">

      <div className="text-center space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 max-w-3xl mx-auto px-2 xs:px-3 sm:px-4">
        <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-400 block">
          {t('baltena.badge')}
        </span>
        <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-100">
          <KineticText text={t('baltena.heading1')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('baltena.headingGold')} as="span" className="inline flex-wrap" /></span>
          {' '}<KineticText text={t('baltena.heading2')} as="span" className="inline flex-wrap" />
        </h2>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg text-slate-300 font-bold leading-relaxed max-w-2xl mx-auto">
          {t('baltena.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
        {items.map((prod) => (
          <div key={prod.id} className="glass-panel rounded-lg xs:rounded-xl sm:rounded-[20px] md:rounded-[25px] p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 text-center flex flex-col items-center">
            <img src={BALTENA_IMAGES[prod.id]} alt={prod.name} className="w-full h-32 xs:h-40 sm:h-48 md:h-56 object-cover rounded-lg xs:rounded-xl sm:rounded-[20px] md:rounded-[25px]" />
            <h3 className="font-display text-base xs:text-lg sm:text-xl md:text-2xl font-black text-slate-100">{prod.name}</h3>
            <p className="text-xs xs:text-sm sm:text-base text-slate-300 font-bold leading-relaxed flex-1">{prod.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 max-w-2xl mx-auto px-2 xs:px-3 sm:px-4">
        <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-400">{t('baltena.exportBadge')}</span>
        <p className="text-xs xs:text-sm sm:text-base text-slate-300 font-bold leading-relaxed">
          {t('baltena.exportText')}
        </p>
        <InteractiveHoverButton
          onClick={onRequestQuote}
          className="px-5 xs:px-6 sm:px-8 md:px-10 py-2 xs:py-2.5 sm:py-3 shadow-md"
        >
          {t('baltena.cta')}
        </InteractiveHoverButton>
      </div>

    </section>
  );
}
