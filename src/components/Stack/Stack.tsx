import { BackEnd } from './BackEnd/BackEnd'
import { FrontEnd } from './Frontend/FrontEnd'
import './stack.scss'

export const Stack = () => {
  return (
    <section className='stack'>
      <h2>Mes compéteces</h2>
      <FrontEnd />
      <BackEnd />
    </section>
  )
}
