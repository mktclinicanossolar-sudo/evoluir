import React from 'react';
import { EditableImage } from './EditableImage';
import { Reveal } from './AnimatedReveal';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, MapPin, CheckCircle2 } from 'lucide-react';

export const AboutClinic: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-16 sm:py-24 bg-[#FAF9F5] relative overflow-hidden"
      aria-label="A Evoluir Clínica Integrada"
    >
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 relative z-10 flex flex-col items-center">
        
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-14">
          <Reveal>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#063F82] tracking-tight leading-tight font-['Manrope'] mb-3">
              Espaço planejado para o florescer de cada indivíduo.
            </h2>
            <p className="text-sm sm:text-base text-[#6B7C87] max-w-xl mx-auto">
              Em Adamantina, unimos especialidades em saúde e desenvolvimento humano em um ambiente seguro e acolhedor.
            </p>
          </Reveal>
        </div>

        {/* Visual Content Grid: Centered & Balanced */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Authentic Image with Interactive Float & Soft Frame */}
          <div className="lg:col-span-6">
            <Reveal yOffset={16}>
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="relative rounded-[36px] overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-slate-100">
                  <EditableImage
                    imageKey="about.main"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Floating pill badge */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -right-2 sm:right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-slate-100 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#58B957]/15 flex items-center justify-center text-[#58B957] shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#063F82]">Acolhimento & Ciência</p>
                    <p className="text-[10px] text-[#6B7C87]">Equipe multidisciplinar em Adamantina</p>
                  </div>
                </motion.div>
              </motion.div>
            </Reveal>
          </div>

          {/* Values & Clinical Practice Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <Reveal delay={0.15}>
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs mb-2">
                <h3 className="text-lg font-bold text-[#063F82] mb-2.5 font-['Manrope']">
                  Cuidado integrado e centrado na pessoa
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7C87] leading-relaxed">
                  Acreditamos que cada conquista é construída a muitas mãos. Nossa abordagem integra diferentes áreas da saúde para garantir intervenções precisas, respeitando a singularidade de cada criança e adolescente.
                </p>
              </div>

              {/* 2 Centered Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#1267B1] shrink-0" />
                  <span className="text-xs font-bold text-[#183044]">Prática Baseada em Evidências</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#EC155A] shrink-0" />
                  <span className="text-xs font-bold text-[#183044]">Localização Central em Adamantina</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#EAF6FB] border border-[#1267B1]/20 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1267B1] shrink-0" />
                <span className="text-xs font-medium text-[#063F82]">
                  Espaços terapêuticos adaptados com estímulos sensoriais planejados.
                </span>
              </div>
            </Reveal>
          </div>

        </div>

        {/* Subtle Brand Colorful Line centered */}
        <div className="flex h-1.5 w-32 rounded-full overflow-hidden mt-12" aria-hidden="true">
          <div className="w-1/4 bg-[#18C4D9]" />
          <div className="w-1/4 bg-[#58B957]" />
          <div className="w-1/4 bg-[#FFD500]" />
          <div className="w-1/4 bg-[#EC155A]" />
        </div>

      </div>
    </section>
  );
};
