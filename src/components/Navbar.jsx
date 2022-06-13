import React, { useState } from "react";
import { Link } from "react-scroll";
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
            ☰
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setIsNavMobileOpened(false);
            }}
          >
            ✖
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
