/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from "react";
import PropTypes from "prop-types";

const SkillsItem = ({ title, img, data, openedItem, setOpenedItem }) => {
  return (
    <div
      className={`skillsItem ${openedItem !== title && "cursor"}`}
      role="button"
      onClick={() => setOpenedItem(title)}
    >
      <div className={`skillsItem__title ${openedItem === title && "hidden"}`}>
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </div>
      {openedItem === title && (
        <div className="skillsItem__list">
          <div className="skillsItem__list__header">
            <img src={img} alt={title} />
            <h3>{title}</h3>
          </div>
          <div className="skillsItem__list__core">
            {data.map((item) => (
              <img src={item.img} alt={item.name} />
            ))}
            <p>Créer un composant skillsLogo et le mapper</p>
          </div>
        </div>
      )}
    </div>
  );
};

SkillsItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  openedItem: PropTypes.string.isRequired,
  setOpenedItem: PropTypes.func.isRequired,
};

export default SkillsItem;
