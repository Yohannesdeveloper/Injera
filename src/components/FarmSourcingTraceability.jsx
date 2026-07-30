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
    <section id="quality" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          {t('whyChooseUs.badge')}
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-100">
          <KineticText text={t('whyChooseUs.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('whyChooseUs.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((p, idx) => {
          const Icon = ICONS[p.icon] || Shield;
          return (
            <BorderGlow key={idx} className="p-8 space-y-5" borderRadius={24} colors={['#D4AF37', '#F4C430', '#C87D32']}>
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-display text-xl font-black text-slate-100">{p.title}</h3>
              </div>

              <p className="text-base text-slate-300 font-bold leading-relaxed">{p.desc}</p>
            </BorderGlow>
          );
        })}
      </div>

    </section>
  );
}
