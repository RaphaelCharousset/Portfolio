import { createRef, MouseEvent, useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

import { projectsForHome } from './../../data/index'
import { SingleProject } from './SingleProject/SingleProject'

// Components
import { Arrow } from '../../assets/others/Arrow'
import { observer } from '../../functions/appearOnScroll'

import './projectshome.scss'

export const ProjectsHome = () => {
  const container = useRef<HTMLParagraphElement>(null)
  const buttons = useRef<HTMLParagraphElement>(null)
  const link = useRef<HTMLParagraphElement>(null)
  
  const gap = 36
  const ref = createRef<HTMLElement>()
  const [position, setPosition] = useState(0)
  const [selected, setSelected] = useState(0)
  
  const handleClick: (e: MouseEvent<HTMLButtonElement>) => void = (e) => {
    const width: number = ref.current?.offsetWidth || 0
    const index: number = e.target.value
    setPosition(index * (width + gap))
    setSelected(index)
  }
  
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
      if (ref.current) {
        observer.observe(ref.current)
      }
  
      projectsForHome.sort((a, b) => b.year - a.year)
    }, [])
  
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
