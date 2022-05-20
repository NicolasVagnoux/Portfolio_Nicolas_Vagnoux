import React, { useState } from "react";
import axios from "axios";
import logos from "../../data/contactData";
import ContactLogo from "./ContactLogo";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [status, setStatus] = useState("Envoyer");

  const handleSubmitMail = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/", {
      name: userName,
      email: userMail,
      message: userMessage,
    });
    setUserName("");
    setUserMail("");
    setUserMessage("");
    setStatus("Message Envoyé !");
  };

  return (
    <div className="contact" id="contact">
      <h1 className="contact__title">{"< Contact />"}</h1>
      <form
        className="contact__form"
        autoComplete="off"
        onSubmit={(e) => handleSubmitMail(e)}
      >
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
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <label htmlFor="name" className={userName ? "inputHasValue" : ""}>
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
            value={userMail}
            onChange={(e) => {
              setUserMail(e.target.value);
            }}
          />
          <label htmlFor="mail" className={userMail ? "inputHasValue" : ""}>
            Quelle est votre adresse email ?
          </label>
        </div>
        <div className="contact__form__message">
          <textarea
            className="contact__form__message__input"
            id="message"
            rows="5"
            required
            value={userMessage}
            onChange={(e) => {
              setUserMessage(e.target.value);
            }}
          />
          <label
            htmlFor="message"
            className={userMessage ? "textareaHasValue" : ""}
          >
            Quel est votre message ?
          </label>
        </div>
        <button className="contact__form__submit" type="submit">
          {status}
        </button>
      </form>
      <p className="contact__prefooter">
        ﹀ Ou si vous préférez me contacter autrement ﹀
      </p>
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
          <a href="https://www.linkedin.com/in/nicolas-vagnoux/" target="blank">
            <img src="./assets/cv.png" alt="cv" width="75px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
