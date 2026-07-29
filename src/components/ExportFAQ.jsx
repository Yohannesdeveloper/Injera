import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileText } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';

const FAQS = [
  {
    q: 'Do you export internationally?',
    a: 'Yes. We supply wholesale customers across multiple global markets.'
  },
  {
    q: 'Can I order samples?',
    a: 'Yes. Product samples are available for qualified wholesale inquiries.'
  },
  {
    q: 'Do you offer private labeling?',
    a: 'Yes. We provide customized packaging and private-label solutions.'
  },
  {
    q: 'How is freshness maintained?',
    a: 'Our export-grade packaging helps preserve freshness during international shipping.'
  }
];

export default function ExportFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 px-6 relative z-10 max-w-4xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          Frequently Asked Questions
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-100">
          <KineticText text="Frequently Asked" as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text="Questions" as="span" className="inline flex-wrap" /></span>
        </h2>
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
