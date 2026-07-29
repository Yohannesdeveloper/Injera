import React from 'react';
import { CheckCircle2, Camera } from 'lucide-react';
import { KineticText } from './KineticText';

const CHAPTERS = [
  {
    id: 'selection',
    step: '01',
    title: 'Premium Teff Selection',
    subtitle: 'Trusted farming communities',
    description: 'We source quality Ethiopian teff from trusted farming communities.',
    image: '/images/teff_field.png',
    highlights: [
      'Quality Ethiopian Teff',
      'Trusted Farming Communities'
    ]
  },
  {
    id: 'fermentation',
    step: '02',
    title: 'Traditional Fermentation',
    subtitle: 'Natural authentic taste',
    description: 'Natural fermentation develops the authentic taste injera is known for.',
    image: '/images/injera_texture.png',
    highlights: [
      'Natural Fermentation',
      'Authentic Injera Taste'
    ]
  },
  {
    id: 'baking',
    step: '03',
    title: 'Fresh Daily Baking',
    subtitle: 'Precision baking process',
    description: 'Each injera is baked with precision to ensure consistent quality.',
    image: '/images/teff_field.png',
    highlights: [
      'Fresh Daily Baking',
      'Consistent Quality'
    ]
  },
  {
    id: 'inspection',
    step: '04',
    title: 'Quality Inspection',
    subtitle: 'Careful batch review',
    description: 'Every batch is carefully checked before packaging.',
    image: '/images/vacuum_pack.png',
    highlights: [
      'Quality Inspection',
      'Batch Review Process'
    ]
  },
  {
    id: 'packaging',
    step: '05',
    title: 'Export Packaging',
    subtitle: 'Vacuum-sealed freshness',
    description: 'Vacuum-sealed and prepared for international transportation.',
    image: '/images/vacuum_pack.png',
    highlights: [
      'Vacuum-Sealed',
      'Export-Ready Packaging'
    ]
  },
  {
    id: 'delivery',
    step: '06',
    title: 'Worldwide Delivery',
    subtitle: 'Global market shipping',
    description: 'Safely shipped to customers across global markets.',
    image: '/images/warehouse.png',
    highlights: [
      'Worldwide Shipping',
      'Safe & Reliable Delivery'
    ]
  }
];

export default function ScrollJourney() {
  return (
    <section id="process" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-32">

      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full luxury-card-gold text-gold-400 text-xs font-mono uppercase tracking-widest">
          <Camera className="w-4 h-4 text-gold-400" />
          <span>Our Process</span>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-100">
          <KineticText text="From Ethiopian Farms" as="span" className="inline flex-wrap" /> <br />
          <span className="gold-gradient-text"><KineticText text="to Your Customers" as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      {/* 6 Stages */}
      <div className="space-y-32">
        {CHAPTERS.map((ch, idx) => {
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
                    <h3 className="font-display text-3xl sm:text-5xl font-black text-slate-100"><KineticText text={ch.title} as="span" className="inline flex-wrap" /></h3>
                    <p className="text-xs font-mono text-gold-400 uppercase tracking-widest mt-1">{ch.subtitle}</p>
                  </div>

                  <p className="text-slate-300 font-bold text-lg leading-relaxed">{ch.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {ch.highlights.map((h, i) => (
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
                  alt={ch.title}
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
