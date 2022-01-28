import { NavLink } from 'react-router-dom'

// SVG Components
import { BigFish } from '../../assets/error404/BigFish'
import { FishingBoat } from '../../assets/error404/FishingBoat'
import { FishingPier } from '../../assets/error404/FishingPier'
import { Jellyfish } from '../../assets/error404/Jellyfish'
import { SmallFish } from '../../assets/error404/SmallFish'
import { ScubaDiver } from '../../assets/error404/ScubaDiver'
import { Diamond } from '../../assets/error404/Diamond'

// components
import { Header } from '../Header/Header'
import Ocean from './Ocean/Ocean'

import './error404.scss'

export const Error404 = () => (
  <div className='error-404'>
    <Header />
    <div className="error-404__wrapper">

      <Ocean />

      <span className='error-404__wrapper__error'>404</span>

      <div className="error-404__wrapper__fishing-pier"><FishingPier /></div>
      <div className="error-404__wrapper__fishing-boat"><FishingBoat /></div>
      
      <div className="error-404__wrapper__big-fish"><BigFish /></div>
      <div className="error-404__wrapper__small-fish"><SmallFish /></div>
      
      <div className="error-404__wrapper__jellyfish"><Jellyfish /></div>
      <div className="error-404__wrapper__jellyfish"><Jellyfish /></div>

      <div className="error-404__wrapper__scuba-diver"><ScubaDiver /></div>
      <div className="error-404__wrapper__diamond">
        <span><Diamond /></span>
        <span><Diamond /></span>
        <span><Diamond /></span>
      </div>

      <div className="error-404__wrapper__text">
        Vous vous êtes trompé de chemin : <br />
        Prenez cette <NavLink to='/' className='error-404__home-link'>bouée de sauvetage</NavLink > pour retourner à bon port !
      </div>
    </div>
  </div>
)
