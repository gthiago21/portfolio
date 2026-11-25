import { Moon, Sun } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import type { Theme } from '@/types'

export function ThemeToggle({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) {
  const { t } = useLanguage()
  const label = theme === 'dark' ? t.themeToLight : t.themeToDark
  return <button type="button" onClick={toggleTheme} aria-label={label} aria-pressed={theme === 'dark'} className="flex size-11 items-center justify-center rounded-lg border border-border text-muted hover:text-text focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg">{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
}
