import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';

const EXPORT_PRODUCTS = [
  {
    id: 'white',
    name: 'White Teff Injera',
    category: 'Premium',
    image: '/images/injera_texture.png',
    badge: 'Classic',
    description: 'Light, soft, and crafted from premium white teff.'
  },
  {
    id: 'brown',
    name: 'Brown Teff Injera',
    category: 'Traditional',
    image: '/images/vacuum_pack.png',
    badge: 'Authentic',
    description: 'Traditional flavor with rich texture and authentic character.'
  },
  {
    id: 'mixed',
    name: 'Mixed Teff Injera',
    category: 'Everyday',
    image: '/images/teff_field.png',
    badge: 'Versatile',
    description: 'A balanced blend designed for everyday dining and commercial kitchens.'
  },
  {
    id: 'custom',
    name: 'Custom Wholesale Orders',
    category: 'Wholesale',
    image: '/images/warehouse.png',
    badge: 'Flexible',
    description: 'Private labeling and custom packaging solutions for distributors and retail partners.'
  }
];

export default function ProductShowcase({ onRequestQuote }) {
  return (
    <section id="products" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">
      
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          Our Products
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-100">
          <KineticText text="Premium Injera for" as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text="Every Market" as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EXPORT_PRODUCTS.map((prod) => (
          <BorderGlow key={prod.id} className="p-6 flex flex-col justify-between space-y-6 group" borderRadius={24} colors={['#D4AF37', '#F4C430', '#C87D32']}>
            
            {/* Card Top: Image & Badge */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden h-52">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-gold-500/30 text-[10px] font-bold uppercase text-gold-400">
                  {prod.badge}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{prod.category}</span>
                <h3 className="font-display text-xl font-bold text-slate-100 mt-0.5">{prod.name}</h3>
              </div>

              <p className="text-base text-slate-300 font-bold leading-relaxed">{prod.description}</p>
            </div>

            {/* Action */}
            <InteractiveHoverButton
              onClick={onRequestQuote}
              className="w-full py-3 shadow-md"
            >
              Request Sample & Pricing
            </InteractiveHoverButton>

          </BorderGlow>
        ))}
      </div>

    </section>
  );
}
