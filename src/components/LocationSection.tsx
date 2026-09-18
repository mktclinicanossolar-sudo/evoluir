import React from 'react';
import { CLINIC_INFO } from '../data/clinic';
import { EditableImage } from './EditableImage';
import { Reveal } from './AnimatedReveal';
import { MapPin, Navigation, Instagram, Clock, Phone, ArrowRight } from 'lucide-react';

interface LocationSectionProps {
  onOpenContact: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="localizacao"
      className="py-16 sm:py-24 bg-[#F0F7FC] relative overflow-hidden"
      aria-label="Localização da Clínica"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header - concise */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1267B1]/15 text-xs font-bold tracking-wider text-[#063F82] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18C4D9]" />
              <span>LOCALIZAÇÃO & VISITA</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#063F82] tracking-tight leading-tight font-['Manrope'] mb-2">
              Fácil acesso no coração de Adamantina.
            </h2>
            <p className="text-sm sm:text-base text-[#6B7C87]">
              Ambiente preparado com acessibilidade, segurança e tranquilidade para sua família.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Real Facade photo */}
          <div className="lg:col-span-6 flex flex-col">
            <Reveal yOffset={14} className="h-full">
              <div className="h-full relative rounded-3xl overflow-hidden shadow-md border-4 border-white aspect-[4/3] lg:aspect-auto bg-slate-100 min-h-[300px]">
                <EditableImage
                  imageKey="location.facade"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#063F82] shadow-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#EC155A]" />
                  <span>Adamantina - SP</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Address, Google Maps, Instagram */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-5 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7C87] block mb-1">
                  Endereço
                </span>
                <p className="text-base sm:text-lg font-bold text-[#063F82]">
                  {CLINIC_INFO.address.street}
                </p>
                <p className="text-sm text-[#6B7C87]">
                  {CLINIC_INFO.address.city} - {CLINIC_INFO.address.state}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#EAF6FB]">
                  <Clock className="w-5 h-5 text-[#1267B1] shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-[#6B7C87] uppercase block">Horários</span>
                    <span className="text-xs font-bold text-[#063F82]">Segunda a Sexta</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFF9E6]">
                  <Phone className="w-5 h-5 text-[#B38700] shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-[#6B7C87] uppercase block">Atendimento</span>
                    <span className="text-xs font-bold text-[#063F82]">Agendamento Prévio</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs: Maps & Instagram */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={CLINIC_INFO.address.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1267B1] hover:bg-[#063F82] text-white text-xs font-bold transition-all shadow-xs"
              >
                <Navigation className="w-4 h-4 text-[#18C4D9]" />
                <span>Como Chegar (Google Maps)</span>
              </a>

              <a
                href={CLINIC_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#F8FAFB] hover:bg-slate-100 text-[#063F82] text-xs font-bold transition-all border border-slate-200"
              >
                <Instagram className="w-4 h-4 text-[#EC155A]" />
                <span>{CLINIC_INFO.contact.instagram}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
