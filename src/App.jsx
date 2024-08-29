<<<<<<< HEAD
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

=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ContactUs from './pages/ContactUs';
import EmployeeList from './pages/Employee/EmployeeList'; 
import EmployeeDetail from './pages/Employee/EmployeeDetail';  
import LoginForm from './pages/Login/LoginForm';
import Header from './components/header/Header';


function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/employee' element={<EmployeeList />} /> 
        <Route path='/employee/:id' element={<EmployeeDetail />} /> 
>>>>>>> 9be6bb0fa0a069c9e015557bf66868724126574c
      </Routes>
    </BrowserRouter>
  );
}

export default App;
