import React from 'react';
import { ArrowRight } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';
import { useLanguage } from '../context/LanguageContext';

export default function ExportCalculator({ onRequestQuote }) {
  const { t } = useLanguage();
  return (
    <section className="relative z-10 py-12 4xl:py-16 7xl:py-20 px-4 4xl:px-6 max-w-6xl mx-auto">
      <BorderGlow className="p-5 sm:p-8 4xl:p-12 7xl:p-16 text-center space-y-4 sm:space-y-6 4xl:space-y-8" borderRadius={12} colors={['#D4AF37', '#F4C430', '#C87D32']} glowColor="43 80 80">

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 4xl:space-y-6 px-2 sm:px-4">
          <h2 className="font-display text-xl sm:text-3xl 4xl:text-4xl 7xl:text-5xl font-black text-slate-100">
            <KineticText text={t('cta.heading1')} as="span" className="inline flex-wrap" />{' '}
            <span className="gold-gradient-text"><KineticText text={t('cta.headingGold')} as="span" className="inline flex-wrap" /></span>
          </h2>

          <p className="text-slate-300 font-bold text-sm sm:text-base 4xl:text-lg leading-relaxed max-w-2xl mx-auto">
            {t('cta.text')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 pt-2 sm:pt-4">
            <InteractiveHoverButton onClick={onRequestQuote}>
              {t('cta.btnQuote')}
            </InteractiveHoverButton>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 4xl:px-8 py-2 sm:py-3 rounded-full border border-gold-500/50 text-gold-400 font-bold text-[9px] sm:text-[11px] 4xl:text-xs uppercase tracking-wider hover:bg-gold-500/10 transition-colors"
            >
              {t('cta.btnContact')}
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 4xl:w-4 4xl:h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </BorderGlow>
    </section>
  );
}
