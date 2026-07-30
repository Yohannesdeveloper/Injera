import React from 'react';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';
import { useLanguage } from '../context/LanguageContext';

export default function HeroOverlay({ onRequestQuote }) {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 xs:px-5 sm:px-6 pt-24 xs:pt-28 sm:pt-32 pb-16 xs:pb-18 sm:pb-20 overflow-hidden">
      {/* Full-screen video background */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/Video_4.mp4"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 xs:space-y-7 sm:space-y-8 px-2 xs:px-3 sm:px-4">
        <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black hero-text-light leading-tight">
          <KineticText text={t('hero.title1')} as="span" className="inline flex-wrap" /> <br />
          <span className="gold-gradient-text hero-text-light"><KineticText text={t('hero.title2')} as="span" className="inline flex-wrap" /></span>
        </h1>

        <p className="hero-text-light font-bold text-base xs:text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 xs:gap-4 pt-3 xs:pt-4">
          <InteractiveHoverButton onClick={onRequestQuote}>
            {t('hero.requestQuote')}
          </InteractiveHoverButton>
          <a
            href="#products"
            className="group relative inline-flex items-center gap-2 px-6 xs:px-7 sm:px-8 py-2.5 xs:py-3 rounded-full border border-gold-500/50 hero-text-light font-bold text-[10px] xs:text-[11px] sm:text-xs uppercase tracking-wider hover:bg-gold-500/10 transition-colors"
          >
            {t('hero.viewProducts')}
          </a>
        </div>
      </div>
    </section>
  );
}
