import React from 'react';
import { useParams } from 'react-router-dom';
import employeeData from './EmployeeData';

const EmployeeDetail = () => {
    const { id } = useParams();
    const employee = employeeData.find(emp => emp.Employee_id === parseInt(id));

    if (!employee) {
        return <p className="text-center text-red-500">Employee not found</p>;
    }
    return (
        <div className=" flex items-center justify-center min-h-screen
      bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700
          p-4 ">
            <div className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900
             rounded-lg shadow-lg p-6 w-full max-w-md">
                <h1 className="text-3xl font-bold mb-4 text-white">{employee.Employee_name}</h1>
                <div className='text-slate'>
                    <p><strong>Email:</strong> {employee.Email}</p>
                    <p><strong>Joining Date:</strong> {employee.Joining_date}</p>
                    <p><strong>Skills:</strong> {employee.Skills}</p>
                    <p><strong>Designation:</strong> {employee.Designation}</p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetail;
