import React, { useState } from 'react';
import { ImageProvider, useCMSImages } from './context/ImageContext';
import { FloatingNavbar } from './components/FloatingNavbar';
import { Hero } from './components/Hero';
import { MultidisciplinaryCare } from './components/MultidisciplinaryCare';
import { DevelopmentSection } from './components/DevelopmentSection';
import { CareProcess } from './components/CareProcess';
import { AboutClinic } from './components/AboutClinic';
import { StructureGallery } from './components/StructureGallery';
import { TeamSection } from './components/TeamSection';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { PrivacyModal } from './components/PrivacyModal';
import { AdminMediaModal } from './components/AdminMediaModal';
import { motion, useScroll } from 'motion/react';
import { Camera, ArrowUp } from 'lucide-react';

const MainContent: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const { setIsAdminOpen } = useCMSImages();
  const { scrollYProgress } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#183044] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#18C4D9]/20 selection:text-[#063F82] overflow-x-hidden">
      
      {/* 0. Top Scroll Progress Indicator Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#18C4D9] via-[#58B957] via-[#FFD500] to-[#EC155A] origin-left z-50 pointer-events-none shadow-xs"
      />

      {/* 1. Floating Sticky Navbar */}
      <FloatingNavbar onOpenContact={() => setIsContactOpen(true)} />

      {/* 2. Hero (Full Bleed photo without gradient, precise mobile bottom-aligned format) */}
      <main id="main-content">
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* 3. Atendimento Multidisciplinar (Soft Blue gradient & colorful service indicators) */}
        <MultidisciplinaryCare onOpenContact={() => setIsContactOpen(true)} />

        {/* 4. Quando Observar / Desenvolvimento (Warm cream & milestone cards) */}
        <DevelopmentSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 5. Como Funciona (3 Steps) */}
        <CareProcess onOpenContact={() => setIsContactOpen(true)} />

        {/* 6. A Evoluir (Authentic Specialist & Values) */}
        <AboutClinic />

        {/* 7. Estrutura (Real clinic rooms, cloud lights, outdoor hopscotch) */}
        <StructureGallery />

        {/* 8. Equipe (Confirmed signage professionals) */}
        <TeamSection />

        {/* 9. Localização (Adamantina - SP & Facade photo) */}
        <LocationSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 10. FAQ (Concise answers) */}
        <FAQSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 11. Final CTA (Deep Blue & Cyan) */}
        <FinalCTA onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Floating Action Controls */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        {/* Scroll to Top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#063F82] shadow-md border border-slate-200/80 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        {/* Image CMS trigger */}
        <button
          type="button"
          onClick={() => setIsAdminOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#063F82]/95 hover:bg-[#063F82] text-white text-xs font-semibold shadow-lg hover:shadow-xl backdrop-blur-md border border-white/20 transition-all duration-200 active:scale-95 group"
          title="Abrir Gestor de Imagens (CMS)"
        >
          <Camera className="w-3.5 h-3.5 text-[#18C4D9] group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">CMS Fotos</span>
        </button>
      </div>

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
      <AdminMediaModal />
    </div>
  );
};

export default function App() {
  return (
    <ImageProvider>
      <MainContent />
    </ImageProvider>
  );
}
