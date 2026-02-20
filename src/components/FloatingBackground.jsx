import { useTheme } from '../context/ThemeContext'

const FLOATING_SHAPES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: 20 + Math.random() * 60,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 8 + Math.random() * 12,
  blur: 0,
  type: ['circle', 'square', 'triangle', 'hex'][Math.floor(Math.random() * 4)],
}))

const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: 0.5 + Math.random() * 1.5,
  opacity: 0.3 + Math.random() * 0.7,
  twinkle: 2 + Math.random() * 4,
}))

export default function FloatingBackground() {
  const { theme } = useTheme()
  const showStars = theme === 'starwars' || theme === 'sith'

  return (
    <div className="floating-bg" aria-hidden="true" data-theme={theme}>
      {/* Stars layer - space vibes for Star Wars & Vader */}
      {showStars && (
        <div className="stars-layer">
          {STARS.map((s) => (
            <div
              key={s.id}
              className="star"
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                opacity: s.opacity,
                animationDuration: `${s.twinkle}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Floating geometric shapes */}
      <div className="shapes-layer">
        {FLOATING_SHAPES.map((s) => (
          <div
            key={s.id}
            className={`float-shape float-shape--${s.type}`}
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Comic halftone overlay (subtle for comic theme) */}
      {theme === 'comic' && <div className="comic-overlay" />}
    </div>
  )
}
