import { createContext, useContext, useEffect, useState } from 'react'
import type { Language } from '@/types'
import { translations } from '@/data/translations'

export function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem('portfolio:lang')
    if (saved === 'pt-BR' || saved === 'en-US') return saved
  } catch { /* storage unavailable */ }
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en-US'
}

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: typeof translations[Language]
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguageState() {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)
  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'pt-BR'
      ? 'Thiago Garcia | Desenvolvedor Full Stack'
      : 'Thiago Garcia | Full Stack Developer'
  }, [language])
  const setLanguage = (next: Language) => {
    setLanguageState(next)
    try { localStorage.setItem('portfolio:lang', next) } catch { /* storage unavailable */ }
  }
  return { language, setLanguage, t: translations[language] }
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageContext')
  return context
}
