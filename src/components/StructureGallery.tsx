import React, { useState } from 'react';
import { EditableImage } from './EditableImage';
import { Reveal } from './AnimatedReveal';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, CheckCircle2 } from 'lucide-react';

export const StructureGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('sensory');

  const spaces = [
    {
      id: 'sensory',
      title: 'Sala de Estimulação Sensorial',
      key: 'structure.room01',
      desc: 'Luminárias em formato de nuvem com luz suave e piso adaptado para conforto e autorregulação.',
      accent: '#18C4D9',
      tag: 'Autorregulação',
    },
    {
      id: 'sensory_play',
      title: 'Integração Sensorial & T.O.',
      key: 'structure.sensory_play',
      desc: 'Equipamentos suspensos e blocos psicomotores para coordenação, força e planejamento motor.',
      accent: '#58B957',
      tag: 'Psicomotricidade',
    },
    {
      id: 'speech_room',
      title: 'Fonoaudiologia & Linguagem',
      key: 'structure.speech_room',
      desc: 'Mobiliário e jogos especializados para desenvolvimento da comunicação e estimulação oral.',
      accent: '#1267B1',
      tag: 'Comunicação',
    },
    {
      id: 'games',
      title: 'Desenvolvimento & Aprendizagem',
      key: 'structure.room02',
      desc: 'Mobiliário em madeira natural e recursos lúdicos para avaliação e intervenção cognitiva.',
      accent: '#FFD500',
      tag: 'Cognição',
    },
    {
      id: 'outdoor',
      title: 'Espaço Lúdico Externo',
      key: 'structure.outdoor',
      desc: 'Circuito com amarelinha ao ar livre para estímulo psicomotor e momentos de descontração.',
      accent: '#EC155A',
      tag: 'Ar Livre',
    },
    {
      id: 'reception',
      title: 'Recepção e Espera Acolhedora',
      key: 'structure.reception',
      desc: 'Ambiente climatizado e confortável para os pais e irmãos aguardarem com tranquilidade.',
      accent: '#063F82',
      tag: 'Acolhimento',
    },
  ];

  const currentSpace = spaces.find((s) => s.id === activeTab) || spaces[0];

  return (
    <section
      id="estrutura"
      className="py-16 sm:py-24 bg-[#F2F8FC] relative overflow-hidden"
      aria-label="Estrutura e Espaços da Clínica"
    >
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 relative z-10 flex flex-col items-center">
        
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <Reveal>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#063F82] tracking-tight leading-tight font-['Manrope'] mb-3">
              Estrutura planejada para acolher com carinho.
            </h2>
            <p className="text-sm sm:text-base text-[#6B7C87] max-w-xl mx-auto">
              Ambientes preparados com segurança e conforto para estímulos terapêuticos positivos.
            </p>
          </Reveal>
        </div>

        {/* Space Category Tabs (Centered, Scrollable on Mobile) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-4xl">
          {spaces.map((space) => {
            const isActive = space.id === activeTab;
            return (
              <motion.button
                key={space.id}
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(space.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer ${
                  isActive
                    ? 'bg-[#063F82] text-white shadow-md border-[#063F82]'
                    : 'bg-white text-[#183044] hover:bg-slate-50 border-slate-200/80 shadow-2xs'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: space.accent }}
                />
                <span>{space.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Main Display: High-impact photo with animated transition */}
        <div className="w-full bg-white rounded-3xl p-5 sm:p-8 shadow-xl border border-slate-100 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSpace.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Photo */}
              <div className="lg:col-span-8">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 group shadow-md">
                  <EditableImage
                    imageKey={currentSpace.key}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#063F82] shadow-sm flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: currentSpace.accent }}
                    />
                    <span>{currentSpace.tag}</span>
                  </div>
                </div>
              </div>

              {/* Caption details */}
              <div className="lg:col-span-4 flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div
                  className="inline-block w-10 h-1 rounded-full mx-auto lg:mx-0"
                  style={{ backgroundColor: currentSpace.accent }}
                />
                <h3 className="text-xl sm:text-2xl font-bold text-[#063F82] font-['Manrope']">
                  {currentSpace.title}
                </h3>
                <p className="text-sm text-[#6B7C87] leading-relaxed">
                  {currentSpace.desc}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-[#1267B1]">
                  <CheckCircle2 className="w-4 h-4 text-[#58B957]" />
                  <span>Ambiente real da Evoluir Clínica Integrada</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
