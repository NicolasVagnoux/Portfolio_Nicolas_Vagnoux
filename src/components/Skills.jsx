import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import SkillsItem from "./SkillsItem";
import { front, back, tools, soft } from "../../data/skillsData.js";
import SkillsMobile from "./SkillsMobile";

const Skills = () => {
  const [openedItem, setOpenedItem] = useState("Technologies Front-End");

  return (
    <div className="skills" id="skills">
      <Fade bottom distance="100px">
        <h2 className="skills__title">
          <div />
          Compétences, Outils
          <div />
        </h2>
        <p className="skills__intro">
          A travers ma formation de <span>Développeur Web FullStack</span>,
          j&apos;ai eu l&apos;occasion d&apos;apprendre à maitriser de
          nombreuses technologies, à la fois du côté <span>Front-End</span>{" "}
          (conception de sites et d&apos;expériences utilisateur) et du côté{" "}
          <span>Back-End</span> (création et gestion de bases de données et
          API).
          <br />
          <br />
          Etant quelqu&apos;un de rigoureux, adaptable, proactif, et utilisant
          les <span>prinicpaux outils de travail</span> du développeur
          d&apos;aujourd&apos;hui, je m&apos;efforce d&apos;en{" "}
          <span>apprendre toujours plus au quotidien</span> sur ce métier et ses
          nombreuses facettes !
        </p>
        <div
          className={`skills__grid ${
            openedItem ? "openedGridWidth" : "closedGridWidth"
          }`}
        >
          <SkillsItem
            title="Technologies Front-End"
            img="./assets/front.svg"
            logoList={front}
            openedItem={openedItem}
            setOpenedItem={setOpenedItem}
          />
          <SkillsItem
            title="Technologies Back-End"
            img="./assets/back.svg"
            logoList={back}
            openedItem={openedItem}
            setOpenedItem={setOpenedItem}
          />
          <SkillsItem
            title="Outils"
            img="./assets/tools.svg"
            logoList={tools}
            openedItem={openedItem}
            setOpenedItem={setOpenedItem}
          />
          <SkillsItem
            title="Soft Skills"
            img="./assets/softskills.svg"
            softList={soft}
            openedItem={openedItem}
            setOpenedItem={setOpenedItem}
          />
        </div>
        <div className="skills__mobile">
          <SkillsMobile
            title="Technologies Front-End"
            img="./assets/front.svg"
            logoList={front}
          />
          <SkillsMobile
            title="Technologies Back-End"
            img="./assets/back.svg"
            logoList={back}
          />
          <SkillsMobile
            title="Outils"
            img="./assets/tools.svg"
            logoList={tools}
          />
          <SkillsMobile
            title="Soft Skills"
            img="./assets/softskills.svg"
            softList={soft}
          />
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
