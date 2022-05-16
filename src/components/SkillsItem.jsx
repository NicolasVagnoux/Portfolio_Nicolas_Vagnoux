/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from "react";
import PropTypes from "prop-types";
import SkillsLogo from "./SkillsLogo";

const SkillsItem = ({
  title,
  img,
  logoList,
  softList,
  openedItem,
  setOpenedItem,
}) => {
  return (
    <div
      className={`skillsItem ${openedItem !== title && "cursor"}`}
      role="button"
      onClick={() => setOpenedItem(title)}
    >
      {/* Titre qui se cache au clic */}
      <div className={`skillsItem__title ${openedItem === title && "hidden"}`}>
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </div>
      {/* Liste qui apparait au clic et si la liste des logos existe */}
      {openedItem === title && logoList && (
        <div className="skillsItem__list">
          <div className="skillsItem__list__header">
            <img src={img} alt={title} />
            <h3>{title}</h3>
          </div>
          <div className="skillsItem__list__core">
            {logoList &&
              logoList.map((logo) => <SkillsLogo key={logo.name} {...logo} />)}
          </div>
        </div>
      )}
      {/* Liste qui apparait au clic et si la liste des softskills existe */}
      {openedItem === title && softList && (
        <div className="skillsItem__softList">
          <div className="skillsItem__softList__header">
            <img src={img} alt={title} />
            <h3>{title}</h3>
          </div>
          <ul className="skillsItem__softList__core">
            {softList.map((listItem) => (
              <li>{listItem}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

SkillsItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  logoList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  softList: PropTypes.arrayOf(PropTypes.string).isRequired,
  openedItem: PropTypes.string.isRequired,
  setOpenedItem: PropTypes.func.isRequired,
};

export default SkillsItem;
