import React from 'react';
import { ArrowRight } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';
import { useLanguage } from '../context/LanguageContext';

export default function ExportCalculator({ onRequestQuote }) {
  const { t } = useLanguage();
  return (
    <section className="py-16 xs:py-18 sm:py-20 md:py-24 px-4 xs:px-5 sm:px-6 relative z-10 max-w-6xl mx-auto">
      <BorderGlow className="p-6 xs:p-7 sm:p-8 md:p-12 lg:p-16 text-center space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8" borderRadius={16} colors={['#D4AF37', '#F4C430', '#C87D32']} glowColor="43 80 80">
        
        <div className="max-w-3xl mx-auto space-y-4 xs:space-y-5 sm:space-y-6 px-2 xs:px-3 sm:px-4">
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-100">
            <KineticText text={t('cta.heading1')} as="span" className="inline flex-wrap" /> <br />
            <span className="gold-gradient-text"><KineticText text={t('cta.headingGold')} as="span" className="inline flex-wrap" /></span>
          </h2>

          <p className="text-slate-300 font-bold text-base xs:text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            {t('cta.text')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 xs:gap-4 pt-3 xs:pt-4">
            <InteractiveHoverButton onClick={onRequestQuote}>
              {t('cta.btnQuote')}
            </InteractiveHoverButton>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-6 xs:px-7 sm:px-8 py-2.5 xs:py-3 rounded-full border border-gold-500/50 text-gold-400 font-bold text-[10px] xs:text-[11px] sm:text-xs uppercase tracking-wider hover:bg-gold-500/10 transition-colors"
            >
              {t('cta.btnContact')}
              <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </BorderGlow>
    </section>
  );
}
