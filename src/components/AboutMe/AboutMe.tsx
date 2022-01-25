import { useEffect, useRef } from 'react'
import { observer } from '../../functions/appearOnScroll';

import './aboutme.scss'

export const AboutMe = () => {
  const opquastLink = 'https://directory.opquast.com/fr/certificat/G68027/'

  const testament = useRef<HTMLParagraphElement>(null)
  const certification = useRef<HTMLParagraphElement>(null)
  const conviction = useRef<HTMLParagraphElement>(null)
  const goal = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (testament.current) {
      observer.observe(testament.current)
    }
    if (certification.current) {
      observer.observe(certification.current)
    }
    if (conviction.current) {
      observer.observe(conviction.current)
    }
    if (goal.current) {
      observer.observe(goal.current)
    }
  }, [])

  return (
    <section className='about'>
      <h2 className='about__title'>À propos</h2>

      <div className="about__container">
        <p className="about__container__testament reveal-left" ref={testament}>
          Vous êtes à la recherche de quelqu'un prêt à <em>relever des défis</em> ? <br /> 
          Quelqu'un d'<em>autonome</em>, mais pour qui le <em>travail d'équipe</em> est essentiel ? <br /> 
          Quelqu'un qui code pour délivrer une <em>expérience utilisateur de qualité</em> ? <br /> 
          Vous êtes tombé sur <em>la bonne personne</em> ! <br />
        </p>

        <p className="about__container__certification reveal-right" ref={certification}>
        Je suis diplômé du <em>titre professionnel Développeur Web et Web Mobile</em> depuis 2021 et d'une <a href={opquastLink} target='_blank'>certification Opquast</a> en Maitrise de la qualité en projet web (niveau Avancé). 
        </p>

        <p className='about__container__conviction reveal-left' ref={conviction}>
          J'aime concevoir le développeur web comme le technicien qui permet d'accéder facilement à des informations. <em>Construire des sites internet, c'est relier les humains entre eux.</em>
        </p>

        <p className='about__container__goal reveal-right' ref={goal}>
          Je cherche à <em>mettre en pratique mes compétences</em>, continuer de <em>grandir</em> et <em>partager mon dynamisme</em> au quotidien.
        </p>
      </div>

      <div className="about__clouds">
        <div className="about__clouds__item cloudx1"></div>
        <div className="about__clouds__item cloudx2"></div>
        <div className="about__clouds__item cloudx3"></div>
        <div className="about__clouds__item cloudx4"></div>
        <div className="about__clouds__item cloudx5"></div>
      </div>

    </section>
  )
}
