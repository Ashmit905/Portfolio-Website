import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  return (
    <>
      <ScrollReveal>
      <section>
        <h2 className="section-title">Get in Touch</h2>
        <div className="card contact-card">
          <p className="contact-intro">
            I'm open to new opportunities and collaborations. Feel free to reach out via any of the channels below.
          </p>
          <div className="contact-links">
            <a href="mailto:reachashmitsharma@gmail.com" className="contact-item">
              <span className="contact-label">Email</span>
              <span className="contact-value">reachashmitsharma@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/reachashmit/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/reachashmit</span>
            </a>
            <a href="https://github.com/Ashmit905" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/Ashmit905</span>
            </a>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </>
  )
}
