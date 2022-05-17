import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectsItem = ({ id, name, logo, img, shortDesc }) => {
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
        <Link
          to={`/projects/${id}`}
          className="projectsItem__hoverContent__button"
        >
          <div>En savoir plus</div>
        </Link>
      </div>
    </div>
  );
};

ProjectsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  shortDesc: PropTypes.string.isRequired,
};

export default ProjectsItem;
