import React, { useState } from 'react';
import { CLINIC_DATA } from '../data/clinic';
import { X, Send, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Dúvidas gerais e acolhimento');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Privacy-compliant submission
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá! Gostaria de conversar com a equipe da Evoluir Clínica Integrada sobre atendimento em Adamantina.`
    );
    window.open(`https://wa.me/5518999990000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6FB] text-[#1267B1] text-xs font-bold mb-2">
                <span>Atendimento Adamantina</span>
              </div>
              <h3
                id="contact-modal-title"
                className="text-xl sm:text-2xl font-bold text-[#063F82] font-['Manrope']"
              >
                Falar com a equipe Evoluir
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7C87] mt-1">
                Deixe seus dados de contato para que nossa recepção entre em contato com você.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#183044] uppercase tracking-wider mb-1.5">
                  Nome do responsável
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Maria Silva"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#183044] focus:outline-none focus:ring-2 focus:ring-[#18C4D9] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#183044] uppercase tracking-wider mb-1.5">
                  Telefone ou WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(18) 99999-0000"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#183044] focus:outline-none focus:ring-2 focus:ring-[#18C4D9] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#183044] uppercase tracking-wider mb-1.5">
                  Motivo geral do contato
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#183044] focus:outline-none focus:ring-2 focus:ring-[#18C4D9] focus:bg-white transition-all"
                >
                  <option value="Dúvidas gerais e acolhimento">
                    Dúvidas gerais sobre acolhimento e agendamento
                  </option>
                  <option value="Desenvolvimento Infantil">
                    Acompanhamento do desenvolvimento infantil
                  </option>
                  <option value="TEA / TDAH / TOD">
                    Informações sobre TEA, TDAH ou TOD
                  </option>
                  <option value="Conhecer a estrutura">
                    Agendar visita para conhecer a clínica
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#183044] uppercase tracking-wider mb-1.5">
                  Mensagem breve (opcional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Se desejar, conte brevemente qual fase ou dúvida motivou sua busca..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#183044] focus:outline-none focus:ring-2 focus:ring-[#18C4D9] focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Privacy Notice according to specification */}
              <div className="p-3 bg-[#F8FAFB] rounded-xl border border-slate-200 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#58B957] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#6B7C87] leading-relaxed">
                  <strong>Privacidade e Saúde:</strong> Não solicitamos laudos médicos ou dados sensíveis neste formulário. Toda avaliação detalhada é realizada pessoalmente em ambiente clínico seguro.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#1267B1] hover:bg-[#063F82] text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Solicitar contato da recepção</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3 px-6 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-bold text-xs tracking-wide transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar diretamente pelo WhatsApp</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-[#58B957]/15 text-[#58B957] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#063F82] mb-2 font-['Manrope']">
              Mensagem Recebida com Sucesso
            </h4>
            <p className="text-sm text-[#6B7C87] max-w-sm mx-auto mb-6">
              Agradecemos seu contato. Nossa equipe entrará em contato pelo telefone fornecido para acolher sua solicitação.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#063F82] text-white text-xs font-bold"
            >
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
