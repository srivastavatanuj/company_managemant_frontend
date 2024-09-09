import React from 'react';
import employee from '../../assets/employee.png';

const EmployeeManagement = () => {
  return (
    <div className="mt-14 mx-4 sm:mx-10 md:mx-20 lg:mx-40">
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold mt-4 sm:mt-5">
          Employee Project Management
        </h1>
        <h3 className="text-base sm:text-lg md:text-xl mt-4 mx-auto max-w-3xl">
          Our platform provides an efficient way to manage employees and track performance, all within a secure, customizable environment.
        </h3>
      </div>

      {/* Employee Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mt-8">
        {Array(4)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="flex justify-center items-center border-red-200 border-2 h-48 w-48 sm:h-56 sm:w-56 md:h-60 md:w-60 bg-[#e7e0e0] rounded-lg shadow-lg"
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full"
                  src={employee}
                  alt="Employee"
                />
                <h1 className="mt-2 sm:mt-4 text-lg sm:text-xl font-bold">Prakhar</h1>
                <h3 className="text-gray-600 text-sm sm:text-base">Backend Developer</h3>
                <h2 className="text-gray-500 text-sm sm:text-base">Devine</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EmployeeManagement;
