import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './projectshome.scss'

export const ProjectsHome = () => {
  const [count, setCount] = useState(0)

  return (
    <section className='projects'>
      <h2 className='projects__title'>Mes réalisations</h2>

      {/* map on array of selected projects from data */}

      <div className="projects__buttons">
        {/* buttons for each unshown projects ? */}
        {/* onclick, translateX */}
      </div>
      <NavLink to="/projects">tous les projets</NavLink>
    </section>
  )
}
