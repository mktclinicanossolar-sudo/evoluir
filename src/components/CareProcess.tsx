import React from 'react';
import { CARE_STEPS } from '../data/careProcess';
import { Reveal } from './AnimatedReveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CareProcessProps {
  onOpenContact: () => void;
}

export const CareProcess: React.FC<CareProcessProps> = ({ onOpenContact }) => {
  return (
    <section
      id="como-funciona"
      className="py-16 sm:py-24 bg-[#F0F7FC] relative overflow-hidden"
      aria-label="Como Funciona"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header - short */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD500]/20 text-xs font-bold tracking-wider text-[#063F82] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD500]" />
              <span>COMO FUNCIONA</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#063F82] tracking-tight leading-tight font-['Manrope'] mb-2">
              Um caminho construído com a família.
            </h2>
            <p className="text-sm sm:text-base text-[#6B7C87]">
              Três passos simples desde o primeiro contato até o cuidado contínuo.
            </p>
          </Reveal>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-8">
          {CARE_STEPS.map((step, idx) => (
            <Reveal key={step.number} delay={idx * 0.1} yOffset={16}>
              <div className="h-full bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/70 shadow-xs hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#1267B1] font-['Manrope']">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EAF6FB] flex items-center justify-center text-[#1267B1]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#063F82] mb-1.5 font-['Manrope']">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6B7C87] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1267B1] hover:bg-[#063F82] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
          >
            <span>Falar com a equipe agora</span>
            <ArrowRight className="w-4 h-4 text-[#18C4D9]" />
          </button>
        </div>

      </div>
    </section>
  );
};
