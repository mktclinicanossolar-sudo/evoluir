import React from 'react';
import { useCMSImages } from '../context/ImageContext';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const { getImage } = useCMSImages();
  const heroImage = getImage('hero.main');

  return (
    <section
      id="inicio"
      className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-end sm:justify-center items-center overflow-hidden"
      aria-label="Apresentação Evoluir Clínica Integrada"
    >
      {/* 1. Full Bleed Background Photograph WITHOUT Dark Gradients */}
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

      {/* 2. Hero Content Container: Centered on Desktop & Mobile */}
      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-5 sm:px-8 pb-10 sm:pb-16 pt-24 sm:pt-28 flex flex-col items-center text-center">
        
        {/* DESKTOP CONTENT BLOCK: Centered, Dual-Tone Title, NO Subtitle, Refined Craft */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:flex flex-col items-center text-center max-w-3xl bg-white/94 backdrop-blur-xl rounded-[36px] p-9 lg:p-12 shadow-[0_24px_60px_rgba(6,63,130,0.14)] border border-white/80"
        >
          {/* H1 Dual-Tone Title - strictly NO subtitle */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.18] tracking-tight font-['Manrope'] mb-7">
            <span className="text-[#063F82] block sm:inline">Desenvolvimento acontece quando </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1267B1] via-[#18C4D9] to-[#063F82]">
              diferentes olhares se encontram.
            </span>
          </h1>

          {/* Centered CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.button
              type="button"
              onClick={onOpenContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1267B1] to-[#063F82] hover:from-[#063F82] hover:to-[#1267B1] text-white text-sm font-bold tracking-wide shadow-lg shadow-[#1267B1]/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#18C4D9]" />
              <span>Falar com a equipe</span>
            </motion.button>

            <motion.a
              href="#sobre"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-slate-100/95 hover:bg-slate-200/90 text-[#063F82] text-sm font-bold transition-all shadow-xs"
            >
              <span>Conhecer a clínica</span>
              <ArrowRight className="w-4 h-4 text-[#1267B1]" />
            </motion.a>
          </motion.div>

          {/* Brand colorful accent line */}
          <div className="flex h-1.5 w-28 rounded-full overflow-hidden mt-7" aria-hidden="true">
            <div className="w-1/4 bg-[#18C4D9]" />
            <div className="w-1/4 bg-[#58B957]" />
            <div className="w-1/4 bg-[#FFD500]" />
            <div className="w-1/4 bg-[#EC155A]" />
          </div>
        </motion.div>

        {/* MOBILE CONTENT BLOCK: strictly formatted at the bottom, centered, dual-tone title, NO subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sm:hidden w-full max-w-sm mx-auto flex flex-col items-center text-center bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/80"
        >
          {/* Dual-Tone H1 on Mobile */}
          <h1 className="text-[22px] font-extrabold leading-snug tracking-tight font-['Manrope'] mb-5">
            <span className="text-[#063F82]">Desenvolvimento acontece quando </span>
            <span className="text-[#1267B1]">diferentes olhares se encontram.</span>
          </h1>

          {/* Single Centered Button below title */}
          <a
            href="#sobre"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#1267B1] hover:bg-[#063F82] text-white text-sm font-bold tracking-wide shadow-md active:scale-95 transition-all"
          >
            <span>Conhecer a clínica</span>
            <ArrowRight className="w-4 h-4 text-[#18C4D9]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
