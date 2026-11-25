import { ArrowDown } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { EmailLink } from '@/components/ui/EmailLink'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/icons'
import { site } from '@/data/site'
import { useLanguage } from '@/hooks/useLanguage'

export function Hero() {
  const { language, t } = useLanguage()
  return <section id="home" aria-labelledby="hero-title" className="pt-12 pb-8 md:pt-20 md:pb-12"><Container><div className="max-w-3xl">
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-sm font-semibold text-muted"><span className="size-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" />{t.availability}</div>
    <h1 id="hero-title" className="text-4xl font-bold tracking-tight sm:text-6xl">{t.heroTitle}</h1>
    <p className="mt-5 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{t.heroSubtitle}</p>
    <p className="mt-3 text-sm text-muted">{site.location[language]} · Remoto / Híbrido / Presencial</p>
    <div className="mt-8 flex flex-wrap gap-3">
      <a href="#projects" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-accent-strong px-5 py-3 font-semibold text-white focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg">{t.viewProjects}<ArrowDown size={16} /></a>
      <a href={site.resumeFiles[language]} download={site.resumeFileNames[language]} type="application/pdf" hrefLang={language} className="inline-flex min-h-11 items-center rounded-lg border border-border bg-surface px-5 py-3 font-semibold">{t.downloadResume}</a>
    </div>
    <div className="mt-6 flex flex-wrap items-center gap-2">
      <a href={site.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex size-11 items-center justify-center rounded-lg border border-border"><GitHubIcon className="size-5" /></a>
      <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex size-11 items-center justify-center rounded-lg border border-border"><LinkedInIcon className="size-5" /></a>
      <EmailLink
        className="flex size-11 items-center justify-center rounded-lg border border-border focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        ariaLabel={t.heroEmailLinkLabel}
        title={t.heroEmailLinkLabel}
      />
    </div>
  </div></Container></section>
}
