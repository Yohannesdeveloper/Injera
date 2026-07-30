import React from 'react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';
import { useLanguage } from '../context/LanguageContext';

export default function CorporateLeadership({ onRequestQuote }) {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative z-10 py-12 4xl:py-16 7xl:py-20 px-4 4xl:px-6 max-w-6xl mx-auto">

      <div className="grid grid-cols-1 4xl:grid-cols-12 gap-8 sm:gap-10 4xl:gap-12 items-center">

        <div className="4xl:col-span-6 space-y-3 sm:space-y-4 4xl:space-y-6">
          <span className="inline-block text-[9px] sm:text-xs font-bold uppercase tracking-widest text-gold-400">
            {t('about.badge')}
          </span>

          <h2 className="font-display text-xl sm:text-3xl 4xl:text-4xl 7xl:text-5xl font-black text-slate-100 leading-tight">
            <KineticText text={t('about.heading')} as="span" className="inline flex-wrap" />{' '}
            <span className="gold-gradient-text"><KineticText text={t('about.headingGold')} as="span" className="inline flex-wrap" /></span>
          </h2>

          <p className="text-slate-300 font-bold text-sm sm:text-base 4xl:text-lg leading-relaxed">
            {t('about.p1')}
          </p>

          <p className="text-slate-300 font-bold text-sm sm:text-base 4xl:text-lg leading-relaxed">
            {t('about.p2')}
          </p>
        </div>

        <div className="4xl:col-span-6">
          <BorderGlow className="p-4 sm:p-6 4xl:p-8 space-y-3 sm:space-y-4 4xl:space-y-6" borderRadius={12} colors={['#D4AF37', '#F4C430', '#C87D32']}>
            <span className="inline-block text-[9px] sm:text-xs font-bold uppercase tracking-widest text-gold-400">
              {t('about.commitmentBadge')}
            </span>

            <h3 className="font-display text-lg sm:text-xl 4xl:text-2xl font-black text-slate-100">
              <KineticText text={t('about.commitmentHeading')} as="span" className="inline flex-wrap" />
            </h3>

            <p className="text-xs sm:text-sm 4xl:text-base text-slate-300 font-bold leading-relaxed">
              {t('about.commitmentText')}
            </p>

            <InteractiveHoverButton
              onClick={onRequestQuote}
              className="w-full py-2 sm:py-2.5 4xl:py-3 shadow-lg"
            >
              {t('about.commitmentBtn')}
            </InteractiveHoverButton>
          </BorderGlow>
        </div>

      </div>

    </section>
  );
}
