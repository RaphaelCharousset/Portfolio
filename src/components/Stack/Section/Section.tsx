import { SectionTS } from '../../../interfaces/Section'
import { IconAnimation } from './IconAnimation/IconAnimation'

import './section.scss'

export const Section = ({title, content, icons}: SectionTS) => (
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
