import { init, send } from '@emailjs/browser';
import { useState } from "react";
import { emailJSInfos } from '../../secret/ids';
import Field from './Field';

const Contact = () => {
  console.log('render parent');
  const { serviceId,templateId,userId } = emailJSInfos
  init(userId)
  
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [failed, setFailed] = useState(false)

  const handleSubmit : (e: Event) => void = e => {
    console.log(e);
    e.preventDefault();

    const templateParams = {
      fullname,
      email,
      message
    }

    send(serviceId, templateId, templateParams)
      .then((res) => {
        console.log('message sent with success !', res.status, res.text);
        setFullname("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) => {
          console.error('Failed ', err);
          setFailed(true)
        }
      )
  };

  return (
    <form 
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <h2>Contactez-nous</h2>
      <Field 
        type="text"
        name="name"
        setState={setFullname}
        placeholder="Nom prénom"
        value={fullname}
      />
      <Field 
        type="email"
        name="mail"
        setState={setEmail}
        placeholder="mail"
        value={email}
      />
      <Field 
        type="text"
        name="text"
        setState={setMessage}
        placeholder="Votre message"
        value={message}
      />

      <button
        type='submit'
      >
        Envoyer
      </button>

      {failed && (
        <div className="form-message">
          Une erreur s'est produite, veuillez réessayer.
        </div>
      )}
    </form>
  );
};

export default Contact;