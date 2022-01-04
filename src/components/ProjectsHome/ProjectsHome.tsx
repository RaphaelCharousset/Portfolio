import { useState } from 'react'
import './projectshome.scss'

export const ProjectsHome = () => {
  const [count, setCount] = useState(0)

  // arrows or buttons, not both

  return (
    <section className='projects'>
      <div className="projects__arrow arrow-left">
        {/* onclick, count-- */}
        arrow left
        </div>
      {/* map on array of projects from data */}
      {/* show from count to count + 2 or less (depends on screen width) */}
      <div className="projects__arrow arrow-right">  
        {/* onclick, count++ */}
        arrow right
      </div>
      <div className="projects__buttons">
        {/* buttons for each project ? or for project - shown projects ? */}
      </div>
    </section>
  )
}
