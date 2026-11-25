import { useState } from 'react'
import type { ContactStatus } from '@/types'
import { validateContact, type ContactValues } from '@/lib/validators'

export function useContactForm() {
  const [status, setStatus] = useState<ContactStatus>('idle')
  const submit = async (values: ContactValues) => {
    if (validateContact(values).name || validateContact(values).email || validateContact(values).subject || validateContact(values).message) return false
    if (values.honeypot) return true
    const accessKey = import.meta.env.VITE_CONTACT_ACCESS_KEY
    if (!accessKey) {
      if (import.meta.env.DEV) console.warn('VITE_CONTACT_ACCESS_KEY não está configurada.')
      setStatus('error')
      return false
    }
    setStatus('loading')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          botcheck: values.honeypot,
        }),
      })
      const data: unknown = await response.json()
      const succeeded = typeof data === 'object' && data !== null && 'success' in data && data.success === true
      if (!response.ok || !succeeded) {
        if (import.meta.env.DEV) console.error('Web3Forms submission failed:', { status: response.status, response: data })
        setStatus('error')
        return false
      }
      setStatus('success')
      return true
    } catch (error) {
      if (import.meta.env.DEV) console.error('Web3Forms request failed:', error)
      setStatus('error')
      return false
    }
  }
  return { status, submit, setStatus }
}
