import { WaveOne } from '../../assets/waves/waveOne'
import './aboutme.scss'

export const AboutMe = () => {
  const opquastLink = 'https://directory.opquast.com/fr/certificat/G68027/'

  return (
    <section className='about'>
      <h2 className='about__title'>À propos</h2>

      <div className="about__container">
        <p className="about__container__testament">
          Vous êtes à la recherche de quelqu'un prêt à relever des défis ? <br /> Quelqu'un d'autonome mais pour qui le travail d'équipe est essentiel ? <br /> Quelqu'un qui code pour délivrer une expérience utilisateur de qualité ? <br /> Vous êtes tombé sur la bonne personne ! <br />
          Je suis diplômé du titre professionnel Développeur Web et Web Mobile depuis 2021 et d'une <a href={opquastLink} target='_blank'>certification Opquast</a> en Maitrise de la qualité en projet web (niveau Avancé). 
        </p>

        <p className='about__container__conviction'>
          J'aime concevoir le développeur web comme le technicien qui permet d'accéder facilement à des informations. Construire des sites internet, c'est relier les humains entre eux.
        </p>

        <p className='about__container__goal'>
          Je cherche à mettre en pratique mes compétences, continuer de grandir et partager mon dynamisme au quotidien.
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
