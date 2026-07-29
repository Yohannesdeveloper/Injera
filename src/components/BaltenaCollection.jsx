import React from 'react';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';

const BALTENA_PRODUCTS = [
  {
    id: 'berbere',
    name: 'Berbere (በርበሬ)',
    emoji: '🌶️',
    image: '/images/Berbere.png',
    description: 'A bold and aromatic spice blend, essential to Ethiopian cuisine, crafted from chili peppers, garlic, ginger, and a symphony of traditional herbs.'
  },
  {
    id: 'shiro',
    name: 'Shiro Powder (ሽሮ)',
    emoji: '🌾',
    image: '/images/Shiro.png',
    description: 'Finely ground chickpea or broad bean flour blended with spices, perfect for hearty stews and quick, nutritious meals.'
  },
  {
    id: 'mitmita',
    name: 'Mitmita (ሚጥሚጣ)',
    emoji: '🔥',
    image: '/images/mitimita.png',
    description: 'An intense, fiery spice blend made from bird\'s eye chili, cardamom, and cloves — a must-have for those who crave heat.'
  },
  {
    id: 'spice-blends',
    name: 'Traditional Spice Blends',
    emoji: '🌿',
    image: '/images/images 3.jpg',
    description: 'Curated mixes of Ethiopia\'s finest spices, from turmeric and cumin to fenugreek and korarima, for authentic everyday cooking.'
  },
  {
    id: 'beso',
    name: 'Beso (በሶ)',
    emoji: '🥣',
    image: '/images/Beso.png',
    description: 'Traditional roasted barley flour, finely milled and naturally nutritious — enjoyed as a porridge, snack, or energy mix.'
  },
  {
    id: 'special-foods',
    name: 'Special Ethiopian Food Preparations',
    emoji: '🍲',
    description: 'Ready-to-prepare traditional Ethiopian dishes and specialty food items, prepared with authentic recipes and premium ingredients.'
  }
];

export default function BaltenaCollection({ onRequestQuote }) {
  return (
    <section id="baltena" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">

      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <img
          src="/images/Logo (2).jpg"
          alt="Ethiopian Baltena Collection"
          className="w-48 h-auto mx-auto rounded-lg shadow-lg"
        />
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block">
          Ethiopian Baltena Collection
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-100">
          <KineticText text="Authentic Ethiopian" as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text="Flavors" as="span" className="inline flex-wrap" /></span>
          {' '}<KineticText text="Ready for the World" as="span" className="inline flex-wrap" />
        </h2>
        <p className="text-base sm:text-lg text-slate-300 font-bold leading-relaxed max-w-2xl mx-auto">
          Experience the taste of Ethiopia with our traditional Baltena products, carefully prepared from authentic ingredients and traditional recipes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {BALTENA_PRODUCTS.map((prod) => (
          <div key={prod.id} className="glass-panel rounded-[25px] p-10 space-y-6 text-center flex flex-col items-center">
            {prod.image ? (
              <img src={prod.image} alt={prod.name} className="w-full h-56 object-cover rounded-[25px]" />
            ) : (
              <span className="text-6xl" role="img" aria-label={prod.name}>
                {prod.emoji}
              </span>
            )}
            <h3 className="font-display text-2xl font-black text-slate-100">{prod.name}</h3>
            <p className="text-sm text-slate-300 font-bold leading-relaxed flex-1">{prod.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">Export Ready</span>
        <p className="text-base text-slate-300 font-bold leading-relaxed">
          Packed with care to preserve freshness, flavor, and Ethiopian heritage — delivered to Ethiopian communities and food lovers worldwide.
        </p>
        <InteractiveHoverButton
          onClick={onRequestQuote}
          className="px-10 py-3 shadow-md"
        >
          Request Wholesale Pricing
        </InteractiveHoverButton>
      </div>

    </section>
  );
}
