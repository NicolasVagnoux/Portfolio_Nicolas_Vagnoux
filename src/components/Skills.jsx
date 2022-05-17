import React, { useState } from "react";
import SkillsItem from "./SkillsItem";
import { front, back, tools, soft } from "../../data/skillsData.js";

const Skills = () => {
  const [openedItem, setOpenedItem] = useState("");

  return (
    <div className="skills" id="skills">
      <h2 className="skills__title">[Compétences, Outils]</h2>
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
    </div>
  );
};

export default Skills;
