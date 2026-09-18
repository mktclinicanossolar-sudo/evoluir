import { DevelopmentTopic } from '../types';

export const DEVELOPMENT_TOPICS: DevelopmentTopic[] = [
  {
    id: 'comunicacao-aprendizagem',
    title: 'Comunicação e Aprendizagem',
    description: 'Dúvidas no ritmo da fala, atenção em aula ou processo de alfabetização.',
    examples: [
      'Aquisição e clareza na linguagem',
      'Foco e fixação de conteúdos escolares',
      'Compreensão e execução de instruções',
    ],
    accentColor: '#1267B1', // Blue
  },
  {
    id: 'comportamento-regulacao',
    title: 'Comportamento e Emoções',
    description: 'Intensa frustração, agitação motora ou resistência a mudanças na rotina.',
    examples: [
      'Expressão e regulação das emoções',
      'Flexibilidade diante de transições',
      'Manejo de impulsos e reações',
    ],
    accentColor: '#EC155A', // Magenta
  },
  {
    id: 'interacao-autonomia',
    title: 'Interação Social e Autonomia',
    description: 'Desafios no brincar coletivo, convívio com colegas ou tarefas diárias.',
    examples: [
      'Engajamento social e interesse por pares',
      'Autonomia em rotinas de autocuidado',
      'Coordenação motora e exploração motora',
    ],
    accentColor: '#58B957', // Green
  },
];
