import { useEffect, useRef } from 'react'

import { observer } from '../../functions/appearOnScroll'

// SVG Components
import { ReactLogo } from '../../assets/stackLogo/frontend/ReactLogo'
import { ReduxLogo } from '../../assets/stackLogo/frontend/ReduxLogo'
import { SassLogo } from '../../assets/stackLogo/frontend/SassLogo'
import { TypescriptLogo } from '../../assets/stackLogo/frontend/TypescriptLogo'
import { JavascriptLogo } from '../../assets/stackLogo/frontend/JavascriptLogo'
import { NodeLogo } from '../../assets/stackLogo/backend/NodeLogo'
import { ExpressLogo } from '../../assets/stackLogo/backend/ExpressLogo'
import { PsqlLogo } from '../../assets/stackLogo/backend/PsqlLogo'
import { FirebaseLogo } from '../../assets/stackLogo/backend/FirebaseLogo'

// Components
import { Section } from './Section/Section'
import { StackSection } from '../../interfaces/StackSection'

import './stack.scss'

export const Stack = () => {
  const logoColor = '#ED7D3A'
  const logoSize = '50px'

  const frontSection: StackSection = {
    title: 'Frontend ReactJS',
    content: "Après un coup de coeur pour le JavaScript vanilla, j'ai décidé d'évoluer dans l'écosystème React pour créer des applications dynamiques. J'utilise volontiers le préprocesseur SASS pour ajouter des feuilles de style.",
    icons: [
      <JavascriptLogo color={logoColor} size={logoSize}/>,
      <ReactLogo color={logoColor} size={logoSize}/>,
      <ReduxLogo color={logoColor} size={logoSize}/>,
      <TypescriptLogo color={logoColor} size={logoSize}/>,
      <SassLogo color={logoColor} size={logoSize}/>
    ] 
  }
  // avoid blanck in marquee
  frontSection.icons = frontSection.icons.concat(frontSection.icons)

  const backSection: StackSection = {
    title: 'Backend NodeJS',
    content: "J'utilise JavaScript pour mon backend avec NodeJs et le framework Express. Je peux construire une base de données avec postgreSQL ou Firebase.",
    icons: [
      <NodeLogo color={logoColor} size={logoSize}/>,
      <ExpressLogo color={logoColor} size={logoSize}/>,
      <PsqlLogo color={logoColor} size={logoSize}/>,
      <FirebaseLogo color={logoColor} size={logoSize}/>
    ]
  }
  // avoid blanck in marquee
  backSection.icons = backSection.icons.concat(backSection.icons)

  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (container.current) {
      observer.observe(container.current)
    }
  }, [])

  return (
    <section className='stack'>
      <h2 className='stack__title'>Mes compétences</h2>
      
      <div className="stack__sections reveal-bottom" ref={container}>
        <Section
          title={frontSection.title}
          content={frontSection.content}
          icons={frontSection.icons}
        />

        <Section 
          title={backSection.title}
          content={backSection.content}
          icons={backSection.icons}

        />
      </div>
      
    </section>
  )
}
