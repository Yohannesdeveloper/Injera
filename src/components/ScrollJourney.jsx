import React from 'react';
import { CheckCircle2, Camera } from 'lucide-react';
import { KineticText } from './KineticText';
import { useLanguage } from '../context/LanguageContext';

const CHAPTERS = [
  { id: 'selection', step: '01', image: '/images/teff_field.png' },
  { id: 'fermentation', step: '02', image: '/images/Fermentation.jpg' },
  { id: 'baking', step: '03', image: '/images/Baking.jpg' },
  { id: 'inspection', step: '04', image: '/images/Quality inspection.jpg' },
  { id: 'packaging', step: '05', image: '/images/vacuum_pack.png' },
  { id: 'delivery', step: '06', image: '/images/warehouse.png' }
];

export default function ScrollJourney() {
  const { t } = useLanguage();
  const steps = t('process.steps');

  return (
    <section id="process" className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-3 xs:px-4 sm:px-5 md:px-6 relative z-10 max-w-6xl mx-auto space-y-12 xs:space-y-14 sm:space-y-16 md:space-y-20 lg:space-y-24">

      {/* Header */}
      <div className="text-center space-y-2 xs:space-y-3 sm:space-y-4 max-w-3xl mx-auto px-2 xs:px-3 sm:px-4">
        <div className="inline-flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2 xs:px-3 sm:px-4 py-0.5 xs:py-1 sm:py-1.5 rounded-full luxury-card-gold text-gold-400 text-[9px] xs:text-[10px] sm:text-xs font-mono uppercase tracking-widest">
          <Camera className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-gold-400" />
          <span>{t('process.badge')}</span>
        </div>
        <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-100">
          <KineticText text={t('process.heading')} as="span" className="inline flex-wrap" /> <br />
          <span className="gold-gradient-text"><KineticText text={t('process.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      {/* 6 Stages */}
      <div className="space-y-10 xs:space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-20 xl:space-y-24">
        {CHAPTERS.map((ch, idx) => {
          const s = steps[idx];
          const isEven = idx % 2 === 0;

          return (
            <div key={ch.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 xs:gap-8 sm:gap-10 md:gap-12 items-center">

              {/* Text Information */}
              <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                <div className="glass-panel p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 rounded-lg xs:rounded-xl sm:rounded-2xl space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3">
                    <span className="px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full luxury-card-gold text-gold-400 text-[9px] xs:text-[10px] sm:text-xs font-mono font-bold">
                      {ch.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-100"><KineticText text={s.title} as="span" className="inline flex-wrap" /></h3>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs font-mono text-gold-400 uppercase tracking-widest mt-0.5 xs:mt-1">{s.subtitle}</p>
                  </div>

                  <p className="text-slate-300 font-bold text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">{s.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 xs:gap-2 sm:gap-3 pt-1 xs:pt-2">
                    {s.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 text-[9px] xs:text-[10px] sm:text-xs text-slate-200">
                        <CheckCircle2 className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-gold-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={`lg:col-span-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                <img
                  src={ch.image}
                  alt={s.title}
                  className="w-full h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 xl:h-96 object-cover rounded-lg xs:rounded-xl sm:rounded-[20px] md:rounded-[25px]"
                />
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
