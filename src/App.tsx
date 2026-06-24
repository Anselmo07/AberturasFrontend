import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { ProjectsPage } from "./pages/ProjectsPage";

import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;