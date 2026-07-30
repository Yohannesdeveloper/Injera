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
    <section id="faq" className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-3 xs:px-4 sm:px-5 md:px-6 relative z-10 max-w-4xl mx-auto space-y-10 xs:space-y-12 sm:space-y-14 md:space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-2 xs:space-y-3 sm:space-y-4 max-w-3xl mx-auto px-2 xs:px-3 sm:px-4">
        <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-400">
          {t('faq.badge')}
        </span>
        <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-100">
          <KineticText text={t('faq.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('faq.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      {/* Accordion List */}
      <div className="space-y-2 xs:space-y-3 sm:space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <BorderGlow
              key={idx}
              className="overflow-hidden transition-all duration-300"
              borderRadius={12}
              colors={['#D4AF37', '#F4C430', '#C87D32']}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                className="w-full p-3 xs:p-4 sm:p-5 md:p-6 text-left flex items-center justify-between gap-2 xs:gap-3 sm:gap-4 focus:outline-none"
              >
                <span className="font-display text-sm xs:text-base sm:text-base font-bold text-slate-100">{faq.q}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-gold-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-3 xs:px-4 sm:px-5 md:px-6 pb-3 xs:pb-4 sm:pb-5 md:pb-6 text-xs xs:text-sm sm:text-base text-slate-300 font-bold leading-relaxed border-t border-slate-800/80 pt-2 xs:pt-3 sm:pt-4">
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
