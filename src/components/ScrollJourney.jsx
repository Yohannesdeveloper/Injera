import React from 'react';
import { CheckCircle2, Camera, Compass, Eye, Sparkles, Layers } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';

const CHAPTERS = [
  {
    id: 'sourcing',
    step: 'SCENE 01',
    degree: '0° – 90° CAM ANGLE',
    title: 'Golden Teff Harvest',
    subtitle: 'Highland Volcanic Soil • Debre Zeit & East Shewa',
    description: 'Hand-harvested Teff from ancient volcanic high plateaus, multi-stage cleaned before artisan milling.',
    image: '/images/teff_field.png',
    camPreset: 'PANORAMIC SUNRISE 360°',
    highlights: [
      '100% Pure Ethiopian Teff',
      'Naturally Gluten-Free & Iron-Rich'
    ]
  },
  {
    id: 'baking',
    step: 'SCENE 02',
    degree: '90° – 180° CAM ANGLE',
    title: '72-Hr Fermentation & Baking',
    subtitle: 'Natural Ersho Culture • 10,000+ Spongy Pores',
    description: 'Batter spirals on a ceramic griddle, creating thousands of spongy micro-pores for the signature sour tang.',
    image: '/images/injera_texture.png',
    camPreset: 'MACRO ROTATIONAL 360°',
    highlights: [
      '72-Hour Natural Ersho Starter Culture',
      '10,000+ Spongy Ayen Pores'
    ]
  },
  {
    id: 'packaging',
    step: 'SCENE 03',
    degree: '180° – 270° CAM ANGLE',
    title: 'Hygienic Vacuum Packaging',
    subtitle: '30-Day Freshness • Modified Atmosphere (MAP)',
    description: 'Fresh Injera is HEPA-cooled then vacuum-sealed to lock in natural moisture and aroma.',
    image: '/images/vacuum_pack.png',
    camPreset: 'TRACKING LENS 360°',
    highlights: [
      'Modified Atmosphere Vacuum Film',
      '30-Day Ambient / 60-Day Chilled Freshness'
    ]
  },
  {
    id: 'distribution',
    step: 'SCENE 04',
    degree: '270° – 360° CAM ANGLE',
    title: 'Global Export & Dining',
    subtitle: 'Air Cargo Express & Ocean Reefer Containers',
    description: 'Export boxes travel from Addis Ababa to dining tables across the US, Europe, and Middle East.',
    image: '/images/global_dish.png',
    camPreset: 'GLOBAL ORBIT 360°',
    highlights: [
      '24-48 HR Express Air Freight',
      'Served in 40+ Nations Worldwide'
    ]
  }
];

export default function ScrollJourney({ scrollDegree = 0, onRequestQuote }) {
  return (
    <section id="story" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-32">

      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full luxury-card-gold text-gold-400 text-xs font-mono uppercase tracking-widest">
          <Camera className="w-4 h-4 text-gold-400" />
          <span>Cinematic 360° Scroll Camera View</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-100">
          <KineticText text="The Story of Authentic Injera" as="span" className="inline flex-wrap" /> <br />
          <span className="gold-gradient-text"><KineticText text="In 360° Camera View" as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-light text-sm">
          Orbit through each production stage with a 360° cinematic view.
        </p>
      </div>

      {/* 4 Orbital Camera Chapters */}
      <div className="space-y-32">
        {CHAPTERS.map((ch, idx) => {
          const isEven = idx % 2 === 0;

          // Calculate dynamic 360 rotation angle for current card based on scroll
          const localRotation = ((scrollDegree + idx * 90) % 360) - 180;
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

                <p className="text-slate-300 font-light text-base leading-relaxed">{ch.description}</p>

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
                  {/* Camera Viewfinder Overlay on Image */}
                  <div className="relative rounded-2xl overflow-hidden h-96">
                    <img
                      src={ch.image}
                      alt={ch.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-75"></div>

                    {/* Viewfinder Crosshair Overlay */}
                    <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between">
                      {/* Center Focus Target */}
                      <div className="self-center w-16 h-16 border border-gold-400/60 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-gold-400 rounded-full animate-ping"></div>
                      </div>

                      <div className="flex justify-between items-end text-[10px] font-mono text-slate-300 bg-surface/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold-500/30">
                        <span>SCENE {idx + 1} OF 4</span>
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
