import React from 'react';
import Hero from '../HomeComponents/Hero';
import Cards from '../HomeComponents/Cards';
import DatabaseComp from '../HomeComponents/DatabaseComp';
import EmployeeManagement from '../HomeComponents/EmployeeManagement';
import EmpDetails from '../HomeComponents/EmpDetails';
import SelfService from '../HomeComponents/SelfService';
import Employee from '../HomeComponents/Employee';



const HomePage = () => {
  return (
    <div>
      <div className="font-semibold text-lg sm:text-2xl text-center py-4 
      lg:text-3xl">
        <h1>Introducing Employee Project Management Portal</h1>
      </div>
      <Hero />
      <Cards />
      <DatabaseComp />
      <EmployeeManagement />
      <EmpDetails />
      <Employee/>
      <SelfService />
    </div>
  );
};

export default HomePage;