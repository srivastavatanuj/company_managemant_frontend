import React from 'react'
import Address from "../FooterCmponent/Address";
import { Link } from 'react-router-dom';

const FooterText = () => {
    return (
        <div className="flex justify-around mt-4 md:justify-between ">
            <div>
                <Address />

            </div>
            <div className="">
                <Link to="/contact" className="font-semibold hover:text-green-900 hover:text">Contact Us</Link>
                <ul className=" text-sm">
                    <li>Mobile</li>
                    <li>Email</li>
                    <li>Connect With Us</li>
                </ul>
            </div>
        </div>
    )
}

export default FooterText
