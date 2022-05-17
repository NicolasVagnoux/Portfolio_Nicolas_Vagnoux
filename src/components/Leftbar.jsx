import React from "react";
import { Link } from "react-scroll";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <Link
        activeClass="active"
        to="home"
        smooth
        duration={1000}
        className="leftbar__logo"
      >
        <img src="./assets/home2.png" alt="home" />
      </Link>
      <Link
        activeClass="active"
        to="presentation"
        smooth
        duration={1000}
        className="leftbar__logo"
      >
        <img src="./assets/presentation.png" alt="pres" />
      </Link>
      <Link
        activeClass="active"
        to="skills"
        smooth
        duration={1000}
        className="leftbar__logo"
      >
        <img src="./assets/skills.png" alt="skills" />
      </Link>
      <Link
        activeClass="active"
        to="projects"
        smooth
        duration={1000}
        className="leftbar__logo"
      >
        <img src="./assets/projects.png" alt="projects" />
      </Link>
      <Link
        activeClass="active"
        to="projects"
        smooth
        duration={1000}
        className="leftbar__logo"
      >
        <img src="./assets/contact.png" alt="contact" />
      </Link>
    </div>
  );
};

export default Leftbar;
