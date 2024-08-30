import React from 'react';
import { useParams } from 'react-router-dom';
import employeeImage from '../../assets/employee1.png'; // Add the image import
import employeeData from './EmployeeData';

const EmployeeDetail = () => {
    const { id } = useParams();
    const employee = employeeData.find(emp => emp.Employee_id === parseInt(id));

    if (!employee) {
        return <p className="text-center text-red-500">Employee not found</p>;
    }

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-400 to-yellow-500 p-6">
                <div className="flex items-center">
                    <img
                        src={employeeImage}
                        alt="Profile"
                        className="w-20 h-20 rounded-full border-4 border-white"
                    />
                    <div className="ml-4">
                        <h1 className="text-xl font-bold text-white">{employee.Employee_name}</h1>
                        <p className="text-white">{employee.Email}</p>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <h2 className="text-sm font-semibold text-gray-500">Manager</h2>
                        <p className="text-gray-700">{employee.Manager || 'N/A'}</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-gray-500">Office Location</h2>
                        <p className="text-gray-700">{employee.OfficeLocation || 'N/A'}</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-gray-500">Joining Date</h2>
                        <p className="text-gray-700">{employee.Joining_date}</p>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Contact Details</h2>
                    <p className="text-gray-600">Email: {employee.Email}</p>
                    <p className="text-gray-600">Mobile: {employee.Mobile || '(+91) 7389678656'}</p> {/* Adjusted the default mobile number */}
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Skills</h2>
                    <p className="text-gray-600">{employee.Skills}</p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetail;
