import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileText } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';

const FAQS = [
  {
    q: 'How is 30-day shelf life achieved without preservatives?',
    a: 'Modified Atmosphere Packaging in HEPA-filtered cleanrooms locks out oxygen and mold spores naturally.'
  },
  {
    q: 'What is the MOQ for international shipments?',
    a: '500 vacuum packs for air freight, or 1 x 20ft reefer container (14,000 packs) for ocean freight.'
  },
  {
    q: 'What certificates accompany each order?',
    a: 'Phytosanitary Certificate, FDA Notice, ISO 22000 & HACCP, Bill of Lading, and batch CoA.'
  },
  {
    q: 'Do you offer private-label packaging?',
    a: 'Yes, with custom co-branded vacuum packages at a 5,000-unit MOQ.'
  },
  {
    q: 'What Incoterms do you support?',
    a: 'EXW, FOB, CIF, and DDP to client distribution centers.'
  }
];

export default function ExportFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 px-6 relative z-10 max-w-4xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          Buyer Knowledge Base
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-100">
          <KineticText text="Frequently Asked" as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text="Export Questions" as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-bold text-xl">
          Technical, regulatory, and logistics info for international buyers.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <BorderGlow
              key={idx}
              className="overflow-hidden transition-all duration-300"

              borderRadius={24}
              colors={['#D4AF37', '#F4C430', '#C87D32']}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-display text-base font-bold text-slate-100">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gold-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-base text-slate-300 font-bold leading-relaxed border-t border-slate-800/80 pt-4">
                  {faq.a}
                </div>
              )}
            </BorderGlow>
          );
        })}
      </div>

    </section>
  );
}
