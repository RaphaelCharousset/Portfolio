import { IconAnimation } from './IconAnimation/IconAnimation'
import './section.scss'

interface Props {
  title: string;
  content: string;
  icons: JSX.Element[]
}

export const Section = ({title, content, icons}: Props) => {
  return (
    <section className='stack-section'>
      <div className="stack-section__wrapper">
        <div className="stack-section__icons">
          {icons.map(
            (icon, index: number) =>
              <IconAnimation
                key={index}
                index={index}
                icon={icon}
                nbIcons={icons.length}
              />
          )}
        </div>
        <h3 className='stack-section__title'>{title}</h3>
        <p>{content}</p>

      </div>
    </section>
  )
}
