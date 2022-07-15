import React from "react";
import PropTypes from "prop-types";
import SkillsLogo from "./SkillsLogo";

const SkillsMobile = ({ title, img, logoList, softList }) => {
  return (
    <div className="skillsMobile">
      <div className="skillsMobile__title">
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </div>
      <div className="skillsMobile__logoList">
        {logoList &&
          logoList.map((logo) => <SkillsLogo key={logo.name} {...logo} />)}
      </div>
      <div className="skillsMobile__softList">
        {softList && softList.map((item, index) => <li key={index}>{item}</li>)}
      </div>
    </div>
  );
};

SkillsMobile.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  logoList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  softList: PropTypes.arrayOf(PropTypes.string),
};

export default SkillsMobile;
