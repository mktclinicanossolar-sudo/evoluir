import React, { useState, useEffect } from 'react';
import { EvoluirLogo } from './EvoluirLogo';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingNavbarProps {
  onOpenContact: () => void;
}

export const FloatingNavbar: React.FC<FloatingNavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'A Clínica', href: '#sobre' },
    { label: 'Atendimentos', href: '#atendimentos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 transition-all duration-300 pointer-events-none ${
          isScrolled ? 'pt-3 sm:pt-4' : 'pt-5 sm:pt-7'
        }`}
      >
        <nav
          className={`pointer-events-auto w-full max-w-[1240px] flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-xl py-2.5 sm:py-3 px-4 sm:px-6 rounded-2xl shadow-[0_8px_30px_rgb(6,63,130,0.08)] border border-[#1267B1]/10'
              : 'bg-white/90 backdrop-blur-md py-3 sm:py-4 px-5 sm:px-8 rounded-[22px] sm:rounded-[26px] shadow-[0_4px_24px_rgb(6,63,130,0.06)] border border-[#1267B1]/8'
          }`}
          aria-label="Navegação Principal"
        >
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18C4D9] rounded-lg"
          >
            <EvoluirLogo className="h-9 sm:h-11" variant="dark" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-[#183044] hover:text-[#1267B1] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18C4D9] rounded after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#18C4D9] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop and Tablet CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1267B1] hover:bg-[#063F82] text-white text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18C4D9]"
            >
              <span>Falar com a equipe</span>
              <ArrowUpRight className="w-4 h-4 text-[#18C4D9]" />
            </button>
          </div>

          {/* Mobile Right Controls: Compact CTA + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenContact}
              className="p-2 rounded-full bg-[#1267B1] text-white hover:bg-[#063F82] transition-colors active:scale-95"
              aria-label="Falar com a equipe"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#183044] hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18C4D9]"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-24 z-40 bg-white/98 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-slate-100 sm:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#183044] hover:text-[#1267B1] py-2 border-b border-slate-100"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#1267B1] text-white font-semibold text-sm shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-[#18C4D9]" />
                  <span>Falar com a equipe</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
