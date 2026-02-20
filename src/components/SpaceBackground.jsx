import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const STAR_COUNT = 150

export default function SpaceBackground() {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const isSpace = theme === 'vader' || theme === 'starwars'
    const canvas = canvasRef.current
    if (!canvas || !isSpace) return

    const ctx = canvas.getContext('2d')
    let animationId
    const stars = []

    const accent = theme === 'vader' ? { r: 139, g: 21, b: 56 } : { r: 255, g: 215, b: 0 }

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * 1,
        y: Math.random(),
        z: Math.random(),
        size: 0.5 + Math.random() * 1.5,
      })
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.fillStyle = 'transparent'
      ctx.clearRect(0, 0, w, h)

      const time = Date.now() * 0.001

      stars.forEach((s) => {
        const px = (s.x - 0.5) * w * (1 + s.z * 0.5)
        const py = (s.y - 0.5) * h * (1 + s.z * 0.5)
        const drift = (time * (0.2 + s.z * 0.3)) % 1
        const x = ((px + drift * w * 0.1) % (w * 1.2)) - w * 0.1
        const y = ((py + drift * h * 0.05) % (h * 1.2)) - h * 0.1

        const twinkle = 0.4 + 0.6 * Math.sin(time * 2 + s.z * 10) ** 2
        const size = s.size * (0.8 + s.z * 0.4)

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${accent.r}, ${accent.g}, ${accent.b}, ${twinkle * 0.8})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [theme])

  if (theme !== 'vader' && theme !== 'starwars') return null

  return <canvas ref={canvasRef} className="space-background-canvas" aria-hidden="true" />
}
