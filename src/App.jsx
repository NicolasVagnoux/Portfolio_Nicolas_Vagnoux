import "./App.scss";
import { Routes, Route } from "react-router-dom";
import OnePage from "./components/OnePage";
import ProjectsDetails from "./components/ProjectsDetails";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<OnePage />} />
        <Route path="/projects/:id" element={<ProjectsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
