import React from 'react'
import attendence from '../../assets/attendence.png';

const Employee = () => {
  return (
    <div className='mx-20 mt-14'>
      <div className="text-xl sm:text-2xl text-center mt-8 sm:mt-12 md:text-2xl font-semibold lg:text-3xl">
        <h1>Employee Onboarding Management</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-4">
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="text-lg sm:text-xl font-semibold lg:text-2xl text-center md:text-left">
            Attendance management that empowers your workforce
          </h1>
          <h2 className="mt-2 text-center text-sm sm:text-base lg:text-lg">
            Bid farewell to tedious excel sheets, and say hello to a more efficient way to manage employee attendance.
            Generate insightful reports, regularize attendance, and empower your on-site and remote employees to check in
            from anywhere with our cloud-based attendance management system.
          </h2>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
          <img className="h-auto w-full max-w-md object-cover rounded-md" src={attendence} alt="Attendance Management" />
        </div>
      </div>
    </div>
  )
}

export default Employee;
