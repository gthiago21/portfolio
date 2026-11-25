import type { MouseEventHandler, ReactNode } from 'react'
import { useLanguage } from '@/hooks/useLanguage'

interface ContactLinkProps {
  href: string
  icon: ReactNode
  label: string
  description?: string
  external?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function ContactLink({ href, icon, label, description, external = false, onClick }: ContactLinkProps) {
  const { t } = useLanguage()

  return <a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    onClick={onClick}
    className="flex w-full min-h-11 items-center gap-3 rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:bg-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
  >
    <span aria-hidden="true" className="shrink-0 text-accent">{icon}</span>
    <span className="min-w-0 text-left">
      <span className="block leading-5">{label}{external && <span className="sr-only"> ({t.opensInNewTab})</span>}</span>
      {description && <span className="block break-all text-xs font-normal text-muted">{description}</span>}
    </span>
  </a>
}
