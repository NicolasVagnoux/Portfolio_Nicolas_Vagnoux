import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import OnePage from "./components/OnePage";
import ProjectsDetails from "./components/ProjectsDetails";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="app">
      <Loading />
      <Routes>
        <Route path="/" element={<OnePage />} />
        <Route path="/projects/:id" element={<ProjectsDetails />} />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
