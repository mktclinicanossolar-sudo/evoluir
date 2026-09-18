import React from 'react';
import { DEVELOPMENT_TOPICS } from '../data/milestones';
import { Reveal } from './AnimatedReveal';
import { motion } from 'motion/react';
import { HelpCircle, ArrowRight, Check } from 'lucide-react';

interface DevelopmentSectionProps {
  onOpenContact: () => void;
}

export const DevelopmentSection: React.FC<DevelopmentSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="desenvolvimento"
      className="py-16 sm:py-24 bg-[#FFFDF9] relative overflow-hidden"
      aria-label="Quando buscar acompanhamento"
    >
      {/* Warm gentle colored ambient glow */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#EC155A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-[#58B957]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 relative z-10 flex flex-col items-center">
        
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-14">
          <Reveal>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#063F82] tracking-tight leading-tight font-['Manrope'] mb-3">
              Sinais que merecem um olhar cuidadoso.
            </h2>
            <p className="text-sm sm:text-base text-[#6B7C87] max-w-xl mx-auto">
              A intervenção precoce faz toda a diferença para o desenvolvimento saudável e a tranquilidade da família.
            </p>
          </Reveal>
        </div>

        {/* 3 Visual Milestone Cards with Real Clinic Photos */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {DEVELOPMENT_TOPICS.map((topic, idx) => (
            <Reveal key={topic.id} delay={idx * 0.1} yOffset={16}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="h-full bg-white rounded-3xl overflow-hidden border border-slate-200/80 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                {/* Visual photo header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={topic.imageSrc || '/images/child.jpg'}
                    alt={topic.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Category Pill on image */}
                  <span
                    className="absolute top-3 left-3 text-[11px] font-bold px-3 py-1 rounded-full text-white shadow-md backdrop-blur-md"
                    style={{ backgroundColor: `${topic.accentColor}E6` }}
                  >
                    {topic.badge || `Área 0${idx + 1}`}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#063F82] mb-2 font-['Manrope']">
                      {topic.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6B7C87] leading-relaxed mb-4">
                      {topic.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      {topic.examples.map((ex, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-[#183044]">
                          <div
                            className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                            style={{
                              backgroundColor: `${topic.accentColor}18`,
                              color: topic.accentColor,
                            }}
                          >
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="font-medium">{ex}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7C87]">
                      Acompanhamento Clínico
                    </span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: topic.accentColor }}
                    />
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Centered Reassurance Bar */}
        <Reveal delay={0.25} className="w-full max-w-3xl">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#EAF6FB] rounded-3xl p-5 sm:p-6 border border-[#1267B1]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#1267B1]/15 text-[#1267B1] flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-[#183044]">
                <strong>Tem dúvidas sobre o desenvolvimento?</strong> Nossa equipe orienta os pais desde o primeiro contato.
              </p>
            </div>

            <motion.button
              type="button"
              onClick={onOpenContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1267B1] hover:bg-[#063F82] text-white text-xs font-bold whitespace-nowrap transition-all shadow-sm"
            >
              <span>Conversar com a clínica</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#18C4D9]" />
            </motion.button>
          </motion.div>
        </Reveal>

      </div>
    </section>
  );
};
