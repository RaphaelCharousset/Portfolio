import { forwardRef, memo, useEffect, useRef } from 'react';

import { observer } from '../../../functions/appearOnScroll';
import { Project } from './../../../interfaces/Project';

import Github from '../../../assets/websiteIcons/Github';
import Web from '../../../assets/websiteIcons/Web';

import './singleProject.scss'

export const SingleProject = memo(forwardRef((
  {name, year, coverImg, coverImgAlt, stack, ghLink, urlLink, description}: Project,
  ref
) => {
  const announcer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (announcer.current) {
      observer.observe(announcer.current)
    }
  }, [])

  return (
    <article className="single-project reveal-bottom" ref={ref || announcer}>
      <header className="single-project__header">
        <div className="single-project__header__img">
          <img src={coverImg} alt={coverImgAlt} />
        </div>
      </header>

      <div className="single-project__main">
        <div className="single-project__main__stack">
          {stack.map((item, index) => <span key={index}>{item}</span>)}
          <h3 className="single-project__main__title">
            <strong>{name}</strong> - <span>{year}</span>
          </h3>
        </div>

        <div className='single-project__main__description'>{description}</div>

        <footer className='single-project__footer'>
          {ghLink && (
            <a href={ghLink} target='blanck'>
              <Github />
            </a>
          )}
          {urlLink && (
            <a href={urlLink} target='blanck'>
              <Web />
            </a>
          )}
        </footer>
      </div>
    </article>
  )
}))
