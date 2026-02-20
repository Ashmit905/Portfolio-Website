export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href="mailto:reachashmitsharma@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/reachashmit/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Ashmit905" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <p>© {year} Ashmit Sharma</p>
    </footer>
  )
}
