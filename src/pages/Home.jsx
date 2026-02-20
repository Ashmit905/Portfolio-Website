import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import LightsaberBlade from '../components/LightsaberBlade'

export default function Home() {
  return (
    <>
      <section className="hero">
        <ScrollReveal>
          <div className="hero-avatar">
            <img
              src="https://i.ibb.co/8g7KSzN7/unnamed-5.jpg"
              alt="Ashmit Sharma"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2>Hi, I'm Ashmit</h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="hero-intro">
            Software Engineering graduate from the University of Guelph. I build full‑stack applications,
            optimize APIs, and love turning complex problems into clean, scalable solutions.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/experience" className="btn btn-secondary">Experience</Link>
          </div>
        </ScrollReveal>
      </section>

      <LightsaberBlade />

      <ScrollReveal delay={100}>
        <section className="highlights">
          <h3 className="section-title">Highlights</h3>
          <div className="highlight-grid">
            <div className="highlight-card">
              <span className="highlight-num">15%</span>
              <p>Increased client engagement via responsive React/Angular interfaces at Pivot Technologies</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-num">20%</span>
              <p>Reduced API latency through query optimization in Flask and Node.js</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-badge">MLH Winner</span>
              <p>Best Use of Gemini API for Demeter — IoT smart-garden system</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <LightsaberBlade />

      <ScrollReveal delay={100}>
        <section className="philosophy">
          <h3 className="section-title">Development Philosophy</h3>
          <ul className="philosophy-list">
            <li><strong>User‑centric design</strong> — Every feature starts with "How does this help the user?"</li>
            <li><strong>Modular architecture</strong> — Components that evolve independently and scale</li>
            <li><strong>Performance first</strong> — Optimize before scaling, measure and iterate</li>
          </ul>
        </section>
      </ScrollReveal>
    </>
  )
}
