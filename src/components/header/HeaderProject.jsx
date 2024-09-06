import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const HeaderProject = () => {
    const [isOpen, setIsOpen] = useState(false);

    const isMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={isMenu}
                    className="text-1xl text-gray-700 inline-flex w-full justify-center">
                    Project
                    <RiArrowDropDownLine className="w-6 h-6" />
                </button>
            </div>

            {isOpen && (
                <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-transform duration-100 ease-out">
                    <div className="py-1">
                        <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            <Link to="/add-project" className="text-gray-700 hover:text-gray-900">Add Project</Link>
                        </a>
                        <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                            <Link to="/project" className="text-gray-700 hover:text-gray-900">Projects</Link>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HeaderProject;
