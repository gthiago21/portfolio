import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { useLanguage } from '@/hooks/useLanguage'

export function About() {
  const { language, t } = useLanguage()
  const pt = language === 'pt-BR'
  const paragraphs = pt
    ? ['Sou Desenvolvedor Full Stack com atuação em aplicações web e mobile usando React, React Native, Expo, Node.js, Java 21 e Supabase.', 'Trabalho com acessibilidade digital na prática, aplicando critérios de inclusão em interfaces e processos. Minha formação combina tecnologia e marketing, o que amplia minha visão sobre produto e projeto.', 'Valorizo código claro, segurança, arquitetura consistente e colaboração em inglês em projetos voltados ao público internacional.']
    : ['I am a Full Stack Developer working on web and mobile applications with React, React Native, Expo, Node.js, Java 21 and Supabase.', 'I apply digital accessibility in practice, bringing inclusion criteria into interfaces and development processes. My education combines technology and marketing, strengthening my product and project perspective.', 'I value clear code, security, consistent architecture and English-language collaboration on projects for international audiences.']
  const cards = pt
    ? ['Formação em ADS no SENAC Palhoça e Tecnólogo em Marketing (EaD) — UniBF', 'Pensamento analítico voltado à resolução de problemas', 'Compromisso com código limpo e segurança', 'Atuação remota para cliente dos EUA, com comunicação profissional em inglês']
    : ['Degree in Systems Analysis and Development at SENAC Palhoça and Marketing Technologist degree (distance learning) at UniBF', 'Analytical thinking focused on problem solving', 'Commitment to clean code and security', 'Remote work for a US client, with professional communication in English']
  return <section id="about" aria-labelledby="about-heading" className="section-spacing"><Container><SectionHeading id="about-heading" eyebrow={t.nav.about} title={t.aboutTitle} /><div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
    <div className="space-y-5 text-muted">{paragraphs.map((paragraph) => <p key={paragraph} className="max-w-[65ch] leading-7">{paragraph}</p>)}</div>
    <div className="grid gap-3 sm:grid-cols-2">{cards.map((card) => <Card key={card} className="p-5"><p className="text-sm font-semibold leading-6">{card}</p></Card>)}</div>
  </div></Container></section>
}
