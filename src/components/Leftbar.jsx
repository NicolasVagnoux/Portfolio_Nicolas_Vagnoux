import React from "react";
import { Link } from "react-scroll";
import { leftbar } from "../../data/navData";

const Leftbar = () => {
  return (
    <div className="leftbar">
      {leftbar.map((navItem) => (
        <Link
          activeClass="active"
          to={navItem.link}
          smooth
          duration={600}
          className="leftbar__logo"
        >
          <img src={navItem.img} alt={navItem.link} />
        </Link>
      ))}
    </div>
  );
};

export default Leftbar;
