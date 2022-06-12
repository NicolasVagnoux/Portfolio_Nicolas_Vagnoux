import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import ProjectsItem from "./ProjectsItem";
import { projects } from "../../data/projectsData";
import ProjectsFilter from "./ProjectsFilter";

const Projects = () => {
  const [filter, setFilter] = useState("");

  return (
    <div className="projects" id="projects">
      <Fade bottom distance="100px">
        <h2 className="projects__title">
          <div />
          Projets
          <div />
        </h2>
        <p className="projects__intro">
          Voici un <span>aperçu des projets</span> sur lesquels j&apos;ai eu la
          chance de travailler jusqu&apos;à aujourd&apos;hui :
        </p>
      </Fade>
      <ProjectsFilter filter={filter} setFilter={setFilter} />
      <Fade bottom distance="100px">
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
          {!projects.filter((project) =>
            project.technologies.map((techno) => techno.name).includes(filter)
          ).length &&
            filter && (
              <p className="projects__list__empty">
                Pas (encore) de projet correspondant 🚀
              </p>
            )}
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
