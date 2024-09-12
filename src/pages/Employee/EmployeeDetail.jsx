import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../Constants';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const EmployeeDetail = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    const [expandedProjects, setExpandedProjects] = useState({});

    const fetchEmployee = async () => {
        try {
            const response = await fetch(`${baseUrl}/${id}/`);
            if (!response.ok) {
                throw new Error(`Failed to fetch employee data, status code: ${response.status}`);
            }

            const data = await response.json();
            setEmployee(data);

        } catch (err) {
            console.error("Error fetching employee data:", err);
        }
    };

    useEffect(() => {
        fetchEmployee();
    }, [id]);

    //toggle project expansion
    const handleToggle = (projectId) => {
        setExpandedProjects(prevState => ({
            ...prevState,
            [projectId]: !prevState[projectId]
        }));
    };

    return (
        <div className='p-4 md:p-8'>
            <div className='flex flex-col md:flex-row justify-center items-start md:items-center w-full max-w-6xl mx-auto'>
                {/* Image Card */}
                <div className='w-full md:w-1/3 p-4 flex justify-center'>
                    <img
                        className='h-48 w-48 md:h-80 md:w-80 object-cover rounded-full shadow-md'
                        src={employee?.employee_data.Profile_image}
                        alt="Employee"
                    />
                </div>

                {/* Info Card */}
                <div className='w-full md:w-2/3 p-4'>
                    <div className='bg-white rounded-lg p-6 shadow-md'>
                        <h1 className="text-xl md:text-2xl font-bold text-center bg-gray-200 text-slate-900 p-2 rounded">
                            Employee Details
                        </h1>
                        <div className='mt-6 space-y-4 text-lg text-gray-700'>
                            <p><strong>Name:</strong> {employee?.employee_data.Employee_name}</p>
                            <p><strong>Designation:</strong> {employee?.employee_data.Designation}</p>
                            <p className='break-words'><strong>Skills:</strong> {employee?.employee_data.Skills}</p>
                            <p><strong>Date of Joining:</strong> {employee?.employee_data.Joining_date}</p>
                            <p><strong>Email:</strong> {employee?.employee_data.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project and Task Display */}
            <div className='md:flex justify-start md:mt-6 '>
                <div className='w-full'>
                    <h2 className='text-2xl md:w-1/3 font-semibold text-center bg-gray-200 p-2 rounded'>
                        Projects and Tasks
                    </h2>
                    <div className='w-full '>
                        {employee && employee.projects && employee.projects.length > 0 ? (
                            <ul className='divide-y divide-gray-200'>
                                {employee.projects.map((project) => (
                                    <li key={project.id} className='border-2 border-gray-200 shadow-lg mb-5 p-4 rounded'>
                                        <div
                                            className='flex items-center justify-between cursor-pointer'
                                            onClick={() => handleToggle(project.id)}
                                        >
                                            <h3 className='text-lg font-semibold'>
                                                {project.name}
                                            </h3>
                                            {expandedProjects[project.id] ? (
                                                <FaCaretUp />
                                            ) : (
                                                <FaCaretDown />
                                            )}
                                        </div>
                                        {expandedProjects[project.id] && project.tasks.length > 0 ? (
                                            <ul className='ml-4 mt-2'>
                                                {project.tasks.map(task => (
                                                    <li key={task.id} className="mb-3">
                                                        <p><strong>Task:</strong> {task.name}</p>
                                                        <p><strong>Start Date:</strong> {task.start_date}</p>
                                                        <p><strong>Deadline:</strong> {task.deadline}</p>
                                                        <p><strong>Comments:</strong> {task.comments}</p>
                                                        <p><strong>Status:</strong> {task.status}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            expandedProjects[project.id] && <p>No tasks available</p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className='text-center'>No projects available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetail;
