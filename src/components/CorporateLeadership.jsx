import React from 'react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';
import { useLanguage } from '../context/LanguageContext';

export default function CorporateLeadership({ onRequestQuote }) {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-16 xs:py-18 sm:py-20 md:py-24 px-4 xs:px-5 sm:px-6 relative z-10 max-w-6xl mx-auto space-y-12 xs:space-y-14 sm:space-y-16">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xs:gap-10 sm:gap-12 items-center">
        
        {/* Left Side: Who We Are */}
        <div className="lg:col-span-6 space-y-4 xs:space-y-5 sm:space-y-6">
          <span className="text-[10px] xs:text-xs sm:text-xs font-bold uppercase tracking-widest text-gold-400">
            {t('about.badge')}
          </span>

          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 leading-tight">
            <KineticText text={t('about.heading')} as="span" className="inline flex-wrap" /> <br />
            <span className="gold-gradient-text"><KineticText text={t('about.headingGold')} as="span" className="inline flex-wrap" /></span>
          </h2>

          <p className="text-slate-300 font-bold text-base xs:text-lg sm:text-xl leading-relaxed">
            {t('about.p1')}
          </p>

          <p className="text-slate-300 font-bold text-base xs:text-lg sm:text-xl leading-relaxed">
            {t('about.p2')}
          </p>
        </div>

        {/* Right Side: Our Commitment */}
        <div className="lg:col-span-6">
          <BorderGlow className="p-5 xs:p-6 sm:p-7 md:p-8 space-y-4 xs:space-y-5 sm:space-y-6" borderRadius={16} colors={['#D4AF37', '#F4C430', '#C87D32']}>
            <span className="text-[10px] xs:text-xs sm:text-xs font-bold uppercase tracking-widest text-gold-400">
              {t('about.commitmentBadge')}
            </span>

            <h3 className="font-display text-xl xs:text-2xl sm:text-3xl font-black text-slate-100">
              <KineticText text={t('about.commitmentHeading')} as="span" className="inline flex-wrap" />
            </h3>

            <p className="text-sm xs:text-base sm:text-base text-slate-300 font-bold leading-relaxed">
              {t('about.commitmentText')}
            </p>

            <InteractiveHoverButton
              onClick={onRequestQuote}
              className="w-full py-2.5 xs:py-3 sm:py-3.5 shadow-lg"
            >
              {t('about.commitmentBtn')}
            </InteractiveHoverButton>
          </BorderGlow>
        </div>

      </div>

    </section>
  );
}
