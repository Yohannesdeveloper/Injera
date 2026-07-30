import React from 'react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';
import { useLanguage } from '../context/LanguageContext';

export default function CorporateLeadership({ onRequestQuote }) {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-3 xs:px-4 sm:px-5 md:px-6 relative z-10 max-w-6xl mx-auto space-y-10 xs:space-y-12 sm:space-y-14 md:space-y-16">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xs:gap-8 sm:gap-10 md:gap-12 items-center">
        
        {/* Left Side: Who We Are */}
        <div className="lg:col-span-6 space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
          <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-400">
            {t('about.badge')}
          </span>

          <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-100 leading-tight">
            <KineticText text={t('about.heading')} as="span" className="inline flex-wrap" /> <br />
            <span className="gold-gradient-text"><KineticText text={t('about.headingGold')} as="span" className="inline flex-wrap" /></span>
          </h2>

          <p className="text-slate-300 font-bold text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
            {t('about.p1')}
          </p>

          <p className="text-slate-300 font-bold text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
            {t('about.p2')}
          </p>
        </div>

        {/* Right Side: Our Commitment */}
        <div className="lg:col-span-6">
          <BorderGlow className="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6" borderRadius={12} colors={['#D4AF37', '#F4C430', '#C87D32']}>
            <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-400">
              {t('about.commitmentBadge')}
            </span>

            <h3 className="font-display text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
              <KineticText text={t('about.commitmentHeading')} as="span" className="inline flex-wrap" />
            </h3>

            <p className="text-xs xs:text-sm sm:text-base text-slate-300 font-bold leading-relaxed">
              {t('about.commitmentText')}
            </p>

            <InteractiveHoverButton
              onClick={onRequestQuote}
              className="w-full py-2 xs:py-2.5 sm:py-3 shadow-lg"
            >
              {t('about.commitmentBtn')}
            </InteractiveHoverButton>
          </BorderGlow>
        </div>

      </div>

    </section>
  );
}
