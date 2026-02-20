import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const PARTICLE_COUNT = 80
const CONNECT_DISTANCE = 120
const MOUSE_INFLUENCE = 0.02

function parseColorToRgb(cssValue) {
  const v = (cssValue || '#ff3333').trim()
  const hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(v)
  if (hex) {
    return { r: parseInt(hex[1], 16), g: parseInt(hex[2], 16), b: parseInt(hex[3], 16) }
  }
  const rgb = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(v)
  if (rgb) {
    return { r: +rgb[1], g: +rgb[2], b: +rgb[3] }
  }
  return { r: 255, g: 80, b: 80 }
}

export default function ParticleCanvas() {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    let mouse = { x: null, y: null }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const getAccentColor = () => {
      const root = getComputedStyle(document.documentElement)
      return root.getPropertyValue('--accent').trim() || '#ff3333'
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 1 + Math.random() * 1.5,
        })
      }
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    const animate = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      const accent = getAccentColor()
      const rgb = parseColorToRgb(accent)
      const alpha = theme === 'vader' ? 0.55 : 1

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 200) {
            const force = (200 - dist) / 200
            p.vx += (dx / dist) * force * MOUSE_INFLUENCE
            p.vy += (dy / dist) * force * MOUSE_INFLUENCE
          }
        }

        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.99
        p.vy *= 0.99

        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        p.x = Math.max(0, Math.min(w, p.x))
        p.y = Math.max(0, Math.min(h, p.y))

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECT_DISTANCE) {
            const lineAlpha = (1 - dist / CONNECT_DISTANCE) * 0.3 * alpha
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${lineAlpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.8 * alpha})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />
}
