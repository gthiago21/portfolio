import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { experience } from '@/data/experience'
import { useLanguage } from '@/hooks/useLanguage'

export function Experience() {
  const { language, t } = useLanguage()
  return <section id="experience" aria-labelledby="experience-heading" className="section-spacing"><Container><SectionHeading id="experience-heading" eyebrow={t.nav.experience} title={t.experienceTitle} /><ol className="grid gap-5">
    {experience.map((item) => <li key={`${item.organization[language]}-${item.period[language]}`} className="relative rounded-2xl border border-border bg-surface p-6">
      <div className="mb-3 flex flex-wrap items-center gap-2"><h3 className="text-xl font-bold">{item.role[language]}</h3>{item.isPlaceholder && <Badge>{t.placeholderBadge}</Badge>}</div>
      <p className="font-semibold text-accent">{item.organization[language]}</p><p className="mt-1 text-sm text-muted">{item.period[language]}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">{item.points[language].map((point) => <li key={point}>{point}</li>)}</ul>
    </li>)}
  </ol></Container></section>
}
