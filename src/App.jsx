import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import EmployeeList from "./pages/Employee/EmployeeList";
import EmployeeDetail from "./pages/Employee/EmployeeDetail";
import LoginForm from "./pages/Login/LoginForm";
import Project from "./pages/project/Project.jsx";
import ProjectDetails from "./pages/project/ProjectDetails.jsx";
import Contact from "./pages/ContactUs/contact.jsx";
import AddProject from "./pages/AdminPages/AddProject.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import AddEmployee from "./pages/AdminPages/AddEmployee.jsx";
import ErrorPage from "./pages/ErrorPage/Error.jsx"
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Add from "./pages/AdminAdd/Add.jsx";



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<ErrorPage/>}/>
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/employee" element={<EmployeeList />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="project" element={<Project />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/addemployee" element={<AddEmployee />} />

        <Route path="/add" element={<Add />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;