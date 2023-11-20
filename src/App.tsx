import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TeamPage } from "./pages/TeamPage";
import "../src/styles/global/_boilerplate.scss";

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-team" element={<TeamPage />} />
      </Routes>
    </div>
  );
};
