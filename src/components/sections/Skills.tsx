import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { skillCategories } from '@/data/skills'
import { useLanguage } from '@/hooks/useLanguage'

export function Skills() {
  const { language, t } = useLanguage()
  return <section id="skills" aria-labelledby="skills-heading" className="section-spacing"><Container><SectionHeading id="skills-heading" eyebrow={t.nav.skills} title={t.skillsTitle} /><div className="grid gap-5 md:grid-cols-2">
    {skillCategories.map((category) => <Card key={category.id} className="p-6"><h3 className="mb-4 text-lg font-bold">{category.title[language]}</h3><div className="flex flex-wrap gap-2">{category.items.map((item) => <Badge key={item}>{item}</Badge>)}</div></Card>)}
  </div></Container></section>
}
