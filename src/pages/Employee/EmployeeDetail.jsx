import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../Constants';
import { IoIosArrowDropdownCircle } from "react-icons/io";

const EmployeeDetail = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    const fetchEmployee = async () => {
        try {
            const response = await fetch(`${baseUrl}/${id}/`);

            if (!response.ok) {
                throw new Error(`Failed to fetch employee data, status code: ${response.status}`);
            }
            const data = await response.json();
            setEmployee(data);
            // console.log(data)
            // console.log(employee.projects[1],"this is project")
        } catch (err) {
            console.error("Error fetching employee data:", err);
        }
    };

    useEffect(() => {
        fetchEmployee();
    }, [id]);

    // console.log(employee!=null && employee.projects[0])

    return (
        <>
            <div className=' flex flex-col md:flex-row justify-center items-center w-[80%] mx-auto'>
                {/* Image Card */}
                <div className='w-full md:w-1/3 p-4'>
                    <div className='rounded-lg  p-6'>
                        <img
                            className='h-48 w-48 md:h-96 md:w-96 mx-auto object-cover rounded-full border-2 transition-transform transform 
                        hover:scale-105 hover:shadow-lg hover:border-gray-400 duration-300 ease-in-out'
                            src={employee?.employee_data.Profile_image}
                            alt="Employee"
                        />
                    </div>
                </div>

                {/* Info Card */}
                <div className='w-full md:w-2/3 p-4'>
                    <div className='bg-white rounded-lg  p-6'>
                        <h1 className="text-xl md:text-3xl font-bold text-center bg-gray-200 text-slate-900 p-2 rounded">Employee Details</h1>
                        <div className='flex justify-center items-center text-center'>
                            <div className="flex flex-col  justify-center   md:items-start mt-6 space-y-4 md:space-y-6 text-lg md:text-2xl text-gray-700">
                                <p><strong>Name:</strong> {employee?.employee_data.Employee_name}</p>
                                <p><strong>Designation:</strong> {employee?.employee_data.Designation}</p>
                                <p className='break-words'><strong>Skills:</strong> {employee?.employee_data.Skills}</p>
                                <p><strong>Date of Joining:</strong> {employee?.employee_data.Joining_date}</p>
                                <p><strong>Email:</strong> {employee?.employee_data.email}</p>
                                {/* <h1>{employee!=null && employee.projects[0].name}</h1> */}
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Project Selection */}
            <div className='text-center'>
      <label className='text-2xl font-semibold' htmlFor="projects">Projects</label>
      <div>
        <ul className=''>
          {employee && employee.projects && employee.projects.length > 0 ? (
            employee.projects.map((project, index) => (
              <li key={index} className='flex border-2 h-10 shadow-lg mb-5  items-center justify-center'>
              
                {project.name}  <IoIosArrowDropdownCircle className='mr-2 text-2xl'  
              
                />
              </li>
            ))
          ) : (
            <li>No projects available</li>
          )}
        
        </ul>
      </div>
      </div> 

        </>
    );
};

export default EmployeeDetail;
