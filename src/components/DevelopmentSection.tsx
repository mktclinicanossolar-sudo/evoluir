import React from 'react';
import { DEVELOPMENT_TOPICS } from '../data/milestones';
import { Reveal } from './AnimatedReveal';
import { HelpCircle, ArrowRight } from 'lucide-react';

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
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#EC155A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#58B957]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header - short and direct */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EC155A]/10 text-xs font-bold tracking-wider text-[#EC155A] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EC155A]" />
              <span>DESENVOLVIMENTO</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#063F82] tracking-tight leading-tight font-['Manrope'] mb-2">
              Quando observar pode ajudar a compreender melhor.
            </h2>
            <p className="text-sm sm:text-base text-[#6B7C87]">
              Sinais do dia a dia para orientar a busca por apoio no momento certo.
            </p>
          </Reveal>
        </div>

        {/* 3 Compact Cards with distinct color themes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 mb-10">
          {DEVELOPMENT_TOPICS.map((topic, idx) => (
            <Reveal key={topic.id} delay={idx * 0.1} yOffset={16}>
              <div
                className="h-full bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
                style={{ borderColor: `${topic.accentColor}35` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-black px-2.5 py-1 rounded-lg"
                      style={{
                        backgroundColor: `${topic.accentColor}15`,
                        color: topic.accentColor,
                      }}
                    >
                      Área 0{idx + 1}
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: topic.accentColor }}
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#063F82] mb-2 font-['Manrope']">
                    {topic.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B7C87] leading-relaxed mb-4 font-normal">
                    {topic.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {topic.examples.map((ex, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#183044]">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: topic.accentColor }}
                        />
                        <span className="font-medium">{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Reassuring note */}
        <Reveal delay={0.25}>
          <div className="bg-[#EAF6FB] rounded-2xl p-4 sm:p-5 border border-[#1267B1]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-[#1267B1] shrink-0" />
              <p className="text-xs sm:text-sm text-[#183044]">
                <strong>Acolhimento profissional:</strong> A avaliação individualizada é o caminho seguro para entender cada etapa.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1267B1] hover:bg-[#063F82] text-white text-xs font-bold whitespace-nowrap transition-all shadow-xs"
            >
              <span>Conversar com a clínica</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#18C4D9]" />
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
