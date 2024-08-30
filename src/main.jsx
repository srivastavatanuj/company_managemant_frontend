import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <App className="h-full min-h-screen"/>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
