import { projects } from './../../data/index';
import { SingleProject } from './SingleProject/SingleProject';
import { createRef, MouseEvent, useState, useEffect } from 'react';
import './projectshome.scss'

export const ProjectsHome = () => {
  useEffect(() => {
    projects.sort((a, b) => b.year - a.year)
  }, [])
  
  const gap = 36
  const ref = createRef()
  const [position, setPosition] = useState(0)
  const [selected, setSelected] = useState(0)
  
  const handleClick: (e: MouseEvent<HTMLButtonElement>) => void = (e) => {
    const width: number = ref.current.offsetWidth
    const index: number = e.target.value
    setPosition(index * (width + gap))
    setSelected(index)
  }

  return (
    <section className='projects'>
      <h2 className='projects__title'>Mes réalisations</h2>

      <div className="projects__container">
        <div
          className="projects__container__slider"
          style={{ 
            transform: `translateX(-${position}px)`,
            gap: `${gap}px`
          }}
        >
          {projects.map((project, index) => 
              <SingleProject
                key={index} 
                {...project}
                ref={index === 0 ? ref : null}
              />
          )}
        </div>
      </div>

      <div className="projects__buttons">
        {projects.map((_, index) => (
          index < (projects.length - 1) &&
          <button
            value={index}
            key={index}
            onClick={handleClick}
            className={index == selected ? 'selected' : 'unselected'}
          />
        ))}
      </div>
      
      {/* <NavLink to="/projects">tous les projets</NavLink> */}
    </section>
  )
}
