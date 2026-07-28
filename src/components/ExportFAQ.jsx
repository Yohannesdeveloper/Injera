import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileText } from 'lucide-react';
import BorderGlow from './BorderGlow';

const FAQS = [
  {
    q: 'How is a 30-day fresh shelf life achieved without chemical preservatives?',
    a: 'Our 30-day ambient shelf life is achieved through Modified Atmosphere Packaging (MAP). Immediately after baking on our sterile lines, fresh Injera is cooled in ISO Class 7 HEPA-filtered cleanrooms and vacuum-sealed in multi-layer food-grade barrier films, locking out oxygen and mold spores naturally.'
  },
  {
    q: 'What is your Minimum Order Quantity (MOQ) for international shipments?',
    a: 'For express air cargo freight (Addis Ababa Bole International Airport), our MOQ is 500 vacuum packs (2,500 Injera discs). For ocean maritime reefer shipments, our MOQ is 1 x 20ft reefer container (approx. 14,000 packs).'
  },
  {
    q: 'What export certificates and documentation accompany each order?',
    a: 'Every export shipment includes an Official Phytosanitary Certificate from the Ministry of Agriculture, FDA Prior Notice Notice Confirmation, ISO 22000 & HACCP Certificates, Bill of Lading / Air Waybill, and a batch-specific lab Certificate of Analysis (CoA).'
  },
  {
    q: 'Do you offer private-label (OEM) packaging for supermarket chains?',
    a: 'Yes. We manufacture custom co-branded and private-label vacuum packages for international retail chains and regional distributors. Minimum order quantity for custom branded film rolls is 5,000 units.'
  },
  {
    q: 'What Incoterms 2020 trade terms do you support?',
    a: 'We routinely execute contracts under EXW (Addis Ababa Factory), FOB (Port of Djibouti / Bole Airport), CIF (Destination Airport/Seaport), and DDP (Delivered Duty Paid to client distribution center).'
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
          Frequently Asked <span className="gold-gradient-text">Export Questions</span>
        </h2>
        <p className="text-slate-300 font-light text-base">
          Essential technical, regulatory, and logistics information for international buyers and procurement teams.
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
              backgroundColor="#120F17"
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
                <div className="px-6 pb-6 text-xs text-slate-300 font-light leading-relaxed border-t border-slate-800/80 pt-4">
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
