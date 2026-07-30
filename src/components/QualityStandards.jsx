import React from 'react';
import { Store, UtensilsCrossed, Building2, Globe, Package, ShoppingBag, ChefHat, Truck } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { useLanguage } from '../context/LanguageContext';

const CUSTOMER_ICONS = [Store, UtensilsCrossed, Building2, Globe, Package, ShoppingBag, ChefHat, Truck];

export default function QualityStandards() {
  const { t } = useLanguage();
  const types = t('customers.types');
  return (
    <section className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">
      
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          {t('customers.badge')}
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-100">
          <KineticText text={t('customers.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('customers.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-bold text-xl">
          {t('customers.intro')}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {types.map((name, idx) => {
          const Icon = CUSTOMER_ICONS[idx] || Store;
          return (
            <BorderGlow key={idx} className="p-6 text-center space-y-3" borderRadius={24} colors={['#D4AF37', '#F4C430', '#C87D32']}>
              <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
                <Icon className="w-6 h-6" />
              </div>
              <p className="font-display text-base font-black text-slate-100">{name}</p>
            </BorderGlow>
          );
        })}
      </div>

    </section>
  );
}
