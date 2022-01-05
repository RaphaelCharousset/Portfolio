import './sections.scss'

export interface Props {
  title: string;
  content: string;
  icons: string[] | undefined
}

export const Section = ({title, content, icons}: Props) => {
  return (
    <section className='stack-section'>
      <div className="stack-section__icons">
        {icons?.map(icon => (
          <div className="stack-section__icons__item">icon</div>
        ))}
      </div>
      <h3 className='stack-section__title'>{title}</h3>
      <p>{content}</p>
    </section>
  )
}
