import Header from "./components/header/Header.jsx";
import Contact from "./pages/ContactUs/contact.jsx";
import Project from"./pages/project/Project.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const projects = ['Divine',"Home Maintenance", 'Krazy11', 'CryptoFiatX', "Beri'sMagic", 'Vinayaka'];
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Header/>}></Route>
<Route path="/project"element={<Project projects={projects}/>}></Route>
<Route path="/contactus" element={<Contact/>}></Route>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
