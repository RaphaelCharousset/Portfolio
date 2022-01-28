type CheckFields = (
  email: string,
  fullname: string,
  message: string,
  setFullnameIsErr :(fullname: string) => void,
  setEmailIsErr : (email: string) => void,
  setMessageIsErr : (message: string) => void,
  setFailed : (failed: { isFailed: boolean, message: string}) => void
) => boolean 

export const checkFields: CheckFields = (
  email, fullname, message, setFullnameIsErr, setEmailIsErr, setMessageIsErr, setFailed
) => {
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