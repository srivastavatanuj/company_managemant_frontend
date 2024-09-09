import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';

const MobileMenu = ({ isMenuOpen, toggleEmployeeMenu, isEmployeeMenuOpen, toggleProjectMenu, isProjectMenuOpen, closeMenus }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden mt-4 space-y-4">
      <Link to="/" className="block py-2 text-gray-700" onClick={closeMenus}>Home</Link>

      <div>
        <button onClick={toggleEmployeeMenu} className="flex items-center text-xl text-gray-700 w-full justify-between">
          Employee <RiArrowDropDownLine className="ml-1" />
        </button>
        {isEmployeeMenuOpen && (
          <div className="mt-2 space-y-2">
            <Link to="/addemployee" className="block py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenus}>Add Employee</Link>
            <Link to="/employee" className="block py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenus}>Employee List</Link>
          </div>
        )}
      </div>

      <div>
        <button onClick={toggleProjectMenu} className="flex items-center text-gray-700 w-full justify-between">
          Project <RiArrowDropDownLine className="ml-1" />
        </button>
        {isProjectMenuOpen && (
          <div className="mt-2 space-y-2">
            <Link to="/add-project" className="block py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenus}>Add Project</Link>
            <Link to="/project" className="block py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenus}>Projects</Link>
          </div>
        )}
      </div>

      <Link to="/contact" className="block py-2 mt-4 bg-blue-950 text-white px-4 rounded hover:bg-blue-800" onClick={closeMenus}>Contact Us</Link>
    </div>
  );
};

export default MobileMenu;
