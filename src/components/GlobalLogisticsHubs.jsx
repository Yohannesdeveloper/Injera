import React from 'react';
import { Plane, Ship, MapPin, ShieldCheck, Thermometer, Clock } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';
import { useLanguage } from '../context/LanguageContext';

export default function GlobalLogisticsHubs({ onRequestQuote }) {
  const { t } = useLanguage();
  const routes = t('logistics.routes');
  return (
    <section id="network" className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-3 xs:px-4 sm:px-5 md:px-6 relative z-10 max-w-6xl mx-auto space-y-10 xs:space-y-12 sm:space-y-14 md:space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-2 xs:space-y-3 sm:space-y-4 max-w-3xl mx-auto px-2 xs:px-3 sm:px-4">
        <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-400">
          {t('logistics.badge')}
        </span>
        <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-100">
          <KineticText text={t('logistics.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('logistics.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-bold text-sm xs:text-base sm:text-lg md:text-xl">
          {t('logistics.text')}
        </p>
      </div>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
        {routes.map((route, idx) => (
          <BorderGlow key={idx} className="p-3 xs:p-4 sm:p-5 md:p-6 space-y-2 xs:space-y-3 sm:space-y-4 flex flex-col justify-between" borderRadius={12} colors={['#D4AF37', '#F4C430', '#C87D32']}>
            <div className="space-y-1.5 xs:space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gold-400 font-mono">
                  {route.mode}
                </span>
                <span className="px-1.5 xs:px-2 sm:px-2.5 py-0.5 rounded-full bg-surface text-[8px] xs:text-[9px] sm:text-[10px] font-bold text-slate-300 border border-slate-800">
                  {route.frequency}
                </span>
              </div>

              <h3 className="font-display text-sm xs:text-base sm:text-lg md:text-xl font-black text-slate-100">{route.destination}</h3>
              <p className="text-[9px] xs:text-[10px] sm:text-xs text-slate-400 flex items-center gap-1 xs:gap-1.5">
                <MapPin className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 text-gold-400 shrink-0" />
                <span>{route.hubs}</span>
              </p>
            </div>

            <div className="pt-1.5 xs:pt-2 sm:pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-1 xs:gap-1.5 sm:gap-2 text-[9px] xs:text-[10px] sm:text-xs">
              <div className="p-1 xs:p-1.5 sm:p-2 rounded-lg bg-black/20 border border-slate-800">
                <p className="text-[7px] xs:text-[8px] sm:text-[9px] text-slate-400 uppercase font-semibold">{t('logistics.transitLabel')}</p>
                <p className="font-bold text-gold-400 mt-0.5">{route.transit}</p>
              </div>
              <div className="p-1 xs:p-1.5 sm:p-2 rounded-lg bg-black/20 border border-slate-800">
                <p className="text-[7px] xs:text-[8px] sm:text-[9px] text-slate-400 uppercase font-semibold">{t('logistics.tempLabel')}</p>
                <p className="font-bold text-slate-200 mt-0.5">{route.temp}</p>
              </div>
            </div>
          </BorderGlow>
        ))}
      </div>

      {/* Logistics CTA */}
      <BorderGlow className="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-3 xs:gap-4 sm:gap-5 md:gap-6" borderRadius={12} colors={['#D4AF37', '#F4C430', '#C87D32']} glowColor="43 80 80">
        <div>
          <h4 className="font-display text-base xs:text-lg sm:text-xl md:text-xl font-black text-slate-100">{t('logistics.ctaTitle')}</h4>
          <p className="text-xs xs:text-sm sm:text-base text-slate-300 font-bold mt-1">
            {t('logistics.ctaText')}
          </p>
        </div>
        <InteractiveHoverButton
          onClick={onRequestQuote}
          className="shrink-0"
        >
          {t('logistics.ctaBtn')}
        </InteractiveHoverButton>
      </BorderGlow>

    </section>
  );
}
