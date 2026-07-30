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
    <section className="relative z-10 py-12 4xl:py-16 7xl:py-20 px-4 4xl:px-6 max-w-6xl mx-auto">

      <div className="text-center max-w-3xl mx-auto mb-8 4xl:mb-12 7xl:mb-16 px-4">
        <span className="inline-block text-[9px] sm:text-xs font-bold uppercase tracking-widest text-gold-400 mb-3 sm:mb-4">
          {t('customers.badge')}
        </span>
        <h2 className="font-display text-xl sm:text-3xl 4xl:text-4xl 7xl:text-5xl font-black text-slate-100">
          <KineticText text={t('customers.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('customers.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-bold text-sm sm:text-base 4xl:text-lg mt-3 sm:mt-4">
          {t('customers.intro')}
        </p>
      </div>

      <div className="grid gap-4 sm:gap-5 4xl:gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))' }}>
        {types.map((name, idx) => {
          const Icon = CUSTOMER_ICONS[idx] || Store;
          return (
            <BorderGlow key={idx} className="p-3 sm:p-4 4xl:p-6 text-center space-y-2 sm:space-y-3" borderRadius={12} colors={['#D4AF37', '#F4C430', '#C87D32']}>
              <div className="w-8 h-8 sm:w-9 sm:h-9 4xl:w-12 4xl:h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
                <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 4xl:w-6 4xl:h-6" />
              </div>
              <p className="font-display text-xs sm:text-sm 4xl:text-base font-black text-slate-100">{name}</p>
            </BorderGlow>
          );
        })}
      </div>

    </section>
  );
}
