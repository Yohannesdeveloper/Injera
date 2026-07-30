import React from 'react';
import { ArrowRight } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';
import { useLanguage } from '../context/LanguageContext';

export default function ExportCalculator({ onRequestQuote }) {
  const { t } = useLanguage();
  return (
    <section className="py-24 px-6 relative z-10 max-w-6xl mx-auto">
      <BorderGlow className="p-8 md:p-16 text-center space-y-8" borderRadius={28} colors={['#D4AF37', '#F4C430', '#C87D32']} glowColor="43 80 80">
        
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-100">
            <KineticText text={t('cta.heading1')} as="span" className="inline flex-wrap" /> <br />
            <span className="gold-gradient-text"><KineticText text={t('cta.headingGold')} as="span" className="inline flex-wrap" /></span>
          </h2>

          <p className="text-slate-300 font-bold text-xl leading-relaxed max-w-2xl mx-auto">
            {t('cta.text')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <InteractiveHoverButton onClick={onRequestQuote}>
              {t('cta.btnQuote')}
            </InteractiveHoverButton>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gold-500/50 text-gold-400 font-bold text-xs uppercase tracking-wider hover:bg-gold-500/10 transition-colors"
            >
              {t('cta.btnContact')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </BorderGlow>
    </section>
  );
}
