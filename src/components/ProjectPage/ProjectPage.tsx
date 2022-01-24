import { useEffect, useRef } from 'react'
import { allProjects } from '../../data'
import { observer } from '../../functions/appearOnScroll'
import { SingleProject } from '../ProjectsHome/SingleProject/SingleProject'
import './projectpage.scss'

export const ProjectPage = () => {
  const announcer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    allProjects.sort((a, b) => b.year - a.year)

    if (announcer.current) {
      observer.observe(announcer.current)
    }
  }, [])

  return (
    <section className='project-page'>
      
      <header className="project-page__header">
        <h2 className="project-page__header__title">
          Mes réalisations
        </h2>

        <p className=' reveal-bottom' ref={announcer}>
          Voici une sélection de projets auxquels j'ai participé.
        </p>
      </header>

      <div className="project-page__container">
        {allProjects.map((project, idx) => (
          <SingleProject key={idx} {...project} />
        ))}
      </div>

    </section>
  )
}
