import { useState, useEffect } from 'react'
import GlowText from './GlowText'

export default function Header() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="site-header">
      <div className="header-mesh" />
      <div className={`header-content ${mounted ? 'mounted' : ''}`}>
        <GlowText tag="h1">Ashmit Sharma</GlowText>
        <p className="tagline">Software Engineer · Full Stack · Cloud</p>
      </div>
    </header>
  )
}
