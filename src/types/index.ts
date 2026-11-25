export type Language = 'pt-BR' | 'en-US'
export type Theme = 'light' | 'dark'
export type LocalizedText = Record<Language, string>
export type ProjectCategory = 'fullstack' | 'mobile' | 'backend'
export type ContactStatus = 'idle' | 'loading' | 'success' | 'error'

export interface MediaItem {
  src: string
  alt: LocalizedText
  width: number
  height: number
}

export interface Project {
  id: string
  title: LocalizedText
  badge?: LocalizedText
  summary: LocalizedText
  context: LocalizedText
  solution: LocalizedText
  features: Record<Language, string[]>
  categories: ProjectCategory[]
  technologies: string[]
  cover: MediaItem
  gallery: MediaItem[]
  repoUrl?: string
  demoUrl?: string
  featured?: boolean
  isPlaceholder?: boolean
}

export interface SkillCategory {
  id: string
  title: LocalizedText
  items: string[]
}

export interface ExperienceItem {
  role: LocalizedText
  organization: LocalizedText
  period: LocalizedText
  points: Record<Language, string[]>
  isPlaceholder?: boolean
}

export interface SiteConfig {
  name: string
  title: LocalizedText
  location: LocalizedText
  email: string
  linkedinUrl: string
  githubUrl: string
  resumeFiles: Record<Language, string>
  resumeFileNames: Record<Language, string>
  siteUrl: string
  whatsAppNumber: string
}

export interface Translations {
  nav: { home: string; about: string; projects: string; skills: string; experience: string; contact: string }
  availability: string
  heroTitle: string
  heroSubtitle: string
  viewProjects: string
  downloadResume: string
  heroEmailLinkLabel: string
  emailCopied: string
  emailCopyFailed: string
  aboutTitle: string
  projectsTitle: string
  projectsIntro: string
  skillsTitle: string
  experienceTitle: string
  contactTitle: string
  contactIntro: string
  contactDirectPrompt: string
  contactAvailability: string
  contactEmailLabel: string
  contactLinkedInLabel: string
  contactGitHubLabel: string
  opensInNewTab: string
  all: string
  fullstack: string
  mobile: string
  backend: string
  found: string
  viewDetails: string
  code: string
  demo: string
  close: string
  context: string
  solution: string
  features: string
  gallery: string
  placeholderBadge: string
  menuOpen: string
  menuClose: string
  themeToLight: string
  themeToDark: string
  skipLink: string
  backTop: string
  form: {
    name: string; email: string; subject: string; message: string
    send: string; sending: string; success: string; error: string
    whatsapp: string; requiredName: string; invalidEmail: string
    subjectMin: string; messageMin: string
  }
}
