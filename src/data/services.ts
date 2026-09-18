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
  },
  {
    id: 'desenvolvimento-infantil',
    title: 'Desenvolvimento Infantil',
    shortDesc: 'Estimulação personalizada de habilidades funcionais, motoras e cognitivas.',
    fullDesc: 'Atividades planejadas respeitando o ritmo singular de cada criança para maior autonomia no cotidiano.',
    iconName: 'activity',
    confirmed: true,
    accentColor: '#18C4D9', // Cyan
  },
  {
    id: 'tea-espectro-autista',
    title: 'Acompanhamento no TEA',
    shortDesc: 'Abordagem estruturada, baseada em evidências, com foco na comunicação e autonomia.',
    fullDesc: 'Práticas acolhedoras centradas na criança no espectro autista, com suporte e orientação aos pais.',
    iconName: 'puzzle',
    confirmed: true,
    accentColor: '#58B957', // Green
  },
  {
    id: 'tdah-atencao-hiperatividade',
    title: 'Suporte no TDAH e Atenção',
    shortDesc: 'Estratégias práticas para foco, regulação e organização da rotina.',
    fullDesc: 'Desenvolvimento de funções executivas e autorregulação com mediação ativa entre casa e escola.',
    iconName: 'brain',
    confirmed: true,
    accentColor: '#F5842A', // Orange
  },
  {
    id: 'tod-comportamento',
    title: 'Manejo no TOD e Emoções',
    shortDesc: 'Acolhimento de comportamentos desafiadores e fortalecimento dos vínculos.',
    fullDesc: 'Mediação positiva de conflitos e estratégias para regulação emocional familiar e social.',
    iconName: 'heart',
    confirmed: true,
    accentColor: '#EC155A', // Magenta
  },
  {
    id: 'orientacao-familiar',
    title: 'Orientação à Família',
    shortDesc: 'Parceria e escuta contínua com os responsáveis em cada fase terapêutica.',
    fullDesc: 'Diálogo claro para apoiar os pais e consolidar as conquistas da criança na vida diária.',
    iconName: 'bookOpen',
    confirmed: true,
    accentColor: '#FFD500', // Yellow
  },
];

// Specialities undergoing formal confirmation before direct clinical assignment
export const SPECIALTIES_IN_CONFIRMATION = [
  'Psicologia Clínica Infantil',
  'Fonoaudiologia',
  'Terapia Ocupacional / Integração Sensorial',
  'Psicopedagogia',
  'Neuropsicologia',
  'Fisioterapia Neurofuncional',
  'Terapia ABA',
  'Nutrição Infantil',
  'Musicoterapia',
];
