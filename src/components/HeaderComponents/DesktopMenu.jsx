import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';

const DesktopMenu = ({ isEmployeeMenuOpen, toggleEmployeeMenu, isProjectMenuOpen, toggleProjectMenu, closeMenus }) => (
  <nav className="hidden md:flex space-x-4">
    <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={closeMenus}>Home</Link>

    <div>
      <button onClick={toggleEmployeeMenu} className="flex items-center text-gray-700">
        Employee <RiArrowDropDownLine className="ml-1" />
      </button>
      {isEmployeeMenuOpen && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-md">
          <Link to="/addemployee" className="block py-2 px-4 text-gray-700 hover:bg-gray-100" onClick={closeMenus}>Add Employee</Link>
          <Link to="/employee" className="block py-2 px-4 text-gray-700 hover:bg-gray-100" onClick={closeMenus}>Employee List</Link>
        </div>
      )}
    </div>

    <div>
      <button onClick={toggleProjectMenu} className="flex items-center text-gray-700">
        Project <RiArrowDropDownLine className="ml-1" />
      </button>
      {isProjectMenuOpen && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-md">
          <Link to="/add-project" className="block py-2 px-4 text-gray-700 hover:bg-gray-100" onClick={closeMenus}>Add Project</Link>
          <Link to="/project" className="block py-2 px-4 text-gray-700 hover:bg-gray-100" onClick={closeMenus}>Projects</Link>
        </div>
      )}
    </div>

    <Link
      to="/contact"
      className="text-white text-center rounded-md bg-slate-900 w-20 h-8 flex items-center justify-center"
      onClick={closeMenus}
    >
      Contact Us
    </Link>

  </nav>
);

export default DesktopMenu;
