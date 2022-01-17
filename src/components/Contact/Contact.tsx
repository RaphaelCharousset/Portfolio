import emailjs from '@emailjs/browser';
import { useState } from "react";
import Field from './Field';

const Contact = () => {
  console.log('render parent');
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [failed, setFailed] = useState(false)

  const handleSubmit : (e: Event) => void = e => {
    e.preventDefault();
    console.log(e);
    
    sendFeedback("***TEMPLAYE_ID***", {
      name,
      email,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log('message sent with success !');
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) => setFailed(true)
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
        setState={setName}
        placeholder="Nom prénom"
        value={name}
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