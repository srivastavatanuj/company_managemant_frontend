import React from 'react'
import Address from "../FooterCmponent/Address";

const FooterText = () => {
  return (
         <div className="flex flex-col sm:flex-row justify-between mt-10 space-y-6 sm:space-y-0 sm:space-x-6">
                    <div className="w-full sm:w-auto">
                        <Address />
                    </div>

                    <div className="w-full sm:w-auto">
                        <h1 className="font-semibold">Our Product</h1>
                        <ul className="space-y-2">
                            <li>Applicant Attendance</li>
                            <li>Tracking System</li>
                            <li>Employee Management</li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-auto">
                        <h1 className="font-semibold">Our Company</h1>
                        <ul className="space-y-2">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-auto">
                        <h1 className="font-semibold">Contact Us</h1>
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
