import React from "react";
import ProjectsItem from "./ProjectsItem";
import projects from "../../data/projectsData";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2 className="projects__title">{"{ ...Projets }"}</h2>
      <div className="projects__list">
        {projects && projects.map((projet) => <ProjectsItem {...projet} />)}
      </div>
    </div>
  );
};

export default Projects;
