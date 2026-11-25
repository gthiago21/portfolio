import { Badge } from './Badge'
import { Button } from './Button'
import type { Project } from '@/types'
import { useLanguage } from '@/hooks/useLanguage'

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  const { language, t } = useLanguage()
  const title = project.title[language]
  return <article className="overflow-hidden rounded-2xl border border-border bg-surface">
    <img src={project.cover.src} alt={project.cover.alt[language]} width={project.cover.width} height={project.cover.height} loading="lazy" decoding="async" className="aspect-video w-full object-cover" />
    <div className="p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">{project.featured && project.badge && <Badge>{project.badge[language]}</Badge>}{project.isPlaceholder && <Badge>{t.placeholderBadge}</Badge>}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-muted">{project.summary[language]}</p>
      <div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((item) => <Badge key={item}>{item}</Badge>)}</div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Button type="button" onClick={() => onOpen(project)} aria-label={`${t.viewDetails}: ${title}`}>{t.viewDetails}</Button>
        {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg border border-border px-4 py-3 text-sm font-semibold" aria-label={`${t.code}: ${title}`}>{t.code}</a>}
        {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg px-4 py-3 text-sm font-semibold text-accent" aria-label={`${t.demo}: ${title}`}>{t.demo}</a>}
      </div>
    </div>
  </article>
}
