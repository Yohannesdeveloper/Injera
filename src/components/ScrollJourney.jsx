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
    <section id="process" className="py-16 xs:py-18 sm:py-20 md:py-24 px-4 xs:px-5 sm:px-6 relative z-10 max-w-6xl mx-auto space-y-20 xs:space-y-24 sm:space-y-28 md:space-y-32">

      {/* Header */}
      <div className="text-center space-y-3 xs:space-y-4 max-w-3xl mx-auto px-2 xs:px-3 sm:px-4">
        <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1 xs:py-1.5 rounded-full luxury-card-gold text-gold-400 text-[10px] xs:text-xs font-mono uppercase tracking-widest">
          <Camera className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-gold-400" />
          <span>{t('process.badge')}</span>
        </div>
        <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-100">
          <KineticText text={t('process.heading')} as="span" className="inline flex-wrap" /> <br />
          <span className="gold-gradient-text"><KineticText text={t('process.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      {/* 6 Stages */}
      <div className="space-y-16 xs:space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32">
        {CHAPTERS.map((ch, idx) => {
          const s = steps[idx];
          const isEven = idx % 2 === 0;

          return (
            <div key={ch.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 xs:gap-10 sm:gap-12 items-center">

              {/* Text Information */}
              <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                <div className="glass-panel p-5 xs:p-6 sm:p-7 md:p-8 rounded-xl xs:rounded-2xl space-y-4 xs:space-y-5 sm:space-y-6">
                  <div className="flex items-center gap-2 xs:gap-3">
                    <span className="px-2 xs:px-3 py-0.5 xs:py-1 rounded-full luxury-card-gold text-gold-400 text-[10px] xs:text-xs font-mono font-bold">
                      {ch.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-100"><KineticText text={s.title} as="span" className="inline flex-wrap" /></h3>
                    <p className="text-[10px] xs:text-xs font-mono text-gold-400 uppercase tracking-widest mt-1">{s.subtitle}</p>
                  </div>

                  <p className="text-slate-300 font-bold text-sm xs:text-base sm:text-lg leading-relaxed">{s.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 pt-1 xs:pt-2">
                    {s.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 xs:gap-2 text-[10px] xs:text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-gold-400 shrink-0" />
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
                  className="w-full h-56 xs:h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-[15px] xs:rounded-[20px] sm:rounded-[25px]"
                />
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
