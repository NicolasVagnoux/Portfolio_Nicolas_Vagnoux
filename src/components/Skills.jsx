import React from "react";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2 className="skills__title">[Compétences, Outils]</h2>
      <div className="skills__grid">
        <div className="skills__grid__hardskills">
          <div className="skills__grid__hardskills__title">
            <img src="./assets/webdev.svg" alt="hardskills" width="40px" />
            <h3>Compétences</h3>
          </div>
        </div>
        <div className="skills__grid__softskills"></div>
        <div className="skills__grid__tools">
          <div className="skills__grid__tools__title">
            <img src="./assets/tools.svg" alt="tools" width="40px" />
            <h3>Outils</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
