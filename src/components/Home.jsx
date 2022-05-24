import React from "react";
import Typist from "react-typist";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="home" id="home">
      <Typist avgTypingDelay={60} stdTypingDelay={0} cursor={{ show: false }}>
        <Typist.Delay ms={1000} />
        <h1 className="home__mainHeader">Nicolas Vagnoux</h1>
        <Typist.Delay ms={1000} />
        <h2 className="home__smallHeader">Développeur Web FullStack Junior</h2>
      </Typist>
      <h1 className="home__mainHeaderMobile">Nicolas Vagnoux</h1>
      <h2 className="home__smallHeaderMobile">
        Développeur Web FullStack Junior
      </h2>
      <Link
        activeClass="active"
        to="presentation"
        smooth
        duration={1000}
        className="home__downButton"
      >
        <p>﹀ DECOUVREZ MON UNIVERS ﹀</p>
      </Link>
    </div>
  );
};

export default Home;
