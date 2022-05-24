import React from "react";
import { Link } from "react-scroll";
import { navbar } from "../../data/navData.js";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        {navbar.map((navItem) => (
          <Link
            activeClass="active"
            to={navItem.link}
            smooth
            duration={600}
            className="navbar__list__item"
          >
            <li>{navItem.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
