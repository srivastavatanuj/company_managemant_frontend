import React from 'react';
import { Link } from 'react-router-dom';
import employeeData from './EmployeeData';
import employeeImage from '../../assets/employee1.png';

const EmployeeList = () => {
    return (
        <div className="p-4">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {employeeData.map(employee => (
                    <Link to={`/employee/${employee.Employee_id}`} key={employee.Employee_id}>
                        <div className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900
                        rounded-lg shadow-white overflow-hidden transform hover:scale-105 
                        transition-transform duration-300 flex flex-col items-center">
                            <div className="w-48 h-48 flex items-center justify-center">
                                <img
                                    src={employeeImage}   // Its is a Static Image
                                    alt='employee Image'
                                    className="w-24 h-24 object-cover rounded-full"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h2 className="text-xl font-bold mb-2 text-slate-950">{employee.Employee_name}</h2>   {/* Here  Name of User */}
                                <p className="text-white">{employee.Designation}</p>  {/* Here Designation */}
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    );
};

export default EmployeeList;
