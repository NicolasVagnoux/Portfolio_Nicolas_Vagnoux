import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import { navbar, leftbar } from "../../data/navData.js";

const Navbar = () => {
  const [isNavMobileOpened, setIsNavMobileOpened] = useState(false);

  return (
    <>
      <div className="navbar">
        <img className="navbar__logo" src="./assets/NV-logo1b.png" alt="NV" />
        <ul className="navbar__list">
          {navbar.map((navItem, index) => (
            <Link
              key={index}
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

      <Link activeClass="active" to="home" smooth duration={600}>
        <img className="logoMobile" src="./assets/NV-logo1b.png" alt="NV" />
      </Link>
      <div className="logoBackground" />
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
            <MenuOpenIcon />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setIsNavMobileOpened(false);
            }}
          >
            <CloseIcon />
          </button>
        )}
        <ul className="navbarMobile__list">
          {leftbar.map((navItem, index) => (
            <Link
              key={index}
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
