import React from 'react';
import { CARE_STEPS } from '../data/careProcess';
import { Reveal } from './AnimatedReveal';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageSquare, Compass, HeartHandshake } from 'lucide-react';

interface CareProcessProps {
  onOpenContact: () => void;
}

export const CareProcess: React.FC<CareProcessProps> = ({ onOpenContact }) => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-[#1267B1]" />;
      case 1:
        return <Compass className="w-5 h-5 text-[#18C4D9]" />;
      case 2:
      default:
        return <HeartHandshake className="w-5 h-5 text-[#58B957]" />;
    }
  };

  return (
    <section
      id="como-funciona"
      className="py-16 sm:py-24 bg-[#F0F7FC] relative overflow-hidden"
      aria-label="Como Funciona"
    >
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 relative z-10 flex flex-col items-center">
        
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-14">
          <Reveal>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#063F82] tracking-tight leading-tight font-['Manrope'] mb-3">
              Um caminho acolhedor em 3 passos.
            </h2>
            <p className="text-sm sm:text-base text-[#6B7C87] max-w-xl mx-auto">
              Da primeira conversa com nossa equipe ao acompanhamento integrado contínuo.
            </p>
          </Reveal>
        </div>

        {/* 3 Step Visual Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {CARE_STEPS.map((step, idx) => (
            <Reveal key={step.number} delay={idx * 0.1} yOffset={16}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="h-full bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-[#1267B1] font-['Manrope']">
                      {step.number}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-[#EAF6FB] flex items-center justify-center shadow-2xs">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#063F82] mb-2 font-['Manrope']">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B7C87] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#58B957]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Passo estruturado</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Centered Action Button */}
        <Reveal delay={0.25}>
          <motion.button
            type="button"
            onClick={onOpenContact}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1267B1] hover:bg-[#063F82] text-white text-sm font-bold shadow-lg shadow-[#1267B1]/20 transition-all cursor-pointer"
          >
            <span>Falar com a equipe agora</span>
            <ArrowRight className="w-4 h-4 text-[#18C4D9]" />
          </motion.button>
        </Reveal>

      </div>
    </section>
  );
};
