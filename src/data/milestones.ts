import { DevelopmentTopic } from '../types';

export const DEVELOPMENT_TOPICS: DevelopmentTopic[] = [
  {
    id: 'comunicacao-aprendizagem',
    title: 'Comunicação e Linguagem',
    description: 'Apoio na aquisição e clareza da fala, foco na escola e expressão das ideias.',
    examples: [
      'Clareza e ritmo da fala',
      'Atenção e aprendizagem escolar',
      'Compreensão de orientações',
    ],
    accentColor: '#1267B1', // Blue
    imageSrc: '/images/speech_room.jpg',
    badge: 'Comunicação',
  },
  {
    id: 'comportamento-regulacao',
    title: 'Regulação Sensorial & Emoções',
    description: 'Compreensão de sobrecargas sensoriais, agitação, limites e expressão de sentimentos.',
    examples: [
      'Manejo de frustrações e limites',
      'Autorregulação em sala sensorial',
      'Flexibilidade em transições',
    ],
    accentColor: '#EC155A', // Magenta
    imageSrc: '/images/sensory.jpg',
    badge: 'Comportamento',
  },
  {
    id: 'interacao-autonomia',
    title: 'Autonomia & Interação Social',
    description: 'Estímulo ao brincar compartilhado, coordenação motora e independência na rotina.',
    examples: [
      'Convívio com outras crianças',
      'Autonomia no autocuidado diário',
      'Equilíbrio e coordenação motora',
    ],
    accentColor: '#58B957', // Green
    imageSrc: '/images/child.jpg',
    badge: 'Autonomia',
  },
];
