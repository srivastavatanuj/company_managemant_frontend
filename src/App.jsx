import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import EmployeeList from "./pages/Employee/EmployeeList";
import EmployeeDetail from "./pages/Employee/EmployeeDetail";
import LoginForm from "./pages/Login/LoginForm";
import Project from "./pages/project/Project.jsx";
import ProjectDetails from "./pages/project/ProjectDetails.jsx";
import Data from "./assets/data.js";
import Contact from "./pages/ContactUs/contact.jsx";
// import AboutUs from "./pages/aboutUs/AboutUs.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/project" element={<Project projects={Data} />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/employee" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
      </Routes>
    </>
  );
}

export default App;
