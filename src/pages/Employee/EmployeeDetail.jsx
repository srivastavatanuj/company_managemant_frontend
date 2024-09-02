import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import employeeImage from '../../assets/employee1.png';
import { ChevronDown } from 'lucide-react';
import employeeData from './EmployeeData';

const EmployeeDetail = () => {
    const { id } = useParams();
    const employee = employeeData.find(emp => emp.Employee_id === parseInt(id));

    const [isProjectOpen, setIsProjectOpen] = useState(false);

    const toggleProjectSection = () => {
        setIsProjectOpen(!isProjectOpen);
    };

    const projects = [
        { id: 1, name: "Project Alpha", description: "A project focused on AI development." },
        { id: 2, name: "Project Beta", description: "A project focused on cloud infrastructure." },
        { id: 3, name: "Project Gamma", description: "A project focused on blockchain technology." }
    ];

    if (!employee) {
        return <p className="text-center text-red-500">Employee not found</p>;
    }

    return (
        <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-200 p-4">
                <h1 className="text-xl font-bold text-center">Employee details</h1>
            </div>
            <div className="p-6">
                <div className="flex items-start">
                    <img
                        src={employeeImage}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-2 border-gray-300"
                    />
                    <div className="ml-8 flex-grow">
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="font-semibold pr-4">Name:</td>
                                    <td>{employee.Employee_name}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold pr-4">Designation:</td>
                                    <td>{employee.Designation}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold pr-4">Skills:</td>
                                    <td>{employee.Skills}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold pr-4">Date of joining:</td>
                                    <td>{employee.Joining_date}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold pr-4">Email:</td>
                                    <td>{employee.Email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 p-4 flex justify-between items-center cursor-pointer" onClick={toggleProjectSection}>
                <span className="font-semibold">Projects</span>
                <ChevronDown size={20} className={`${isProjectOpen ? 'transform rotate-180' : ''}`} />
            </div>

            {isProjectOpen && (
                <div className="p-6 bg-gray-50">
                    <ul className="space-y-4">
                        {projects.map(project => (
                            <li key={project.id} className="border-b pb-2">
                                <h3 className="font-semibold text-lg">{project.name}</h3>
                                <p className="text-sm text-gray-600">{project.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default EmployeeDetail;
