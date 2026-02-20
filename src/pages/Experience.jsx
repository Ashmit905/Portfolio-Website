import ScrollReveal from '../components/ScrollReveal'
import LightsaberBlade from '../components/LightsaberBlade'

const EXPERIENCE = [
  {
    role: 'Undergraduate Research Assistant',
    company: 'University of Guelph',
    location: 'Guelph, Ontario',
    period: 'Jan. 2026 – Present',
    type: 'Course Credit',
    bullets: [
      'Developing quantitative survey methodologies to gather functional requirements from 100+ undergraduate CS students.',
      'Coordinating with a cross-functional team of faculty and developers to define the technical scope and architectural roadmap for a mobile-first wellness app.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Pivot Technologies Inc.',
    location: 'Toronto, Ontario',
    period: 'May 2025 – Aug. 2025',
    bullets: [
      'Engineered responsive frontend interfaces using React and Angular, improving cross-platform compatibility and driving a 15% increase in client engagement.',
      'Optimized high-performance RESTful APIs in Flask and Node.js by refining database queries, effectively reducing data retrieval latency by 20%.',
    ],
  },
  {
    role: 'STEAM Director',
    company: 'City of Brampton',
    location: 'Brampton, Ontario',
    period: 'Sept. 2024 – Present',
    bullets: [
      'Directing a team of 10+ instructors to deliver Python and Robotics curriculum, increasing program enrollment by 25%.',
      'Streamlined staff recruitment and training processes, improving team operational efficiency by 15%.',
    ],
  },
]

export default function Experience() {
  return (
    <>
      <section>
        <h2 className="section-title">Technical Experience</h2>
        {EXPERIENCE.map((exp, i) => (
          <ScrollReveal key={i} delay={i * 80}>
          <div className="card experience-card">
            <div className="exp-header">
              <div>
                <h3>{exp.role}</h3>
                <p className="exp-company">{exp.company} · {exp.location}</p>
              </div>
              <span className="exp-period">{exp.period}</span>
            </div>
            {exp.type && <span className="exp-type">{exp.type}</span>}
            <ul className="exp-bullets">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
          </ScrollReveal>
        ))}
      </section>

      <LightsaberBlade />

      <ScrollReveal>
      <section>
        <h2 className="section-title">Education</h2>
        <div className="card">
          <div className="exp-header">
            <div>
              <h3>Bachelor of Computing in Software Engineering</h3>
              <p className="exp-company">University of Guelph · Guelph, Ontario</p>
            </div>
            <span className="exp-period">Sept. 2022 – Apr. 2026</span>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </>
  )
}
