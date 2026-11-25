import type { SiteConfig } from '@/types'

export const site: SiteConfig = {
  name: 'Thiago Garcia',
  title: { 'pt-BR': 'Desenvolvedor Full Stack | Web & Mobile', 'en-US': 'Full Stack Developer | Web & Mobile' },
  location: { 'pt-BR': 'Palhoça, Santa Catarina, Brasil', 'en-US': 'Palhoça, Santa Catarina, Brazil' },
  email: 'thiago.garciatg4@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/thiago-garcia-b71394352/',
  githubUrl: 'https://github.com/gthiago21',
  resumeFiles: {
    'pt-BR': '/curriculo-thiago-garcia.pdf',
    'en-US': '/curriculo-thiago-garcia-en.pdf',
  },
  resumeFileNames: {
    'pt-BR': 'Curriculo-Thiago-Garcia.pdf',
    'en-US': 'Resume-Thiago-Garcia.pdf',
  },
  siteUrl: 'https://portfolio.thiagogarcia.workers.dev',
  whatsAppNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '5548998482475',
}
