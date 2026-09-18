import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';
import { Reveal } from './AnimatedReveal';
import { ChevronDown, MessageSquare } from 'lucide-react';

interface FAQSectionProps {
  onOpenContact: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenContact }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 bg-[#FAF9F5] relative overflow-hidden"
      aria-label="Dúvidas Frequentes"
    >
      <div className="max-w-[900px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header - short */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1267B1]/10 text-xs font-bold tracking-wider text-[#1267B1] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18C4D9]" />
              <span>DÚVIDAS FREQUENTES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#063F82] tracking-tight leading-tight font-['Manrope'] mb-2">
              Respostas claras para sua tranquilidade.
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7C87]">
              Confira as principais informações sobre nossos atendimentos.
            </p>
          </Reveal>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={item.id} delay={idx * 0.05}>
                <div className="bg-white rounded-2xl border border-slate-200/70 shadow-2xs overflow-hidden transition-all">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#063F82]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#1267B1] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#6B7C87] leading-relaxed border-t border-slate-100 bg-[#F8FAFB]/50">
                      {item.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Direct Contact prompt */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1267B1] hover:text-[#063F82] underline underline-offset-4"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Outra dúvida? Fale diretamente com nossa recepção</span>
          </button>
        </div>

      </div>
    </section>
  );
};
