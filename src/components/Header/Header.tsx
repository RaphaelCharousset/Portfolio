import { NavLink } from "react-router-dom"
import { Nav } from "./nav/Nav"
import './header.scss'

export const Header = () => {
  return (
    <header className="header">
      <NavLink
        to='/'
        className='header__logo'
      >
        RC
      </NavLink>
      <Nav />
    </header>
  )
}
