import React, { useState } from 'react';
import DesktopMenu from '../HeaderComponents/DesktopMenu';
import MobileMenu from '../HeaderComponents/MobileMenu';
import Logo from '../HeaderComponents/Logo.';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmployeeMenuOpen, setIsEmployeeMenuOpen] = useState(false);
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleEmployeeMenu = () => setIsEmployeeMenuOpen(prev => !prev);
  const toggleProjectMenu = () => setIsProjectMenuOpen(prev => !prev);
  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsEmployeeMenuOpen(false);
    setIsProjectMenuOpen(false);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto py-6 flex justify-between items-center">
       <Logo/>

        <DesktopMenu
          isEmployeeMenuOpen={isEmployeeMenuOpen}
          toggleEmployeeMenu={toggleEmployeeMenu}
          isProjectMenuOpen={isProjectMenuOpen}
          toggleProjectMenu={toggleProjectMenu}
          closeMenus={closeMenus}
        />

        <button className="md:hidden text-gray-500" onClick={toggleMenu}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        toggleEmployeeMenu={toggleEmployeeMenu}
        isEmployeeMenuOpen={isEmployeeMenuOpen}
        toggleProjectMenu={toggleProjectMenu}
        isProjectMenuOpen={isProjectMenuOpen}
        closeMenus={closeMenus}
      />
    </div>
 
  );
};

export default Header;
