import { useEffect } from 'react'
import { allProjects } from '../../data'
import { SingleProject } from '../ProjectsHome/SingleProject/SingleProject'
import './projectpage.scss'

export const ProjectPage = () => {
  useEffect(() => {
    allProjects.sort((a, b) => b.year - a.year)
  }, [])

  return (
    <section className='project-page'>
      
      <header className="project-page__header">
        <h2 className="project-page__header__title">
          Mes réalisations
        </h2>

        <p>
          Voici une sélection des projets auxquels j'ai participé.
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
