import React, { createContext, useContext, useState, useEffect } from 'react';
import { CMSImage } from '../types';

const STORAGE_KEY = 'evoluir_cms_images_v3';

export const DEFAULT_IMAGES: Record<string, CMSImage> = {
  'hero.main': {
    key: 'hero.main',
    label: 'Hero - Imagem Principal de Fundo',
    section: 'Hero',
    fallbackSrc: '/images/hero.jpg',
    alt: 'Recepção e espaço acolhedor da Evoluir Clínica Integrada em Adamantina',
    objectPositionDesktop: 'center 40%',
    objectPositionMobile: 'center center',
  },
  'about.main': {
    key: 'about.main',
    label: 'A Evoluir - Especialista e Acolhimento',
    section: 'A Clínica',
    fallbackSrc: '/images/therapist.jpg',
    alt: 'Profissional especialista da Evoluir Clínica Integrada',
    objectPositionDesktop: 'center 30%',
    objectPositionMobile: 'center 20%',
  },
  'structure.reception': {
    key: 'structure.reception',
    label: 'Estrutura - Recepção e Acolhimento',
    section: 'Estrutura',
    fallbackSrc: '/images/hero.jpg',
    alt: 'Recepção iluminada e confortável da clínica em Adamantina',
    objectPositionDesktop: 'center center',
    objectPositionMobile: 'center center',
  },
  'structure.room01': {
    key: 'structure.room01',
    label: 'Estrutura - Sala de Estimulação Sensorial',
    section: 'Estrutura',
    fallbackSrc: '/images/sensory.jpg',
    alt: 'Sala sensorial com luminárias no teto em formato de nuvem',
    objectPositionDesktop: 'center center',
    objectPositionMobile: 'center center',
  },
  'structure.sensory_play': {
    key: 'structure.sensory_play',
    label: 'Estrutura - Integração Sensorial & Terapia Ocupacional',
    section: 'Estrutura',
    fallbackSrc: '/images/sensory_play.jpg',
    alt: 'Sala de terapia ocupacional e integração sensorial com equipamentos lúdicos',
    objectPositionDesktop: 'center center',
    objectPositionMobile: 'center center',
  },
  'structure.speech_room': {
    key: 'structure.speech_room',
    label: 'Estrutura - Fonoaudiologia & Neurodesenvolvimento',
    section: 'Estrutura',
    fallbackSrc: '/images/speech_room.jpg',
    alt: 'Sala de fonoaudiologia e estimulação cognitiva com materiais especializados',
    objectPositionDesktop: 'center center',
    objectPositionMobile: 'center center',
  },
  'structure.room02': {
    key: 'structure.room02',
    label: 'Estrutura - Desenvolvimento & Atividades',
    section: 'Estrutura',
    fallbackSrc: '/images/child.jpg',
    alt: 'Criança em atividade com materiais lúdicos e educativos de madeira',
    objectPositionDesktop: 'center center',
    objectPositionMobile: 'center center',
  },
  'structure.outdoor': {
    key: 'structure.outdoor',
    label: 'Estrutura - Amarelinha e Pátio Externo',
    section: 'Estrutura',
    fallbackSrc: '/images/outdoor.jpg',
    alt: 'Corredor externo com circuito lúdico de amarelinha',
    objectPositionDesktop: 'center center',
    objectPositionMobile: 'center center',
  },
  'team.main': {
    key: 'team.main',
    label: 'Equipe - Atendimento Integrado',
    section: 'Equipe',
    fallbackSrc: '/images/therapist.jpg',
    alt: 'Equipe e profissionais dedicados ao desenvolvimento infantil',
    objectPositionDesktop: 'center 25%',
    objectPositionMobile: 'center 20%',
  },
  'location.facade': {
    key: 'location.facade',
    label: 'Localização - Fachada e Entrada',
    section: 'Localização',
    fallbackSrc: '/images/facade.jpg',
    alt: 'Fachada e acesso da Evoluir Clínica Integrada em Adamantina',
    objectPositionDesktop: 'center center',
    objectPositionMobile: 'center center',
  },
};

interface ImageContextType {
  images: Record<string, CMSImage>;
  getImage: (key: string) => CMSImage;
  updateImage: (key: string, updates: Partial<CMSImage>) => void;
  resetImage: (key: string) => void;
  resetAllImages: () => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  activeEditKey: string | null;
  setActiveEditKey: (key: string | null) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<Record<string, CMSImage>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return { ...DEFAULT_IMAGES, ...parsed };
      }
    } catch {
      // Fallback
    }
    return DEFAULT_IMAGES;
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activeEditKey, setActiveEditKey] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    } catch {
      // Storage quota or private mode fallback
    }
  }, [images]);

  // Check URL query param for #admin or /admin
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#admin' || window.location.pathname.includes('/admin')) {
        setIsAdminOpen(true);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const getImage = (key: string): CMSImage => {
    return images[key] || DEFAULT_IMAGES[key] || {
      key,
      label: key,
      section: 'Geral',
      fallbackSrc: '',
      alt: 'Evoluir Clínica Integrada',
      objectPositionDesktop: 'center center',
      objectPositionMobile: 'center center',
    };
  };

  const updateImage = (key: string, updates: Partial<CMSImage>) => {
    setImages((prev) => {
      const current = prev[key] || DEFAULT_IMAGES[key] || {
        key,
        label: key,
        section: 'Geral',
        fallbackSrc: '',
        alt: '',
        objectPositionDesktop: 'center center',
        objectPositionMobile: 'center center',
      };
      return {
        ...prev,
        [key]: {
          ...current,
          ...updates,
          updatedAt: new Date().toISOString(),
        },
      };
    });
  };

  const resetImage = (key: string) => {
    setImages((prev) => {
      const defaultImg = DEFAULT_IMAGES[key];
      if (!defaultImg) return prev;
      const next = { ...prev };
      next[key] = { ...defaultImg };
      return next;
    });
  };

  const resetAllImages = () => {
    setImages(DEFAULT_IMAGES);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // noop
    }
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        getImage,
        updateImage,
        resetImage,
        resetAllImages,
        isAdminOpen,
        setIsAdminOpen,
        activeEditKey,
        setActiveEditKey,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useCMSImages = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useCMSImages must be used within an ImageProvider');
  }
  return context;
};
