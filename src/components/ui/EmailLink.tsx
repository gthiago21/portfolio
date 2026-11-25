import { Mail } from 'lucide-react'
import { Toast } from '@/components/ui/Toast'
import { site } from '@/data/site'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { useLanguage } from '@/hooks/useLanguage'

interface EmailLinkProps {
  className: string
  showAddress?: boolean
  ariaLabel?: string
  title?: string
}

export function EmailLink({ className, showAddress = false, ariaLabel, title }: EmailLinkProps) {
  const { language, t } = useLanguage()
  const { copied, copyFailed, copy } = useCopyToClipboard()

  return <>
    <a
      href={`mailto:${site.email}`}
      onClick={() => void copy(site.email)}
      aria-label={ariaLabel ?? (language === 'pt-BR' ? 'Enviar e-mail' : 'Send email')}
      title={title}
      className={className}
    >
      <Mail size={20} aria-hidden="true" />
      {showAddress && <span>{site.email}</span>}
    </a>
    <Toast message={copied ? t.emailCopied : t.emailCopyFailed} visible={copied || copyFailed} />
  </>
}
