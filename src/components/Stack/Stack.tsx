import { ReactLogo } from '../../assets/frontend/ReactLogo'
import { ReduxLogo } from '../../assets/frontend/ReduxLogo'
import { SassLogo } from '../../assets/frontend/SassLogo'
import { TypescriptLogo } from '../../assets/frontend/TypescriptLogo'
import { JavascriptLogo } from '../../assets/frontend/JavascriptLogo'
import { Section } from './Section/Section'
import './stack.scss'
import { NodeLogo } from '../../assets/backend/NodeLogo'
import { ExpressLogo } from '../../assets/backend/ExpressLogo'
import { PsqlLogo } from '../../assets/backend/PsqlLogo'
import { FirebaseLogo } from '../../assets/backend/FirebaseLogo'
import { StackSection } from '../../interfaces/StackSection'

export const Stack = () => {
  const { logoColor, logoSize } : { logoColor: string, logoSize: string } = {
    logoColor: '#ED7D3A',
    logoSize: '50px'
  }

  const frontSection: StackSection = {
    title: 'Frontend ReactJS',
    content: "Après un coup de coeur pour le JavaScript vanilla, j'ai décidé d'évoluer dans l'écosystème React pour créer des applications dynamiques. Je suis également friand de l'utilisation du préprocesseur SASS.",
    icons: [
      <JavascriptLogo color={logoColor} size={logoSize}/>,
      <ReactLogo color={logoColor} size={logoSize}/>,
      <ReduxLogo color={logoColor} size={logoSize}/>,
      <TypescriptLogo color={logoColor} size={logoSize}/>,
      <SassLogo color={logoColor} size={logoSize}/>
    ] 
  }

  const backSection: StackSection = {
    title: 'Backend NodeJS',
    content: "Quel plaisir d'utiliser le JavaScript également côté backend ! J'utilise le framework Express. J'utilise postgreSQL ou Firebase pour mes bases de données.",
    icons: [
      <NodeLogo color={logoColor} size={logoSize}/>,
      <ExpressLogo color={logoColor} size={logoSize}/>,
      <PsqlLogo color={logoColor} size={logoSize}/>,
      <FirebaseLogo color={logoColor} size={logoSize}/>
    ]
  }

  return (
    <section className='stack'>
      <h2 className='stack__title'>Mes compétences</h2>
      
      <div className="stack__sections">
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
