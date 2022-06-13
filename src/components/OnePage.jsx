import React from "react";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import Home from "./Home";
import Presentation from "./Presentation";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import BackgroundParticles from "./BackgroundParticles";

const OnePage = () => {
  return (
    <div className="onePage">
      <Leftbar />
      <div className="main">
        <BackgroundParticles />
        <Navbar />
        <Home />
        <Presentation />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default OnePage;
