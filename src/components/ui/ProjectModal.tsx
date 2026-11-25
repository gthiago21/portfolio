import { useRef } from 'react'
import { X } from 'lucide-react'
import type { Project } from '@/types'
import { useLanguage } from '@/hooks/useLanguage'
import { useFocusTrap } from '@/hooks/useFocusTrap'

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { language, t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  useFocusTrap(ref, true, onClose)
  return <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <div ref={ref} role="dialog" aria-modal="true" aria-labelledby="project-modal-title" className="flex max-h-[90vh] w-full max-w-3xl flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-bg p-5 shadow-2xl md:gap-6 md:p-6">
      <header className="sticky top-0 z-10 flex shrink-0 items-start justify-between gap-4 bg-bg">
        <h2 id="project-modal-title" className="min-w-0 text-2xl font-bold">{project.title[language]}</h2>
        <button type="button" onClick={onClose} aria-label={t.close} className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border"><X size={20} /></button>
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        <div className="flex flex-col gap-5 md:gap-6">
          <img src={project.cover.src} alt={project.cover.alt[language]} width={project.cover.width} height={project.cover.height} className="aspect-[21/9] max-h-48 w-full rounded-xl object-cover md:max-h-64" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            <section><h3 className="mb-2 text-lg font-bold">{t.context}</h3><p className="text-sm leading-7 text-muted">{project.context[language]}</p></section>
            <section><h3 className="mb-2 text-lg font-bold">{t.solution}</h3><p className="text-sm leading-7 text-muted">{project.solution[language]}</p></section>
          </div>
          <section><h3 className="mb-3 text-lg font-bold">{t.features}</h3><ul className="list-disc space-y-2 pl-5 text-sm text-muted">{project.features[language].map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
          {project.gallery.length > 0 && <section><h3 className="mb-3 text-lg font-bold">{t.gallery}</h3><div className="grid gap-3">{project.gallery.map((item) => <img key={item.src} src={item.src} alt={item.alt[language]} width={item.width} height={item.height} loading="lazy" decoding="async" className="aspect-video w-full rounded-xl object-cover" />)}</div></section>}
        </div>
      </div>
    </div>
  </div>
}
