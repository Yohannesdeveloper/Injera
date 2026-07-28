import React from 'react';
import { CheckCircle2, Camera, Compass, Eye, Sparkles, Layers } from 'lucide-react';
import BorderGlow from './BorderGlow';

const CHAPTERS = [
  {
    id: 'sourcing',
    step: 'SCENE 01',
    degree: '0° – 90° CAM ANGLE',
    title: 'Golden Teff Harvest',
    subtitle: 'Highland Volcanic Soil • Debre Zeit & East Shewa',
    description: 'Our camera glides above ancient volcanic high plateaus where golden Teff has grown for over 3,000 years. Harvested by hand at peak maturity, each grain undergoes multi-stage mechanical destoning and air-cleaning before artisan milling.',
    image: '/images/teff_field.png',
    camPreset: 'PANORAMIC SUNRISE 360°',
    highlights: [
      '100% Pure Ethiopian Teff',
      'Naturally Gluten-Free & Iron-Rich',
      'Volcanic Mineral Soil Harvest',
      'Sustainable Direct Sourcing'
    ]
  },
  {
    id: 'baking',
    step: 'SCENE 02',
    degree: '90° – 180° CAM ANGLE',
    title: '72-Hr Fermentation & Baking',
    subtitle: 'Natural Ersho Culture • 10,000+ Spongy Pores',
    description: 'The camera zooms 360° around the ceramic griddle (*Mitad*). Poured in spiral motions, steam rises as 10,000+ spongy micro-pores ("eyeballs" or *ayen*) pop across the surface, giving Injera its signature sour tang and soft texture.',
    image: '/images/injera_texture.png',
    camPreset: 'MACRO ROTATIONAL 360°',
    highlights: [
      '72-Hour Natural Ersho Starter Culture',
      'Target pH 3.6 – 3.8 Stability',
      '10,000+ Spongy Ayen Pores',
      'Zero Artificial Preservatives'
    ]
  },
  {
    id: 'packaging',
    step: 'SCENE 03',
    degree: '180° – 270° CAM ANGLE',
    title: 'Hygienic Vacuum Packaging',
    subtitle: '30-Day Freshness • Modified Atmosphere (MAP)',
    description: 'The lens tracks fresh Injera onto HEPA-filtered cooling racks. Uniformity inspectors examine softness and elasticity before automated packaging machines vacuum seal each pack to lock in natural moisture and aroma.',
    image: '/images/vacuum_pack.png',
    camPreset: 'TRACKING LENS 360°',
    highlights: [
      'Modified Atmosphere Vacuum Film',
      '30-Day Ambient / 60-Day Chilled Freshness',
      'FDA & ISO 22000 Cleanroom Certified',
      'Farm-to-Table Barcode Tracking'
    ]
  },
  {
    id: 'distribution',
    step: 'SCENE 04',
    degree: '270° – 360° CAM ANGLE',
    title: 'Global Export & Dining',
    subtitle: 'Air Cargo Express & Ocean Reefer Containers',
    description: 'The camera orbits an export box travelling from Addis Ababa Bole Cargo Hub to Washington D.C., Frankfurt, London, Dubai, and Toronto, culminating on dining tables at top international Ethiopian restaurants.',
    image: '/images/global_dish.png',
    camPreset: 'GLOBAL ORBIT 360°',
    highlights: [
      '24-48 HR Express Air Freight',
      'Sea Reefer Container (-18°C Frozen)',
      'Addis Ababa, Frankfurt & Dubai Hubs',
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
          The Story of Authentic Injera <br />
          <span className="gold-gradient-text">In 360° Camera View</span>
        </h2>
        <p className="text-slate-300 font-light text-sm">
          Scroll down to orbit through each stage of production with our cinematic camera lens view.
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
                  <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-100">{ch.title}</h3>
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
                <div
                  className="relative rounded-3xl overflow-hidden group border-2 border-gold-500/40 p-2 shadow-2xl transition-transform duration-300 ease-out"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-75"></div>

                    {/* Viewfinder Crosshair Overlay */}
                    <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between">
                      <div className="flex justify-between items-start text-[10px] font-mono text-gold-400 bg-dark-950/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold-500/30">
                        <span>LENS MODE: {ch.camPreset}</span>
                        <span className="text-slate-200">ANGLE: {Math.abs(Math.round(scrollDegree)) % 360}°</span>
                      </div>

                      {/* Center Focus Target */}
                      <div className="self-center w-16 h-16 border border-gold-400/60 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-gold-400 rounded-full animate-ping"></div>
                      </div>

                      <div className="flex justify-between items-end text-[10px] font-mono text-slate-300 bg-dark-950/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold-500/30">
                        <span>SCENE {idx + 1} OF 4</span>
                        <span className="text-gold-400 font-bold">ETHIOPIA HERITAGE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
