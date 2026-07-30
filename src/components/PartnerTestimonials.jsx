import React from 'react';
import { Star, Building2 } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { useLanguage } from '../context/LanguageContext';

export default function PartnerTestimonials() {
  const { t } = useLanguage();
  const items = t('testimonials.items');
  return (
    <section className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          {t('testimonials.badge')}
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-100">
          <KineticText text={t('testimonials.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('testimonials.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((tst, idx) => (
          <BorderGlow key={idx} className="p-8 flex flex-col justify-between space-y-6" borderRadius={24} colors={['#D4AF37', '#F4C430', '#C87D32']}>
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400" />
                ))}
              </div>
              <p className="text-base text-slate-300 font-bold leading-relaxed italic">
                "{tst.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-1">
              <p className="font-display text-sm font-bold text-slate-100">{tst.author}</p>
              <p className="text-[11px] text-gold-400 font-semibold">{tst.title}</p>
              <p className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <Building2 className="w-3 h-3 text-slate-500" />
                <span>{tst.company}</span>
              </p>
            </div>
          </BorderGlow>
        ))}
      </div>

    </section>
  );
}
