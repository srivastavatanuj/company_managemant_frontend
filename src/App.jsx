import Header from "./components/header/Header.jsx";
import ProjectDetails from "./components/Project_details/ProjectDetails.jsx";
import Contact from "./pages/ContactUs/contact.jsx";
import Project from "./pages/project/Project.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./assets/data.js";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route
          path="/project" element={<Project projects={Data} />}
        ></Route>
        <Route path="/contactus" element={<Contact />}></Route>
      <Route path="/project/:id" element={<ProjectDetails/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
