/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Presentation = () => {
  return (
    <div className="presentation" id="presentation">
      <div className="presentation__core">
        <div className="presentation__core__picture">
          <img src="./assets/hello_there.svg" alt="hello there" />
          <img src="./assets/nv2.jpg" alt="nv_picture" />
        </div>
        <p className="presentation__core__text">
          Je m'appelle <span>Nicolas Vagnoux</span>, j'ai 28 ans, et je suis{" "}
          <span>Développeur Web Junior</span>. <br />
          <br />
          Après quelques années passées dans le monde de la logistique, j'ai
          récemment décidé de me lancer dans une reconversion dans l'univers de
          la tech, à travers une formation intensive de{" "}
          <span>Développeur Web FullStack</span>, conclue par l'obtention du
          titre professionnel <span>Développeur Web et Web Mobile</span>.<br />
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
    </div>
  );
};

export default Presentation;
