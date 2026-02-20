import { createContext, useContext, useState, useEffect } from 'react'

export const THEMES = {
  starwars: {
    name: 'Star Wars',
    emoji: '⭐',
    vars: {
      '--bg-primary': '#050810',
      '--bg-secondary': '#0a0f1a',
      '--bg-card': 'rgba(15, 25, 45, 0.85)',
      '--accent': '#ffd700',
      '--accent-dim': 'rgba(255, 215, 0, 0.15)',
      '--accent-glow': 'rgba(255, 215, 0, 0.5)',
      '--text': '#f5f5dc',
      '--text-muted': '#c9b896',
      '--border': 'rgba(255, 215, 0, 0.3)',
      '--accent-hover': '#ffe44d',
    },
  },
  comic: {
    name: 'Comic Book',
    emoji: '💥',
    vars: {
      '--bg-primary': '#1a1a2e',
      '--bg-secondary': '#16213e',
      '--bg-card': 'rgba(22, 33, 62, 0.9)',
      '--accent': '#e94560',
      '--accent-dim': 'rgba(233, 69, 96, 0.2)',
      '--accent-glow': 'rgba(233, 69, 96, 0.6)',
      '--text': '#eaeaea',
      '--text-muted': '#a0a0a0',
      '--border': 'rgba(233, 69, 96, 0.5)',
      '--accent-hover': '#ff6b6b',
    },
  },
  cyberpunk: {
    name: 'Cyberpunk',
    emoji: ' neon',
    vars: {
      '--bg-primary': '#0a0e17',
      '--bg-secondary': '#111827',
      '--bg-card': 'rgba(17, 24, 39, 0.85)',
      '--accent': '#22d3ee',
      '--accent-dim': 'rgba(34, 211, 238, 0.15)',
      '--accent-glow': 'rgba(34, 211, 238, 0.5)',
      '--text': '#e2e8f0',
      '--text-muted': '#94a3b8',
      '--border': 'rgba(34, 211, 238, 0.3)',
      '--accent-hover': '#67e8f9',
    },
  },
  mandalorian: {
    name: 'Mandalorian',
    emoji: '🛡️',
    vars: {
      '--bg-primary': '#0d1117',
      '--bg-secondary': '#161b22',
      '--bg-card': 'rgba(22, 27, 34, 0.9)',
      '--accent': '#f97316',
      '--accent-dim': 'rgba(249, 115, 22, 0.2)',
      '--accent-glow': 'rgba(249, 115, 22, 0.5)',
      '--text': '#e6edf3',
      '--text-muted': '#8b949e',
      '--border': 'rgba(249, 115, 22, 0.4)',
      '--accent-hover': '#fb923c',
    },
  },
  jedi: {
    name: 'Jedi Temple',
    emoji: '⚔️',
    vars: {
      '--bg-primary': '#0c0a09',
      '--bg-secondary': '#1c1917',
      '--bg-card': 'rgba(28, 25, 23, 0.9)',
      '--accent': '#84cc16',
      '--accent-dim': 'rgba(132, 204, 22, 0.2)',
      '--accent-glow': 'rgba(132, 204, 22, 0.5)',
      '--text': '#fafaf9',
      '--text-muted': '#a8a29e',
      '--border': 'rgba(132, 204, 22, 0.4)',
      '--accent-hover': '#a3e635',
    },
  },
  vader: {
    name: 'Darth Vader',
    emoji: '🖤',
    vars: {
      '--bg-primary': '#050506',
      '--bg-secondary': '#0a0a0c',
      '--bg-card': 'rgba(15, 14, 16, 0.92)',
      '--accent': '#8b1538',
      '--accent-dim': 'rgba(139, 21, 56, 0.2)',
      '--accent-glow': 'rgba(139, 21, 56, 0.5)',
      '--text': '#e8e6e3',
      '--text-muted': '#9a9590',
      '--border': 'rgba(139, 21, 56, 0.25)',
      '--accent-hover': '#a61e4d',
    },
  },
}

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return THEMES[saved] ? saved : 'vader'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
    const t = THEMES[theme]
    if (t) {
      const root = document.documentElement
      Object.entries(t.vars).forEach(([key, value]) => {
        root.style.setProperty(key, value)
      })
      root.setAttribute('data-theme', theme)
    }
  }, [theme])

  const setTheme = (key) => {
    if (THEMES[key]) setThemeState(key)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
