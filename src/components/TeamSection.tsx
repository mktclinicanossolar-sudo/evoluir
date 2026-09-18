import React from 'react';
import { TEAM_PILLARS } from '../data/team';
import { EditableImage } from './EditableImage';
import { Reveal } from './AnimatedReveal';
import { motion } from 'motion/react';
import { Heart, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Users className="w-5 h-5" />;
      case 1:
        return <ShieldCheck className="w-5 h-5" />;
      case 2:
      default:
        return <Heart className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="equipe"
      className="py-16 sm:py-24 bg-[#FFFDF9] relative overflow-hidden"
      aria-label="Equipe da Clínica"
    >
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#1267B1]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#58B957]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 relative z-10 flex flex-col items-center">
        
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-14">
          <Reveal>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#063F82] tracking-tight leading-tight font-['Manrope'] mb-3">
              Compromisso, escuta ativa e acolhimento.
            </h2>
            <p className="text-sm sm:text-base text-[#6B7C87] max-w-xl mx-auto">
              Profissionais dedicados a caminhar lado a lado com a família em Adamantina.
            </p>
          </Reveal>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl">
          
          {/* Authentic photo of specialist in clinical context */}
          <div className="lg:col-span-5">
            <Reveal yOffset={14}>
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] bg-slate-100"
              >
                <EditableImage
                  imageKey="team.main"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#063F82]/90 via-[#063F82]/50 to-transparent text-white text-center sm:text-left">
                  <p className="text-sm font-bold">Atendimento Especializado Integrado</p>
                  <p className="text-xs text-white/80">Evoluir Clínica Integrada • Adamantina - SP</p>
                </div>
              </motion.div>
            </Reveal>
          </div>

          {/* Pillars of the team and clinical care */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {TEAM_PILLARS.map((pillar, idx) => (
              <Reveal key={pillar.id} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ x: 4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/70 shadow-xs hover:shadow-md transition-all flex items-start gap-4"
                >
                  <div
                    className="w-11 h-11 rounded-2xl shrink-0 flex items-center justify-center"
                    style={{
                      backgroundColor: `${pillar.accentColor}18`,
                      color: pillar.accentColor,
                    }}
                  >
                    {getPillarIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#063F82] mb-1 font-['Manrope']">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B7C87] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}

            <div className="bg-[#EAF6FB]/80 rounded-2xl p-4 border border-[#1267B1]/15 flex items-center gap-3 mt-1">
              <CheckCircle2 className="w-5 h-5 text-[#1267B1] shrink-0" />
              <p className="text-xs text-[#183044] font-medium">
                Atendimentos conduzidos com ética profissional e reuniões de alinhamento entre as especialidades.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
