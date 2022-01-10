import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './projectshome.scss'
import { projects } from './../../data/index';
import { SingleProject } from './SingleProject/SingleProject';

export const ProjectsHome = () => {
  const [count, setCount] = useState(0)
  projects.sort((a, b) => b.year - a.year)

  return (
    <section className='projects'>
      <h2 className='projects__title'>Mes réalisations</h2>

      <div className="projects__container">
        {projects.map((project, index) => 
            <SingleProject key={index} {...project} />
        )}
      </div>

      <div className="projects__buttons">
        {/* buttons for each unshown projects ? */}
        {/* onclick, translateX */}
      </div>
      <NavLink to="/projects">tous les projets</NavLink>
    </section>
  )
}
