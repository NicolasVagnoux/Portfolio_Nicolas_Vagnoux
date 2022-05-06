import React, { useState } from "react";
import SkillsItem from "./SkillsItem";

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
          title="Technologies Frontend"
          img="./assets/front.svg"
          openedItem={openedItem}
          setOpenedItem={setOpenedItem}
        />
        <SkillsItem
          title="Technologies Backend"
          img="./assets/back.svg"
          openedItem={openedItem}
          setOpenedItem={setOpenedItem}
        />
        <SkillsItem
          title="Outils"
          img="./assets/tools.svg"
          openedItem={openedItem}
          setOpenedItem={setOpenedItem}
        />
        <SkillsItem
          title="Soft Skills"
          img="./assets/softskills.svg"
          openedItem={openedItem}
          setOpenedItem={setOpenedItem}
        />
      </div>
    </div>
  );
};

export default Skills;
