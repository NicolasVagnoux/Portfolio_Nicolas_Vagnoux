/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Presentation = () => {
  return (
    <div className="presentation" id="presentation">
      <div className="presentation__intro">
        <p>Je me présente...</p>
        <img src="./assets/space.png" alt="spaceship" className="spaceship" />
      </div>
      <p className="presentation__core">
        Je m'appelle <span>Nicolas Vagnoux</span>, j'ai 27 ans, et je suis{" "}
        <span>développeur Web Junior</span>. <br />
        <br />
        Après quelques années passées dans le monde de la logistique, j'ai
        récemment décidé de me lancer dans une reconversion dans l'univers de la
        tech, à travers une formation intensive de{" "}
        <span>Développeur Web FullStack</span>.<br />
        <br />
        Désormais jeune développeur dans un domaine qui me passionne réellement,
        je souhaite avant tout acquérir de l'<span>expérience</span>, développer
        mes <span>compétences</span>, et mettre mon savoir-faire au service de{" "}
        <span>projets inspirants et innovants</span> !<br />
        <br />
        Bienvenue dans mon univers !
      </p>
    </div>
  );
};

export default Presentation;
