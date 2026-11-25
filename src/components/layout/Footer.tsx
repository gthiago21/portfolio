import { ArrowUp } from 'lucide-react'
import { Container } from './Container'
import { EmailLink } from '@/components/ui/EmailLink'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/icons'
import { site } from '@/data/site'
import { useLanguage } from '@/hooks/useLanguage'

export function Footer() {
  const { t } = useLanguage()
  return <footer className="border-t border-border py-8"><Container><div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
    <p className="text-sm text-muted">© {new Date().getFullYear()} {site.name}</p>
    <div className="flex items-center gap-2">
      <a href={site.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex size-11 items-center justify-center rounded-lg text-muted hover:text-text"><GitHubIcon className="size-5" /></a>
      <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex size-11 items-center justify-center rounded-lg text-muted hover:text-text"><LinkedInIcon className="size-5" /></a>
      <EmailLink className="flex size-11 items-center justify-center rounded-lg text-muted hover:text-text focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg" />
      <a href="#home" className="ml-2 inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-accent">{t.backTop}<ArrowUp size={16} /></a>
    </div>
  </div></Container></footer>
}
