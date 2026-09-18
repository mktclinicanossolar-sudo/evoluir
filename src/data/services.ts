import { ServiceItem } from '../types';

export const CONFIRMED_SERVICES: ServiceItem[] = [
  {
    id: 'atendimento-multidisciplinar',
    title: 'Atendimento Multidisciplinar',
    shortDesc: 'Acompanhamento integrado com diálogo constante entre diferentes especialistas.',
    fullDesc: 'Intervenções coordenadas em um plano terapêutico único, alinhando objetivos com a família e a escola.',
    iconName: 'users',
    confirmed: true,
    accentColor: '#1267B1', // Brand blue
    imageSrc: '/images/hero.jpg',
    tags: ['Equipe Integrada', 'Plano Único', 'Alinhamento Escolar'],
  },
  {
    id: 'desenvolvimento-infantil',
    title: 'Desenvolvimento Infantil & Psicomotricidade',
    shortDesc: 'Estimulação personalizada de habilidades funcionais, motoras e cognitivas.',
    fullDesc: 'Atividades planejadas respeitando o ritmo singular de cada criança para maior autonomia no cotidiano.',
    iconName: 'activity',
    confirmed: true,
    accentColor: '#18C4D9', // Cyan
    imageSrc: '/images/child.jpg',
    tags: ['Coordenação Motora', 'Autonomia', 'Marcos do Crescimento'],
  },
  {
    id: 'tea-espectro-autista',
    title: 'Integração Sensorial & TEA',
    shortDesc: 'Abordagem estruturada, baseada em evidências, com foco na comunicação e autorregulação.',
    fullDesc: 'Práticas acolhedoras em sala sensorial adaptada, estimulando respostas adaptativas e convivência social.',
    iconName: 'puzzle',
    confirmed: true,
    accentColor: '#58B957', // Green
    imageSrc: '/images/sensory.jpg',
    tags: ['Sala Sensorial', 'Autorregulação', 'Comunicação Aumentativa'],
  },
  {
    id: 'tdah-atencao-hiperatividade',
    title: 'Fonoaudiologia & Comunicação',
    shortDesc: 'Desenvolvimento da fala, linguagem oral, mastigação e expressão.',
    fullDesc: 'Recursos lúdicos e clínicos para apoiar a clareza da fala, compreensão verbal e interação social.',
    iconName: 'brain',
    confirmed: true,
    accentColor: '#F5842A', // Orange
    imageSrc: '/images/speech_room.jpg',
    tags: ['Fala e Linguagem', 'Interação Social', 'Oralidade'],
  },
  {
    id: 'tod-comportamento',
    title: 'Terapia Ocupacional & Brincar Funcional',
    shortDesc: 'Estímulo às atividades de vida diária, equilíbrio e coordenação global.',
    fullDesc: 'Espaço com recursos adaptados para desenvolver força, planejamento motor e segurança corporal.',
    iconName: 'heart',
    confirmed: true,
    accentColor: '#EC155A', // Magenta
    imageSrc: '/images/sensory_play.jpg',
    tags: ['Atividades Diárias', 'Esquema Corporal', 'Coordenação'],
  },
  {
    id: 'orientacao-familiar',
    title: 'Psicologia & Orientação à Família',
    shortDesc: 'Parceria e escuta contínua com os responsáveis em cada fase terapêutica.',
    fullDesc: 'Diálogo claro e acolhimento emocional para apoiar os pais e consolidar as conquistas na vida diária.',
    iconName: 'bookOpen',
    confirmed: true,
    accentColor: '#FFD500', // Yellow
    imageSrc: '/images/therapist.jpg',
    tags: ['Acolhimento Familiar', 'Manejo Emocional', 'Escuta Ativa'],
  },
];

export const SPECIALTIES_IN_CONFIRMATION = [
  'Psicologia Clínica Infantil',
  'Fonoaudiologia',
  'Terapia Ocupacional / Integração Sensorial',
  'Psicopedagogia',
  'Neuropsicologia',
  'Fisioterapia Neurofuncional',
  'Nutrição Infantil',
];
