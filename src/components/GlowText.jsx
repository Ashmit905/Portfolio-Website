import { useState, useEffect } from 'react'

export default function GlowText({ children, tag: Tag = 'span', className = '' }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Tag className={`glow-text ${mounted ? 'mounted' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
