import React from 'react';
import { Link } from 'react-router-dom';
import add1 from '../../assets/add1.png';
import add2 from '../../assets/add2.png';
import add3 from '../../assets/add3.png';
import add4 from '../../assets/add4.png';

const Add = () => {
    return (
        <div className="flex justify-center items-center flex-wrap gap-10 my-20">
            <Link
                to="/addemployee"
                className="flex flex-col h-64 w-72 bg-gradient-to-b from-slate-400 to-slate-600 shadow-lg rounded-lg overflow-hidden"
            >
                <div className="flex justify-center items-center h-3/4">
                    <img
                        className="w-24 h-24 object-cover"
                        src={add4}
                        alt="Add Employee"
                    />
                </div>
                <div className="p-4 flex items-center justify-center">
                    <h2 className="text-lg text-center font-bold">
                        Add Employee
                    </h2>
                </div>
            </Link>
            <Link
                to="/add-project"
                className="flex flex-col h-64 w-72 bg-gradient-to-b from-slate-400 to-slate-600 shadow-lg rounded-lg overflow-hidden"
            >
                <div className="flex justify-center items-center h-3/4">
                    <img
                        className="w-24 h-24 object-cover"
                        src={add2}
                        alt="Add Project"
                    />
                </div>
                <div className="p-4 flex items-center justify-center">
                    <h2 className="text-lg text-center font-bold">
                        Add Project
                    </h2>
                </div>
            </Link>
            <Link
                to="/addtasks"
                className="flex flex-col h-64 w-72 bg-gradient-to-b from-slate-400 to-slate-600 shadow-lg rounded-lg overflow-hidden"
            >
                <div className="flex justify-center items-center h-3/4">
                    <img
                        className="w-24 h-24 object-cover"
                        src={add3}
                        alt="Add Tasks"
                    />
                </div>
                <div className="p-4 flex items-center justify-center">
                    <h2 className="text-lg text-center font-bold">
                        Add Tasks
                    </h2>
                </div>
            </Link>
            <Link
                to="/assigntasks"
                className="flex flex-col h-64 w-72 bg-gradient-to-b from-slate-400 to-slate-600 shadow-lg rounded-lg overflow-hidden"
            >
                <div className="flex justify-center items-center h-3/4">
                    <img
                        className="w-24 h-24 object-cover"
                        src={add1}
                        alt="Assign Tasks"
                    />
                </div>
                <div className="p-4 flex items-center justify-center">
                    <h2 className="text-lg text-center font-bold">
                        Assign Tasks
                    </h2>
                </div>
            </Link>
        </div>
    );
};

export default Add;
