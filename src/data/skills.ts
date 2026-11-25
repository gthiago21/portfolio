import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  { id: 'frontend', title: { 'pt-BR': 'Front-end', 'en-US': 'Front-end' }, items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { id: 'mobile', title: { 'pt-BR': 'Mobile', 'en-US': 'Mobile' }, items: ['React Native', 'Expo'] },
  { id: 'backend', title: { 'pt-BR': 'Back-end e Banco de Dados', 'en-US': 'Back-end and Databases' }, items: ['Node.js', 'Java (OpenJDK 21)', 'Apache Maven', 'Supabase', 'PostgreSQL', 'SQL', 'APIs RESTful', 'Integração de Sistemas', 'Notificações automáticas'] },
  { id: 'engineering', title: { 'pt-BR': 'Engenharia e Ferramentas', 'en-US': 'Engineering and Tools' }, items: ['Git', 'GitHub', 'Arquitetura de Software', 'Testes de Software', 'Secure Coding', 'Acessibilidade Web (WCAG)', 'Metodologias Ágeis', 'Levantamento de Requisitos', 'Testes de Usabilidade e Acessibilidade', 'Acessibilidade Mobile (leitores de tela)'] },
]
