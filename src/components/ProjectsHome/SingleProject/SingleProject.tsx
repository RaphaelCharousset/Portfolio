import { forwardRef } from 'react';
import Github from '../../../assets/websiteIcons/Github';
import Web from '../../../assets/websiteIcons/Web';
import { Project } from './../../../interfaces/Project';
import './singleProject.scss'

export const SingleProject = forwardRef((
  {name, year, coverImg, coverImgAlt, stack, ghLink, urlLink, description}: Project,
  ref
) => (
  <article className="single-project" ref={ref}>
    <header className="single-project__header">
      <div className="single-project__header__img">
        <img src={coverImg} alt={coverImgAlt} />
      </div>
    </header>

    <div className="single-project__main">
      <div className="single-project__main__stack">
        {stack.map((item, index) => <span key={index}>{item}</span>)}
      </div>
      <section className="single-project__container">
        <h3 className="single-project__container__title">
          <strong>{name}</strong> - <span>{year}</span>
        </h3>

        <p>{description}</p>
      </section>

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
))
