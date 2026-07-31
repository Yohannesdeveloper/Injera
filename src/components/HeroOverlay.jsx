import React from 'react';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';
import { useLanguage } from '../context/LanguageContext';

export default function HeroOverlay({ onRequestQuote }) {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 4xl:px-6 pt-24 4xl:pt-28 7xl:pt-32 pb-16 4xl:pb-20 overflow-hidden">
      <video autoPlay muted playsInline preload="metadata" poster="/images/injera_bg.png" className="absolute inset-0 w-full h-full object-cover z-0" src="/Video_4.mp4" />
      <div className="absolute inset-0 z-[1] bg-black/60" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="font-display font-black hero-text-light leading-[1.1]">
          <KineticText text={t('hero.title1')} as="span" className="inline" />{' '}
          <span className="block gold-gradient-text hero-text-light">
            <KineticText text={t('hero.title2')} as="span" className="inline" />
          </span>
        </h1>

        <style>{`
          h1.font-display { font-size: clamp(1.75rem, 6.5vw, 5rem); }
        `}</style>

        <p className="hero-text-light font-bold leading-relaxed max-w-3xl mx-auto mt-6 sm:mt-8" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.5rem)' }}>
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
          <InteractiveHoverButton onClick={onRequestQuote}>{t('hero.requestQuote')}</InteractiveHoverButton>
          <a href="#products" className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-gold-500/50 hero-text-light font-bold text-[10px] sm:text-xs uppercase tracking-wider hover:bg-gold-500/10 transition-colors">
            {t('hero.viewProducts')}
          </a>
        </div>
      </div>
    </section>
  );
}
