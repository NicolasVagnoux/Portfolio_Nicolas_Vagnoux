import React from "react";
import { Link } from "react-scroll";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const Home = () => {
  return (
    <div className="home" id="home">
      <img className="home__name" src="./assets/myname.svg" alt="myname" />
      <img className="home__job" src="./assets/myjob.svg" alt="myjob" />
      <img
        className="home__nameMobile"
        src="./assets/myname_mobile.svg"
        alt="myname"
      />
      <img
        className="home__jobMobile"
        src="./assets/myjob_mobile.svg"
        alt="myjob"
      />
      <button className="home__downButton" type="button">
        <Link activeClass="active" to="presentation" smooth duration={600}>
          <KeyboardArrowDownRoundedIcon />
        </Link>
      </button>
    </div>
  );
};

export default Home;
