import React from 'react';
import { CLINIC_INFO } from '../data/clinic';
import { Reveal } from './AnimatedReveal';
import { motion } from 'motion/react';
import { ArrowRight, Navigation, MessageCircle } from 'lucide-react';

interface FinalCTAProps {
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  return (
    <section
      className="py-16 sm:py-24 bg-gradient-to-br from-[#063F82] via-[#042852] to-[#063F82] text-white relative overflow-hidden"
      aria-label="Agendamento e Contato"
    >
      {/* Brand light accents */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#18C4D9]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-[#EC155A]/15 blur-3xl pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 relative z-10 text-center flex flex-col items-center">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-['Manrope'] mb-4">
              Cada passo importa. Estamos prontos para caminhar juntos.
            </h2>

            <p className="text-sm sm:text-base text-white/80 max-w-lg mx-auto mb-8 font-normal leading-relaxed">
              Agende um primeiro contato com nossa equipe em Adamantina e venha conhecer nosso espaço.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <motion.button
                type="button"
                onClick={onOpenContact}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#063F82] text-sm font-bold shadow-xl hover:bg-[#EAF6FB] transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#1267B1]" />
                <span>Entrar em contato</span>
              </motion.button>

              <motion.a
                href={CLINIC_INFO.address.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all border border-white/20"
              >
                <Navigation className="w-4 h-4 text-[#18C4D9]" />
                <span>Como chegar</span>
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
