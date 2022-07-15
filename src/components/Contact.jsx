import React, { useState } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import LoopIcon from "@mui/icons-material/Loop";
import logos from "../../data/contactData";
import ContactLogo from "./ContactLogo";
import cv from "../../public/assets/files/NicolasVagnouxCV_WebDev.pdf";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmitMail = async (e) => {
    e.preventDefault();
    try {
      setStatus("Pending");
      await axios.post("https://portfolio-nv.herokuapp.com/", {
        name: userName,
        email: userMail,
        message: userMessage,
      });
      setUserName("");
      setUserMail("");
      setUserMessage("");
      setStatus("OK");
    } catch (err) {
      setStatus("Error");
    }
  };

  return (
    <div className="contact" id="contact">
      <h1 className="contact__title">
        <div />
        Contact
        <div />
      </h1>
      <form
        className="contact__form"
        autoComplete="off"
        onSubmit={(e) => handleSubmitMail(e)}
      >
        <p>
          Vous souhaitez <span>me contacter</span> ? Vous pouvez remplir le{" "}
          <span>formulaire </span>
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
          Envoyer
        </button>
        {status && (
          <div className="contact__form__result">
            {status !== "Pending" && (
              <button
                onClick={() => {
                  setStatus("");
                }}
                type="button"
              >
                <CloseIcon />
              </button>
            )}
            <p>
              {status === "Pending" && "Votre message est en cours d'envoi"}
              {status === "OK" && "Merci, votre message a bien été envoyé !"}
              {status === "Error" && "Désolé, une erreur s'est produite..."}
            </p>
            {status === "Pending" && (
              <div>
                <LoopIcon />
              </div>
            )}
          </div>
        )}
      </form>
      <p className="contact__prefooter">
        ﹀ Ou si vous préférez <span>me contacter </span> autrement ﹀
      </p>
      <div className="contact__footer">
        <div className="contact__footer__logos">
          <p>Où me retrouver :</p>
          <ul className="contact__footer__logos__list">
            {logos.map((logo, index) => (
              <ContactLogo key={index} {...logo} />
            ))}
          </ul>
        </div>
        <div className="contact__footer__inter" />
        <div className="contact__footer__cv">
          <p>Télécharger mon CV :</p>
          <a href={cv} target="blank">
            <img src="./assets/cv.png" alt="cv" width="75px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
