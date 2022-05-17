import React from "react";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import Home from "./Home";
import Presentation from "./Presentation";
import Skills from "./Skills";
import Projects from "./Projects";

const OnePage = () => {
  return (
    <div className="onePage">
      <Leftbar />
      <div className="main">
        <Navbar />
        <Home />
        <Presentation />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default OnePage;
