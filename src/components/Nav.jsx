import { Link } from 'react-router-dom'

const LINKS = [
  { path: '/', label: 'Home' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Nav({ currentPath }) {
  return (
    <nav className="site-nav">
      {LINKS.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`nav-link ${currentPath === path ? 'active' : ''}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
