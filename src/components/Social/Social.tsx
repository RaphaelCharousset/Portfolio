import { useEffect, useRef } from 'react'
import { observer } from '../../functions/appearOnScroll'
import { CodingameLogo } from '../../assets/socialLogo/CodingameLogo'
import { GithubLogo } from '../../assets/socialLogo/GithubLogo'
import { LinkedinLogo } from '../../assets/socialLogo/LinkedinLogo'
import { MailLogo } from '../../assets/socialLogo/MailLogo'
import { PhoneLogo } from '../../assets/socialLogo/PhoneLogo'

import './social.scss'
import { NavLink } from 'react-router-dom'

export const Social = () => {
  const contacts = useRef<HTMLDivElement>(null)
  const websites = useRef<HTMLDivElement>(null)
  const credits = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contacts.current) {
      observer.observe(contacts.current)
    }
    if (websites.current) {
      observer.observe(websites.current)
    }
    if (credits.current) {
      observer.observe(credits.current)
    }
  }, [])
  
  return (
    <section className='social'>
      <h2 className='social__title'>Gardons le contact !</h2>

      <div className="social__contacts reveal-bottom" ref={contacts}>
        <div className='social__contacts__item'>
          <PhoneLogo />
          06.76.89.64.96
        </div>
        <a href='mailto:raphael.charousset@gmail.com' className='social__contacts__item'>
          <MailLogo />
          raphael.charousset@gmail.com
        </a>
      </div>

      <div className="social__websites reveal-bottom" ref={websites}>
        <div className="social__websites__items">
          <a href='https://www.linkedin.com/in/raphaelcharousset/' target='blanck'>
            <LinkedinLogo />
          </a>
          <a href='https://github.com/RaphaelCharousset' target='blanck'>
            <GithubLogo />
          </a>
          <a href='https://www.codingame.com/profile/924d621de97f78b756a0e1cefdc5f1e76161924' target='blanck'>
            <CodingameLogo />
          </a>
        </div>
        <NavLink
          to="/contact"
          className='header-nav-ul__list__contact'  
        >
          <span className="header-nav__contact-button"></span>
          Me contacter
        </NavLink>
      </div>

    </section>
  )
}
