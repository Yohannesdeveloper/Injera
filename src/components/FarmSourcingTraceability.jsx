import React from 'react';
import { Shield, Leaf, Ship, CheckCircle2 } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';

const TRUST_PILLARS = [
  {
    icon: Leaf,
    title: 'Authentic Quality',
    desc: 'Made from premium Ethiopian teff using traditional recipes that preserve the authentic taste and texture of real injera.'
  },
  {
    icon: Ship,
    title: 'Export Ready',
    desc: 'Our products are professionally packaged for international shipping, maintaining freshness and quality throughout transit.'
  },
  {
    icon: Shield,
    title: 'Reliable Supply',
    desc: 'Whether you\'re a restaurant, supermarket, or wholesale distributor, we provide consistent production and dependable delivery.'
  },
  {
    icon: CheckCircle2,
    title: 'Food Safety',
    desc: 'Every batch follows strict quality control procedures to ensure safe, hygienic, and reliable products.'
  }
];

export default function FarmSourcingTraceability() {
  return (
    <section id="quality" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          Why Choose Us
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-100">
          <KineticText text="A Trusted Export" as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text="Partner" as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TRUST_PILLARS.map((p, idx) => {
          const Icon = p.icon;
          return (
            <BorderGlow key={idx} className="p-8 space-y-5" borderRadius={24} colors={['#D4AF37', '#F4C430', '#C87D32']}>
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-display text-xl font-black text-slate-100">{p.title}</h3>
              </div>

              <p className="text-base text-slate-300 font-bold leading-relaxed">{p.desc}</p>
            </BorderGlow>
          );
        })}
      </div>

    </section>
  );
}
