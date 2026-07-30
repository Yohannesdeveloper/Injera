import React from 'react';
import { Star, Building2 } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { useLanguage } from '../context/LanguageContext';

export default function PartnerTestimonials() {
  const { t } = useLanguage();
  const items = t('testimonials.items');
  return (
    <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-3 xs:px-4 sm:px-5 md:px-6 relative z-10 max-w-6xl mx-auto space-y-10 xs:space-y-12 sm:space-y-14 md:space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-2 xs:space-y-3 sm:space-y-4 max-w-3xl mx-auto px-2 xs:px-3 sm:px-4">
        <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-400">
          {t('testimonials.badge')}
        </span>
        <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-100">
          <KineticText text={t('testimonials.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('testimonials.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
        {items.map((tst, idx) => (
          <BorderGlow key={idx} className="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-between space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6" borderRadius={12} colors={['#D4AF37', '#F4C430', '#C87D32']}>
            <div className="space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="flex items-center gap-1 text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 fill-gold-400" />
                ))}
              </div>
              <p className="text-xs xs:text-sm sm:text-base text-slate-300 font-bold leading-relaxed italic">
                "{tst.quote}"
              </p>
            </div>

            <div className="pt-2 xs:pt-3 sm:pt-4 border-t border-slate-800 space-y-1">
              <p className="font-display text-xs xs:text-sm sm:text-sm font-bold text-slate-100">{tst.author}</p>
              <p className="text-[9px] xs:text-[10px] sm:text-[11px] text-gold-400 font-semibold">{tst.title}</p>
              <p className="text-[8px] xs:text-[9px] sm:text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <Building2 className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 text-slate-500" />
                <span>{tst.company}</span>
              </p>
            </div>
          </BorderGlow>
        ))}
      </div>

    </section>
  );
}
