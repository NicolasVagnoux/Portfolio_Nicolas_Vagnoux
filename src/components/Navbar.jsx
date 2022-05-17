import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <Link
          activeClass="active"
          to="presentation"
          smooth
          duration={1000}
          className="navbar__list__item"
        >
          <li>Qui suis-je ?</li>
        </Link>
        <Link
          activeClass="active"
          to="skills"
          smooth
          duration={1000}
          className="navbar__list__item"
        >
          <li>Compétences</li>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          smooth
          duration={1000}
          className="navbar__list__item"
        >
          <li>Projets</li>
        </Link>
        <Link
          activeClass="active"
          to="presentation"
          smooth
          duration={1000}
          className="navbar__list__item"
        >
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
