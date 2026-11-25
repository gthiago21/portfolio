import { describe, expect, it } from 'vitest'
import { getInitialLanguage } from './useLanguage'

describe('language preference', () => {
  it('falls back to the navigator language', () => {
    expect(['pt-BR', 'en-US']).toContain(getInitialLanguage())
  })
})
