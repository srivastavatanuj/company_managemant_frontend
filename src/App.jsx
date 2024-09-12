import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import EmployeeList from "./pages/Employee/EmployeeList";
import EmployeeDetail from "./pages/Employee/EmployeeDetail";
import LoginForm from "./pages/Login/LoginForm";
import Project from "./pages/project/Project.jsx";
import ProjectDetails from "./pages/project/ProjectDetails.jsx";
import Contact from "./pages/ContactUs/contact.jsx";
import AddProject from "./pages/project/AddProject.jsx";
import ErrorPage from "./pages/ErrorPage/Error.jsx";
// import Task from "./pages/Task/Task.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/employee" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route path="/task" element={<Task />} /> */}
      </Routes>
    </>
  );
}

export default App;
