import React from "react";
import PropTypes from "prop-types";
import { technologies } from "../../data/projectsData";

const ProjectsFilter = ({ filter, setFilter }) => {
  return (
    <div className="projectsFilter">
      <select
        className="projectsFilter__select"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">- Filtrer par technologie -</option>
        {technologies &&
          technologies.map((techno) => (
            <option key={techno} value={techno}>
              {techno}
            </option>
          ))}
      </select>
    </div>
  );
};

ProjectsFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default ProjectsFilter;
