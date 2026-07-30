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
    <section id="network" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          {t('logistics.badge')}
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-100">
          <KineticText text={t('logistics.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('logistics.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-bold text-xl">
          {t('logistics.text')}
        </p>
      </div>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((route, idx) => (
          <BorderGlow key={idx} className="p-6 space-y-5 flex flex-col justify-between" borderRadius={24} colors={['#D4AF37', '#F4C430', '#C87D32']}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 font-mono">
                  {route.mode}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface text-[10px] font-bold text-slate-300 border border-slate-800">
                  {route.frequency}
                </span>
              </div>

              <h3 className="font-display text-lg font-black text-slate-100">{route.destination}</h3>
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{route.hubs}</span>
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-black/20 border border-slate-800">
                <p className="text-[9px] text-slate-400 uppercase font-semibold">{t('logistics.transitLabel')}</p>
                <p className="font-bold text-gold-400 mt-0.5">{route.transit}</p>
              </div>
              <div className="p-2 rounded-lg bg-black/20 border border-slate-800">
                <p className="text-[9px] text-slate-400 uppercase font-semibold">{t('logistics.tempLabel')}</p>
                <p className="font-bold text-slate-200 mt-0.5">{route.temp}</p>
              </div>
            </div>
          </BorderGlow>
        ))}
      </div>

      {/* Logistics CTA */}
      <BorderGlow className="p-8 flex flex-col md:flex-row items-center justify-between gap-6" borderRadius={28} colors={['#D4AF37', '#F4C430', '#C87D32']} glowColor="43 80 80">
        <div>
          <h4 className="font-display text-xl font-black text-slate-100">{t('logistics.ctaTitle')}</h4>
          <p className="text-base text-slate-300 font-bold mt-1">
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
