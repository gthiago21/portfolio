export function SectionHeading({ id, eyebrow, title }: { id: string; eyebrow?: string; title: string }) {
  return <div className="mb-8 md:mb-10"><p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">{eyebrow}</p><h2 id={id} className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2></div>
}
