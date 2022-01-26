import { useEffect, useRef } from 'react'

// components
import { Cursor } from '../Cursor/Cursor'

// functions
import { observer } from '../../functions/appearOnScroll'

import './hero.scss'

export const Hero = () => {
  const partOne = useRef<HTMLParagraphElement>(null)
  const partTwo = useRef<HTMLParagraphElement>(null)
  const partThree = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (partOne.current) {
      observer.observe(partOne.current)
    }
    if (partTwo.current) {
      observer.observe(partTwo.current)
    }
    if (partThree.current) {
      observer.observe(partThree.current)
    }
  }, [])

  return (
    <section className='hero'>
      <Cursor />
      <div className="hero__text">
        <div className="hero__text__part1 reveal-hero-one" ref={partOne}>
          Bonjour, je m'appelle
        </div>

        <div className="hero__text__part2 reveal-hero-two" ref={partTwo}>
          <h1>Raphaël <br /> Charousset</h1>

          <div className="hero__animation">
            <div className="hero__animation__wrapper">
              <h2>Raphaël</h2>
              <h2>Raphaël</h2>
              <h2>Charousset</h2>
              <h2>Charousset</h2>
            </div>
          </div>
        </div>

        <div className="hero__text__part3 reveal-hero-three" ref={partThree}>
          Je suis <strong>Développeur Web Fullstack JavaScript</strong>
        </div>
      </div>
    </section>
  )
}
