import ScrollReveal from '../components/ScrollReveal'
import LightsaberBlade from '../components/LightsaberBlade'

const PROJECTS = [
  {
    name: 'FlowLensV2',
    tech: 'React · Vite · FastAPI · AWS S3 · Docker',
    period: 'Feb. 2026',
    link: 'https://github.com/Ashmit905/FlowLensV2',
    bullets: [
      'Built a fullstack linked-list visualizer and teaching app with tutorials, hints, and quiz using React/Vite frontend and FastAPI backend.',
      'Integrated AWS S3 for cloud save/load with presigned URL uploads, LocalStack for local S3 emulation, and IAM-scoped policies for secure access.',
    ],
  },
  {
    name: 'Demeter',
    tech: 'React · Flask · MongoDB · Arduino · Gemini API',
    period: 'May 2025',
    badge: 'MLH Hackathon Winner (Best Use of Gemini API)',
    link: 'https://github.com/Ashmit905',
    bullets: [
      'Engineered an IoT smart-garden system that captures real-time lux data via Arduino sensors and visualizes trends on a React dashboard.',
      'Integrated Google Gemini API to analyze environmental data and generate personalized planting advice, securing the Best Use of Gemini API award.',
    ],
  },
  {
    name: 'Economic Resilience Analysis Platform',
    tech: 'Java · Spring Boot · TypeScript · MariaDB · Docker · GitLab CI/CD',
    period: 'Jan. 2025 – Apr. 2025',
    link: 'https://github.com/Ashmit905',
    bullets: [
      'Architected microservices-based application using Spring Boot backend, TypeScript frontend, and Python ETL pipeline to analyze economic resilience indicators between Hamilton and Toronto.',
      'Designed RESTful APIs serving time-series economic data with optimized MariaDB queries and responsive TypeScript frontend for interactive data visualization.',
      'Containerized all services with Docker and implemented GitLab CI/CD pipeline with automated testing, reducing release cycles from hours to minutes.',
    ],
  },
]

export default function Projects() {
  return (
    <>
      <ScrollReveal>
      <h2 className="section-title">Technical Projects</h2>
      </ScrollReveal>
      <LightsaberBlade />
      {PROJECTS.map((proj, i) => (
        <ScrollReveal key={i} delay={i * 80}>
        <div className="card project-card">
          <div className="project-header">
            <div>
              <h3>{proj.name}</h3>
              <p className="project-tech">{proj.tech}</p>
            </div>
            <div className="project-meta">
              {proj.badge && <span className="project-badge">{proj.badge}</span>}
              <span className="project-period">{proj.period}</span>
            </div>
          </div>
          <ul className="project-bullets">
            {proj.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
          <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
            View Code →
          </a>
        </div>
        </ScrollReveal>
      ))}
    </>
  )
}
