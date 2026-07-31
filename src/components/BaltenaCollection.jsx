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
    <section id="baltena" className="relative z-10 py-12 4xl:py-16 7xl:py-20 px-4 4xl:px-6 max-w-6xl mx-auto">

      <div className="text-center max-w-3xl mx-auto mb-8 4xl:mb-12 7xl:mb-16 px-4">
        <span className="inline-block text-[9px] sm:text-xs font-bold uppercase tracking-widest text-gold-400 mb-3 sm:mb-4">
          {t('baltena.badge')}
        </span>
        <h2 className="font-display text-xl sm:text-3xl 4xl:text-4xl 7xl:text-5xl font-black text-slate-100">
          <KineticText text={t('baltena.heading1')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('baltena.headingGold')} as="span" className="inline flex-wrap" /></span>
          {' '}<KineticText text={t('baltena.heading2')} as="span" className="inline flex-wrap" />
        </h2>
        <p className="text-xs sm:text-sm 4xl:text-base text-slate-300 font-bold leading-relaxed mt-3 sm:mt-4">
          {t('baltena.subtitle')}
        </p>
      </div>

      <div className="grid gap-4 sm:gap-5 4xl:gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {items.map((prod) => (
          <div key={prod.id} className="glass-panel rounded-xl sm:rounded-2xl p-4 sm:p-5 4xl:p-6 text-center flex flex-col items-center space-y-3 sm:space-y-4 4xl:space-y-5">
            <img src={BALTENA_IMAGES[prod.id]} alt={prod.name} loading="lazy" className="w-full h-auto aspect-[4/3] object-contain rounded-xl sm:rounded-2xl bg-black/20" />
            <h3 className="font-display text-base sm:text-lg 4xl:text-xl font-black text-slate-100">{prod.name}</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-bold leading-relaxed flex-1">{prod.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center max-w-2xl mx-auto mt-10 4xl:mt-14 7xl:mt-18 px-4">
        <span className="block text-[9px] sm:text-xs font-bold uppercase tracking-widest text-gold-400 mb-3 sm:mb-4">{t('baltena.exportBadge')}</span>
        <p className="text-xs sm:text-sm 4xl:text-base text-slate-300 font-bold leading-relaxed mb-4 sm:mb-6">
          {t('baltena.exportText')}
        </p>
        <InteractiveHoverButton
          onClick={onRequestQuote}
          className="px-5 sm:px-8 4xl:px-10 py-2 sm:py-3 shadow-md"
        >
          {t('baltena.cta')}
        </InteractiveHoverButton>
      </div>

    </section>
  );
}
