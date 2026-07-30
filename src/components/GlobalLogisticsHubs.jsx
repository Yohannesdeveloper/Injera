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
    <section id="network" className="relative z-10 py-12 4xl:py-16 7xl:py-20 px-4 4xl:px-6 max-w-6xl mx-auto">

      <div className="text-center max-w-3xl mx-auto mb-8 4xl:mb-12 7xl:mb-16 px-4">
        <span className="inline-block text-[9px] sm:text-xs font-bold uppercase tracking-widest text-gold-400 mb-3 sm:mb-4">
          {t('logistics.badge')}
        </span>
        <h2 className="font-display text-xl sm:text-3xl 4xl:text-4xl 7xl:text-5xl font-black text-slate-100">
          <KineticText text={t('logistics.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('logistics.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-bold text-sm sm:text-base 4xl:text-lg mt-3 sm:mt-4">
          {t('logistics.text')}
        </p>
      </div>

      <div className="grid gap-4 sm:gap-5 4xl:gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {routes.map((route, idx) => (
          <BorderGlow key={idx} className="p-3 sm:p-4 4xl:p-6 space-y-2 sm:space-y-3 4xl:space-y-4 flex flex-col justify-between" borderRadius={12} colors={['#D4AF37', '#F4C430', '#C87D32']}>
            <div className="space-y-1.5 sm:space-y-2 4xl:space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[8px] sm:text-[9px] 4xl:text-[10px] font-bold uppercase tracking-wider text-gold-400 font-mono">
                  {route.mode}
                </span>
                <span className="px-1.5 sm:px-2 4xl:px-2.5 py-0.5 rounded-full bg-surface text-[8px] sm:text-[9px] 4xl:text-[10px] font-bold text-slate-300 border border-slate-800">
                  {route.frequency}
                </span>
              </div>

              <h3 className="font-display text-sm sm:text-base 4xl:text-lg font-black text-slate-100">{route.destination}</h3>
              <p className="text-[9px] sm:text-[10px] 4xl:text-xs text-slate-400 flex items-center gap-1 sm:gap-1.5">
                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 4xl:w-3.5 4xl:h-3.5 text-gold-400 shrink-0" />
                <span>{route.hubs}</span>
              </p>
            </div>

            <div className="pt-1.5 sm:pt-2 4xl:pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-1 sm:gap-1.5 4xl:gap-2 text-[9px] sm:text-[10px] 4xl:text-xs">
              <div className="p-1 sm:p-1.5 4xl:p-2 rounded-lg bg-black/20 border border-slate-800">
                <p className="text-[7px] sm:text-[8px] 4xl:text-[9px] text-slate-400 uppercase font-semibold">{t('logistics.transitLabel')}</p>
                <p className="font-bold text-gold-400 mt-0.5">{route.transit}</p>
              </div>
              <div className="p-1 sm:p-1.5 4xl:p-2 rounded-lg bg-black/20 border border-slate-800">
                <p className="text-[7px] sm:text-[8px] 4xl:text-[9px] text-slate-400 uppercase font-semibold">{t('logistics.tempLabel')}</p>
                <p className="font-bold text-slate-200 mt-0.5">{route.temp}</p>
              </div>
            </div>
          </BorderGlow>
        ))}
      </div>

      <BorderGlow className="p-4 sm:p-6 4xl:p-8 flex flex-col 4xl:flex-row items-center justify-between gap-4 sm:gap-5 4xl:gap-6 mt-10 4xl:mt-14 7xl:mt-18" borderRadius={12} colors={['#D4AF37', '#F4C430', '#C87D32']} glowColor="43 80 80">
        <div>
          <h4 className="font-display text-base sm:text-lg 4xl:text-xl font-black text-slate-100">{t('logistics.ctaTitle')}</h4>
          <p className="text-xs sm:text-sm 4xl:text-base text-slate-300 font-bold mt-1">
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
