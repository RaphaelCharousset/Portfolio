import { init, send } from '@emailjs/browser'
import { useEffect, useRef, useState } from "react"
import { emailJSInfos } from '../../secret/ids'

import Field from './Field/Field'
import Loader from '../Loader/Loader'
import MailAnimation from './MailAnimation/MailAnimation'

import './contact.scss'
import { observer } from '../../functions/appearOnScroll'
import { checkFields } from '../../functions/checkFields'
import { Cursor } from '../Cursor/Cursor'

const Contact = () => {
  const { serviceId,templateId,userId } = emailJSInfos
  init(userId)
  
  const [fullname, setFullname] = useState("")
  const [fullnameIsErr, setFullnameIsErr] = useState('')
  const [email, setEmail] = useState("")
  const [emailIsErr, setEmailIsErr] = useState('')
  const [message, setMessage] = useState("")
  const [messageIsErr, setMessageIsErr] = useState('')
  
  const [failed, setFailed] = useState({
    isFailed: false,
    message: "Une erreur s'est produite, veuillez réessayer.",
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [mailSent, setMailSent] = useState(false)
  
  const sendEmail : ( params: {[key:string] : string} ) => void = (templateParams) => {
    setIsLoading(true)

    send(serviceId, templateId, templateParams)
    .then((res) => {
      console.log('mail sent with success : ', res.status, res.text)
      setFullname("")
      setEmail("")
      setMessage("")
      setFailed(old => ({...old, isFailed: false}))
      setMailSent(true)
    })

    .catch(
      (err) => {
        console.error('Failed to send email : ', err)
        setFailed({
          isFailed: true,
          message: "Une erreur s'est produite, veuillez réessayer."
        })
      }
    )

    .finally(
      () => setIsLoading(false)
    )
  }
    
  const handleSubmit : (e: React.SyntheticEvent<HTMLFormElement, React.FormEvent<HTMLFormElement>>) => void = (e) => {
    e.preventDefault()
    
    const templateParams = { 
      fullname, 
      email, 
      message
    }
    
    const formIsOk = checkFields(email, fullname, message, setFullnameIsErr, setEmailIsErr, setMessageIsErr, setFailed)
    
    if (formIsOk) {
      sendEmail(templateParams)
    }
    else console.log('not sending');
  } 
  
  useEffect(() => {
    if (legend.current) {
      observer.observe(legend.current)
    }
    if (container.current) {
      observer.observe(container.current)
    }
    if (footer.current) {
      observer.observe(footer.current)
    }
  }, [])

  const legend = useRef<HTMLLegendElement>(null)
  const container = useRef<HTMLDivElement>(null)
  const footer = useRef<HTMLDivElement>(null)

  return (
    <section className="contact">
      <Cursor />

      <form 
        className="contact-form"
        onSubmit={handleSubmit}
        >

        <fieldset>
          <div className="contact-form__animation">
            <MailAnimation />
          </div>

          <legend className='contact-form__legend reveal-bottom' ref={legend}>
            <h2 className='contact-form__legend__title'>
              Laissez-moi un message
            </h2>
          </legend>

          <div className="contact-form__container reveal-bottom" ref={container}>
            <div className="contact-form__container__info">
              <Field name="name"
                type="text"
                setState={setFullname}
                label="Nom & Prénom"
                value={fullname}
                isTextarea={false}
                errorMsg={fullnameIsErr}
              />

              <Field name="mail"
                type="email"
                setState={setEmail}
                label="Email"
                value={email}
                isTextarea={false}
                errorMsg={emailIsErr}
              />
            </div>
      
            <div className="contact-form__container__message">
              <Field name="text"
                type="text"
                setState={setMessage}
                label="Votre message"
                value={message}
                isTextarea={true}
                errorMsg={messageIsErr}
              />
            </div>
          </div>

          <div className="contact-form__footer reveal-bottom" ref={footer}>

            <button type='submit'
              className='contact-form__footer__btn'
            >
              {isLoading ? (
                <Loader />
              ) : (
                <span>Envoyer</span>
              )}
            </button>

            {failed.isFailed && (
              <div className="contact-form__footer__error">
                {failed.message}
              </div>
            )}
          </div>

        {mailSent && (
          <div className="contact-form__success">
            <span className="contact-form__success__content">
              Message envoyé !
            </span>
          </div>
        )} 
        </fieldset>

      </form>
    </section>
  )
}

export default Contact