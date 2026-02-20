import { createContext, useContext, useEffect } from 'react'

const VADER_VARS = {
  '--bg-primary': '#050506',
  '--bg-secondary': '#0a0a0c',
  '--bg-card': 'rgba(12, 11, 13, 0.94)',
  '--accent': '#8b1538',
  '--accent-dim': 'rgba(139, 21, 56, 0.18)',
  '--accent-glow': 'rgba(139, 21, 56, 0.45)',
  '--text': '#e8e6e3',
  '--text-muted': '#8f8a84',
  '--border': 'rgba(139, 21, 56, 0.22)',
  '--accent-hover': '#a61e4d',
}

const ThemeContext = createContext({ theme: 'vader' })

export function ThemeProvider({ children }) {
  useEffect(() => {
    const root = document.documentElement
    Object.entries(VADER_VARS).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
    root.setAttribute('data-theme', 'vader')
  }, [])

  return (
    <ThemeContext.Provider value={{ theme: 'vader' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  return ctx || { theme: 'vader' }
}
