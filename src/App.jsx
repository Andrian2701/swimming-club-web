import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import "../src/styles/global/_boilerplate.scss";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
