import type { Language, Translations } from '@/types'

export const translations: Record<Language, Translations> = {
  'pt-BR': {
    nav: { home: 'Início', about: 'Sobre', projects: 'Projetos', skills: 'Stack', experience: 'Experiência', contact: 'Contato' },
    availability: 'Disponível para oportunidades Full Stack',
    heroTitle: 'Thiago Garcia — Desenvolvedor Full Stack',
    heroSubtitle: 'Construo aplicações web e mobile escaláveis, seguras e acessíveis.',
    viewProjects: 'Ver Projetos', downloadResume: 'Baixar Currículo (PDF)',
    heroEmailLinkLabel: 'Enviar e-mail (o endereço também é copiado)',
    emailCopied: 'E-mail copiado!', emailCopyFailed: 'Não foi possível copiar o e-mail.',
    aboutTitle: 'Sobre mim', projectsTitle: 'Projetos', projectsIntro: 'Experiências reais e aplicações prontas para evoluir.',
    skillsTitle: 'Stack e competências', experienceTitle: 'Experiência', contactTitle: 'Vamos conversar',
    contactIntro: 'Conte sobre uma oportunidade, projeto ou colaboração.',
    contactDirectPrompt: 'Prefere falar direto? Escolha o canal.',
    contactAvailability: 'Remoto, híbrido ou presencial na Grande Florianópolis.',
    contactEmailLabel: 'Enviar e-mail', contactLinkedInLabel: 'LinkedIn', contactGitHubLabel: 'GitHub',
    opensInNewTab: 'abre em nova aba',
    all: 'Todos', fullstack: 'Full Stack', mobile: 'Mobile', backend: 'Back-end',
    found: 'projetos encontrados', viewDetails: 'Ver detalhes', code: 'Código (GitHub)', demo: 'Demo ao Vivo',
    close: 'Fechar', context: 'Contexto e Problema', solution: 'Solução Arquitetural',
    features: 'Funcionalidades', gallery: 'Galeria', placeholderBadge: 'Exemplo',
    menuOpen: 'Abrir menu', menuClose: 'Fechar menu',
    themeToLight: 'Ativar tema claro', themeToDark: 'Ativar tema escuro',
    skipLink: 'Pular para o conteúdo principal', backTop: 'Voltar ao topo',
    form: {
      name: 'Nome', email: 'E-mail', subject: 'Assunto', message: 'Mensagem',
      send: 'Enviar mensagem', sending: 'Enviando...', success: 'Mensagem enviada com sucesso.',
      error: 'Não foi possível enviar agora. Use as alternativas abaixo.',
      whatsapp: 'Falar no WhatsApp', requiredName: 'Este campo é obrigatório.',
      invalidEmail: 'Informe um e-mail válido.', subjectMin: 'Use pelo menos 3 caracteres.',
      messageMin: 'Use pelo menos 20 caracteres.'
    }
  },
  'en-US': {
    nav: { home: 'Home', about: 'About', projects: 'Projects', skills: 'Stack', experience: 'Experience', contact: 'Contact' },
    availability: 'Available for Full Stack opportunities',
    heroTitle: 'Thiago Garcia — Full Stack Developer',
    heroSubtitle: 'I build scalable, secure and accessible web and mobile applications.',
    viewProjects: 'View Projects', downloadResume: 'Download Resume (PDF)',
    heroEmailLinkLabel: 'Send email (the address is also copied)',
    emailCopied: 'Email copied!', emailCopyFailed: 'Could not copy the email.',
    aboutTitle: 'About me', projectsTitle: 'Projects', projectsIntro: 'Real experiences and applications ready to evolve.',
    skillsTitle: 'Stack and skills', experienceTitle: 'Experience', contactTitle: 'Let’s talk',
    contactIntro: 'Tell me about an opportunity, project or collaboration.',
    contactDirectPrompt: 'Prefer to talk directly? Choose a channel.',
    contactAvailability: 'Remote, hybrid, or in-person across Greater Florianópolis.',
    contactEmailLabel: 'Send email', contactLinkedInLabel: 'LinkedIn', contactGitHubLabel: 'GitHub',
    opensInNewTab: 'opens in a new tab',
    all: 'All', fullstack: 'Full Stack', mobile: 'Mobile', backend: 'Back-end',
    found: 'projects found', viewDetails: 'View details', code: 'Code (GitHub)', demo: 'Live Demo',
    close: 'Close', context: 'Context and Problem', solution: 'Architectural Solution',
    features: 'Features', gallery: 'Gallery', placeholderBadge: 'Example',
    menuOpen: 'Open menu', menuClose: 'Close menu',
    themeToLight: 'Activate light theme', themeToDark: 'Activate dark theme',
    skipLink: 'Skip to main content', backTop: 'Back to top',
    form: {
      name: 'Name', email: 'Email', subject: 'Subject', message: 'Message',
      send: 'Send message', sending: 'Sending...', success: 'Message sent successfully.',
      error: 'The message could not be sent. Use the alternatives below.',
      whatsapp: 'Contact on WhatsApp', requiredName: 'This field is required.',
      invalidEmail: 'Enter a valid email.', subjectMin: 'Use at least 3 characters.',
      messageMin: 'Use at least 20 characters.'
    }
  }
}
