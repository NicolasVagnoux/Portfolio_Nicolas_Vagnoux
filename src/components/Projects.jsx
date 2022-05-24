import React, { useState } from "react";
import ProjectsItem from "./ProjectsItem";
import { projects } from "../../data/projectsData";
import ProjectsFilter from "./ProjectsFilter";

const Projects = () => {
  const [filter, setFilter] = useState("");

  return (
    <div className="projects" id="projects">
      <h2 className="projects__title">{"{ ...Projets }"}</h2>
      <ProjectsFilter filter={filter} setFilter={setFilter} />
      <div className="projects__list">
        {projects &&
          projects
            .filter(
              (project) =>
                project.technologies
                  .map((techno) => techno.name)
                  .includes(filter) || !filter
            )
            .map((project) => <ProjectsItem {...project} />)}
      </div>
    </div>
  );
};

export default Projects;
