import React, { useState } from "react";
import ProjectsItem from "./ProjectsItem";
import { projects } from "../../data/projectsData";
import ProjectsFilter from "./ProjectsFilter";

const Projects = () => {
  const [filter, setFilter] = useState("");

  return (
    <div className="projects" id="projects">
      <h2 className="projects__title">
        <div />
        Projets
        <div />
      </h2>
      <p className="projects__intro">
        Voici un <span>aperçu des projets</span> sur lesquels j&apos;ai eu la
        chance de travailler jusqu&apos;à aujourd&apos;hui :
      </p>
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
            .map((project, index) => <ProjectsItem key={index} {...project} />)}
      </div>
    </div>
  );
};

export default Projects;
