import { memo } from 'react'
import { Mail } from '../../../assets/contact/Mail'
import { MailBox } from '../../../assets/contact/MailBox'

import './mailanimation.scss'

const MailAnimation = memo(() => {
  return (
    <div className='mail-animation'>
      <div className="mail-animation__mailbox">
        <MailBox color='white' />
      </div>
      <div className="mail-animation__mail">
        <Mail color='white' />
      </div>
    </div>
  )
})

export default MailAnimation
