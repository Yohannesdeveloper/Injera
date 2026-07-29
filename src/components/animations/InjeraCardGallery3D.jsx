import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import BorderGlow from '../BorderGlow';

const STEPS = [
  {
    id: 1,
    title: '1. Teff Harvest & Cleaning',
    subtitle: 'Debre Zeit & East Shewa Farms',
    image: '/images/teff_field.png',
    tag: 'RAW MATERIAL SELECTION',
    desc: '100% Ethiopian Teff from verified farms, destoned and cleaned to 99.9% purity.'
  },
  {
    id: 2,
    title: '2. 72-Hour Fermentation',
    subtitle: 'Traditional Ersho Sourdough Culture',
    image: '/images/injera_texture.png',
    tag: 'STAINLESS FERMENTATION VATS',
    desc: 'Naturally fermented in stainless steel to pH 3.6-3.8 for authentic sour flavor.'
  },
  {
    id: 3,
    title: '3. Mitad Griddle Baking',
    subtitle: 'Precision Thermal Ceramic Baking',
    image: '/images/injera_texture.png',
    tag: 'STERILE BAKING LINE',
    desc: 'Batter poured on ceramic griddles creates thousands of uniform micro-pores.'
  },
  {
    id: 4,
    title: '4. Vacuum Packaging (MAP)',
    subtitle: 'HEPA Cleanroom Cooling & Sealing',
    image: '/images/vacuum_pack.png',
    tag: '30-DAY AMBIENT SHELF LIFE',
    desc: 'HEPA-cooled and vacuum-sealed without chemical preservatives.'
  },
  {
    id: 5,
    title: '5. Daily Air & Sea Logistics',
    subtitle: 'Bole Airport & Djibouti Reefer Port',
    image: '/images/global_dish.png',
    tag: 'EXPRESS GLOBAL DISPATCH',
    desc: 'Daily air cargo and sea reefer containers to global destinations.'
  }
];

export default function InjeraCardGallery3D() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeStep = STEPS[activeIdx];

  return (
    <div className="relative max-w-5xl mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Image Display */}
        <div className="lg:col-span-7 relative h-[400px]">
          <AnimatePresence mode="wait">
            <BorderGlow
              className="w-full h-full p-0"

              borderRadius={16}
              colors={['#D4AF37', '#F4C430', '#C87D32']}
            >
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={activeStep.image}
                alt={activeStep.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>

              <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-gold-500/30 text-[10px] font-bold text-gold-400 uppercase tracking-wider">
                {activeStep.tag}
              </div>

              <BorderGlow className="p-4" borderRadius={16} colors={['#D4AF37', '#F4C430', '#C87D32']}>
                <p className="text-[10px] font-bold text-gold-400 uppercase tracking-wider">{activeStep.subtitle}</p>
                <p className="text-lg font-bold text-slate-100 mt-0.5">{activeStep.title}</p>
              </BorderGlow>
            </motion.div>
            </BorderGlow>
          </AnimatePresence>
        </div>

        {/* Narrative & Controls */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <span>STEP 0{activeIdx + 1} OF 0{STEPS.length}</span>
          </div>

          <h3 className="font-display text-2xl font-bold text-slate-100">
            {activeStep.title}
          </h3>

          <p className="text-slate-300 font-light text-sm leading-relaxed">
            {activeStep.desc}
          </p>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={() => setActiveIdx((prev) => (prev - 1 + STEPS.length) % STEPS.length)}
              className="w-10 h-10 rounded-xl bg-elevated border border-slate-800 text-slate-300 hover:text-black dark:hover:text-white hover:border-gold-500/40 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveIdx((prev) => (prev + 1) % STEPS.length)}
              className="w-10 h-10 rounded-xl bg-gold-500 text-dark-950 hover:bg-gold-400 flex items-center justify-center transition-colors font-bold"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 ml-3">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    activeIdx === i ? 'w-6 bg-gold-400' : 'w-2 bg-slate-800'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
