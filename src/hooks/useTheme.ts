import { useEffect, useState } from 'react'
import type { Theme } from '@/types'

function savedTheme(): Theme | null {
  try {
    const value = localStorage.getItem('portfolio:theme')
    return value === 'light' || value === 'dark' ? value : null
  } catch { return null }
}

export function getInitialTheme(): Theme {
  return savedTheme() ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [manual, setManual] = useState(() => savedTheme() !== null)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#09090B' : '#FFFFFF')
  }, [theme])

  useEffect(() => {
    if (manual) return
    const media = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = () => setTheme(media.matches ? 'light' : 'dark')
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [manual])

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    setManual(true)
    try { localStorage.setItem('portfolio:theme', next) } catch { /* storage unavailable */ }
  }

  return { theme, toggleTheme }
}
