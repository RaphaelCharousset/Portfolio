import { init, send } from '@emailjs/browser'
import { useState } from "react"
import { emailJSInfos } from '../../secret/ids'
import Field from './Field/Field'

import './contact.scss'

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
    message: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const [mailSent, setMailSent] = useState(false)

  const checkFields : () => boolean = () => {
    const regexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const emailMatchRegexp = email.match(regexp)
    const oneFieldIsEmpty = fullname === '' || email === '' || message === ''
    
    if (fullname === '') setFullnameIsErr('Ce champ ne peut être vide')
    else setFullnameIsErr('')

    if (email === '' || emailMatchRegexp === null) {
      if (email === '' ) setEmailIsErr('Ce champ ne peut être vide')
      else setEmailIsErr('Veuillez entrer une adresse mail valide')
    }
    else setEmailIsErr('')

    if (message === '') setMessageIsErr('Ce champ ne peut être vide')
    else if (message.length < 20) setMessageIsErr(`Veuillez entre message d'au moins 20 caractères. ${message.length} caractères actuellement.`)
    else setMessageIsErr('')
    
    if (oneFieldIsEmpty === true || emailMatchRegexp === null || message.length < 20) {
      setFailed({
        isFailed: true,
        message: 'Veuillez vérifier vos informations'
      })
      return false
    } else {
      return true
    }
  }

  const sendEmail : ( params: {[key:string] : string} ) => void = (templateParams) => {
    send(serviceId, templateId, templateParams)
      .then((res) => {
        console.log('mail sent with success : ', res.status, res.text)
        setFullname("")
        setEmail("")
        setMessage("")
        setFailed({isFailed: false, message: ''})
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
  }

  const handleSubmit : (e: React.SyntheticEvent<HTMLFormElement, FormEvent<HTMLFormElement>>) => void = (e) => {
    e.preventDefault()

    const templateParams = { 
      fullname, 
      email, 
      message
    }

    const formIsOk = checkFields()

    if (formIsOk) {
      sendEmail(templateParams)
    }
    else console.log('not sending');
  } 

  return (
    <section className="contact">
      <form 
        className="contact-form"
        onSubmit={handleSubmit}
        >

        <fieldset>

          <legend className='contact-form__legend'>
            <h2 className='contact-form__legend__title'>
              Laissez-moi un message
            </h2>
          </legend>

          <div className="contact-form__container">
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

          <div className="contact-form__footer">

            <button type='submit'
              className='contact-form__footer__btn'
            >
              {isLoading ? 'en cours' : 'Envoyer'}
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