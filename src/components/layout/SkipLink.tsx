import { useLanguage } from '@/hooks/useLanguage'

export function SkipLink() {
  const { t } = useLanguage()
  return <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent-strong focus:px-4 focus:py-3 focus:text-white" href="#main-content">{t.skipLink}</a>
}
