import React, { useState } from 'react';
import { CONFIRMED_SERVICES } from '../data/services';
import { Reveal } from './AnimatedReveal';
import {
  Users,
  Brain,
  Puzzle,
  Heart,
  BookOpen,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Activity,
} from 'lucide-react';

interface MultidisciplinaryCareProps {
  onOpenContact: () => void;
}

export const MultidisciplinaryCare: React.FC<MultidisciplinaryCareProps> = ({ onOpenContact }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(CONFIRMED_SERVICES[0].id);
  const [showAllServices, setShowAllServices] = useState(false);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(CONFIRMED_SERVICES[0].id);

  const visibleServices = showAllServices
    ? CONFIRMED_SERVICES
    : CONFIRMED_SERVICES.slice(0, 4);

  const activeService =
    CONFIRMED_SERVICES.find((s) => s.id === activeServiceId) || CONFIRMED_SERVICES[0];

  const getServiceIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'users':
        return <Users className={className} />;
      case 'sparkles':
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
      {/* Ambient background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#18C4D9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FFD500]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header - Concise */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1267B1]/10 text-xs font-bold tracking-wider text-[#1267B1] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18C4D9]" />
              <span>ATENDIMENTO INTEGRADO</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#063F82] tracking-tight leading-tight font-['Manrope'] mb-2">
              Diferentes especialidades para um olhar completo.
            </h2>
            <p className="text-sm sm:text-base text-[#6B7C87]">
              Planos terapêuticos adaptados às necessidades reais de cada criança e família.
            </p>
          </Reveal>
        </div>

        {/* DESKTOP: Interactive list with high contrast & color accents */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Services list */}
          <div className="md:col-span-5 flex flex-col gap-2.5">
            {visibleServices.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center gap-3.5 group border ${
                    isActive
                      ? 'bg-white text-[#063F82] shadow-md border-[#1267B1]/30 translate-x-1.5'
                      : 'bg-white/60 text-[#183044] hover:bg-white hover:shadow-xs border-white/60'
                  }`}
                >
                  <div
                    className="p-2.5 rounded-xl shrink-0 transition-transform group-hover:scale-105"
                    style={{
                      backgroundColor: `${service.accentColor}18`,
                      color: service.accentColor,
                    }}
                  >
                    {getServiceIcon(service.iconName, 'w-5 h-5')}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold truncate">
                      {service.title}
                    </h3>
                  </div>

                  <div
                    className="w-2 h-2 rounded-full shrink-0 transition-opacity"
                    style={{
                      backgroundColor: service.accentColor,
                      opacity: isActive ? 1 : 0.2,
                    }}
                  />
                </button>
              );
            })}

            {!showAllServices && CONFIRMED_SERVICES.length > 4 && (
              <button
                type="button"
                onClick={() => setShowAllServices(true)}
                className="w-full py-3 px-4 rounded-xl bg-white/80 hover:bg-white text-[#1267B1] text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-[#1267B1]/20 shadow-xs"
              >
                <span>Ver todos os atendimentos</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Right Column: Editorial Focus Card */}
          <div className="md:col-span-7 sticky top-28">
            <Reveal key={activeService.id} yOffset={12} duration={0.35}>
              <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: activeService.accentColor }}
                />

                <div className="flex items-center gap-3.5 mb-5">
                  <div
                    className="p-3 rounded-2xl"
                    style={{
                      backgroundColor: `${activeService.accentColor}18`,
                      color: activeService.accentColor,
                    }}
                  >
                    {getServiceIcon(activeService.iconName, 'w-6 h-6')}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7C87]">
                      Foco do Cuidado
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#063F82] font-['Manrope']">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <p className="text-base text-[#183044] leading-relaxed font-medium mb-3">
                  {activeService.shortDesc}
                </p>

                <p className="text-sm text-[#6B7C87] leading-relaxed mb-6">
                  {activeService.fullDesc}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-[#6B7C87]">
                    <ShieldCheck className="w-4 h-4 text-[#58B957]" />
                    <span>Acompanhamento personalizado</span>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1267B1] hover:bg-[#063F82] text-white text-xs font-bold transition-all shadow-sm active:scale-95"
                  >
                    <span>Falar sobre este atendimento</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#18C4D9]" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

        {/* MOBILE: Accordion (Concise) */}
        <div className="md:hidden flex flex-col gap-2.5">
          {CONFIRMED_SERVICES.map((service) => {
            const isExpanded = mobileExpandedId === service.id;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-xs border border-slate-200/70 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setMobileExpandedId(isExpanded ? null : service.id)}
                  className="w-full p-4 flex items-center justify-between text-left gap-3"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2 rounded-xl shrink-0"
                      style={{
                        backgroundColor: `${service.accentColor}18`,
                        color: service.accentColor,
                      }}
                    >
                      {getServiceIcon(service.iconName, 'w-4 h-4')}
                    </div>
                    <span className="text-sm font-bold text-[#063F82]">
                      {service.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#6B7C87] transition-transform ${
                      isExpanded ? 'rotate-180 text-[#1267B1]' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 text-xs text-[#6B7C87] bg-[#F8FAFB] border-t border-slate-100">
                    <p className="mb-3 text-[#183044] font-medium leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <button
                      type="button"
                      onClick={onOpenContact}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1267B1]"
                    >
                      <span>Conversar com a equipe</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
