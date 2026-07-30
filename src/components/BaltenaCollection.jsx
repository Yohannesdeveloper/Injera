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
    <section id="baltena" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">

      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block">
          {t('baltena.badge')}
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-100">
          <KineticText text={t('baltena.heading1')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('baltena.headingGold')} as="span" className="inline flex-wrap" /></span>
          {' '}<KineticText text={t('baltena.heading2')} as="span" className="inline flex-wrap" />
        </h2>
        <p className="text-base sm:text-lg text-slate-300 font-bold leading-relaxed max-w-2xl mx-auto">
          {t('baltena.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((prod) => (
          <div key={prod.id} className="glass-panel rounded-[25px] p-10 space-y-6 text-center flex flex-col items-center">
            <img src={BALTENA_IMAGES[prod.id]} alt={prod.name} className="w-full h-56 object-cover rounded-[25px]" />
            <h3 className="font-display text-2xl font-black text-slate-100">{prod.name}</h3>
            <p className="text-sm text-slate-300 font-bold leading-relaxed flex-1">{prod.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">{t('baltena.exportBadge')}</span>
        <p className="text-base text-slate-300 font-bold leading-relaxed">
          {t('baltena.exportText')}
        </p>
        <InteractiveHoverButton
          onClick={onRequestQuote}
          className="px-10 py-3 shadow-md"
        >
          {t('baltena.cta')}
        </InteractiveHoverButton>
      </div>

    </section>
  );
}
