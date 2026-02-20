import ScrollReveal from '../components/ScrollReveal'

const SKILLS = {
  'Languages': ['Python', 'C/C++', 'Java', 'JavaScript', 'HTML/CSS', 'R', 'Dart', 'SQL', 'Kotlin'],
  'Frameworks & Libraries': ['React', 'Angular', 'Vue', 'Node.js', 'Flask', 'FastAPI', 'Flutter', 'jQuery', 'Selenium', 'Vite'],
  'Tools & Platforms': ['Git', 'Docker', 'MongoDB', 'Firebase', 'Supabase', 'SQLite', 'Jira', 'Postman', 'Unity', 'AWS (Lambda, EC2, RDS, CloudWatch, S3)'],
}

const HOBBIES = [
  { name: 'Hiking', desc: 'Nature walks and exploring trails' },
  { name: 'Basketball', desc: 'Staying active on the court' },
  { name: 'Fitness', desc: 'Gym and personal wellness' },
]

export default function About() {
  return (
    <>
      <ScrollReveal>
      <section>
        <div className="about-profile">
          <img
            src="https://i.ibb.co/8g7KSzN7/unnamed-5.jpg"
            alt="Ashmit Sharma"
            className="about-avatar"
          />
          <div>
            <h2>Ashmit Sharma</h2>
            <p className="about-tagline">Software Engineer · Problem Solver · Tech Enthusiast</p>
          </div>
        </div>
        <div className="about-bio card">
          <p>
            My passion for technology began at 16 when I wrote my first "Hello, World!" program. That simple
            exercise sparked a curiosity that grew into a deep love for solving complex problems through code.
          </p>
          <p>
            Now a Software Engineering graduate from the University of Guelph, I'm focused on building software
            that makes a real impact — creating solutions that are efficient, scalable, and user-friendly. From
            full‑stack apps and RESTful APIs to IoT systems and CI/CD pipelines, I enjoy turning ideas into
            production-ready products.
          </p>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
      <section>
        <h3 className="section-title">Technical Skills</h3>
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="card skill-card">
              <h4>{category}</h4>
              <div className="skill-tags">
                {items.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
      <section>
        <h3 className="section-title">Beyond Code</h3>
        <div className="hobbies-grid">
          {HOBBIES.map((h) => (
            <div key={h.name} className="card hobby-card">
              <h4>{h.name}</h4>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>
    </>
  )
}
