import './socialitem.scss'

const SocialItem = (
  { social, href, content, logo }: { social: string, href: string, content: string, logo: JSX.Element }
) => (
  <a
    className="social-item"
    href={href}
    target='blanck'
  >
    <strong className='social-item__social'>
      {social}
    </strong>
    <span className='social-item__content'>
      {content}
    </span>
    <span className='social-item__logo'>
      {logo}
    </span>
  </a>
)

export default SocialItem
