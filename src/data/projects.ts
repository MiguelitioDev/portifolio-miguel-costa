export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  status: 'Em andamento';
  demoUrl: string;
  imageUrl: string;
  tags: string[];
}

export const ongoingProjects: Project[] = [
  {
    id: 'onde-acampar-brasil',
    index: '01',
    title: 'Onde Acampar Brasil',
    subtitle: 'Vitrine e Catálogo de Campings',
    category: 'Plataforma Web / Catálogo',
    description:
      'Plataforma interativa e catálogo de campings em todo o Brasil. Desenvolvida para facilitar a busca, descoberta e filtragem dinâmica de estruturas de acampamento em diferentes estados e regiões.',
    status: 'Em andamento',
    demoUrl: 'https://onde-acampar-brasil.vercel.app/',
    imageUrl: '/projects/onde-acampar.jpg',
    tags: ['React', 'TypeScript', 'Vite', 'UI Interativa'],
  },
  {
    id: 'cidade-alpha-ceara',
    index: '02',
    title: 'Cidade Alpha Ceará',
    subtitle: 'Lotes Residenciais e Comerciais Alphaville',
    category: 'Landing Page Comercial / Imobiliário',
    description:
      'Protótipo de apresentação imobiliária de alto padrão para lotes residenciais e comerciais em Eusébio, Ceará. Estrutura voltada para conversão comercial, detalhamento de metragens e contato ágil.',
    status: 'Em andamento',
    demoUrl: 'https://cidade-alpha-proto.vercel.app/',
    imageUrl: '/projects/cidade-alpha.jpg',
    tags: ['React', 'TypeScript', 'Design Imobiliário', 'Performance'],
  },
  {
    id: 'pedro-freitas-conceito',
    index: '03',
    title: 'PEDRO FREITAS Conceito',
    subtitle: 'Salão de Beleza em Aquiraz • Mechas & Loiros',
    category: 'Landing Page Institucional / Beleza',
    description:
      'Presença digital e apresentação institucional para salão especializado em mechas, loiros e tratamentos capilares em Aquiraz. Foco em experiência estética refinada, vitrine de serviços e agendamentos diretos.',
    status: 'Em andamento',
    demoUrl: 'https://pedro-salao.vercel.app/',
    imageUrl: '/projects/pedro-freitas.jpg',
    tags: ['React', 'CSS Modules', 'Design Responsivo', 'SEO Local'],
  },
];
