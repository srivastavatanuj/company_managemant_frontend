import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import EmployeeList from "./pages/Employee/EmployeeList";
import EmployeeDetail from "./pages/Employee/EmployeeDetail";
import LoginForm from "./pages/Login/LoginForm";
import Project from "./pages/project/Project.jsx";
import ProjectDetails from "./pages/project/ProjectDetails.jsx";
import Contact from "./pages/ContactUs/contact.jsx";
import AddProject from "./pages/project/AddProject.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import AddEmployee from "./pages/Employee/AddEmployee.jsx";


function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/employee" element={<EmployeeList />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="project" element={<Project />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
      </Routes>
    </div>
  );
}

export default App;