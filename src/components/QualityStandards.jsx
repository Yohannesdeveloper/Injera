import React from 'react';
import { Store, UtensilsCrossed, Building2, Globe, Package, ShoppingBag, ChefHat, Truck } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';

const CUSTOMER_TYPES = [
  { icon: Store, name: 'Supermarket Chains' },
  { icon: UtensilsCrossed, name: 'Restaurants' },
  { icon: Building2, name: 'Hotels' },
  { icon: Globe, name: 'Food Importers' },
  { icon: Package, name: 'Wholesale Distributors' },
  { icon: ShoppingBag, name: 'African Grocery Stores' },
  { icon: ChefHat, name: 'Catering Companies' },
  { icon: Truck, name: 'International Retailers' }
];

export default function QualityStandards() {
  return (
    <section className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">
      
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          Who We Serve
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-100">
          <KineticText text="Built for" as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text="Global Businesses" as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-bold text-xl">
          We proudly partner with:
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {CUSTOMER_TYPES.map((c, idx) => {
          const Icon = c.icon;
          return (
            <BorderGlow key={idx} className="p-6 text-center space-y-3" borderRadius={24} colors={['#D4AF37', '#F4C430', '#C87D32']}>
              <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
                <Icon className="w-6 h-6" />
              </div>
              <p className="font-display text-base font-black text-slate-100">{c.name}</p>
            </BorderGlow>
          );
        })}
      </div>

    </section>
  );
}
