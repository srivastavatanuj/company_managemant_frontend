import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = () => {


    const [employees, setEmployees] = useState([]);


    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const response = await fetch('https://kashishpal123.pythonanywhere.com/employees/employee-list/');
                // console.log(response, "Api checking")
                if (!response.ok) {
                    throw new Error('Failed to fetch employee data');

                }
                const data = await response.json();
                setEmployees(data);


            } catch (error) {


            }
        };
        fetchEmployeeData();
    }, []);


    return (
        <div className="p-4 mx-12 sm:p-6">

            <h1 className="text-2xl  sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Employee List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {employees.map((employee) => (
                    <Link to={`/employee/${employee.Employee_id}`} key={employee.Employee_id} >
                        <div className="bg-gradient-to-b rounded-xl to-[#858282] from-[#EBE5E5]  sm:p-6 w-full h-64 transform transition hover:scale-105 hover:shadow-2xl">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center">
                                    <img src={employee.Profile_image} alt='img' className="h-full w-full object-cover border-4  rounded-full" />
                                </div>
                                <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-4">{employee.Employee_name}</h2>
                                <p className="text-sm sm:text-base text-slate-900">{employee.Designation}</p>
                            </div>
                        </div>
                    </Link>
                ))}


              
            </div>
        </div>

    );
};

export default EmployeeList;