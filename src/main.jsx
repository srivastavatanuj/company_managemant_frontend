import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Header />
      <App/>
      <Footer />
    </BrowserRouter>

)
