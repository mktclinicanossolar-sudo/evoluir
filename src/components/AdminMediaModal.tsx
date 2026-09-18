import React, { useState } from 'react';
import { useCMSImages, DEFAULT_IMAGES } from '../context/ImageContext';
import {
  X,
  Upload,
  RefreshCw,
  Image as ImageIcon,
  Check,
  Download,
  Sliders,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export const AdminMediaModal: React.FC = () => {
  const {
    images,
    updateImage,
    resetImage,
    resetAllImages,
    isAdminOpen,
    setIsAdminOpen,
    activeEditKey,
    setActiveEditKey,
  } = useCMSImages();

  const [selectedKey, setSelectedKey] = useState<string>(
    activeEditKey || 'hero.main'
  );
  const [altText, setAltText] = useState('');
  const [desktopPos, setDesktopPos] = useState('center center');
  const [mobilePos, setMobilePos] = useState('center center');
  const [customUrl, setCustomUrl] = useState('');
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Sync state when selected key changes
  React.useEffect(() => {
    const key = activeEditKey || selectedKey;
    setSelectedKey(key);
    const img = images[key];
    if (img) {
      setAltText(img.alt || '');
      setDesktopPos(img.objectPositionDesktop || 'center center');
      setMobilePos(img.objectPositionMobile || 'center center');
      setCustomUrl(img.customSrc || '');
      setPreviewSrc(img.customSrc || img.fallbackSrc);
    }
  }, [selectedKey, activeEditKey, images]);

  if (!isAdminOpen) return null;

  const currentImg = images[selectedKey] || DEFAULT_IMAGES[selectedKey];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione um arquivo de imagem válido (PNG, JPG, WebP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      setPreviewSrc(dataUrl);
      setCustomUrl(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    updateImage(selectedKey, {
      customSrc: customUrl || undefined,
      alt: altText,
      objectPositionDesktop: desktopPos,
      objectPositionMobile: mobilePos,
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handleResetCurrent = () => {
    if (confirm(`Restaurar a imagem original padrão de "${currentImg?.label}"?`)) {
      resetImage(selectedKey);
      const def = DEFAULT_IMAGES[selectedKey];
      if (def) {
        setCustomUrl('');
        setPreviewSrc(def.fallbackSrc);
        setAltText(def.alt);
        setDesktopPos(def.objectPositionDesktop);
        setMobilePos(def.objectPositionMobile);
      }
    }
  };

  const handleExportJson = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(images, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `evoluir_cms_images_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col max-h-[92vh] overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-modal-title"
      >
        {/* Header */}
        <div className="px-6 py-4 sm:px-8 sm:py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#1267B1] text-white flex items-center justify-center">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3
                id="admin-modal-title"
                className="text-lg sm:text-xl font-bold text-[#063F82] font-['Manrope'] flex items-center gap-2"
              >
                <span>Gestor de Imagens da Clínica</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#18C4D9]/20 text-[#063F82]">
                  CMS Persistente
                </span>
              </h3>
              <p className="text-xs text-[#6B7C87]">
                Substitua as fotos do website da Evoluir sem editar código. Alterações refletem ao vivo.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExportJson}
              className="p-2 rounded-xl text-slate-500 hover:text-[#1267B1] hover:bg-slate-100 transition-colors"
              title="Exportar backup das imagens (JSON)"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAdminOpen(false);
                setActiveEditKey(null);
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Fechar gestor"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body: Left sidebar keys + Right editor */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          
          {/* Key selector sidebar */}
          <div className="md:col-span-4 border-r border-slate-100 p-4 sm:p-5 overflow-y-auto bg-[#F8FAFB]/50 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7C87] block mb-2 px-2">
              Selecione a Seção / Foto
            </span>
            {Object.values(images).map((item) => {
              const isSelected = item.key === selectedKey;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => {
                    setSelectedKey(item.key);
                    setActiveEditKey(item.key);
                  }}
                  className={`w-full text-left p-3 rounded-2xl transition-all flex items-center gap-3 ${
                    isSelected
                      ? 'bg-white text-[#063F82] shadow-sm border border-slate-200/80'
                      : 'text-[#183044] hover:bg-white/60'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      item.customSrc ? 'bg-[#58B957]' : 'bg-[#18C4D9]'
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold truncate">{item.label}</p>
                    <p className="text-[10px] text-[#6B7C87] truncate">
                      Chave: {item.key}
                    </p>
                  </div>
                </button>
              );
            })}

            <div className="pt-4 mt-4 border-t border-slate-200/60 px-2">
              <button
                type="button"
                onClick={() => {
                  if (confirm('Restaurar todas as imagens para as fotos originais padrão?')) {
                    resetAllImages();
                  }
                }}
                className="w-full py-2 px-3 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Restaurar todas as fotos padrão</span>
              </button>
            </div>
          </div>

          {/* Right Editing Workspace */}
          <div className="md:col-span-8 p-5 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Active Key Info */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1267B1]">
                  {currentImg?.section}
                </span>
                <h4 className="text-lg font-bold text-[#063F82]">
                  {currentImg?.label}
                </h4>
              </div>

              <button
                type="button"
                onClick={handleResetCurrent}
                className="text-xs font-semibold text-slate-500 hover:text-red-600 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-red-200"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Restaurar padrão</span>
              </button>
            </div>

            {/* Live Preview Screen */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 aspect-[16/9] flex items-center justify-center">
              {previewSrc ? (
                <img
                  src={previewSrc}
                  alt={altText || 'Pré-visualização'}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: desktopPos }}
                />
              ) : (
                <div className="text-slate-400 text-xs flex flex-col items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-slate-500" />
                  <span>Nenhuma imagem selecionada</span>
                </div>
              )}

              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                Pré-visualização Desktop ({desktopPos})
              </div>
            </div>

            {/* Controls: Upload & Inputs */}
            <div className="space-y-4">
              
              {/* File Upload Zone */}
              <div>
                <label className="block text-xs font-bold text-[#183044] uppercase tracking-wider mb-2">
                  Carregar Nova Fotografia Real
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-dashed border-[#1267B1]/30 hover:border-[#1267B1] bg-[#EAF6FB]/30 hover:bg-[#EAF6FB]/60 cursor-pointer transition-all">
                    <Upload className="w-4 h-4 text-[#1267B1]" />
                    <span className="text-xs font-bold text-[#1267B1]">
                      Escolher foto do computador
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Or Direct Image URL */}
              <div>
                <label className="block text-xs font-bold text-[#183044] uppercase tracking-wider mb-1">
                  Ou URL Direta da Imagem
                </label>
                <input
                  type="url"
                  value={customUrl}
                  onChange={(e) => {
                    setCustomUrl(e.target.value);
                    setPreviewSrc(e.target.value);
                  }}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#183044] focus:outline-none focus:ring-2 focus:ring-[#18C4D9]"
                />
              </div>

              {/* Alt Text */}
              <div>
                <label className="block text-xs font-bold text-[#183044] uppercase tracking-wider mb-1">
                  Texto Alternativo / Acessibilidade (Alt)
                </label>
                <input
                  type="text"
                  value={altText}
                  onChange={(e) => setAltText(e.target.value)}
                  placeholder="Descreva o que aparece na imagem..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#183044] focus:outline-none focus:ring-2 focus:ring-[#18C4D9]"
                />
              </div>

              {/* Responsive Focal Positions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-[#183044] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Sliders className="w-3 h-3 text-[#1267B1]" />
                    <span>Posição Desktop</span>
                  </label>
                  <select
                    value={desktopPos}
                    onChange={(e) => setDesktopPos(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#183044] focus:outline-none focus:ring-2 focus:ring-[#18C4D9]"
                  >
                    <option value="center center">Centro (center center)</option>
                    <option value="center 30%">Topo sutil (center 30%)</option>
                    <option value="center 40%">Foco Superior (center 40%)</option>
                    <option value="top center">Topo Absoluto (top center)</option>
                    <option value="bottom center">Base (bottom center)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#183044] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Sliders className="w-3 h-3 text-[#1267B1]" />
                    <span>Posição Mobile</span>
                  </label>
                  <select
                    value={mobilePos}
                    onChange={(e) => setMobilePos(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#183044] focus:outline-none focus:ring-2 focus:ring-[#18C4D9]"
                  >
                    <option value="center center">Centro (center center)</option>
                    <option value="top center">Topo (top center)</option>
                    <option value="center 20%">Foco no Topo (center 20%)</option>
                    <option value="center 40%">Foco Médio (center 40%)</option>
                    <option value="bottom center">Base (bottom center)</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Save & Confirm Bar */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-[#6B7C87] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#18C4D9]" />
                Salva permanentemente no navegador
              </span>

              <button
                type="button"
                onClick={handleSave}
                className="px-6 py-2.5 rounded-full bg-[#1267B1] hover:bg-[#063F82] text-white font-bold text-xs tracking-wide shadow-md transition-all flex items-center gap-2"
              >
                {saveSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-[#18C4D9]" />
                    <span>Foto Atualizada!</span>
                  </>
                ) : (
                  <span>Salvar Alterações</span>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
