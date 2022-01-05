import { Fragment, JSXElementConstructor } from 'react'
import './sections.scss'

export interface Props {
  title: string;
  content: string;
  icons: JSX.Element[]
}

export const Section = ({title, content, icons}: Props) => {
  return (
    <section className='stack-section'>
      <div className="stack-section__icons">
        {icons.map(
          (icon, index) => <Fragment key={index}>{icon}</Fragment>
        )}
      </div>
      <h3 className='stack-section__title'>{title}</h3>
      <p>{content}</p>
    </section>
  )
}
