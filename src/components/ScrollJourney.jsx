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
    <section id="process" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-32">

      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full luxury-card-gold text-gold-400 text-xs font-mono uppercase tracking-widest">
          <Camera className="w-4 h-4 text-gold-400" />
          <span>{t('process.badge')}</span>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-100">
          <KineticText text={t('process.heading')} as="span" className="inline flex-wrap" /> <br />
          <span className="gold-gradient-text"><KineticText text={t('process.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      {/* 6 Stages */}
      <div className="space-y-32">
        {CHAPTERS.map((ch, idx) => {
          const s = steps[idx];
          const isEven = idx % 2 === 0;

          return (
            <div key={ch.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Text Information */}
              <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                <div className="glass-panel p-8 rounded-2xl space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full luxury-card-gold text-gold-400 text-xs font-mono font-bold">
                      {ch.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl sm:text-5xl font-black text-slate-100"><KineticText text={s.title} as="span" className="inline flex-wrap" /></h3>
                    <p className="text-xs font-mono text-gold-400 uppercase tracking-widest mt-1">{s.subtitle}</p>
                  </div>

                  <p className="text-slate-300 font-bold text-lg leading-relaxed">{s.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {s.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
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
                  className="w-full h-96 object-cover rounded-[25px]"
                />
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
