import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileText } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { useLanguage } from '../context/LanguageContext';

export default function ExportFAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const { t } = useLanguage();
  const faqs = t('faq.items');

  return (
    <section id="faq" className="py-16 xs:py-18 sm:py-20 md:py-24 px-4 xs:px-5 sm:px-6 relative z-10 max-w-4xl mx-auto space-y-12 xs:space-y-14 sm:space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-3 xs:space-y-4 max-w-3xl mx-auto px-2 xs:px-3 sm:px-4">
        <span className="text-[10px] xs:text-xs sm:text-xs font-bold uppercase tracking-widest text-gold-400">
          {t('faq.badge')}
        </span>
        <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-100">
          <KineticText text={t('faq.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('faq.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      {/* Accordion List */}
      <div className="space-y-3 xs:space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <BorderGlow
              key={idx}
              className="overflow-hidden transition-all duration-300"
              borderRadius={16}
              colors={['#D4AF37', '#F4C430', '#C87D32']}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                className="w-full p-4 xs:p-5 sm:p-6 text-left flex items-center justify-between gap-3 xs:gap-4 focus:outline-none"
              >
                <span className="font-display text-sm xs:text-base sm:text-base font-bold text-slate-100">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 text-gold-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 xs:px-5 sm:px-6 pb-4 xs:pb-5 sm:pb-6 text-sm xs:text-base sm:text-base text-slate-300 font-bold leading-relaxed border-t border-slate-800/80 pt-3 xs:pt-4">
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
