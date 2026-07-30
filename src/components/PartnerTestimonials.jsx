import React from 'react';
import { Star, Building2 } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { useLanguage } from '../context/LanguageContext';

export default function PartnerTestimonials() {
  const { t } = useLanguage();
  const items = t('testimonials.items');
  return (
    <section className="relative z-10 py-12 4xl:py-16 7xl:py-20 px-4 4xl:px-6 max-w-6xl mx-auto">

      <div className="text-center max-w-3xl mx-auto mb-8 4xl:mb-12 7xl:mb-16 px-4">
        <span className="inline-block text-[9px] sm:text-xs font-bold uppercase tracking-widest text-gold-400 mb-3 sm:mb-4">
          {t('testimonials.badge')}
        </span>
        <h2 className="font-display text-xl sm:text-3xl 4xl:text-4xl 7xl:text-5xl font-black text-slate-100">
          <KineticText text={t('testimonials.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('testimonials.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      <div className="grid gap-4 sm:gap-6 4xl:gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {items.map((tst, idx) => (
          <BorderGlow key={idx} className="p-4 sm:p-6 4xl:p-8 flex flex-col justify-between space-y-3 sm:space-y-4 4xl:space-y-6" borderRadius={12} colors={['#D4AF37', '#F4C430', '#C87D32']}>
            <div className="space-y-2 sm:space-y-3 4xl:space-y-4">
              <div className="flex items-center gap-1 text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 4xl:w-4 4xl:h-4 fill-gold-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm 4xl:text-base text-slate-300 font-bold leading-relaxed italic">
                &ldquo;{tst.quote}&rdquo;
              </p>
            </div>

            <div className="pt-2 sm:pt-3 4xl:pt-4 border-t border-slate-800 space-y-1">
              <p className="font-display text-xs sm:text-sm font-bold text-slate-100">{tst.author}</p>
              <p className="text-[9px] sm:text-[10px] 4xl:text-[11px] text-gold-400 font-semibold">{tst.title}</p>
              <p className="text-[8px] sm:text-[9px] 4xl:text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <Building2 className="w-2 h-2 sm:w-2.5 sm:h-2.5 4xl:w-3 4xl:h-3 text-slate-500" />
                <span>{tst.company}</span>
              </p>
            </div>
          </BorderGlow>
        ))}
      </div>

    </section>
  );
}
