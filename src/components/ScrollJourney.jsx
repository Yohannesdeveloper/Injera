import React from 'react';
import { CheckCircle2, Camera } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';

const CHAPTERS = [
  {
    id: 'selection',
    step: '01',
    degree: '0° – 60° CAM ANGLE',
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
    degree: '60° – 120° CAM ANGLE',
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
    degree: '120° – 180° CAM ANGLE',
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
    degree: '180° – 240° CAM ANGLE',
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
    degree: '240° – 300° CAM ANGLE',
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
    degree: '300° – 360° CAM ANGLE',
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

export default function ScrollJourney({ scrollDegree = 0 }) {
  return (
    <section id="process" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-32">

      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full luxury-card-gold text-gold-400 text-xs font-mono uppercase tracking-widest">
          <Camera className="w-4 h-4 text-gold-400" />
          <span>Our Process</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-100">
          <KineticText text="From Ethiopian Farms" as="span" className="inline flex-wrap" /> <br />
          <span className="gold-gradient-text"><KineticText text="to Your Customers" as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      {/* 6 Stages */}
      <div className="space-y-32">
        {CHAPTERS.map((ch, idx) => {
          const isEven = idx % 2 === 0;

          const localRotation = ((scrollDegree + idx * 60) % 360) - 180;
          const rotateYDeg = Math.max(-15, Math.min(15, localRotation * 0.1));
          const rotateXDeg = Math.sin((scrollDegree * Math.PI) / 180) * 8;

          return (
            <div key={ch.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Text Information */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full luxury-card-gold text-gold-400 text-xs font-mono font-bold">
                    {ch.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    {ch.degree}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-100"><KineticText text={ch.title} as="span" className="inline flex-wrap" /></h3>
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

              {/* 360° Orbiting Viewfinder Camera Frame */}
              <div className={`lg:col-span-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                <BorderGlow
                  className="p-2 group"
                  borderRadius={24}
                  colors={['#D4AF37', '#F4C430', '#C87D32']}
                  style={{
                    transform: `perspective(1000px) rotateY(${rotateYDeg}deg) rotateX(${rotateXDeg}deg)`
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden h-96">
                    <img
                      src={ch.image}
                      alt={ch.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-75"></div>

                    <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between">
                      <div className="self-center w-16 h-16 border border-gold-400/60 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-gold-400 rounded-full animate-ping"></div>
                      </div>

                      <div className="flex justify-between items-end text-[10px] font-mono text-slate-300 bg-surface/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold-500/30">
                        <span>SCENE {idx + 1} OF 6</span>
                        <span className="text-gold-400 font-bold">ETHIOPIA HERITAGE</span>
                      </div>
                    </div>
                  </div>
                </BorderGlow>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
