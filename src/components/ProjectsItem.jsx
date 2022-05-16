import React from "react";
import PropTypes from "prop-types";

const ProjectsItem = ({ name, logo, img, shortDesc }) => {
  return (
    <div className="projectsItem">
      <div className="projectsItem__content">
        <img
          className="projectsItem__content__background"
          src={img}
          alt={name}
        />
        <img className="projectsItem__content__logo" src={logo} alt={name} />
      </div>
      <div className="projectsItem__hoverContent">
        <p>{shortDesc}</p>
        <div className="projectsItem__hoverContent__button">En savoir plus</div>
      </div>
    </div>
  );
};

ProjectsItem.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  shortDesc: PropTypes.func.isRequired,
};

export default ProjectsItem;
