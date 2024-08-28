import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import ContactUs from './pages/ContactUs';
import EmployeeList from './pages/Employee/EmployeeList';  // Add this import
import EmployeeDetail from './pages/Employee/EmployeeDetail';  // Add this import

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/employee' element={<EmployeeList />} />  {/* Add this route */}
        <Route path='/employee/:id' element={<EmployeeDetail />} />  {/* Add this route */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
