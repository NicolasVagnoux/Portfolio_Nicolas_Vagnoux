import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../data/projectsData";
import SkillsLogo from "./SkillsLogo";
import GoToTop from "./GoToTop";

const ProjectsDetails = () => {
  const { id } = useParams();
  const selectedProject = projects.filter((project) => project.id === id)[0];

  return (
    <>
      <div className="projectsDetails">
        <div className="projectsDetails__container">
          <div className="projectsDetails__container__header">
            <img
              className="projectsDetails__container__header__image"
              src={selectedProject.img}
              alt={selectedProject.name}
            />
            <button
              type="button"
              className="projectsDetails__container__header__return"
              onClick={() => {
                window.history.back();
              }}
            >
              {"< Revenir aux projets"}
            </button>
            <img
              className="projectsDetails__container__header__logo"
              src={selectedProject.logo}
              alt={selectedProject.name}
            />
          </div>
          <div className="projectsDetails__container__description">
            <p>{selectedProject.longDesc}</p>
          </div>
          <div className="projectsDetails__container__technologies">
            <p>Technologies utilisées :</p>
            <div className="projectsDetails__container__technologies__list">
              {selectedProject &&
                selectedProject.technologies.map((techno) => (
                  <SkillsLogo {...techno} />
                ))}
            </div>
          </div>
          {!selectedProject.workInProgress && (
            <div className="projectsDetails__container__links">
              <div className="projectsDetails__container__links__link">
                <a
                  href={selectedProject.url_demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Démo
                </a>
              </div>
              {!selectedProject.url_code2 && (
                <div className="projectsDetails__container__links__link">
                  <a
                    href={selectedProject.url_code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              )}
              {selectedProject.url_code2 && (
                <>
                  <div className="projectsDetails__container__links__link">
                    <a
                      href={selectedProject.url_code}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code Front
                    </a>
                  </div>
                  <div className="projectsDetails__container__links__link">
                    <a
                      href={selectedProject.url_code2}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code Back
                    </a>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <GoToTop />
    </>
  );
};

export default ProjectsDetails;
