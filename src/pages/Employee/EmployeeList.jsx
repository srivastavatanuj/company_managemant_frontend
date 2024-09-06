import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import icon from "../../assets/images/profile_icon.png"

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(
          "https://kashishpal123.pythonanywhere.com/employees/employee-list/"
        );

        if (!response.ok) {
          setLoading(false);

          navigate("/errorpage");

          throw new Error("Failed to fetch employee data");
        }

        const data = await response.json();

        setEmployees(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching employee data");
        setLoading(false);
      }
    };
    fetchEmployeeData();
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-4 text-red-500">Error: {error}</p>;
  }

  return (
    <div className="p-4 sm:p-6 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-purple-600">
        Employee List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {employees.map((employee) => (
          <Link
            to={`/employee/${employee.Employee_id}`}
            key={employee.Employee_id}
            className="block"
          >
            <div className="bg-[#e7e0e0] p-4 sm:p-6 rounded-lg w-full h-full">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center">
                  <img
                    src={employee.Profile_image || icon}
                    alt="img"
                    className="h-full w-full object-cover border-4  rounded-full"
                  />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-black mt-4">
                  {employee.Employee_name}
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  {employee.Designation}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
