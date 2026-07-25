import React from 'react';
import { Quote, Star, Building2, MapPin } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Zedagm ዘ፟-ዳግም transformed our supermarket ethnic food category. Their vacuum 5-packs consistently maintain a 30-day fresh shelf life without refrigeration, allowing us to stock 45 retail stores across Germany with zero spoilage.",
    author: "Marcus Weber",
    title: "Senior Procurement Director",
    company: "Euro-Ethnic Food Retail Group (Frankfurt)",
    country: "Germany",
    rating: 5
  },
  {
    quote: "As a restaurant chain owner serving over 1,500 meals daily in D.C., supply consistency and authentic Ersho sour tang are everything. Their daily air cargo shipments arrive directly at Dulles with incredible elasticity and softness.",
    author: "Tigist Bekele",
    title: "Founder & Culinary Executive",
    company: "Queen Sheba Ethiopian Dining Group (Washington D.C.)",
    country: "United States",
    rating: 5
  },
  {
    quote: "We import frozen bulk pallets via sea reefer containers into Dubai Cargo Village. The quality control, HACCP compliance certificates, and phytosanitary paperwork are flawless every single month.",
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
          Trusted by Global Importers & <span className="gold-gradient-text">Restaurant Groups</span>
        </h2>
        <p className="text-slate-300 font-light text-base">
          Read feedback from international retail buyers, supermarket procurement directors, and restaurant executives.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <div key={idx} className="luxury-card p-8 flex flex-col justify-between space-y-6 border border-gold-500/30">
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
          </div>
        ))}
      </div>

    </section>
  );
}
