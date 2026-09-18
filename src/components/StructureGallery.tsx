import React, { useState } from 'react';
import { EditableImage } from './EditableImage';
import { Reveal } from './AnimatedReveal';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const StructureGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sensory' | 'games' | 'outdoor' | 'reception'>('sensory');

  const spaces = [
    {
      id: 'sensory',
      title: 'Sala de Estimulação Sensorial',
      key: 'structure.room01',
      desc: 'Luminárias em formato de nuvem com luz suave e piso adaptado para conforto e autorregulação.',
      accent: '#18C4D9',
    },
    {
      id: 'games',
      title: 'Desenvolvimento & Aprendizagem',
      key: 'structure.room02',
      desc: 'Mobiliário em madeira natural e recursos lúdicos para avaliação e intervenção cognitiva.',
      accent: '#FFD500',
    },
    {
      id: 'outdoor',
      title: 'Espaço Lúdico Externo',
      key: 'structure.outdoor',
      desc: 'Circuito com amarelinha ao ar livre para estímulo psicomotor e momentos de descontração.',
      accent: '#58B957',
    },
    {
      id: 'reception',
      title: 'Recepção e Espera Acolhedora',
      key: 'structure.reception',
      desc: 'Ambiente climatizado e confortável para os pais e irmãos aguardarem com tranquilidade.',
      accent: '#1267B1',
    },
  ];

  const currentSpace = spaces.find((s) => s.id === activeTab) || spaces[0];

  return (
    <section
      id="estrutura"
      className="py-16 sm:py-24 bg-[#F2F8FC] relative overflow-hidden"
      aria-label="Estrutura e Espaços da Clínica"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header - concise */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18C4D9]/20 text-xs font-bold tracking-wider text-[#063F82] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18C4D9]" />
              <span>NOSSOS ESPAÇOS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#063F82] tracking-tight leading-tight font-['Manrope'] mb-2">
              Estrutura planejada para acolher com carinho.
            </h2>
            <p className="text-sm sm:text-base text-[#6B7C87]">
              Cada detalhe foi pensado para proporcionar segurança, tranquilidade e estímulo positivo.
            </p>
          </Reveal>
        </div>

        {/* Space Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {spaces.map((space) => {
            const isActive = space.id === activeTab;
            return (
              <button
                key={space.id}
                type="button"
                onClick={() => setActiveTab(space.id as any)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#063F82] text-white shadow-md border-[#063F82]'
                    : 'bg-white text-[#183044] hover:bg-slate-50 border-slate-200/80'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: space.accent }}
                />
                <span>{space.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Display: High-impact photo with animated caption */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-4 sm:p-7 shadow-lg border border-slate-100">
          
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 group">
              <EditableImage
                imageKey={currentSpace.key}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            <div
              className="inline-block w-10 h-1 rounded-full mb-1"
              style={{ backgroundColor: currentSpace.accent }}
            />
            <h3 className="text-xl sm:text-2xl font-bold text-[#063F82] font-['Manrope']">
              {currentSpace.title}
            </h3>
            <p className="text-sm text-[#6B7C87] leading-relaxed">
              {currentSpace.desc}
            </p>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#1267B1]">
              <Eye className="w-4 h-4" />
              <span>Ambiente real fotografado na clínica</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
