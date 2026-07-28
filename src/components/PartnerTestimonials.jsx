import React from 'react';
import { Quote, Star, Building2, MapPin } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';

const TESTIMONIALS = [
  {
    quote: "Transformed our ethnic food category with 30-day shelf life and zero spoilage across 45 stores.",
    author: "Marcus Weber",
    title: "Senior Procurement Director",
    company: "Euro-Ethnic Food Retail Group (Frankfurt)",
    country: "Germany",
    rating: 5
  },
  {
    quote: "Daily air cargo shipments from Addis arrive at Dulles with incredible freshness and authenticity.",
    author: "Tigist Bekele",
    title: "Founder & Culinary Executive",
    company: "Queen Sheba Ethiopian Dining Group (Washington D.C.)",
    country: "United States",
    rating: 5
  },
  {
    quote: "Frozen sea reefer imports into Dubai with flawless QC and phytosanitary paperwork every month.",
    author: "Tariq Al-Mansoor",
    title: "Managing Partner",
    company: "Gulf Wholesale Food Distribution (Dubai)",
    country: "United Arab Emirates",
    rating: 5
  }
];

export default function PartnerTestimonials() {
  return (
    <section className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          Client Endorsements
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-100">
          <KineticText text="Trusted by Global Importers &" as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text="Restaurant Groups" as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-light text-base">
          Feedback from international retail buyers and restaurant executives.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <BorderGlow key={idx} className="p-8 flex flex-col justify-between space-y-6" borderRadius={24} colors={['#D4AF37', '#F4C430', '#C87D32']}>
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-gold-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed italic">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-1">
              <p className="font-display text-sm font-bold text-slate-100">{t.author}</p>
              <p className="text-[11px] text-gold-400 font-semibold">{t.title}</p>
              <p className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <Building2 className="w-3 h-3 text-slate-500" />
                <span>{t.company}</span>
              </p>
            </div>
          </BorderGlow>
        ))}
      </div>

    </section>
  );
}
