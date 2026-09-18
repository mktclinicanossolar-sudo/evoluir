import React, { useState } from 'react';
import { useCMSImages } from '../context/ImageContext';
import { Camera } from 'lucide-react';

interface EditableImageProps {
  imageKey: string;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  showAdminBadge?: boolean;
  aspectRatio?: string;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  imageKey,
  fallbackSrc,
  alt: defaultAlt,
  className = '',
  priority = false,
  showAdminBadge = false,
}) => {
  const { getImage, setActiveEditKey, setIsAdminOpen } = useCMSImages();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const imgData = getImage(imageKey);
  const effectiveSrc = imgData.customSrc || fallbackSrc || imgData.fallbackSrc;
  const effectiveAlt = imgData.alt || defaultAlt || 'Evoluir Clínica Integrada';

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      {/* Skeleton loader */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse transition-opacity duration-300" />
      )}

      {/* Main Image with responsive object position */}
      <img
        src={effectiveSrc}
        alt={effectiveAlt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
        }`}
        style={{
          objectPosition:
            typeof window !== 'undefined' && window.innerWidth < 768
              ? imgData.objectPositionMobile || 'center center'
              : imgData.objectPositionDesktop || 'center center',
        }}
      />

      {/* Subtle Admin Quick-Edit button (shows on hover or when enabled) */}
      {showAdminBadge && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setActiveEditKey(imageKey);
            setIsAdminOpen(true);
          }}
          className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#063F82] text-xs font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:scale-105"
          title={`Substituir imagem (${imageKey})`}
        >
          <Camera className="w-3.5 h-3.5 text-[#1267B1]" />
          <span>Alterar foto</span>
        </button>
      )}
    </div>
  );
};
