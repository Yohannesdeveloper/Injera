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
    <section className="py-16 xs:py-18 sm:py-20 md:py-24 px-4 xs:px-5 sm:px-6 relative z-10 max-w-6xl mx-auto space-y-12 xs:space-y-14 sm:space-y-16">
      
      <div className="text-center space-y-3 xs:space-y-4 max-w-3xl mx-auto px-2 xs:px-3 sm:px-4">
        <span className="text-[10px] xs:text-xs sm:text-xs font-bold uppercase tracking-widest text-gold-400">
          {t('customers.badge')}
        </span>
        <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-100">
          <KineticText text={t('customers.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('customers.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-bold text-base xs:text-lg sm:text-xl">
          {t('customers.intro')}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 xs:gap-5 sm:gap-6">
        {types.map((name, idx) => {
          const Icon = CUSTOMER_ICONS[idx] || Store;
          return (
            <BorderGlow key={idx} className="p-4 xs:p-5 sm:p-6 text-center space-y-2 xs:space-y-3" borderRadius={16} colors={['#D4AF37', '#F4C430', '#C87D32']}>
              <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
                <Icon className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6" />
              </div>
              <p className="font-display text-sm xs:text-base sm:text-base font-black text-slate-100">{name}</p>
            </BorderGlow>
          );
        })}
      </div>

    </section>
  );
}
