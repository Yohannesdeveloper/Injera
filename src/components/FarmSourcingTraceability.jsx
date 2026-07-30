import React from 'react';
import { Shield, Leaf, Ship, CheckCircle2 } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { useLanguage } from '../context/LanguageContext';

const ICONS = { Leaf, Ship, Shield, CheckCircle2 };

export default function FarmSourcingTraceability() {
  const { t } = useLanguage();
  const pillars = t('whyChooseUs.pillars');
  return (
    <section id="quality" className="py-16 xs:py-18 sm:py-20 md:py-24 px-4 xs:px-5 sm:px-6 relative z-10 max-w-6xl mx-auto space-y-12 xs:space-y-14 sm:space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-3 xs:space-y-4 max-w-3xl mx-auto px-2 xs:px-3 sm:px-4">
        <span className="text-[10px] xs:text-xs sm:text-xs font-bold uppercase tracking-widest text-gold-400">
          {t('whyChooseUs.badge')}
        </span>
        <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-100">
          <KineticText text={t('whyChooseUs.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('whyChooseUs.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 xs:gap-7 sm:gap-8">
        {pillars.map((p, idx) => {
          const Icon = ICONS[p.icon] || Shield;
          return (
            <BorderGlow key={idx} className="p-5 xs:p-6 sm:p-7 md:p-8 space-y-4 xs:space-y-5" borderRadius={16} colors={['#D4AF37', '#F4C430', '#C87D32']}>
              <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-lg xs:rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                <Icon className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6" />
              </div>

              <div>
                <h3 className="font-display text-lg xs:text-xl sm:text-xl font-black text-slate-100">{p.title}</h3>
              </div>

              <p className="text-sm xs:text-base sm:text-base text-slate-300 font-bold leading-relaxed">{p.desc}</p>
            </BorderGlow>
          );
        })}
      </div>

    </section>
  );
}
