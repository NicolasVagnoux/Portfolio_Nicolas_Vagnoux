import React, { useState } from "react";
import { Link } from "react-scroll";
import Icon from "@mdi/react";
import { mdiMenuOpen, mdiClose } from "@mdi/js";
import { navbar, leftbar } from "../../data/navData.js";

const Navbar = () => {
  const [isNavMobileOpened, setIsNavMobileOpened] = useState(false);

  return (
    <>
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

      <div
        className={`navbarMobile ${
          isNavMobileOpened && "navbarMobile--opened"
        }`}
      >
        {!isNavMobileOpened ? (
          <button
            type="button"
            onClick={() => {
              setIsNavMobileOpened(true);
            }}
          >
            <Icon path={mdiMenuOpen} size={3} color="aliceblue" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setIsNavMobileOpened(false);
            }}
          >
            <Icon path={mdiClose} size={3} color="aliceblue" />
          </button>
        )}
        <ul className="navbarMobile__list">
          {leftbar.map((navItem) => (
            <Link
              activeClass="active"
              to={navItem.link}
              smooth
              duration={600}
              className="navbarMobile__list__item"
            >
              <img src={navItem.img} alt={navItem.link} />
              <p>{navItem.name}</p>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
