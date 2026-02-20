import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

// Stylized starfighter silhouettes - angular, geometric (aesthetic-inspired)
function drawStarfighter(ctx, x, y, scale, opacity) {
  ctx.save()
  ctx.translate(x, y)

  const s = scale
  ctx.strokeStyle = `rgba(139, 21, 56, ${opacity * 1.2})`
  ctx.lineWidth = 1.5
  ctx.shadowColor = 'rgba(139, 21, 56, 0.6)'
  ctx.shadowBlur = 12

  // Main body - angular cockpit + wings
  ctx.beginPath()
  ctx.moveTo(0, -s * 6)
  ctx.lineTo(s * 3, s * 2)
  ctx.lineTo(s * 2, s * 5)
  ctx.lineTo(0, s * 3)
  ctx.lineTo(-s * 2, s * 5)
  ctx.lineTo(-s * 3, s * 2)
  ctx.closePath()
  ctx.stroke()

  // Engine glow
  ctx.beginPath()
  ctx.arc(0, s * 4, s * 0.8, 0, Math.PI * 2)
  ctx.fillStyle = `rgba(139, 21, 56, ${opacity * 0.5})`
  ctx.fill()

  ctx.restore()
}

export default function StarfighterCanvas() {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const isVader = theme === 'vader'
    const canvas = canvasRef.current
    if (!canvas || !isVader) return

    const ctx = canvas.getContext('2d')
    let animationId
    const fighters = []
    const count = 8

    for (let i = 0; i < count; i++) {
      fighters.push({
        x: Math.random() * (window.innerWidth + 200) - 100,
        y: Math.random() * window.innerHeight,
        vx: -1.2 - Math.random() * 1.5,
        scale: 1.5 + Math.random() * 5,
        opacity: 0.2 + Math.random() * 0.4,
      })
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      fighters.forEach((f) => {
        f.x += f.vx
        if (f.x < -100) {
          f.x = w + 100
          f.y = Math.random() * h
        }
        // Engine trail
        const trailLen = 20 + f.scale * 8
        const grad = ctx.createLinearGradient(f.x, f.y, f.x + trailLen, f.y)
        grad.addColorStop(0, `rgba(139, 21, 56, ${f.opacity * 0.4})`)
        grad.addColorStop(1, 'rgba(139, 21, 56, 0)')
        ctx.save()
        ctx.translate(f.x, f.y)
        ctx.fillStyle = grad
        ctx.fillRect(0, -1, trailLen, 2)
        ctx.restore()
        drawStarfighter(ctx, f.x, f.y, f.scale, f.opacity)
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

  if (theme !== 'vader') return null

  return <canvas ref={canvasRef} className="starfighter-canvas" aria-hidden="true" />
}
