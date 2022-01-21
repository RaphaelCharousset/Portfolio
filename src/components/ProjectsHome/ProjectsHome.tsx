import { projectsForHome } from './../../data/index';
import { SingleProject } from './SingleProject/SingleProject';
import { createRef, MouseEvent, useState, useEffect, useRef } from 'react';
import './projectshome.scss'
import { NavLink } from 'react-router-dom';
import { Arrow } from '../../assets/others/Arrow';
import { observer } from '../../functions/appearOnScroll';

export const ProjectsHome = () => {
  
  const container = useRef<HTMLParagraphElement>(null)
  const buttons = useRef<HTMLParagraphElement>(null)
  const link = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (container.current) {
      observer.observe(container.current)
    }
    if (buttons.current) {
      observer.observe(buttons.current)
    }
    if (link.current) {
      observer.observe(link.current)
    }

    projectsForHome.sort((a, b) => b.year - a.year)
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

      <div className="projects__container reveal-bottom" ref={container}>
        <div
          className="projects__container__slider"
          style={{ 
            transform: `translateX(-${position}px)`,
            gap: `${gap}px`
          }}
        >
          {projectsForHome.map((project, index) => 
              <SingleProject
                key={index} 
                {...project}
                ref={index === 0 ? ref : null}
              />
          )}
        </div>
      </div>

      <div className="projects__buttons reveal-bottom" ref={buttons}>
        {projectsForHome.map((_, index) => (
          index < (projectsForHome.length) &&
          <button
            value={index}
            key={index}
            onClick={handleClick}
            className={index == selected ? 'selected' : 'unselected'}
          />
        ))}
      </div>
      
      <div className="projects__link reveal-bottom" ref={link}>
        <NavLink to="/projects" className='projects__link__item'>
          Tous les projets 
          <span><Arrow /></span>
        </NavLink>
      </div>
    </section>
  )
}
