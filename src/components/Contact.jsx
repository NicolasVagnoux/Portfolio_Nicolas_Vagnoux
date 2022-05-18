import React, { useState } from "react";
import logos from "../../data/contactData";
import ContactLogo from "./ContactLogo";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  console.log(name, mail, message);

  return (
    <div className="contact" id="contact">
      <h1 className="contact__title">{"< Contact />"}</h1>
      <form className="contact__form" autoComplete="off">
        <p>
          Vous souhaitez me contacter ? Vous pouvez remplir le formulaire
          suivant :
        </p>
        <div className="contact__form__name">
          <input
            className="contact__form__name__input"
            id="name"
            type="text"
            required
            autoComplete="false"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="name" className={name ? "inputHasValue" : ""}>
            Quel est votre nom ?
          </label>
        </div>
        <div className="contact__form__mail">
          <input
            className="contact__form__mail__input"
            id="mail"
            type="email"
            required
            autoComplete="false"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
          <label htmlFor="mail" className={mail ? "inputHasValue" : ""}>
            Quelle est votre adresse email ?
          </label>
        </div>
        <div className="contact__form__message">
          <textarea
            className="contact__form__message__input"
            id="message"
            rows="5"
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <label
            htmlFor="message"
            className={message ? "textareaHasValue" : ""}
          >
            Quel est votre message ?
          </label>
        </div>
        <input className="contact__form__submit" type="submit" />
      </form>
      <div className="contact__footer">
        <div className="contact__footer__logos">
          <p>Où me retrouver :</p>
          <ul className="contact__footer__logos__list">
            {logos.map((logo) => (
              <ContactLogo {...logo} />
            ))}
          </ul>
        </div>
        <div className="contact__footer__cv">
          <p>Télécharger mon CV :</p>
          <a href="https://www.linkedin.com/in/nicolas-vagnoux/">
            <img src="./assets/cv.png" alt="cv" width="90px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
