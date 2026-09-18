import React, { useState, useRef } from 'react';
import { CONFIRMED_SERVICES } from '../data/services';
import { Reveal } from './AnimatedReveal';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Brain,
  Puzzle,
  Heart,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Activity,
  CheckCircle2,
} from 'lucide-react';

interface MultidisciplinaryCareProps {
  onOpenContact: () => void;
}

export const MultidisciplinaryCare: React.FC<MultidisciplinaryCareProps> = ({ onOpenContact }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(CONFIRMED_SERVICES[0].id);
  const detailsRef = useRef<HTMLDivElement>(null);

  const activeService =
    CONFIRMED_SERVICES.find((s) => s.id === selectedServiceId) || CONFIRMED_SERVICES[0];

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
    setTimeout(() => {
      if (detailsRef.current) {
        const yOffset = -100; // offset for floating navbar
        const y = detailsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 60);
  };

  const getServiceIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'users':
        return <Users className={className} />;
      case 'activity':
        return <Activity className={className} />;
      case 'puzzle':
        return <Puzzle className={className} />;
      case 'brain':
        return <Brain className={className} />;
      case 'heart':
        return <Heart className={className} />;
      case 'bookOpen':
      default:
        return <BookOpen className={className} />;
    }
  };

  return (
    <section
      id="atendimentos"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#F0F7FC] via-[#EAF6FB] to-[#F8FAFB] relative overflow-hidden"
      aria-label="Atendimento Integrado"
    >
      {/* Soft ambient background lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#18C4D9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-[#58B957]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 relative z-10 flex flex-col items-center">
        
        {/* Centered Section Header (without eyebrow pill) */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-14">
          <Reveal>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#063F82] tracking-tight leading-tight font-['Manrope'] mb-3">
              Diferentes especialidades para um olhar completo.
            </h2>
            <p className="text-sm sm:text-base text-[#6B7C87] max-w-xl mx-auto">
              Ambientes terapêuticos reais e planos personalizados para cada fase do desenvolvimento.
            </p>
          </Reveal>
        </div>

        {/* 1. Interactive Visual Photo Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {CONFIRMED_SERVICES.map((service, idx) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <Reveal key={service.id} delay={idx * 0.08} yOffset={16}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => handleSelectService(service.id)}
                  className={`group relative cursor-pointer bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col ${
                    isSelected
                      ? 'border-[#1267B1] ring-4 ring-[#1267B1]/10'
                      : 'border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  {/* Photo with zoom effect */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={service.imageSrc || '/images/hero.jpg'}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Service Icon Badge */}
                    <div
                      className="absolute top-3.5 left-3.5 p-2.5 rounded-2xl backdrop-blur-md shadow-md flex items-center justify-center"
                      style={{
                        backgroundColor: `${service.accentColor}E6`,
                        color: '#FFFFFF',
                      }}
                    >
                      {getServiceIcon(service.iconName, 'w-4 h-4')}
                    </div>

                    {/* Active Selected Marker */}
                    {isSelected && (
                      <div className="absolute top-3.5 right-3.5 bg-white text-[#063F82] text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#58B957]" />
                        <span>Selecionado</span>
                      </div>
                    )}

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-base font-bold text-white drop-shadow-md font-['Manrope'] line-clamp-1">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content with Tags & Short Description */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs sm:text-sm text-[#6B7C87] leading-relaxed mb-3.5">
                        {service.shortDesc}
                      </p>

                      {/* Visual Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.tags?.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-[#063F82]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Button / Link */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1267B1] group-hover:text-[#063F82] transition-colors inline-flex items-center gap-1">
                        Ver detalhes
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: service.accentColor }}
                      />
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* 2. Detailed Focus Banner for the selected service (with ref for auto-scroll) */}
        <div ref={detailsRef} id="detalhes-atendimento" className="w-full max-w-4xl scroll-mt-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-[#1267B1]/30 flex flex-col sm:flex-row items-center gap-6"
            >
              {/* Left miniature photo preview */}
              <div className="w-full sm:w-48 h-36 sm:h-32 rounded-2xl overflow-hidden shrink-0 shadow-xs">
                <img
                  src={activeService.imageSrc || '/images/hero.jpg'}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text and action */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: activeService.accentColor }}
                  />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6B7C87]">
                    Abordagem Especializada
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#063F82] mb-1 font-['Manrope']">
                  {activeService.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#6B7C87] leading-relaxed mb-4">
                  {activeService.fullDesc}
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#58B957] font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Acolhimento individualizado</span>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#1267B1] hover:bg-[#063F82] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg active:scale-95 ml-auto cursor-pointer"
                  >
                    <span>Conversar sobre este atendimento</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#18C4D9]" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
