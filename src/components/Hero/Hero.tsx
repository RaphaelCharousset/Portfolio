import './hero.scss'

export const Hero = () => {
  const name = 'Raphaël Charousset'

  return (
    <section className='hero'>
        <div className="hero__text">
          <div className="hero__text__part1">
            Bonjour, je m'appelle
          </div>

          <h1 className="hero__text__part2">
            {name.split('').map((letter, idx) => (
              <span className='hero__letter' key={idx}>
                {letter}
              </span>
            ))}
          </h1>

          <div className="hero__text__part3">
            Je suis Développeur Web Fullstack JavaScript
          </div>
        </div>
    </section>
  )
}
