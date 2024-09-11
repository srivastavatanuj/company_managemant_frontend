import React from 'react'
import Address from "../FooterCmponent/Address";
import { Link } from 'react-router-dom';

const FooterText = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between mt-10 space-y-6 sm:space-y-0 sm:space-x-6">
            <div className="w-full sm:w-auto">
                <Address />
            </div>

            <div className="w-full sm:w-auto">
                <h1 className="font-semibold">Our Product</h1>
                <ul className="space-y-1">
                    <li><Link to="/" className=" hover:text-green-900 hover:text">Applicant Attendance</Link></li>
                    <li><Link to="/" className=" hover:text-green-900 hover:text">Tracking System</Link></li>
                    <li><Link to="/" className=" hover:text-green-900 hover:text">Employee Management</Link></li>
                </ul>
            </div>

            {/* <div className="w-full sm:w-auto">
                <h1 className="font-semibold">Our Company</h1>
                <ul className="space-y-2">
                    <Link to="/aboutUs" className=" hover:text-green-900 hover:text">About Us</Link>
                    <li>Careers</li>
                </ul>
            </div> */}

            <div className="w-full sm:w-auto">
                <Link to="/contact" className="font-semibold hover:text-green-900 hover:text">Contact Us</Link>
                <ul className="space-y-2">
                    <li>Mobile</li>
                    <li>Email</li>
                    <li>Connect With Us</li>
                </ul>
            </div>
        </div>
    )
}

export default FooterText
