import React from 'react';
import { ArrowRight } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';
import { useLanguage } from '../context/LanguageContext';

export default function ExportCalculator({ onRequestQuote }) {
  const { t } = useLanguage();
  return (
    <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-3 xs:px-4 sm:px-5 md:px-6 relative z-10 max-w-6xl mx-auto">
      <BorderGlow className="p-5 xs:p-6 sm:p-7 md:p-10 lg:p-14 xl:p-16 text-center space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8" borderRadius={12} colors={['#D4AF37', '#F4C430', '#C87D32']} glowColor="43 80 80">
        
        <div className="max-w-3xl mx-auto space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 px-2 xs:px-3 sm:px-4">
          <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-100">
            <KineticText text={t('cta.heading1')} as="span" className="inline flex-wrap" /> <br />
            <span className="gold-gradient-text"><KineticText text={t('cta.headingGold')} as="span" className="inline flex-wrap" /></span>
          </h2>

          <p className="text-slate-300 font-bold text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {t('cta.text')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 xs:gap-3 sm:gap-4 pt-2 xs:pt-3 sm:pt-4">
            <InteractiveHoverButton onClick={onRequestQuote}>
              {t('cta.btnQuote')}
            </InteractiveHoverButton>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-1.5 xs:gap-2 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 py-2 xs:py-2.5 sm:py-3 rounded-full border border-gold-500/50 text-gold-400 font-bold text-[9px] xs:text-[10px] sm:text-[11px] md:text-xs uppercase tracking-wider hover:bg-gold-500/10 transition-colors"
            >
              {t('cta.btnContact')}
              <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </BorderGlow>
    </section>
  );
}
