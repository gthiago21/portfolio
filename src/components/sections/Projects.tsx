import { lazy, Suspense, useState } from 'react'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { filterProjects } from '@/data/projects'
import { useLanguage } from '@/hooks/useLanguage'
import type { Project, ProjectCategory } from '@/types'

const ProjectModal = lazy(() => import('@/components/ui/ProjectModal'))

export function Projects() {
  const { t } = useLanguage()
  const [category, setCategory] = useState<'all' | ProjectCategory>('all')
  const [selected, setSelected] = useState<Project | null>(null)
  const visible = filterProjects(category)
  const categories: Array<{ value: 'all' | ProjectCategory; label: string }> = [
    { value: 'all', label: t.all }, { value: 'fullstack', label: t.fullstack }, { value: 'mobile', label: t.mobile }, { value: 'backend', label: t.backend }
  ]
  return <section id="projects" aria-labelledby="projects-heading" className="section-spacing"><Container>
    <SectionHeading id="projects-heading" eyebrow={t.nav.projects} title={t.projectsTitle} /><p className="mb-8 max-w-[65ch] text-muted">{t.projectsIntro}</p>
    <div role="group" aria-label={t.projectsTitle} className="mb-6 flex flex-wrap gap-2">{categories.map((item) => <button key={item.value} type="button" aria-pressed={category === item.value} onClick={() => setCategory(item.value)} className={`min-h-11 rounded-lg border px-4 text-sm font-semibold ${category === item.value ? 'border-accent bg-accent text-white' : 'border-border bg-surface text-muted'}`}>{item.label}</button>)}</div>
    <p aria-live="polite" className="mb-5 text-sm text-muted">{visible.length} {t.found}</p>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{visible.map((project) => <ProjectCard key={project.id} project={project} onOpen={setSelected} />)}</div>
  </Container>
  {selected && <Suspense fallback={null}><ProjectModal project={selected} onClose={() => setSelected(null)} /></Suspense>}
  </section>
}
