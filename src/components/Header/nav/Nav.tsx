import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import './nav.scss'

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleClick = () => setIsOpen(value => !value)
  
  return (
    <nav className='header-nav'>
      <button
        onClick={handleClick}
        className='header-nav__hamburger'
      >
        <div className='header-nav__hamburger__wrapper'>
          <span className={isOpen ? 'hamburger-1' : ''}></span>
          <span className={isOpen ? 'hamburger-2' : ''}></span>
          <span className={isOpen ? 'hamburger-3' : ''}></span>
        </div>
      </button>

      <ul className={isOpen ? 'header-nav-ul visible' : 'header-nav-ul'}>
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
}
