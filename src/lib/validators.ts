export interface ContactValues {
  name: string
  email: string
  subject: string
  message: string
  honeypot: string
}

export type ContactField = 'name' | 'email' | 'subject' | 'message'
export type ContactErrors = Partial<Record<ContactField, string>>

export function validateField(field: ContactField, value: string): string | undefined {
  const trimmed = value.trim()
  if (field === 'name') {
    if (!trimmed) return 'required'
    if (trimmed.length < 2) return 'name'
    if (trimmed.length > 80) return 'nameMax'
  }
  if (field === 'email') {
    if (!trimmed) return 'required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || trimmed.length > 254) return 'email'
  }
  if (field === 'subject') {
    if (!trimmed) return 'required'
    if (trimmed.length < 3) return 'subject'
    if (trimmed.length > 120) return 'subjectMax'
  }
  if (field === 'message') {
    if (!trimmed) return 'required'
    if (trimmed.length < 20) return 'message'
    if (trimmed.length > 2000) return 'messageMax'
  }
  return undefined
}

export function validateContact(values: ContactValues): ContactErrors {
  const fields: ContactField[] = ['name', 'email', 'subject', 'message']
  const errors: ContactErrors = {}
  for (const field of fields) {
    const error = validateField(field, values[field])
    if (error) errors[field] = error
  }
  return errors
}
