import { useEffect, useRef } from 'react'
import { observer } from '../../functions/appearOnScroll'
import './hero.scss'

export const Hero = () => {
  const name = 'Raphaël Charousset'

  
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
        <div className="hero__text">
          <div className="hero__text__part1 reveal-hero-one" ref={partOne}>
            Bonjour, je m'appelle
          </div>

          <h1 className="hero__text__part2 reveal-hero-two" ref={partTwo}>
            {name.split('').map((letter, idx) => (
              <span className='hero__letter' key={idx}>
                {letter}
              </span>
            ))}
          </h1>

          <div className="hero__text__part3 reveal-hero-three" ref={partThree}>
            Je suis Développeur Web Fullstack JavaScript
          </div>
        </div>
    </section>
  )
}
