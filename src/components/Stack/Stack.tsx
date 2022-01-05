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

export const Stack = () => {
  const frontSection = {
    title: 'Frontend ReactJS',
    content: "Après un coup de coeur pour le JavaScript vanilla, j'ai décidé d'évoluer dans l'écosystème React pour créer des applications dynamiques. Je suis également friand de l'utilisation du préprocesseur SASS.",
    icons: undefined // find svg of stack'icons with color change
  }

  const backSection = {
    title: 'Backend NodeJS',
    content: "Quel plaisir d'utiliser le JavaScript également côté backend ! J'utilise le framework Express. J'utilise postgreSQL ou Firebase pour mes bases de données.",
    icons: undefined
  }

  const { logoColor, logoSize } = { logoColor: '#ED7D3A', logoSize: '50px' }

  return (
    <section className='stack'>
      <h2 className='stack__title'>Mes compétences</h2>
      <ReactLogo color={logoColor} size={logoSize}/>
      <TypescriptLogo color={logoColor} size={logoSize}/>
      <SassLogo color={logoColor} size={logoSize}/>
      <ReduxLogo color={logoColor} size={logoSize}/>
      <JavascriptLogo color={logoColor} size={logoSize}/>
      <NodeLogo color={logoColor} size={logoSize}/>
      <ExpressLogo color={logoColor} size={logoSize}/>
      <PsqlLogo color={logoColor} size={logoSize}/>
      <FirebaseLogo color={logoColor} size={logoSize}/>
      
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
