import React from 'react';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';
import { useLanguage } from '../context/LanguageContext';

const PRODUCT_IMAGES = {
  white: '/images/white teff injera.jpg',
  brown: '/images/injera.jpg',
  mixed: '/images/Teff masa.jpg',
  custom: '/images/delivery.jpg'
};

export default function ProductShowcase({ onRequestQuote }) {
  const { t } = useLanguage();
  const items = t('products.items');
  const ctaLabel = t('products.cta');
  return (
    <section id="products" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">
      
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          {t('products.badge')}
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-100">
          <KineticText text={t('products.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('products.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {items.map((prod) => (
          <div key={prod.id} className="space-y-6">
            <img
              src={PRODUCT_IMAGES[prod.id]}
              alt={prod.name}
              className="w-full h-72 object-cover rounded-[25px]"
            />
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{prod.category}</span>
              <h3 className="font-display text-xl font-black text-slate-100">{prod.name}</h3>
              <p className="text-base text-slate-300 font-bold leading-relaxed">{prod.description}</p>
            </div>
            <InteractiveHoverButton
              onClick={onRequestQuote}
              className="w-full py-3 shadow-md"
            >
              {ctaLabel}
            </InteractiveHoverButton>
          </div>
        ))}
      </div>

    </section>
  );
}
