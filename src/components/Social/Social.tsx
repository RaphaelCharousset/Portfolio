import { useEffect, useRef } from 'react'
import { observer } from '../../functions/appearOnScroll'
import { CodingameLogo } from '../../assets/socialLogo/CodingameLogo'
import { GithubLogo } from '../../assets/socialLogo/GithubLogo'
import { LinkedinLogo } from '../../assets/socialLogo/LinkedinLogo'
import { MailLogo } from '../../assets/socialLogo/MailLogo'
import { PhoneLogo } from '../../assets/socialLogo/PhoneLogo'
import SocialItem from './SocialItem/SocialItem'

import './social.scss'

export const Social = () => {
  const contacts = useRef<HTMLParagraphElement>(null)
  const websites = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (contacts.current) {
      observer.observe(contacts.current)
    }
    if (websites.current) {
      observer.observe(websites.current)
    }
  }, [])
  
  return (
    <section className='social'>
      <h2 className='social__title'>Gardons le contact !</h2>

      <div className="social__contacts reveal-bottom" ref={contacts}>
      <SocialItem
          social='Téléphone'
          href='tel:0676896496'
          content='06.76.98.64.96'
          logo={<PhoneLogo />}
        />

        <SocialItem
          social='Email'
          href='mailto:raphael.charousset@gmail.com'
          content='raphael.charousset@gmail.com'
          logo={<MailLogo />}
        />
      </div>

      <div className="social__websites reveal-bottom" ref={websites}>
        <SocialItem
          social='LinkedIn'
          href='https://www.linkedin.com/in/raphaelcharousset/'
          content='linkedin.com/in/raphaelcharousset'
          logo={<LinkedinLogo />}
        />
        <SocialItem
          social='Github'
          href='https://github.com/RaphaelCharousset'
          content='github.com/RaphaelCharousset'
          logo={<GithubLogo />}
        />
        <SocialItem
          social='CodinGame'
          href='https://www.codingame.com/profile/924d621de97f78b756a0e1cefdc5f1e76161924'
          content='Un Clash of Code ?'
          logo={<CodingameLogo />}
        />
      </div>

    </section>
  )
}
