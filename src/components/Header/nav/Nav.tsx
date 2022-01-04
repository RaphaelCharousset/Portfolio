import { NavLink } from 'react-router-dom'
import './nav.scss'

export const Nav = () => (
  <nav className='header-nav'>
    <ul>
      <li>
        <NavLink to="/projects">Réalisations</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Me contacter</NavLink>
      </li>
    </ul>
  </nav>
)
