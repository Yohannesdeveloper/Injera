import React from 'react';
import { CheckCircle2, Camera } from 'lucide-react';
import { KineticText } from './KineticText';
import { useLanguage } from '../context/LanguageContext';

const CHAPTERS = [
  { id: 'selection', step: '01', image: '/images/teff_field.jpg' },
  { id: 'fermentation', step: '02', image: '/images/Fermentation.jpg' },
  { id: 'baking', step: '03', image: '/images/Baking.jpg' },
  { id: 'inspection', step: '04', image: '/images/Quality inspection.jpg' },
  { id: 'packaging', step: '05', image: '/images/vacuum_pack.jpg' },
  { id: 'delivery', step: '06', image: '/images/delivery.jpg' }
];

export default function ScrollJourney() {
  const { t } = useLanguage();
  const steps = t('process.steps');

  return (
    <section id="process" className="relative z-10 py-12 4xl:py-16 7xl:py-20 px-4 4xl:px-6 max-w-6xl mx-auto">

      <div className="text-center max-w-3xl mx-auto mb-10 4xl:mb-14 7xl:mb-18 px-4">
        <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-mono uppercase tracking-widest text-gold-400 bg-gold-500/5 border border-gold-500/20 mb-4 sm:mb-6">
          <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5 4xl:w-4 4xl:h-4" />
          <span>{t('process.badge')}</span>
        </div>
        <h2 className="font-display text-xl sm:text-3xl 4xl:text-4xl 7xl:text-5xl font-black text-slate-100">
          <KineticText text={t('process.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('process.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      <div className="space-y-10 sm:space-y-14 4xl:space-y-18 7xl:space-y-24">
        {CHAPTERS.map((ch, idx) => {
          const s = steps[idx];
          const isEven = idx % 2 === 0;

          return (
            <div key={ch.id} className="grid grid-cols-1 4xl:grid-cols-12 gap-6 sm:gap-8 4xl:gap-12 items-center">

              <div className={`4xl:col-span-6 ${isEven ? 'order-1' : 'order-1 4xl:order-2'}`}>
                <div className="glass-panel p-4 sm:p-6 4xl:p-8 rounded-xl sm:rounded-2xl space-y-3 sm:space-y-4 4xl:space-y-6">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="px-2 sm:px-3 py-1 rounded-full text-[9px] sm:text-xs font-mono font-bold text-gold-400 bg-gold-500/5 border border-gold-500/20">
                      {ch.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg sm:text-2xl 4xl:text-3xl font-black text-slate-100"><KineticText text={s.title} as="span" className="inline flex-wrap" /></h3>
                    <p className="text-[9px] sm:text-[10px] 4xl:text-xs font-mono text-gold-400 uppercase tracking-widest mt-0.5 sm:mt-1">{s.subtitle}</p>
                  </div>

                  <p className="text-slate-300 font-bold text-sm sm:text-base 4xl:text-lg leading-relaxed">{s.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 4xl:gap-3 pt-1 sm:pt-2">
                    {s.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1 sm:gap-1.5 4xl:gap-2 text-[9px] sm:text-[10px] 4xl:text-xs text-slate-200">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 4xl:w-4 4xl:h-4 text-gold-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`4xl:col-span-6 ${isEven ? 'order-2' : 'order-2 4xl:order-1'}`}>
                <img
                  src={ch.image}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 sm:h-56 4xl:h-72 7xl:h-96 object-cover rounded-xl sm:rounded-2xl"
                />
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
