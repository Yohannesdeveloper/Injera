import React from 'react';
import { Check, ShieldCheck, ArrowUpRight } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';

const EXPORT_PRODUCTS = [
  {
    id: 'retail',
    name: 'Vacuum Export 5-Pack',
    category: 'Retail & Supermarket',
    image: '/images/vacuum_pack.png',
    badge: 'Retail Best Seller',
    description: '100% Teff Injera vacuum-sealed under MAP for 30-day ambient freshness.',
    specs: {
      pack: '5 Rolled Discs (52 cm / 20.5 in)',
      weight: '1.2 kg per Pack',
      shelfLife: '30 Days Ambient / 60 Days Chilled',
      moq: '500 Packs (Air Freight Minimum)'
    }
  },
  {
    id: 'fresh',
    name: 'Fresh Artisan White Teff',
    category: 'Restaurant & Catering',
    image: '/images/injera_texture.png',
    badge: 'Chef Favorite',
    description: 'Classic ivory Injera from premium White Teff, fresh via daily air cargo.',
    specs: {
      pack: '10 Unrolled Discs per Case',
      weight: '2.5 kg per Case',
      shelfLife: '7 Days Fresh (+4°C)',
      moq: '100 Cases (Air Freight)'
    }
  },
  {
    id: 'bulk',
    name: 'Frozen Bulk Export Box',
    category: 'Wholesale Importers',
    image: '/images/warehouse.png',
    badge: '12-Month Stability',
    description: 'IQF flash-frozen for maritime shipment with 12-month shelf stability.',
    specs: {
      pack: '100 Discs (20 Packs x 5)',
      weight: '24 kg Master Carton',
      shelfLife: '12 Months Frozen (-18°C)',
      moq: '1 x 20ft Reefer Container'
    }
  }
];

export default function ProductShowcase({ onRequestQuote }) {
  return (
    <section id="products" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">
      
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          Export Product Portfolio
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-100">
          <KineticText text="Certified Injera Export" as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text="Line" as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-medium text-base">
          Tailored packaging for supermarkets, restaurants, and wholesale importers.
        </p>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="absolute top-3 left-3 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full border border-gold-500/30 text-[10px] font-bold uppercase text-gold-400">
                  {prod.badge}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{prod.category}</span>
                <h3 className="font-display text-xl font-bold text-slate-100 mt-0.5">{prod.name}</h3>
              </div>

              <p className="text-sm text-slate-300 font-medium leading-relaxed">{prod.description}</p>
            </div>

            {/* Card Middle: Specs Table */}
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-left pt-2 border-t border-slate-800">
                <div className="p-2.5 rounded-xl bg-elevated/60 border border-slate-800/80">
                  <p className="text-[9px] font-bold uppercase text-slate-400">Packaging</p>
                  <p className="text-[11px] font-semibold text-slate-200 mt-0.5">{prod.specs.pack}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-elevated/60 border border-slate-800/80">
                  <p className="text-[9px] font-bold uppercase text-slate-400">Net Weight</p>
                  <p className="text-[11px] font-semibold text-slate-200 mt-0.5">{prod.specs.weight}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-elevated/60 border border-slate-800/80">
                  <p className="text-[9px] font-bold uppercase text-slate-400">Shelf Life</p>
                  <p className="text-[11px] font-semibold text-gold-400 mt-0.5">{prod.specs.shelfLife}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-elevated/60 border border-slate-800/80">
                  <p className="text-[9px] font-bold uppercase text-slate-400">Minimum Order</p>
                  <p className="text-[11px] font-semibold text-slate-200 mt-0.5">{prod.specs.moq}</p>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={onRequestQuote}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-ochre-500 hover:from-gold-400 hover:to-ochre-400 text-black dark:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Request Sample & Pricing</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </BorderGlow>
        ))}
      </div>

    </section>
  );
}
