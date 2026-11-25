import { describe, expect, it } from 'vitest'
import { validateField, validateContact } from './validators'

describe('validateField', () => {
  it('validates required and minimum values', () => {
    expect(validateField('name', 'A')).toBe('name')
    expect(validateField('name', 'Ana')).toBeUndefined()
    expect(validateField('email', 'ana@example.com')).toBeUndefined()
    expect(validateField('email', 'invalid')).toBe('email')
  })
  it('validates subject and message limits', () => {
    expect(validateField('subject', 'Oi')).toBe('subject')
    expect(validateField('message', 'Texto curto')).toBe('message')
  })
})

describe('validateContact', () => {
  it('returns four errors for an empty form', () => {
    expect(validateContact({ name: '', email: '', subject: '', message: '', honeypot: '' })).toEqual({
      name: 'required', email: 'required', subject: 'required', message: 'required',
    })
  })
})
