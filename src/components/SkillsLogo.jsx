import React from "react";
import PropTypes from "prop-types";

const SkillsLogo = ({ img, name }) => {
  return (
    <div className="skillsLogo">
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
};

SkillsLogo.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SkillsLogo;
