import React from 'react';
import homepageimage from '../../assets/homepageimage.png';
import cardimage1 from '../../assets/cardimage1.png';
import cardimage2 from '../../assets/cardimage2.png';
import cardimage3 from '../../assets/cardimage3.png';
import cardimage4 from '../../assets/cardimage4.png';
import middleimage1 from '../../assets/middleimage1.png';
import middleimage2 from '../../assets/middleimage2.png';
import employee from '../../assets/employee.png';

const HomePage = () => {
  return (
    <div>
      {/* Home Page 1st text */}
      <div className="font-normal text-2xl text-center py-4 bg-slate-200">
        <h1>Introducing Employee Project Management Portal</h1>
      </div>

      {/* Two Text, Image, and Button */}
      <div className="w-full bg-[#103556] flex flex-col md:flex-row md:justify-between items-center p-6 space-y-4 md:space-y-0">
        <div className="text-[#FFFFFF] flex flex-col justify-between md:w-1/2 md:text-left">
          <div>
            <div className="text-3xl md:text-5xl font-bold max-w-[400px]">
              Workforce Management for The Changing World.
            </div>
            <div className="text-base md:text-lg max-w-[400px]">
              Streamline processes, empower workers, collaborate across the organization, and align teams.
            </div>
          </div>
          {/* Button */}
          <div className="mt-4 md:mt-0">
            <button className="bg-yellow-300 px-6 py-3 rounded-md text-black font-semibold md:text-center">
              Get a code
            </button>
          </div>
        </div>

        {/* Homepage Image */}
        <div className="h-[360px] w-full md:w-3/5 flex justify-center">
          <img src={homepageimage} alt="Home Page" className="object-contain max-w-full h-auto" />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <div className="border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img className="h-24 w-24" src={cardimage1} alt="Employee Data Visibility" />
          <h1 className="text-center mt-4 text-lg font-semibold">Increase employee data visibility across regions</h1>
        </div>
        <div className="border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img className="h-24 w-24" src={cardimage2} alt="Employee Data Visibility" />
          <h1 className="text-center mt-4 text-lg font-semibold">Guarantee secure data management and employee privacy</h1>
        </div>
        <div className="border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img className="h-24 w-24" src={cardimage3} alt="Employee Data Visibility" />
          <h1 className="text-center mt-4 text-lg font-semibold">Customize and manage your workforce in your preferred way</h1>
        </div>
        <div className="border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img className="h-24 w-24" src={cardimage4} alt="Employee Data Visibility" />
          <h1 className="text-center mt-4 text-lg font-semibold">Empower your employees with self-service portals</h1>
        </div>
      </div>

      <div className="text-4xl text-center font-semibold py-6">
        <h1>Secure Employee Database Management</h1>
      </div>

      <div className="w-full text-center px-4 mb-6">
        <h3 className="text-lg w-1/3  text-wrap  md:text-xl">
          Seamless and secure is the motto we live by. We ensure that the privacy of
          business and employee data gets the foremost attention. Here's how we handle security.
        </h3>

      </div>

      {/* Middle Images */}
      <div className="flex flex-col md:flex-row justify-evenly items-center px-4">
        <div className="flex flex-col items-center mb-6 md:mb-0 w-full md:w-1/2">
          <img className="h-48 w-full mb-2 object-cover" src={middleimage1} alt="Secure password management" />
          <h1 className="text-center text-lg md:text-xl font-semibold mt-2">Secure password management using Zoho Vault</h1>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2">
          <img className="h-48 w-full mb-2 object-cover" src={middleimage2} alt="Shielded access to employee info" />
          <h1 className="text-center text-lg md:text-xl font-semibold mt-2">Shielded access to employee info</h1>
        </div>
      </div>


      <div className="text-center px-4 py-6">
        <h1 className="text-3xl font-semibold">Employee Project Management</h1>
        <h3 className="text-lg md:text-xl mt-4">Our platform provides an efficient way to manage employees and track performance, all within a secure, customizable environment.</h3>
      </div>

      {/* Employee Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        <div className="flex justify-center items-center h-60 w-60 bg-slate-300 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <img className="h-24 w-24 rounded-full" src={employee} alt="Employee" />
            <h1 className="mt-4 text-xl font-bold">Prakhar</h1>
            <h3 className="text-gray-600">Backend Developer</h3>
            <h2 className="text-gray-500">Devine</h2>
          </div>
        </div>
        <div className="flex justify-center items-center h-60 w-60 bg-slate-300 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <img className="h-24 w-24 rounded-full" src={employee} alt="Employee" />
            <h1 className="mt-4 text-xl font-bold">Prakhar</h1>
            <h3 className="text-gray-600">Backend Developer</h3>
            <h2 className="text-gray-500">Devine</h2>
          </div>
        </div>
        <div className="flex justify-center items-center h-60 w-60 bg-slate-300 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <img className="h-24 w-24 rounded-full" src={employee} alt="Employee" />
            <h1 className="mt-4 text-xl font-bold">Prakhar</h1>
            <h3 className="text-gray-600">Backend Developer</h3>
            <h2 className="text-gray-500">Devine</h2>
          </div>
        </div>
        <div className="flex justify-center items-center h-60 w-60 bg-slate-300 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <img className="h-24 w-24 rounded-full" src={employee} alt="Employee" />
            <h1 className="mt-4 text-xl font-bold">Prakhar</h1>
            <h3 className="text-gray-600">Backend Developer</h3>
            <h2 className="text-gray-500">Devine</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
