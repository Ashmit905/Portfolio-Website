import { useLocation } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import ParticleCanvas from './ParticleCanvas'
import SpaceBackground from './SpaceBackground'
import StarfighterCanvas from './StarfighterCanvas'
import ThemeSwitcher from './ThemeSwitcher'

export default function Layout({ children }) {
  const location = useLocation()

  return (
    <>
      <SpaceBackground />
      <StarfighterCanvas />
      <ParticleCanvas />
      <ThemeSwitcher />
      <Header />
      <Nav currentPath={location.pathname} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
