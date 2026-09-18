import React from 'react';
import { useCMSImages } from '../context/ImageContext';
import { MaskedLineReveal } from './AnimatedReveal';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const { getImage } = useCMSImages();
  const heroImage = getImage('hero.main');

  return (
    <section
      id="inicio"
      className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-end sm:justify-center overflow-hidden"
      aria-label="Apresentação Evoluir Clínica Integrada"
    >
      {/* 1. Full Bleed Background Photograph WITHOUT Gradient */}
      <div className="absolute inset-0 w-full h-full z-0 select-none">
        <img
          src={heroImage.customSrc || heroImage.fallbackSrc}
          alt={heroImage.alt}
          loading="eager"
          decoding="sync"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
          style={{
            objectPosition:
              typeof window !== 'undefined' && window.innerWidth < 768
                ? heroImage.objectPositionMobile || 'center center'
                : heroImage.objectPositionDesktop || 'center 40%',
          }}
        />
      </div>

      {/* 2. Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-5 sm:px-8 pb-12 sm:pb-24 pt-24 sm:pt-36 flex flex-col items-center sm:items-start">
        
        {/* DESKTOP CONTENT BLOCK: Clean, high-legibility card without dark gradients */}
        <div className="hidden sm:block max-w-2xl bg-white/92 backdrop-blur-xl rounded-[32px] p-8 lg:p-11 shadow-[0_20px_50px_rgba(6,63,130,0.12)] border border-white/80">
          
          {/* H1 Headline */}
          <div className="mb-4">
            <MaskedLineReveal
              lines={[
                'Desenvolvimento acontece',
                'quando diferentes olhares',
                'se encontram.',
              ]}
              className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#063F82] leading-[1.15] tracking-tight font-['Manrope']"
              delay={0.15}
            />
          </div>

          {/* Short Supporting Sentence */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-[#6B7C87] leading-relaxed mb-8"
          >
            Cuidado multidisciplinar integrado em Adamantina para apoiar o desenvolvimento de crianças, adolescentes e famílias.
          </motion.p>

          {/* CTAs on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex items-center gap-3.5"
          >
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1267B1] hover:bg-[#063F82] text-white text-sm font-bold tracking-wide shadow-md transition-all active:scale-[0.98]"
            >
              <span>Falar com a equipe</span>
              <ArrowRight className="w-4 h-4 text-[#18C4D9]" />
            </button>

            <a
              href="#sobre"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-slate-100/90 hover:bg-slate-200/90 text-[#063F82] text-sm font-semibold transition-all active:scale-[0.98]"
            >
              Conhecer a clínica
            </a>
          </motion.div>

          {/* Subtle brand colored accent bar */}
          <div className="flex h-1 w-24 rounded-full overflow-hidden mt-6" aria-hidden="true">
            <div className="w-1/4 bg-[#18C4D9]" />
            <div className="w-1/4 bg-[#58B957]" />
            <div className="w-1/4 bg-[#FFD500]" />
            <div className="w-1/4 bg-[#EC155A]" />
          </div>
        </div>

        {/* MOBILE CONTENT BLOCK: strictly formatted as requested:
            "no mobile deve ficar apenas o titulo centralizado com o botão em baixo 'conhecer a clínica' texto e botão formatado na parte inferior da hero." */}
        <div className="sm:hidden w-full max-w-sm mx-auto flex flex-col items-center text-center bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/80">
          <h1 className="text-2xl font-extrabold text-[#063F82] leading-snug tracking-tight font-['Manrope'] mb-4">
            Desenvolvimento acontece quando diferentes olhares se encontram.
          </h1>

          <a
            href="#sobre"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#1267B1] text-white text-sm font-bold tracking-wide shadow-md active:scale-95 transition-all"
          >
            <span>Conhecer a clínica</span>
            <ArrowRight className="w-4 h-4 text-[#18C4D9]" />
          </a>
        </div>

      </div>

      {/* Subtle Scroll Down Link on Desktop */}
      <a
        href="#atendimentos"
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex-col items-center text-[#063F82]/70 hover:text-[#063F82] transition-colors"
        aria-label="Rolar para os atendimentos"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase mb-0.5">Explorar</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#1267B1]" />
      </a>
    </section>
  );
};
