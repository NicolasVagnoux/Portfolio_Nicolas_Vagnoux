import React, { useState } from "react";
import SkillsItem from "./SkillsItem";
import { front, back, tools } from "../../data/skillsData.js";

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
          data={front}
          openedItem={openedItem}
          setOpenedItem={setOpenedItem}
        />
        <SkillsItem
          title="Technologies Back-End"
          img="./assets/back.svg"
          data={back}
          openedItem={openedItem}
          setOpenedItem={setOpenedItem}
        />
        <SkillsItem
          title="Outils"
          img="./assets/tools.svg"
          data={tools}
          openedItem={openedItem}
          setOpenedItem={setOpenedItem}
        />
        <SkillsItem
          title="Soft Skills"
          img="./assets/softskills.svg"
          data={[]}
          openedItem={openedItem}
          setOpenedItem={setOpenedItem}
        />
      </div>
    </div>
  );
};

export default Skills;
