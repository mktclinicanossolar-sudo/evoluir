import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[85vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-[#EAF6FB] flex items-center justify-center text-[#1267B1]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3
              id="privacy-modal-title"
              className="text-xl font-bold text-[#063F82] font-['Manrope']"
            >
              Privacidade e Proteção de Dados (LGPD)
            </h3>
            <span className="text-xs text-[#6B7C87]">Evoluir Clínica Integrada • Adamantina - SP</span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#6B7C87] leading-relaxed">
          <p>
            A <strong>Evoluir Clínica Integrada</strong> valoriza a segurança, privacidade e o sigilo de todas as famílias, crianças e adolescentes atendidos em nossa unidade em Adamantina.
          </p>

          <h4 className="text-sm font-bold text-[#183044] pt-2">
            1. Coleta de Informações em Canais Públicos
          </h4>
          <p>
            Nosso site institucional coleta apenas dados básicos de identificação (como nome e telefone) estritamente com a finalidade de estabelecer o primeiro contato e acolhimento das famílias. Não solicitamos dados de prontuário, receitas, laudos médicos ou históricos comportamentais por meio deste website.
          </p>

          <h4 className="text-sm font-bold text-[#183044] pt-2">
            2. Sigilo Clínico e Prontuários
          </h4>
          <p>
            Toda avaliação clínica, evolução terapêutica e registros de acompanhamento são protegidos pelas normas dos conselhos profissionais de saúde e pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018), com guarda segura e acesso restrito aos profissionais envolvidos no caso.
          </p>

          <h4 className="text-sm font-bold text-[#183044] pt-2">
            3. Uso de Imagens e Redes Sociais
          </h4>
          <p>
            Fotografias de pacientes e atividades pedagógicas somente são veiculadas mediante termo de autorização expresso e assinado pelos pais ou responsáveis legais, respeitando a integridade, dignidade e desenvolvimento dos menores.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#1267B1] text-white text-xs font-bold hover:bg-[#063F82] transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
