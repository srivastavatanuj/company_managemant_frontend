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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
