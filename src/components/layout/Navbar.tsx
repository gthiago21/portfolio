import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from './Container'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LanguageToggle } from '@/components/ui/LanguageToggle'
import { useLanguage } from '@/hooks/useLanguage'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import type { Theme } from '@/types'

const ids = ['home', 'about', 'projects', 'skills', 'experience', 'contact']

export function Navbar({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) {
  const { t } = useLanguage()
  const active = useScrollSpy(ids)
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const labels = [t.nav.home, t.nav.about, t.nav.projects, t.nav.skills, t.nav.experience, t.nav.contact]
  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); buttonRef.current?.focus() }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [open])
  return <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/95 backdrop-blur">
    <Container>
      <div className="flex h-16 items-center justify-between gap-3">
        <a href="#home" className="rounded-lg text-lg font-bold focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg" aria-label={t.nav.home}>TG</a>
        <nav aria-label={t.nav.home} className="hidden items-center gap-1 md:flex">
          {ids.map((id, index) => <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined} className={`rounded-lg px-3 py-2 text-sm font-semibold ${active === id ? 'text-accent' : 'text-muted hover:text-text'} focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg`}>{labels[index]}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} /><LanguageToggle />
          <button ref={buttonRef} type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? t.menuClose : t.menuOpen} onClick={() => setOpen((value) => !value)} className="flex size-11 items-center justify-center rounded-lg border border-border md:hidden">{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && <nav id="mobile-menu" aria-label={t.nav.home} className="grid pb-3 md:hidden">{ids.map((id, index) => <a key={id} href={`#${id}`} onClick={() => { setOpen(false); buttonRef.current?.focus() }} className="rounded-lg px-3 py-3 text-muted hover:bg-surface hover:text-text">{labels[index]}</a>)}</nav>}
    </Container>
  </header>
}
