import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/Kurmatologo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img className="h-10 w-auto" src={img} alt="Kurmato Logo" />

          <div className="hidden md:flex items-center space-x-4 flex-grow justify-center lg:gap-2 gap-6 text-xl font-medium">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/employee" className="text-gray-700 hover:text-gray-900">
              Employee
            </Link>
            <Link to="/project" className="text-gray-700 hover:text-gray-900">
              Project
            </Link>
            {/* <Link to="/task" className="text-gray-700 hover:text-gray-900">Tasks</Link> */}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Contact Us
            </Link>
            {/* <Link
              to="/login"
              className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Log In
            </Link> */}
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
              to="/"
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
            <Link
              to="/login"
              className="block py-2 mt-2 bg-blue-950 text-white px-4 rounded hover:bg-blue-800"
            >
              Log In
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
