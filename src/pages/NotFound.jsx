import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="error-page">
      <h1 className="error-code">404</h1>
      <p>Page not found.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </section>
  )
}
