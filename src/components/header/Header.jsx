import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/Kurmatologo.png";
import HeaderEmployee from "./HeaderEmployee";
import HeaderProject from "./HeaderProject";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto  py-8">
        <div className="flex justify-evenly items-center">
          {/* Logo */}
          <img className="h-10 w-auto" src={img} alt="Kurmato Logo" />

          <div className="hidden md:flex items-center  flex-grow justify-center gap-8 text-2xl ">
            <Link to="/home" className="text-gray-700 hover:text-gray-900">Home</Link>

            {/* Employee Component */}
            <HeaderEmployee />
            <HeaderProject />

          </div>
          {/* Contect us Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-950"
            >
              Contact Us
            </Link>
          </div>

          {/* Three line menu for mobile */}
          <button
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link
              to="/home"
              className="block py-2 text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/employee"
              className="block py-2 text-gray-700 hover:text-gray-900"
            >
              Employee
            </Link>
            <Link
              to="/project"
              className="block py-2 text-gray-700 hover:text-gray-900"
            >
              Project
            </Link>
            <Link
              to="/contact"
              className="block py-2 mt-4 bg-blue-950 text-white px-4 rounded hover:bg-blue-800"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
