import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EmployeeDetail = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await fetch(`https://kashishpal123.pythonanywhere.com/employees/retrieve-employee/${id}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch employee data, status code: ${response.status}`);
                }
                const data = await response.json();
                setEmployee(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchEmployee();
    }, [id]);

    if (loading) {
        return <p className="text-center mt-4">Loading...</p>;
    }

    if (error) {
        return <p className="text-center mt-4 text-red-500">Error: {error}</p>;
    }

    if (!employee) {
        return <p className="text-center mt-4">Employee not found or does not exist</p>;
    }

    return (
        <div className='w-2/4 h-80 my-16 mx-auto shadow-md ' >
            <h1 className="text-xl font-bold text-center bg-gray-200 text-slate-900">Employee Details</h1>

            <div className=" flex  justify-between">
                <div className='my-auto'>
                    <img className='h-32 object-cover w-32 mt-10 rounded-full border-2 ml-10' src={employee.Profile_image} alt="img" />
                </div>
                <div className="space-y-4  text-gray-700 mt-12">
                    <p><strong>Name:</strong> {employee.Employee_name}</p>
                    <p><strong >Designation:</strong> {employee.Designation}</p>
                    <p className=' text-wrap w-96'><strong >Skills:</strong> {employee.Skills}</p>
                    <p><strong>Date of Joining:</strong> {employee.Joining_date}</p>
                    <p><strong >Email:</strong> {employee.email}</p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetail;
