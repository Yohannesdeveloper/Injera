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
    <section id="quality" className="relative z-10 py-12 4xl:py-16 7xl:py-20 px-4 4xl:px-6 max-w-6xl mx-auto">

      <div className="text-center max-w-3xl mx-auto mb-8 4xl:mb-12 7xl:mb-16 px-4">
        <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-400 mb-3 sm:mb-4">
          {t('whyChooseUs.badge')}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl 4xl:text-4xl 7xl:text-5xl font-black text-slate-100">
          <KineticText text={t('whyChooseUs.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('whyChooseUs.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      <div className="grid gap-6 4xl:gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {pillars.map((p, idx) => {
          const Icon = ICONS[p.icon] || Shield;
          return (
            <BorderGlow key={idx} className="p-5 sm:p-6 4xl:p-8 space-y-4 sm:space-y-5" borderRadius={16} colors={['#D4AF37', '#F4C430', '#C87D32']}>
              <div className="w-10 h-10 sm:w-11 sm:h-11 4xl:w-12 4xl:h-12 rounded-lg sm:rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 4xl:w-6 4xl:h-6" />
              </div>

              <div>
                <h3 className="font-display text-lg sm:text-xl font-black text-slate-100">{p.title}</h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-bold leading-relaxed">{p.desc}</p>
            </BorderGlow>
          );
        })}
      </div>

    </section>
  );
}
