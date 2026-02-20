import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <div className={`theme-switcher ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="theme-trigger"
        onClick={() => setOpen(!open)}
        title="Change theme"
        aria-label="Change color theme"
      >
        <span className="theme-icon">✦</span>
        <span className="theme-current">{themes[theme]?.emoji} {themes[theme]?.name}</span>
      </button>
      <div className="theme-dropdown">
        {Object.entries(themes).map(([key, t]) => (
          <button
            key={key}
            type="button"
            className={`theme-option ${theme === key ? 'active' : ''}`}
            onClick={() => {
              setTheme(key)
              setOpen(false)
            }}
          >
            <span>{t.emoji}</span>
            <span>{t.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
