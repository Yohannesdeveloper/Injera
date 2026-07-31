import React, { useMemo } from 'react';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';
import { useLanguage } from '../context/LanguageContext';

const PRODUCT_IMAGES = {
  white: '/images/white teff injera.jpg',
  brown: '/images/injera.jpg',
  mixed: '/images/Teff masa.jpg',
  global: '/images/global_dish.png',
  texture: '/images/injera_texture.png',
  masa: '/images/masa.jpg'
};

export default function ProductShowcase({ onRequestQuote }) {
  const { t } = useLanguage();
  const items = t('products.items');
  const ctaLabel = t('products.cta');
  return (
    <section id="products" className="relative z-10 py-12 4xl:py-16 7xl:py-20 px-4 4xl:px-6 max-w-6xl mx-auto">
      
      <div className="text-center max-w-3xl mx-auto mb-8 4xl:mb-12 7xl:mb-16 px-4">
        <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-400 mb-3 sm:mb-4">
          {t('products.badge')}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl 4xl:text-4xl 7xl:text-5xl font-black text-slate-100">
          <KineticText text={t('products.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('products.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      <div className="grid gap-6 4xl:gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {items.map((prod) => (
          <div key={prod.id} className="space-y-4 sm:space-y-5 4xl:space-y-6">
            <img
              src={PRODUCT_IMAGES[prod.id]}
              alt={prod.name}
              loading="lazy"
              className="w-full h-48 sm:h-56 4xl:h-64 object-cover rounded-xl sm:rounded-2xl"
            />
            <div className="space-y-2 sm:space-y-2.5 4xl:space-y-3">
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400">{prod.category}</span>
              <h3 className="font-display text-lg sm:text-xl font-black text-slate-100">{prod.name}</h3>
              <p className="text-sm sm:text-base text-slate-300 font-bold leading-relaxed">{prod.description}</p>
            </div>
            <InteractiveHoverButton
              onClick={onRequestQuote}
              className="w-full py-2.5 sm:py-3 shadow-md"
            >
              {ctaLabel}
            </InteractiveHoverButton>
          </div>
        ))}
      </div>

    </section>
  );
}
