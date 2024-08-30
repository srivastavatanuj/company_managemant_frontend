import React from 'react';
import { Link } from 'react-router-dom';
import employeeData from './EmployeeData';
import employeeImage from '../../assets/employee1.png';

const EmployeeList = () => {
    return (
        <div className="p-4 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {employeeData.map(employee => (
                    <Link to={`/employee/${employee.Employee_id}`} key={employee.Employee_id}>
                        <div className="rounded-[27px] bg-[#e0e0e0] shadow-[14px_14px_22px_#777777,-14px_-14px_22px_#ffffff] w-full h-auto overflow-hidden 
                        transform hover:scale-105 transition-transform duration-300 flex flex-col items-center p-4">
                            <div className="w-48 h-48 flex items-center justify-center">
                                <img
                                    src={employeeImage}   // Static Image
                                    alt='employee Image'
                                    className="w-24 h-24 object-cover rounded-full"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h2 className="text-xl font-bold mb-2 text-slate-950">{employee.Employee_name}</h2>   {/* Name of User */}
                                <p className="text-slate-800">{employee.Designation}</p>  {/* Designation */}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default EmployeeList;
