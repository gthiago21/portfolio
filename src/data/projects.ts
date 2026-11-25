import type { Project, ProjectCategory } from '@/types'

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: { 'pt-BR': 'Este portfólio', 'en-US': 'This portfolio' },
    badge: { 'pt-BR': 'Projeto Pessoal', 'en-US': 'Personal Project' },
    summary: {
      'pt-BR': 'Portfólio bilíngue que reúne apresentação profissional, projetos, competências e contato em uma interface responsiva.',
      'en-US': 'A bilingual portfolio bringing together a professional profile, projects, skills, and contact details in a responsive interface.'
    },
    context: {
      'pt-BR': 'Era necessário apresentar projetos e experiência de forma clara para públicos em português e inglês, com navegação acessível e uma experiência consistente em diferentes dispositivos.',
      'en-US': 'The goal was to present projects and experience clearly to Portuguese- and English-speaking audiences, with accessible navigation and a consistent experience across devices.'
    },
    solution: {
      'pt-BR': 'Desenvolvi a aplicação com React, TypeScript e Vite, mantendo o conteúdo em módulos de dados tipados separados dos componentes. Tailwind CSS e Framer Motion apoiam a interface, enquanto a internacionalização, o tema claro/escuro e metadados estruturados atendem às necessidades de navegação, SEO e performance.',
      'en-US': 'I built the application with React, TypeScript, and Vite, keeping content in typed data modules separate from components. Tailwind CSS and Framer Motion support the interface, while internationalization, light/dark themes, and structured metadata address navigation, SEO, and performance needs.'
    },
    features: {
      'pt-BR': [
        'Navegação e componentes desenvolvidos com foco nas diretrizes de acessibilidade WCAG 2.1 AA',
        'Conteúdo e interface internacionalizados em português e inglês',
        'Tema claro e escuro com preferência do sistema como padrão',
        'SEO com metadados semânticos e dados estruturados Person',
        'Carregamento sob demanda do modal de projetos e recursos estáticos otimizados'
      ],
      'en-US': [
        'Navigation and components designed with WCAG 2.1 AA accessibility guidelines in mind',
        'Content and interface internationalized in Portuguese and English',
        'Light and dark themes with system preference as the default',
        'SEO with semantic metadata and Person structured data',
        'On-demand loading for the project modal and optimized static assets'
      ]
    },
    categories: ['fullstack'],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    cover: { src: '/og-image.png', alt: { 'pt-BR': 'Capa do portfólio de Thiago Garcia', 'en-US': 'Cover image for Thiago Garcia’s portfolio' }, width: 1200, height: 630 },
    gallery: [],
    repoUrl: 'https://github.com/gthiago21/portfolio',
    featured: true,
  },
  {
    id: 'acic',
    title: { 'pt-BR': 'Sistema de Gestão e Agendamento Acessível — ACIC', 'en-US': 'Accessible Management and Scheduling System — ACIC' },
    badge: { 'pt-BR': 'Projeto de Extensão Real', 'en-US': 'Real Extension Project' },
    summary: {
      'pt-BR': 'Sistema web e mobile criado para apoiar a gestão e o agendamento acessível na Associação Catarinense para Integração do Cego (ACIC).',
      'en-US': 'A web and mobile system designed to support accessible management and scheduling at the Santa Catarina Association for the Integration of the Blind (ACIC).'
    },
    context: {
      'pt-BR': 'A ACIC precisava organizar operações e atendimentos com maior atenção à acessibilidade de pessoas com deficiência visual.',
      'en-US': 'ACIC needed to organize operations and appointments while prioritizing accessibility for people with visual impairments.'
    },
    solution: {
      'pt-BR': 'Arquitetura Full Stack com React e React Native/Expo no front-end, Node.js no servidor e Supabase para dados e autenticação. A rota /alterar-senha exige a redefinição de senha no primeiro acesso, com controles de acesso e interfaces pensadas para acessibilidade.',
      'en-US': 'A Full Stack architecture using React and React Native/Expo on the front end, Node.js on the server, and Supabase for data and authentication. The /alterar-senha route requires a password change on first access, with route controls and accessibility-focused interfaces.'
    },
    features: {
      'pt-BR': [
        'Autenticação de usuários',
        'Redefinição obrigatória no primeiro acesso',
        'Fluxos de gestão e agendamento',
        'Notificações automatizadas de confirmação, lembretes e alterações de horário',
        'Interface projetada para leitores de tela NVDA, TalkBack e VoiceOver'
      ],
      'en-US': [
        'User authentication',
        'Mandatory password reset on first access',
        'Management and scheduling flows',
        'Automated confirmation, reminder, and schedule-change notifications',
        'Interface designed for NVDA, TalkBack, and VoiceOver screen readers'
      ]
    },
    categories: ['fullstack', 'mobile'],
    technologies: ['React', 'React Native', 'Expo', 'Node.js', 'Supabase'],
    cover: { src: '/mockup-acic.svg', alt: { 'pt-BR': 'Mockup do sistema acessível da ACIC', 'en-US': 'ACIC accessible system mockup' }, width: 1200, height: 675 },
    gallery: [{ src: '/mockup-acic.svg', alt: { 'pt-BR': 'Visão ilustrativa do sistema ACIC', 'en-US': 'Illustrative view of the ACIC system' }, width: 1200, height: 675 }],
    featured: true,
  },
  {
    id: 'java-api',
    title: { 'pt-BR': 'API REST Java', 'en-US': 'Java REST API' },
    badge: { 'pt-BR': 'Projeto de exemplo', 'en-US': 'Example project' },
    summary: { 'pt-BR': 'API REST estruturada em Java 21, Maven e SQL para substituir por um projeto real.', 'en-US': 'REST API built with Java 21, Maven and SQL, ready to be replaced with a real project.' },
    context: { 'pt-BR': 'Exemplo genérico de API REST com persistência SQL. DETALHES A SUBSTITUIR.', 'en-US': 'Generic REST API example with SQL persistence. DETAILS TO BE REPLACED.' },
    solution: { 'pt-BR': 'Estrutura indicada para endpoints REST, validação, segurança e acesso a banco. DETALHES A SUBSTITUIR.', 'en-US': 'Suggested structure for REST endpoints, validation, security and database access. DETAILS TO BE REPLACED.' },
    features: { 'pt-BR': ['Endpoints REST', 'Persistência SQL', 'Tratamento de erros'], 'en-US': ['REST endpoints', 'SQL persistence', 'Error handling'] },
    categories: ['backend'],
    technologies: ['Java 21', 'Apache Maven', 'SQL', 'PostgreSQL'],
    cover: { src: '/mockup-java.svg', alt: { 'pt-BR': 'Mockup ilustrativo de API Java', 'en-US': 'Illustrative Java API mockup' }, width: 1200, height: 675 },
    gallery: [],
    isPlaceholder: true,
  },
  {
    id: 'react-app',
    title: { 'pt-BR': 'Aplicação Full Stack React', 'en-US': 'React Full Stack Application' },
    badge: { 'pt-BR': 'Projeto de exemplo', 'en-US': 'Example project' },
    summary: { 'pt-BR': 'Aplicação Full Stack em React e TypeScript pronta para receber o repositório real.', 'en-US': 'React and TypeScript Full Stack application ready for a real repository.' },
    context: { 'pt-BR': 'Exemplo genérico de interface conectada a uma API. DETALHES A SUBSTITUIR.', 'en-US': 'Generic example of an interface connected to an API. DETAILS TO BE REPLACED.' },
    solution: { 'pt-BR': 'Estrutura sugerida para React, TypeScript, estado tipado e integração HTTP. DETALHES A SUBSTITUIR.', 'en-US': 'Suggested structure for React, TypeScript, typed state and HTTP integration. DETAILS TO BE REPLACED.' },
    features: { 'pt-BR': ['Interface responsiva', 'Integração com API', 'Componentes reutilizáveis'], 'en-US': ['Responsive interface', 'API integration', 'Reusable components'] },
    categories: ['fullstack'],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    cover: { src: '/mockup-react.svg', alt: { 'pt-BR': 'Mockup ilustrativo de aplicação React', 'en-US': 'Illustrative React application mockup' }, width: 1200, height: 675 },
    gallery: [],
    isPlaceholder: true,
  }
]

export function filterProjects(category: 'all' | ProjectCategory): Project[] {
  return category === 'all' ? projects : projects.filter((project) => project.categories.includes(category))
}
