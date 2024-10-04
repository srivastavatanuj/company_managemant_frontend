import React from "react";
import employee from "../../assets/employee.png";

const EmployeeManagement = () => {
  return (
    <div className="mt-6 sm:mt-14 mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-32">
      <div className="text-center">
        <div className="text-4xl font-bold md:text-3xl text-center ">
          <h1> Employee Project Management</h1>
        </div>

        <h3 className="font-normal text-base md:text-xl lg:w-1/2 mt-5 mx-auto">
          Our platform provides an efficient way to manage employees and track
          performance, all within a secure, customizable environment.
        </h3>
      </div>

      {/* Employee Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 justify-items-center mt-8">
        <div className="flex flex-col justify-center items-center border-gray-200 border-2 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 bg-[#e7e0e0] rounded-lg shadow-lg">
          <img
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full"
            src={employee}
            alt="Employee"
          />
          <h1 className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl font-bold">
            Prakhar
          </h1>
          <h3 className="text-gray-600 text-sm sm:text-base md:text-lg">
            Backend Developer
          </h3>
          <h2 className="text-gray-500 text-sm sm:text-base md:text-lg">
            Divine
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center border-gray-200 border-2 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 bg-[#e7e0e0] rounded-lg shadow-lg">
          <img
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full"
            src={employee}
            alt="Employee"
          />
          <h1 className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl font-bold">
            Prakhar
          </h1>
          <h3 className="text-gray-600 text-sm sm:text-base md:text-lg">
            Backend Developer
          </h3>
          <h2 className="text-gray-500 text-sm sm:text-base md:text-lg">
            Divine
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center border-gray-200 border-2 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 bg-[#e7e0e0] rounded-lg shadow-lg">
          <img
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full"
            src={employee}
            alt="Employee"
          />
          <h1 className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl font-bold">
            Prakhar
          </h1>
          <h3 className="text-gray-600 text-sm sm:text-base md:text-lg">
            Backend Developer
          </h3>
          <h2 className="text-gray-500 text-sm sm:text-base md:text-lg">
            Divine
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center border-gray-200 border-2 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 bg-[#e7e0e0] rounded-lg shadow-lg">
          <img
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full"
            src={employee}
            alt="Employee"
          />
          <h1 className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl font-bold">
            Prakhar
          </h1>
          <h3 className="text-gray-600 text-sm sm:text-base md:text-lg">
            Backend Developer
          </h3>
          <h2 className="text-gray-500 text-sm sm:text-base md:text-lg">
            Divine
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
