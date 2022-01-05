import { Link } from 'react-router-dom'
import './social.scss'

export const Social = () => {
  return (
    <section className='social'>
      <h2 className='social__title'>Gardons le contact !</h2>
      <div>Phone</div>
      <div>Mail</div>
      <div>Linkedin</div>
      <div>Github</div>
      <div>
        <a href='https://www.codingame.com/profile/924d621de97f78b756a0e1cefdc5f1e76161924' target='blanck'>
          Un clash of Code ?
        </a>
      </div>
    </section>
  )
}
