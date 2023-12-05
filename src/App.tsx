import { Route, Routes } from "react-router-dom";
import { PageLayout } from "./components/layout/PageLayout";
import { HomePage } from "./pages/HomePage";
import { ROUTES } from "./const/routes";
import "../src/styles/global/_boilerplate.scss";

export const App = () => {
  return (
    <div id="container">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          {ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};
