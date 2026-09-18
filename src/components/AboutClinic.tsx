import React from 'react';
import { EditableImage } from './EditableImage';
import { Reveal } from './AnimatedReveal';
import { ShieldCheck, Heart, MapPin } from 'lucide-react';

export const AboutClinic: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-16 sm:py-24 bg-[#FAF9F5] relative overflow-hidden"
      aria-label="A Evoluir Clínica Integrada"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Specialist Image with rounded decorative frame */}
          <div className="lg:col-span-6">
            <Reveal yOffset={16}>
              <div className="relative">
                <div className="relative rounded-[32px] overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-slate-100">
                  <EditableImage
                    imageKey="about.main"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-2 sm:right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#58B957]/15 flex items-center justify-center text-[#58B957]">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#063F82]">Acolhimento & Ciência</p>
                    <p className="text-[10px] text-[#6B7C87]">Equipe multidisciplinar em Adamantina</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Concise Story & Values */}
          <div className="lg:col-span-6">
            <Reveal delay={0.15}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58B957]/10 text-xs font-bold tracking-wider text-[#58B957] uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#58B957]" />
                <span>A CLÍNICA</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#063F82] tracking-tight leading-tight font-['Manrope'] mb-4">
                Espaço planejado para o florescer de cada indivíduo.
              </h2>

              <p className="text-sm sm:text-base text-[#183044] leading-relaxed mb-6 font-medium">
                A <strong>Evoluir Clínica Integrada</strong> nasceu em Adamantina para unir especialidades em saúde e desenvolvimento humano em um ambiente acolhedor, onde cada conquista é celebrada em parceria com a família.
              </p>

              {/* 3 Quick highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/70 shadow-2xs flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#1267B1] shrink-0" />
                  <span className="text-xs font-semibold text-[#183044]">Prática Baseada em Evidências</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/70 shadow-2xs flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#EC155A] shrink-0" />
                  <span className="text-xs font-semibold text-[#183044]">Localização Central em Adamantina</span>
                </div>
              </div>

              {/* Brand Color Bar */}
              <div className="flex h-1.5 w-32 rounded-full overflow-hidden" aria-hidden="true">
                <div className="w-1/4 bg-[#18C4D9]" />
                <div className="w-1/4 bg-[#58B957]" />
                <div className="w-1/4 bg-[#FFD500]" />
                <div className="w-1/4 bg-[#EC155A]" />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
