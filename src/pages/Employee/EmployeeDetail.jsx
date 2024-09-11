import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../Constants';

const EmployeeDetail = () => {
    const { id } = useParams(); // Get the employee ID 
    const [employee, setEmployee] = useState(null); // State to employee data
    const [showProjects, setShowProjects] = useState(false); // State tp project visibility
    const [selectedProject, setSelectedProject] = useState(null); // State to  selected project

    
    const fetchEmployee = async () => {
        try {
            const response = await fetch(`${baseUrl}/${id}/`); // Fetch employee data using the ID

            if (!response.ok) {
                throw new Error(`Failed to fetch employee data, status code: ${response.status}`);
            }

            const data = await response.json(); // Parse the JSON data
            setEmployee(data); // Set the employee data to state

        } catch (err) {
            console.error("Error fetching employee data:", err); // Handle any errors
        }
    };

    useEffect(() => {
        fetchEmployee(); 
    }, [id]);

    // Function to toggle project visibility
    const toggleProjects = () => {
        setShowProjects(!showProjects);
    };

    // Function to toggle tasks for a specific project
    const showTasks = (projectId) => {
        if (selectedProject && selectedProject.id === projectId) {
            setSelectedProject(null);
        } else {
            const project = employee.projects.find(proj => proj.id === projectId);
            setSelectedProject(project);
        }
    };

    return (
        <>
            <div className='flex flex-col md:flex-row justify-center items-center w-[80%] mx-auto'>
                {/* Image Card */}
                <div className='w-full md:w-1/3 p-4'>
                    <div className='rounded-lg p-6'>
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
                    <div className='bg-white rounded-lg p-6'>
                        <h1 className="text-xl md:text-3xl font-bold text-center bg-gray-200 text-slate-900 p-2 rounded">
                            Employee Details
                        </h1>
                        <div className='flex justify-center items-center text-center'>
                            <div className="flex flex-col justify-center md:items-start mt-6 space-y-4 md:space-y-6 text-lg md:text-2xl text-gray-700">
                                <p><strong>Name:</strong> {employee?.employee_data.Employee_name}</p>
                                <p><strong>Designation:</strong> {employee?.employee_data.Designation}</p>
                                <p className='break-words'><strong>Skills:</strong> {employee?.employee_data.Skills}</p>
                                <p><strong>Date of Joining:</strong> {employee?.employee_data.Joining_date}</p>
                                <p><strong>Email:</strong> {employee?.employee_data.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Selection */}
            <div className='flex justify-center'>
                <div className='text-center w-1/3 border-2'>
                    <label className='text-2xl font-semibold cursor-pointer' onClick={toggleProjects}>
                        Projects
                    </label>
                    {showProjects && (
                        <div>
                            <ul>
                                {employee && employee.projects && employee.projects.length > 0 ? (
                                    employee.projects.map((project) => (
                                        <li key={project.id} className='border-2 shadow-lg mb-5 p-2'>
                                            <span className='text-lg cursor-pointer' onClick={() => showTasks(project.id)}>
                                                {project.name}
                                            </span>
                                            {selectedProject && selectedProject.id === project.id && (
                                                <div>
                                                    <ul>
                                                        {project.tasks.length > 0 ? (
                                                            project.tasks.map(task => (
                                                                <li key={task.id} className="ml-4">
                                                                    <p><strong>Task:</strong> {task.name}</p>
                                                                    <p><strong>Start Date:</strong> {task.start_date}</p>
                                                                    <p><strong>Deadline:</strong> {task.deadline}</p>
                                                                    <p><strong>Comments:</strong> {task.comments}</p>
                                                                    <p><strong>Status:</strong> {task.status}</p>
                                                                </li>
                                                            ))
                                                        ) : (
                                                            <li>No tasks available</li>
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                    ))
                                ) : (
                                    <li>No projects available</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default EmployeeDetail;
