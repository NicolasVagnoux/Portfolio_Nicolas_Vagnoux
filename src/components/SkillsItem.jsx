/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from "react";
import PropTypes from "prop-types";

const SkillsItem = ({ title, img, openedItem, setOpenedItem }) => {
  return (
    <div
      className="skillsItem"
      role="button"
      onClick={() => setOpenedItem(title)}
    >
      <div className={`skillsItem__title ${openedItem === title && "hidden"}`}>
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </div>
      {openedItem === title && (
        <div className="skillsItem__list">
          <p>Olé</p>
        </div>
      )}
    </div>
  );
};

SkillsItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  openedItem: PropTypes.string.isRequired,
  setOpenedItem: PropTypes.func.isRequired,
};

export default SkillsItem;
