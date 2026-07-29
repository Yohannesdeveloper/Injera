import React from 'react';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';

const EXPORT_PRODUCTS = [
  {
    id: 'white',
    name: 'White Teff Injera',
    category: 'Premium',
    image: '/images/white teff injera.jpg',
    description: 'Light, soft, and crafted from premium white teff.'
  },
  {
    id: 'brown',
    name: 'Brown Teff Injera',
    category: 'Traditional',
    image: '/images/injera.jpg',
    description: 'Traditional flavor with rich texture and authentic character.'
  },
  {
    id: 'mixed',
    name: 'Mixed Teff Injera',
    category: 'Everyday',
    image: '/images/injera 2.jpg',
    description: 'A balanced blend designed for everyday dining and commercial kitchens.'
  },
  {
    id: 'custom',
    name: 'Custom Wholesale Orders',
    category: 'Wholesale',
    image: '/images/delivery.jpg',
    description: 'Private labeling and custom packaging solutions for distributors and retail partners.'
  }
];

export default function ProductShowcase({ onRequestQuote }) {
  return (
    <section id="products" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">
      
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          Our Products
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-100">
          <KineticText text="Premium Injera for" as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text="Every Market" as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {EXPORT_PRODUCTS.map((prod) => (
          <div key={prod.id} className="space-y-6">
            <img
              src={prod.image}
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
              Request Sample & Pricing
            </InteractiveHoverButton>
          </div>
        ))}
      </div>

    </section>
  );
}
