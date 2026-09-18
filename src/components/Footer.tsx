import React from 'react';
import { EvoluirLogo } from './EvoluirLogo';
import { CLINIC_DATA } from '../data/clinic';
import { Instagram, MapPin, Shield, Settings } from 'lucide-react';
import { useCMSImages } from '../context/ImageContext';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenContact }) => {
  const { setIsAdminOpen } = useCMSImages();

  return (
    <footer className="bg-[#042852] text-slate-300 pt-16 pb-12 border-t border-white/10 select-none">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
            <EvoluirLogo variant="white" className="h-10 mb-4" />
            <p className="text-sm text-slate-300/80 leading-relaxed max-w-sm mb-6">
              Espaço multidisciplinar em Adamantina dedicado ao acompanhamento integral do desenvolvimento de crianças, adolescentes e suas famílias.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={CLINIC_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#EC155A] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram da Evoluir Clínica Integrada"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-300 font-medium">
                {CLINIC_DATA.instagram}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  A Clínica
                </a>
              </li>
              <li>
                <a href="#atendimentos" className="hover:text-white transition-colors">
                  Atendimentos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-white transition-colors">
                  Estrutura
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Localization & Contact */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Unidade Adamantina
            </h4>
            <div className="space-y-3 text-sm text-slate-300/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#18C4D9] shrink-0 mt-0.5" />
                <span>Adamantina - SP (Nova Alta Paulista)</span>
              </div>
              <p className="text-xs text-slate-400">
                Endereço completo, telefones e registros profissionais informados diretamente pela recepção no acolhimento.
              </p>
              <button
                type="button"
                onClick={onOpenContact}
                className="text-xs font-semibold text-[#18C4D9] hover:underline block pt-1"
              >
                Falar com a recepção da Evoluir →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Evoluir Clínica Integrada. Todos os direitos reservados.</p>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5 text-[#18C4D9]" />
              <span>Política de Privacidade & LGPD</span>
            </button>

            {/* Quick Admin CMS Trigger */}
            <button
              type="button"
              onClick={() => setIsAdminOpen(true)}
              className="hover:text-white transition-colors flex items-center gap-1 opacity-60 hover:opacity-100"
              title="Gerenciador de Imagens (CMS)"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Gestão de Fotos</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
