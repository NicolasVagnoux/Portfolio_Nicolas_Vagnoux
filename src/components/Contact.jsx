import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact__title">{"< Contact />"}</h1>
      <form className="contact__form" autoComplete="off">
        <p>
          Si vous souhaitez me contacter, vous pouvez remplir le formulaire
          suivant :
        </p>
        <div className="contact__form__name">
          <input
            className="contact__form__name__input"
            id="name"
            type="text"
            required
            autoComplete="false"
          />
          <label htmlFor="name">Quel est votre nom ?</label>
        </div>
        <div className="contact__form__mail">
          <input
            className="contact__form__mail__input"
            id="mail"
            type="text"
            required
            autoComplete="false"
          />
          <label htmlFor="mail">Quelle est votre adresse email ?</label>
        </div>
        <div className="contact__form__message">
          <textarea
            className="contact__form__message__input"
            id="message"
            rows="5"
            required
          />
          <label htmlFor="message">Quel est votre message ?</label>
        </div>
        <input className="contact__form__submit" type="submit" />
      </form>
    </div>
  );
};

export default Contact;
