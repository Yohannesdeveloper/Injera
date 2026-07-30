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
    <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-3 xs:px-4 sm:px-5 md:px-6 relative z-10 max-w-6xl mx-auto space-y-10 xs:space-y-12 sm:space-y-14 md:space-y-16">
      
      <div className="text-center space-y-2 xs:space-y-3 sm:space-y-4 max-w-3xl mx-auto px-2 xs:px-3 sm:px-4">
        <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-400">
          {t('customers.badge')}
        </span>
        <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-100">
          <KineticText text={t('customers.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('customers.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-bold text-sm xs:text-base sm:text-lg md:text-xl">
          {t('customers.intro')}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
        {types.map((name, idx) => {
          const Icon = CUSTOMER_ICONS[idx] || Store;
          return (
            <BorderGlow key={idx} className="p-3 xs:p-4 sm:p-5 md:p-6 text-center space-y-2 xs:space-y-3" borderRadius={12} colors={['#D4AF37', '#F4C430', '#C87D32']}>
              <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:w-10 md:w-12 md:h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
                <Icon className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <p className="font-display text-xs xs:text-sm sm:text-base font-black text-slate-100">{name}</p>
            </BorderGlow>
          );
        })}
      </div>

    </section>
  );
}
