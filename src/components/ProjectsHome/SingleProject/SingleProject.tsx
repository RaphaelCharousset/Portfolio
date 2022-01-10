import { Project } from './../../../interfaces/Project';
import './singleProject.scss'

export const SingleProject = (
  {name, year, coverImg, coverImgAlt, stack, ghLink, urlLink, description}: Project
) => {
  return (
    <article className="single-project">
      <header className="single-project__header">
        <div className="single-project__header__img">
          <img src={coverImg} alt={coverImgAlt} />
        </div>
        <div className="single-project__header__stack">
          {stack.map((item, index) => <span key={index}>{item}</span>)}
        </div>
      </header>

      <section className="single-project__container">
        <h3 className="single-project__container__title">
          <strong>{name}</strong> - <span>{year}</span>
        </h3>
        <p>{description}</p>
      </section>

      <footer className='single-project__footer'>
        {ghLink}
        {urlLink}
      </footer>
    </article>
  )
}
