import { NavLink } from 'react-router-dom'
import './nav.scss'

export const Nav = () => (
  <nav className='header-nav'>
    <ul className='header-nav-ul'>
      <li className='header-nav-ul__list'>
        <NavLink
          to="/projects"
          className='header-nav-ul__list__projects'  
        >
          Mes réalisations
        </NavLink>
      </li>
      <li className='header-nav-ul__list'>
        <NavLink
          to="/contact"
          className='header-nav-ul__list__contact'  
        >
          <span className="header-nav__contact-button"></span>
          Me contacter
        </NavLink>
      </li>
    </ul>
  </nav>
)
