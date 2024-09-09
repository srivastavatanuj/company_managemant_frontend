import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../Constants';

const EmployeeDetail = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    // console.log(baseUrl)

    const fetchEmployee = async () => {
        try {
            const response = await fetch(`${baseUrl}/${id}/`);
           
            if (!response.ok) {
                throw new Error(`Failed to fetch employee data, status code: ${response.status}`);
            }
            const data = await response.json();
            // console.log(data,"data............")
            // console.log(response, "response ")
            // console.log(employee.employee_data.Profile_image,".....")
            setEmployee(data);
        } catch (err) {
            console.error("Error fetching employee data:", err);
        }   
    };

    useEffect(() => {
        fetchEmployee();
    }, [id]);

    return (
        <div className='max-w-5xl h-full w-full p-4 md:p-8 my-16 mx-auto shadow-md'>
            <h1 className="text-xl md:text-3xl font-bold text-center bg-gray-200 text-slate-900 p-2">Employee Details</h1>

            <div className="flex flex-col md:flex-row items-center justify-between mt-6">
                <div className='mb-6 md:mb-0 md:w-1/2 flex justify-center'>
                    <img
                        className='h-48 w-48 md:h-96 md:w-96 mt-10 object-cover rounded-full border-2 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-gray-400 duration-300 ease-in-out'
                        src={employee?.employee_data.Profile_image}
                        alt="Employee"
                    />
                </div>
                <div className="text-gray-700 text-lg md:text-2xl mt-12 space-y-4 md:space-y-7 text-center md:text-left md:w-1/2 transition-colors hover:text-gray-900 duration-300 ease-in-out">
                    <p><strong>Name:</strong> {employee?.employee_data.Employee_name}</p>
                    <p><strong>Designation:</strong> {employee?.employee_data.Designation}</p>
                    <p className='break-words'><strong>Skills:</strong> {employee?.employee_data.Skills}</p>
                    <p><strong>Date of Joining:</strong> {employee?.employee_data.Joining_date}</p>
                    <p><strong>Email:</strong> {employee?.employee_data.email}</p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetail;
