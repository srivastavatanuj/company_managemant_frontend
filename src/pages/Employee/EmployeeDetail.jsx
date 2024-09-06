import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const EmployeeDetail = () => {
    // const { id } = useParams();
    // console.log(id)
    const id = 123456
    const [employee, setEmployee] = useState(null);
    const [test,setTest]=useState(5)

    const fetchEmployee = async () => {
        try {
            const response = await fetch(`{https://kashishpal123.pythonanywhere.com/employees/retrieve-employee/}${id}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch employee data, status code: ${response.status}`);
            }
            const data = await response.json();
            console.log(data)
            setEmployee(data);
        } catch (err) {
            console.error("Error fetching employee data:", err);
        }
    };


    useEffect(() => {
        fetchEmployee();
        {console.log("2",employee)}
        setTest(10)
    }, [id]);

    {console.log("3",employee)}

    return (
        <div className='max-w-4xl w-full p-4 md:p-8 my-16 mx-auto shadow-md'>
            <h1 className="text-xl md:text-2xl font-bold text-center bg-gray-200 text-slate-900 p-2">Employee Details</h1>

            <div className="flex flex-col md:flex-row items-center justify-between mt-6">
                <div className='mb-6 md:mb-0'>
                    {console.log("1",employee)}
                    {console.log("1678687",test )}
                    <img
                        className='h-40 w-40 md:h-64 md:w-64 object-cover rounded-full border-2'
                        src={employee?.Profile_image}
                        alt="Employee"
                    />
                </div>
                <div className="text-gray-700 space-y-4 md:space-y-7 text-center md:text-left">
                    <p><strong>Name:</strong> {employee?.Employee_name}</p>
                    <p><strong>Designation:</strong> {employee?.Designation}</p>
                    <p className='text-wrap'><strong>Skills:</strong> {employee?.Skills}</p>
                    <p><strong>Date of Joining:</strong> {employee?.Joining_date}</p>
                    <p><strong>Email:</strong> {employee?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetail;