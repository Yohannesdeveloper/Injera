import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { useLanguage } from '../context/LanguageContext';

export default function ExportFAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const { t } = useLanguage();
  const faqs = t('faq.items');

  return (
    <section id="faq" className="relative z-10 py-12 4xl:py-16 7xl:py-20 px-4 4xl:px-6 mx-auto" style={{ maxWidth: '900px' }}>

      <div className="text-center max-w-3xl mx-auto mb-8 4xl:mb-12 7xl:mb-16 px-4">
        <span className="inline-block text-[9px] sm:text-xs font-bold uppercase tracking-widest text-gold-400 mb-3 sm:mb-4">
          {t('faq.badge')}
        </span>
        <h2 className="font-display text-xl sm:text-3xl 4xl:text-4xl 7xl:text-5xl font-black text-slate-100">
          <KineticText text={t('faq.heading')} as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text={t('faq.headingGold')} as="span" className="inline flex-wrap" /></span>
        </h2>
      </div>

      <div className="space-y-2 sm:space-y-3 4xl:space-y-4">
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
                className="w-full p-3 sm:p-4 4xl:p-5 text-left flex items-center justify-between gap-2 sm:gap-3 4xl:gap-4 focus:outline-none"
              >
                <span className="font-display text-sm sm:text-base font-bold text-slate-100">{faq.q}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 4xl:w-5 4xl:h-5 text-gold-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen && (
                <div className="px-3 sm:px-4 4xl:px-5 pb-3 sm:pb-4 4xl:pb-5 text-xs sm:text-sm 4xl:text-base text-slate-300 font-bold leading-relaxed border-t border-slate-800/80 pt-2 sm:pt-3 4xl:pt-4">
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
