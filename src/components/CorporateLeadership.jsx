import React from 'react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';

export default function CorporateLeadership({ onRequestQuote }) {
  return (
    <section id="about" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Who We Are */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Who We Are
          </span>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-100 leading-tight">
            <KineticText text="Bringing Ethiopia's Finest Injera" as="span" className="inline flex-wrap" /> <br />
            <span className="gold-gradient-text"><KineticText text="to Global Markets" as="span" className="inline flex-wrap" /></span>
          </h2>

          <p className="text-slate-300 font-bold text-xl leading-relaxed">
            Rooted in Ethiopia's rich culinary heritage, we specialize in manufacturing premium injera for international markets. Every batch is made from carefully selected Ethiopian teff, prepared using traditional fermentation, and produced in a modern facility that meets global quality standards.
          </p>

          <p className="text-slate-300 font-bold text-xl leading-relaxed">
            From local farms to international shelves, our mission is simple: deliver authentic Ethiopian injera with consistent quality, freshness, and dependable service.
          </p>
        </div>

        {/* Right Side: Our Commitment */}
        <div className="lg:col-span-6">
          <BorderGlow className="p-8 space-y-6" borderRadius={24} colors={['#D4AF37', '#F4C430', '#C87D32']}>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Our Commitment
            </span>

            <h3 className="font-display text-2xl font-extrabold text-slate-100">
              <KineticText text="More Than an Exporter" as="span" className="inline flex-wrap" />
            </h3>

            <p className="text-base text-slate-300 font-bold leading-relaxed">
              We believe authentic Ethiopian food deserves a place on tables around the world. By combining traditional craftsmanship with modern manufacturing, we help businesses serve genuine injera while supporting Ethiopian agriculture and local communities.
            </p>

            <InteractiveHoverButton
              onClick={onRequestQuote}
              className="w-full py-3.5 shadow-lg"
            >
              Contact Our Export Team
            </InteractiveHoverButton>
          </BorderGlow>
        </div>

      </div>

    </section>
  );
}
