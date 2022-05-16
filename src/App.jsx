import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Presentation from "./components/Presentation";
import Leftbar from "./components/Leftbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app">
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
}

export default App;
