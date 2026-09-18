export interface TeamPillar {
  id: string;
  title: string;
  description: string;
  accentColor: string;
}

export const TEAM_PILLARS: TeamPillar[] = [
  {
    id: 'olhar-integrado',
    title: 'Olhar Interdisciplinar Integrado',
    description:
      'Discussões clínicas periódicas entre os especialistas para alinhar objetivos e acompanhar a evolução global de cada paciente.',
    accentColor: '#1267B1',
  },
  {
    id: 'pratica-evidencias',
    title: 'Prática Baseada em Evidências',
    description:
      'Intervenções fundamentadas cientificamente, estruturadas com ética e respeito ao tempo e às singularidades de cada indivíduo.',
    accentColor: '#18C4D9',
  },
  {
    id: 'parceria-familia',
    title: 'Parceria com a Família e Escola',
    description:
      'Comunicação contínua e orientações práticas para que as conquistas terapêuticas se consolidem no ambiente escolar e no lar.',
    accentColor: '#58B957',
  },
];
