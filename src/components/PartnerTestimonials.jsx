import React from 'react';
import { Star, Building2 } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { useLanguage } from '../context/LanguageContext';

export default function PartnerTestimonials() {
  const { t } = useLanguage();
  const items = t('testimonials.items');
  return (
    <section className="py-16 xs:py-18 sm:py-20 md:py-24 px-4 xs:px-5 sm:px-6 relative z-10 max-w-6xl mx-auto space-y-12 xs:space-y-14 sm:space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-3 xs:space-y-4 max-w-3xl mx-auto px-2 xs:px-3 sm:px-4">
        <span className="text-[10px] xs:text-xs sm:text-xs font-bold uppercase tracking-widest text-gold-400">
          {t('testimonials.badge')}
        </span>
        <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-100">
          <KineticText text={t('testimonials.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('testimonials.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 sm:gap-7 md:gap-8">
        {items.map((tst, idx) => (
          <BorderGlow key={idx} className="p-5 xs:p-6 sm:p-7 md:p-8 flex flex-col justify-between space-y-4 xs:space-y-5 sm:space-y-6" borderRadius={16} colors={['#D4AF37', '#F4C430', '#C87D32']}>
            <div className="space-y-3 xs:space-y-4">
              <div className="flex items-center gap-1 text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 xs:w-4 xs:h-4 fill-gold-400" />
                ))}
              </div>
              <p className="text-sm xs:text-base sm:text-base text-slate-300 font-bold leading-relaxed italic">
                "{tst.quote}"
              </p>
            </div>

            <div className="pt-3 xs:pt-4 border-t border-slate-800 space-y-1">
              <p className="font-display text-xs xs:text-sm sm:text-sm font-bold text-slate-100">{tst.author}</p>
              <p className="text-[10px] xs:text-[11px] sm:text-[11px] text-gold-400 font-semibold">{tst.title}</p>
              <p className="text-[9px] xs:text-[10px] sm:text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <Building2 className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3 sm:h-3 text-slate-500" />
                <span>{tst.company}</span>
              </p>
            </div>
          </BorderGlow>
        ))}
      </div>

    </section>
  );
}
