import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { Mail } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactLink } from '@/components/ui/ContactLink'
import { Toast } from '@/components/ui/Toast'
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from '@/components/ui/icons'
import { site } from '@/data/site'
import { useLanguage } from '@/hooks/useLanguage'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { useContactForm } from '@/hooks/useContactForm'
import { validateField, type ContactField, type ContactValues, type ContactErrors } from '@/lib/validators'

const initialValues: ContactValues = { name: '', email: '', subject: '', message: '', honeypot: '' }

export function Contact() {
  const { language, t } = useLanguage()
  const [values, setValues] = useState<ContactValues>(initialValues)
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({})
  const [errors, setErrors] = useState<ContactErrors>({})
  const refs = useRef<Partial<Record<ContactField, HTMLInputElement | HTMLTextAreaElement>>>({})
  const { status, submit } = useContactForm()
  const { copied, copyFailed, copy } = useCopyToClipboard()

  const errorText = (code: string | undefined) => {
    if (!code) return ''
    if (code === 'required') return t.form.requiredName
    if (code === 'email') return t.form.invalidEmail
    if (code === 'subject') return t.form.subjectMin
    if (code === 'message') return t.form.messageMin
    if (code === 'name') return language === 'pt-BR' ? 'Use pelo menos 2 caracteres.' : 'Use at least 2 characters.'
    if (code === 'nameMax') return language === 'pt-BR' ? 'Máximo de 80 caracteres.' : 'Maximum 80 characters.'
    if (code === 'subjectMax') return language === 'pt-BR' ? 'Máximo de 120 caracteres.' : 'Maximum 120 characters.'
    if (code === 'messageMax') return language === 'pt-BR' ? 'Máximo de 2000 caracteres.' : 'Maximum 2000 characters.'
    return ''
  }

  const update = (field: ContactField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (touched[field]) setErrors((current) => ({ ...current, [field]: validateField(field, value) }))
  }
  const blur = (field: ContactField) => {
    setTouched((current) => ({ ...current, [field]: true }))
    setErrors((current) => ({ ...current, [field]: validateField(field, values[field]) }))
  }
  const submitForm = async (event: FormEvent) => {
    event.preventDefault()
    const fields: ContactField[] = ['name', 'email', 'subject', 'message']
    const nextErrors: ContactErrors = {}
    fields.forEach((field) => { const error = validateField(field, values[field]); if (error) nextErrors[field] = error })
    setErrors(nextErrors)
    setTouched({ name: true, email: true, subject: true, message: true })
    const first = fields.find((field) => nextErrors[field])
    if (first) { refs.current[first]?.focus(); return }
    const sent = await submit(values)
    if (sent) setValues(initialValues)
  }
  const onChange = (field: ContactField) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => update(field, event.target.value)
  const whatsappUrl = site.whatsAppNumber
    ? `https://wa.me/${site.whatsAppNumber}?text=${encodeURIComponent(language === 'pt-BR' ? 'Olá, Thiago! Gostaria de conversar sobre uma oportunidade.' : 'Hello, Thiago! I would like to discuss an opportunity.')}`
    : ''

  const fieldProps = (field: ContactField) => ({
    id: field,
    name: field,
    value: values[field],
    'aria-invalid': Boolean(errors[field]),
    'aria-describedby': errors[field] ? `${field}-error` : undefined,
    onBlur: () => blur(field),
  })

  return <section id="contact" aria-labelledby="contact-heading" className="section-spacing"><Container><SectionHeading id="contact-heading" eyebrow={t.nav.contact} title={t.contactTitle} /><p className="mb-8 max-w-[65ch] text-muted">{t.contactIntro}</p>
    <div className="grid items-start gap-8 md:grid-cols-[1fr_1fr]">
      <form onSubmit={submitForm} noValidate className="space-y-5">
        {(['name', 'email', 'subject'] as ContactField[]).map((field) => <div key={field}>
          <label htmlFor={field} className="mb-2 block text-sm font-semibold">{field === 'name' ? t.form.name : field === 'email' ? t.form.email : t.form.subject}</label>
          <input ref={(node) => { refs.current[field] = node ?? undefined }} {...fieldProps(field)} onChange={onChange(field)} type={field === 'email' ? 'email' : 'text'} autoComplete={field === 'name' ? 'name' : field === 'email' ? 'email' : 'off'} maxLength={field === 'name' ? 80 : 120} className="min-h-11 w-full rounded-lg border border-border bg-surface px-4 py-3" />
          {errors[field] && <p id={`${field}-error`} className="mt-2 text-sm text-red-600 dark:text-red-400">{errorText(errors[field])}</p>}
        </div>)}
        <div><label htmlFor="message" className="mb-2 block text-sm font-semibold">{t.form.message}</label><textarea ref={(node) => { refs.current.message = node ?? undefined }} {...fieldProps('message')} onChange={onChange('message')} rows={6} maxLength={2000} className="w-full rounded-lg border border-border bg-surface px-4 py-3" />{errors.message && <p id="message-error" className="mt-2 text-sm text-red-600 dark:text-red-400">{errorText(errors.message)}</p>}</div>
        <input id="botcheck" name="botcheck" type="checkbox" checked={Boolean(values.honeypot)} onChange={(event) => setValues((current) => ({ ...current, honeypot: event.target.checked ? 'true' : '' }))} className="hidden" tabIndex={-1} aria-hidden="true" />
        <button type="submit" disabled={status === 'loading'} className="min-h-11 rounded-lg bg-accent-strong px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60">{status === 'loading' ? t.form.sending : t.form.send}</button>
        {status === 'success' && <p role="status" aria-live="polite" className="rounded-lg border border-border bg-surface p-4 text-sm">{t.form.success}</p>}
        {status === 'error' && <p role="alert" className="rounded-lg border border-red-500/50 bg-surface p-4 text-sm">{t.form.error}</p>}
      </form>
      <aside className="rounded-2xl border border-border bg-surface p-6">
        <h3 className="text-lg font-bold">{t.contactDirectPrompt}</h3>
        <div className="mt-4 flex flex-col gap-3">
          <ContactLink href={whatsappUrl} icon={<WhatsAppIcon className="size-5" />} label={t.form.whatsapp} external />
          <ContactLink
            href={`mailto:${site.email}`}
            icon={<Mail size={20} />}
            label={t.contactEmailLabel}
            description={site.email}
            onClick={() => void copy(site.email)}
          />
          <ContactLink href={site.linkedinUrl} icon={<LinkedInIcon className="size-5" />} label={t.contactLinkedInLabel} external />
          <ContactLink href={site.githubUrl} icon={<GitHubIcon className="size-5" />} label={t.contactGitHubLabel} external />
        </div>
        <p className="mt-4 text-sm text-muted">{t.contactAvailability}</p>
      </aside>
    </div>
    <Toast message={copied ? t.emailCopied : t.emailCopyFailed} visible={copied || copyFailed} />
  </Container></section>
}
