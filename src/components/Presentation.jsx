/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Fade from "react-reveal/Fade";

const Presentation = () => {
  return (
    <div className="presentation" id="presentation">
      <Fade bottom distance="100px">
        <div className="presentation__core">
          <div className="presentation__core__picture">
            <p>Hello there !</p>
            <img src="./assets/nv.jpg" alt="nv_pic" />
          </div>
          <p className="presentation__core__text">
            Je m'appelle <span>Nicolas Vagnoux</span>, j'ai 27 ans, et je suis{" "}
            <span>développeur Web Junior</span>. <br />
            <br />
            Après quelques années passées dans le monde de la logistique, j'ai
            récemment décidé de me lancer dans une reconversion dans l'univers
            de la tech, à travers une formation intensive de{" "}
            <span>Développeur Web FullStack</span>.<br />
            <br />
            Désormais jeune développeur dans un domaine qui me passionne
            réellement, je souhaite avant tout acquérir de l'
            <span>expérience</span>, développer mes <span>compétences</span>, et
            mettre mon savoir-faire au service de{" "}
            <span>projets inspirants et innovants</span> !<br />
            <br />
            Bienvenue dans mon univers !
          </p>
          <img
            className="presentation__core__text__rocket"
            src="./assets/space.png"
            alt="spaceship"
          />
        </div>
      </Fade>
    </div>
  );
};

export default Presentation;
