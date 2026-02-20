import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function LightsaberBlade({ vertical = false, length = '100%', className = '' }) {
  const { theme } = useTheme()
  const [ignited, setIgnited] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIgnited(true), 100)
    return () => clearTimeout(t)
  }, [])

  if (theme !== 'vader') return null

  return (
    <div
      className={`lightsaber-blade ${vertical ? 'vertical' : 'horizontal'} ${ignited ? 'ignited' : ''} ${className}`}
      style={{ [vertical ? 'height' : 'width']: length }}
      aria-hidden="true"
    >
      <div className="lightsaber-core" />
      <div className="lightsaber-glow" />
      <div className="lightsaber-flicker" />
    </div>
  )
}
