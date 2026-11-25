import { useLanguage } from '@/hooks/useLanguage'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  return <button type="button" onClick={() => setLanguage(language === 'pt-BR' ? 'en-US' : 'pt-BR')} aria-label={language === 'pt-BR' ? 'Switch to English' : 'Mudar para português'} className="min-h-11 rounded-lg border border-border px-3 text-sm font-bold text-muted hover:text-text focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg">{language === 'pt-BR' ? 'EN' : 'PT'}</button>
}
